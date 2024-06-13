(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[[0,'StringBuilder','InternalError','javax.xml.datatype.DatatypeFactory','Error','java.math.BigInteger','javax.xml.bind.WhiteSpaceProcessor','java.math.BigDecimal','javax.xml.namespace.QName',['javax.xml.bind.DatatypeConverterImpl','.CalendarFormatter'],'javax.xml.bind.DatatypeConverter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DatatypeConverterImpl", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'javax.xml.bind.DatatypeConverterInterface');
C$.$classes$=[['CalendarFormatter',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['theInstance','javax.xml.bind.DatatypeConverterInterface','hexCode','char[]','decodeMap','byte[]','encodeMap','char[]','datatypeFactory','javax.xml.datatype.DatatypeFactory']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'parseString$S',  function (lexicalXSDString) {
return lexicalXSDString;
});

Clazz.newMeth(C$, 'parseInteger$S',  function (lexicalXSDInteger) {
return C$._parseInteger$CharSequence(lexicalXSDInteger);
});

Clazz.newMeth(C$, '_parseInteger$CharSequence',  function (s) {
return Clazz.new_([C$.removeOptionalPlus$CharSequence($I$(6).trim$CharSequence(s)).toString()],$I$(5,1).c$$S);
}, 1);

Clazz.newMeth(C$, 'printInteger$java_math_BigInteger',  function (val) {
return C$._printInteger$java_math_BigInteger(val);
});

Clazz.newMeth(C$, '_printInteger$java_math_BigInteger',  function (val) {
return val.toString();
}, 1);

Clazz.newMeth(C$, 'parseInt$S',  function (s) {
return C$._parseInt$CharSequence(s);
});

Clazz.newMeth(C$, '_parseInt$CharSequence',  function (s) {
var len=s.length$();
var sign=1;
var r=0;
for (var i=0; i < len; i++) {
var ch=s.charAt$I(i);
if ($I$(6).isWhiteSpace$C(ch)) {
} else if ("0" <= ch && ch <= "9" ) {
r=r * 10 + (ch.$c() - 48);
} else if (ch == "-") {
sign=-1;
} else if (ch == "+") {
} else {
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Not a number: " + s]);
}}
return r * sign;
}, 1);

Clazz.newMeth(C$, 'parseLong$S',  function (lexicalXSLong) {
return C$._parseLong$CharSequence(lexicalXSLong);
});

Clazz.newMeth(C$, '_parseLong$CharSequence',  function (s) {
return Long.parseLong$S(C$.removeOptionalPlus$CharSequence($I$(6).trim$CharSequence(s)).toString());
}, 1);

Clazz.newMeth(C$, 'parseShort$S',  function (lexicalXSDShort) {
return C$._parseShort$CharSequence(lexicalXSDShort);
});

Clazz.newMeth(C$, '_parseShort$CharSequence',  function (s) {
return ($s$[0] = C$._parseInt$CharSequence(s), $s$[0]);
}, 1);

Clazz.newMeth(C$, 'printShort$H',  function (val) {
return C$._printShort$H(val);
});

Clazz.newMeth(C$, '_printShort$H',  function (val) {
return String.valueOf$I(val);
}, 1);

Clazz.newMeth(C$, 'parseDecimal$S',  function (content) {
return C$._parseDecimal$CharSequence(content);
});

Clazz.newMeth(C$, '_parseDecimal$CharSequence',  function (content) {
content=$I$(6).trim$CharSequence(content);
if (content.length$() <= 0) {
return null;
}return Clazz.new_([content.toString()],$I$(7,1).c$$S);
}, 1);

Clazz.newMeth(C$, 'parseFloat$S',  function (lexicalXSDFloat) {
return C$._parseFloat$CharSequence(lexicalXSDFloat);
});

Clazz.newMeth(C$, '_parseFloat$CharSequence',  function (_val) {
var s=$I$(6).trim$CharSequence(_val).toString();
if (s.equals$O("NaN")) {
return NaN;
}if (s.equals$O("INF")) {
return Infinity;
}if (s.equals$O("-INF")) {
return -Infinity;
}if (s.length$() == 0 || !C$.isDigitOrPeriodOrSign$C(s.charAt$I(0))  || !C$.isDigitOrPeriodOrSign$C(s.charAt$I(s.length$() - 1)) ) {
throw Clazz.new_(Clazz.load('NumberFormatException'));
}return Float.parseFloat$S(s);
}, 1);

Clazz.newMeth(C$, 'printFloat$F',  function (v) {
return C$._printFloat$F(v);
});

Clazz.newMeth(C$, '_printFloat$F',  function (v) {
if (Float.isNaN$F(v)) {
return "NaN";
}if (v == Infinity ) {
return "INF";
}if (v == -Infinity ) {
return "-INF";
}return String.valueOf$F(v);
}, 1);

Clazz.newMeth(C$, 'parseDouble$S',  function (lexicalXSDDouble) {
return C$._parseDouble$CharSequence(lexicalXSDDouble);
});

Clazz.newMeth(C$, '_parseDouble$CharSequence',  function (_val) {
var val=$I$(6).trim$CharSequence(_val).toString();
if (val.equals$O("NaN")) {
return NaN;
}if (val.equals$O("INF")) {
return Infinity;
}if (val.equals$O("-INF")) {
return -Infinity;
}if (val.length$() == 0 || !C$.isDigitOrPeriodOrSign$C(val.charAt$I(0))  || !C$.isDigitOrPeriodOrSign$C(val.charAt$I(val.length$() - 1)) ) {
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,[val]);
}return Double.parseDouble$S(val);
}, 1);

Clazz.newMeth(C$, 'parseBoolean$S',  function (lexicalXSDBoolean) {
var b=C$._parseBoolean$CharSequence(lexicalXSDBoolean);
return (b == null ) ? false : b.booleanValue$();
});

Clazz.newMeth(C$, '_parseBoolean$CharSequence',  function (literal) {
if (literal == null ) {
return null;
}var i=0;
var len=literal.length$();
var ch;
var value=false;
if (literal.length$() <= 0) {
return null;
}do {
ch=literal.charAt$I(i++);
} while ($I$(6).isWhiteSpace$C(ch) && i < len );
var strIndex=0;
switch (ch.$c()) {
case 49:
value=true;
break;
case 48:
value=false;
break;
case 116:
var strTrue="rue";
do {
ch=literal.charAt$I(i++);
} while ((strTrue.charAt$I(strIndex++) == ch) && i < len  && strIndex < 3 );
if (strIndex == 3) {
value=true;
} else {
return Boolean.valueOf$Z(false);
}break;
case 102:
var strFalse="alse";
do {
ch=literal.charAt$I(i++);
} while ((strFalse.charAt$I(strIndex++) == ch) && i < len  && strIndex < 4 );
if (strIndex == 4) {
value=false;
} else {
return Boolean.valueOf$Z(false);
}break;
}
if (i < len) {
do {
ch=literal.charAt$I(i++);
} while ($I$(6).isWhiteSpace$C(ch) && i < len );
}if (i == len) {
return Boolean.valueOf$Z(value);
} else {
return null;
}}, 1);

Clazz.newMeth(C$, 'printBoolean$Z',  function (val) {
return val ? "true" : "false";
});

Clazz.newMeth(C$, '_printBoolean$Z',  function (val) {
return val ? "true" : "false";
}, 1);

Clazz.newMeth(C$, 'parseByte$S',  function (lexicalXSDByte) {
return C$._parseByte$CharSequence(lexicalXSDByte);
});

Clazz.newMeth(C$, '_parseByte$CharSequence',  function (literal) {
return ($b$[0] = C$._parseInt$CharSequence(literal), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'printByte$B',  function (val) {
return C$._printByte$B(val);
});

Clazz.newMeth(C$, '_printByte$B',  function (val) {
return String.valueOf$I(val);
}, 1);

Clazz.newMeth(C$, 'parseQName$S$javax_xml_namespace_NamespaceContext',  function (lexicalXSDQName, nsc) {
return C$._parseQName$CharSequence$javax_xml_namespace_NamespaceContext(lexicalXSDQName, nsc);
});

Clazz.newMeth(C$, '_parseQName$CharSequence$javax_xml_namespace_NamespaceContext',  function (text, nsc) {
var length=text.length$();
var start=0;
while (start < length && $I$(6,"isWhiteSpace$C",[text.charAt$I(start)]) ){
++start;
}
var end=length;
while (end > start && $I$(6,"isWhiteSpace$C",[text.charAt$I(end - 1)]) ){
--end;
}
if (end == start) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["input is empty"]);
}var uri;
var localPart;
var prefix;
var idx=start + 1;
while (idx < end && text.charAt$I(idx) != ":" ){
++idx;
}
if (idx == end) {
uri=nsc.getNamespaceURI$S("");
localPart=text.subSequence$I$I(start, end).toString();
prefix="";
} else {
prefix=text.subSequence$I$I(start, idx).toString();
localPart=text.subSequence$I$I(idx + 1, end).toString();
uri=nsc.getNamespaceURI$S(prefix);
if (uri == null  || uri.length$() == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["prefix " + prefix + " is not bound to a namespace" ]);
}}return Clazz.new_($I$(8,1).c$$S$S$S,[uri, localPart, prefix]);
}, 1);

Clazz.newMeth(C$, 'parseDateTime$S',  function (lexicalXSDDateTime) {
return C$._parseDateTime$CharSequence(lexicalXSDDateTime);
});

Clazz.newMeth(C$, '_parseDateTime$CharSequence',  function (s) {
var val=$I$(6).trim$CharSequence(s).toString();
return C$.datatypeFactory.newXMLGregorianCalendar$S(val).toGregorianCalendar$();
}, 1);

Clazz.newMeth(C$, 'printDateTime$java_util_Calendar',  function (val) {
return C$._printDateTime$java_util_Calendar(val);
});

Clazz.newMeth(C$, '_printDateTime$java_util_Calendar',  function (val) {
return $I$(9).doFormat$S$java_util_Calendar("%Y-%M-%DT%h:%m:%s%z", val);
}, 1);

Clazz.newMeth(C$, 'parseBase64Binary$S',  function (lexicalXSDBase64Binary) {
return C$._parseBase64Binary$S(lexicalXSDBase64Binary);
});

Clazz.newMeth(C$, 'parseHexBinary$S',  function (s) {
var len=s.length$();
if (len % 2 != 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["hexBinary needs to be even-length: " + s]);
}var out=Clazz.array(Byte.TYPE, [(len/2|0)]);
for (var i=0; i < len; i+=2) {
var h=C$.hexToBin$C(s.charAt$I(i));
var l=C$.hexToBin$C(s.charAt$I(i + 1));
if (h == -1 || l == -1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["contains illegal character for hexBinary: " + s]);
}out[(i/2|0)]=((h * 16 + l)|0);
}
return out;
});

