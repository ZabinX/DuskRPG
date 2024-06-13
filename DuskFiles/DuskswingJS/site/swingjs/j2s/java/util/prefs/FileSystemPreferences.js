(function(){var P$=Clazz.newPackage("java.util.prefs"),p$1={},I$=[[0,'java.io.File','java.util.TreeMap','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileSystemPreferences", null, 'java.util.prefs.AbstractPreferences');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.prefsCache=null;
},1);

C$.$fields$=[['Z',['isUserNode'],'O',['dir','java.io.File','prefsCache','java.util.Map']]
,['O',['systemRootDir','java.io.File','+userRootDir','userRoot','java.util.prefs.Preferences','+systemRoot','$EMPTY_STRING_ARRAY','String[]']]]

Clazz.newMeth(C$, 'getUserRoot$',  function () {
if (C$.userRoot == null ) {
C$.setupUserRoot$();
C$.userRoot=Clazz.new_(C$.c$$Z,[true]);
}return C$.userRoot;
}, 1);

Clazz.newMeth(C$, 'setupUserRoot$',  function () {
C$.userRootDir=Clazz.new_($I$(1,1).c$$S,["."]);
}, 1);

Clazz.newMeth(C$, 'getSystemRoot$',  function () {
if (C$.systemRoot == null ) {
C$.setupSystemRoot$();
C$.systemRoot=Clazz.new_(C$.c$$Z,[false]);
}return C$.systemRoot;
}, 1);

Clazz.newMeth(C$, 'setupSystemRoot$',  function () {
C$.systemRootDir=Clazz.new_($I$(1,1).c$$S,["."]);
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (user) {
;C$.superclazz.c$$java_util_prefs_AbstractPreferences$S.apply(this,[null, ""]);C$.$init$.apply(this);
this.isUserNode=user;
this.dir=(user ? C$.userRootDir : C$.systemRootDir);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_prefs_FileSystemPreferences$S',  function (parent, name) {
;C$.superclazz.c$$java_util_prefs_AbstractPreferences$S.apply(this,[parent, name]);C$.$init$.apply(this);
this.isUserNode=parent.isUserNode;
this.dir=Clazz.new_([parent.dir, C$.dirName$S(name)],$I$(1,1).c$$java_io_File$S);
this.newNode=false;
if (this.newNode) {
this.prefsCache=Clazz.new_($I$(2,1));
}}, 1);

Clazz.newMeth(C$, 'isUserNode$',  function () {
return this.isUserNode;
});

Clazz.newMeth(C$, 'putSpi$S$S',  function (key, value) {
p$1.initCacheIfNecessary.apply(this, []);
this.prefsCache.put$O$O(key, value);
});

Clazz.newMeth(C$, 'getSpi$S',  function (key) {
p$1.initCacheIfNecessary.apply(this, []);
return this.prefsCache.get$O(key);
});

Clazz.newMeth(C$, 'removeSpi$S',  function (key) {
p$1.initCacheIfNecessary.apply(this, []);
this.prefsCache.remove$O(key);
});

Clazz.newMeth(C$, 'initCacheIfNecessary',  function () {
if (this.prefsCache != null ) return;
this.prefsCache=Clazz.new_($I$(2,1));
}, p$1);

Clazz.newMeth(C$, 'keysSpi$',  function () {
p$1.initCacheIfNecessary.apply(this, []);
return this.prefsCache.keySet$().toArray$OA(Clazz.array(String, [this.prefsCache.size$()]));
});

Clazz.newMeth(C$, 'childrenNamesSpi$',  function () {
var result=Clazz.new_($I$(3,1));
var dirContents=this.dir.listFiles$();
if (dirContents != null ) {
for (var i=0; i < dirContents.length; i++) if (dirContents[i].isDirectory$()) result.add$O(C$.nodeName$S(dirContents[i].getName$()));

}return result.toArray$OA(C$.$EMPTY_STRING_ARRAY);
});

Clazz.newMeth(C$, 'childSpi$S',  function (name) {
return Clazz.new_(C$.c$$java_util_prefs_FileSystemPreferences$S,[this, name]);
});

Clazz.newMeth(C$, 'removeNode$',  function () {
});

Clazz.newMeth(C$, 'removeNodeSpi$',  function () {
});

Clazz.newMeth(C$, 'sync$',  function () {
});

Clazz.newMeth(C$, 'syncSpi$',  function () {
});

Clazz.newMeth(C$, 'flush$',  function () {
});

Clazz.newMeth(C$, 'flushSpi$',  function () {
});

Clazz.newMeth(C$, 'isDirChar$C',  function (ch) {
return ch.$c() > 31  && ch.$c() < 127   && ch != "/"  && ch != "."  && ch != "_" ;
}, 1);

Clazz.newMeth(C$, 'dirName$S',  function (nodeName) {
return nodeName;
}, 1);

Clazz.newMeth(C$, 'nodeName$S',  function (dirName) {
return dirName;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.userRoot=null;
C$.$EMPTY_STRING_ARRAY=Clazz.array(String, [0]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:40 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
