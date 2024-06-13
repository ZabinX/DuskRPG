(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.Insets','java.awt.event.TextEvent','swingjs.a2s.A2SEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TextField", null, 'javax.swing.JTextField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['awtInsets','java.awt.Insets']]]

Clazz.newMeth(C$, 'isAWT$',  function () {
});

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$I.apply(this, ["", 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (text) {
C$.c$$S$I.apply(this, [text, (text != null ) ? text.length$() : 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (width) {
C$.c$$S$I.apply(this, ["", width]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I',  function (text, width) {
;C$.superclazz.c$$javax_swing_text_Document$S$I.apply(this,["null", text, width]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMargin$',  function () {
return C$.awtInsets;
});

Clazz.newMeth(C$, 'addTextListener$java_awt_event_TextListener',  function (textListener) {
C$.superclazz.prototype.getDocument$.apply(this, []).addDocumentListener$javax_swing_event_DocumentListener(((P$.TextField$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TextField$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.DocumentListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent',  function (e) {
var isReplacing=(e.getDocument$()).秘replacing;
if (!isReplacing) this.$finals$.textListener.textValueChanged$java_awt_event_TextEvent(Clazz.new_($I$(2,1).c$$O$I,[this, 900]));
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.$finals$.textListener.textValueChanged$java_awt_event_TextEvent(Clazz.new_($I$(2,1).c$$O$I,[this, 900]));
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent',  function (e) {
});
})()
), Clazz.new_(P$.TextField$1.$init$,[this, {textListener:textListener}])));
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return this.preferredSize$I(this.columns);
});

Clazz.newMeth(C$, 'preferredSize$',  function () {
return this.preferredSize$I(this.columns);
});

Clazz.newMeth(C$, 'getPreferredSize$I',  function (columns) {
return this.preferredSize$I(columns);
});

Clazz.newMeth(C$, 'preferredSize$I',  function (columns) {
return C$.superclazz.prototype.getPrefSizeJTF$I.apply(this, [columns]);
});

Clazz.newMeth(C$, 'getMinimumSize$I',  function (columns) {
return this.minimumSize$I(columns);
});

Clazz.newMeth(C$, 'minimumSize$I',  function (columns) {
return C$.superclazz.prototype.getMinimumSizeJTF$I.apply(this, [columns]);
});

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
return this.minimumSize$();
});

Clazz.newMeth(C$, 'minimumSize$',  function () {
/*sync org.eclipse.jdt.core.dom.SuperMethodInvocation*/(C$.superclazz.prototype.getTreeLock$.apply(this, []));
{
return (this.columns > 0) ? this.minimumSize$I(this.columns) : C$.superclazz.prototype.minimumSize$.apply(this, []);
}});

Clazz.newMeth(C$, 'getColumnWidth$',  function () {
if (this.columnWidth == 0) {
var metrics=this.getFontMetrics$java_awt_Font(C$.superclazz.prototype.getFont$.apply(this, []));
this.columnWidth=metrics.charWidth$C("_");
}return this.columnWidth;
});

Clazz.newMeth(C$, 'getJ2SWidth$I',  function (columns) {
return columns * this.getColumnWidth$() + 24;
});

Clazz.newMeth(C$, 'fireActionPerformed$',  function () {
$I$(3).addListener$java_awt_Component(this);
C$.superclazz.prototype.fireActionPerformed$.apply(this, []);
});

C$.$static$=function(){C$.$static$=0;
C$.awtInsets=Clazz.new_($I$(1,1).c$$I$I$I$I,[0, 1, 0, 1]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
