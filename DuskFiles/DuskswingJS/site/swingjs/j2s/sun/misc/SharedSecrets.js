(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'sun.misc.Unsafe','java.util.jar.JarFile','java.net.HttpCookie','java.nio.ByteOrder','java.io.Console','java.io.FileDescriptor','java.security.ProtectionDomain','java.security.AccessController','java.util.zip.ZipFile']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SharedSecrets");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['unsafe','sun.misc.Unsafe','javaUtilJarAccess','sun.misc.JavaUtilJarAccess','javaLangAccess','sun.misc.JavaLangAccess','javaIOAccess','sun.misc.JavaIOAccess','javaNetAccess','sun.misc.JavaNetAccess','javaNetHttpCookieAccess','sun.misc.JavaNetHttpCookieAccess','javaNioAccess','sun.misc.JavaNioAccess','javaIOFileDescriptorAccess','sun.misc.JavaIOFileDescriptorAccess','javaSecurityProtectionDomainAccess','sun.misc.JavaSecurityProtectionDomainAccess','javaSecurityAccess','sun.misc.JavaSecurityAccess','javaUtilZipFileAccess','sun.misc.JavaUtilZipFileAccess','javaAWTAccess','sun.misc.JavaAWTAccess']]]

Clazz.newMeth(C$, 'javaUtilJarAccess$',  function () {
if (C$.javaUtilJarAccess == null ) {
C$.unsafe.ensureClassInitialized$Class(Clazz.getClass($I$(2)));
}return C$.javaUtilJarAccess;
}, 1);

Clazz.newMeth(C$, 'setJavaUtilJarAccess$sun_misc_JavaUtilJarAccess',  function (access) {
C$.javaUtilJarAccess=access;
}, 1);

Clazz.newMeth(C$, 'setJavaLangAccess$sun_misc_JavaLangAccess',  function (jla) {
C$.javaLangAccess=jla;
}, 1);

Clazz.newMeth(C$, 'getJavaLangAccess$',  function () {
return C$.javaLangAccess;
}, 1);

Clazz.newMeth(C$, 'setJavaNetAccess$sun_misc_JavaNetAccess',  function (jna) {
C$.javaNetAccess=jna;
}, 1);

Clazz.newMeth(C$, 'getJavaNetAccess$',  function () {
return C$.javaNetAccess;
}, 1);

Clazz.newMeth(C$, 'setJavaNetHttpCookieAccess$sun_misc_JavaNetHttpCookieAccess',  function (a) {
C$.javaNetHttpCookieAccess=a;
}, 1);

Clazz.newMeth(C$, 'getJavaNetHttpCookieAccess$',  function () {
if (C$.javaNetHttpCookieAccess == null ) C$.unsafe.ensureClassInitialized$Class(Clazz.getClass($I$(3)));
return C$.javaNetHttpCookieAccess;
}, 1);

Clazz.newMeth(C$, 'setJavaNioAccess$sun_misc_JavaNioAccess',  function (jna) {
C$.javaNioAccess=jna;
}, 1);

Clazz.newMeth(C$, 'getJavaNioAccess$',  function () {
if (C$.javaNioAccess == null ) {
C$.unsafe.ensureClassInitialized$Class(Clazz.getClass($I$(4)));
}return C$.javaNioAccess;
}, 1);

Clazz.newMeth(C$, 'setJavaIOAccess$sun_misc_JavaIOAccess',  function (jia) {
C$.javaIOAccess=jia;
}, 1);

Clazz.newMeth(C$, 'getJavaIOAccess$',  function () {
if (C$.javaIOAccess == null ) {
C$.unsafe.ensureClassInitialized$Class(Clazz.getClass($I$(5)));
}return C$.javaIOAccess;
}, 1);

Clazz.newMeth(C$, 'setJavaIOFileDescriptorAccess$sun_misc_JavaIOFileDescriptorAccess',  function (jiofda) {
C$.javaIOFileDescriptorAccess=jiofda;
}, 1);

Clazz.newMeth(C$, 'getJavaIOFileDescriptorAccess$',  function () {
if (C$.javaIOFileDescriptorAccess == null ) C$.unsafe.ensureClassInitialized$Class(Clazz.getClass($I$(6)));
return C$.javaIOFileDescriptorAccess;
}, 1);

Clazz.newMeth(C$, 'setJavaSecurityProtectionDomainAccess$sun_misc_JavaSecurityProtectionDomainAccess',  function (jspda) {
C$.javaSecurityProtectionDomainAccess=jspda;
}, 1);

Clazz.newMeth(C$, 'getJavaSecurityProtectionDomainAccess$',  function () {
if (C$.javaSecurityProtectionDomainAccess == null ) C$.unsafe.ensureClassInitialized$Class(Clazz.getClass($I$(7)));
return C$.javaSecurityProtectionDomainAccess;
}, 1);

Clazz.newMeth(C$, 'setJavaSecurityAccess$sun_misc_JavaSecurityAccess',  function (jsa) {
C$.javaSecurityAccess=jsa;
}, 1);

Clazz.newMeth(C$, 'getJavaSecurityAccess$',  function () {
if (C$.javaSecurityAccess == null ) {
C$.unsafe.ensureClassInitialized$Class(Clazz.getClass($I$(8)));
}return C$.javaSecurityAccess;
}, 1);

Clazz.newMeth(C$, 'getJavaUtilZipFileAccess$',  function () {
if (C$.javaUtilZipFileAccess == null ) C$.unsafe.ensureClassInitialized$Class(Clazz.getClass($I$(9)));
return C$.javaUtilZipFileAccess;
}, 1);

Clazz.newMeth(C$, 'setJavaUtilZipFileAccess$sun_misc_JavaUtilZipFileAccess',  function (access) {
C$.javaUtilZipFileAccess=access;
}, 1);

Clazz.newMeth(C$, 'setJavaAWTAccess$sun_misc_JavaAWTAccess',  function (jaa) {
C$.javaAWTAccess=jaa;
}, 1);

Clazz.newMeth(C$, 'getJavaAWTAccess$',  function () {
if (C$.javaAWTAccess == null ) {
return null;
}return C$.javaAWTAccess;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.unsafe=$I$(1).getUnsafe$();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
