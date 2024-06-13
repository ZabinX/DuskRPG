(function(){var P$=Clazz.newPackage("javax.swing.colorchooser"),p$1={},I$=[[0,'javax.swing.colorchooser.AbstractColorChooserPanel','java.awt.BorderLayout','javax.swing.JPanel','javax.swing.colorchooser.SmartGridLayout','javax.swing.JLabel','javax.swing.JSpinner','javax.swing.SpinnerNumberModel','javax.swing.colorchooser.CenterLayout','javax.swing.JSlider','java.awt.Font','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultRGBChooserPanel", null, 'javax.swing.colorchooser.AbstractColorChooserPanel', 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.minValue=0;
this.maxValue=255;
this.isAdjusting=false;
},1);

C$.$fields$=[['Z',['isAdjusting'],'I',['minValue','maxValue'],'O',['redSlider','javax.swing.JSlider','+greenSlider','+blueSlider','redField','javax.swing.JSpinner','+blueField','+greenField']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setInheritsPopupMenu$Z(true);
}, 1);

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (newColor) {
var red=newColor.getRed$();
var blue=newColor.getBlue$();
var green=newColor.getGreen$();
if (this.redSlider.getValue$() != red) {
this.redSlider.setValue$I(red);
}if (this.greenSlider.getValue$() != green) {
this.greenSlider.setValue$I(green);
}if (this.blueSlider.getValue$() != blue) {
this.blueSlider.setValue$I(blue);
}if ((this.redField.getValue$()).intValue$() != red) this.redField.setValue$O( new Integer(red));
if ((this.greenField.getValue$()).intValue$() != green) this.greenField.setValue$O( new Integer(green));
if ((this.blueField.getValue$()).intValue$() != blue) this.blueField.setValue$O( new Integer(blue));
}, p$1);

Clazz.newMeth(C$, 'getDisplayName$',  function () {
return "RGB";
});

Clazz.newMeth(C$, 'getMnemonic$',  function () {
return $I$(1).getInt$O$I("ColorChooser.rgbMnemonic", -1);
});

Clazz.newMeth(C$, 'getDisplayedMnemonicIndex$',  function () {
return $I$(1).getInt$O$I("ColorChooser.rgbDisplayedMnemonicIndex", -1);
});

Clazz.newMeth(C$, 'getSmallDisplayIcon$',  function () {
return null;
});

Clazz.newMeth(C$, 'getLargeDisplayIcon$',  function () {
return null;
});

Clazz.newMeth(C$, 'installChooserPanel$javax_swing_JColorChooser',  function (enclosingChooser) {
C$.superclazz.prototype.installChooserPanel$javax_swing_JColorChooser.apply(this, [enclosingChooser]);
});

Clazz.newMeth(C$, 'buildChooser$',  function () {
var redString="Red";
var greenString="Green";
var blueString="Blue";
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(2,1)));
var color=this.getColorFromModel$();
var enclosure=Clazz.new_($I$(3,1));
enclosure.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4,1).c$$I$I,[3, 3]));
enclosure.setInheritsPopupMenu$Z(true);
this.add$java_awt_Component$O(enclosure, "Center");
var l=Clazz.new_($I$(5,1).c$$S,[redString]);
l.setDisplayedMnemonic$I($I$(1).getInt$O$I("ColorChooser.rgbRedMnemonic", -1));
enclosure.add$java_awt_Component(l);
this.redSlider=p$1.newSlider$I$javax_swing_JLabel.apply(this, [color.getRed$(), l]);
enclosure.add$java_awt_Component(this.redSlider);
this.redField=Clazz.new_([Clazz.new_([color.getRed$(), 0, 255, 1],$I$(7,1).c$$I$I$I$I)],$I$(6,1).c$$javax_swing_SpinnerModel);
this.redField.setInheritsPopupMenu$Z(true);
var redFieldHolder=Clazz.new_([Clazz.new_($I$(8,1))],$I$(3,1).c$$java_awt_LayoutManager);
redFieldHolder.setInheritsPopupMenu$Z(true);
this.redField.addChangeListener$javax_swing_event_ChangeListener(this);
redFieldHolder.add$java_awt_Component(this.redField);
enclosure.add$java_awt_Component(redFieldHolder);
l=Clazz.new_($I$(5,1).c$$S,[greenString]);
l.setDisplayedMnemonic$I($I$(1).getInt$O$I("ColorChooser.rgbGreenMnemonic", -1));
enclosure.add$java_awt_Component(l);
this.greenSlider=p$1.newSlider$I$javax_swing_JLabel.apply(this, [color.getGreen$(), l]);
enclosure.add$java_awt_Component(this.greenSlider);
this.greenField=Clazz.new_([Clazz.new_([color.getGreen$(), 0, 255, 1],$I$(7,1).c$$I$I$I$I)],$I$(6,1).c$$javax_swing_SpinnerModel);
this.greenField.setInheritsPopupMenu$Z(true);
var greenFieldHolder=Clazz.new_([Clazz.new_($I$(8,1))],$I$(3,1).c$$java_awt_LayoutManager);
greenFieldHolder.add$java_awt_Component(this.greenField);
greenFieldHolder.setInheritsPopupMenu$Z(true);
this.greenField.addChangeListener$javax_swing_event_ChangeListener(this);
enclosure.add$java_awt_Component(greenFieldHolder);
l=Clazz.new_($I$(5,1).c$$S,[blueString]);
l.setDisplayedMnemonic$I($I$(1).getInt$O$I("ColorChooser.rgbBlueMnemonic", -1));
enclosure.add$java_awt_Component(l);
this.blueSlider=p$1.newSlider$I$javax_swing_JLabel.apply(this, [color.getBlue$(), l]);
enclosure.add$java_awt_Component(this.blueSlider);
this.blueField=Clazz.new_([Clazz.new_([color.getBlue$(), 0, 255, 1],$I$(7,1).c$$I$I$I$I)],$I$(6,1).c$$javax_swing_SpinnerModel);
this.blueField.setInheritsPopupMenu$Z(true);
var blueFieldHolder=Clazz.new_([Clazz.new_($I$(8,1))],$I$(3,1).c$$java_awt_LayoutManager);
blueFieldHolder.add$java_awt_Component(this.blueField);
this.blueField.addChangeListener$javax_swing_event_ChangeListener(this);
blueFieldHolder.setInheritsPopupMenu$Z(true);
enclosure.add$java_awt_Component(blueFieldHolder);
this.redSlider.addChangeListener$javax_swing_event_ChangeListener(this);
this.greenSlider.addChangeListener$javax_swing_event_ChangeListener(this);
this.blueSlider.addChangeListener$javax_swing_event_ChangeListener(this);
this.redSlider.putClientProperty$O$O("JSlider.isFilled", Boolean.TRUE);
this.greenSlider.putClientProperty$O$O("JSlider.isFilled", Boolean.TRUE);
this.blueSlider.putClientProperty$O$O("JSlider.isFilled", Boolean.TRUE);
});

