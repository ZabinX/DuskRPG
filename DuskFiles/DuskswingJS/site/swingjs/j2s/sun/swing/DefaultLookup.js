(function(){var P$=Clazz.newPackage("sun.swing"),I$=[[0,'sun.awt.AppContext','Thread','javax.swing.UIManager']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultLookup");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['isLookupSet'],'O',['DEFAULT_LOOKUP_KEY','java.lang.Object','currentDefaultThread','Thread','currentDefaultLookup','sun.swing.DefaultLookup']]]

Clazz.newMeth(C$, 'setDefaultLookup$sun_swing_DefaultLookup',  function (lookup) {
{
if (!C$.isLookupSet && lookup == null  ) {
return;
} else if (lookup == null ) {
lookup=Clazz.new_(C$);
}C$.isLookupSet=true;
$I$(1).getAppContext$().put$O$O(C$.DEFAULT_LOOKUP_KEY, lookup);
C$.currentDefaultThread=$I$(2).currentThread$();
C$.currentDefaultLookup=lookup;
}}, 1);

Clazz.newMeth(C$, 'get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S',  function (c, ui, key) {
var lookupSet;
{
lookupSet=C$.isLookupSet;
}if (!lookupSet) {
return $I$(3,"get$O$java_util_Locale",[key, c.getLocale$()]);
}var thisThread=$I$(2).currentThread$();
var lookup;
{
if (thisThread === C$.currentDefaultThread ) {
lookup=C$.currentDefaultLookup;
} else {
lookup=$I$(1).getAppContext$().get$O(C$.DEFAULT_LOOKUP_KEY);
if (lookup == null ) {
lookup=Clazz.new_(C$);
$I$(1).getAppContext$().put$O$O(C$.DEFAULT_LOOKUP_KEY, lookup);
}C$.currentDefaultThread=thisThread;
C$.currentDefaultLookup=lookup;
}}return lookup.getDefault$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(c, ui, key);
}, 1);

Clazz.newMeth(C$, 'getInt$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$I',  function (c, ui, key, defaultValue) {
var iValue=C$.get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(c, ui, key);
if (iValue == null  || !(Clazz.instanceOf(iValue, "java.lang.Number")) ) {
return defaultValue;
}return (iValue).intValue$();
}, 1);

Clazz.newMeth(C$, 'getInt$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S',  function (c, ui, key) {
return C$.getInt$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$I(c, ui, key, -1);
}, 1);

Clazz.newMeth(C$, 'getInsets$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$java_awt_Insets',  function (c, ui, key, defaultValue) {
var iValue=C$.get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(c, ui, key);
if (iValue == null  || !(Clazz.instanceOf(iValue, "java.awt.Insets")) ) {
return defaultValue;
}return iValue;
}, 1);

Clazz.newMeth(C$, 'getInsets$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S',  function (c, ui, key) {
return C$.getInsets$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$java_awt_Insets(c, ui, key, null);
}, 1);

Clazz.newMeth(C$, 'getBoolean$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$Z',  function (c, ui, key, defaultValue) {
var iValue=C$.get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(c, ui, key);
if (iValue == null  || !(Clazz.instanceOf(iValue, "java.lang.Boolean")) ) {
return defaultValue;
}return (iValue).booleanValue$();
}, 1);

Clazz.newMeth(C$, 'getBoolean$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S',  function (c, ui, key) {
return C$.getBoolean$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$Z(c, ui, key, false);
}, 1);

Clazz.newMeth(C$, 'getColor$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$java_awt_Color',  function (c, ui, key, defaultValue) {
var iValue=C$.get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(c, ui, key);
if (iValue == null  || !(Clazz.instanceOf(iValue, "java.awt.Color")) ) {
return defaultValue;
}return iValue;
}, 1);

Clazz.newMeth(C$, 'getColor$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S',  function (c, ui, key) {
return C$.getColor$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$java_awt_Color(c, ui, key, null);
}, 1);

Clazz.newMeth(C$, 'getIcon$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$javax_swing_Icon',  function (c, ui, key, defaultValue) {
var iValue=C$.get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(c, ui, key);
if (iValue == null  || !(Clazz.instanceOf(iValue, "javax.swing.Icon")) ) {
return defaultValue;
}return iValue;
}, 1);

Clazz.newMeth(C$, 'getIcon$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S',  function (c, ui, key) {
return C$.getIcon$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$javax_swing_Icon(c, ui, key, null);
}, 1);

Clazz.newMeth(C$, 'getBorder$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$javax_swing_border_Border',  function (c, ui, key, defaultValue) {
var iValue=C$.get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(c, ui, key);
if (iValue == null  || !(Clazz.instanceOf(iValue, "javax.swing.border.Border")) ) {
return defaultValue;
}return iValue;
}, 1);

Clazz.newMeth(C$, 'getBorder$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S',  function (c, ui, key) {
return C$.getBorder$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$javax_swing_border_Border(c, ui, key, null);
}, 1);

Clazz.newMeth(C$, 'getDefault$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S',  function (c, ui, key) {
return $I$(3,"get$O$java_util_Locale",[key, c.getLocale$()]);
});

C$.$static$=function(){C$.$static$=0;
C$.DEFAULT_LOOKUP_KEY="DefaultLookup_LOOKUP_KEY";
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
