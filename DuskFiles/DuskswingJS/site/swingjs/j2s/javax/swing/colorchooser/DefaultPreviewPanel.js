(function(){var P$=Clazz.newPackage("javax.swing.colorchooser"),p$1={},I$=[[0,'javax.swing.SwingUtilities','javax.swing.JColorChooser','java.awt.Dimension','java.awt.Color']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultPreviewPanel", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.squareSize=25;
this.squareGap=5;
this.innerGap=5;
this.textGap=5;
this.sampleText="Sample Text";
this.swatchWidth=50;
this.oldColor=null;
},1);

C$.$fields$=[['I',['squareSize','squareGap','innerGap','textGap','swatchWidth'],'S',['sampleText'],'O',['oldColor','java.awt.Color']]]

Clazz.newMeth(C$, 'getColorChooser',  function () {
return $I$(1,"getAncestorOfClass$Class$java_awt_Component",[Clazz.getClass($I$(2)), this]);
}, p$1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var host=p$1.getColorChooser.apply(this, []);
if (host == null ) {
host=this;
}var fm=host.getFontMetrics$java_awt_Font(this.getFont$());
var height=fm.getHeight$();
var width=fm.stringWidth$S(this.sampleText);
var y=height * 5 + this.textGap * 2;
var x=this.squareSize * 3 + this.squareGap * 2 + this.swatchWidth + width + this.textGap * 3;
return Clazz.new_($I$(3,1).c$$I$I,[x, y]);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
if (this.oldColor == null ) this.oldColor=this.getForeground$();
g.setColor$java_awt_Color(this.getBackground$());
g.fillRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
if (this.getComponentOrientation$().isLeftToRight$()) {
var squareWidth=p$1.paintSquares$java_awt_Graphics$I.apply(this, [g, 0]);
var textWidth=p$1.paintText$java_awt_Graphics$I.apply(this, [g, squareWidth]);
p$1.paintSwatch$java_awt_Graphics$I.apply(this, [g, squareWidth + textWidth]);
} else {
var swatchWidth=p$1.paintSwatch$java_awt_Graphics$I.apply(this, [g, 0]);
var textWidth=p$1.paintText$java_awt_Graphics$I.apply(this, [g, swatchWidth]);
p$1.paintSquares$java_awt_Graphics$I.apply(this, [g, swatchWidth + textWidth]);
}});

Clazz.newMeth(C$, 'paintSwatch$java_awt_Graphics$I',  function (g, offsetX) {
var swatchX=offsetX;
g.setColor$java_awt_Color(this.oldColor);
g.fillRect$I$I$I$I(swatchX, 0, this.swatchWidth, (this.squareSize) + ((this.squareGap/2|0)));
g.setColor$java_awt_Color(this.getForeground$());
g.fillRect$I$I$I$I(swatchX, (this.squareSize) + ((this.squareGap/2|0)), this.swatchWidth, (this.squareSize) + ((this.squareGap/2|0)));
return (swatchX + this.swatchWidth);
}, p$1);

Clazz.newMeth(C$, 'paintText$java_awt_Graphics$I',  function (g, offsetX) {
g.setFont$java_awt_Font(this.getFont$());
var fm=this.getFont$().getFontMetrics$();
var ascent=fm.getAscent$();
var height=fm.getHeight$();
var width=fm.stringWidth$S(this.sampleText);
var textXOffset=offsetX + this.textGap;
var color=this.getForeground$();
g.setColor$java_awt_Color(color);
g.drawString$S$I$I(this.sampleText, textXOffset + ((this.textGap/2|0)), ascent + 2);
g.fillRect$I$I$I$I(textXOffset, (height) + this.textGap, width + (this.textGap), height + 2);
g.setColor$java_awt_Color($I$(4).black);
g.drawString$S$I$I(this.sampleText, textXOffset + ((this.textGap/2|0)), height + ascent + this.textGap + 2 );
g.setColor$java_awt_Color($I$(4).white);
g.fillRect$I$I$I$I(textXOffset, (height + this.textGap) * 2, width + (this.textGap), height + 2);
g.setColor$java_awt_Color(color);
g.drawString$S$I$I(this.sampleText, textXOffset + ((this.textGap/2|0)), ((height + this.textGap) * 2) + ascent + 2 );
return width + this.textGap * 3;
}, p$1);

