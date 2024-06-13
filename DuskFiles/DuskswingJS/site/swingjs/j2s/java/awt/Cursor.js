(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'swingjs.JSToolkit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Cursor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.type=0;
},1);

C$.$fields$=[['I',['type'],'S',['name']]
,['O',['predefined','java.awt.Cursor[]','+predefinedPrivate','cursorProperties','String[][]']]]

Clazz.newMeth(C$, 'getPredefinedCursor$I',  function (type) {
if (type < 0 || type > 13 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["illegal cursor type"]);
}var c=C$.predefinedPrivate[type];
if (c == null ) {
C$.predefinedPrivate[type]=c=Clazz.new_(C$.c$$I,[type]);
}if (C$.predefined[type] == null ) {
C$.predefined[type]=c;
}return c;
}, 1);

Clazz.newMeth(C$, 'getSystemCustomCursor$S',  function (name) {
return null;
}, 1);

Clazz.newMeth(C$, 'getDefaultCursor$',  function () {
return C$.getPredefinedCursor$I(0);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (type) {
;C$.$init$.apply(this);
if (type < 0 || type > 13 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["illegal cursor type"]);
}this.type=type;
this.name="TODO_CURSOR";
this.name=$I$(1).getCursorName$java_awt_Cursor(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.type=-1;
this.name=name;
}, 1);

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[" + this.getName$() + "]" ;
});

C$.$static$=function(){C$.$static$=0;
C$.predefined=Clazz.array(C$, [14]);
C$.predefinedPrivate=Clazz.array(C$, [14]);
C$.cursorProperties=Clazz.array(String, -2, [Clazz.array(String, -1, ["AWT.DefaultCursor", "Default Cursor"]), Clazz.array(String, -1, ["AWT.CrosshairCursor", "Crosshair Cursor"]), Clazz.array(String, -1, ["AWT.TextCursor", "Text Cursor"]), Clazz.array(String, -1, ["AWT.WaitCursor", "Wait Cursor"]), Clazz.array(String, -1, ["AWT.SWResizeCursor", "Southwest Resize Cursor"]), Clazz.array(String, -1, ["AWT.SEResizeCursor", "Southeast Resize Cursor"]), Clazz.array(String, -1, ["AWT.NWResizeCursor", "Northwest Resize Cursor"]), Clazz.array(String, -1, ["AWT.NEResizeCursor", "Northeast Resize Cursor"]), Clazz.array(String, -1, ["AWT.NResizeCursor", "North Resize Cursor"]), Clazz.array(String, -1, ["AWT.SResizeCursor", "South Resize Cursor"]), Clazz.array(String, -1, ["AWT.WResizeCursor", "West Resize Cursor"]), Clazz.array(String, -1, ["AWT.EResizeCursor", "East Resize Cursor"]), Clazz.array(String, -1, ["AWT.HandCursor", "Hand Cursor"]), Clazz.array(String, -1, ["AWT.MoveCursor", "Move Cursor"])]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
