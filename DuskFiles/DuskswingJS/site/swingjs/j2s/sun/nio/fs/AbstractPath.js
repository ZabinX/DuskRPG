(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[[0,'java.io.File',['java.nio.file.WatchEvent','.Modifier']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractPath", null, null, 'java.nio.file.Path');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'startsWith$S',  function (other) {
return this.startsWith$java_nio_file_Path(this.getFileSystem$().getPath$S$SA(other, Clazz.array(String, -1, [])));
});

Clazz.newMeth(C$, 'endsWith$S',  function (other) {
return this.endsWith$java_nio_file_Path(this.getFileSystem$().getPath$S$SA(other, Clazz.array(String, -1, [])));
});

Clazz.newMeth(C$, 'resolve$S',  function (other) {
return this.resolve$java_nio_file_Path(this.getFileSystem$().getPath$S$SA(other, Clazz.array(String, -1, [])));
});

Clazz.newMeth(C$, 'resolveSibling$java_nio_file_Path',  function (other) {
if (other == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var parent=this.getParent$();
return (parent == null ) ? other : parent.resolve$java_nio_file_Path(other);
});

Clazz.newMeth(C$, 'resolveSibling$S',  function (other) {
return this.resolveSibling$java_nio_file_Path(this.getFileSystem$().getPath$S$SA(other, Clazz.array(String, -1, [])));
});

Clazz.newMeth(C$, 'iterator$',  function () {
return ((P$.AbstractPath$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AbstractPath$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.i=0;
},1);

C$.$fields$=[['I',['i']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return (this.i < this.b$['java.nio.file.Path'].getNameCount$.apply(this.b$['java.nio.file.Path'], []));
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.i < this.b$['java.nio.file.Path'].getNameCount$.apply(this.b$['java.nio.file.Path'], [])) {
var result=this.b$['java.nio.file.Path'].getName$I.apply(this.b$['java.nio.file.Path'], [this.i]);
++this.i;
return result;
} else {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}});

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.AbstractPath$1.$init$,[this, null]));
});

Clazz.newMeth(C$, 'toFile$',  function () {
return Clazz.new_([this.toString()],$I$(1,1).c$$S);
});

Clazz.newMeth(C$, 'register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA',  function (watcher, events) {
return this.register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA$java_nio_file_WatchEvent_ModifierA(watcher, events, Clazz.array($I$(2), [0]));
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
