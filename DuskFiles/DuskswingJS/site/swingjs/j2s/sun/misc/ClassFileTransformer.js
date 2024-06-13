(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ClassFileTransformer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['transformers','java.util.List']]]

Clazz.newMeth(C$, 'add$sun_misc_ClassFileTransformer',  function (t) {
{
C$.transformers.add$O(t);
}}, 1);

Clazz.newMeth(C$, 'getTransformers$',  function () {
{
var result=Clazz.array(C$, [C$.transformers.size$()]);
return C$.transformers.toArray$OA(result);
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.transformers=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
