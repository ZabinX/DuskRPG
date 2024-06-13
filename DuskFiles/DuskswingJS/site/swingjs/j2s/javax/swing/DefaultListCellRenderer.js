(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.border.EmptyBorder','sun.swing.DefaultLookup']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultListCellRenderer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JLabel', 'javax.swing.ListCellRenderer');
C$.$classes$=[['UIResource',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['SAFE_NO_FOCUS_BORDER','javax.swing.border.Border','+DEFAULT_NO_FOCUS_BORDER','+noFocusBorder']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setOpaque$Z(true);
this.setBorder$javax_swing_border_Border(p$1.getNoFocusBorder.apply(this, []));
this.setName$S("List.cellRenderer");
}, 1);

Clazz.newMeth(C$, 'getNoFocusBorder',  function () {
var border=$I$(2).getBorder$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this, this.ui, "List.cellNoFocusBorder");
if (System.getSecurityManager$() != null ) {
if (border != null ) return border;
return C$.SAFE_NO_FOCUS_BORDER;
} else {
if (border != null  && (C$.noFocusBorder == null  || C$.noFocusBorder === C$.DEFAULT_NO_FOCUS_BORDER  ) ) {
return border;
}return C$.noFocusBorder;
}}, p$1);

Clazz.newMeth(C$, 'getListCellRendererComponent$javax_swing_JList$O$I$Z$Z',  function (list, value, index, isSelected, cellHasFocus) {
this.setComponentOrientation$java_awt_ComponentOrientation(list.getComponentOrientation$());
var bg=null;
var fg=null;
if (isSelected) {
this.setBackground$java_awt_Color(bg == null  ? list.getSelectionBackground$() : bg);
this.setForeground$java_awt_Color(fg == null  ? list.getSelectionForeground$() : fg);
} else {
this.setBackground$java_awt_Color(list.getBackground$());
this.setForeground$java_awt_Color(list.getForeground$());
}if (Clazz.instanceOf(value, "javax.swing.Icon")) {
this.setIcon$javax_swing_Icon(value);
this.setText$S("");
} else if (Clazz.instanceOf(value, "javax.swing.JLabel")) {
this.setIcon$javax_swing_Icon(null);
this.setText$S((value).getText$());
} else if (Clazz.instanceOf(value, "javax.swing.AbstractButton")) {
this.setIcon$javax_swing_Icon(null);
this.setText$S((value).getText$());
} else {
this.setIcon$javax_swing_Icon(null);
this.setText$S((value == null ) ? "" : value.toString());
}this.setEnabled$Z(list.isEnabled$());
this.setFont$java_awt_Font(list.getFont$());
this.getUI$().setFont$java_awt_Font(this.getFont$());
var border=null;
if (cellHasFocus) {
if (isSelected) {
border=$I$(2).getBorder$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this, this.ui, "List.focusSelectedCellHighlightBorder");
}if (border == null ) {
border=$I$(2).getBorder$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this, this.ui, "List.focusCellHighlightBorder");
}} else {
border=p$1.getNoFocusBorder.apply(this, []);
}this.setBorder$javax_swing_border_Border(border);
return this;
});

Clazz.newMeth(C$, 'isOpaque$',  function () {
return true;
});

Clazz.newMeth(C$, 'validate$',  function () {
});

Clazz.newMeth(C$, 'invalidate$',  function () {
});

Clazz.newMeth(C$, 'repaint$',  function () {
});

Clazz.newMeth(C$, 'revalidate$',  function () {
});

Clazz.newMeth(C$, 'repaint$J$I$I$I$I',  function (tm, x, y, width, height) {
});

Clazz.newMeth(C$, 'repaint$java_awt_Rectangle',  function (r) {
});

Clazz.newMeth(C$, 'firePropertyChange$S$O$O',  function (propertyName, oldValue, newValue) {
});

Clazz.newMeth(C$, 'firePropertyChange$S$B$B',  function (propertyName, oldValue, newValue) {
});

Clazz.newMeth(C$, 'firePropertyChange$S$C$C',  function (propertyName, oldValue, newValue) {
});

Clazz.newMeth(C$, 'firePropertyChange$S$H$H',  function (propertyName, oldValue, newValue) {
});

Clazz.newMeth(C$, 'firePropertyChange$S$I$I',  function (propertyName, oldValue, newValue) {
});

Clazz.newMeth(C$, 'firePropertyChange$S$J$J',  function (propertyName, oldValue, newValue) {
});

Clazz.newMeth(C$, 'firePropertyChange$S$F$F',  function (propertyName, oldValue, newValue) {
});

Clazz.newMeth(C$, 'firePropertyChange$S$D$D',  function (propertyName, oldValue, newValue) {
});

Clazz.newMeth(C$, 'firePropertyChange$S$Z$Z',  function (propertyName, oldValue, newValue) {
});

C$.$static$=function(){C$.$static$=0;
C$.SAFE_NO_FOCUS_BORDER=Clazz.new_($I$(1,1).c$$I$I$I$I,[1, 1, 1, 1]);
C$.DEFAULT_NO_FOCUS_BORDER=Clazz.new_($I$(1,1).c$$I$I$I$I,[1, 1, 1, 1]);
C$.noFocusBorder=C$.DEFAULT_NO_FOCUS_BORDER;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultListCellRenderer, "UIResource", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.DefaultListCellRenderer', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:51 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