Clazz.newMeth(C$, 'hexToBin$C',  function (ch) {
if ("0" <= ch && ch <= "9" ) {
return ch.$c() - 48;
}if ("A" <= ch && ch <= "F" ) {
return ch.$c() - 65 + 10;
}if ("a" <= ch && ch <= "f" ) {
return ch.$c() - 97 + 10;
}return -1;
}, 1);

Clazz.newMeth(C$, 'printHexBinary$BA',  function (data) {
var r=Clazz.new_($I$(1,1).c$$I,[data.length * 2]);
for (var b, $b = 0, $$b = data; $b<$$b.length&&((b=($$b[$b])),1);$b++) {
r.append$C(C$.hexCode[(b >> 4) & 15]);
r.append$C(C$.hexCode[(b & 15)]);
}
return r.toString();
});

Clazz.newMeth(C$, 'parseUnsignedInt$S',  function (lexicalXSDUnsignedInt) {
return C$._parseLong$CharSequence(lexicalXSDUnsignedInt);
});

Clazz.newMeth(C$, 'printUnsignedInt$J',  function (val) {
return C$._printLong$J(val);
});

Clazz.newMeth(C$, 'parseUnsignedShort$S',  function (lexicalXSDUnsignedShort) {
return C$._parseInt$CharSequence(lexicalXSDUnsignedShort);
});

