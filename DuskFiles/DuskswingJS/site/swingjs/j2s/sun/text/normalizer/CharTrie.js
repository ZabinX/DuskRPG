(function(){var P$=Clazz.newPackage("sun.text.normalizer"),I$=[[0,['sun.text.normalizer.CharTrie','.FriendAgent'],'java.io.DataInputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CharTrie", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'sun.text.normalizer.Trie');
C$.$classes$=[['FriendAgent',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['m_initialValue_'],'O',['m_data_','char[]','m_friendAgent_','sun.text.normalizer.CharTrie.FriendAgent']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream$sun_text_normalizer_Trie_DataManipulate',  function (inputStream, dataManipulate) {
;C$.superclazz.c$$java_io_InputStream$sun_text_normalizer_Trie_DataManipulate.apply(this,[inputStream, dataManipulate]);C$.$init$.apply(this);
if (!this.isCharTrie$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Data given does not belong to a char trie."]);
}this.m_friendAgent_=Clazz.new_($I$(1,1),[this, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$sun_text_normalizer_Trie_DataManipulate',  function (initialValue, leadUnitValue, dataManipulate) {
;C$.superclazz.c$$CA$I$sun_text_normalizer_Trie_DataManipulate.apply(this,[Clazz.array(Character.TYPE, [2080]), 512, dataManipulate]);C$.$init$.apply(this);
var dataLength;
var latin1Length;
var i;
var limit;
var block;
dataLength=latin1Length=256;
if (leadUnitValue != initialValue) {
dataLength+=32;
}this.m_data_=Clazz.array(Character.TYPE, [dataLength]);
this.m_dataLength_=dataLength;
this.m_initialValue_=String.fromCharCode(initialValue);
for (i=0; i < latin1Length; ++i) {
this.m_data_[i]=String.fromCharCode(initialValue);
}
if (leadUnitValue != initialValue) {
block=String.fromCharCode((latin1Length >> 2));
i=1728;
limit=1760;
for (; i < limit; ++i) {
this.m_index_[i]=block;
}
limit=latin1Length + 32;
for (i=latin1Length; i < limit; ++i) {
this.m_data_[i]=String.fromCharCode(leadUnitValue);
}
}this.m_friendAgent_=Clazz.new_($I$(1,1),[this, null]);
}, 1);

Clazz.newMeth(C$, 'putIndexData$sun_text_normalizer_UCharacterProperty',  function (friend) {
friend.setIndexData$sun_text_normalizer_CharTrie_FriendAgent(this.m_friendAgent_);
});

Clazz.newMeth(C$, 'getCodePointValue$I',  function (ch) {
var offset;
if (0 <= ch && ch < 55296 ) {
offset=((this.m_index_[ch >> 5]).$c() << 2) + (ch & 31);
return this.m_data_[offset];
}offset=this.getCodePointOffset$I(ch);
return (offset >= 0) ? this.m_data_[offset] : this.m_initialValue_;
});

Clazz.newMeth(C$, 'getLeadValue$C',  function (ch) {
return this.m_data_[this.getLeadOffset$C(ch)];
});

Clazz.newMeth(C$, 'getSurrogateValue$C$C',  function (lead, trail) {
var offset=this.getSurrogateOffset$C$C(lead, trail);
if (offset > 0) {
return this.m_data_[offset];
}return this.m_initialValue_;
});

Clazz.newMeth(C$, 'getTrailValue$I$C',  function (leadvalue, trail) {
if (this.m_dataManipulate_ == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["The field DataManipulate in this Trie is null"]);
}var offset=this.m_dataManipulate_.getFoldingOffset$I(leadvalue);
if (offset > 0) {
return this.m_data_[this.getRawOffset$I$C(offset, String.fromCharCode((trail.$c() & 1023)))];
}return this.m_initialValue_;
});

Clazz.newMeth(C$, 'unserialize$java_io_InputStream',  function (inputStream) {
var input=Clazz.new_($I$(2,1).c$$java_io_InputStream,[inputStream]);
var indexDataLength=this.m_dataOffset_ + this.m_dataLength_;
this.m_index_=Clazz.array(Character.TYPE, [indexDataLength]);
for (var i=0; i < indexDataLength; i++) {
this.m_index_[i]=input.readChar$();
}
this.m_data_=this.m_index_;
this.m_initialValue_=this.m_data_[this.m_dataOffset_];
});

Clazz.newMeth(C$, 'getSurrogateOffset$C$C',  function (lead, trail) {
if (this.m_dataManipulate_ == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["The field DataManipulate in this Trie is null"]);
}var offset=this.m_dataManipulate_.getFoldingOffset$I(this.getLeadValue$C(lead).$c());
if (offset > 0) {
return this.getRawOffset$I$C(offset, String.fromCharCode((trail.$c() & 1023)));
}return -1;
});

Clazz.newMeth(C$, 'getValue$I',  function (index) {
return this.m_data_[index].$c();
});

Clazz.newMeth(C$, 'getInitialValue$',  function () {
return this.m_initialValue_.$c();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.CharTrie, "FriendAgent", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPrivateIndex$',  function () {
return this.b$['sun.text.normalizer.CharTrie'].m_index_;
});

Clazz.newMeth(C$, 'getPrivateData$',  function () {
return this.b$['sun.text.normalizer.CharTrie'].m_data_;
});

Clazz.newMeth(C$, 'getPrivateInitialValue$',  function () {
return this.b$['sun.text.normalizer.CharTrie'].m_initialValue_.$c();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
