(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'java.util.ArrayList',['javax.swing.UIManager','.LookAndFeelInfo'],'swingjs.JSUtil','javax.swing.SwingUtilities','java.util.Locale','java.beans.PropertyChangeListener','swingjs.JSToolkit','javax.swing.FocusManager','java.awt.KeyboardFocusManager','javax.swing.LayoutFocusTraversalPolicy','javax.swing.RepaintManager','sun.awt.PaintEventDispatcher','javax.swing.SwingPaintEventDispatcher']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UIManager", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['LookAndFeelInfo',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['installedLAFs','javax.swing.UIManager.LookAndFeelInfo[]','laf','javax.swing.LookAndFeel','uid','javax.swing.UIDefaults']]]

Clazz.newMeth(C$, 'getLookAndFeelDefaults$',  function () {
return C$.uid;
}, 1);

Clazz.newMeth(C$, 'getInstalledLookAndFeels$',  function () {
return C$.installedLAFs;
}, 1);

Clazz.newMeth(C$, 'setInstalledLookAndFeels$javax_swing_UIManager_LookAndFeelInfoA',  function (infos) {
$I$(3).notImplemented$S(null);
}, 1);

Clazz.newMeth(C$, 'installLookAndFeel$javax_swing_UIManager_LookAndFeelInfo',  function (info) {
$I$(3).notImplemented$S(null);
}, 1);

Clazz.newMeth(C$, 'installLookAndFeel$S$S',  function (name, className) {
$I$(3).notImplemented$S(null);
}, 1);

Clazz.newMeth(C$, 'getLookAndFeel$',  function () {
return (C$.laf == null  ? (C$.laf=$I$(3).getInstance$S("swingjs.plaf.HTML5LookAndFeel")) : C$.laf);
}, 1);

Clazz.newMeth(C$, 'setLookAndFeel$javax_swing_LookAndFeel',  function (newLookAndFeel) {
}, 1);

Clazz.newMeth(C$, 'setLookAndFeel$S',  function (className) {
var lnfClass=$I$(4).loadSystemClass$S(className);
C$.setLookAndFeel$javax_swing_LookAndFeel((lnfClass.newInstance$()));
}, 1);

Clazz.newMeth(C$, 'getSystemLookAndFeelClassName$',  function () {
return C$.getCrossPlatformLookAndFeelClassName$();
}, 1);

Clazz.newMeth(C$, 'getCrossPlatformLookAndFeelClassName$',  function () {
return "swingjs.plaf.HTML5LookAndFeel";
}, 1);

Clazz.newMeth(C$, 'getDefaults$',  function () {
C$.maybeInitialize$();
return C$.uid;
}, 1);

Clazz.newMeth(C$, 'getFont$O',  function (key) {
return C$.getDefaults$().getFont$O(key);
}, 1);

Clazz.newMeth(C$, 'getFont$O$java_util_Locale',  function (key, l) {
return C$.getDefaults$().getFont$O$java_util_Locale(key, l);
}, 1);

Clazz.newMeth(C$, 'getColor$O',  function (key) {
return C$.getDefaults$().getColor$O(key);
}, 1);

Clazz.newMeth(C$, 'getColor$O$java_util_Locale',  function (key, l) {
return C$.getDefaults$().getColor$O$java_util_Locale(key, l);
}, 1);

Clazz.newMeth(C$, 'getIcon$O',  function (key) {
return C$.getDefaults$().getIcon$O(key);
}, 1);

Clazz.newMeth(C$, 'getIcon$O$java_util_Locale',  function (key, l) {
return C$.getDefaults$().getIcon$O$java_util_Locale(key, l);
}, 1);

Clazz.newMeth(C$, 'getBorder$O',  function (key) {
return C$.getDefaults$().getBorder$O(key);
}, 1);

Clazz.newMeth(C$, 'getBorder$O$java_util_Locale',  function (key, l) {
return C$.getDefaults$().getBorder$O$java_util_Locale(key, l);
}, 1);

Clazz.newMeth(C$, 'getString$O',  function (key) {
return C$.getDefaults$().getString$O(key);
}, 1);

Clazz.newMeth(C$, 'getString$O$java_util_Locale',  function (key, l) {
return C$.getDefaults$().getString$O$java_util_Locale(key, l);
}, 1);