Clazz.newMeth(C$, 'parseTime$S',  function (lexicalXSDTime) {
return C$.datatypeFactory.newXMLGregorianCalendar$S(lexicalXSDTime).toGregorianCalendar$();
});

Clazz.newMeth(C$, 'printTime$java_util_Calendar',  function (val) {
return $I$(9).doFormat$S$java_util_Calendar("%h:%m:%s%z", val);
});

Clazz.newMeth(C$, 'parseDate$S',  function (lexicalXSDDate) {
return C$.datatypeFactory.newXMLGregorianCalendar$S(lexicalXSDDate).toGregorianCalendar$();
});

Clazz.newMeth(C$, 'printDate$java_util_Calendar',  function (val) {
return C$._printDate$java_util_Calendar(val);
});

Clazz.newMeth(C$, '_printDate$java_util_Calendar',  function (val) {
return $I$(9,"doFormat$S$java_util_Calendar",[(Clazz.new_($I$(1,1).c$$S,["%Y-%M-%D"]).append$S("%z")).toString(), val]);
}, 1);

Clazz.newMeth(C$, 'parseAnySimpleType$S',  function (lexicalXSDAnySimpleType) {
return lexicalXSDAnySimpleType;
});

Clazz.newMeth(C$, 'printString$S',  function (val) {
return val;
});

