(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "TimerTask", null, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lock= Clazz.new_();
this.state=0;
this.period=0;
},1);

C$.$fields$=[['I',['state'],'J',['nextExecutionTime','period'],'O',['lock','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'cancel$',  function () {
{
var result=(this.state == 1);
this.state=3;
return result;
}});

Clazz.newMeth(C$, 'scheduledExecutionTime$',  function () {
{
return (Long.$lt(this.period,0 ) ? Long.$add(this.nextExecutionTime,this.period) : Long.$sub(this.nextExecutionTime,this.period));
}});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
