(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.Insets']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Label", null, 'javax.swing.JLabel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['awtInsets','java.awt.Insets']]]

Clazz.newMeth(C$, 'isAWT$',  function () {
});

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$I.apply(this, ["", 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (text) {
C$.c$$S$I.apply(this, [text, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I',  function (text, center) {
;C$.superclazz.c$$S.apply(this,[text]);C$.$init$.apply(this);

this.getUI$().isAWT = true;
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [null]);
this.setAlignment$I(center);
}, 1);

Clazz.newMeth(C$, 'setText$S',  function (text) {
C$.superclazz.prototype.setText$S.apply(this, [text]);
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color',  function (c) {
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [c]);
C$.superclazz.prototype.setOpaque$Z.apply(this, [c != null ]);
});

Clazz.newMeth(C$, 'getInsets$',  function () {
return C$.awtInsets;
});

Clazz.newMeth(C$, 'getInsets$java_awt_Insets',  function (s) {
s.top=C$.awtInsets.top;
s.left=C$.awtInsets.left;
s.bottom=C$.awtInsets.bottom;
s.right=C$.awtInsets.right;
return s;
});

Clazz.newMeth(C$, 'setAlignment$I',  function (alignment) {
var xAlignment=0.0;
var yAlignment=0.5;
switch (alignment) {
case 0:
alignment=2;
xAlignment=0;
break;
case 2:
alignment=4;
xAlignment=1;
break;
case 1:
alignment=0;
xAlignment=0.5;
break;
}
C$.superclazz.prototype.setAlignmentX$F.apply(this, [xAlignment]);
C$.superclazz.prototype.setAlignmentY$F.apply(this, [yAlignment]);
C$.superclazz.prototype.setHorizontalAlignment$I.apply(this, [alignment]);
C$.superclazz.prototype.setVerticalAlignment$I.apply(this, [0]);
C$.superclazz.prototype.setVerticalTextPosition$I.apply(this, [0]);
});

C$.$static$=function(){C$.$static$=0;
C$.awtInsets=Clazz.new_($I$(1,1).c$$I$I$I$I,[2, 2, 2, 2]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
