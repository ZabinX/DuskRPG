(function(){var P$=Clazz.newPackage("sun.text.normalizer"),p$1={},I$=[[0,'sun.text.normalizer.UCharacter','sun.text.normalizer.UnicodeSet','sun.text.normalizer.VersionInfo','java.util.TreeSet','sun.text.normalizer.UTF16','sun.text.normalizer.Utility','sun.text.normalizer.UCharacterProperty','java.text.ParsePosition','StringBuffer','sun.text.normalizer.RuleCharacterIterator',['sun.text.normalizer.UnicodeSet','.VersionFilter']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnicodeSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'sun.text.normalizer.UnicodeMatcher');
C$.$classes$=[['Filter',10],['VersionFilter',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.strings=Clazz.new_($I$(4,1));
this.pat=null;
},1);

C$.$fields$=[['I',['len'],'S',['pat'],'O',['list','int[]','+rangeList','+buffer','strings','java.util.TreeSet']]
,['O',['INCLUSIONS','sun.text.normalizer.UnicodeSet[]','NO_VERSION','sun.text.normalizer.VersionInfo']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.list=Clazz.array(Integer.TYPE, [17]);
this.list[this.len++]=1114112;
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (start, end) {
C$.c$.apply(this, []);
this.complement$I$I(start, end);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (pattern) {
C$.c$.apply(this, []);
this.applyPattern$S$java_text_ParsePosition$sun_text_normalizer_SymbolTable$I(pattern, null, null, 1);
}, 1);

Clazz.newMeth(C$, 'set$sun_text_normalizer_UnicodeSet',  function (other) {
this.list=other.list.clone$();
this.len=other.len;
this.pat=other.pat;
this.strings=other.strings.clone$();
return this;
});

Clazz.newMeth(C$, 'applyPattern$S',  function (pattern) {
return this.applyPattern$S$java_text_ParsePosition$sun_text_normalizer_SymbolTable$I(pattern, null, null, 1);
});

Clazz.newMeth(C$, '_appendToPat$StringBuffer$S$Z',  function (buf, s, escapeUnprintable) {
for (var i=0; i < s.length$(); i+=$I$(5).getCharCount$I(i)) {
C$._appendToPat$StringBuffer$I$Z(buf, $I$(5).charAt$S$I(s, i), escapeUnprintable);
}
}, 1);

Clazz.newMeth(C$, '_appendToPat$StringBuffer$I$Z',  function (buf, c, escapeUnprintable) {
if (escapeUnprintable && $I$(6).isUnprintable$I(c) ) {
if ($I$(6).escapeUnprintable$StringBuffer$I(buf, c)) {
return;
}}switch (c) {
case 91:
case 93:
case 45:
case 94:
case 38:
case 92:
case 123:
case 125:
case 36:
case 58:
buf.append$C("\\");
break;
default:
if ($I$(7).isRuleWhiteSpace$I(c)) {
buf.append$C("\\");
}break;
}
$I$(5).append$StringBuffer$I(buf, c);
}, 1);

Clazz.newMeth(C$, '_toPattern$StringBuffer$Z',  function (result, escapeUnprintable) {
if (this.pat != null ) {
var i;
var backslashCount=0;
for (i=0; i < this.pat.length$(); ) {
var c=$I$(5).charAt$S$I(this.pat, i);
i+=$I$(5).getCharCount$I(c);
if (escapeUnprintable && $I$(6).isUnprintable$I(c) ) {
if ((backslashCount % 2) == 1) {
result.setLength$I(result.length$() - 1);
}$I$(6).escapeUnprintable$StringBuffer$I(result, c);
backslashCount=0;
} else {
$I$(5).append$StringBuffer$I(result, c);
if (c == 92 ) {
++backslashCount;
} else {
backslashCount=0;
}}}
return result;
}return this._generatePattern$StringBuffer$Z$Z(result, escapeUnprintable, true);
}, p$1);

Clazz.newMeth(C$, '_generatePattern$StringBuffer$Z$Z',  function (result, escapeUnprintable, includeStrings) {
result.append$C("[");
var count=this.getRangeCount$();
if (count > 1 && this.getRangeStart$I(0) == 0  && this.getRangeEnd$I(count - 1) == 1114111 ) {
result.append$C("^");
for (var i=1; i < count; ++i) {
var start=this.getRangeEnd$I(i - 1) + 1;
var end=this.getRangeStart$I(i) - 1;
C$._appendToPat$StringBuffer$I$Z(result, start, escapeUnprintable);
if (start != end) {
if ((start + 1) != end) {
result.append$C("-");
}C$._appendToPat$StringBuffer$I$Z(result, end, escapeUnprintable);
}}
} else {
for (var i=0; i < count; ++i) {
var start=this.getRangeStart$I(i);
var end=this.getRangeEnd$I(i);
C$._appendToPat$StringBuffer$I$Z(result, start, escapeUnprintable);
if (start != end) {
if ((start + 1) != end) {
result.append$C("-");
}C$._appendToPat$StringBuffer$I$Z(result, end, escapeUnprintable);
}}
}if (includeStrings && this.strings.size$() > 0 ) {
var it=this.strings.iterator$();
while (it.hasNext$()){
result.append$C("{");
C$._appendToPat$StringBuffer$S$Z(result, it.next$(), escapeUnprintable);
result.append$C("}");
}
}return result.append$C("]");
});

Clazz.newMeth(C$, 'add_unchecked$I$I',  function (start, end) {
if (start < 0 || start > 1114111 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid code point U+" + $I$(6).hex$I$I(start, 6)]);
}if (end < 0 || end > 1114111 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid code point U+" + $I$(6).hex$I$I(end, 6)]);
}if (start < end) {
p$1.add$IA$I$I.apply(this, [p$1.range$I$I.apply(this, [start, end]), 2, 0]);
} else if (start == end) {
this.add$I(start);
}return this;
}, p$1);

Clazz.newMeth(C$, 'add$I',  function (c) {
return p$1.add_unchecked$I.apply(this, [c]);
});

Clazz.newMeth(C$, 'add_unchecked$I',  function (c) {
if (c < 0 || c > 1114111 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid code point U+" + $I$(6).hex$I$I(c, 6)]);
}var i=p$1.findCodePoint$I.apply(this, [c]);
if ((i & 1) != 0) return this;
if (c == this.list[i] - 1) {
this.list[i]=c;
if (c == 1114111) {
p$1.ensureCapacity$I.apply(this, [this.len + 1]);
this.list[this.len++]=1114112;
}if (i > 0 && c == this.list[i - 1] ) {
System.arraycopy$O$I$O$I$I(this.list, i + 1, this.list, i - 1, this.len - i - 1 );
this.len-=2;
}} else if (i > 0 && c == this.list[i - 1] ) {
++this.list[i - 1];
} else {
if (this.len + 2 > this.list.length) {
var temp=Clazz.array(Integer.TYPE, [this.len + 2 + 16 ]);
if (i != 0) System.arraycopy$O$I$O$I$I(this.list, 0, temp, 0, i);
System.arraycopy$O$I$O$I$I(this.list, i, temp, i + 2, this.len - i);
this.list=temp;
} else {
System.arraycopy$O$I$O$I$I(this.list, i, this.list, i + 2, this.len - i);
}this.list[i]=c;
this.list[i + 1]=c + 1;
this.len+=2;
}this.pat=null;
return this;
}, p$1);

Clazz.newMeth(C$, 'add$S',  function (s) {
var cp=C$.getSingleCP$S(s);
if (cp < 0) {
this.strings.add$O(s);
this.pat=null;
} else {
p$1.add_unchecked$I$I.apply(this, [cp, cp]);
}return this;
});

Clazz.newMeth(C$, 'getSingleCP$S',  function (s) {
if (s.length$() < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can\'t use zero-length strings in UnicodeSet"]);
}if (s.length$() > 2) return -1;
if (s.length$() == 1) return s.charAt$I(0).$c();
var cp=$I$(5).charAt$S$I(s, 0);
if (cp > 65535) {
return cp;
}return -1;
}, 1);

Clazz.newMeth(C$, 'complement$I$I',  function (start, end) {
if (start < 0 || start > 1114111 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid code point U+" + $I$(6).hex$I$I(start, 6)]);
}if (end < 0 || end > 1114111 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid code point U+" + $I$(6).hex$I$I(end, 6)]);
}if (start <= end) {
p$1.xor$IA$I$I.apply(this, [p$1.range$I$I.apply(this, [start, end]), 2, 0]);
}this.pat=null;
return this;
});

Clazz.newMeth(C$, 'complement$',  function () {
if (this.list[0] == 0) {
System.arraycopy$O$I$O$I$I(this.list, 1, this.list, 0, this.len - 1);
--this.len;
} else {
p$1.ensureCapacity$I.apply(this, [this.len + 1]);
System.arraycopy$O$I$O$I$I(this.list, 0, this.list, 1, this.len);
this.list[0]=0;
++this.len;
}this.pat=null;
return this;
});

Clazz.newMeth(C$, 'contains$I',  function (c) {
if (c < 0 || c > 1114111 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid code point U+" + $I$(6).hex$I$I(c, 6)]);
}var i=p$1.findCodePoint$I.apply(this, [c]);
return ((i & 1) != 0);
});

Clazz.newMeth(C$, 'findCodePoint$I',  function (c) {
if (c < this.list[0]) return 0;
if (this.len >= 2 && c >= this.list[this.len - 2] ) return this.len - 1;
var lo=0;
var hi=this.len - 1;
for (; ; ) {
var i=(lo + hi) >>> 1;
if (i == lo) return hi;
if (c < this.list[i]) {
hi=i;
} else {
lo=i;
}}
}, p$1);

Clazz.newMeth(C$, 'addAll$sun_text_normalizer_UnicodeSet',  function (c) {
p$1.add$IA$I$I.apply(this, [c.list, c.len, 0]);
this.strings.addAll$java_util_Collection(c.strings);
return this;
});

Clazz.newMeth(C$, 'retainAll$sun_text_normalizer_UnicodeSet',  function (c) {
p$1.retain$IA$I$I.apply(this, [c.list, c.len, 0]);
this.strings.retainAll$java_util_Collection(c.strings);
return this;
});

Clazz.newMeth(C$, 'removeAll$sun_text_normalizer_UnicodeSet',  function (c) {
p$1.retain$IA$I$I.apply(this, [c.list, c.len, 2]);
this.strings.removeAll$java_util_Collection(c.strings);
return this;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.list[0]=1114112;
this.len=1;
this.pat=null;
this.strings.clear$();
return this;
});

Clazz.newMeth(C$, 'getRangeCount$',  function () {
return (this.len/2|0);
});

Clazz.newMeth(C$, 'getRangeStart$I',  function (index) {
return this.list[index * 2];
});

Clazz.newMeth(C$, 'getRangeEnd$I',  function (index) {
return (this.list[index * 2 + 1] - 1);
});

Clazz.newMeth(C$, 'applyPattern$S$java_text_ParsePosition$sun_text_normalizer_SymbolTable$I',  function (pattern, pos, symbols, options) {
var parsePositionWasNull=pos == null ;
if (parsePositionWasNull) {
pos=Clazz.new_($I$(8,1).c$$I,[0]);
}var rebuiltPat=Clazz.new_($I$(9,1));
var chars=Clazz.new_($I$(10,1).c$$S$sun_text_normalizer_SymbolTable$java_text_ParsePosition,[pattern, symbols, pos]);
this.applyPattern$sun_text_normalizer_RuleCharacterIterator$sun_text_normalizer_SymbolTable$StringBuffer$I(chars, symbols, rebuiltPat, options);
if (chars.inVariable$()) {
C$.syntaxError$sun_text_normalizer_RuleCharacterIterator$S(chars, "Extra chars in variable value");
}this.pat=rebuiltPat.toString();
if (parsePositionWasNull) {
var i=pos.getIndex$();
if ((options & 1) != 0) {
i=$I$(6).skipWhitespace$S$I(pattern, i);
}if (i != pattern.length$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Parse of \"" + pattern + "\" failed at " + i ]);
}}return this;
});

Clazz.newMeth(C$, 'applyPattern$sun_text_normalizer_RuleCharacterIterator$sun_text_normalizer_SymbolTable$StringBuffer$I',  function (chars, symbols, rebuiltPat, options) {
var opts=3;
if ((options & 1) != 0) {
opts|=4;
}var patBuf=Clazz.new_($I$(9,1));
var buf=null;
var usePat=false;
var scratch=null;
var backup=null;
var lastItem=0;
var lastChar=0;
var mode=0;
var op=String.fromCharCode(0);
var invert=false;
this.clear$();
while (mode != 2 && !chars.atEnd$() ){
if (false) {
if (!((lastItem == 0 && op.$c() == 0  ) || (lastItem == 1 && (op.$c() == 0  || op == "-" ) ) || (lastItem == 2 && (op.$c() == 0  || op == "-"  || op == "&" ) )  )) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}}var c=0;
var literal=false;
var nested=null;
var setMode=0;
if (C$.resemblesPropertyPattern$sun_text_normalizer_RuleCharacterIterator$I(chars, opts)) {
setMode=2;
} else {
backup=chars.getPos$O(backup);
c=chars.next$I(opts);
literal=chars.isEscaped$();
if (c == 91  && !literal ) {
if (mode == 1) {
chars.setPos$O(backup);
setMode=1;
} else {
mode=1;
patBuf.append$C("[");
backup=chars.getPos$O(backup);
c=chars.next$I(opts);
literal=chars.isEscaped$();
if (c == 94  && !literal ) {
invert=true;
patBuf.append$C("^");
backup=chars.getPos$O(backup);
c=chars.next$I(opts);
literal=chars.isEscaped$();
}if (c == 45 ) {
literal=true;
} else {
chars.setPos$O(backup);
continue;
}}} else if (symbols != null ) {
var m=symbols.lookupMatcher$I(c);
if (m != null ) {
try {
nested=m;
setMode=3;
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
C$.syntaxError$sun_text_normalizer_RuleCharacterIterator$S(chars, "Syntax error");
} else {
throw e;
}
}
}}}if (setMode != 0) {
if (lastItem == 1) {
if (op.$c() != 0 ) {
C$.syntaxError$sun_text_normalizer_RuleCharacterIterator$S(chars, "Char expected after operator");
}p$1.add_unchecked$I$I.apply(this, [lastChar, lastChar]);
C$._appendToPat$StringBuffer$I$Z(patBuf, lastChar, false);
lastItem=op=String.fromCharCode(0).$c();
}if (op == "-" || op == "&" ) {
patBuf.append$C(op);
}if (nested == null ) {
if (scratch == null ) scratch=Clazz.new_(C$);
nested=scratch;
}switch (setMode) {
case 1:
nested.applyPattern$sun_text_normalizer_RuleCharacterIterator$sun_text_normalizer_SymbolTable$StringBuffer$I(chars, symbols, patBuf, options);
break;
case 2:
chars.skipIgnored$I(opts);
p$1.applyPropertyPattern$sun_text_normalizer_RuleCharacterIterator$StringBuffer$sun_text_normalizer_SymbolTable.apply(nested, [chars, patBuf, symbols]);
break;
case 3:
p$1._toPattern$StringBuffer$Z.apply(nested, [patBuf, false]);
break;
}
usePat=true;
if (mode == 0) {
this.set$sun_text_normalizer_UnicodeSet(nested);
mode=2;
break;
}switch (op.$c()) {
case 45:
this.removeAll$sun_text_normalizer_UnicodeSet(nested);
break;
case 38:
this.retainAll$sun_text_normalizer_UnicodeSet(nested);
break;
case 0:
this.addAll$sun_text_normalizer_UnicodeSet(nested);
break;
}
op=String.fromCharCode(0);
lastItem=2;
continue;
}if (mode == 0) {
C$.syntaxError$sun_text_normalizer_RuleCharacterIterator$S(chars, "Missing \'[\'");
}if (!literal) {
switch (c) {
case 93:
if (lastItem == 1) {
p$1.add_unchecked$I$I.apply(this, [lastChar, lastChar]);
C$._appendToPat$StringBuffer$I$Z(patBuf, lastChar, false);
}if (op == "-") {
p$1.add_unchecked$I$I.apply(this, [op.$c(), op.$c()]);
patBuf.append$C(op);
} else if (op == "&") {
C$.syntaxError$sun_text_normalizer_RuleCharacterIterator$S(chars, "Trailing \'&\'");
}patBuf.append$C("]");
mode=2;
continue;
case 45:
if (op.$c() == 0 ) {
if (lastItem != 0) {
op=String.fromCharCode(c);
continue;
} else {
p$1.add_unchecked$I$I.apply(this, [c, c]);
c=chars.next$I(opts);
literal=chars.isEscaped$();
if (c == 93  && !literal ) {
patBuf.append$S("-]");
mode=2;
continue;
}}}C$.syntaxError$sun_text_normalizer_RuleCharacterIterator$S(chars, "\'-\' not after char or set");
break;
case 38:
if (lastItem == 2 && op.$c() == 0  ) {
op=String.fromCharCode(c);
continue;
}C$.syntaxError$sun_text_normalizer_RuleCharacterIterator$S(chars, "\'&\' not after set");
break;
case 94:
C$.syntaxError$sun_text_normalizer_RuleCharacterIterator$S(chars, "\'^\' not after \'[\'");
break;
case 123:
if (op.$c() != 0 ) {
C$.syntaxError$sun_text_normalizer_RuleCharacterIterator$S(chars, "Missing operand after operator");
}if (lastItem == 1) {
p$1.add_unchecked$I$I.apply(this, [lastChar, lastChar]);
C$._appendToPat$StringBuffer$I$Z(patBuf, lastChar, false);
}lastItem=0;
if (buf == null ) {
buf=Clazz.new_($I$(9,1));
} else {
buf.setLength$I(0);
}var ok=false;
while (!chars.atEnd$()){
c=chars.next$I(opts);
literal=chars.isEscaped$();
if (c == 125  && !literal ) {
ok=true;
break;
}$I$(5).append$StringBuffer$I(buf, c);
}
if (buf.length$() < 1 || !ok ) {
C$.syntaxError$sun_text_normalizer_RuleCharacterIterator$S(chars, "Invalid multicharacter string");
}this.add$S(buf.toString());
patBuf.append$C("{");
C$._appendToPat$StringBuffer$S$Z(patBuf, buf.toString(), false);
patBuf.append$C("}");
continue;
case 36:
backup=chars.getPos$O(backup);
c=chars.next$I(opts);
literal=chars.isEscaped$();
var anchor=(c == 93  && !literal );
if (symbols == null  && !anchor ) {
c="$".$c();
chars.setPos$O(backup);
break;
}if (anchor && op.$c() == 0  ) {
if (lastItem == 1) {
p$1.add_unchecked$I$I.apply(this, [lastChar, lastChar]);
C$._appendToPat$StringBuffer$I$Z(patBuf, lastChar, false);
}p$1.add_unchecked$I.apply(this, ["\uffff".$c()]);
usePat=true;
patBuf.append$C("$").append$C("]");
mode=2;
continue;
}C$.syntaxError$sun_text_normalizer_RuleCharacterIterator$S(chars, "Unquoted \'$\'");
break;
default:
break;
}
}switch (lastItem) {
case 0:
lastItem=1;
lastChar=c;
break;
case 1:
if (op == "-") {
if (lastChar >= c) {
C$.syntaxError$sun_text_normalizer_RuleCharacterIterator$S(chars, "Invalid range");
}p$1.add_unchecked$I$I.apply(this, [lastChar, c]);
C$._appendToPat$StringBuffer$I$Z(patBuf, lastChar, false);
patBuf.append$C(op);
C$._appendToPat$StringBuffer$I$Z(patBuf, c, false);
lastItem=op=String.fromCharCode(0).$c();
} else {
p$1.add_unchecked$I$I.apply(this, [lastChar, lastChar]);
C$._appendToPat$StringBuffer$I$Z(patBuf, lastChar, false);
lastChar=c;
}break;
case 2:
if (op.$c() != 0 ) {
C$.syntaxError$sun_text_normalizer_RuleCharacterIterator$S(chars, "Set expected after operator");
}lastChar=c;
lastItem=1;
break;
}
}
if (mode != 2) {
C$.syntaxError$sun_text_normalizer_RuleCharacterIterator$S(chars, "Missing \']\'");
}chars.skipIgnored$I(opts);
if (invert) {
this.complement$();
}if (usePat) {
rebuiltPat.append$S(patBuf.toString());
} else {
this._generatePattern$StringBuffer$Z$Z(rebuiltPat, false, true);
}});

Clazz.newMeth(C$, 'syntaxError$sun_text_normalizer_RuleCharacterIterator$S',  function (chars, msg) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Error: " + msg + " at \"" + $I$(6,"escape$S",[chars.toString()]) + '\"' ]);
}, 1);