Clazz.newMeth(C$, 'getString$O$java_awt_Component',  function (key, c) {
var l=(c == null ) ? $I$(5).getDefault$() : c.getLocale$();
return C$.getString$O$java_util_Locale(key, l);
}, 1);

Clazz.newMeth(C$, 'getInt$O',  function (key) {
return C$.getDefaults$().getInt$O(key);
}, 1);

Clazz.newMeth(C$, 'getInt$O$java_util_Locale',  function (key, l) {
return C$.getDefaults$().getInt$O$java_util_Locale(key, l);
}, 1);

Clazz.newMeth(C$, 'getBoolean$O',  function (key) {
return C$.getDefaults$().getBoolean$O(key);
}, 1);

Clazz.newMeth(C$, 'getBoolean$O$java_util_Locale',  function (key, l) {
return C$.getDefaults$().getBoolean$O$java_util_Locale(key, l);
}, 1);

Clazz.newMeth(C$, 'getInsets$O',  function (key) {
return C$.getDefaults$().getInsets$O(key);
}, 1);

Clazz.newMeth(C$, 'getInsets$O$java_util_Locale',  function (key, l) {
return C$.getDefaults$().getInsets$O$java_util_Locale(key, l);
}, 1);

Clazz.newMeth(C$, 'getDimension$O',  function (key) {
return C$.getDefaults$().getDimension$O(key);
}, 1);

Clazz.newMeth(C$, 'getDimension$O$java_util_Locale',  function (key, l) {
return C$.getDefaults$().getDimension$O$java_util_Locale(key, l);
}, 1);

Clazz.newMeth(C$, 'get$O',  function (key) {
return C$.getDefaults$().get$O(key);
}, 1);

Clazz.newMeth(C$, 'get$O$java_util_Locale',  function (key, l) {
return C$.getDefaults$().get$O$java_util_Locale(key, l);
}, 1);

Clazz.newMeth(C$, 'put$O$O',  function (key, value) {
return C$.getDefaults$().put$O$O(key, value);
}, 1);

Clazz.newMeth(C$, 'getUI$java_awt_Component',  function (target) {
C$.maybeInitialize$();
C$.maybeInitializeFocusPolicy$javax_swing_JComponent(target);
var ui=C$.getDefaults$().getUI$javax_swing_JComponent(target);
if (ui == null ) System.out.println$S("SwingJS interface has not been implemented for " + target.getClass$().getName$());
return ui;
}, 1);

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
}, 1);

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
}, 1);

Clazz.newMeth(C$, 'getPropertyChangeListeners$',  function () {
return Clazz.array($I$(6), [0]);
}, 1);

Clazz.newMeth(C$, 'maybeInitialize$',  function () {
if (C$.uid == null ) {
C$.uid=$I$(7).getLookAndFeelDefaults$();
C$.initialize$();
}}, 1);

Clazz.newMeth(C$, 'maybeInitializeFocusPolicy$javax_swing_JComponent',  function (comp) {
if (Clazz.instanceOf(comp, "javax.swing.JRootPane")) {
if ($I$(8).isFocusManagerEnabled$()) {
var fm=$I$(9).getCurrentKeyboardFocusManager$();
if (fm.getDefaultFocusTraversalPolicy$() == null ) fm.setDefaultFocusTraversalPolicy$java_awt_FocusTraversalPolicy(Clazz.new_($I$(10,1)));
}}}, 1);

Clazz.newMeth(C$, 'initialize$',  function () {
if ($I$(11).HANDLE_TOP_LEVEL_PAINT) {
$I$(12,"setPaintEventDispatcher$sun_awt_PaintEventDispatcher",[Clazz.new_($I$(13,1))]);
}}, 1);

C$.$static$=function(){C$.$static$=0;
{
var iLAFs=Clazz.new_($I$(1,1).c$$I,[4]);
iLAFs.add$O(Clazz.new_($I$(2,1).c$$S$S,["HTML5", "swingjs.plaf.HTML5LookAndFeel"]));
C$.installedLAFs=iLAFs.toArray$OA(Clazz.array($I$(2), [iLAFs.size$()]));
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.UIManager, "LookAndFeelInfo", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name','className']]]

Clazz.newMeth(C$, 'c$$S$S',  function (name, className) {
;C$.$init$.apply(this);
this.name=name;
this.className=className;
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getClassName$',  function () {
return this.className;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[" + this.getName$() + " " + this.getClassName$() + "]" ;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
