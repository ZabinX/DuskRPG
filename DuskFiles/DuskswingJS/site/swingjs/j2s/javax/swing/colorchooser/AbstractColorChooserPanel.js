(function(){var P$=Clazz.newPackage("javax.swing.colorchooser"),I$=[[0,['javax.swing.colorchooser.AbstractColorChooserPanel','.ModelListener'],'javax.swing.UIManager']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractColorChooserPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel');
C$.$classes$=[['ModelListener',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dirty=true;
},1);

C$.$fields$=[['Z',['dirty'],'O',['chooser','javax.swing.JColorChooser','colorListener','javax.swing.event.ChangeListener']]]

Clazz.newMeth(C$, 'getMnemonic$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getDisplayedMnemonicIndex$',  function () {
return -1;
});

Clazz.newMeth(C$, 'installChooserPanel$javax_swing_JColorChooser',  function (enclosingChooser) {
if (this.chooser != null ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["This chooser panel is already installed"]);
}this.chooser=enclosingChooser;
this.buildChooser$();
this.updateChooser$();
this.colorListener=Clazz.new_($I$(1,1),[this, null]);
this.getColorSelectionModel$().addChangeListener$javax_swing_event_ChangeListener(this.colorListener);
});

Clazz.newMeth(C$, 'uninstallChooserPanel$javax_swing_JColorChooser',  function (enclosingChooser) {
this.getColorSelectionModel$().removeChangeListener$javax_swing_event_ChangeListener(this.colorListener);
this.chooser=null;
});

Clazz.newMeth(C$, 'getColorSelectionModel$',  function () {
return this.chooser.getSelectionModel$();
});

Clazz.newMeth(C$, 'getColorFromModel$',  function () {
return this.getColorSelectionModel$().getSelectedColor$();
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
if (this.dirty) {
this.updateChooser$();
this.dirty=false;
}C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'getInt$O$I',  function (key, defaultValue) {
var value=$I$(2).get$O(key);
if (Clazz.instanceOf(value, "java.lang.Integer")) {
return (value).intValue$();
}if (Clazz.instanceOf(value, "java.lang.String")) {
try {
return Integer.parseInt$S(value);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
} else {
throw nfe;
}
}
}return defaultValue;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractColorChooserPanel, "ModelListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.b$['java.awt.Component'].isShowing$.apply(this.b$['java.awt.Component'], [])) {
this.b$['javax.swing.colorchooser.AbstractColorChooserPanel'].updateChooser$.apply(this.b$['javax.swing.colorchooser.AbstractColorChooserPanel'], []);
this.b$['javax.swing.colorchooser.AbstractColorChooserPanel'].dirty=false;
} else {
this.b$['javax.swing.colorchooser.AbstractColorChooserPanel'].dirty=true;
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