Clazz.newMeth(C$, 'printInt$I',  function (val) {
return C$._printInt$I(val);
});

Clazz.newMeth(C$, '_printInt$I',  function (val) {
return String.valueOf$I(val);
}, 1);

Clazz.newMeth(C$, 'printLong$J',  function (val) {
return C$._printLong$J(val);
});

Clazz.newMeth(C$, '_printLong$J',  function (val) {
return String.valueOf$J(val);
}, 1);

Clazz.newMeth(C$, 'printDecimal$java_math_BigDecimal',  function (val) {
return C$._printDecimal$java_math_BigDecimal(val);
});

Clazz.newMeth(C$, '_printDecimal$java_math_BigDecimal',  function (val) {
return val.toPlainString$();
}, 1);

Clazz.newMeth(C$, 'printDouble$D',  function (v) {
return C$._printDouble$D(v);
});

Clazz.newMeth(C$, '_printDouble$D',  function (v) {
if (Double.isNaN$D(v)) {
return "NaN";
}if (v == Infinity ) {
return "INF";
}if (v == -Infinity ) {
return "-INF";
}return String.valueOf$D(v);
}, 1);

Clazz.newMeth(C$, 'printQName$javax_xml_namespace_QName$javax_xml_namespace_NamespaceContext',  function (val, nsc) {
return C$._printQName$javax_xml_namespace_QName$javax_xml_namespace_NamespaceContext(val, nsc);
});

Clazz.newMeth(C$, '_printQName$javax_xml_namespace_QName$javax_xml_namespace_NamespaceContext',  function (val, nsc) {
var qname;
var prefix=nsc.getPrefix$S(val.getNamespaceURI$());
var localPart=val.getLocalPart$();
if (prefix == null  || prefix.length$() == 0 ) {
qname=localPart;
} else {
qname=prefix + ':' + localPart ;
}return qname;
}, 1);

Clazz.newMeth(C$, 'printBase64Binary$BA',  function (val) {
return C$._printBase64Binary$BA(val);
});

