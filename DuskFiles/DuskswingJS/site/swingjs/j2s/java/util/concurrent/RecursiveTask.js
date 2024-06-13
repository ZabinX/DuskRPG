(function(){var P$=Clazz.newPackage("java.util.concurrent"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RecursiveTask", null, 'java.util.concurrent.ForkJoinTask');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['result','<V>']]]

Clazz.newMeth(C$, 'getRawResult$',  function () {
return this.result;
});

Clazz.newMeth(C$, 'setRawResult$O',  function (value) {
this.result=value;
});

Clazz.newMeth(C$, 'exec$',  function () {
this.result=this.compute$();
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
