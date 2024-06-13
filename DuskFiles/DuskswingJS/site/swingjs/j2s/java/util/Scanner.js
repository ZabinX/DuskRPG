(function(){var P$=java.util,p$1={},I$=[[0,'java.util.regex.Pattern','sun.misc.LRUCache','java.nio.CharBuffer','java.util.Locale',['java.util.Locale','.Category'],'java.util.Objects','java.io.InputStreamReader','java.nio.charset.Charset','java.io.FileInputStream','java.nio.channels.Channels','java.nio.file.Files','java.nio.file.OpenOption','java.io.StringReader','java.text.NumberFormat','java.text.DecimalFormatSymbols','StringBuilder','java.math.BigInteger','java.math.BigDecimal']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Scanner", null, null, ['java.util.Iterator', 'java.io.Closeable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sourceClosed=false;
this.needInput=false;
this.skipped=false;
this.savedScannerPosition=-1;
this.typeCache=null;
this.matchValid=false;
this.closed=false;
this.radix=10;
this.defaultRadix=10;
this.locale=null;
this.patternCache=((P$.Scanner$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Scanner$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('sun.misc.LRUCache'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, ['create$S','create$O'],  function (s) {
return $I$(1).compile$S(s);
});

Clazz.newMeth(C$, ['hasName$java_util_regex_Pattern$S','hasName$O$O'],  function (p, s) {
return p.pattern$().equals$O(s);
});
})()
), Clazz.new_($I$(2,1).c$$I,[this, null, 7],P$.Scanner$1));
this.groupSeparator="\\,";
this.decimalSeparator="\\.";
this.nanString="NaN";
this.infinityString="Infinity";
this.positivePrefix="";
this.negativePrefix="\\-";
this.positiveSuffix="";
this.negativeSuffix="";
this.digits="0123456789abcdefghijklmnopqrstuvwxyz";
this.non0Digit="[1-9]";
this.SIMPLE_GROUP_INDEX=12;
},1);

C$.$fields$=[['Z',['sourceClosed','needInput','skipped','matchValid','closed'],'I',['position','hasNextPosition','savedScannerPosition','radix','defaultRadix','SIMPLE_GROUP_INDEX'],'S',['hasNextResult','groupSeparator','decimalSeparator','nanString','infinityString','positivePrefix','negativePrefix','positiveSuffix','negativeSuffix','digits','non0Digit'],'O',['buf','java.nio.CharBuffer','matcher','java.util.regex.Matcher','delimPattern','java.util.regex.Pattern','+hasNextPattern','source','Readable','typeCache','java.lang.Object','locale','java.util.Locale','patternCache','sun.misc.LRUCache','lastException','java.io.IOException','integerPattern','java.util.regex.Pattern','+floatPattern','+decimalPattern']]
,['O',['WHITESPACE_PATTERN','java.util.regex.Pattern','+FIND_ANY_PATTERN','+boolPattern','+separatorPattern','+linePattern']]]

Clazz.newMeth(C$, 'boolPattern$',  function () {
var bp=C$.boolPattern;
if (bp == null ) C$.boolPattern=bp=$I$(1).compile$S$I("true|false", 2);
return bp;
}, 1);

Clazz.newMeth(C$, 'buildIntegerPatternString',  function () {
var radixDigits=(this.radix == 10 ? "\\d" : this.radix < 10 ? "[" + this.digits.substring$I$I(0, this.radix) + "]"  : "[0-9a-" + this.digits.charAt$I(this.radix - 1) + "A-" + this.digits.substring$I$I(this.radix - 1, this.radix).toUpperCase$() + "]" );
var digit="(" + radixDigits + ")" ;
var groupedNumeral="(" + this.non0Digit + digit + "?" + digit + "?(" + this.groupSeparator + digit + digit + digit + ")+)" ;
var numeral="(" + groupedNumeral + "|" + "(" + digit + "+)" + ")" ;
var javaStyleInteger="([-+]?(" + numeral + "))" ;
var negativeInteger=this.negativePrefix + numeral + this.negativeSuffix ;
var positiveInteger=this.positivePrefix + numeral + this.positiveSuffix ;
return "(" + javaStyleInteger + ")" + "|(" + positiveInteger + ")" + "|(" + negativeInteger + ")" ;
}, p$1);

Clazz.newMeth(C$, 'integerPattern',  function () {
if (this.integerPattern == null ) {
this.integerPattern=this.patternCache.forName$O(p$1.buildIntegerPatternString.apply(this, []));
}return this.integerPattern;
}, p$1);

Clazz.newMeth(C$, 'separatorPattern$',  function () {
var sp=C$.separatorPattern;
if (sp == null ) C$.separatorPattern=sp=$I$(1).compile$S("\r\n|[\n\r\u2028\u2029\u0085]");
return sp;
}, 1);

Clazz.newMeth(C$, 'linePattern$',  function () {
var lp=C$.linePattern;
if (lp == null ) C$.linePattern=lp=$I$(1,"compile$S",[".*(\r\n|[\n\r\u2028\u2029\u0085])|.+$"]);
return lp;
}, 1);