Clazz.newMeth(C$, 'printUnsignedShort$I',  function (val) {
return String.valueOf$I(val);
});

Clazz.newMeth(C$, 'printAnySimpleType$S',  function (val) {
return val;
});

Clazz.newMeth(C$, 'installHook$S',  function (s) {
$I$(10).setDatatypeConverter$javax_xml_bind_DatatypeConverterInterface(C$.theInstance);
return s;
}, 1);

Clazz.newMeth(C$, 'initDecodeMap$',  function () {
var map=Clazz.array(Byte.TYPE, [128]);
var i;
for (i=0; i < 128; i++) {
map[i]=(-1|0);
}
for (i="A".$c(); i <= 90 ; i++) {
map[i]=((i - 65)|0);
}
for (i="a".$c(); i <= 122 ; i++) {
map[i]=((i - 97 + 26)|0);
}
for (i="0".$c(); i <= 57 ; i++) {
map[i]=((i - 48 + 52)|0);
}
map[43]=(62|0);
map[47]=(63|0);
map[61]=127;
return map;
}, 1);

Clazz.newMeth(C$, 'guessLength$S',  function (text) {
var len=text.length$();
var j=len - 1;
for (; j >= 0; j--) {
var code=C$.decodeMap[(text.charCodeAt$I(j))];
if (code == 127) {
continue;
}if (code == -1) {
return (text.length$()/4|0) * 3;
}break;
}
++j;
var padSize=len - j;
if (padSize > 2) {
return (text.length$()/4|0) * 3;
}return (text.length$()/4|0) * 3 - padSize;
}, 1);

Clazz.newMeth(C$, '_parseBase64Binary$S',  function (text) {
var buflen=C$.guessLength$S(text);
var out=Clazz.array(Byte.TYPE, [buflen]);
var o=0;
var len=text.length$();
var i;
var quadruplet=Clazz.array(Byte.TYPE, [4]);
var q=0;
for (i=0; i < len; i++) {
var ch=text.charAt$I(i);
var v=C$.decodeMap[ch.$c()];
if (v != -1) {
quadruplet[q++]=v;
}if (q == 4) {
out[o++]=(((quadruplet[0] << 2) | (quadruplet[1] >> 4))|0);
if (quadruplet[2] != 127) {
out[o++]=(((quadruplet[1] << 4) | (quadruplet[2] >> 2))|0);
}if (quadruplet[3] != 127) {
out[o++]=(((quadruplet[2] << 6) | (quadruplet[3]))|0);
}q=0;
}}
if (buflen == o) {
return out;
}var nb=Clazz.array(Byte.TYPE, [o]);
System.arraycopy$O$I$O$I$I(out, 0, nb, 0, o);
return nb;
}, 1);

Clazz.newMeth(C$, 'initEncodeMap$',  function () {
var map=Clazz.array(Character.TYPE, [64]);
var i;
for (i=0; i < 26; i++) {
map[i]=String.fromCharCode((65 + i));
}
for (i=26; i < 52; i++) {
map[i]=String.fromCharCode((97 + (i - 26)));
}
for (i=52; i < 62; i++) {
map[i]=String.fromCharCode((48 + (i - 52)));
}
map[62]="+";
map[63]="/";
return map;
}, 1);

Clazz.newMeth(C$, 'encode$I',  function (i) {
return C$.encodeMap[i & 63];
}, 1);

Clazz.newMeth(C$, 'encodeByte$I',  function (i) {
return ($b$[0] = C$.encodeMap[i & 63].$c(), $b$[0]);
}, 1);

Clazz.newMeth(C$, '_printBase64Binary$BA',  function (input) {
return C$._printBase64Binary$BA$I$I(input, 0, input.length);
}, 1);

Clazz.newMeth(C$, '_printBase64Binary$BA$I$I',  function (input, offset, len) {
var buf=Clazz.array(Character.TYPE, [(((len + 2)/3|0)) * 4]);
var ptr=C$._printBase64Binary$BA$I$I$CA$I(input, offset, len, buf, 0);
Clazz.assert(C$, this, function(){return ptr == buf.length});
return  String.instantialize(buf);
}, 1);

