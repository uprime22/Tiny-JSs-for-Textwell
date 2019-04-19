s=T.current;

s=s.replace(/\:|\?|\.|"|<|>|\(|\)|\|/g,"_");
s=s.replace(/\s/g,"");

T("replaceCurrent",{text:s});
