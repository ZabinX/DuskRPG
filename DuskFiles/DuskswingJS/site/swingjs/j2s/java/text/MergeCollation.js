(function(){var P$=Clazz.newPackage("java.text"),p$1={},I$=[[0,'java.util.ArrayList','StringBuffer',['java.text.PatternEntry','.Parser']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MergeCollation");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.patterns=Clazz.new_($I$(1,1));
this.saveEntry=null;
this.lastEntry=null;
this.excess=Clazz.new_($I$(2,1));
this.statusArray=Clazz.array(Byte.TYPE, [8192]);
this.BITARRAYMASK=1;
this.BYTEPOWER=3;
this.BYTEMASK=7;
},1);

C$.$fields$=[['B',['BITARRAYMASK'],'I',['BYTEPOWER','BYTEMASK'],'O',['patterns','java.util.ArrayList','saveEntry','java.text.PatternEntry','+lastEntry','excess','StringBuffer','statusArray','byte[]']]]

Clazz.newMeth(C$, 'c$$S',  function (pattern) {
;C$.$init$.apply(this);
for (var i=0; i < this.statusArray.length; i++) this.statusArray[i]=(0|0);

this.setPattern$S(pattern);
}, 1);

Clazz.newMeth(C$, 'getPattern$',  function () {
return this.getPattern$Z(true);
});

Clazz.newMeth(C$, 'getPattern$Z',  function (withWhiteSpace) {
var result=Clazz.new_($I$(2,1));
var tmp=null;
var extList=null;
var i;
for (i=0; i < this.patterns.size$(); ++i) {
var entry=this.patterns.get$I(i);
if (entry.extension.length$() != 0) {
if (extList == null ) extList=Clazz.new_($I$(1,1));
extList.add$O(entry);
} else {
if (extList != null ) {
var last=p$1.findLastWithNoExtension$I.apply(this, [i - 1]);
for (var j=extList.size$() - 1; j >= 0; j--) {
tmp=extList.get$I(j);
tmp.addToBuffer$StringBuffer$Z$Z$java_text_PatternEntry(result, false, withWhiteSpace, last);
}
extList=null;
}entry.addToBuffer$StringBuffer$Z$Z$java_text_PatternEntry(result, false, withWhiteSpace, null);
}}
if (extList != null ) {
var last=p$1.findLastWithNoExtension$I.apply(this, [i - 1]);
for (var j=extList.size$() - 1; j >= 0; j--) {
tmp=extList.get$I(j);
tmp.addToBuffer$StringBuffer$Z$Z$java_text_PatternEntry(result, false, withWhiteSpace, last);
}
extList=null;
}return result.toString();
});

Clazz.newMeth(C$, 'findLastWithNoExtension$I',  function (i) {
for (--i; i >= 0; --i) {
var entry=this.patterns.get$I(i);
if (entry.extension.length$() == 0) {
return entry;
}}
return null;
}, p$1);

Clazz.newMeth(C$, 'emitPattern$',  function () {
return this.emitPattern$Z(true);
});

Clazz.newMeth(C$, 'emitPattern$Z',  function (withWhiteSpace) {
var result=Clazz.new_($I$(2,1));
for (var i=0; i < this.patterns.size$(); ++i) {
var entry=this.patterns.get$I(i);
if (entry != null ) {
entry.addToBuffer$StringBuffer$Z$Z$java_text_PatternEntry(result, true, withWhiteSpace, null);
}}
return result.toString();
});

Clazz.newMeth(C$, 'setPattern$S',  function (pattern) {
this.patterns.clear$();
this.addPattern$S(pattern);
});

Clazz.newMeth(C$, 'addPattern$S',  function (pattern) {
if (pattern == null ) return;
var parser=Clazz.new_($I$(3,1).c$$S,[pattern]);
var entry=parser.next$();
while (entry != null ){
p$1.fixEntry$java_text_PatternEntry.apply(this, [entry]);
entry=parser.next$();
}
});

Clazz.newMeth(C$, 'getCount$',  function () {
return this.patterns.size$();
});

Clazz.newMeth(C$, 'getItemAt$I',  function (index) {
return this.patterns.get$I(index);
});

Clazz.newMeth(C$, 'fixEntry$java_text_PatternEntry',  function (newEntry) {
if (this.lastEntry != null  && newEntry.chars.equals$O(this.lastEntry.chars)  && newEntry.extension.equals$O(this.lastEntry.extension) ) {
if (newEntry.strength != 3 && newEntry.strength != -2 ) {
throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,["The entries " + this.lastEntry + " and " + newEntry + " are adjacent in the rules, but have conflicting " + "strengths: A character can't be unequal to itself." , -1]);
} else {
return;
}}var changeLastEntry=true;
if (newEntry.strength != -2) {
var oldIndex=-1;
if ((newEntry.chars.length$() == 1)) {
var c=newEntry.chars.charAt$I(0);
var statusIndex=c.$c() >> 3;
var bitClump=this.statusArray[statusIndex];
var setBit=($b$[0] = (1 << (c.$c() & 7)), $b$[0]);
if (bitClump != 0 && (bitClump & setBit) != 0 ) {
oldIndex=this.patterns.lastIndexOf$O(newEntry);
} else {
this.statusArray[statusIndex]=((bitClump | setBit)|0);
}} else {
oldIndex=this.patterns.lastIndexOf$O(newEntry);
}if (oldIndex != -1) {
this.patterns.remove$I(oldIndex);
}this.excess.setLength$I(0);
var lastIndex=p$1.findLastEntry$java_text_PatternEntry$StringBuffer.apply(this, [this.lastEntry, this.excess]);
if (this.excess.length$() != 0) {
newEntry.extension=this.excess + newEntry.extension;
if (lastIndex != this.patterns.size$()) {
this.lastEntry=this.saveEntry;
changeLastEntry=false;
}}if (lastIndex == this.patterns.size$()) {
this.patterns.add$O(newEntry);
this.saveEntry=newEntry;
} else {
this.patterns.add$I$O(lastIndex, newEntry);
}}if (changeLastEntry) {
this.lastEntry=newEntry;
}}, p$1);

Clazz.newMeth(C$, 'findLastEntry$java_text_PatternEntry$StringBuffer',  function (entry, excessChars) {
if (entry == null ) return 0;
if (entry.strength != -2) {
var oldIndex=-1;
if ((entry.chars.length$() == 1)) {
var index=(entry.chars.charCodeAt$I(0)) >> 3;
if ((this.statusArray[index] & (1 << ((entry.chars.charCodeAt$I(0)) & 7))) != 0) {
oldIndex=this.patterns.lastIndexOf$O(entry);
}} else {
oldIndex=this.patterns.lastIndexOf$O(entry);
}if ((oldIndex == -1)) throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,["couldn't find last entry: " + entry, oldIndex]);
return oldIndex + 1;
} else {
var i;
for (i=this.patterns.size$() - 1; i >= 0; --i) {
var e=this.patterns.get$I(i);
if (e.chars.regionMatches$I$S$I$I(0, entry.chars, 0, e.chars.length$())) {
excessChars.append$S(entry.chars.substring$I$I(e.chars.length$(), entry.chars.length$()));
break;
}}
if (i == -1) throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,["couldn't find: " + entry, i]);
return i + 1;
}}, p$1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
