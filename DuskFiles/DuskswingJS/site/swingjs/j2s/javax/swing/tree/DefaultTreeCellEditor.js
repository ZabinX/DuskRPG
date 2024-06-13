(function(){var P$=Clazz.newPackage("javax.swing.tree"),p$1={},p$2={},I$=[[0,'java.awt.Dimension','javax.swing.UIManager','javax.swing.SwingUtilities',['javax.swing.tree.DefaultTreeCellEditor','.EditorContainer'],'javax.swing.DefaultCellEditor',['javax.swing.tree.DefaultTreeCellEditor','.DefaultTextField']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultTreeCellEditor", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.awt.event.ActionListener', 'javax.swing.tree.TreeCellEditor', 'javax.swing.event.TreeSelectionListener']);
C$.$classes$=[['DefaultTextField',1],['EditorContainer',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['canEdit'],'I',['offset','lastRow'],'O',['realEditor','javax.swing.tree.TreeCellEditor','renderer','javax.swing.tree.DefaultTreeCellRenderer','editingContainer','java.awt.Container','editingComponent','java.awt.Component','tree','javax.swing.JTree','lastPath','javax.swing.tree.TreePath','borderSelectionColor','java.awt.Color','editingIcon','javax.swing.Icon','font','java.awt.Font']]]

Clazz.newMeth(C$, 'c$$javax_swing_JTree$javax_swing_tree_DefaultTreeCellRenderer',  function (tree, renderer) {
C$.c$$javax_swing_JTree$javax_swing_tree_DefaultTreeCellRenderer$javax_swing_tree_TreeCellEditor.apply(this, [tree, renderer, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JTree$javax_swing_tree_DefaultTreeCellRenderer$javax_swing_tree_TreeCellEditor',  function (tree, renderer, editor) {
;C$.$init$.apply(this);
this.renderer=renderer;
this.realEditor=editor;
if (this.realEditor == null ) this.realEditor=this.createTreeCellEditor$();
this.editingContainer=this.createContainer$();
this.setTree$javax_swing_JTree(tree);
this.setBorderSelectionColor$java_awt_Color($I$(2).getColor$O("Tree.editorBorderSelectionColor"));
}, 1);

Clazz.newMeth(C$, 'setBorderSelectionColor$java_awt_Color',  function (newColor) {
this.borderSelectionColor=newColor;
});

Clazz.newMeth(C$, 'getBorderSelectionColor$',  function () {
return this.borderSelectionColor;
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
this.font=font;
});

Clazz.newMeth(C$, 'getFont$',  function () {
return this.font;
});

Clazz.newMeth(C$, 'getTreeCellEditorComponent$javax_swing_JTree$O$Z$Z$Z$I',  function (tree, value, isSelected, expanded, leaf, row) {
this.setTree$javax_swing_JTree(tree);
this.lastRow=row;
this.determineOffset$javax_swing_JTree$O$Z$Z$Z$I(tree, value, isSelected, expanded, leaf, row);
if (this.editingComponent != null ) {
this.editingContainer.remove$java_awt_Component(this.editingComponent);
}this.editingComponent=this.realEditor.getTreeCellEditorComponent$javax_swing_JTree$O$Z$Z$Z$I(tree, value, isSelected, expanded, leaf, row);
var newPath=tree.getPathForRow$I(row);
this.canEdit=(this.lastPath != null  && newPath != null   && this.lastPath.equals$O(newPath) );
var font=this.getFont$();
if (font == null ) {
if (this.renderer != null ) font=this.renderer.getFont$();
if (font == null ) font=tree.getFont$();
}this.editingContainer.setFont$java_awt_Font(font);
this.prepareForEditing$();
return this.editingContainer;
});

Clazz.newMeth(C$, 'getCellEditorValue$',  function () {
return this.realEditor.getCellEditorValue$();
});

Clazz.newMeth(C$, 'isCellEditable$java_util_EventObject',  function (event) {
var retValue=false;
var editable=false;
if (event != null ) {
if (Clazz.instanceOf(event.getSource$(), "javax.swing.JTree")) {
this.setTree$javax_swing_JTree(event.getSource$());
if (Clazz.instanceOf(event, "java.awt.event.MouseEvent")) {
var path=this.tree.getPathForLocation$I$I((event).getX$(), (event).getY$());
editable=(this.lastPath != null  && path != null   && this.lastPath.equals$O(path) );
if (path != null ) {
this.lastRow=this.tree.getRowForPath$javax_swing_tree_TreePath(path);
var value=path.getLastPathComponent$();
var isSelected=this.tree.isRowSelected$I(this.lastRow);
var expanded=this.tree.isExpanded$javax_swing_tree_TreePath(path);
var treeModel=this.tree.getModel$();
var leaf=treeModel.isLeaf$O(value);
this.determineOffset$javax_swing_JTree$O$Z$Z$Z$I(this.tree, value, isSelected, expanded, leaf, this.lastRow);
}}}}if (!this.realEditor.isCellEditable$java_util_EventObject(event)) return false;
if (this.canEditImmediately$java_util_EventObject(event)) retValue=true;
 else if (editable && this.shouldStartEditingTimer$java_util_EventObject(event) ) {
this.startEditingTimer$();
}if (retValue) this.prepareForEditing$();
return retValue;
});

Clazz.newMeth(C$, 'shouldSelectCell$java_util_EventObject',  function (event) {
return this.realEditor.shouldSelectCell$java_util_EventObject(event);
});

Clazz.newMeth(C$, 'stopCellEditing$',  function () {
if (this.realEditor.stopCellEditing$()) {
p$2.cleanupAfterEditing.apply(this, []);
return true;
}return false;
});

Clazz.newMeth(C$, 'cancelCellEditing$',  function () {
this.realEditor.cancelCellEditing$();
p$2.cleanupAfterEditing.apply(this, []);
});

Clazz.newMeth(C$, 'addCellEditorListener$javax_swing_event_CellEditorListener',  function (l) {
this.realEditor.addCellEditorListener$javax_swing_event_CellEditorListener(l);
});

Clazz.newMeth(C$, 'removeCellEditorListener$javax_swing_event_CellEditorListener',  function (l) {
this.realEditor.removeCellEditorListener$javax_swing_event_CellEditorListener(l);
});

Clazz.newMeth(C$, 'getCellEditorListeners$',  function () {
return (this.realEditor).getCellEditorListeners$();
});

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_TreeSelectionEvent',  function (e) {
if (this.tree != null ) {
if (this.tree.getSelectionCount$() == 1) this.lastPath=this.tree.getSelectionPath$();
 else this.lastPath=null;
}});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.tree != null  && this.lastPath != null  ) {
this.tree.startEditingAtPath$javax_swing_tree_TreePath(this.lastPath);
}});

Clazz.newMeth(C$, 'setTree$javax_swing_JTree',  function (newTree) {
if (this.tree !== newTree ) {
if (this.tree != null ) this.tree.removeTreeSelectionListener$javax_swing_event_TreeSelectionListener(this);
this.tree=newTree;
if (this.tree != null ) this.tree.addTreeSelectionListener$javax_swing_event_TreeSelectionListener(this);
}});

Clazz.newMeth(C$, 'shouldStartEditingTimer$java_util_EventObject',  function (event) {
if ((Clazz.instanceOf(event, "java.awt.event.MouseEvent")) && $I$(3).isLeftMouseButton$java_awt_event_MouseEvent(event) ) {
var me=event;
return (me.getClickCount$() == 1 && this.inHitRegion$I$I(me.getX$(), me.getY$()) );
}return false;
});

Clazz.newMeth(C$, 'startEditingTimer$',  function () {
});

Clazz.newMeth(C$, 'canEditImmediately$java_util_EventObject',  function (event) {
if ((Clazz.instanceOf(event, "java.awt.event.MouseEvent")) && $I$(3).isLeftMouseButton$java_awt_event_MouseEvent(event) ) {
var me=event;
return ((me.getClickCount$() > 2) && this.inHitRegion$I$I(me.getX$(), me.getY$()) );
}return (event == null );
});

Clazz.newMeth(C$, 'inHitRegion$I$I',  function (x, y) {
if (this.lastRow != -1 && this.tree != null  ) {
var bounds=this.tree.getRowBounds$I(this.lastRow);
var treeOrientation=this.tree.getComponentOrientation$();
if (treeOrientation.isLeftToRight$()) {
if (bounds != null  && x <= (bounds.x + this.offset)  && this.offset < (bounds.width - 5) ) {
return false;
}} else if (bounds != null  && (x >= (bounds.x + bounds.width - this.offset + 5) || x <= (bounds.x + 5) )  && this.offset < (bounds.width - 5) ) {
return false;
}}return true;
});

Clazz.newMeth(C$, 'determineOffset$javax_swing_JTree$O$Z$Z$Z$I',  function (tree, value, isSelected, expanded, leaf, row) {
if (this.renderer != null ) {
if (leaf) this.editingIcon=this.renderer.getLeafIcon$();
 else if (expanded) this.editingIcon=this.renderer.getOpenIcon$();
 else this.editingIcon=this.renderer.getClosedIcon$();
if (this.editingIcon != null ) this.offset=this.renderer.getIconTextGap$() + this.editingIcon.getIconWidth$();
 else this.offset=this.renderer.getIconTextGap$();
} else {
this.editingIcon=null;
this.offset=0;
}});

Clazz.newMeth(C$, 'prepareForEditing$',  function () {
if (this.editingComponent != null ) {
this.editingContainer.add$java_awt_Component(this.editingComponent);
}});

Clazz.newMeth(C$, 'createContainer$',  function () {
return Clazz.new_($I$(4,1),[this, null]);
});

Clazz.newMeth(C$, 'createTreeCellEditor$',  function () {
var aBorder=$I$(2).getBorder$O("Tree.editorBorder");
var editor=((P$.DefaultTreeCellEditor$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultTreeCellEditor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.DefaultCellEditor'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'shouldSelectCell$java_util_EventObject',  function (event) {
var retValue=C$.superclazz.prototype.shouldSelectCell$java_util_EventObject.apply(this, [event]);
return retValue;
});
})()
), Clazz.new_([this, null, Clazz.new_($I$(6,1).c$$javax_swing_border_Border,[this, null, aBorder])],$I$(5,1).c$$javax_swing_JTextField,P$.DefaultTreeCellEditor$1));
editor.setClickCountToStart$I(1);
return editor;
});

