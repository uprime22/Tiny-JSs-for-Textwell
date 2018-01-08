re = new RegExp('\r\n', 'g' );
var s = T.text.replace( re, '\n' );
T( 'replaceRange', {
  text: s,
  replacingRange: {
    loc: 0,
    len: T.text.length
  },
  selectingRange: T.range
} );
