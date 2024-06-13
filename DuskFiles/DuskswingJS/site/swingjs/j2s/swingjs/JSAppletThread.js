(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'javax.swing.SwingUtilities']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSAppletThread", null, 'javajs.util.JSThread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$swingjs_JSAppletViewer$ThreadGroup$S',  function (ap, group, name) {
;C$.superclazz.c$$ThreadGroup$S.apply(this,[group, name]);C$.$init$.apply(this);
this.getThreadGroup$().秘appletViewer=ap;
}, 1);

Clazz.newMeth(C$, 'run1$I',  function (mode) {
mode=this.getThreadGroup$().秘appletViewer.run1$I(mode);
if (mode != 2) this.dispatchAndReturn$Runnable$I(null, mode);
});

Clazz.newMeth(C$, 'dispatchAndReturn$Runnable$I',  function (r, mode) {
var m=mode;
$I$(1,"invokeLater$Runnable",[((P$.JSAppletThread$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSAppletThread$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['swingjs.JSAppletThread'].run1$I.apply(this.b$['swingjs.JSAppletThread'], [this.$finals$.m]);
});
})()
), Clazz.new_(P$.JSAppletThread$1.$init$,[this, {m:m}]))]);
});

Clazz.newMeth(C$, 'myInit$',  function () {
return false;
});

Clazz.newMeth(C$, 'isLooping$',  function () {
return false;
});

Clazz.newMeth(C$, 'myLoop$',  function () {
return false;
});

Clazz.newMeth(C$, 'whenDone$',  function () {
});

Clazz.newMeth(C$, 'getDelayMillis$',  function () {
return 0;
});

Clazz.newMeth(C$, 'onException$Exception',  function (e) {
});

Clazz.newMeth(C$, 'doFinally$',  function () {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:58 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
