(function(){var P$=Clazz.newPackage("sun.text.normalizer"),I$=[[0,'java.util.HashMap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VersionInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['m_version_']]
,['O',['MAP_','java.util.HashMap']]]

Clazz.newMeth(C$, 'getInstance$S',  function (version) {
var length=version.length$();
var array=Clazz.array(Integer.TYPE, -1, [0, 0, 0, 0]);
var count=0;
var index=0;
while (count < 4 && index < length ){
var c=version.charAt$I(index);
if (c == ".") {
++count;
} else {
c = String.fromCharCode(c.$c()- 48);
if (c.$c() < 0  || c.$c() > 9  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid version number: Version number may be negative or greater than 255"]);
}array[count]*=10;
array[count]+=c.$c();
}++index;
}
if (index != length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid version number: String '" + version + "' exceeds version format" ]);
}for (var i=0; i < 4; i++) {
if (array[i] < 0 || array[i] > 255 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid version number: Version number may be negative or greater than 255"]);
}}
return C$.getInstance$I$I$I$I(array[0], array[1], array[2], array[3]);
}, 1);

Clazz.newMeth(C$, 'getInstance$I$I$I$I',  function (major, minor, milli, micro) {
if (major < 0 || major > 255  || minor < 0  || minor > 255  || milli < 0  || milli > 255  || micro < 0  || micro > 255 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid version number: Version number may be negative or greater than 255"]);
}var version=C$.getInt$I$I$I$I(major, minor, milli, micro);
var key=Integer.valueOf$I(version);
var result=C$.MAP_.get$O(key);
if (result == null ) {
result=Clazz.new_(C$.c$$I,[version]);
C$.MAP_.put$O$O(key, result);
}return result;
}, 1);

Clazz.newMeth(C$, 'compareTo$sun_text_normalizer_VersionInfo',  function (other) {
return this.m_version_ - other.m_version_;
});

Clazz.newMeth(C$, 'c$$I',  function (compactversion) {
;C$.$init$.apply(this);
this.m_version_=compactversion;
}, 1);

Clazz.newMeth(C$, 'getInt$I$I$I$I',  function (major, minor, milli, micro) {
return (major << 24) | (minor << 16) | (milli << 8) | micro ;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.MAP_=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:51 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