Clazz.newMeth(C$, '_printBase64Binary$BA$I$I$CA$I',  function (input, offset, len, buf, ptr) {
var remaining=len;
var i;
for (i=offset; remaining >= 3; remaining-=3, i+=3) {
buf[ptr++]=C$.encode$I(input[i] >> 2);
buf[ptr++]=C$.encode$I(((input[i] & 3) << 4) | ((input[i + 1] >> 4) & 15));
buf[ptr++]=C$.encode$I(((input[i + 1] & 15) << 2) | ((input[i + 2] >> 6) & 3));
buf[ptr++]=C$.encode$I(input[i + 2] & 63);
}
if (remaining == 1) {
buf[ptr++]=C$.encode$I(input[i] >> 2);
buf[ptr++]=C$.encode$I(((input[i]) & 3) << 4);
buf[ptr++]="=";
buf[ptr++]="=";
}if (remaining == 2) {
buf[ptr++]=C$.encode$I(input[i] >> 2);
buf[ptr++]=C$.encode$I(((input[i] & 3) << 4) | ((input[i + 1] >> 4) & 15));
buf[ptr++]=C$.encode$I((input[i + 1] & 15) << 2);
buf[ptr++]="=";
}return ptr;
}, 1);

Clazz.newMeth(C$, '_printBase64Binary$BA$I$I$BA$I',  function (input, offset, len, out, ptr) {
var buf=out;
var remaining=len;
var i;
for (i=offset; remaining >= 3; remaining-=3, i+=3) {
buf[ptr++]=C$.encodeByte$I(input[i] >> 2);
buf[ptr++]=C$.encodeByte$I(((input[i] & 3) << 4) | ((input[i + 1] >> 4) & 15));
buf[ptr++]=C$.encodeByte$I(((input[i + 1] & 15) << 2) | ((input[i + 2] >> 6) & 3));
buf[ptr++]=C$.encodeByte$I(input[i + 2] & 63);
}
if (remaining == 1) {
buf[ptr++]=C$.encodeByte$I(input[i] >> 2);
buf[ptr++]=C$.encodeByte$I(((input[i]) & 3) << 4);
buf[ptr++]=("=".$c()|0);
buf[ptr++]=("=".$c()|0);
}if (remaining == 2) {
buf[ptr++]=C$.encodeByte$I(input[i] >> 2);
buf[ptr++]=C$.encodeByte$I(((input[i] & 3) << 4) | ((input[i + 1] >> 4) & 15));
buf[ptr++]=C$.encodeByte$I((input[i + 1] & 15) << 2);
buf[ptr++]=("=".$c()|0);
}return ptr;
}, 1);

Clazz.newMeth(C$, 'removeOptionalPlus$CharSequence',  function (s) {
var len=s.length$();
if (len <= 1 || s.charAt$I(0) != "+" ) {
return s;
}s=s.subSequence$I$I(1, len);
var ch=s.charAt$I(0);
if ("0" <= ch && ch <= "9" ) {
return s;
}if ("." == ch) {
return s;
}throw Clazz.new_(Clazz.load('NumberFormatException'));
}, 1);

