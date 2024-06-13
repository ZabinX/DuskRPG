(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.event.EventListenerList','javax.swing.event.RowSorterListener','javax.swing.event.RowSorterEvent',['javax.swing.event.RowSorterEvent','.Type']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RowSorter", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['SortKey',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.listenerList=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['listenerList','javax.swing.event.EventListenerList']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addRowSorterListener$javax_swing_event_RowSorterListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(2),['sorterChanged$javax_swing_event_RowSorterEvent']), l);
});

Clazz.newMeth(C$, 'removeRowSorterListener$javax_swing_event_RowSorterListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(2),['sorterChanged$javax_swing_event_RowSorterEvent']), l);
});

Clazz.newMeth(C$, 'fireSortOrderChanged$',  function () {
this.fireRowSorterChanged$javax_swing_event_RowSorterEvent(Clazz.new_($I$(3,1).c$$javax_swing_RowSorter,[this]));
});

Clazz.newMeth(C$, 'fireRowSorterChanged$IA',  function (lastRowIndexToModel) {
this.fireRowSorterChanged$javax_swing_event_RowSorterEvent(Clazz.new_([this, $I$(4).SORTED, lastRowIndexToModel],$I$(3,1).c$$javax_swing_RowSorter$javax_swing_event_RowSorterEvent_Type$IA));
});

Clazz.newMeth(C$, 'fireRowSorterChanged$javax_swing_event_RowSorterEvent',  function (event) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(2),['sorterChanged$javax_swing_event_RowSorterEvent']) ) {
(listeners[i + 1]).sorterChanged$javax_swing_event_RowSorterEvent(event);
}}
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.RowSorter, "SortKey", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['column'],'O',['sortOrder','javax.swing.SortOrder']]]

Clazz.newMeth(C$, 'c$$I$javax_swing_SortOrder',  function (column, sortOrder) {
;C$.$init$.apply(this);
if (sortOrder == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["sort order must be non-null"]);
}this.column=column;
this.sortOrder=sortOrder;
}, 1);

Clazz.newMeth(C$, 'getColumn$',  function () {
return this.column;
});

Clazz.newMeth(C$, 'getSortOrder$',  function () {
return this.sortOrder;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var result=17;
result=37 * result + this.column;
result=37 * result + this.sortOrder.hashCode$();
return result;
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (o === this ) {
return true;
}if (Clazz.instanceOf(o, "javax.swing.RowSorter.SortKey")) {
return ((o).column == this.column && (o).sortOrder === this.sortOrder  );
}return false;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
