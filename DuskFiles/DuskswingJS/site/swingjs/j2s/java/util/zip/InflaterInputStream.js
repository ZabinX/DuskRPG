(function(){var P$=Clazz.newPackage("java.util.zip"),I$=[[0,'java.util.zip.Inflater']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InflaterInputStream", null, 'swingjs.jzlib.InflaterInputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['inf','java.util.zip.Inflater']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream$java_util_zip_Inflater$I',  function ($in, inflater, size) {
;C$.superclazz.c$$java_io_InputStream$swingjs_jzlib_Inflater$I$Z.apply(this,[$in, inflater, size, true]);C$.$init$.apply(this);
this.inf=inflater;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$java_util_zip_Inflater',  function ($in, inflater) {
C$.c$$java_io_InputStream$java_util_zip_Inflater$I.apply(this, [$in, inflater, 512]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function ($in) {
C$.c$$java_io_InputStream$java_util_zip_Inflater$I.apply(this, [$in, Clazz.new_($I$(1,1)), 512]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
