(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.plaf.JSComponentUI','javax.swing.UIManager']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSToggleButtonUI", null, 'swingjs.plaf.JSButtonUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPropertyPrefix$',  function () {
return "ToggleButton";
});

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if ($I$(1).debugging) System.out.println$S(this.id + " stateChange " + this.dumpEvent$java_util_EventObject(e) );
var model=this.button.getModel$();
this.setBackgroundImpl$java_awt_Color(model.isArmed$() && model.isPressed$()  || model.isSelected$()  ? $I$(2,"getColor$O",[this.getPropertyPrefix$() + ".highlight"]) : this.getBackground$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:11 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
