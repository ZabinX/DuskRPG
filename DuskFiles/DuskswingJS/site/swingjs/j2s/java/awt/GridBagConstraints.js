(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.Insets','InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GridBagConstraints", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['weightx','weighty'],'I',['gridx','gridy','gridwidth','gridheight','anchor','fill','ipadx','ipady','tempX','tempY','tempWidth','tempHeight','minWidth','minHeight','ascent','descent','centerPadding','centerOffset'],'O',['insets','java.awt.Insets','baselineResizeBehavior','java.awt.Component.BaselineResizeBehavior']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.gridx=-1;
this.gridy=-1;
this.gridwidth=1;
this.gridheight=1;
this.weightx=0;
this.weighty=0;
this.anchor=10;
this.fill=0;
this.insets=Clazz.new_($I$(1,1).c$$I$I$I$I,[0, 0, 0, 0]);
this.ipadx=0;
this.ipady=0;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$D$D$I$I$java_awt_Insets$I$I',  function (gridx, gridy, gridwidth, gridheight, weightx, weighty, anchor, fill, insets, ipadx, ipady) {
;C$.$init$.apply(this);
this.gridx=gridx;
this.gridy=gridy;
this.gridwidth=gridwidth;
this.gridheight=gridheight;
this.fill=fill;
this.ipadx=ipadx;
this.ipady=ipady;
this.insets=insets;
this.anchor=anchor;
this.weightx=weightx;
this.weighty=weighty;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "[" + this.gridx + "," + this.gridy + "," + this.gridwidth + "," + this.gridheight + "," + this.fill + "," + this.ipadx + "," + this.ipady + "," + this.insets + "," + this.anchor + "," + new Double(this.weightx).toString() + "," + new Double(this.weighty).toString() + "]" ;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var c=Clazz.clone(this);
c.insets=this.insets.clone$();
return c;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(2,1));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'isVerticallyResizable$',  function () {
return (this.fill == 1 || this.fill == 3 );
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
