(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.ProgressMonitor']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ProgressMonitorInputStream", null, 'java.io.FilterInputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nread=0;
this.size=0;
},1);

C$.$fields$=[['I',['nread','size'],'O',['monitor','javax.swing.ProgressMonitor']]]

Clazz.newMeth(C$, 'c$$java_awt_Component$O$java_io_InputStream',  function (parentComponent, message, $in) {
;C$.superclazz.c$$java_io_InputStream.apply(this,[$in]);C$.$init$.apply(this);
try {
this.size=$in.available$();
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
this.size=0;
} else {
throw ioe;
}
}
this.monitor=Clazz.new_($I$(1,1).c$$java_awt_Component$O$S$I$I,[parentComponent, message, null, 0, this.size]);
}, 1);

Clazz.newMeth(C$, 'getProgressMonitor$',  function () {
return this.monitor;
});

Clazz.newMeth(C$, 'read$',  function () {
var c=this.$in.read$();
if (c >= 0) this.monitor.setProgress$I(++this.nread);
if (this.monitor.isCanceled$()) {
var exc=Clazz.new_(Clazz.load('java.io.InterruptedIOException').c$$S,["progress"]);
exc.bytesTransferred=this.nread;
throw exc;
}return c;
});

Clazz.newMeth(C$, 'read$BA',  function (b) {
var nr=this.$in.read$BA(b);
if (nr > 0) this.monitor.setProgress$I(this.nread+=nr);
if (this.monitor.isCanceled$()) {
var exc=Clazz.new_(Clazz.load('java.io.InterruptedIOException').c$$S,["progress"]);
exc.bytesTransferred=this.nread;
throw exc;
}return nr;
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
var nr=this.$in.read$BA$I$I(b, off, len);
if (nr > 0) this.monitor.setProgress$I(this.nread+=nr);
if (this.monitor.isCanceled$()) {
var exc=Clazz.new_(Clazz.load('java.io.InterruptedIOException').c$$S,["progress"]);
exc.bytesTransferred=this.nread;
throw exc;
}return nr;
});

Clazz.newMeth(C$, 'skip$J',  function (n) {
var nr=this.$in.skip$J(n);
if (Long.$gt(nr,0 )) this.monitor.setProgress$I(this.nread=Long.$ival(Long.$add(this.nread,(nr))));
return nr;
});

Clazz.newMeth(C$, 'close$',  function () {
this.$in.close$();
this.monitor.close$();
});

Clazz.newMeth(C$, 'reset$',  function () {
this.$in.reset$();
this.nread=this.size - this.$in.available$();
this.monitor.setProgress$I(this.nread);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:01 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
