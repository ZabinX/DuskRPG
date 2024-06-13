(function(){var P$=Clazz.newPackage("sun.text.normalizer"),I$=[[0,'sun.text.normalizer.UTF16','sun.text.normalizer.VersionInfo','sun.text.normalizer.ICUData','java.io.BufferedInputStream','sun.text.normalizer.UCharacterPropertyReader','sun.text.normalizer.TrieIterator',['sun.text.normalizer.RangeValueIterator','.Element']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UCharacterProperty");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['m_trieInitialValue_','m_additionalColumnsCount_','m_maxBlockScriptValue_','m_maxJTGValue_'],'O',['m_trie_','sun.text.normalizer.CharTrie','m_trieIndex_','char[]','+m_trieData_','m_unicodeVersion_','sun.text.normalizer.VersionInfo','m_additionalTrie_','sun.text.normalizer.CharTrie','m_additionalVectors_','int[]']]
,['O',['INSTANCE_','sun.text.normalizer.UCharacterProperty']]]

Clazz.newMeth(C$, 'setIndexData$sun_text_normalizer_CharTrie_FriendAgent',  function (friendagent) {
this.m_trieIndex_=friendagent.getPrivateIndex$();
this.m_trieData_=friendagent.getPrivateData$();
this.m_trieInitialValue_=friendagent.getPrivateInitialValue$();
});

Clazz.newMeth(C$, 'getProperty$I',  function (ch) {
if (ch < 55296 || (ch > 56319 && ch < 65536 ) ) {
try {
return this.m_trieData_[((this.m_trieIndex_[ch >> 5]).$c() << 2) + (ch & 31)].$c();
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
return this.m_trieInitialValue_;
} else {
throw e;
}
}
}if (ch <= 56319) {
return this.m_trieData_[((this.m_trieIndex_[320 + (ch >> 5)]).$c() << 2) + (ch & 31)].$c();
}if (ch <= 1114111) {
return this.m_trie_.getSurrogateValue$C$C($I$(1).getLeadSurrogate$I(ch), String.fromCharCode((ch & 1023))).$c();
}return this.m_trieInitialValue_;
});

Clazz.newMeth(C$, 'getUnsignedValue$I',  function (prop) {
return (prop >> 8) & 255;
}, 1);

Clazz.newMeth(C$, 'getAdditional$I$I',  function (codepoint, column) {
if (column == -1) {
return this.getProperty$I(codepoint);
}if (column < 0 || column >= this.m_additionalColumnsCount_ ) {
return 0;
}return this.m_additionalVectors_[(this.m_additionalTrie_.getCodePointValue$I(codepoint)).$c() + column];
});

Clazz.newMeth(C$, 'getAge$I',  function (codepoint) {
var version=this.getAdditional$I$I(codepoint, 0) >> 24;
return $I$(2,"getInstance$I$I$I$I",[(version >> 4) & 15, version & 15, 0, 0]);
});

Clazz.newMeth(C$, 'getRawSupplementary$C$C',  function (lead, trail) {
return (lead.$c() << 10) + trail.$c() + -56613888 ;
}, 1);

Clazz.newMeth(C$, 'getInstance$',  function () {
if (C$.INSTANCE_ == null ) {
try {
C$.INSTANCE_=Clazz.new_(C$);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('java.util.MissingResourceException').c$$S$S$S,[e.getMessage$(), "", ""]);
} else {
throw e;
}
}
}return C$.INSTANCE_;
}, 1);

Clazz.newMeth(C$, 'isRuleWhiteSpace$I',  function (c) {
return (c >= 9 && c <= 8233  && (c <= 13 || c == 32  || c == 133  || c == 8206  || c == 8207  || c >= 8232 ) );
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
var is=$I$(3).getRequiredStream$S("/sun/text/resources/uprops.icu");
var b=Clazz.new_($I$(4,1).c$$java_io_InputStream$I,[is, 25000]);
var reader=Clazz.new_($I$(5,1).c$$java_io_InputStream,[b]);
reader.read$sun_text_normalizer_UCharacterProperty(this);
b.close$();
this.m_trie_.putIndexData$sun_text_normalizer_UCharacterProperty(this);
}, 1);

Clazz.newMeth(C$, 'upropsvec_addPropertyStarts$sun_text_normalizer_UnicodeSet',  function (set) {
if (this.m_additionalColumnsCount_ > 0) {
var propsVectorsIter=Clazz.new_($I$(6,1).c$$sun_text_normalizer_Trie,[this.m_additionalTrie_]);
var propsVectorsResult=Clazz.new_($I$(7,1));
while (propsVectorsIter.next$sun_text_normalizer_RangeValueIterator_Element(propsVectorsResult)){
set.add$I(propsVectorsResult.start);
}
}});

C$.$static$=function(){C$.$static$=0;
C$.INSTANCE_=null;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
