(function(){var P$=Clazz.newPackage("sun.text.normalizer"),I$=[[0,'sun.text.normalizer.ICUBinary','java.io.DataInputStream','sun.text.normalizer.CharTrie','sun.text.normalizer.VersionInfo']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UCharacterPropertyReader", null, null, [['sun.text.normalizer.ICUBinary','sun.text.normalizer.ICUBinary.Authenticate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['m_propertyOffset_','m_exceptionOffset_','m_caseOffset_','m_additionalOffset_','m_additionalVectorsOffset_','m_additionalColumnsCount_','m_reservedOffset_'],'O',['m_dataInputStream_','java.io.DataInputStream','m_unicodeVersion_','byte[]']]
,['O',['DATA_FORMAT_ID_','byte[]','+DATA_FORMAT_VERSION_']]]

Clazz.newMeth(C$, 'isDataVersionAcceptable$BA',  function (version) {
return version[0] == C$.DATA_FORMAT_VERSION_[0] && version[2] == C$.DATA_FORMAT_VERSION_[2]  && version[3] == C$.DATA_FORMAT_VERSION_[3] ;
});

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function (inputStream) {
;C$.$init$.apply(this);
this.m_unicodeVersion_=$I$(1).readHeader$java_io_InputStream$BA$sun_text_normalizer_ICUBinary_Authenticate(inputStream, C$.DATA_FORMAT_ID_, this);
this.m_dataInputStream_=Clazz.new_($I$(2,1).c$$java_io_InputStream,[inputStream]);
}, 1);

Clazz.newMeth(C$, 'read$sun_text_normalizer_UCharacterProperty',  function (ucharppty) {
var count=16;
this.m_propertyOffset_=this.m_dataInputStream_.readInt$();
--count;
this.m_exceptionOffset_=this.m_dataInputStream_.readInt$();
--count;
this.m_caseOffset_=this.m_dataInputStream_.readInt$();
--count;
this.m_additionalOffset_=this.m_dataInputStream_.readInt$();
--count;
this.m_additionalVectorsOffset_=this.m_dataInputStream_.readInt$();
--count;
this.m_additionalColumnsCount_=this.m_dataInputStream_.readInt$();
--count;
this.m_reservedOffset_=this.m_dataInputStream_.readInt$();
--count;
this.m_dataInputStream_.skipBytes$I(12);
count-=3;
ucharppty.m_maxBlockScriptValue_=this.m_dataInputStream_.readInt$();
--count;
ucharppty.m_maxJTGValue_=this.m_dataInputStream_.readInt$();
--count;
this.m_dataInputStream_.skipBytes$I(count << 2);
ucharppty.m_trie_=Clazz.new_($I$(3,1).c$$java_io_InputStream$sun_text_normalizer_Trie_DataManipulate,[this.m_dataInputStream_, null]);
var size=this.m_exceptionOffset_ - this.m_propertyOffset_;
this.m_dataInputStream_.skipBytes$I(size * 4);
size=this.m_caseOffset_ - this.m_exceptionOffset_;
this.m_dataInputStream_.skipBytes$I(size * 4);
size=(this.m_additionalOffset_ - this.m_caseOffset_) << 1;
this.m_dataInputStream_.skipBytes$I(size * 2);
if (this.m_additionalColumnsCount_ > 0) {
ucharppty.m_additionalTrie_=Clazz.new_($I$(3,1).c$$java_io_InputStream$sun_text_normalizer_Trie_DataManipulate,[this.m_dataInputStream_, null]);
size=this.m_reservedOffset_ - this.m_additionalVectorsOffset_;
ucharppty.m_additionalVectors_=Clazz.array(Integer.TYPE, [size]);
for (var i=0; i < size; i++) {
ucharppty.m_additionalVectors_[i]=this.m_dataInputStream_.readInt$();
}
}this.m_dataInputStream_.close$();
ucharppty.m_additionalColumnsCount_=this.m_additionalColumnsCount_;
ucharppty.m_unicodeVersion_=$I$(4,"getInstance$I$I$I$I",[(this.m_unicodeVersion_[0]|0), (this.m_unicodeVersion_[1]|0), (this.m_unicodeVersion_[2]|0), (this.m_unicodeVersion_[3]|0)]);
});

C$.$static$=function(){C$.$static$=0;
C$.DATA_FORMAT_ID_=Clazz.array(Byte.TYPE, -1, [85, 80, 114, 111]);
C$.DATA_FORMAT_VERSION_=Clazz.array(Byte.TYPE, -1, [5, 0, 5, 2]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