Clazz.newMeth(C$, 'ensureCapacity$I',  function (newLen) {
if (newLen <= this.list.length) return;
var temp=Clazz.array(Integer.TYPE, [newLen + 16]);
System.arraycopy$O$I$O$I$I(this.list, 0, temp, 0, this.len);
this.list=temp;
}, p$1);

Clazz.newMeth(C$, 'ensureBufferCapacity$I',  function (newLen) {
if (this.buffer != null  && newLen <= this.buffer.length ) return;
this.buffer=Clazz.array(Integer.TYPE, [newLen + 16]);
}, p$1);

Clazz.newMeth(C$, 'range$I$I',  function (start, end) {
if (this.rangeList == null ) {
this.rangeList=Clazz.array(Integer.TYPE, -1, [start, end + 1, 1114112]);
} else {
this.rangeList[0]=start;
this.rangeList[1]=end + 1;
}return this.rangeList;
}, p$1);

Clazz.newMeth(C$, 'xor$IA$I$I',  function (other, otherLen, polarity) {
p$1.ensureBufferCapacity$I.apply(this, [this.len + otherLen]);
var i=0;
var j=0;
var k=0;
var a=this.list[i++];
var b;
if (polarity == 1 || polarity == 2 ) {
b=0;
if (other[j] == 0) {
++j;
b=other[j];
}} else {
b=other[j++];
}while (true){
if (a < b) {
this.buffer[k++]=a;
a=this.list[i++];
} else if (b < a) {
this.buffer[k++]=b;
b=other[j++];
} else if (a != 1114112) {
a=this.list[i++];
b=other[j++];
} else {
this.buffer[k++]=1114112;
this.len=k;
break;
}}
var temp=this.list;
this.list=this.buffer;
this.buffer=temp;
this.pat=null;
return this;
}, p$1);

