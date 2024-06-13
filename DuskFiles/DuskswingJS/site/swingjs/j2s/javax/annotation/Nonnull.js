(function(){var P$=Clazz.newPackage("javax.annotation"),I$=[[0,'javax.annotation.meta.When']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*@*/var C$=Clazz.newClass(P$, "Nonnull", function(){
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
(function(){/*c*/var C$=Clazz.newClass(P$.Nonnull, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'javax.annotation.meta.TypeQualifierValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['forConstantValue$javax_annotation_Nonnull$O','forConstantValue$java_lang_annotation_Annotation$O'],  function (qualifierqualifierArgument, value) {
if (value == null ) return $I$(1).NEVER;
return $I$(1).ALWAYS;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
