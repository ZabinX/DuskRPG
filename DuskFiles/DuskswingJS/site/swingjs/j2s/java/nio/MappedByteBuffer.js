(function(){var P$=Clazz.newPackage("java.nio"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "MappedByteBuffer", null, 'java.nio.HeapByteBuffer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fd','java.io.FileDescriptor']]]

Clazz.newMeth(C$, 'c$$I$I$I$I$java_io_FileDescriptor',  function (mark, pos, lim, cap, fd) {
;C$.superclazz.c$$BA$I$I$I$I$I.apply(this,[null, mark, pos, lim, cap, 0]);C$.$init$.apply(this);
this.fd=fd;
}, 1);

Clazz.newMeth(C$, 'c$$BA$I$I$I$I$I$java_io_FileDescriptor',  function (hb, mark, pos, lim, cap, off, fd) {
;C$.superclazz.c$$BA$I$I$I$I$I.apply(this,[hb, mark, pos, lim, cap, off]);C$.$init$.apply(this);
this.fd=fd;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (mark, pos, lim, cap) {
;C$.superclazz.c$$BA$I$I$I$I$I.apply(this,[null, mark, pos, lim, cap, 0]);C$.$init$.apply(this);
this.fd=null;
}, 1);

Clazz.newMeth(C$, 'checkMapped',  function () {
if (this.fd == null ) throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
}, p$1);

Clazz.newMeth(C$, 'mappingOffset',  function () {
return 0;
}, p$1);

Clazz.newMeth(C$, 'mappingAddress$J',  function (mappingOffset) {
return 0;
}, p$1);

Clazz.newMeth(C$, 'mappingLength$J',  function (mappingOffset) {
return Long.$add(this.capacity$(),mappingOffset);
}, p$1);

Clazz.newMeth(C$, 'isLoaded$',  function () {
return true;
});

Clazz.newMeth(C$, 'load$',  function () {
return this;
});

Clazz.newMeth(C$, 'force$',  function () {
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:20 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
