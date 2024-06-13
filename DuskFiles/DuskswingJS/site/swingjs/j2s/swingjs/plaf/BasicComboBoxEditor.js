(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,['swingjs.plaf.BasicComboBoxEditor','.BorderlessTextField'],'sun.reflect.misc.MethodUtil']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BasicComboBoxEditor", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['javax.swing.ComboBoxEditor', 'java.awt.event.FocusListener']);
C$.$classes$=[['BorderlessTextField',8],['UIResource',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['editor','javax.swing.JTextField','oldValue','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.editor=this.createEditorComponent$();
}, 1);

Clazz.newMeth(C$, 'getEditorComponent$',  function () {
return this.editor;
});

Clazz.newMeth(C$, 'createEditorComponent$',  function () {
var editor=Clazz.new_($I$(1,1).c$$S$I,["", 9]);
editor.setBorder$javax_swing_border_Border(null);
return editor;
});

Clazz.newMeth(C$, 'setItem$O',  function (anObject) {
var text;
if (anObject != null ) {
text=anObject.toString();
if (text == null ) {
text="";
}this.oldValue=anObject;
} else {
text="";
}if (!text.equals$O(this.editor.getText$())) {
this.editor.setText$S(text);
}});

Clazz.newMeth(C$, 'getItem$',  function () {
var newValue=this.editor.getText$();
if (this.oldValue != null  && !(Clazz.instanceOf(this.oldValue, "java.lang.String")) ) {
if (newValue.equals$O(this.oldValue.toString())) {
return this.oldValue;
} else {
var cls=this.oldValue.getClass$();
try {
var method=$I$(2,"getMethod$Class$S$ClassA",[cls, "valueOf", Clazz.array(Class, -1, [Clazz.getClass(String)])]);
newValue=$I$(2,"invoke$java_lang_reflect_Method$O$OA",[method, this.oldValue, Clazz.array(java.lang.Object, -1, [this.editor.getText$()])]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}}return newValue;
});

Clazz.newMeth(C$, 'selectAll$',  function () {
this.editor.selectAll$();
this.editor.requestFocus$();
});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
});

Clazz.newMeth(C$, 'addActionListener$java_awt_event_ActionListener',  function (l) {
this.editor.addActionListener$java_awt_event_ActionListener(l);
});

Clazz.newMeth(C$, 'removeActionListener$java_awt_event_ActionListener',  function (l) {
this.editor.removeActionListener$java_awt_event_ActionListener(l);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicComboBoxEditor, "BorderlessTextField", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JTextField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S$I',  function (value, n) {
;C$.superclazz.c$$S$I.apply(this,[value, n]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setText$S',  function (s) {
if (this.getText$().equals$O(s)) {
return;
}C$.superclazz.prototype.setText$S.apply(this, [s]);
});

Clazz.newMeth(C$, 'setBorder$javax_swing_border_Border',  function (b) {
if (!(Clazz.instanceOf(b, "swingjs.plaf.BasicComboBoxEditor.UIResource"))) {
C$.superclazz.prototype.setBorder$javax_swing_border_Border.apply(this, [b]);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicComboBoxEditor, "UIResource", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'swingjs.plaf.BasicComboBoxEditor', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
