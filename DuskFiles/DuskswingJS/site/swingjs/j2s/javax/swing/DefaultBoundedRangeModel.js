(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.event.EventListenerList','javax.swing.event.ChangeListener','javax.swing.event.ChangeEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultBoundedRangeModel", null, null, 'javax.swing.BoundedRangeModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.changeEvent=null;
this.listenerList=Clazz.new_($I$(1,1));
this.value=0;
this.extent=0;
this.min=0;
this.max=100;
this.isAdjusting=false;
},1);

C$.$fields$=[['Z',['isAdjusting'],'I',['value','extent','min','max'],'O',['changeEvent','javax.swing.event.ChangeEvent','listenerList','javax.swing.event.EventListenerList']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (value, extent, min, max) {
;C$.$init$.apply(this);
if ((max >= min) && (value >= min) && ((value + extent) >= value) && ((value + extent) <= max)  ) {
this.value=value;
this.extent=extent;
this.min=min;
this.max=max;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid range properties"]);
}}, 1);

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'getExtent$',  function () {
return this.extent;
});

Clazz.newMeth(C$, 'getMinimum$',  function () {
return this.min;
});

Clazz.newMeth(C$, 'getMaximum$',  function () {
return this.max;
});

Clazz.newMeth(C$, 'setValue$I',  function (n) {
n=Math.min(n, 2147483647 - this.extent);
var newValue=Math.max(n, this.min);
if (newValue + this.extent > this.max) {
newValue=this.max - this.extent;
}this.setRangeProperties$I$I$I$I$Z(newValue, this.extent, this.min, this.max, this.isAdjusting);
});

Clazz.newMeth(C$, 'setExtent$I',  function (n) {
var newExtent=Math.max(0, n);
if (this.value + newExtent > this.max) {
newExtent=this.max - this.value;
}this.setRangeProperties$I$I$I$I$Z(this.value, newExtent, this.min, this.max, this.isAdjusting);
});

Clazz.newMeth(C$, 'setMinimum$I',  function (n) {
var newMax=Math.max(n, this.max);
var newValue=Math.max(n, this.value);
var newExtent=Math.min(newMax - newValue, this.extent);
this.setRangeProperties$I$I$I$I$Z(newValue, newExtent, n, newMax, this.isAdjusting);
});

Clazz.newMeth(C$, 'setMaximum$I',  function (n) {
var newMin=Math.min(n, this.min);
var newExtent=Math.min(n - newMin, this.extent);
var newValue=Math.min(n - newExtent, this.value);
this.setRangeProperties$I$I$I$I$Z(newValue, newExtent, newMin, n, this.isAdjusting);
});

Clazz.newMeth(C$, 'setValueIsAdjusting$Z',  function (b) {
this.setRangeProperties$I$I$I$I$Z(this.value, this.extent, this.min, this.max, b);
});

Clazz.newMeth(C$, 'getValueIsAdjusting$',  function () {
return this.isAdjusting;
});

Clazz.newMeth(C$, 'setRangeProperties$I$I$I$I$Z',  function (newValue, newExtent, newMin, newMax, adjusting) {
if (newMin > newMax) {
newMin=newMax;
}if (newValue > newMax) {
newMax=newValue;
}if (newValue < newMin) {
newMin=newValue;
}if (Long.$gt((Long.$add(newExtent,newValue)),newMax )) {
newExtent=newMax - newValue;
}if (newExtent < 0) {
newExtent=0;
}var isChange=(newValue != this.value) || (newExtent != this.extent) || (newMin != this.min) || (newMax != this.max) || (adjusting != this.isAdjusting )  ;
if (isChange) {
this.value=newValue;
this.extent=newExtent;
this.min=newMin;
this.max=newMax;
this.isAdjusting=adjusting;
this.fireStateChanged$();
}});

Clazz.newMeth(C$, 'addChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(2),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'removeChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(2),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'getChangeListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(2),['stateChanged$javax_swing_event_ChangeEvent']));
});

Clazz.newMeth(C$, 'fireStateChanged$',  function () {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(2),['stateChanged$javax_swing_event_ChangeEvent']) ) {
if (this.changeEvent == null ) {
this.changeEvent=Clazz.new_($I$(3,1).c$$O,[this]);
}(listeners[i + 1]).stateChanged$javax_swing_event_ChangeEvent(this.changeEvent);
}}
});

Clazz.newMeth(C$, 'toString',  function () {
var modelString="value=" + this.getValue$() + ", " + "extent=" + this.getExtent$() + ", " + "min=" + this.getMinimum$() + ", " + "max=" + this.getMaximum$() + ", " + "adj=" + this.getValueIsAdjusting$() ;
return this.getClass$().getName$() + "[" + modelString + "]" ;
});

Clazz.newMeth(C$, 'getListeners$Class',  function (listenerType) {
return this.listenerList.getListeners$Class(listenerType);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:51 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