Clazz.newMeth(C$, 'isDigitOrPeriodOrSign$C',  function (ch) {
if ("0" <= ch && ch <= "9" ) {
return true;
}if (ch == "+" || ch == "-"  || ch == "." ) {
return true;
}return false;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.theInstance=Clazz.new_(C$);
C$.hexCode="0123456789ABCDEF".toCharArray$();
C$.decodeMap=C$.initDecodeMap$();
C$.encodeMap=C$.initEncodeMap$();
{
try {
C$.datatypeFactory=$I$(3).newInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.datatype.DatatypeConfigurationException")){
throw Clazz.new_($I$(4,1).c$$Throwable,[e]);
} else {
throw e;
}
}
};
};
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DatatypeConverterImpl, "CalendarFormatter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'doFormat$S$java_util_Calendar',  function (format, cal) {
var fidx=0;
var flen=format.length$();
var buf=Clazz.new_($I$(1,1));
while (fidx < flen){
var fch=format.charAt$I(fidx++);
if (fch != "%") {
buf.append$C(fch);
continue;
}switch ((format.charCodeAt$I(fidx++))) {
case 89:
C$.formatYear$java_util_Calendar$StringBuilder(cal, buf);
break;
case 77:
C$.formatMonth$java_util_Calendar$StringBuilder(cal, buf);
break;
case 68:
C$.formatDays$java_util_Calendar$StringBuilder(cal, buf);
break;
case 104:
C$.formatHours$java_util_Calendar$StringBuilder(cal, buf);
break;
case 109:
C$.formatMinutes$java_util_Calendar$StringBuilder(cal, buf);
break;
case 115:
C$.formatSeconds$java_util_Calendar$StringBuilder(cal, buf);
break;
case 122:
C$.formatTimeZone$java_util_Calendar$StringBuilder(cal, buf);
break;
default:
throw Clazz.new_($I$(2,1));
}
}
return buf.toString();
}, 1);

Clazz.newMeth(C$, 'formatYear$java_util_Calendar$StringBuilder',  function (cal, buf) {
var year=cal.get$I(1);
var s;
if (year <= 0) {
s=Integer.toString$I(1 - year);
} else {
s=Integer.toString$I(year);
}while (s.length$() < 4){
s='0' + s;
}
if (year <= 0) {
s='-' + s;
}buf.append$S(s);
}, 1);

Clazz.newMeth(C$, 'formatMonth$java_util_Calendar$StringBuilder',  function (cal, buf) {
C$.formatTwoDigits$I$StringBuilder(cal.get$I(2) + 1, buf);
}, 1);

Clazz.newMeth(C$, 'formatDays$java_util_Calendar$StringBuilder',  function (cal, buf) {
C$.formatTwoDigits$I$StringBuilder(cal.get$I(5), buf);
}, 1);

Clazz.newMeth(C$, 'formatHours$java_util_Calendar$StringBuilder',  function (cal, buf) {
C$.formatTwoDigits$I$StringBuilder(cal.get$I(11), buf);
}, 1);

Clazz.newMeth(C$, 'formatMinutes$java_util_Calendar$StringBuilder',  function (cal, buf) {
C$.formatTwoDigits$I$StringBuilder(cal.get$I(12), buf);
}, 1);

Clazz.newMeth(C$, 'formatSeconds$java_util_Calendar$StringBuilder',  function (cal, buf) {
C$.formatTwoDigits$I$StringBuilder(cal.get$I(13), buf);
if (cal.isSet$I(14)) {
var n=cal.get$I(14);
if (n != 0) {
var ms=Integer.toString$I(n);
while (ms.length$() < 3){
ms='0' + ms;
}
buf.append$C(".");
buf.append$S(ms);
}}}, 1);

Clazz.newMeth(C$, 'formatTimeZone$java_util_Calendar$StringBuilder',  function (cal, buf) {
var tz=cal.getTimeZone$();
if (tz == null ) {
return;
}var offset=tz.getOffset$J(cal.getTime$().getTime$());
if (offset == 0) {
buf.append$C("Z");
return;
}if (offset >= 0) {
buf.append$C("+");
} else {
buf.append$C("-");
offset*=-1;
}offset=(offset/(60000)|0);
C$.formatTwoDigits$I$StringBuilder((offset/60|0), buf);
buf.append$C(":");
C$.formatTwoDigits$I$StringBuilder(offset % 60, buf);
}, 1);

Clazz.newMeth(C$, 'formatTwoDigits$I$StringBuilder',  function (n, buf) {
if (n < 10) {
buf.append$C("0");
}buf.append$I(n);
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:32 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