Clazz.newMeth(C$, 'paintSquares$java_awt_Graphics$I',  function (g, offsetX) {
var squareXOffset=offsetX;
var color=this.getForeground$();
g.setColor$java_awt_Color($I$(4).white);
g.fillRect$I$I$I$I(squareXOffset, 0, this.squareSize, this.squareSize);
g.setColor$java_awt_Color(color);
g.fillRect$I$I$I$I(squareXOffset + this.innerGap, this.innerGap, this.squareSize - (this.innerGap * 2), this.squareSize - (this.innerGap * 2));
g.setColor$java_awt_Color($I$(4).white);
g.fillRect$I$I$I$I(squareXOffset + this.innerGap * 2, this.innerGap * 2, this.squareSize - (this.innerGap * 4), this.squareSize - (this.innerGap * 4));
g.setColor$java_awt_Color(color);
g.fillRect$I$I$I$I(squareXOffset, this.squareSize + this.squareGap, this.squareSize, this.squareSize);
g.translate$I$I(this.squareSize + this.squareGap, 0);
g.setColor$java_awt_Color($I$(4).black);
g.fillRect$I$I$I$I(squareXOffset, 0, this.squareSize, this.squareSize);
g.setColor$java_awt_Color(color);
g.fillRect$I$I$I$I(squareXOffset + this.innerGap, this.innerGap, this.squareSize - (this.innerGap * 2), this.squareSize - (this.innerGap * 2));
g.setColor$java_awt_Color($I$(4).white);
g.fillRect$I$I$I$I(squareXOffset + this.innerGap * 2, this.innerGap * 2, this.squareSize - (this.innerGap * 4), this.squareSize - (this.innerGap * 4));
g.translate$I$I(-(this.squareSize + this.squareGap), 0);
g.translate$I$I(this.squareSize + this.squareGap, this.squareSize + this.squareGap);
g.setColor$java_awt_Color($I$(4).white);
g.fillRect$I$I$I$I(squareXOffset, 0, this.squareSize, this.squareSize);
g.setColor$java_awt_Color(color);
g.fillRect$I$I$I$I(squareXOffset + this.innerGap, this.innerGap, this.squareSize - (this.innerGap * 2), this.squareSize - (this.innerGap * 2));
g.translate$I$I(-(this.squareSize + this.squareGap), -(this.squareSize + this.squareGap));
g.translate$I$I((this.squareSize + this.squareGap) * 2, 0);
g.setColor$java_awt_Color($I$(4).white);
g.fillRect$I$I$I$I(squareXOffset, 0, this.squareSize, this.squareSize);
g.setColor$java_awt_Color(color);
g.fillRect$I$I$I$I(squareXOffset + this.innerGap, this.innerGap, this.squareSize - (this.innerGap * 2), this.squareSize - (this.innerGap * 2));
g.setColor$java_awt_Color($I$(4).black);
g.fillRect$I$I$I$I(squareXOffset + this.innerGap * 2, this.innerGap * 2, this.squareSize - (this.innerGap * 4), this.squareSize - (this.innerGap * 4));
g.translate$I$I(-((this.squareSize + this.squareGap) * 2), 0);
g.translate$I$I((this.squareSize + this.squareGap) * 2, (this.squareSize + this.squareGap));
g.setColor$java_awt_Color($I$(4).black);
g.fillRect$I$I$I$I(squareXOffset, 0, this.squareSize, this.squareSize);
g.setColor$java_awt_Color(color);
g.fillRect$I$I$I$I(squareXOffset + this.innerGap, this.innerGap, this.squareSize - (this.innerGap * 2), this.squareSize - (this.innerGap * 2));
g.translate$I$I(-((this.squareSize + this.squareGap) * 2), -(this.squareSize + this.squareGap));
return (this.squareSize * 3 + this.squareGap * 2);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
