(function(){var P$=java.lang,p$1={},I$=[[0,'java.util.HashMap','sun.reflect.Reflection','Package$1PackageInfoProxy',['java.util.jar.Attributes','.Name'],'java.security.AccessController','Package','java.io.File','sun.net.www.ParseUtil','java.io.FileInputStream','java.util.jar.JarInputStream']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Package", null, null, 'java.lang.reflect.AnnotatedElement');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['pkgName','specTitle','specVersion','specVendor','implTitle','implVersion','implVendor'],'O',['_clazzPackage','java.lang.Object','sealBase','java.net.URL','loader','ClassLoader','packageInfo','Class']]
,['O',['pkgs','java.util.Map','+urls','+mans']]]

Clazz.newMeth(C$, 'getName$',  function () {
return this.pkgName;
});

Clazz.newMeth(C$, 'getSpecificationTitle$',  function () {
return this.specTitle;
});

Clazz.newMeth(C$, 'getSpecificationVersion$',  function () {
return this.specVersion;
});

Clazz.newMeth(C$, 'getSpecificationVendor$',  function () {
return this.specVendor;
});

Clazz.newMeth(C$, 'getImplementationTitle$',  function () {
return this.implTitle;
});

Clazz.newMeth(C$, 'getImplementationVersion$',  function () {
return this.implVersion;
});

Clazz.newMeth(C$, 'getImplementationVendor$',  function () {
return this.implVendor;
});

Clazz.newMeth(C$, 'isSealed$',  function () {
return this.sealBase != null ;
});

Clazz.newMeth(C$, 'isSealed$java_net_URL',  function (url) {
return url.equals$O(this.sealBase);
});

Clazz.newMeth(C$, 'isCompatibleWith$S',  function (desired) {
return true;
});

Clazz.newMeth(C$, 'getPackage$S',  function (name) {
var l=ClassLoader.getClassLoader$Class($I$(2).getCallerClass$());
if (l != null ) {
return l.getPackage$S(name);
} else {
return C$.getSystemPackage$S(name);
}}, 1);

Clazz.newMeth(C$, 'getPackages$',  function () {
var l=ClassLoader.getClassLoader$Class($I$(2).getCallerClass$());
if (l != null ) {
return l.getPackages$();
} else {
return C$.getSystemPackages$();
}}, 1);

Clazz.newMeth(C$, 'getPackage$Class',  function (c) {
var name=c.getName$();
var i=name.lastIndexOf$I(".");
if (i != -1) {
name=name.substring$I$I(0, i);
var cl=c.getClassLoader$();
if (cl != null ) {
return cl.getPackage$S(name);
} else {
return C$.getSystemPackage$S(name);
}} else {
return null;
}}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.pkgName.hashCode$();
});

Clazz.newMeth(C$, 'toString',  function () {
var spec=this.specTitle;
var ver=this.specVersion;
if (spec != null  && spec.length$() > 0 ) spec=", " + spec;
 else spec="";
if (ver != null  && ver.length$() > 0 ) ver=", version " + ver;
 else ver="";
return "package " + this.pkgName + spec + ver ;
});

Clazz.newMeth(C$, 'getPackageInfo',  function () {
if (this.packageInfo == null ) {
try {
this.packageInfo=Clazz.forName(this.pkgName + ".package-info", false, this.loader);
} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassNotFoundException")){
this.packageInfo=Clazz.getClass($I$(3));
} else {
throw ex;
}
}
}return this.packageInfo;
}, p$1);

Clazz.newMeth(C$, 'getAnnotation$Class',  function (annotationClass) {
return p$1.getPackageInfo.apply(this, []).getAnnotation$Class(annotationClass);
});

Clazz.newMeth(C$, 'isAnnotationPresent$Class',  function (annotationClass) {
return P$.reflect.AnnotatedElement.superclazz.prototype.isAnnotationPresent$Class.apply(this, [annotationClass]);
});

