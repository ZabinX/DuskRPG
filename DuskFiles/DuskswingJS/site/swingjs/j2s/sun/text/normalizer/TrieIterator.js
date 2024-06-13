(function(){var P$=Clazz.newPackage("sun.text.normalizer"),p$1={},I$=[[0,'sun.text.normalizer.UTF16','sun.text.normalizer.UCharacterProperty']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrieIterator", null, null, 'sun.text.normalizer.RangeValueIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['m_initialValue_','m_currentCodepoint_','m_nextCodepoint_','m_nextValue_','m_nextIndex_','m_nextBlock_','m_nextBlockIndex_','m_nextTrailIndexOffset_'],'O',['m_trie_','sun.text.normalizer.Trie']]]

Clazz.newMeth(C$, 'c$$sun_text_normalizer_Trie',  function (trie) {
;C$.$init$.apply(this);
if (trie == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Argument trie cannot be null"]);
}this.m_trie_=trie;
this.m_initialValue_=this.extract$I(this.m_trie_.getInitialValue$());
this.reset$();
}, 1);

Clazz.newMeth(C$, 'next$sun_text_normalizer_RangeValueIterator_Element',  function (element) {
if (this.m_nextCodepoint_ > 1114111) {
return false;
}if (this.m_nextCodepoint_ < 65536 && p$1.calculateNextBMPElement$sun_text_normalizer_RangeValueIterator_Element.apply(this, [element]) ) {
return true;
}p$1.calculateNextSupplementaryElement$sun_text_normalizer_RangeValueIterator_Element.apply(this, [element]);
return true;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.m_currentCodepoint_=0;
this.m_nextCodepoint_=0;
this.m_nextIndex_=0;
this.m_nextBlock_=(this.m_trie_.m_index_[0]).$c() << 2;
if (this.m_nextBlock_ == 0) {
this.m_nextValue_=this.m_initialValue_;
} else {
this.m_nextValue_=this.extract$I(this.m_trie_.getValue$I(this.m_nextBlock_));
}this.m_nextBlockIndex_=0;
this.m_nextTrailIndexOffset_=32;
});

Clazz.newMeth(C$, 'extract$I',  function (value) {
return value;
});

Clazz.newMeth(C$, 'setResult$sun_text_normalizer_RangeValueIterator_Element$I$I$I',  function (element, start, limit, value) {
element.start=start;
element.limit=limit;
element.value=value;
}, p$1);

Clazz.newMeth(C$, 'calculateNextBMPElement$sun_text_normalizer_RangeValueIterator_Element',  function (element) {
var currentBlock=this.m_nextBlock_;
var currentValue=this.m_nextValue_;
this.m_currentCodepoint_=this.m_nextCodepoint_;
++this.m_nextCodepoint_;
++this.m_nextBlockIndex_;
if (!p$1.checkBlockDetail$I.apply(this, [currentValue])) {
p$1.setResult$sun_text_normalizer_RangeValueIterator_Element$I$I$I.apply(this, [element, this.m_currentCodepoint_, this.m_nextCodepoint_, currentValue]);
return true;
}while (this.m_nextCodepoint_ < 65536){
++this.m_nextIndex_;
if (this.m_nextCodepoint_ == 55296) {
this.m_nextIndex_=2048;
} else if (this.m_nextCodepoint_ == 56320) {
this.m_nextIndex_=this.m_nextCodepoint_ >> 5;
}this.m_nextBlockIndex_=0;
if (!p$1.checkBlock$I$I.apply(this, [currentBlock, currentValue])) {
p$1.setResult$sun_text_normalizer_RangeValueIterator_Element$I$I$I.apply(this, [element, this.m_currentCodepoint_, this.m_nextCodepoint_, currentValue]);
return true;
}}
--this.m_nextCodepoint_;
--this.m_nextBlockIndex_;
return false;
}, p$1);

Clazz.newMeth(C$, 'calculateNextSupplementaryElement$sun_text_normalizer_RangeValueIterator_Element',  function (element) {
var currentValue=this.m_nextValue_;
var currentBlock=this.m_nextBlock_;
++this.m_nextCodepoint_;
++this.m_nextBlockIndex_;
if (($I$(1).getTrailSurrogate$I(this.m_nextCodepoint_)).$c() != 56320 ) {
if (!p$1.checkNullNextTrailIndex.apply(this, []) && !p$1.checkBlockDetail$I.apply(this, [currentValue]) ) {
p$1.setResult$sun_text_normalizer_RangeValueIterator_Element$I$I$I.apply(this, [element, this.m_currentCodepoint_, this.m_nextCodepoint_, currentValue]);
this.m_currentCodepoint_=this.m_nextCodepoint_;
return;
}++this.m_nextIndex_;
++this.m_nextTrailIndexOffset_;
if (!p$1.checkTrailBlock$I$I.apply(this, [currentBlock, currentValue])) {
p$1.setResult$sun_text_normalizer_RangeValueIterator_Element$I$I$I.apply(this, [element, this.m_currentCodepoint_, this.m_nextCodepoint_, currentValue]);
this.m_currentCodepoint_=this.m_nextCodepoint_;
return;
}}var nextLead=$I$(1).getLeadSurrogate$I(this.m_nextCodepoint_).$c();
while (nextLead < 56320){
var leadBlock=(this.m_trie_.m_index_[nextLead >> 5]).$c() << 2;
if (leadBlock == this.m_trie_.m_dataOffset_) {
if (currentValue != this.m_initialValue_) {
this.m_nextValue_=this.m_initialValue_;
this.m_nextBlock_=0;
this.m_nextBlockIndex_=0;
p$1.setResult$sun_text_normalizer_RangeValueIterator_Element$I$I$I.apply(this, [element, this.m_currentCodepoint_, this.m_nextCodepoint_, currentValue]);
this.m_currentCodepoint_=this.m_nextCodepoint_;
return;
}nextLead+=32;
this.m_nextCodepoint_=$I$(2,"getRawSupplementary$C$C",[String.fromCharCode(nextLead), "\udc00"]);
continue;
}if (this.m_trie_.m_dataManipulate_ == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["The field DataManipulate in this Trie is null"]);
}this.m_nextIndex_=this.m_trie_.m_dataManipulate_.getFoldingOffset$I(this.m_trie_.getValue$I(leadBlock + (nextLead & 31)));
if (this.m_nextIndex_ <= 0) {
if (currentValue != this.m_initialValue_) {
this.m_nextValue_=this.m_initialValue_;
this.m_nextBlock_=0;
this.m_nextBlockIndex_=0;
p$1.setResult$sun_text_normalizer_RangeValueIterator_Element$I$I$I.apply(this, [element, this.m_currentCodepoint_, this.m_nextCodepoint_, currentValue]);
this.m_currentCodepoint_=this.m_nextCodepoint_;
return;
}this.m_nextCodepoint_+=1024;
} else {
this.m_nextTrailIndexOffset_=0;
if (!p$1.checkTrailBlock$I$I.apply(this, [currentBlock, currentValue])) {
p$1.setResult$sun_text_normalizer_RangeValueIterator_Element$I$I$I.apply(this, [element, this.m_currentCodepoint_, this.m_nextCodepoint_, currentValue]);
this.m_currentCodepoint_=this.m_nextCodepoint_;
return;
}}++nextLead;
}
p$1.setResult$sun_text_normalizer_RangeValueIterator_Element$I$I$I.apply(this, [element, this.m_currentCodepoint_, 1114112, currentValue]);
}, p$1);

Clazz.newMeth(C$, 'checkBlockDetail$I',  function (currentValue) {
while (this.m_nextBlockIndex_ < 32){
this.m_nextValue_=this.extract$I(this.m_trie_.getValue$I(this.m_nextBlock_ + this.m_nextBlockIndex_));
if (this.m_nextValue_ != currentValue) {
return false;
}++this.m_nextBlockIndex_;
++this.m_nextCodepoint_;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'checkBlock$I$I',  function (currentBlock, currentValue) {
this.m_nextBlock_=(this.m_trie_.m_index_[this.m_nextIndex_]).$c() << 2;
if (this.m_nextBlock_ == currentBlock && (this.m_nextCodepoint_ - this.m_currentCodepoint_) >= 32 ) {
this.m_nextCodepoint_+=32;
} else if (this.m_nextBlock_ == 0) {
if (currentValue != this.m_initialValue_) {
this.m_nextValue_=this.m_initialValue_;
this.m_nextBlockIndex_=0;
return false;
}this.m_nextCodepoint_+=32;
} else {
if (!p$1.checkBlockDetail$I.apply(this, [currentValue])) {
return false;
}}return true;
}, p$1);

Clazz.newMeth(C$, 'checkTrailBlock$I$I',  function (currentBlock, currentValue) {
while (this.m_nextTrailIndexOffset_ < 32){
this.m_nextBlockIndex_=0;
if (!p$1.checkBlock$I$I.apply(this, [currentBlock, currentValue])) {
return false;
}++this.m_nextTrailIndexOffset_;
++this.m_nextIndex_;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'checkNullNextTrailIndex',  function () {
if (this.m_nextIndex_ <= 0) {
this.m_nextCodepoint_+=1023;
var nextLead=$I$(1).getLeadSurrogate$I(this.m_nextCodepoint_).$c();
var leadBlock=(this.m_trie_.m_index_[nextLead >> 5]).$c() << 2;
if (this.m_trie_.m_dataManipulate_ == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["The field DataManipulate in this Trie is null"]);
}this.m_nextIndex_=this.m_trie_.m_dataManipulate_.getFoldingOffset$I(this.m_trie_.getValue$I(leadBlock + (nextLead & 31)));
--this.m_nextIndex_;
this.m_nextBlockIndex_=32;
return true;
}return false;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
