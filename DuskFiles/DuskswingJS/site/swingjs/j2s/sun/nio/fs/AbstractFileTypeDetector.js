(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[[0,'java.util.Locale','StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractFileTypeDetector", null, 'java.nio.file.spi.FileTypeDetector');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'probeContentType$java_nio_file_Path',  function (file) {
if (file == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["\'file\' is null"]);
var result=this.implProbeContentType$java_nio_file_Path(file);
return (result == null ) ? null : C$.parse$S(result);
});

Clazz.newMeth(C$, 'parse$S',  function (s) {
var slash=s.indexOf$I("/");
var semicolon=s.indexOf$I(";");
if (slash < 0) return null;
var type=s.substring$I$I(0, slash).trim$().toLowerCase$java_util_Locale($I$(1).ENGLISH);
if (!C$.isValidToken$S(type)) return null;
var subtype=(semicolon < 0) ? s.substring$I(slash + 1) : s.substring$I$I(slash + 1, semicolon);
subtype=subtype.trim$().toLowerCase$java_util_Locale($I$(1).ENGLISH);
if (!C$.isValidToken$S(subtype)) return null;
var sb=Clazz.new_([type.length$() + subtype.length$() + 1 ],$I$(2,1).c$$I);
sb.append$S(type);
sb.append$C("/");
sb.append$S(subtype);
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'isTokenChar$C',  function (c) {
return (c.$c() > 32 ) && (c.$c() < 127 ) && ("()<>@,;:/[]?=\\\"".indexOf$I(c) < 0)  ;
}, 1);

Clazz.newMeth(C$, 'isValidToken$S',  function (s) {
var len=s.length$();
if (len == 0) return false;
for (var i=0; i < len; i++) {
if (!C$.isTokenChar$C(s.charAt$I(i))) return false;
}
return true;
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
