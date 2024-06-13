(function(){var P$=Clazz.newPackage("javax.swing.border"),I$=[[0,'java.awt.Insets']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EmptyBorder", null, 'javax.swing.border.AbstractBorder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['left','right','top','bottom']]]

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (top, left, bottom, right) {
Clazz.super_(C$, this);
this.top=top;
this.right=right;
this.bottom=bottom;
this.left=left;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Insets',  function (borderInsets) {
Clazz.super_(C$, this);
this.top=borderInsets.top;
this.right=borderInsets.right;
this.bottom=borderInsets.bottom;
this.left=borderInsets.left;
}, 1);

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component',  function (c) {
return this.getBorderInsets$();
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component$java_awt_Insets',  function (c, insets) {
insets.left=this.left;
insets.top=this.top;
insets.right=this.right;
insets.bottom=this.bottom;
return insets;
});

Clazz.newMeth(C$, 'getBorderInsets$',  function () {
return Clazz.new_($I$(1,1).c$$I$I$I$I,[this.top, this.left, this.bottom, this.right]);
});

Clazz.newMeth(C$, 'isBorderOpaque$',  function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