Clazz.newMeth(C$, 'getAnnotationsByType$Class',  function (annotationClass) {
return p$1.getPackageInfo.apply(this, []).getAnnotationsByType$Class(annotationClass);
});

Clazz.newMeth(C$, 'getAnnotations$',  function () {
return p$1.getPackageInfo.apply(this, []).getAnnotations$();
});

Clazz.newMeth(C$, 'getDeclaredAnnotation$Class',  function (annotationClass) {
return p$1.getPackageInfo.apply(this, []).getDeclaredAnnotation$Class(annotationClass);
});

Clazz.newMeth(C$, 'getDeclaredAnnotationsByType$Class',  function (annotationClass) {
return p$1.getPackageInfo.apply(this, []).getDeclaredAnnotationsByType$Class(annotationClass);
});

Clazz.newMeth(C$, 'getDeclaredAnnotations$',  function () {
return p$1.getPackageInfo.apply(this, []).getDeclaredAnnotations$();
});

Clazz.newMeth(C$, 'c$$S$S$S$S$S$S$S$java_net_URL$ClassLoader',  function (name, spectitle, specversion, specvendor, impltitle, implversion, implvendor, sealbase, loader) {
;C$.$init$.apply(this);
this.pkgName=name;
this.implTitle=impltitle;
this.implVersion=implversion;
this.implVendor=implvendor;
this.specTitle=spectitle;
this.specVersion=specversion;
this.specVendor=specvendor;
this.sealBase=sealbase;
this.loader=loader;
}, 1);

Clazz.newMeth(C$, 'c$$S$O',  function (name, clazzPackage) {
;C$.$init$.apply(this);
this.pkgName=name;
this.specTitle=null;
this.specVersion=null;
this.specVendor=null;
this.implTitle=null;
this.implVersion=null;
this.implVendor=null;
this.sealBase=null;
this.loader=null;
this._clazzPackage=clazzPackage;
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_jar_Manifest$java_net_URL$ClassLoader',  function (name, man, url, loader) {
;C$.$init$.apply(this);
var path=name.replace$C$C(".", "/").concat$S("/");
var sealed=null;
var specTitle=null;
var specVersion=null;
var specVendor=null;
var implTitle=null;
var implVersion=null;
var implVendor=null;
var sealBase=null;
var attr=man.getAttributes$S(path);
if (attr != null ) {
specTitle=attr.getValue$java_util_jar_Attributes_Name($I$(4).SPECIFICATION_TITLE);
specVersion=attr.getValue$java_util_jar_Attributes_Name($I$(4).SPECIFICATION_VERSION);
specVendor=attr.getValue$java_util_jar_Attributes_Name($I$(4).SPECIFICATION_VENDOR);
implTitle=attr.getValue$java_util_jar_Attributes_Name($I$(4).IMPLEMENTATION_TITLE);
implVersion=attr.getValue$java_util_jar_Attributes_Name($I$(4).IMPLEMENTATION_VERSION);
implVendor=attr.getValue$java_util_jar_Attributes_Name($I$(4).IMPLEMENTATION_VENDOR);
sealed=attr.getValue$java_util_jar_Attributes_Name($I$(4).SEALED);
}attr=man.getMainAttributes$();
if (attr != null ) {
if (specTitle == null ) {
specTitle=attr.getValue$java_util_jar_Attributes_Name($I$(4).SPECIFICATION_TITLE);
}if (specVersion == null ) {
specVersion=attr.getValue$java_util_jar_Attributes_Name($I$(4).SPECIFICATION_VERSION);
}if (specVendor == null ) {
specVendor=attr.getValue$java_util_jar_Attributes_Name($I$(4).SPECIFICATION_VENDOR);
}if (implTitle == null ) {
implTitle=attr.getValue$java_util_jar_Attributes_Name($I$(4).IMPLEMENTATION_TITLE);
}if (implVersion == null ) {
implVersion=attr.getValue$java_util_jar_Attributes_Name($I$(4).IMPLEMENTATION_VERSION);
}if (implVendor == null ) {
implVendor=attr.getValue$java_util_jar_Attributes_Name($I$(4).IMPLEMENTATION_VENDOR);
}if (sealed == null ) {
sealed=attr.getValue$java_util_jar_Attributes_Name($I$(4).SEALED);
}}if ("true".equalsIgnoreCase$S(sealed)) {
sealBase=url;
}this.pkgName=name;
this.specTitle=specTitle;
this.specVersion=specVersion;
this.specVendor=specVendor;
this.implTitle=implTitle;
this.implVersion=implVersion;
this.implVendor=implVendor;
this.sealBase=sealBase;
this.loader=loader;
}, 1);

