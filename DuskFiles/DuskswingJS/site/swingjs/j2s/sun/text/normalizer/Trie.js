(function(){var P$=Clazz.newPackage("sun.text.normalizer"),p$1={},I$=[[0,'java.io.DataInputStream',['sun.text.normalizer.Trie','.DefaultGetFoldingOffset'],'sun.text.normalizer.UTF16']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Trie", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['DataManipulate',9],['DefaultGetFoldingOffset',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['m_isLatin1Linear_'],'I',['m_dataOffset_','m_dataLength_','m_options_'],'O',['m_index_','char[]','m_dataManipulate_','sun.text.normalizer.Trie.DataManipulate']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream$sun_text_normalizer_Trie_DataManipulate',  function (inputStream, dataManipulate) {
;C$.$init$.apply(this);
var input=Clazz.new_($I$(1,1).c$$java_io_InputStream,[inputStream]);
var signature=input.readInt$();
this.m_options_=input.readInt$();
if (!p$1.checkHeader$I.apply(this, [signature])) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["ICU data file error: Trie header authentication failed, please check if you have the most updated ICU data file"]);
}if (dataManipulate != null ) {
this.m_dataManipulate_=dataManipulate;
} else {
this.m_dataManipulate_=Clazz.new_($I$(2,1));
}this.m_isLatin1Linear_=(this.m_options_ & 512) != 0;
this.m_dataOffset_=input.readInt$();
this.m_dataLength_=input.readInt$();
this.unserialize$java_io_InputStream(inputStream);
}, 1);

Clazz.newMeth(C$, 'c$$CA$I$sun_text_normalizer_Trie_DataManipulate',  function (index, options, dataManipulate) {
;C$.$init$.apply(this);
this.m_options_=options;
if (dataManipulate != null ) {
this.m_dataManipulate_=dataManipulate;
} else {
this.m_dataManipulate_=Clazz.new_($I$(2,1));
}this.m_isLatin1Linear_=(this.m_options_ & 512) != 0;
this.m_index_=index;
this.m_dataOffset_=this.m_index_.length;
}, 1);

Clazz.newMeth(C$, 'getRawOffset$I$C',  function (offset, ch) {
return ((this.m_index_[offset + (ch.$c() >> 5)]).$c() << 2) + (ch.$c() & 31);
});

Clazz.newMeth(C$, 'getBMPOffset$C',  function (ch) {
return (ch.$c() >= 55296  && ch.$c() <= 56319  ) ? this.getRawOffset$I$C(320, ch) : this.getRawOffset$I$C(0, ch);
});

Clazz.newMeth(C$, 'getLeadOffset$C',  function (ch) {
return this.getRawOffset$I$C(0, ch);
});

Clazz.newMeth(C$, 'getCodePointOffset$I',  function (ch) {
if (ch < 0) {
return -1;
} else if (ch < 55296) {
return this.getRawOffset$I$C(0, String.fromCharCode(ch));
} else if (ch < 65536) {
return this.getBMPOffset$C(String.fromCharCode(ch));
} else if (ch <= 1114111) {
return this.getSurrogateOffset$C$C($I$(3).getLeadSurrogate$I(ch), String.fromCharCode((ch & 1023)));
} else {
return -1;
}});

Clazz.newMeth(C$, 'unserialize$java_io_InputStream',  function (inputStream) {
this.m_index_=Clazz.array(Character.TYPE, [this.m_dataOffset_]);
var input=Clazz.new_($I$(1,1).c$$java_io_InputStream,[inputStream]);
for (var i=0; i < this.m_dataOffset_; i++) {
this.m_index_[i]=input.readChar$();
}
});

Clazz.newMeth(C$, 'isIntTrie$',  function () {
return (this.m_options_ & 256) != 0;
});

Clazz.newMeth(C$, 'isCharTrie$',  function () {
return (this.m_options_ & 256) == 0;
});

Clazz.newMeth(C$, 'checkHeader$I',  function (signature) {
if (signature != 1416784229) {
return false;
}if ((this.m_options_ & 15) != 5 || ((this.m_options_ >> 4) & 15) != 2 ) {
return false;
}return true;
}, p$1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Trie, "DataManipulate", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Trie, "DefaultGetFoldingOffset", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.text.normalizer.Trie','sun.text.normalizer.Trie.DataManipulate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getFoldingOffset$I',  function (value) {
return value;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
