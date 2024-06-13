(function(){var P$=Clazz.newPackage("sun.text.normalizer"),p$1={},I$=[[0,'sun.text.normalizer.ICUData','java.io.BufferedInputStream','java.io.DataInputStream','sun.text.normalizer.ICUBinary',['sun.text.normalizer.UBiDiProps','.IsAcceptable'],'sun.text.normalizer.CharTrie']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UBiDiProps", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['IsAcceptable',18]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['indexes','int[]','+mirrors','jgArray','byte[]','trie','sun.text.normalizer.CharTrie']]
,['O',['gBdp','sun.text.normalizer.UBiDiProps','+gBdpDummy','FMT','byte[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
var is=$I$(1).getStream$S("/sun/text/resources/ubidi.icu");
var b=Clazz.new_($I$(2,1).c$$java_io_InputStream$I,[is, 4096]);
p$1.readData$java_io_InputStream.apply(this, [b]);
b.close$();
is.close$();
}, 1);

Clazz.newMeth(C$, 'readData$java_io_InputStream',  function (is) {
var inputStream=Clazz.new_($I$(3,1).c$$java_io_InputStream,[is]);
$I$(4,"readHeader$java_io_InputStream$BA$sun_text_normalizer_ICUBinary_Authenticate",[inputStream, C$.FMT, Clazz.new_($I$(5,1),[this, null])]);
var i;
var count;
count=inputStream.readInt$();
if (count < 0) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["indexes[0] too small in /sun/text/resources/ubidi.icu"]);
}this.indexes=Clazz.array(Integer.TYPE, [count]);
this.indexes[0]=count;
for (i=1; i < count; ++i) {
this.indexes[i]=inputStream.readInt$();
}
this.trie=Clazz.new_($I$(6,1).c$$java_io_InputStream$sun_text_normalizer_Trie_DataManipulate,[inputStream, null]);
count=this.indexes[3];
if (count > 0) {
this.mirrors=Clazz.array(Integer.TYPE, [count]);
for (i=0; i < count; ++i) {
this.mirrors[i]=inputStream.readInt$();
}
}count=this.indexes[5] - this.indexes[4];
this.jgArray=Clazz.array(Byte.TYPE, [count]);
for (i=0; i < count; ++i) {
this.jgArray[i]=inputStream.readByte$();
}
}, p$1);

Clazz.newMeth(C$, 'getSingleton$',  function () {
if (C$.gBdp == null ) {
C$.gBdp=Clazz.new_(C$);
}return C$.gBdp;
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (makeDummy) {
;C$.$init$.apply(this);
this.indexes=Clazz.array(Integer.TYPE, [16]);
this.indexes[0]=16;
this.trie=Clazz.new_($I$(6,1).c$$I$I$sun_text_normalizer_Trie_DataManipulate,[0, 0, null]);
}, 1);

Clazz.newMeth(C$, 'getDummy$',  function () {
if (C$.gBdpDummy == null ) {
C$.gBdpDummy=Clazz.new_(C$.c$$Z,[true]);
}return C$.gBdpDummy;
}, 1);

Clazz.newMeth(C$, 'getClass$I',  function (c) {
return C$.getClassFromProps$I(this.trie.getCodePointValue$I(c).$c());
});

Clazz.newMeth(C$, 'getClassFromProps$I',  function (props) {
return props & 31;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.gBdp=null;
C$.gBdpDummy=null;
C$.FMT=Clazz.array(Byte.TYPE, -1, [66, 105, 68, 105]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.UBiDiProps, "IsAcceptable", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['sun.text.normalizer.ICUBinary','sun.text.normalizer.ICUBinary.Authenticate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isDataVersionAcceptable$BA',  function (version) {
return version[0] == 1 && version[2] == 5  && version[3] == 2 ;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
