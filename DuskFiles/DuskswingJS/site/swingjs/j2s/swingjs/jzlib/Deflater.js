(function(){var P$=Clazz.newPackage("swingjs.jzlib"),I$=[[0,'swingjs.jzlib.Deflate']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Deflater", null, 'swingjs.jzlib.ZStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.finished=false;
},1);

C$.$fields$=[['Z',['finished']]]

Clazz.newMeth(C$, 'init$I$I$Z',  function (level, bits, nowrap) {
if (bits == 0) bits=15;
this.finished=false;
this.setAdler32$();
this.dstate=Clazz.new_($I$(1,1).c$$swingjs_jzlib_ZStream,[this]);
this.dstate.deflateInit2$I$I(level, nowrap ? -bits : bits);
return this;
});

Clazz.newMeth(C$, 'deflate$BA$I$I$I',  function (buf, off, len, flush) {
C$.superclazz.prototype.setOutput$BA$I$I.apply(this, [buf, off, len]);
var thisLen=this.getBytesWritten$();
this.deflate$I(flush);
var newLen=this.getBytesWritten$();
return Long.$ival((Long.$sub(newLen,thisLen)));
});

Clazz.newMeth(C$, 'deflate$I',  function (flush) {
if (this.dstate == null ) {
return -2;
}var ret=this.dstate.deflate$I(flush);
if (ret == 1) this.finished=true;
return ret;
});

Clazz.newMeth(C$, 'end$',  function () {
this.finished=true;
if (this.dstate == null ) return;
var ret=this.dstate.deflateEnd$();
this.dstate=null;
this.free$();
});

Clazz.newMeth(C$, 'params$I$I',  function (level, strategy) {
if (this.dstate == null ) return -2;
return this.dstate.deflateParams$I$I(level, strategy);
});

Clazz.newMeth(C$, 'setDictionaryRet$BA$I$I',  function (dictionary, off, len) {
if (this.dstate == null ) return -2;
return this.dstate.deflateSetDictionary$BA$I$I(dictionary, off, len);
});

Clazz.newMeth(C$, 'finished$',  function () {
return this.finished;
});

Clazz.newMeth(C$, 'finish$',  function () {
});

Clazz.newMeth(C$, 'getBytesRead$',  function () {
return this.dstate.getBytesRead$();
});

Clazz.newMeth(C$, 'getBytesWritten$',  function () {
return this.dstate.getBytesWritten$();
});

Clazz.newMeth(C$, 'reset$',  function () {
this.dstate.deflateReset$();
});

Clazz.newMeth(C$, 'needsInput$',  function () {
return this.avail_in <= 0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
