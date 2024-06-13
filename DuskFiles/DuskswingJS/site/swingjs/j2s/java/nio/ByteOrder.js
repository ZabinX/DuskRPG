(function(){var P$=Clazz.newPackage("java.nio"),I$=[[0,'java.nio.Bits']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ByteOrder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]
,['O',['BIG_ENDIAN','java.nio.ByteOrder','+LITTLE_ENDIAN']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'nativeOrder$',  function () {
return $I$(1).byteOrder$();
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

C$.$static$=function(){C$.$static$=0;
C$.BIG_ENDIAN=Clazz.new_(C$.c$$S,["BIG_ENDIAN"]);
C$.LITTLE_ENDIAN=Clazz.new_(C$.c$$S,["LITTLE_ENDIAN"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:20 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
