(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[[0,['javax.swing.event.RowSorterEvent','.Type']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RowSorterEvent", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.EventObject');
C$.$classes$=[['Type',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['type','javax.swing.event.RowSorterEvent.Type','oldViewToModel','int[]']]]

Clazz.newMeth(C$, 'c$$javax_swing_RowSorter',  function (source) {
C$.c$$javax_swing_RowSorter$javax_swing_event_RowSorterEvent_Type$IA.apply(this, [source, $I$(1).SORT_ORDER_CHANGED, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_RowSorter$javax_swing_event_RowSorterEvent_Type$IA',  function (source, type, previousRowIndexToModel) {
;C$.superclazz.c$$O.apply(this,[source]);C$.$init$.apply(this);
if (type == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["type must be non-null"]);
}this.type=type;
this.oldViewToModel=previousRowIndexToModel;
}, 1);

Clazz.newMeth(C$, 'getSource$',  function () {
return C$.superclazz.prototype.getSource$.apply(this, []);
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'convertPreviousRowIndexToModel$I',  function (index) {
if (this.oldViewToModel != null  && index >= 0  && index < this.oldViewToModel.length ) {
return this.oldViewToModel[index];
}return -1;
});

Clazz.newMeth(C$, 'getPreviousRowCount$',  function () {
return (this.oldViewToModel == null ) ? 0 : this.oldViewToModel.length;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.RowSorterEvent, "Type", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "SORT_ORDER_CHANGED", 0, []);
Clazz.newEnumConst($vals, C$.c$, "SORTED", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:06 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
