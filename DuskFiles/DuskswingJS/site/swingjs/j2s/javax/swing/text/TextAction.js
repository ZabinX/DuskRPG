(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[[0,'java.util.Hashtable','javax.swing.Action','javax.swing.text.JTextComponent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TextAction", null, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getTextComponent$java_awt_event_ActionEvent',  function (e) {
if (e != null ) {
var o=e.getSource$();
if (Clazz.instanceOf(o, "javax.swing.text.JTextComponent")) {
return o;
}}return this.getFocusedComponent$();
});

Clazz.newMeth(C$, 'augmentList$javax_swing_ActionA$javax_swing_ActionA',  function (list1, list2) {
var h=Clazz.new_($I$(1,1));
if (list1 != null ) for (var i=0; i < list1.length; i++) {
var a=list1[i];
var value=a.getValue$S("Name");
h.put$O$O((value != null  ? value : ""), a);
}
for (var i=0; i < list2.length; i++) {
var a=list2[i];
var value=a.getValue$S("Name");
h.put$O$O((value != null  ? value : ""), a);
}
var actions=Clazz.array($I$(2), [h.size$()]);
var index=0;
for (var e=h.elements$(); e.hasMoreElements$(); ) {
actions[index++]=e.nextElement$();
}
return actions;
}, 1);

Clazz.newMeth(C$, 'getFocusedComponent$',  function () {
return $I$(3).getFocusedComponent$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
