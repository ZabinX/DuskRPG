(function(){var P$=Clazz.newPackage("javax.swing.colorchooser"),p$1={},p$2={},I$=[[0,'javax.swing.colorchooser.AbstractColorChooserPanel','java.awt.GridBagLayout','java.awt.GridBagConstraints','javax.swing.JPanel','javax.swing.colorchooser.MainSwatchPanel','javax.swing.colorchooser.RecentSwatchPanel',['javax.swing.colorchooser.DefaultSwatchChooserPanel','.MainSwatchListener'],['javax.swing.colorchooser.DefaultSwatchChooserPanel','.RecentSwatchListener'],'java.awt.BorderLayout','javax.swing.border.CompoundBorder','javax.swing.border.LineBorder','java.awt.Color','java.awt.Insets','javax.swing.JLabel','java.awt.Dimension','javax.swing.UIManager']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RecentSwatchPanel", null, 'javax.swing.colorchooser.SwatchPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['recentColors','java.awt.Color[]']]]

Clazz.newMeth(C$, 'initValues$',  function () {
this.swatchSize=$I$(16).getDimension$O("ColorChooser.swatchesRecentSwatchSize");
this.numSwatches=Clazz.new_($I$(15,1).c$$I$I,[5, 7]);
this.gap=Clazz.new_($I$(15,1).c$$I$I,[1, 1]);
});

Clazz.newMeth(C$, 'initColors$',  function () {
if (C$.recentColors == null ) {
var defaultRecentColor=$I$(16).getColor$O("ColorChooser.swatchesDefaultRecentColor");
var numColors=this.numSwatches.width * this.numSwatches.height;
this.colors=Clazz.array($I$(12), [numColors]);
for (var i=0; i < numColors; i++) {
this.colors[i]=defaultRecentColor;
}
C$.recentColors=this.colors;
} else {
this.colors=C$.recentColors;
}});

Clazz.newMeth(C$, 'setMostRecentColor$java_awt_Color',  function (c) {
System.arraycopy$O$I$O$I$I(this.colors, 0, this.colors, 1, this.colors.length - 1);
this.colors[0]=c;
this.秘repaint$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
