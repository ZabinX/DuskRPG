(function(){var P$=Clazz.newPackage("javax.annotation"),I$=[[0,'java.util.regex.Pattern','javax.annotation.meta.When']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*@*/var C$=Clazz.newClass(P$, "MatchesPattern", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.lang.annotation.Annotation');
C$.$classes$=[['Checker',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
C$.prototype.annotationType = function() { return this.getClass$() };
C$.$getMembers$ = function() {var a=[];
a.push(['value','String',null]);
a.push(['flags','int',0]);
return a};
(function(){/*c*/var C$=Clazz.newClass(P$.MatchesPattern, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'javax.annotation.meta.TypeQualifierValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['forConstantValue$javax_annotation_MatchesPattern$O','forConstantValue$java_lang_annotation_Annotation$O'],  function (annotation, value) {
var p=$I$(1,"compile$S$I",[annotation.value$(), annotation.flags$()]);
if (p.matcher$CharSequence((value)).matches$()) return $I$(2).ALWAYS;
return $I$(2).NEVER;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
