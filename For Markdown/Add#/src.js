(function(){
"use strict";

var prefix = '#';
var space = ' ';

// 汎用 大概は要らない
function preg_quote (str, delimiter) {return (str + '').replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]', 'g'), '\\$&');};

var esc_pre= preg_quote(prefix);

// 文の先頭を検出
var ptn = /^(\s*)(\S+)/g;

// /^\s*(#)+\s+/ リテラルと同じ。
// 既に一度マークされている場合を検出
var ptntxt2= '^\\s*(' + esc_pre + ')+\\s+';
var ptn2 = new RegExp(ptntxt2);
var spc = "";

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
for ( var j = 0, m = hitLines.length; j < m; j++ ) {
  var hitLine = hitLines[ j ];
  
  if ( hitLine.match( /\S/ ) ) 
  {
   // Ignore blank line
    if (
    // 繰り返し時に空白を付けない
    ptn2.test(hitLine)
    ){
    spc ="";
    }else{
    spc = space;
    };
    hitLines[ j ] = hitLine.replace(ptn,"$1"+ prefix + spc + "$2");
  };
  // 非選択時＆文字無しの時はマーク挿入のみ
  if (m ==1 && 
  hitLine.match( /^\s*$/ )){
  hitLines[ j ] = 
  hitLine.replace(/(^\s*)/,"$1"+ 
  prefix + space);
  };
  
};
var insertingText = hitLines.join( '\n' );
T( 'replaceRange', {
  text: insertingText,
  replacingRange: { loc: replacingRangeLoc, len: replacingRangeLen },
  selectingRange: { loc: replacingRangeLoc + insertingText.length, len: 0 }
} );
}());