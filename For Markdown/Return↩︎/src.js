var txt = T.current;
var ptn = /^(\s*)\S*/;

if(ptn.test(txt)){
 var ind = txt.match(ptn)[1];
 var rtn = '\n'+ ind;
 T( 'insert', {
  text: rtn
 } );
}else{
 T('done')
};
