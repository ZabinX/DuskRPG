(function(){var P$=Clazz.newPackage("javax.swing.colorchooser"),I$=[[0,'java.awt.Dimension']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
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
size.width+=insets.left + insets.right;
size.height+=insets.top + insets.bottom;
return size;
} else {
return Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
}});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container',  function (cont) {
return this.preferredLayoutSize$java_awt_Container(cont);
});

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container',  function (container) {
try {
var c=container.getComponent$I(0);
c.setSize$java_awt_Dimension(c.getPreferredSize$());
var size=c.getSize$();
var containerSize=container.getSize$();
var containerInsets=container.getInsets$();
containerSize.width-=containerInsets.left + containerInsets.right;
containerSize.height-=containerInsets.top + containerInsets.bottom;
var componentLeft=((containerSize.width/2|0)) - ((size.width/2|0));
var componentTop=((containerSize.height/2|0)) - ((size.height/2|0));
componentLeft+=containerInsets.left;
componentTop+=containerInsets.top;
c.setBounds$I$I$I$I(componentLeft, componentTop, size.width, size.height);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
