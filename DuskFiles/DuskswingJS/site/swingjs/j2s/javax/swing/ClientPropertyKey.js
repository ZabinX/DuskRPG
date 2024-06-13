(function(){var P$=Clazz.newPackage("javax.swing"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "ClientPropertyKey", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['reportValueNotSerializable']]]

Clazz.newMeth(C$, 'getJComponent_TRANSFER_HANDLER$',  function () {
return C$.JComponent_TRANSFER_HANDLER;
});

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$Z.apply(this, [false]);
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (reportValueNotSerializable) {
;C$.$init$.apply(this);
this.reportValueNotSerializable=reportValueNotSerializable;
}, 1);

Clazz.newMeth(C$, 'getReportValueNotSerializable$',  function () {
return this.reportValueNotSerializable;
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$Z, "JComponent_INPUT_VERIFIER", 0, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "JComponent_TRANSFER_HANDLER", 1, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "JComponent_ANCESTOR_NOTIFIER", 2, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "PopupFactory_FORCE_HEAVYWEIGHT_POPUP", 3, [true]);
};
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:51 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
