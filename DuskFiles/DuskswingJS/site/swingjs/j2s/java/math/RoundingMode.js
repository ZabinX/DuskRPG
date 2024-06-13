(function(){var P$=Clazz.newPackage("java.math"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "RoundingMode", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['oldMode']]]

Clazz.newMeth(C$, 'c$$I',  function (oldMode) {
;C$.$init$.apply(this);
this.oldMode=oldMode;
}, 1);

Clazz.newMeth(C$, 'valueOf$I',  function (rm) {
switch (rm) {
case 0:
return C$.UP;
case 1:
return C$.DOWN;
case 2:
return C$.CEILING;
case 3:
return C$.FLOOR;
case 4:
return C$.HALF_UP;
case 5:
return C$.HALF_DOWN;
case 6:
return C$.HALF_EVEN;
case 7:
return C$.UNNECESSARY;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["argument out of range"]);
}
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I, "UP", 0, [0]);
Clazz.newEnumConst($vals, C$.c$$I, "DOWN", 1, [1]);
Clazz.newEnumConst($vals, C$.c$$I, "CEILING", 2, [2]);
Clazz.newEnumConst($vals, C$.c$$I, "FLOOR", 3, [3]);
Clazz.newEnumConst($vals, C$.c$$I, "HALF_UP", 4, [4]);
Clazz.newEnumConst($vals, C$.c$$I, "HALF_DOWN", 5, [5]);
Clazz.newEnumConst($vals, C$.c$$I, "HALF_EVEN", 6, [6]);
Clazz.newEnumConst($vals, C$.c$$I, "UNNECESSARY", 7, [7]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
