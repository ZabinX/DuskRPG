(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[[0,'java.util.HashSet','java.util.HashMap','java.util.Collections','sun.nio.fs.Util',['sun.nio.fs.AbstractBasicFileAttributeView','.AttributesBuilder']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractBasicFileAttributeView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.nio.file.attribute.BasicFileAttributeView', 'sun.nio.fs.DynamicFileAttributeView']);
C$.$classes$=[['AttributesBuilder',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['basicAttributeNames','java.util.Set']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'name$',  function () {
return "basic";
});

Clazz.newMeth(C$, 'setAttribute$S$O',  function (attribute, value) {
if (attribute.equals$O("lastModifiedTime")) {
this.setTimes$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime(value, null, null);
return;
}if (attribute.equals$O("lastAccessTime")) {
this.setTimes$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime(null, value, null);
return;
}if (attribute.equals$O("creationTime")) {
this.setTimes$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime(null, null, value);
return;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["'" + this.name$() + ":" + attribute + "' not recognized" ]);
});

Clazz.newMeth(C$, 'addRequestedBasicAttributes$java_nio_file_attribute_BasicFileAttributes$sun_nio_fs_AbstractBasicFileAttributeView_AttributesBuilder',  function (attrs, builder) {
if (builder.match$S("size")) builder.add$S$O("size", Long.valueOf$J(attrs.size$()));
if (builder.match$S("creationTime")) builder.add$S$O("creationTime", attrs.creationTime$());
if (builder.match$S("lastAccessTime")) builder.add$S$O("lastAccessTime", attrs.lastAccessTime$());
if (builder.match$S("lastModifiedTime")) builder.add$S$O("lastModifiedTime", attrs.lastModifiedTime$());
if (builder.match$S("fileKey")) builder.add$S$O("fileKey", attrs.fileKey$());
if (builder.match$S("isDirectory")) builder.add$S$O("isDirectory", Boolean.valueOf$Z(attrs.isDirectory$()));
if (builder.match$S("isRegularFile")) builder.add$S$O("isRegularFile", Boolean.valueOf$Z(attrs.isRegularFile$()));
if (builder.match$S("isSymbolicLink")) builder.add$S$O("isSymbolicLink", Boolean.valueOf$Z(attrs.isSymbolicLink$()));
if (builder.match$S("isOther")) builder.add$S$O("isOther", Boolean.valueOf$Z(attrs.isOther$()));
});

Clazz.newMeth(C$, 'readAttributes$SA',  function (requested) {
var builder=$I$(5).create$java_util_Set$SA(C$.basicAttributeNames, requested);
this.addRequestedBasicAttributes$java_nio_file_attribute_BasicFileAttributes$sun_nio_fs_AbstractBasicFileAttributeView_AttributesBuilder(this.readAttributes$(), builder);
return builder.unmodifiableMap$();
});

C$.$static$=function(){C$.$static$=0;
C$.basicAttributeNames=$I$(4,"newSet$OA",[Clazz.array(String, -1, ["size", "creationTime", "lastAccessTime", "lastModifiedTime", "fileKey", "isDirectory", "isRegularFile", "isSymbolicLink", "isOther"])]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractBasicFileAttributeView, "AttributesBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.names=Clazz.new_($I$(1,1));
this.map=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['copyAll'],'O',['names','java.util.Set','map','java.util.Map']]]

Clazz.newMeth(C$, 'c$$java_util_Set$SA',  function (allowed, requested) {
;C$.$init$.apply(this);
for (var name, $name = 0, $$name = requested; $name<$$name.length&&((name=($$name[$name])),1);$name++) {
if (name.equals$O("*")) {
this.copyAll=true;
} else {
if (!allowed.contains$O(name)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["'" + name + "' not recognized" ]);
this.names.add$O(name);
}}
}, 1);

Clazz.newMeth(C$, 'create$java_util_Set$SA',  function (allowed, requested) {
return Clazz.new_(C$.c$$java_util_Set$SA,[allowed, requested]);
}, 1);

Clazz.newMeth(C$, 'match$S',  function (name) {
return this.copyAll || this.names.contains$O(name) ;
});

Clazz.newMeth(C$, 'add$S$O',  function (name, value) {
this.map.put$O$O(name, value);
});

Clazz.newMeth(C$, 'unmodifiableMap$',  function () {
return $I$(3).unmodifiableMap$java_util_Map(this.map);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
