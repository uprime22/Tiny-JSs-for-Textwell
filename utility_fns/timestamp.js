var my ={};
// Timestamp;
function Zero(n){return (n<10) ? '0'+n : n};
var d = new Date();
my.year=d.getFullYear();
my.month=Zero(
    d.getMonth()+1);
my.date=Zero(
    d.getDate());

// ex. 2019-12-06 21:07;
var now = 
my.year
+'-'+ my.month
+'-'+ my.date
+' '+Zero(d.getHours())+':'+Zero(d.getMinutes());
