(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'javax.swing.border.EmptyBorder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BasicComboBoxRenderer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JLabel', ['javax.swing.ListCellRenderer', 'java.io.Serializable']);
C$.$classes$=[['UIResource',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['noFocusBorder','javax.swing.border.Border','+SAFE_NO_FOCUS_BORDER']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setOpaque$Z(true);
this.setBorder$javax_swing_border_Border(C$.getNoFocusBorder$());
}, 1);

Clazz.newMeth(C$, 'getNoFocusBorder$',  function () {
if (System.getSecurityManager$() != null ) {
return C$.SAFE_NO_FOCUS_BORDER;
} else {
return C$.noFocusBorder;
}}, 1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var size;
if ((this.getText$() == null ) || (this.getText$().equals$O("")) ) {
this.setText$S(" ");
size=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
this.setText$S("");
} else {
size=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
}return size;
});

Clazz.newMeth(C$, 'getListCellRendererComponent$javax_swing_JList$O$I$Z$Z',  function (list, value, index, isSelected, cellHasFocus) {
if (isSelected) {
this.setBackground$java_awt_Color(list.getSelectionBackground$());
this.setForeground$java_awt_Color(list.getSelectionForeground$());
} else {
this.setBackground$java_awt_Color(list.getBackground$());
this.setForeground$java_awt_Color(list.getForeground$());
}this.setFont$java_awt_Font(list.getFont$());
if (Clazz.instanceOf(value, "javax.swing.Icon")) {
this.setIcon$javax_swing_Icon(value);
} else if (Clazz.instanceOf(value, "javax.swing.JLabel")) {
this.setIcon$javax_swing_Icon(null);
this.setText$S((value).getText$());
} else if (Clazz.instanceOf(value, "javax.swing.AbstractButton")) {
this.setIcon$javax_swing_Icon(null);
this.setText$S((value).getText$());
} else {
this.setIcon$javax_swing_Icon(null);
this.setText$S((value == null ) ? "" : value.toString());
}return this;
});

C$.$static$=function(){C$.$static$=0;
C$.noFocusBorder=Clazz.new_($I$(1,1).c$$I$I$I$I,[1, 1, 1, 1]);
C$.SAFE_NO_FOCUS_BORDER=Clazz.new_($I$(1,1).c$$I$I$I$I,[1, 1, 1, 1]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicComboBoxRenderer, "UIResource", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'swingjs.plaf.BasicComboBoxRenderer', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
