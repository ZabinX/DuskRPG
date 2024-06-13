(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.FlowLayout']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSPanel", null, 'java.awt.Container');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['nameCounter']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_awt_LayoutManager.apply(this, [Clazz.new_($I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_LayoutManager',  function (layout) {
Clazz.super_(C$, this);
this.setAppContext$();
this.setLayout$java_awt_LayoutManager(layout);
}, 1);

Clazz.newMeth(C$, 'constructComponentName$',  function () {
return "panel" + C$.nameCounter++;
});

Clazz.newMeth(C$, 'addNotify$',  function () {
this.getOrCreatePeer$();
C$.superclazz.prototype.addNotify$.apply(this, []);
});

Clazz.newMeth(C$, 'isFocusCycleRoot$',  function () {
return true;
});

C$.$static$=function(){C$.$static$=0;
C$.nameCounter=0;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