Clazz.newMeth(C$, 'add$IA$I$I',  function (other, otherLen, polarity) {
p$1.ensureBufferCapacity$I.apply(this, [this.len + otherLen]);
var i=0;
var j=0;
var k=0;
var a=this.list[i++];
var b=other[j++];
 main : while (true){
switch (polarity) {
case 0:
if (a < b) {
if (k > 0 && a <= this.buffer[k - 1] ) {
a=C$.max$I$I(this.list[i], this.buffer[--k]);
} else {
this.buffer[k++]=a;
a=this.list[i];
}++i;
polarity^=1;
} else if (b < a) {
if (k > 0 && b <= this.buffer[k - 1] ) {
b=C$.max$I$I(other[j], this.buffer[--k]);
} else {
this.buffer[k++]=b;
b=other[j];
}++j;
polarity^=2;
} else {
if (a == 1114112) break main;
if (k > 0 && a <= this.buffer[k - 1] ) {
a=C$.max$I$I(this.list[i], this.buffer[--k]);
} else {
this.buffer[k++]=a;
a=this.list[i];
}++i;
polarity^=1;
b=other[j++];
polarity^=2;
}break;
case 3:
if (b <= a) {
if (a == 1114112) break main;
this.buffer[k++]=a;
} else {
if (b == 1114112) break main;
this.buffer[k++]=b;
}a=this.list[i++];
polarity^=1;
b=other[j++];
polarity^=2;
break;
case 1:
if (a < b) {
this.buffer[k++]=a;
a=this.list[i++];
polarity^=1;
} else if (b < a) {
b=other[j++];
polarity^=2;
} else {
if (a == 1114112) break main;
a=this.list[i++];
polarity^=1;
b=other[j++];
polarity^=2;
}break;
case 2:
if (b < a) {
this.buffer[k++]=b;
b=other[j++];
polarity^=2;
} else if (a < b) {
a=this.list[i++];
polarity^=1;
} else {
if (a == 1114112) break main;
a=this.list[i++];
polarity^=1;
b=other[j++];
polarity^=2;
}break;
}
}
this.buffer[k++]=1114112;
this.len=k;
var temp=this.list;
this.list=this.buffer;
this.buffer=temp;
this.pat=null;
return this;
}, p$1);

