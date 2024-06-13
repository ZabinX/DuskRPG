(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "IntSummaryStatistics", null, null, 'java.util.function.IntConsumer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.min=2147483647;
this.max=-2147483648;
},1);

C$.$fields$=[['I',['min','max'],'J',['count','sum']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'accept$I',  function (value) {
(this.count=Long.$inc(this.count,1));
(this.sum=Long.$add(this.sum,(value)));
this.min=Math.min(this.min, value);
this.max=Math.max(this.max, value);
});

Clazz.newMeth(C$, 'combine$java_util_IntSummaryStatistics',  function (other) {
(this.count=Long.$add(this.count,(other.count)));
(this.sum=Long.$add(this.sum,(other.sum)));
this.min=Math.min(this.min, other.min);
this.max=Math.max(this.max, other.max);
});

Clazz.newMeth(C$, 'getCount$',  function () {
return this.count;
});

Clazz.newMeth(C$, 'getSum$',  function () {
return this.sum;
});

Clazz.newMeth(C$, 'getMin$',  function () {
return this.min;
});

Clazz.newMeth(C$, 'getMax$',  function () {
return this.max;
});

Clazz.newMeth(C$, 'getAverage$',  function () {
return Long.$gt(this.getCount$(),0 ) ? Long.$dval(this.getSum$()) / this.getCount$() : 0.0;
});

Clazz.newMeth(C$, 'toString',  function () {
return String.format$S$OA("%s{count=%d, sum=%d, min=%d, average=%f, max=%d}", Clazz.array(java.lang.Object, -1, [this.getClass$().getSimpleName$(), Long.valueOf$J(this.getCount$()), Long.valueOf$J(this.getSum$()), Integer.valueOf$I(this.getMin$()), Double.valueOf$D(this.getAverage$()), Integer.valueOf$I(this.getMax$())]));
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
