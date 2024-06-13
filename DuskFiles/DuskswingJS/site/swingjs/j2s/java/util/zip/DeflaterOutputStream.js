(function(){var P$=Clazz.newPackage("java.util.zip"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DeflaterOutputStream", null, 'swingjs.jzlib.DeflaterOutputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.usesDefaultDeflater=false;
},1);

C$.$fields$=[['Z',['usesDefaultDeflater']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_io_OutputStream.apply(this,[null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$java_util_zip_Deflater$I$Z',  function (out, def, size, syncFlush) {
;C$.superclazz.c$$java_io_OutputStream$swingjs_jzlib_Deflater$I$Z.apply(this,[out, def, size, syncFlush]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$java_util_zip_Deflater$I',  function (out, def, size) {
C$.c$$java_io_OutputStream$java_util_zip_Deflater$I$Z.apply(this, [out, def, size, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$java_util_zip_Deflater$Z',  function (out, def, syncFlush) {
C$.c$$java_io_OutputStream$java_util_zip_Deflater$I$Z.apply(this, [out, def, 512, syncFlush]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$java_util_zip_Deflater',  function (out, def) {
C$.c$$java_io_OutputStream$java_util_zip_Deflater$I$Z.apply(this, [out, def, 512, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$Z',  function (out, syncFlush) {
;C$.superclazz.c$$java_io_OutputStream.apply(this,[out]);C$.$init$.apply(this);
this.jzSetDOS$java_io_OutputStream$swingjs_jzlib_Deflater$I$Z(out, this.deflater, 0, true);
this.jzSetDOS$java_io_OutputStream$swingjs_jzlib_Deflater$I$Z(out, this.deflater, 0, true);
this.usesDefaultDeflater=true;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream',  function (out) {
C$.c$$java_io_OutputStream$Z.apply(this, [out, false]);
this.usesDefaultDeflater=true;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_ByteArrayOutputStream$java_util_zip_Deflater',  function (bos, deflater) {
;C$.superclazz.c$$java_io_OutputStream.apply(this,[bos]);C$.$init$.apply(this);
this.setDOS$java_io_OutputStream$java_util_zip_Deflater(bos, deflater);
}, 1);

Clazz.newMeth(C$, 'setDOS$java_io_OutputStream$java_util_zip_Deflater',  function (out, deflater) {
this.jzSetDOS$java_io_OutputStream$swingjs_jzlib_Deflater$I$Z(out, deflater, 0, true);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