Clazz.newMeth(C$, 'retain$IA$I$I',  function (other, otherLen, polarity) {
p$1.ensureBufferCapacity$I.apply(this, [this.len + otherLen]);
var i=0;
var j=0;
var k=0;
var a=this.list[i++];
var b=other[j++];
 main : while (true){
switch (polarity) {
case 0:
if (a < b) {
a=this.list[i++];
polarity^=1;
} else if (b < a) {
b=other[j++];
polarity^=2;
} else {
if (a == 1114112) break main;
this.buffer[k++]=a;
a=this.list[i++];
polarity^=1;
b=other[j++];
polarity^=2;
}break;
case 3:
if (a < b) {
this.buffer[k++]=a;
a=this.list[i++];
polarity^=1;
} else if (b < a) {
this.buffer[k++]=b;
b=other[j++];
polarity^=2;
} else {
if (a == 1114112) break main;
this.buffer[k++]=a;
a=this.list[i++];
polarity^=1;
b=other[j++];
polarity^=2;
}break;
case 1:
if (a < b) {
a=this.list[i++];
polarity^=1;
} else if (b < a) {
this.buffer[k++]=b;
b=other[j++];
polarity^=2;
} else {
if (a == 1114112) break main;
a=this.list[i++];
polarity^=1;
b=other[j++];
polarity^=2;
}break;
case 2:
if (b < a) {
b=other[j++];
polarity^=2;
} else if (a < b) {
this.buffer[k++]=a;
a=this.list[i++];
polarity^=1;
} else {
if (a == 1114112) break main;
a=this.list[i++];
polarity^=1;
b=other[j++];
polarity^=2;
}break;
}
}
this.buffer[k++]=1114112;
this.len=k;
var temp=this.list;
this.list=this.buffer;
this.buffer=temp;
this.pat=null;
return this;
}, p$1);

