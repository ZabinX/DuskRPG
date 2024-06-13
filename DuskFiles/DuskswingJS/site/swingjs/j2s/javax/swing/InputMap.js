(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.ArrayTable','javax.swing.KeyStroke','java.util.HashMap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InputMap");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['arrayTable','javax.swing.ArrayTable','parent','javax.swing.InputMap']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setParent$javax_swing_InputMap',  function (map) {
this.parent=map;
});

Clazz.newMeth(C$, 'getParent$',  function () {
return this.parent;
});

Clazz.newMeth(C$, 'put$javax_swing_KeyStroke$O',  function (keyStroke, actionMapKey) {
if (keyStroke == null ) {
return;
}if (actionMapKey == null ) {
this.remove$javax_swing_KeyStroke(keyStroke);
} else {
if (this.arrayTable == null ) {
this.arrayTable=Clazz.new_($I$(1,1));
}this.arrayTable.put$O$O(keyStroke, actionMapKey);
}});

Clazz.newMeth(C$, 'get$javax_swing_KeyStroke',  function (keyStroke) {
if (this.arrayTable == null ) {
var parent=this.getParent$();
if (parent != null ) {
return parent.get$javax_swing_KeyStroke(keyStroke);
}return null;
}var value=this.arrayTable.get$O(keyStroke);
if (value == null ) {
var parent=this.getParent$();
if (parent != null ) {
return parent.get$javax_swing_KeyStroke(keyStroke);
}}return value;
});

Clazz.newMeth(C$, 'remove$javax_swing_KeyStroke',  function (key) {
if (this.arrayTable != null ) {
this.arrayTable.remove$O(key);
}});

Clazz.newMeth(C$, 'clear$',  function () {
if (this.arrayTable != null ) {
this.arrayTable.clear$();
}});

Clazz.newMeth(C$, 'keys$',  function () {
if (this.arrayTable == null ) {
return null;
}var keys=Clazz.array($I$(2), [this.arrayTable.size$()]);
this.arrayTable.getKeys$OA(keys);
return keys;
});

Clazz.newMeth(C$, 'size$',  function () {
if (this.arrayTable == null ) {
return 0;
}return this.arrayTable.size$();
});

Clazz.newMeth(C$, 'allKeys$',  function () {
var count=this.size$();
var parent=this.getParent$();
if (count == 0) {
if (parent != null ) {
return parent.allKeys$();
}return this.keys$();
}if (parent == null ) {
return this.keys$();
}var keys=this.keys$();
var pKeys=parent.allKeys$();
if (pKeys == null ) {
return keys;
}if (keys == null ) {
return pKeys;
}var keyMap=Clazz.new_($I$(3,1));
var counter;
for (counter=keys.length - 1; counter >= 0; counter--) {
keyMap.put$O$O(keys[counter], keys[counter]);
}
for (counter=pKeys.length - 1; counter >= 0; counter--) {
keyMap.put$O$O(pKeys[counter], pKeys[counter]);
}
var allKeys=Clazz.array($I$(2), [keyMap.size$()]);
return keyMap.keySet$().toArray$OA(allKeys);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
