(function(){var P$=Clazz.newPackage("javax.annotation"),I$=[[0,'javax.annotation.meta.When','java.util.regex.Pattern']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*@*/var C$=Clazz.newClass(P$, "RegEx", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.lang.annotation.Annotation');
C$.$classes$=[['Checker',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
C$.prototype.annotationType = function() { return this.getClass$() };
C$.$getMembers$ = function() {var a=[];
a.push(['when','javax.annotation.meta.When',$I$(1).ALWAYS]);
return a};
(function(){/*c*/var C$=Clazz.newClass(P$.RegEx, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'javax.annotation.meta.TypeQualifierValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['forConstantValue$javax_annotation_RegEx$O','forConstantValue$java_lang_annotation_Annotation$O'],  function (annotation, value) {
if (!(Clazz.instanceOf(value, "java.lang.String"))) return $I$(1).NEVER;
try {
$I$(2).compile$S(value);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.regex.PatternSyntaxException")){
return $I$(1).NEVER;
} else {
throw e;
}
}
return $I$(1).ALWAYS;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