Clazz.newMeth(C$, 'max$I$I',  function (a, b) {
return (a > b) ? a : b;
}, 1);

Clazz.newMeth(C$, 'getInclusions$I',  function (src) {
if (C$.INCLUSIONS == null ) {
C$.INCLUSIONS=Clazz.array(C$, [9]);
}if (C$.INCLUSIONS[src] == null ) {
var incl=Clazz.new_(C$);
switch (src) {
case 2:
$I$(7).getInstance$().upropsvec_addPropertyStarts$sun_text_normalizer_UnicodeSet(incl);
break;
default:
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["UnicodeSet.getInclusions(unknown src " + src + ")" ]);
}
C$.INCLUSIONS[src]=incl;
}return C$.INCLUSIONS[src];
}, 1);

Clazz.newMeth(C$, 'applyFilter$sun_text_normalizer_UnicodeSet_Filter$I',  function (filter, src) {
this.clear$();
var startHasProperty=-1;
var inclusions=C$.getInclusions$I(src);
var limitRange=inclusions.getRangeCount$();
for (var j=0; j < limitRange; ++j) {
var start=inclusions.getRangeStart$I(j);
var end=inclusions.getRangeEnd$I(j);
for (var ch=start; ch <= end; ++ch) {
if (filter.contains$I(ch)) {
if (startHasProperty < 0) {
startHasProperty=ch;
}} else if (startHasProperty >= 0) {
p$1.add_unchecked$I$I.apply(this, [startHasProperty, ch - 1]);
startHasProperty=-1;
}}
}
if (startHasProperty >= 0) {
p$1.add_unchecked$I$I.apply(this, [startHasProperty, 1114111]);
}return this;
}, p$1);