Clazz.newMeth(C$, 'getSystemPackage$S',  function (name) {
{
var pkg=C$.pkgs.get$O(name);
if (pkg == null ) {
name=name.replace$C$C(".", "/").concat$S("/");
var fn=C$.getSystemPackage0$S(name);
if (fn != null ) {
pkg=C$.defineSystemPackage$S$S(name, fn);
}}return pkg;
}}, 1);

Clazz.newMeth(C$, 'getSystemPackages$',  function () {
var names=C$.getSystemPackages0$();
{
for (var i=0; i < names.length; i++) {
C$.defineSystemPackage$S$S(names[i], C$.getSystemPackage0$S(names[i]));
}
return C$.pkgs.values$().toArray$OA(Clazz.array(C$, [C$.pkgs.size$()]));
}}, 1);

Clazz.newMeth(C$, 'defineSystemPackage$S$S',  function (iname, fn) {
return $I$(5,"doPrivileged$java_security_PrivilegedAction",[((P$.Package$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Package$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var name=this.$finals$.iname;
var url=$I$(6).urls.get$O(this.$finals$.fn);
if (url == null ) {
var file=Clazz.new_($I$(7,1).c$$S,[this.$finals$.fn]);
try {
url=$I$(8).fileToEncodedURL$java_io_File(file);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
} else {
throw e;
}
}
if (url != null ) {
$I$(6).urls.put$O$O(this.$finals$.fn, url);
if (file.isFile$()) {
$I$(6).mans.put$O$O(this.$finals$.fn, $I$(6).loadManifest$S(this.$finals$.fn));
}}}name=name.substring$I$I(0, name.length$() - 1).replace$C$C("/", ".");
var pkg;
var man=$I$(6).mans.get$O(this.$finals$.fn);
if (man != null ) {
pkg=Clazz.new_($I$(6,1).c$$S$java_util_jar_Manifest$java_net_URL$ClassLoader,[name, man, url, null]);
} else {
pkg=Clazz.new_($I$(6,1).c$$S$S$S$S$S$S$S$java_net_URL$ClassLoader,[name, null, null, null, null, null, null, null, null]);
}$I$(6).pkgs.put$O$O(name, pkg);
return pkg;
});
})()
), Clazz.new_(Package$1.$init$,[this, {iname:iname,fn:fn}]))]);
}, 1);

Clazz.newMeth(C$, 'loadManifest$S',  function (fn) {
try {
var fis=Clazz.new_($I$(9,1).c$$S,[fn]);
var jis=Clazz.new_($I$(10,1).c$$java_io_InputStream$Z,[fis, false]);
try {
return jis.getManifest$();

}finally{/*res*/jis&&jis.close$&&jis.close$();fis&&fis.close$&&fis.close$();}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getSystemPackage0$S',  function (name) {
alert('native method must be replaced! getSystemPackage0');
}
, 2);

Clazz.newMeth(C$, 'getSystemPackages0$',  function () {
alert('native method must be replaced! getSystemPackages0');
}
, 2);

C$.$static$=function(){C$.$static$=0;
C$.pkgs=Clazz.new_($I$(1,1).c$$I,[31]);
C$.urls=Clazz.new_($I$(1,1).c$$I,[10]);
C$.mans=Clazz.new_($I$(1,1).c$$I,[10]);
};
;
(function(){/*l*/var C$=Clazz.newClass(P$, "Package$1PackageInfoProxy", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, null, 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:17 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
