(function(){var P$=Clazz.newPackage("org.apache.commons.cli"),I$=[[0,'StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AmbiguousOptionException", null, 'org.apache.commons.cli.UnrecognizedOptionException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['matchingOptions','java.util.Collection']]]

Clazz.newMeth(C$, 'c$$S$java_util_Collection',  function (option, matchingOptions) {
;C$.superclazz.c$$S$S.apply(this,[C$.createMessage$S$java_util_Collection(option, matchingOptions), option]);C$.$init$.apply(this);
this.matchingOptions=matchingOptions;
}, 1);

Clazz.newMeth(C$, 'getMatchingOptions$',  function () {
return this.matchingOptions;
});

Clazz.newMeth(C$, 'createMessage$S$java_util_Collection',  function (option, matchingOptions) {
var buf=Clazz.new_($I$(1,1).c$$S,["Ambiguous option: \'"]);
buf.append$S(option);
buf.append$S("\'  (could be: ");
var it=matchingOptions.iterator$();
while (it.hasNext$()){
buf.append$S("\'");
buf.append$S(it.next$());
buf.append$S("\'");
if (it.hasNext$()) {
buf.append$S(", ");
}}
buf.append$S(")");
return buf.toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