Clazz.newMeth(C$, 'mungeCharName$S',  function (source) {
var buf=Clazz.new_($I$(9,1));
for (var i=0; i < source.length$(); ) {
var ch=$I$(5).charAt$S$I(source, i);
i+=$I$(5).getCharCount$I(ch);
if ($I$(7).isRuleWhiteSpace$I(ch)) {
if (buf.length$() == 0 || buf.charAt$I(buf.length$() - 1) == " " ) {
continue;
}ch=" ".$c();
}$I$(5).append$StringBuffer$I(buf, ch);
}
if (buf.length$() != 0 && buf.charAt$I(buf.length$() - 1) == " " ) {
buf.setLength$I(buf.length$() - 1);
}return buf.toString();
}, 1);

Clazz.newMeth(C$, 'applyPropertyAlias$S$S$sun_text_normalizer_SymbolTable',  function (propertyAlias, valueAlias, symbols) {
if (valueAlias.length$() > 0) {
if (propertyAlias.equals$O("Age")) {
var version=$I$(3,"getInstance$S",[C$.mungeCharName$S(valueAlias)]);
p$1.applyFilter$sun_text_normalizer_UnicodeSet_Filter$I.apply(this, [Clazz.new_($I$(11,1).c$$sun_text_normalizer_VersionInfo,[version]), 2]);
return this;
}}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported property: " + propertyAlias]);
});

