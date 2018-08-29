

<!DOCTYPE html>
<html>

<meta charset="utf-8">
<title>Markdown-It</title>

<meta name="viewport" content="width=device-width,initial-scale=1">

<section id=doRec></section>

<script>
var srcURL="https://cdn.jsdelivr.net/markdown-it/7.0.0/markdown-it.min.js";

var tag1 = '<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title>Untitled</title>\n<meta name="viewport" content="width=device-width,initial-scale=1">\n</head>\n<body>\n'

var tag2 = '\n</body>\n</html>\n'

function openin(x){
  var xadd ="fail";
  var reHtml =
    new RegExp("<html>","g");
  if (reHtml.test(x)){
    xadd = x;
    }else{
    xadd = tag1+x+tag2;
    };
    
  T('openin',
     {text: xadd,
      encoding:'utf-8',
      filename:makename(
        T.line(1)),
      extension:'html',
      option: 'none',
      }
   );
};

// 日本語英数字ピリオド以外を削除
function makename(s){
  var filename =
    s.replace(/[^\.A-Za-z0-9\u30e0-\u9fcf\u3040-\u309f\u30a0-\u30ff]/gi, '');
  return (filename);
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
    var result =
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
      title:
      'Replace with HTML',
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
