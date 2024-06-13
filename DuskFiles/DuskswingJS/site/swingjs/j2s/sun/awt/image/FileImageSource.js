(function(){var P$=Clazz.newPackage("sun.awt.image"),I$=[[0,'java.io.BufferedInputStream','java.io.FileInputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileImageSource", null, 'sun.awt.image.InputStreamImageSource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['imagefile']]]

Clazz.newMeth(C$, 'c$$S',  function (filename) {
Clazz.super_(C$, this);
var security=System.getSecurityManager$();
if (security != null ) {
security.checkRead$S(filename);
}this.imagefile=filename;
}, 1);

Clazz.newMeth(C$, 'checkSecurity$O$Z',  function (context, quiet) {
return true;
});

Clazz.newMeth(C$, 'getDecoder$',  function () {
if (this.imagefile == null ) {
return null;
}var is;
try {
is=Clazz.new_([Clazz.new_($I$(2,1).c$$S,[this.imagefile])],$I$(1,1).c$$java_io_InputStream);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.FileNotFoundException")){
return null;
} else {
throw e;
}
}
return this.getDecoder$java_io_InputStream(is);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
