(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'swingjs.a2s.A2SContainer','javax.swing.JApplet','swingjs.a2s.A2SListener','java.awt.FlowLayout','java.awt.Font','java.net.URL']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Applet", null, 'javax.swing.JApplet', 'swingjs.a2s.A2SContainer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['listener','swingjs.a2s.A2SListener']]]

Clazz.newMeth(C$, ['isAWT$','isAWT'],  function () {
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
$I$(1,"fixAWTPaint$java_awt_Component$Class",[this, Clazz.getClass($I$(2))]);
this.listener=Clazz.new_($I$(3,1));
this.addMouseListener$java_awt_event_MouseListener(this.listener);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(this.listener);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4,1)));
(this.getContentPane$()).setOpaque$Z(false);
}, 1);

Clazz.newMeth(C$, ['getFont$','getFont'],  function () {
if (this.font == null  && this.parent == null  ) this.font=Clazz.new_($I$(5,1).c$$S$I$I,["Dialog", 0, 12]);
return C$.superclazz.prototype.getFont$.apply(this, []);
});

Clazz.newMeth(C$, ['setBackground$java_awt_Color','setBackground'],  function (c) {
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [c]);
this.getRootPane$().setBackground$java_awt_Color(c);
this.getContentPane$().setBackground$java_awt_Color(c);
});

Clazz.newMeth(C$, ['getA2SListener$','getA2SListener'],  function () {
return this.listener;
});

Clazz.newMeth(C$, ['getCodeBase$','getCodeBase'],  function () {
var codeBase=C$.superclazz.prototype.getCodeBase$.apply(this, []).toString();
if (codeBase.endsWith$S("/bin/")) {
var appletPath=this.getClass$().getName$();
codeBase+=appletPath.substring$I$I(0, appletPath.lastIndexOf$S(".") + 1).replace$C$C(".", "/");
}try {
return Clazz.new_($I$(6,1).c$$S,[codeBase]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:01 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