Clazz.newMeth(C$, 'buildFloatAndDecimalPattern',  function () {
var digit="([0-9])";
var exponent="([eE][+-]?" + digit + "+)?" ;
var groupedNumeral="(" + this.non0Digit + digit + "?" + digit + "?" + "(" + this.groupSeparator + digit + digit + digit + ")+)" ;
var numeral="((" + digit + "+)" + "|" + groupedNumeral + ")" ;
var decimalNumeral="(" + numeral + this.decimalSeparator + digit + "*" + "|" + this.decimalSeparator + digit + "+" + "|" + numeral + ")" ;
var nonNumber="(NaN|" + this.nanString + "|Infinity|" + this.infinityString + ")" ;
var positiveFloat="(" + this.positivePrefix + decimalNumeral + this.positiveSuffix + exponent + ")" ;
var negativeFloat="(" + this.negativePrefix + decimalNumeral + this.negativeSuffix + exponent + ")" ;
var decimal="(([-+]?" + decimalNumeral + exponent + ")" + "|" + positiveFloat + "|" + negativeFloat + ")" ;
var hexFloat="[-+]?0[xX][0-9a-fA-F]*\\.[0-9a-fA-F]+([pP][-+]?[0-9]+)?";
var positiveNonNumber="(" + this.positivePrefix + nonNumber + this.positiveSuffix + ")" ;
var negativeNonNumber="(" + this.negativePrefix + nonNumber + this.negativeSuffix + ")" ;
var signedNonNumber="(([-+]?" + nonNumber + ")|" + positiveNonNumber + "|" + negativeNonNumber + ")" ;
this.floatPattern=$I$(1).compile$S(decimal + "|" + hexFloat + "|" + signedNonNumber );
this.decimalPattern=$I$(1).compile$S(decimal);
}, p$1);

Clazz.newMeth(C$, 'floatPattern',  function () {
if (this.floatPattern == null ) {
p$1.buildFloatAndDecimalPattern.apply(this, []);
}return this.floatPattern;
}, p$1);

Clazz.newMeth(C$, 'decimalPattern',  function () {
if (this.decimalPattern == null ) {
p$1.buildFloatAndDecimalPattern.apply(this, []);
}return this.decimalPattern;
}, p$1);

Clazz.newMeth(C$, 'c$$Readable$java_util_regex_Pattern',  function (source, pattern) {
;C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return source != null }, function(){return "source should not be null"});
Clazz.assert(C$, this, function(){return pattern != null }, function(){return "pattern should not be null"});
this.source=source;
this.delimPattern=pattern;
this.buf=$I$(3).allocate$I(1024);
this.buf.limit$I(0);
this.matcher=this.delimPattern.matcher$CharSequence(this.buf);
this.matcher.useTransparentBounds$Z(true);
this.matcher.useAnchoringBounds$Z(false);
this.useLocale$java_util_Locale($I$(4,"getDefault$java_util_Locale_Category",[$I$(5).FORMAT]));
}, 1);

