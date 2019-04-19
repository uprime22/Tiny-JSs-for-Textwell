var my = {};

// Timestamp;
function Zero(n){return (n<10) ? '0'+n : n};
var d = new Date();
my.year=d.getFullYear();
my.month=Zero(
    d.getMonth()+1);
my.date=Zero(
    d.getDate());


var now = 
my.year
+'-'+ my.month
+'-'+ my.date
+' '+Zero(d.getHours())+':'+Zero(d.getMinutes());

my.text = now + '\n\n' + T.whole + '\n\n' + '---'+ '\n\n';
// your key
my.key = 'hogehoge';
// target repogitory
my.repo = 'my%20repo';
// path name
my.path = my.year+'_'+my.month+'_'+'log.txt';

T( 'urlScheme', {
  url: 'working-copy://x-callback-url/write?key='
  +my.key
  +'&repo='
  +my.repo
  +'&path='
  +my.path
+'&mode=prepend&clipboard=no&text='
+ encodeURIComponent(my.text),
  option: 'none'
} );

