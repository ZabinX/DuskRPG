(function(){var P$=Clazz.newPackage("sun.text.normalizer"),I$=[[0,'java.io.DataInputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IntTrie", null, 'sun.text.normalizer.Trie');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['m_initialValue_'],'O',['m_data_','int[]']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream$sun_text_normalizer_Trie_DataManipulate',  function (inputStream, datamanipulate) {
;C$.superclazz.c$$java_io_InputStream$sun_text_normalizer_Trie_DataManipulate.apply(this,[inputStream, datamanipulate]);C$.$init$.apply(this);
if (!this.isIntTrie$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Data given does not belong to a int trie."]);
}}, 1);

Clazz.newMeth(C$, 'getCodePointValue$I',  function (ch) {
var offset=this.getCodePointOffset$I(ch);
return (offset >= 0) ? this.m_data_[offset] : this.m_initialValue_;
});

Clazz.newMeth(C$, 'getLeadValue$C',  function (ch) {
return this.m_data_[this.getLeadOffset$C(ch)];
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
C$.superclazz.prototype.unserialize$java_io_InputStream.apply(this, [inputStream]);
this.m_data_=Clazz.array(Integer.TYPE, [this.m_dataLength_]);
var input=Clazz.new_($I$(1,1).c$$java_io_InputStream,[inputStream]);
for (var i=0; i < this.m_dataLength_; i++) {
this.m_data_[i]=input.readInt$();
}
this.m_initialValue_=this.m_data_[0];
});

Clazz.newMeth(C$, 'getSurrogateOffset$C$C',  function (lead, trail) {
if (this.m_dataManipulate_ == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["The field DataManipulate in this Trie is null"]);
}var offset=this.m_dataManipulate_.getFoldingOffset$I(this.getLeadValue$C(lead));
if (offset > 0) {
return this.getRawOffset$I$C(offset, String.fromCharCode((trail.$c() & 1023)));
}return -1;
});

Clazz.newMeth(C$, 'getValue$I',  function (index) {
return this.m_data_[index];
});

Clazz.newMeth(C$, 'getInitialValue$',  function () {
return this.m_initialValue_;
});

Clazz.newMeth(C$, 'c$$CA$IA$I$I$sun_text_normalizer_Trie_DataManipulate',  function (index, data, initialvalue, options, datamanipulate) {
;C$.superclazz.c$$CA$I$sun_text_normalizer_Trie_DataManipulate.apply(this,[index, options, datamanipulate]);C$.$init$.apply(this);
this.m_data_=data;
this.m_dataLength_=this.m_data_.length;
this.m_initialValue_=initialvalue;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
