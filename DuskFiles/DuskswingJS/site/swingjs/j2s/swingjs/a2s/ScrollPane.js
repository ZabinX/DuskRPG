(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.Point','java.awt.Dimension']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ScrollPane", null, 'javax.swing.JScrollPane');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isAWT$',  function () {
});

Clazz.newMeth(C$, 'isAWTContainer$',  function () {
});

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [0]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (scrollbars) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
switch (scrollbars) {
case 2:
C$.superclazz.prototype.setVerticalScrollBarPolicy$I.apply(this, [21]);
C$.superclazz.prototype.setHorizontalScrollBarPolicy$I.apply(this, [31]);
break;
case 1:
C$.superclazz.prototype.setVerticalScrollBarPolicy$I.apply(this, [22]);
C$.superclazz.prototype.setHorizontalScrollBarPolicy$I.apply(this, [32]);
break;
case 0:
break;
}
C$.superclazz.prototype.setOpaque$Z.apply(this, [true]);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_Component',  function (c) {
C$.superclazz.prototype.getViewport$.apply(this, []).add$java_awt_Component(c);
if (!C$.superclazz.prototype.isBackgroundSet$.apply(this, []) && c.isBackgroundSet$() ) C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [c.getBackground$()]);
return c;
});

Clazz.newMeth(C$, 'getVAdjustable$',  function () {
return C$.superclazz.prototype.getVerticalScrollBar$.apply(this, []);
});

Clazz.newMeth(C$, 'getHAdjustable$',  function () {
return C$.superclazz.prototype.getHorizontalScrollBar$.apply(this, []);
});

Clazz.newMeth(C$, 'setScrollPosition$I$I',  function (x, y) {
/*sync org.eclipse.jdt.core.dom.SuperMethodInvocation*/(C$.superclazz.prototype.getTreeLock$.apply(this, []));
{
if (C$.superclazz.prototype.getComponentCount$.apply(this, []) == 0) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["child is null"]);
}C$.superclazz.prototype.getHorizontalScrollBar$.apply(this, []).setValue$I(x);
C$.superclazz.prototype.getVerticalScrollBar$.apply(this, []).setValue$I(y);
}});

Clazz.newMeth(C$, 'setScrollPosition$java_awt_Point',  function (p) {
this.setScrollPosition$I$I(p.x, p.y);
});

Clazz.newMeth(C$, 'getScrollPosition$',  function () {
/*sync org.eclipse.jdt.core.dom.SuperMethodInvocation*/(C$.superclazz.prototype.getTreeLock$.apply(this, []));
{
if (C$.superclazz.prototype.getComponentCount$.apply(this, []) == 0) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["child is null"]);
}return Clazz.new_([C$.superclazz.prototype.getHorizontalScrollBar$.apply(this, []).getValue$(), C$.superclazz.prototype.getVerticalScrollBar$.apply(this, []).getValue$()],$I$(1,1).c$$I$I);
}});

Clazz.newMeth(C$, 'getViewportSize$',  function () {
var i=this.getInsets$();
return Clazz.new_($I$(2,1).c$$I$I,[this.width - i.right - i.left , this.height - i.top - i.bottom ]);
});

Clazz.newMeth(C$, 'getInsets$',  function () {
return this.秘getInsets$();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
