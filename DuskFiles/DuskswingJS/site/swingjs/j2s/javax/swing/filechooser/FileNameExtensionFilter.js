(function(){var P$=Clazz.newPackage("javax.swing.filechooser"),I$=[[0,'java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileNameExtensionFilter", null, 'javax.swing.filechooser.FileFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['description'],'O',['extensions','String[]','+lowerCaseExtensions']]]

Clazz.newMeth(C$, 'c$$S$SA',  function (description, extensions) {
;C$.superclazz.c$$SA.apply(this,[extensions]);C$.$init$.apply(this);
if (extensions == null  || extensions.length == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Extensions must be non-null and not empty"]);
}this.description=description;
this.extensions=Clazz.array(String, [extensions.length]);
this.lowerCaseExtensions=Clazz.array(String, [extensions.length]);
for (var i=0; i < extensions.length; i++) {
if (extensions[i] == null  || extensions[i].length$() == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Each extension must be non-null and not empty"]);
}this.extensions[i]=extensions[i];
this.lowerCaseExtensions[i]=extensions[i].toLowerCase$();
}
}, 1);

Clazz.newMeth(C$, 'accept$java_io_File',  function (f) {
if (f != null ) {
if (f.isDirectory$()) {
return true;
}var fileName=f.getName$();
var i=fileName.lastIndexOf$I(".");
if (i > 0 && i < fileName.length$() - 1 ) {
var desiredExtension=fileName.substring$I(i + 1).toLowerCase$();
for (var extension, $extension = 0, $$extension = this.lowerCaseExtensions; $extension<$$extension.length&&((extension=($$extension[$extension])),1);$extension++) {
if (desiredExtension.equals$O(extension)) {
return true;
}}
}}return false;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'getExtensions$',  function () {
var result=Clazz.array(String, [this.extensions.length]);
System.arraycopy$O$I$O$I$I(this.extensions, 0, result, 0, this.extensions.length);
return result;
});

Clazz.newMeth(C$, 'toString',  function () {
return C$.superclazz.prototype.toString.apply(this, []) + "[description=" + this.getDescription$() + " extensions=" + $I$(1,"asList$OA",[this.getExtensions$()]) + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:06 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
