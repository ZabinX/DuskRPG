(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'sun.awt.AppContext','javax.swing.UIManager']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LayoutStyle", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ComponentPlacement',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setInstance$javax_swing_LayoutStyle',  function (style) {
{
if (style == null ) {
$I$(1).getAppContext$().remove$O(Clazz.getClass(C$));
} else {
$I$(1).getAppContext$().put$O$O(Clazz.getClass(C$), style);
}}}, 1);

Clazz.newMeth(C$, 'getInstance$',  function () {
var style;
{
style=$I$(1).getAppContext$().get$O(Clazz.getClass(C$));
}if (style == null ) {
return $I$(2).getLookAndFeel$().getLayoutStyle$();
}return style;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.LayoutStyle, "ComponentPlacement", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "RELATED", 0, []);
Clazz.newEnumConst($vals, C$.c$, "UNRELATED", 1, []);
Clazz.newEnumConst($vals, C$.c$, "INDENT", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:00 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