Clazz.newMeth(C$, 'resemblesPropertyPattern$sun_text_normalizer_RuleCharacterIterator$I',  function (chars, iterOpts) {
var result=false;
iterOpts&=~2;
var pos=chars.getPos$O(null);
var c=chars.next$I(iterOpts);
if (c == 91  || c == 92  ) {
var d=chars.next$I(iterOpts & ~4);
result=(c == 91 ) ? (d == 58 ) : (d == 78  || d == 112   || d == 80  );
}chars.setPos$O(pos);
return result;
}, 1);

Clazz.newMeth(C$, 'applyPropertyPattern$S$java_text_ParsePosition$sun_text_normalizer_SymbolTable',  function (pattern, ppos, symbols) {
var pos=ppos.getIndex$();
if ((pos + 5) > pattern.length$()) {
return null;
}var posix=false;
var isName=false;
var invert=false;
if (pattern.regionMatches$I$S$I$I(pos, "[:", 0, 2)) {
posix=true;
pos=$I$(6).skipWhitespace$S$I(pattern, pos + 2);
if (pos < pattern.length$() && pattern.charAt$I(pos) == "^" ) {
++pos;
invert=true;
}} else if (pattern.regionMatches$Z$I$S$I$I(true, pos, "\\p", 0, 2) || pattern.regionMatches$I$S$I$I(pos, "\\N", 0, 2) ) {
var c=pattern.charAt$I(pos + 1);
invert=(c == "P");
isName=(c == "N");
pos=$I$(6).skipWhitespace$S$I(pattern, pos + 2);
if (pos == pattern.length$() || pattern.charAt$I(pos++) != "{" ) {
return null;
}} else {
return null;
}var close=pattern.indexOf$S$I(posix ? ":]" : "}", pos);
if (close < 0) {
return null;
}var equals=pattern.indexOf$I$I("=", pos);
var propName;
var valueName;
if (equals >= 0 && equals < close  && !isName ) {
propName=pattern.substring$I$I(pos, equals);
valueName=pattern.substring$I$I(equals + 1, close);
} else {
propName=pattern.substring$I$I(pos, close);
valueName="";
if (isName) {
valueName=propName;
propName="na";
}}this.applyPropertyAlias$S$S$sun_text_normalizer_SymbolTable(propName, valueName, symbols);
if (invert) {
this.complement$();
}ppos.setIndex$I(close + (posix ? 2 : 1));
return this;
}, p$1);

