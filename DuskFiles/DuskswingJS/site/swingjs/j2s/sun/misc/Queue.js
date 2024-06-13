(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'sun.misc.QueueElement','sun.misc.LIFOQueueEnumerator','sun.misc.FIFOQueueEnumerator']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Queue");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.length=0;
this.head=null;
this.tail=null;
},1);

C$.$fields$=[['I',['length'],'O',['head','sun.misc.QueueElement','+tail']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'enqueue$O',  function (obj) {
var newElt=Clazz.new_($I$(1,1).c$$O,[obj]);
if (this.head == null ) {
this.head=newElt;
this.tail=newElt;
this.length=1;
} else {
newElt.next=this.head;
this.head.prev=newElt;
this.head=newElt;
++this.length;
}this.notify$();
});

Clazz.newMeth(C$, 'dequeue$',  function () {
return this.dequeue$J(0);
});

Clazz.newMeth(C$, 'dequeue$J',  function (timeOut) {
while (this.tail == null ){
this.wait$J(timeOut);
}
var elt=this.tail;
this.tail=elt.prev;
if (this.tail == null ) {
this.head=null;
} else {
this.tail.next=null;
}--this.length;
return elt.obj;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return (this.tail == null );
});

Clazz.newMeth(C$, 'elements$',  function () {
return Clazz.new_($I$(2,1).c$$sun_misc_Queue,[this]);
});

Clazz.newMeth(C$, 'reverseElements$',  function () {
return Clazz.new_($I$(3,1).c$$sun_misc_Queue,[this]);
});

Clazz.newMeth(C$, 'dump$S',  function (msg) {
System.err.println$S(">> " + msg);
System.err.println$S("[" + this.length + " elt(s); head = " + (this.head == null  ? "null" : (this.head.obj) + "") + " tail = " + (this.tail == null  ? "null" : (this.tail.obj) + "") );
var cursor=this.head;
var last=null;
while (cursor != null ){
System.err.println$S("  " + cursor);
last=cursor;
cursor=cursor.next;
}
if (last !== this.tail ) {
System.err.println$S("  tail != last: " + this.tail + ", " + last );
}System.err.println$S("]");
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
