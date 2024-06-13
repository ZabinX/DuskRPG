(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.plaf.JSComponentUI']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSRootPaneUI", null, 'swingjs.plaf.JSLightweightUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['resizer','swingjs.plaf.Resizer']]]

Clazz.newMeth(C$, 'setResizer$swingjs_plaf_Resizer',  function (resizer) {
this.resizer=resizer;
});

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.isRootPane=this.isContainer=true;
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
if (this.domNode == null ) {
this.domNode=$I$(1,"newDOMObject$S$S$SA",["div", this.id, Clazz.array(String, -1, [])]);
this.addFocusHandler$();
}this.checkAllowDivOverflow$();
return this.domNode;
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (jc) {
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (jc) {
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (jc) {
return null;
});

Clazz.newMeth(C$, 'setInnerComponentBounds$I$I',  function (width, height) {
var resizer=this.jc.getFrameViewer$().getResizer$();
if (resizer != null ) resizer.setPosition$I$I(0, 0);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
