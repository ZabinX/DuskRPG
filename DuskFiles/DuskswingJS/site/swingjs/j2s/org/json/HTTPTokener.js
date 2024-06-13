(function(){var P$=Clazz.newPackage("org.json"),I$=[[0,'StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HTTPTokener", null, 'org.json.JSONTokener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (string) {
;C$.superclazz.c$$S.apply(this,[string]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'nextToken$',  function () {
var c;
var q;
var sb=Clazz.new_($I$(1,1));
do {
c=this.next$();
} while (Character.isWhitespace$C(c));
if (c == "\"" || c == "\'" ) {
q=c;
for (; ; ) {
c=this.next$();
if (c < " ") {
throw this.syntaxError$S("Unterminated string.");
}if (c == q) {
return sb.toString();
}sb.append$C(c);
}
}for (; ; ) {
if (c.$c() == 0  || Character.isWhitespace$C(c) ) {
return sb.toString();
}sb.append$C(c);
c=this.next$();
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
