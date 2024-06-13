(function(){var P$=Clazz.newPackage("java.util.zip"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "Deflater", null, 'swingjs.jzlib.Deflater');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['setParams','nowrap'],'I',['level','strategy','maxBits'],'O',['out','java.util.zip.DeflaterOutputStream']]]

Clazz.newMeth(C$, 'c$$I$Z',  function (level, nowrap) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.level=level;
this.strategy=0;
if (level != 2147483647) p$1.init$I$I$I$Z.apply(this, [level, 0, 0, nowrap]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (level) {
C$.c$$I$Z.apply(this, [level, false]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$Z.apply(this, [-1, false]);
}, 1);

Clazz.newMeth(C$, 'init$I$I$I$Z',  function (level, strategy, maxBits, nowrap) {
C$.superclazz.prototype.init$I$I$Z.apply(this, [level, maxBits, nowrap]);
this.strategy=strategy;
this.maxBits=maxBits;
this.nowrap=nowrap;
}, p$1);

Clazz.newMeth(C$, 'setInput$BA$I$I',  function (b, off, len) {
if (b == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (off < 0 || len < 0  || off > b.length - len ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException'));
}C$.superclazz.prototype.setInput$BA$I$I$Z.apply(this, [b, off, len, false]);
});

Clazz.newMeth(C$, 'setInput$BA',  function (b) {
this.setInput$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'setDictionary$BA$I$I',  function (b, off, len) {
if (b == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (off < 0 || len < 0  || off > b.length - len ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException'));
}C$.superclazz.prototype.setDictionaryRet$BA$I$I.apply(this, [b, off, len]);
});

Clazz.newMeth(C$, 'setDictionary$BA',  function (b) {
this.setDictionary$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'setStrategy$I',  function (strategy) {
switch (strategy) {
case 0:
case 1:
case 2:
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}
if (this.strategy != strategy) {
this.strategy=strategy;
this.setParams=true;
}});

Clazz.newMeth(C$, 'setLevel$I',  function (level) {
if ((level < 0 || level > 9 ) && level != -1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid compression level"]);
}if (this.level != level) {
this.level=level;
this.setParams=true;
}});

Clazz.newMeth(C$, 'needsInput$',  function () {
return C$.superclazz.prototype.needsInput$.apply(this, []);
});

Clazz.newMeth(C$, 'finish$',  function () {
C$.superclazz.prototype.finish$.apply(this, []);
});

Clazz.newMeth(C$, 'finished$',  function () {
return C$.superclazz.prototype.finished$.apply(this, []);
});

Clazz.newMeth(C$, 'deflate$BA$I$I',  function (out, off, len) {
return this.deflate$BA$I$I$I(out, off, len, 0);
});

Clazz.newMeth(C$, 'deflate$BA',  function (b) {
return this.deflate$BA$I$I$I(b, 0, b.length, 0);
});

Clazz.newMeth(C$, 'deflate$BA$I$I$I',  function (b, off, len, flush) {
if (b == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (off < 0 || len < 0  || off > b.length - len ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException'));
}return C$.superclazz.prototype.deflate$BA$I$I$I.apply(this, [b, off, len, flush]);
});

Clazz.newMeth(C$, 'getAdler$',  function () {
return Long.$ival(C$.superclazz.prototype.getAdlerL$.apply(this, []));
});

Clazz.newMeth(C$, 'getTotalIn$',  function () {
return Long.$ival(this.getBytesRead$());
});

Clazz.newMeth(C$, 'getBytesRead$',  function () {
return C$.superclazz.prototype.getBytesRead$.apply(this, []);
});

Clazz.newMeth(C$, 'getTotalOut$',  function () {
return Long.$ival(this.getBytesWritten$());
});

Clazz.newMeth(C$, 'getBytesWritten$',  function () {
return C$.superclazz.prototype.getBytesWritten$.apply(this, []);
});

Clazz.newMeth(C$, 'reset$',  function () {
C$.superclazz.prototype.reset$.apply(this, []);
});

Clazz.newMeth(C$, 'end$',  function () {
C$.superclazz.prototype.end$.apply(this, []);
});

Clazz.newMeth(C$, 'finalize$',  function () {
this.end$();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
