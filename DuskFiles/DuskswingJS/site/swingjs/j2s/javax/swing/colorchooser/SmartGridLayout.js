(function(){var P$=Clazz.newPackage("javax.swing.colorchooser"),p$1={},I$=[[0,'java.awt.Component','java.awt.Dimension','java.awt.JSComponent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SmartGridLayout", null, null, 'java.awt.LayoutManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rows=2;
this.columns=2;
this.xGap=2;
this.yGap=2;
this.componentCount=0;
},1);

C$.$fields$=[['I',['rows','columns','xGap','yGap','componentCount'],'O',['layoutGrid','java.awt.Component[][]']]]

Clazz.newMeth(C$, 'c$$I$I',  function (numColumns, numRows) {
;C$.$init$.apply(this);
this.rows=numRows;
this.columns=numColumns;
this.layoutGrid=Clazz.array($I$(1), [numColumns, numRows]);
}, 1);

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container',  function (c) {
p$1.buildLayoutGrid$java_awt_Container.apply(this, [c]);
var rowHeights=Clazz.array(Integer.TYPE, [this.rows]);
var columnWidths=Clazz.array(Integer.TYPE, [this.columns]);
for (var row=0; row < this.rows; row++) {
rowHeights[row]=p$1.computeRowHeight$I.apply(this, [row]);
}
for (var column=0; column < this.columns; column++) {
columnWidths[column]=p$1.computeColumnWidth$I.apply(this, [column]);
}
var insets=c.getInsets$();
if (c.getComponentOrientation$().isLeftToRight$()) {
var horizLoc=insets.left;
for (var column=0; column < this.columns; column++) {
var vertLoc=insets.top;
for (var row=0; row < this.rows; row++) {
var current=this.layoutGrid[column][row];
current.setBounds$I$I$I$I(horizLoc, vertLoc, columnWidths[column], rowHeights[row]);
vertLoc+=(rowHeights[row] + this.yGap);
}
horizLoc+=(columnWidths[column] + this.xGap);
}
} else {
var horizLoc=c.getWidth$() - insets.right;
for (var column=0; column < this.columns; column++) {
var vertLoc=insets.top;
horizLoc-=columnWidths[column];
for (var row=0; row < this.rows; row++) {
var current=this.layoutGrid[column][row];
current.setBounds$I$I$I$I(horizLoc, vertLoc, columnWidths[column], rowHeights[row]);
vertLoc+=(rowHeights[row] + this.yGap);
}
horizLoc-=this.xGap;
}
}});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container',  function (c) {
p$1.buildLayoutGrid$java_awt_Container.apply(this, [c]);
var insets=c.getInsets$();
var height=0;
var width=0;
for (var row=0; row < this.rows; row++) {
height+=p$1.computeRowHeight$I.apply(this, [row]);
}
for (var column=0; column < this.columns; column++) {
width+=p$1.computeColumnWidth$I.apply(this, [column]);
}
height+=(this.yGap * (this.rows - 1)) + insets.top + insets.bottom ;
width+=(this.xGap * (this.columns - 1)) + insets.right + insets.left ;
return Clazz.new_($I$(2,1).c$$I$I,[width, height]);
});

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container',  function (c) {
return this.minimumLayoutSize$java_awt_Container(c);
});

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component',  function (s, c) {
});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component',  function (c) {
});

Clazz.newMeth(C$, 'buildLayoutGrid$java_awt_Container',  function (c) {
var children=$I$(3).秘getChildArray$java_awt_Container(c);
for (var i=0, n=c.getComponentCount$(); i < n; i++) {
var row=0;
var column=0;
if (i != 0) {
column=i % this.columns;
row=((i - column)/this.columns|0);
}this.layoutGrid[column][row]=children[i];
}
}, p$1);

Clazz.newMeth(C$, 'computeColumnWidth$I',  function (columnNum) {
var maxWidth=1;
for (var row=0; row < this.rows; row++) {
var width=this.layoutGrid[columnNum][row].getPreferredSize$().width;
if (width > maxWidth) {
maxWidth=width;
}}
return maxWidth;
}, p$1);

Clazz.newMeth(C$, 'computeRowHeight$I',  function (rowNum) {
var maxHeight=1;
for (var column=0; column < this.columns; column++) {
var height=this.layoutGrid[column][rowNum].getPreferredSize$().height;
if (height > maxHeight) {
maxHeight=height;
}}
return maxHeight;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
