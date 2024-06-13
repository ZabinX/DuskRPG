(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'swingjs.JSUtil']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Taskbar", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Feature',25],['State',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getTaskbar$',  function () {
var msg="Taskbar API is not supported in SwingJS";
$I$(1).notImplemented$S(msg);
return null;
}, 1);

Clazz.newMeth(C$, 'isTaskbarSupported$',  function () {
return false;
}, 1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.Taskbar, "Feature", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "ICON_BADGE_TEXT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ICON_BADGE_NUMBER", 1, []);
Clazz.newEnumConst($vals, C$.c$, "ICON_BADGE_IMAGE_WINDOW", 2, []);
Clazz.newEnumConst($vals, C$.c$, "ICON_IMAGE", 3, []);
Clazz.newEnumConst($vals, C$.c$, "MENU", 4, []);
Clazz.newEnumConst($vals, C$.c$, "PROGRESS_STATE_WINDOW", 5, []);
Clazz.newEnumConst($vals, C$.c$, "PROGRESS_VALUE", 6, []);
Clazz.newEnumConst($vals, C$.c$, "PROGRESS_VALUE_WINDOW", 7, []);
Clazz.newEnumConst($vals, C$.c$, "USER_ATTENTION", 8, []);
Clazz.newEnumConst($vals, C$.c$, "USER_ATTENTION_WINDOW", 9, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.Taskbar, "State", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "OFF", 0, []);
Clazz.newEnumConst($vals, C$.c$, "NORMAL", 1, []);
Clazz.newEnumConst($vals, C$.c$, "PAUSED", 2, []);
Clazz.newEnumConst($vals, C$.c$, "INDETERMINATE", 3, []);
Clazz.newEnumConst($vals, C$.c$, "ERROR", 4, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:07 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