Clazz.newMeth(C$, 'newSlider$I$javax_swing_JLabel',  function (val, l) {
var s=Clazz.new_($I$(9,1).c$$I$I$I$I,[0, 0, 255, val]);
s.setFont$java_awt_Font(Clazz.new_($I$(10,1).c$$S$I$I,["Helvetica", 0, 8]));
s.setMajorTickSpacing$I(85);
s.setMinorTickSpacing$I(17);
s.setPaintTicks$Z(true);
s.setPaintLabels$Z(true);
s.setInheritsPopupMenu$Z(true);
l.setLabelFor$java_awt_Component(s);
return s;
}, p$1);

Clazz.newMeth(C$, 'uninstallChooserPanel$javax_swing_JColorChooser',  function (enclosingChooser) {
C$.superclazz.prototype.uninstallChooserPanel$javax_swing_JColorChooser.apply(this, [enclosingChooser]);
this.removeAll$();
});

Clazz.newMeth(C$, 'updateChooser$',  function () {
if (!this.isAdjusting) {
this.isAdjusting=true;
p$1.setColor$java_awt_Color.apply(this, [this.getColorFromModel$()]);
this.isAdjusting=false;
}});

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (Clazz.instanceOf(e.getSource$(), "javax.swing.JSlider") && !this.isAdjusting ) {
var red=this.redSlider.getValue$();
var green=this.greenSlider.getValue$();
var blue=this.blueSlider.getValue$();
var color=Clazz.new_($I$(11,1).c$$I$I$I,[red, green, blue]);
this.getColorSelectionModel$().setSelectedColor$java_awt_Color(color);
} else if (Clazz.instanceOf(e.getSource$(), "javax.swing.JSpinner") && !this.isAdjusting ) {
var red=(this.redField.getValue$()).intValue$();
var green=(this.greenField.getValue$()).intValue$();
var blue=(this.blueField.getValue$()).intValue$();
var color=Clazz.new_($I$(11,1).c$$I$I$I,[red, green, blue]);
this.getColorSelectionModel$().setSelectedColor$java_awt_Color(color);
}});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
