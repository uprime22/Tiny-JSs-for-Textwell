var prefix = '    ';
var text = T.text;
var selectionStart = T.range.loc;
var selectionEnd = selectionStart + T.range.len;
var hitLines = [];
var pointerStart = 0;
var pointerEnd = 0;
var lines = text.split( '\n' );
var replacingRangeLoc = 0;
for ( var i = 0, l = lines.length; i < l; i++ ) {
  var lineString = lines[ i ];
  var pointerEnd = pointerStart + lineString.length;
  if ( pointerStart > selectionEnd ) {
    break;
  };
  if (
    ( pointerStart <= selectionStart && selectionStart <= pointerEnd ) ||
    ( pointerStart <= selectionEnd && selectionEnd <= pointerEnd ) ||
    ( selectionStart < pointerStart && pointerEnd < selectionEnd )
  ) {
    if ( hitLines.length === 0 ) replacingRangeLoc = pointerStart;
    hitLines.push( lineString );
  };
  pointerStart = pointerEnd + 1; // 1 means a line break.
};
var replacingText = hitLines.join( '\n' );
var replacingRangeLen = replacingText.length;
var re = new RegExp( '(^.*$)', 'gm' );
var insertingText = replacingText.replace( re, prefix + '$1' ); // Add prefix.
T( 'replaceRange', {
  text: insertingText,
  replacingRange: { loc: replacingRangeLoc, len: replacingRangeLen },
  selectingRange: { loc: replacingRangeLoc + insertingText.length, len: 0 }
} );