

<!DOCTYPE html>
<html>

<meta charset="utf-8">
<title>Markdown-It</title>

<meta name="viewport" content="width=device-width,initial-scale=1">

<section id=doRec></section>

<script>
var srcURL="https://cdn.jsdelivr.net/markdown-it/7.0.0/markdown-it.min.js";


//var result = "fail";

var tag1 = '<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title>Untitled</title>\n<meta name="viewport" content="width=device-width,initial-scale=1">\n</head>\n<body>\n'

var tag2 = '\n</body>\n</html>\n'

function openin(x){
  T('openin',
     {text: tag1+x+tag2,
      encoding:'utf-8',
      filename:'print',
      extension:'html',
      option: 'none',
      }
   );
};

function getSrc(src){
  var e =
  document.createElement(
  "script");
  e.innerHTML=src;
  document.
  body.appendChild(e);
};

function doMD(){
  var md =
  window.markdownit({
    html: true,
    linkify: true,
    typographer: true
  });
 
  //return直後で改行するとそこで終了するので()付けるよ。
  var result =
  md.render(T.whole);
  return (result);
};

function clbk(x){
    getSrc(
    x.responseText);
    result =
    doMD();
        
    //document.body.
    //innerHTML = result;
    doRec.innerHTML =
    result;
    doclose(result);
};

function doclose(x){
T.closelets(reObj(x));
};

function reObj(xx){
var obj =
      [{
      title: 'HTML出力',
      fn: function(x){
            T('replace',
             {text:
             x.txt});},
      arg: {txt:xx},
      },{
      title:
      'Open as HTML',
      fn: function(x){
         openin(x.txt);},
      arg: {txt:xx},
      },
      ] ;
      return obj;
};
      

T.request({
url:srcURL,
callback: clbk
});



</script>

</html>
