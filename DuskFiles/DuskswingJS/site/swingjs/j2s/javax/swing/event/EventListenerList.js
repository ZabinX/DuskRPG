(function(){var P$=Clazz.newPackage("javax.swing.event"),p$1={},I$=[[0,'java.lang.reflect.Array']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EventListenerList");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.listenerList=C$.NULL_ARRAY;
},1);

C$.$fields$=[['O',['+listenerList']]
,['O',['NULL_ARRAY','Object[]']]]

Clazz.newMeth(C$, 'getListenerList$',  function () {
return this.listenerList;
});

Clazz.newMeth(C$, 'getListeners$Class',  function (t) {
var lList=this.listenerList;
var n=p$1.getListenerCount$OA$Class.apply(this, [lList, t]);
var result=Clazz.array(t, n);
var j=0;
for (var i=lList.length - 2; i >= 0; i-=2) {
if (lList[i] === t ) {
result[j++]=lList[i + 1];
}}
return result;
});

Clazz.newMeth(C$, 'getListenerCount$',  function () {
return (this.listenerList.length/2|0);
});

Clazz.newMeth(C$, 'getListenerCount$Class',  function (t) {
var lList=this.listenerList;
return p$1.getListenerCount$OA$Class.apply(this, [lList, t]);
});

Clazz.newMeth(C$, 'getListenerCount$OA$Class',  function (list, t) {
var count=0;
for (var i=0; i < list.length; i+=2) {
if (t === list[i] ) ++count;
}
return count;
}, p$1);

Clazz.newMeth(C$, 'add$Class$java_util_EventListener',  function (t, l) {
if (l == null ) {
return;
}if (this.listenerList === C$.NULL_ARRAY ) {
this.listenerList=Clazz.array(java.lang.Object, -1, [t, l]);
} else {
var i=this.listenerList.length;
var tmp=Clazz.array(java.lang.Object, [i + 2]);
System.arraycopy$O$I$O$I$I(this.listenerList, 0, tmp, 0, i);
tmp[i]=t;
tmp[i + 1]=l;
this.listenerList=tmp;
}});

Clazz.newMeth(C$, 'remove$Class$java_util_EventListener',  function (t, l) {
if (l == null ) {
return;
}var index=-1;
for (var i=this.listenerList.length - 2; i >= 0; i-=2) {
if ((this.listenerList[i] === t ) && (this.listenerList[i + 1].equals$O(l) == true ) ) {
index=i;
break;
}}
if (index != -1) {
var tmp=Clazz.array(java.lang.Object, [this.listenerList.length - 2]);
System.arraycopy$O$I$O$I$I(this.listenerList, 0, tmp, 0, index);
if (index < tmp.length) System.arraycopy$O$I$O$I$I(this.listenerList, index + 2, tmp, index, tmp.length - index);
this.listenerList=(tmp.length == 0) ? C$.NULL_ARRAY : tmp;
}});

Clazz.newMeth(C$, 'toString',  function () {
var lList=this.listenerList;
var s="EventListenerList: ";
s+=(lList.length/2|0) + " listeners: ";
for (var i=0; i <= lList.length - 2; i+=2) {
s+=" type " + (lList[i]).getName$();
s+=" listener " + lList[i + 1];
}
return s;
});

C$.$static$=function(){C$.$static$=0;
C$.NULL_ARRAY=Clazz.array(java.lang.Object, [0]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
