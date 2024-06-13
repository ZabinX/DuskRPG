(function(){var P$=Clazz.newPackage("java.util.jar"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JavaUtilJarAccessImpl");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'jarFileHasClassPathAttribute$java_util_jar_JarFile',  function (jar) {
return jar.hasClassPathAttribute$();
});

Clazz.newMeth(C$, 'getCodeSources$java_util_jar_JarFile$java_net_URL',  function (jar, url) {
return jar.getCodeSources$java_net_URL(url);
});

Clazz.newMeth(C$, 'getCodeSource$java_util_jar_JarFile$java_net_URL$S',  function (jar, url, name) {
return null;
});

Clazz.newMeth(C$, 'entryNames$java_util_jar_JarFile$java_security_CodeSourceA',  function (jar, cs) {
return jar.unsignedEntryNames$();
});

Clazz.newMeth(C$, 'entries2$java_util_jar_JarFile',  function (jar) {
return jar.entries2$();
});

Clazz.newMeth(C$, 'setEagerValidation$java_util_jar_JarFile$Z',  function (jar, eager) {
});

Clazz.newMeth(C$, 'getManifestDigests$java_util_jar_JarFile',  function (jar) {
return jar.getManifestDigests$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
