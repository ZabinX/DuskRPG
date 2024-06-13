(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CheckboxGroup", null, 'javax.swing.ButtonGroup');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getSelectedCheckbox$',  function () {
for (var e=C$.superclazz.prototype.getElements$.apply(this, []); e.hasMoreElements$(); ) {
var ab=e.nextElement$();
if (ab.isSelected$()) return ab;
}
return null;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:01 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