Clazz.newMeth(C$, 'c$$Readable',  function (source) {
C$.c$$Readable$java_util_regex_Pattern.apply(this, [$I$(6).requireNonNull$O$S(source, "source"), C$.WHITESPACE_PATTERN]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function (source) {
C$.c$$Readable$java_util_regex_Pattern.apply(this, [Clazz.new_($I$(7,1).c$$java_io_InputStream,[source]), C$.WHITESPACE_PATTERN]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$S',  function (source, charsetName) {
C$.c$$Readable$java_util_regex_Pattern.apply(this, [C$.makeReadable$java_io_InputStream$java_nio_charset_Charset($I$(6).requireNonNull$O$S(source, "source"), C$.toCharset$S(charsetName)), C$.WHITESPACE_PATTERN]);
}, 1);

Clazz.newMeth(C$, 'toCharset$S',  function (csn) {
$I$(6).requireNonNull$O$S(csn, "charsetName");
try {
return $I$(8).forName$S(csn);
} catch (e) {
if (Clazz.exceptionOf(e,"java.nio.charset.IllegalCharsetNameException") || Clazz.exceptionOf(e,"java.nio.charset.UnsupportedCharsetException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'makeReadable$java_io_InputStream$java_nio_charset_Charset',  function (source, charset) {
return Clazz.new_($I$(7,1).c$$java_io_InputStream$java_nio_charset_Charset,[source, charset]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File',  function (source) {
C$.c$$java_nio_channels_ReadableByteChannel.apply(this, [(Clazz.new_($I$(9,1).c$$java_io_File,[source]).getChannel$())]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$S',  function (source, charsetName) {
C$.c$$java_io_File$java_nio_charset_CharsetDecoder.apply(this, [$I$(6).requireNonNull$O(source), C$.toDecoder$S(charsetName)]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$java_nio_charset_CharsetDecoder',  function (source, dec) {
C$.c$$Readable.apply(this, [C$.makeReadable$java_nio_channels_ReadableByteChannel$java_nio_charset_CharsetDecoder((Clazz.new_($I$(9,1).c$$java_io_File,[source]).getChannel$()), dec)]);
}, 1);

Clazz.newMeth(C$, 'toDecoder$S',  function (charsetName) {
$I$(6).requireNonNull$O$S(charsetName, "charsetName");
try {
return $I$(8).forName$S(charsetName).newDecoder$();
} catch (unused) {
if (Clazz.exceptionOf(unused,"java.nio.charset.IllegalCharsetNameException") || Clazz.exceptionOf(unused,"java.nio.charset.UnsupportedCharsetException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[charsetName]);
} else {
throw unused;
}
}
}, 1);

Clazz.newMeth(C$, 'makeReadable$java_nio_channels_ReadableByteChannel$java_nio_charset_CharsetDecoder',  function (source, dec) {
return $I$(10).newReader$java_nio_channels_ReadableByteChannel$java_nio_charset_CharsetDecoder$I(source, dec, -1);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_file_Path',  function (source) {
C$.c$$java_io_InputStream.apply(this, [$I$(11,"newInputStream$java_nio_file_Path$java_nio_file_OpenOptionA",[source, Clazz.array($I$(12), -1, [])])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_file_Path$S',  function (source, charsetName) {
C$.c$$java_nio_file_Path$java_nio_charset_Charset.apply(this, [$I$(6).requireNonNull$O(source), C$.toCharset$S(charsetName)]);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_file_Path$java_nio_charset_Charset',  function (source, charset) {
C$.c$$Readable.apply(this, [C$.makeReadable$java_io_InputStream$java_nio_charset_Charset($I$(11,"newInputStream$java_nio_file_Path$java_nio_file_OpenOptionA",[source, Clazz.array($I$(12), -1, [])]), charset)]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (source) {
C$.c$$Readable$java_util_regex_Pattern.apply(this, [Clazz.new_($I$(13,1).c$$S,[source]), C$.WHITESPACE_PATTERN]);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_channels_ReadableByteChannel',  function (source) {
C$.c$$Readable$java_util_regex_Pattern.apply(this, [C$.makeReadable$java_nio_channels_ReadableByteChannel($I$(6).requireNonNull$O$S(source, "source")), C$.WHITESPACE_PATTERN]);
}, 1);

Clazz.newMeth(C$, 'makeReadable$java_nio_channels_ReadableByteChannel',  function (source) {
return C$.makeReadable$java_nio_channels_ReadableByteChannel$java_nio_charset_CharsetDecoder(source, $I$(8).defaultCharset$().newDecoder$());
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_channels_ReadableByteChannel$S',  function (source, charsetName) {
C$.c$$Readable$java_util_regex_Pattern.apply(this, [C$.makeReadable$java_nio_channels_ReadableByteChannel$java_nio_charset_CharsetDecoder($I$(6).requireNonNull$O$S(source, "source"), C$.toDecoder$S(charsetName)), C$.WHITESPACE_PATTERN]);
}, 1);

Clazz.newMeth(C$, 'saveState',  function () {
this.savedScannerPosition=this.position;
}, p$1);

Clazz.newMeth(C$, 'revertState',  function () {
this.position=this.savedScannerPosition;
this.savedScannerPosition=-1;
this.skipped=false;
}, p$1);

Clazz.newMeth(C$, 'revertState$Z',  function (b) {
this.position=this.savedScannerPosition;
this.savedScannerPosition=-1;
this.skipped=false;
return b;
}, p$1);

Clazz.newMeth(C$, 'cacheResult',  function () {
this.hasNextResult=this.matcher.group$();
this.hasNextPosition=this.matcher.end$();
this.hasNextPattern=this.matcher.pattern$();
}, p$1);

Clazz.newMeth(C$, 'cacheResult$S',  function (result) {
this.hasNextResult=result;
this.hasNextPosition=this.matcher.end$();
this.hasNextPattern=this.matcher.pattern$();
}, p$1);

Clazz.newMeth(C$, 'clearCaches',  function () {
this.hasNextPattern=null;
this.typeCache=null;
}, p$1);

Clazz.newMeth(C$, 'getCachedResult',  function () {
this.position=this.hasNextPosition;
this.hasNextPattern=null;
this.typeCache=null;
return this.hasNextResult;
}, p$1);

Clazz.newMeth(C$, 'useTypeCache',  function () {
if (this.closed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Scanner closed"]);
this.position=this.hasNextPosition;
this.hasNextPattern=null;
this.typeCache=null;
}, p$1);

Clazz.newMeth(C$, 'readInput',  function () {
if (this.buf.limit$() == this.buf.capacity$()) p$1.makeSpace.apply(this, []);
var p=this.buf.position$();
this.buf.position$I(this.buf.limit$());
this.buf.limit$I(this.buf.capacity$());
var n=0;
try {
n=this.source.read$java_nio_CharBuffer(this.buf);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
this.lastException=ioe;
n=-1;
} else {
throw ioe;
}
}
if (n == -1) {
this.sourceClosed=true;
this.needInput=false;
}if (n > 0) this.needInput=false;
this.buf.limit$I(this.buf.position$());
this.buf.position$I(p);
}, p$1);

Clazz.newMeth(C$, 'makeSpace',  function () {
p$1.clearCaches.apply(this, []);
var offset=this.savedScannerPosition == -1 ? this.position : this.savedScannerPosition;
this.buf.position$I(offset);
if (offset > 0) {
this.buf.compact$();
p$1.translateSavedIndexes$I.apply(this, [offset]);
this.position-=offset;
this.buf.flip$();
return true;
}var newSize=this.buf.capacity$() * 2;
var newBuf=$I$(3).allocate$I(newSize);
newBuf.put$java_nio_CharBuffer(this.buf);
newBuf.flip$();
p$1.translateSavedIndexes$I.apply(this, [offset]);
this.position-=offset;
this.buf=newBuf;
this.matcher.reset$CharSequence(this.buf);
return true;
}, p$1);

Clazz.newMeth(C$, 'translateSavedIndexes$I',  function (offset) {
if (this.savedScannerPosition != -1) this.savedScannerPosition-=offset;
}, p$1);

Clazz.newMeth(C$, 'throwFor',  function () {
this.skipped=false;
if ((this.sourceClosed) && (this.position == this.buf.limit$()) ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
 else throw Clazz.new_(Clazz.load('java.util.InputMismatchException'));
}, p$1);

Clazz.newMeth(C$, 'hasTokenInBuffer',  function () {
this.matchValid=false;
this.matcher.usePattern$java_util_regex_Pattern(this.delimPattern);
this.matcher.region$I$I(this.position, this.buf.limit$());
if (this.matcher.lookingAt$()) this.position=this.matcher.end$();
if (this.position == this.buf.limit$()) return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'getCompleteTokenInBuffer$java_util_regex_Pattern',  function (pattern) {
this.matchValid=false;
this.matcher.usePattern$java_util_regex_Pattern(this.delimPattern);
if (!this.skipped) {
this.matcher.region$I$I(this.position, this.buf.limit$());
if (this.matcher.lookingAt$()) {
if (this.matcher.hitEnd$() && !this.sourceClosed ) {
this.needInput=true;
return null;
}this.skipped=true;
this.position=this.matcher.end$();
}}if (this.position == this.buf.limit$()) {
if (this.sourceClosed) return null;
this.needInput=true;
return null;
}this.matcher.region$I$I(this.position, this.buf.limit$());
var foundNextDelim=this.matcher.find$();
if (foundNextDelim && (this.matcher.end$() == this.position) ) {
foundNextDelim=this.matcher.find$();
}if (foundNextDelim) {
if (this.matcher.requireEnd$() && !this.sourceClosed ) {
this.needInput=true;
return null;
}var tokenEnd=this.matcher.start$();
if (pattern == null ) {
pattern=C$.FIND_ANY_PATTERN;
}this.matcher.usePattern$java_util_regex_Pattern(pattern);
this.matcher.region$I$I(this.position, tokenEnd);
if (this.matcher.matches$()) {
var s=this.matcher.group$();
this.position=this.matcher.end$();
return s;
} else {
return null;
}}if (this.sourceClosed) {
if (pattern == null ) {
pattern=C$.FIND_ANY_PATTERN;
}this.matcher.usePattern$java_util_regex_Pattern(pattern);
this.matcher.region$I$I(this.position, this.buf.limit$());
if (this.matcher.matches$()) {
var s=this.matcher.group$();
this.position=this.matcher.end$();
return s;
}return null;
}this.needInput=true;
return null;
}, p$1);

Clazz.newMeth(C$, 'findPatternInBuffer$java_util_regex_Pattern$I',  function (pattern, horizon) {
this.matchValid=false;
this.matcher.usePattern$java_util_regex_Pattern(pattern);
var bufferLimit=this.buf.limit$();
var horizonLimit=-1;
var searchLimit=bufferLimit;
if (horizon > 0) {
horizonLimit=this.position + horizon;
if (horizonLimit < bufferLimit) searchLimit=horizonLimit;
}this.matcher.region$I$I(this.position, searchLimit);
if (this.matcher.find$()) {
if (this.matcher.hitEnd$() && (!this.sourceClosed) ) {
if (searchLimit != horizonLimit) {
this.needInput=true;
return null;
}if (this.matcher.requireEnd$()) {
this.needInput=true;
return null;
}}this.position=this.matcher.end$();
return this.matcher.group$();
}if (this.sourceClosed) return null;
if ((horizon == 0) || (searchLimit != horizonLimit) ) this.needInput=true;
return null;
}, p$1);

Clazz.newMeth(C$, 'matchPatternInBuffer$java_util_regex_Pattern',  function (pattern) {
this.matchValid=false;
this.matcher.usePattern$java_util_regex_Pattern(pattern);
this.matcher.region$I$I(this.position, this.buf.limit$());
if (this.matcher.lookingAt$()) {
if (this.matcher.hitEnd$() && (!this.sourceClosed) ) {
this.needInput=true;
return null;
}this.position=this.matcher.end$();
return this.matcher.group$();
}if (this.sourceClosed) return null;
this.needInput=true;
return null;
}, p$1);

Clazz.newMeth(C$, 'ensureOpen',  function () {
if (this.closed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Scanner closed"]);
}, p$1);

Clazz.newMeth(C$, 'close$',  function () {
if (this.closed) return;
if (Clazz.instanceOf(this.source, "java.io.Closeable")) {
try {
(this.source).close$();
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
this.lastException=ioe;
} else {
throw ioe;
}
}
}this.sourceClosed=true;
this.source=null;
this.closed=true;
});

Clazz.newMeth(C$, 'ioException$',  function () {
return this.lastException;
});

Clazz.newMeth(C$, 'delimiter$',  function () {
return this.delimPattern;
});

Clazz.newMeth(C$, 'useDelimiter$java_util_regex_Pattern',  function (pattern) {
this.delimPattern=pattern;
return this;
});

Clazz.newMeth(C$, 'useDelimiter$S',  function (pattern) {
this.delimPattern=this.patternCache.forName$O(pattern);
return this;
});

Clazz.newMeth(C$, 'locale$',  function () {
return this.locale;
});

Clazz.newMeth(C$, 'useLocale$java_util_Locale',  function (locale) {
if (locale.equals$O(this.locale)) return this;
this.locale=locale;
var df=$I$(14).getNumberInstance$java_util_Locale(locale);
var dfs=$I$(15).getInstance$java_util_Locale(locale);
this.groupSeparator="\\" + dfs.getGroupingSeparator$();
this.decimalSeparator="\\" + dfs.getDecimalSeparator$();
this.nanString="\\Q" + dfs.getNaN$() + "\\E" ;
this.infinityString="\\Q" + dfs.getInfinity$() + "\\E" ;
this.positivePrefix=df.getPositivePrefix$();
if (this.positivePrefix.length$() > 0) this.positivePrefix="\\Q" + this.positivePrefix + "\\E" ;
this.negativePrefix=df.getNegativePrefix$();
if (this.negativePrefix.length$() > 0) this.negativePrefix="\\Q" + this.negativePrefix + "\\E" ;
this.positiveSuffix=df.getPositiveSuffix$();
if (this.positiveSuffix.length$() > 0) this.positiveSuffix="\\Q" + this.positiveSuffix + "\\E" ;
this.negativeSuffix=df.getNegativeSuffix$();
if (this.negativeSuffix.length$() > 0) this.negativeSuffix="\\Q" + this.negativeSuffix + "\\E" ;
this.integerPattern=null;
this.floatPattern=null;
return this;
});

Clazz.newMeth(C$, 'radix$',  function () {
return this.defaultRadix;
});

Clazz.newMeth(C$, 'useRadix$I',  function (radix) {
if ((radix < 2) || (radix > 36) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["radix:" + radix]);
if (this.defaultRadix == radix) return this;
this.defaultRadix=radix;
this.integerPattern=null;
return this;
});

Clazz.newMeth(C$, 'setRadix$I',  function (radix) {
if (this.radix != radix) {
this.integerPattern=null;
this.radix=radix;
}}, p$1);

Clazz.newMeth(C$, 'match$',  function () {
if (!this.matchValid) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No match result available"]);
return this.matcher.toMatchResult$();
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(16,1));
sb.append$S("java.util.Scanner");
sb.append$S("[delimiters=" + this.delimPattern + "]" );
sb.append$S("[position=" + this.position + "]" );
sb.append$S("[match valid=" + this.matchValid + "]" );
sb.append$S("[need input=" + this.needInput + "]" );
sb.append$S("[source closed=" + this.sourceClosed + "]" );
sb.append$S("[skipped=" + this.skipped + "]" );
sb.append$S("[group separator=" + this.groupSeparator + "]" );
sb.append$S("[decimal separator=" + this.decimalSeparator + "]" );
sb.append$S("[positive prefix=" + this.positivePrefix + "]" );
sb.append$S("[negative prefix=" + this.negativePrefix + "]" );
sb.append$S("[positive suffix=" + this.positiveSuffix + "]" );
sb.append$S("[negative suffix=" + this.negativeSuffix + "]" );
sb.append$S("[NaN string=" + this.nanString + "]" );
sb.append$S("[infinity string=" + this.infinityString + "]" );
return sb.toString();
});

Clazz.newMeth(C$, 'hasNext$',  function () {
p$1.ensureOpen.apply(this, []);
p$1.saveState.apply(this, []);
while (!this.sourceClosed){
if (p$1.hasTokenInBuffer.apply(this, [])) return p$1.revertState$Z.apply(this, [true]);
p$1.readInput.apply(this, []);
}
var result=p$1.hasTokenInBuffer.apply(this, []);
return p$1.revertState$Z.apply(this, [result]);
});

Clazz.newMeth(C$, 'next$',  function () {
p$1.ensureOpen.apply(this, []);
p$1.clearCaches.apply(this, []);
while (true){
var token=p$1.getCompleteTokenInBuffer$java_util_regex_Pattern.apply(this, [null]);
if (token != null ) {
this.matchValid=true;
this.skipped=false;
return token;
}if (this.needInput) p$1.readInput.apply(this, []);
 else p$1.throwFor.apply(this, []);
}
});

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'hasNext$S',  function (pattern) {
return this.hasNext$java_util_regex_Pattern(this.patternCache.forName$O(pattern));
});

Clazz.newMeth(C$, 'next$S',  function (pattern) {
return this.next$java_util_regex_Pattern(this.patternCache.forName$O(pattern));
});

Clazz.newMeth(C$, 'hasNext$java_util_regex_Pattern',  function (pattern) {
p$1.ensureOpen.apply(this, []);
if (pattern == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.hasNextPattern=null;
p$1.saveState.apply(this, []);
while (true){
if (p$1.getCompleteTokenInBuffer$java_util_regex_Pattern.apply(this, [pattern]) != null ) {
this.matchValid=true;
p$1.cacheResult.apply(this, []);
return p$1.revertState$Z.apply(this, [true]);
}if (this.needInput) p$1.readInput.apply(this, []);
 else return p$1.revertState$Z.apply(this, [false]);
}
});

Clazz.newMeth(C$, 'next$java_util_regex_Pattern',  function (pattern) {
p$1.ensureOpen.apply(this, []);
if (pattern == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.hasNextPattern === pattern ) return p$1.getCachedResult.apply(this, []);
p$1.clearCaches.apply(this, []);
while (true){
var token=p$1.getCompleteTokenInBuffer$java_util_regex_Pattern.apply(this, [pattern]);
if (token != null ) {
this.matchValid=true;
this.skipped=false;
return token;
}if (this.needInput) p$1.readInput.apply(this, []);
 else p$1.throwFor.apply(this, []);
}
});

Clazz.newMeth(C$, 'hasNextLine$',  function () {
p$1.saveState.apply(this, []);
var result=this.findWithinHorizon$java_util_regex_Pattern$I(C$.linePattern$(), 0);
if (result != null ) {
var mr=this.match$();
var lineSep=mr.group$I(1);
if (lineSep != null ) {
result=result.substring$I$I(0, result.length$() - lineSep.length$());
p$1.cacheResult$S.apply(this, [result]);
} else {
p$1.cacheResult.apply(this, []);
}}p$1.revertState.apply(this, []);
return (result != null );
});

Clazz.newMeth(C$, 'nextLine$',  function () {
if (this.hasNextPattern === C$.linePattern$() ) return p$1.getCachedResult.apply(this, []);
p$1.clearCaches.apply(this, []);
var result=this.findWithinHorizon$java_util_regex_Pattern$I(C$.linePattern, 0);
if (result == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["No line found"]);
var mr=this.match$();
var lineSep=mr.group$I(1);
if (lineSep != null ) result=result.substring$I$I(0, result.length$() - lineSep.length$());
if (result == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
 else return result;
});

Clazz.newMeth(C$, 'findInLine$S',  function (pattern) {
return this.findInLine$java_util_regex_Pattern(this.patternCache.forName$O(pattern));
});

Clazz.newMeth(C$, 'findInLine$java_util_regex_Pattern',  function (pattern) {
p$1.ensureOpen.apply(this, []);
if (pattern == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
p$1.clearCaches.apply(this, []);
var endPosition=0;
p$1.saveState.apply(this, []);
while (true){
var token=p$1.findPatternInBuffer$java_util_regex_Pattern$I.apply(this, [C$.separatorPattern$(), 0]);
if (token != null ) {
endPosition=this.matcher.start$();
break;
}if (this.needInput) {
p$1.readInput.apply(this, []);
} else {
endPosition=this.buf.limit$();
break;
}}
p$1.revertState.apply(this, []);
var horizonForLine=endPosition - this.position;
if (horizonForLine == 0) return null;
return this.findWithinHorizon$java_util_regex_Pattern$I(pattern, horizonForLine);
});

Clazz.newMeth(C$, 'findWithinHorizon$S$I',  function (pattern, horizon) {
return this.findWithinHorizon$java_util_regex_Pattern$I(this.patternCache.forName$O(pattern), horizon);
});

Clazz.newMeth(C$, 'findWithinHorizon$java_util_regex_Pattern$I',  function (pattern, horizon) {
p$1.ensureOpen.apply(this, []);
if (pattern == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (horizon < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["horizon < 0"]);
p$1.clearCaches.apply(this, []);
while (true){
var token=p$1.findPatternInBuffer$java_util_regex_Pattern$I.apply(this, [pattern, horizon]);
if (token != null ) {
this.matchValid=true;
return token;
}if (this.needInput) p$1.readInput.apply(this, []);
 else break;
}
return null;
});

Clazz.newMeth(C$, 'skip$java_util_regex_Pattern',  function (pattern) {
p$1.ensureOpen.apply(this, []);
if (pattern == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
p$1.clearCaches.apply(this, []);
while (true){
var token=p$1.matchPatternInBuffer$java_util_regex_Pattern.apply(this, [pattern]);
if (token != null ) {
this.matchValid=true;
this.position=this.matcher.end$();
return this;
}if (this.needInput) p$1.readInput.apply(this, []);
 else throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}
});

Clazz.newMeth(C$, 'skip$S',  function (pattern) {
return this.skip$java_util_regex_Pattern(this.patternCache.forName$O(pattern));
});

Clazz.newMeth(C$, 'hasNextBoolean$',  function () {
return this.hasNext$java_util_regex_Pattern(C$.boolPattern$());
});

Clazz.newMeth(C$, 'nextBoolean$',  function () {
p$1.clearCaches.apply(this, []);
return Boolean.parseBoolean$S(this.next$java_util_regex_Pattern(C$.boolPattern$()));
});

Clazz.newMeth(C$, 'hasNextByte$',  function () {
return this.hasNextByte$I(this.defaultRadix);
});

Clazz.newMeth(C$, 'hasNextByte$I',  function (radix) {
p$1.setRadix$I.apply(this, [radix]);
var result=this.hasNext$java_util_regex_Pattern(p$1.integerPattern.apply(this, []));
if (result) {
try {
var s=(this.matcher.group$I(this.SIMPLE_GROUP_INDEX) == null ) ? p$1.processIntegerToken$S.apply(this, [this.hasNextResult]) : this.hasNextResult;
this.typeCache=Byte.valueOf$B(Byte.parseByte$S$I(s, radix));
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
result=false;
} else {
throw nfe;
}
}
}return result;
});

Clazz.newMeth(C$, 'nextByte$',  function () {
return this.nextByte$I(this.defaultRadix);
});

Clazz.newMeth(C$, 'nextByte$I',  function (radix) {
if ((this.typeCache != null ) && (Clazz.instanceOf(this.typeCache, "java.lang.Byte")) && this.radix == radix  ) {
var val=(this.typeCache).byteValue$();
p$1.useTypeCache.apply(this, []);
return val;
}p$1.setRadix$I.apply(this, [radix]);
p$1.clearCaches.apply(this, []);
try {
var s=this.next$java_util_regex_Pattern(p$1.integerPattern.apply(this, []));
if (this.matcher.group$I(this.SIMPLE_GROUP_INDEX) == null ) s=p$1.processIntegerToken$S.apply(this, [s]);
return Byte.parseByte$S$I(s, radix);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
this.position=this.matcher.start$();
throw Clazz.new_(Clazz.load('java.util.InputMismatchException').c$$S,[nfe.getMessage$()]);
} else {
throw nfe;
}
}
});

Clazz.newMeth(C$, 'hasNextShort$',  function () {
return this.hasNextShort$I(this.defaultRadix);
});

Clazz.newMeth(C$, 'hasNextShort$I',  function (radix) {
p$1.setRadix$I.apply(this, [radix]);
var result=this.hasNext$java_util_regex_Pattern(p$1.integerPattern.apply(this, []));
if (result) {
try {
var s=(this.matcher.group$I(this.SIMPLE_GROUP_INDEX) == null ) ? p$1.processIntegerToken$S.apply(this, [this.hasNextResult]) : this.hasNextResult;
this.typeCache=Short.valueOf$H(Short.parseShort$S$I(s, radix));
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
result=false;
} else {
throw nfe;
}
}
}return result;
});

Clazz.newMeth(C$, 'nextShort$',  function () {
return this.nextShort$I(this.defaultRadix);
});

Clazz.newMeth(C$, 'nextShort$I',  function (radix) {
if ((this.typeCache != null ) && (Clazz.instanceOf(this.typeCache, "java.lang.Short")) && this.radix == radix  ) {
var val=(this.typeCache).shortValue$();
p$1.useTypeCache.apply(this, []);
return val;
}p$1.setRadix$I.apply(this, [radix]);
p$1.clearCaches.apply(this, []);
try {
var s=this.next$java_util_regex_Pattern(p$1.integerPattern.apply(this, []));
if (this.matcher.group$I(this.SIMPLE_GROUP_INDEX) == null ) s=p$1.processIntegerToken$S.apply(this, [s]);
return Short.parseShort$S$I(s, radix);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
this.position=this.matcher.start$();
throw Clazz.new_(Clazz.load('java.util.InputMismatchException').c$$S,[nfe.getMessage$()]);
} else {
throw nfe;
}
}
});

Clazz.newMeth(C$, 'hasNextInt$',  function () {
return this.hasNextInt$I(this.defaultRadix);
});

Clazz.newMeth(C$, 'hasNextInt$I',  function (radix) {
p$1.setRadix$I.apply(this, [radix]);
var result=this.hasNext$java_util_regex_Pattern(p$1.integerPattern.apply(this, []));
if (result) {
try {
var s=(this.matcher.group$I(this.SIMPLE_GROUP_INDEX) == null ) ? p$1.processIntegerToken$S.apply(this, [this.hasNextResult]) : this.hasNextResult;
this.typeCache=Integer.valueOf$I(Integer.parseInt$S$I(s, radix));
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
result=false;
} else {
throw nfe;
}
}
}return result;
});

Clazz.newMeth(C$, 'processIntegerToken$S',  function (token) {
var result=token.replaceAll$S$S("" + this.groupSeparator, "");
var isNegative=false;
var preLen=this.negativePrefix.length$();
if ((preLen > 0) && result.startsWith$S(this.negativePrefix) ) {
isNegative=true;
result=result.substring$I(preLen);
}var sufLen=this.negativeSuffix.length$();
if ((sufLen > 0) && result.endsWith$S(this.negativeSuffix) ) {
isNegative=true;
result=result.substring$I$I(result.length$() - sufLen, result.length$());
}if (isNegative) result="-" + result;
return result;
}, p$1);

Clazz.newMeth(C$, 'nextInt$',  function () {
return this.nextInt$I(this.defaultRadix);
});

Clazz.newMeth(C$, 'nextInt$I',  function (radix) {
if ((this.typeCache != null ) && (Clazz.instanceOf(this.typeCache, "java.lang.Integer")) && this.radix == radix  ) {
var val=(this.typeCache).intValue$();
p$1.useTypeCache.apply(this, []);
return val;
}p$1.setRadix$I.apply(this, [radix]);
p$1.clearCaches.apply(this, []);
try {
var s=this.next$java_util_regex_Pattern(p$1.integerPattern.apply(this, []));
if (this.matcher.group$I(this.SIMPLE_GROUP_INDEX) == null ) s=p$1.processIntegerToken$S.apply(this, [s]);
return Integer.parseInt$S$I(s, radix);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
this.position=this.matcher.start$();
throw Clazz.new_(Clazz.load('java.util.InputMismatchException').c$$S,[nfe.getMessage$()]);
} else {
throw nfe;
}
}
});

Clazz.newMeth(C$, 'hasNextLong$',  function () {
return this.hasNextLong$I(this.defaultRadix);
});

Clazz.newMeth(C$, 'hasNextLong$I',  function (radix) {
p$1.setRadix$I.apply(this, [radix]);
var result=this.hasNext$java_util_regex_Pattern(p$1.integerPattern.apply(this, []));
if (result) {
try {
var s=(this.matcher.group$I(this.SIMPLE_GROUP_INDEX) == null ) ? p$1.processIntegerToken$S.apply(this, [this.hasNextResult]) : this.hasNextResult;
this.typeCache=Long.valueOf$J(Long.parseLong$S$I(s, radix));
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
result=false;
} else {
throw nfe;
}
}
}return result;
});

Clazz.newMeth(C$, 'nextLong$',  function () {
return this.nextLong$I(this.defaultRadix);
});

Clazz.newMeth(C$, 'nextLong$I',  function (radix) {
if ((this.typeCache != null ) && (Clazz.instanceOf(this.typeCache, "java.lang.Long")) && this.radix == radix  ) {
var val=(this.typeCache).longValue$();
p$1.useTypeCache.apply(this, []);
return val;
}p$1.setRadix$I.apply(this, [radix]);
p$1.clearCaches.apply(this, []);
try {
var s=this.next$java_util_regex_Pattern(p$1.integerPattern.apply(this, []));
if (this.matcher.group$I(this.SIMPLE_GROUP_INDEX) == null ) s=p$1.processIntegerToken$S.apply(this, [s]);
return Long.parseLong$S$I(s, radix);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
this.position=this.matcher.start$();
throw Clazz.new_(Clazz.load('java.util.InputMismatchException').c$$S,[nfe.getMessage$()]);
} else {
throw nfe;
}
}
});

Clazz.newMeth(C$, 'processFloatToken$S',  function (token) {
var result=token.replaceAll$S$S(this.groupSeparator, "");
if (!this.decimalSeparator.equals$O("\\.")) result=result.replaceAll$S$S(this.decimalSeparator, ".");
var isNegative=false;
var preLen=this.negativePrefix.length$();
if ((preLen > 0) && result.startsWith$S(this.negativePrefix) ) {
isNegative=true;
result=result.substring$I(preLen);
}var sufLen=this.negativeSuffix.length$();
if ((sufLen > 0) && result.endsWith$S(this.negativeSuffix) ) {
isNegative=true;
result=result.substring$I$I(result.length$() - sufLen, result.length$());
}if (result.equals$O(this.nanString)) result="NaN";
if (result.equals$O(this.infinityString)) result="Infinity";
if (isNegative) result="-" + result;
return result;
}, p$1);

Clazz.newMeth(C$, 'hasNextFloat$',  function () {
p$1.setRadix$I.apply(this, [10]);
var result=this.hasNext$java_util_regex_Pattern(p$1.floatPattern.apply(this, []));
if (result) {
try {
var s=p$1.processFloatToken$S.apply(this, [this.hasNextResult]);
this.typeCache=Float.valueOf$F(Float.parseFloat$S(s));
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
result=false;
} else {
throw nfe;
}
}
}return result;
});

Clazz.newMeth(C$, 'nextFloat$',  function () {
if ((this.typeCache != null ) && (Clazz.instanceOf(this.typeCache, "java.lang.Float")) ) {
var val=(this.typeCache).floatValue$();
p$1.useTypeCache.apply(this, []);
return val;
}p$1.setRadix$I.apply(this, [10]);
p$1.clearCaches.apply(this, []);
try {
return Float.parseFloat$S(p$1.processFloatToken$S.apply(this, [this.next$java_util_regex_Pattern(p$1.floatPattern.apply(this, []))]));
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
this.position=this.matcher.start$();
throw Clazz.new_(Clazz.load('java.util.InputMismatchException').c$$S,[nfe.getMessage$()]);
} else {
throw nfe;
}
}
});

Clazz.newMeth(C$, 'hasNextDouble$',  function () {
p$1.setRadix$I.apply(this, [10]);
var result=this.hasNext$java_util_regex_Pattern(p$1.floatPattern.apply(this, []));
if (result) {
try {
var s=p$1.processFloatToken$S.apply(this, [this.hasNextResult]);
this.typeCache=Double.valueOf$D(Double.parseDouble$S(s));
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
result=false;
} else {
throw nfe;
}
}
}return result;
});

Clazz.newMeth(C$, 'nextDouble$',  function () {
if ((this.typeCache != null ) && (Clazz.instanceOf(this.typeCache, "java.lang.Double")) ) {
var val=(this.typeCache).doubleValue$();
p$1.useTypeCache.apply(this, []);
return val;
}p$1.setRadix$I.apply(this, [10]);
p$1.clearCaches.apply(this, []);
try {
return Double.parseDouble$S(p$1.processFloatToken$S.apply(this, [this.next$java_util_regex_Pattern(p$1.floatPattern.apply(this, []))]));
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
this.position=this.matcher.start$();
throw Clazz.new_(Clazz.load('java.util.InputMismatchException').c$$S,[nfe.getMessage$()]);
} else {
throw nfe;
}
}
});

Clazz.newMeth(C$, 'hasNextBigInteger$',  function () {
return this.hasNextBigInteger$I(this.defaultRadix);
});

Clazz.newMeth(C$, 'hasNextBigInteger$I',  function (radix) {
p$1.setRadix$I.apply(this, [radix]);
var result=this.hasNext$java_util_regex_Pattern(p$1.integerPattern.apply(this, []));
if (result) {
try {
var s=(this.matcher.group$I(this.SIMPLE_GROUP_INDEX) == null ) ? p$1.processIntegerToken$S.apply(this, [this.hasNextResult]) : this.hasNextResult;
this.typeCache=Clazz.new_($I$(17,1).c$$S$I,[s, radix]);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
result=false;
} else {
throw nfe;
}
}
}return result;
});

Clazz.newMeth(C$, 'nextBigInteger$',  function () {
return this.nextBigInteger$I(this.defaultRadix);
});

Clazz.newMeth(C$, 'nextBigInteger$I',  function (radix) {
if ((this.typeCache != null ) && (Clazz.instanceOf(this.typeCache, "java.math.BigInteger")) && this.radix == radix  ) {
var val=this.typeCache;
p$1.useTypeCache.apply(this, []);
return val;
}p$1.setRadix$I.apply(this, [radix]);
p$1.clearCaches.apply(this, []);
try {
var s=this.next$java_util_regex_Pattern(p$1.integerPattern.apply(this, []));
if (this.matcher.group$I(this.SIMPLE_GROUP_INDEX) == null ) s=p$1.processIntegerToken$S.apply(this, [s]);
return Clazz.new_($I$(17,1).c$$S$I,[s, radix]);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
this.position=this.matcher.start$();
throw Clazz.new_(Clazz.load('java.util.InputMismatchException').c$$S,[nfe.getMessage$()]);
} else {
throw nfe;
}
}
});

Clazz.newMeth(C$, 'hasNextBigDecimal$',  function () {
p$1.setRadix$I.apply(this, [10]);
var result=this.hasNext$java_util_regex_Pattern(p$1.decimalPattern.apply(this, []));
if (result) {
try {
var s=p$1.processFloatToken$S.apply(this, [this.hasNextResult]);
this.typeCache=Clazz.new_($I$(18,1).c$$S,[s]);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
result=false;
} else {
throw nfe;
}
}
}return result;
});

Clazz.newMeth(C$, 'nextBigDecimal$',  function () {
if ((this.typeCache != null ) && (Clazz.instanceOf(this.typeCache, "java.math.BigDecimal")) ) {
var val=this.typeCache;
p$1.useTypeCache.apply(this, []);
return val;
}p$1.setRadix$I.apply(this, [10]);
p$1.clearCaches.apply(this, []);
try {
var s=p$1.processFloatToken$S.apply(this, [this.next$java_util_regex_Pattern(p$1.decimalPattern.apply(this, []))]);
return Clazz.new_($I$(18,1).c$$S,[s]);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
this.position=this.matcher.start$();
throw Clazz.new_(Clazz.load('java.util.InputMismatchException').c$$S,[nfe.getMessage$()]);
} else {
throw nfe;
}
}
});

Clazz.newMeth(C$, 'reset$',  function () {
this.delimPattern=C$.WHITESPACE_PATTERN;
this.useLocale$java_util_Locale($I$(4,"getDefault$java_util_Locale_Category",[$I$(5).FORMAT]));
this.useRadix$I(10);
p$1.clearCaches.apply(this, []);
return this;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.WHITESPACE_PATTERN=$I$(1).compile$S("\\s+");
C$.FIND_ANY_PATTERN=$I$(1,"compile$S",["(?s).*"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
