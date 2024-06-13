(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[[0,'java.nio.file.attribute.FileAttribute','java.util.HashSet','java.util.Collections']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileChannel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.nio.channels.spi.AbstractInterruptibleChannel', ['java.nio.channels.SeekableByteChannel', 'java.nio.channels.GatheringByteChannel', 'java.nio.channels.ScatteringByteChannel']);
C$.$classes$=[['MapMode',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['NO_ATTRIBUTES','java.nio.file.attribute.FileAttribute[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'open$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA',  function (path, options, attrs) {
var provider=path.getFileSystem$().provider$();
return provider.newFileChannel$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA(path, options, attrs);
}, 1);

Clazz.newMeth(C$, 'open$java_nio_file_Path$java_nio_file_OpenOptionA',  function (path, options) {
var set=Clazz.new_($I$(2,1).c$$I,[options.length]);
$I$(3).addAll$java_util_Collection$OA(set, options);
return C$.open$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA(path, set, C$.NO_ATTRIBUTES);
}, 1);

Clazz.newMeth(C$, 'read$java_nio_ByteBufferA',  function (dsts) {
return this.read$java_nio_ByteBufferA$I$I(dsts, 0, dsts.length);
});

Clazz.newMeth(C$, 'write$java_nio_ByteBufferA',  function (srcs) {
return this.write$java_nio_ByteBufferA$I$I(srcs, 0, srcs.length);
});

Clazz.newMeth(C$, 'lock$',  function () {
return this.lock$J$J$Z(0, [16777215,549755813887,1], false);
});

Clazz.newMeth(C$, 'tryLock$',  function () {
return this.tryLock$J$J$Z(0, [16777215,549755813887,1], false);
});

C$.$static$=function(){C$.$static$=0;
C$.NO_ATTRIBUTES=Clazz.array($I$(1), [0]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.FileChannel, "MapMode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]
,['O',['READ_ONLY','java.nio.channels.FileChannel.MapMode','+READ_WRITE','+PRIVATE']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

C$.$static$=function(){C$.$static$=0;
C$.READ_ONLY=Clazz.new_(C$.c$$S,["READ_ONLY"]);
C$.READ_WRITE=Clazz.new_(C$.c$$S,["READ_WRITE"]);
C$.PRIVATE=Clazz.new_(C$.c$$S,["PRIVATE"]);
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
