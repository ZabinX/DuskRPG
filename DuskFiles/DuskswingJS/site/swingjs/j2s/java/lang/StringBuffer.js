(function(){var P$=java.lang,I$=[];
/*c*/var C$=Clazz.newClass(P$, "StringBuffer", null, 'AbstractStringBuilder', ['java.io.Serializable', 'CharSequence']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I.apply(this,[16]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (capacity) {
;C$.superclazz.c$$I.apply(this,[capacity]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (str) {
;C$.superclazz.c$$I.apply(this,[str.length$() + 16]);C$.$init$.apply(this);
this.append$S(str);
}, 1);

Clazz.newMeth(C$, 'c$$CharSequence',  function (seq) {
C$.c$$I.apply(this, [seq.length$() + 16]);
this.append$CharSequence(seq);
}, 1);

Clazz.newMeth(C$, 'append$O',  function (obj) {
return C$.superclazz.prototype.append$O.apply(this, [obj]);
});

Clazz.newMeth(C$, 'append$S',  function (str) {
return C$.superclazz.prototype.append$S.apply(this, [str]);
});

Clazz.newMeth(C$, 'append$StringBuffer',  function (sb) {
return C$.superclazz.prototype.append$S.apply(this, [sb == null  ? "null" : "" + sb]);
});

Clazz.newMeth(C$, 'append$AbstractStringBuilder',  function (asb) {
return C$.superclazz.prototype.append$S.apply(this, [asb == null  ? "null" : "" + asb]);
});

Clazz.newMeth(C$, 'append$CharSequence',  function (s) {
return C$.superclazz.prototype.append$S.apply(this, [s == null  ? "null" : "" + s]);
});

Clazz.newMeth(C$, 'append$CharSequence$I$I',  function (s, start, end) {
return C$.superclazz.prototype.append$CharSequence$I$I.apply(this, [s, start, end]);
});

Clazz.newMeth(C$, 'append$CA',  function (str) {
return C$.superclazz.prototype.append$CA.apply(this, [str]);
});

Clazz.newMeth(C$, 'append$CA$I$I',  function (str, offset, len) {
return C$.superclazz.prototype.append$CA$I$I.apply(this, [str, offset, len]);
});

Clazz.newMeth(C$, 'append$Z',  function (b) {
return C$.superclazz.prototype.append$S.apply(this, [b ? "true" : "false"]);
});

Clazz.newMeth(C$, 'append$C',  function (c) {
return C$.superclazz.prototype.append$C.apply(this, [c]);
});

Clazz.newMeth(C$, 'append$I',  function (i) {
return C$.superclazz.prototype.append$I.apply(this, [i]);
});

Clazz.newMeth(C$, 'appendCodePoint$I',  function (codePoint) {
return C$.superclazz.prototype.appendCodePoint$I.apply(this, [codePoint]);
});

Clazz.newMeth(C$, 'append$J',  function (lng) {
return C$.superclazz.prototype.append$J.apply(this, [lng]);
});

Clazz.newMeth(C$, 'append$F',  function (f) {
return C$.superclazz.prototype.append$F.apply(this, [f]);
});

Clazz.newMeth(C$, 'append$D',  function (d) {
return C$.superclazz.prototype.append$D.apply(this, [d]);
});

Clazz.newMeth(C$, 'delete$I$I',  function (start, end) {
return C$.superclazz.prototype.delete$I$I.apply(this, [start, end]);
});

Clazz.newMeth(C$, 'deleteCharAt$I',  function (index) {
return C$.superclazz.prototype.deleteCharAt$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'replace$I$I$S',  function (start, end, str) {
return C$.superclazz.prototype.replace$I$I$S.apply(this, [start, end, str]);
});

Clazz.newMeth(C$, 'insert$I$CA$I$I',  function (index, str, offset, len) {
return C$.superclazz.prototype.insert$I$CA$I$I.apply(this, [index, str, offset, len]);
});

Clazz.newMeth(C$, 'insert$I$O',  function (offset, obj) {
return C$.superclazz.prototype.insert$I$S.apply(this, [offset, "" + obj]);
});

Clazz.newMeth(C$, 'insert$I$S',  function (offset, str) {
return C$.superclazz.prototype.insert$I$S.apply(this, [offset, str]);
});

Clazz.newMeth(C$, 'insert$I$CA',  function (offset, str) {
return C$.superclazz.prototype.insert$I$CA.apply(this, [offset, str]);
});

Clazz.newMeth(C$, 'insert$I$CharSequence',  function (index, s) {
return C$.superclazz.prototype.insert$I$S.apply(this, [index, s == null  ? "null" : "" + s]);
});

Clazz.newMeth(C$, 'insert$I$CharSequence$I$I',  function (dstOffset, s, start, end) {
return C$.superclazz.prototype.insert$I$CharSequence$I$I.apply(this, [dstOffset, s, start, end]);
});

Clazz.newMeth(C$, 'insert$I$Z',  function (offset, b) {
return C$.superclazz.prototype.insert$I$Z.apply(this, [offset, b]);
});

Clazz.newMeth(C$, 'insert$I$C',  function (offset, c) {
return C$.superclazz.prototype.insert$I$C.apply(this, [offset, c]);
});

Clazz.newMeth(C$, 'insert$I$I',  function (offset, i) {
return C$.superclazz.prototype.insert$I$I.apply(this, [offset, i]);
});

Clazz.newMeth(C$, 'insert$I$J',  function (offset, l) {
return C$.superclazz.prototype.insert$I$J.apply(this, [offset, l]);
});

Clazz.newMeth(C$, 'insert$I$F',  function (offset, f) {
return C$.superclazz.prototype.insert$I$F.apply(this, [offset, f]);
});

Clazz.newMeth(C$, 'insert$I$D',  function (offset, d) {
return C$.superclazz.prototype.insert$I$D.apply(this, [offset, d]);
});

Clazz.newMeth(C$, 'reverse$',  function () {
return C$.superclazz.prototype.reverse$.apply(this, []);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.秘s;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:17 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
