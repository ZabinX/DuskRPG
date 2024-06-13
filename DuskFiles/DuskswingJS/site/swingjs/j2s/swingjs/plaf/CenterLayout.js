(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'java.awt.Dimension']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CenterLayout", null, null, 'java.awt.LayoutManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component',  function (name, comp) {
});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component',  function (comp) {
});

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container',  function (container) {
var c=container.getComponent$I(0);
if (c != null ) {
var size=c.getPreferredSize$();
var insets=container.getInsets$();
return Clazz.new_($I$(1,1).c$$I$I,[size.width + insets.left + insets.right , size.height + insets.top + insets.bottom ]);
} else {
return Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
}});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container',  function (cont) {
return this.preferredLayoutSize$java_awt_Container(cont);
});

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container',  function (container) {
if (container.getComponentCount$() > 0) {
var c=container.getComponent$I(0);
var pref=c.getPreferredSize$();
var containerWidth=container.getWidth$();
var containerHeight=container.getHeight$();
var containerInsets=container.getInsets$();
containerWidth-=containerInsets.left + containerInsets.right;
containerHeight-=containerInsets.top + containerInsets.bottom;
var left=((containerWidth - pref.width)/2|0) + containerInsets.left;
var right=((containerHeight - pref.height)/2|0) + containerInsets.top;
c.setBounds$I$I$I$I(left, right, pref.width, pref.height);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