Clazz.newMeth(C$, 'cleanupAfterEditing',  function () {
if (this.editingComponent != null ) {
this.editingContainer.remove$java_awt_Component(this.editingComponent);
}this.editingComponent=null;
}, p$2);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultTreeCellEditor, "DefaultTextField", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JTextField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['border','javax.swing.border.Border']]]

Clazz.newMeth(C$, 'c$$javax_swing_border_Border',  function (border) {
;C$.superclazz.c$$javax_swing_text_Document$S$I.apply(this,[null, null, 0]);C$.$init$.apply(this);
this.setBorder$javax_swing_border_Border(border);
}, 1);

Clazz.newMeth(C$, 'setBorder$javax_swing_border_Border',  function (border) {
C$.superclazz.prototype.setBorder$javax_swing_border_Border.apply(this, [border]);
this.border=border;
});

Clazz.newMeth(C$, 'getBorder$',  function () {
return this.border;
});

Clazz.newMeth(C$, 'getFont$',  function () {
var font=C$.superclazz.prototype.getFont$.apply(this, []);
if (Clazz.instanceOf(font, "javax.swing.plaf.FontUIResource")) {
var parent=this.getParent$();
if (parent != null  && parent.getFont$() != null  ) font=parent.getFont$();
}return font;
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var size=this.getPrefSizeJTF$();
if (this.b$['javax.swing.tree.DefaultTreeCellEditor'].renderer != null  && this.b$['javax.swing.tree.DefaultTreeCellEditor'].getFont$.apply(this.b$['javax.swing.tree.DefaultTreeCellEditor'], []) == null  ) {
var rSize=this.b$['javax.swing.tree.DefaultTreeCellEditor'].renderer.getPreferredSize$();
size.height=rSize.height;
}return size;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultTreeCellEditor, "EditorContainer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.Container');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setLayout$java_awt_LayoutManager(null);
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
var width=this.getWidth$();
var height=this.getHeight$();
if (this.b$['javax.swing.tree.DefaultTreeCellEditor'].editingIcon != null ) {
var yLoc=p$1.calculateIconY$javax_swing_Icon.apply(this, [this.b$['javax.swing.tree.DefaultTreeCellEditor'].editingIcon]);
if (this.getComponentOrientation$().isLeftToRight$()) {
this.b$['javax.swing.tree.DefaultTreeCellEditor'].editingIcon.paintIcon$java_awt_Component$java_awt_Graphics$I$I(this, g, 0, yLoc);
} else {
this.b$['javax.swing.tree.DefaultTreeCellEditor'].editingIcon.paintIcon$java_awt_Component$java_awt_Graphics$I$I(this, g, width - this.b$['javax.swing.tree.DefaultTreeCellEditor'].editingIcon.getIconWidth$(), yLoc);
}}C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'doLayout$',  function () {
if (this.b$['javax.swing.tree.DefaultTreeCellEditor'].editingComponent != null ) {
var width=this.getWidth$();
var height=this.getHeight$();
if (this.getComponentOrientation$().isLeftToRight$()) {
this.b$['javax.swing.tree.DefaultTreeCellEditor'].editingComponent.setBounds$I$I$I$I(this.b$['javax.swing.tree.DefaultTreeCellEditor'].offset, 0, width - this.b$['javax.swing.tree.DefaultTreeCellEditor'].offset, height);
} else {
this.b$['javax.swing.tree.DefaultTreeCellEditor'].editingComponent.setBounds$I$I$I$I(0, 0, width - this.b$['javax.swing.tree.DefaultTreeCellEditor'].offset, height);
}}});

Clazz.newMeth(C$, 'calculateIconY$javax_swing_Icon',  function (icon) {
var iconHeight=icon.getIconHeight$();
var textHeight=this.b$['javax.swing.tree.DefaultTreeCellEditor'].editingComponent.getFontMetrics$java_awt_Font(this.b$['javax.swing.tree.DefaultTreeCellEditor'].editingComponent.getFont$()).getHeight$();
var textY=(iconHeight/2|0) - (textHeight/2|0);
var totalY=Math.min(0, textY);
var totalHeight=Math.max(iconHeight, textY + textHeight) - totalY;
return (this.getHeight$()/2|0) - (totalY + ((totalHeight/2|0)));
}, p$1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
if (this.b$['javax.swing.tree.DefaultTreeCellEditor'].editingComponent != null ) {
var pSize=this.b$['javax.swing.tree.DefaultTreeCellEditor'].editingComponent.getPreferredSize$();
pSize.width+=this.b$['javax.swing.tree.DefaultTreeCellEditor'].offset + 5;
var rSize=(this.b$['javax.swing.tree.DefaultTreeCellEditor'].renderer != null ) ? this.b$['javax.swing.tree.DefaultTreeCellEditor'].renderer.getPreferredSize$() : null;
if (rSize != null ) pSize.height=Math.max(pSize.height, rSize.height);
if (this.b$['javax.swing.tree.DefaultTreeCellEditor'].editingIcon != null ) pSize.height=Math.max(pSize.height, this.b$['javax.swing.tree.DefaultTreeCellEditor'].editingIcon.getIconHeight$());
pSize.width=Math.max(pSize.width, 100);
return pSize;
}return Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
