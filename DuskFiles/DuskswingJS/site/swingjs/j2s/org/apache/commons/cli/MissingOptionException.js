(function(){var P$=Clazz.newPackage("org.apache.commons.cli"),I$=[[0,'StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MissingOptionException", null, 'org.apache.commons.cli.ParseException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['missingOptions','java.util.List']]]

Clazz.newMeth(C$, 'c$$S',  function (message) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List',  function (missingOptions) {
C$.c$$S.apply(this, [C$.createMessage$java_util_List(missingOptions)]);
this.missingOptions=missingOptions;
}, 1);

Clazz.newMeth(C$, 'getMissingOptions$',  function () {
return this.missingOptions;
});

Clazz.newMeth(C$, 'createMessage$java_util_List',  function (missingOptions) {
var buf=Clazz.new_($I$(1,1).c$$S,["Missing required option"]);
buf.append$S(missingOptions.size$() == 1 ? "" : "s");
buf.append$S(": ");
var it=missingOptions.iterator$();
while (it.hasNext$()){
buf.append$O(it.next$());
if (it.hasNext$()) {
buf.append$S(", ");
}}
return buf.toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
