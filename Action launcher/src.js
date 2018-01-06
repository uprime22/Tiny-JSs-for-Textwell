(function(){
"use strict";

//Action name list
var list =[
"Simplenote",
"Twitter",
"Search with Google.com",
"ReCard",
];



var llary =[];
for(var i=0,l=list.length;i<l;i++){
  (function(e){
    var name = list[e];
    var fn = function(obj){
          T("done",
          {nextAction:obj.txt}
          );
        };
    llary[e]={
      title:name,
      fn:fn,
      arg:{txt:name},
    };
  }(i));
};

T.loadlets(
  llary,
  function(){
  location="about:blank"}
);

}());
