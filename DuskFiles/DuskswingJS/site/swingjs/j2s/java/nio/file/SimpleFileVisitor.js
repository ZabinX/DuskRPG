(function(){var P$=Clazz.newPackage("java.nio.file"),I$=[[0,'java.util.Objects','java.nio.file.FileVisitResult']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SimpleFileVisitor", null, null, 'java.nio.file.FileVisitor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'preVisitDirectory$O$java_nio_file_attribute_BasicFileAttributes',  function (dir, attrs) {
$I$(1).requireNonNull$O(dir);
$I$(1).requireNonNull$O(attrs);
return $I$(2).CONTINUE;
});

Clazz.newMeth(C$, 'visitFile$O$java_nio_file_attribute_BasicFileAttributes',  function (file, attrs) {
$I$(1).requireNonNull$O(file);
$I$(1).requireNonNull$O(attrs);
return $I$(2).CONTINUE;
});

Clazz.newMeth(C$, 'visitFileFailed$O$java_io_IOException',  function (file, exc) {
$I$(1).requireNonNull$O(file);
throw exc;
});

Clazz.newMeth(C$, 'postVisitDirectory$O$java_io_IOException',  function (dir, exc) {
$I$(1).requireNonNull$O(dir);
if (exc != null ) throw exc;
return $I$(2).CONTINUE;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:23 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