Clazz.newMeth(C$, 'applyPropertyPattern$sun_text_normalizer_RuleCharacterIterator$StringBuffer$sun_text_normalizer_SymbolTable',  function (chars, rebuiltPat, symbols) {
var patStr=chars.lookahead$();
var pos=Clazz.new_($I$(8,1).c$$I,[0]);
p$1.applyPropertyPattern$S$java_text_ParsePosition$sun_text_normalizer_SymbolTable.apply(this, [patStr, pos, symbols]);
if (pos.getIndex$() == 0) {
C$.syntaxError$sun_text_normalizer_RuleCharacterIterator$S(chars, "Invalid property pattern");
}chars.jumpahead$I(pos.getIndex$());
rebuiltPat.append$S(patStr.substring$I$I(0, pos.getIndex$()));
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.INCLUSIONS=null;
C$.NO_VERSION=$I$(3).getInstance$I$I$I$I(0, 0, 0, 0);
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.UnicodeSet, "Filter", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.UnicodeSet, "VersionFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.text.normalizer.UnicodeSet','sun.text.normalizer.UnicodeSet.Filter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['version','sun.text.normalizer.VersionInfo']]]

Clazz.newMeth(C$, 'c$$sun_text_normalizer_VersionInfo',  function (version) {
;C$.$init$.apply(this);
this.version=version;
}, 1);

Clazz.newMeth(C$, 'contains$I',  function (ch) {
var v=$I$(1).getAge$I(ch);
return v !== $I$(2).NO_VERSION  && v.compareTo$sun_text_normalizer_VersionInfo(this.version) <= 0 ;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
