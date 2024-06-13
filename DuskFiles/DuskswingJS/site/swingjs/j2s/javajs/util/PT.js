(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'javajs.util.DF','javajs.util.SB','java.util.Arrays','javajs.util.AU','java.lang.reflect.Array']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PT");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['tensScaleD','double[]','+decimalScaleD','tensScale','float[]','+decimalScale']]]

Clazz.newMeth(C$, 'parseInt$S',  function (str) {
return C$.parseIntNext$S$IA(str, Clazz.array(Integer.TYPE, -1, [0]));
}, 1);

Clazz.newMeth(C$, 'parseIntNext$S$IA',  function (str, next) {
var cch=str.length$();
if (next[0] < 0 || next[0] >= cch ) return -2147483648;
return C$.parseIntChecked$S$I$IA(str, cch, next);
}, 1);

Clazz.newMeth(C$, 'parseIntChecked$S$I$IA',  function (str, ichMax, next) {
var digitSeen=false;
var value=0;
var ich=next[0];
if (ich < 0) return -2147483648;
var ch;
while (ich < ichMax && C$.isWhiteSpace$S$I(str, ich) )++ich;

var negative=false;
if (ich < ichMax && (str.charCodeAt$I(ich)) == 45  ) {
negative=true;
++ich;
}while (ich < ichMax && (ch=str.charAt$I(ich).$c()) >= 48  && ch <= 57 ){
value=value * 10 + (ch - 48);
digitSeen=true;
++ich;
}
if (!digitSeen) value=-2147483648;
 else if (negative) value=-value;
next[0]=ich;
return value;
}, 1);

Clazz.newMeth(C$, 'isWhiteSpace$S$I',  function (str, ich) {
var ch;
return (ich >= 0 && ((ch=str.charAt$I(ich)) == " " || ch == "\t"  || ch == "\n" ) );
}, 1);

Clazz.newMeth(C$, 'checkTrailingText$S$I$I',  function (str, ich, ichMax) {
var ch;
while (ich < ichMax && (C$.isWhitespace$C(ch=str.charAt$I(ich)) || ch == ";" ) )++ich;

return (ich == ichMax);
}, 1);

Clazz.newMeth(C$, 'parseIntRadix$S$I',  function (s, i) {
return Integer.parseInt$S$I(s, i);
}, 1);

Clazz.newMeth(C$, 'getTokens$S',  function (line) {
return C$.getTokensAt$S$I(line, 0);
}, 1);

Clazz.newMeth(C$, 'parseToken$S',  function (str) {
return C$.parseTokenNext$S$IA(str, Clazz.array(Integer.TYPE, -1, [0]));
}, 1);

Clazz.newMeth(C$, 'parseTrimmed$S',  function (str) {
return C$.parseTrimmedRange$S$I$I(str, 0, str.length$());
}, 1);

Clazz.newMeth(C$, 'parseTrimmedAt$S$I',  function (str, ichStart) {
return C$.parseTrimmedRange$S$I$I(str, ichStart, str.length$());
}, 1);

Clazz.newMeth(C$, 'parseTrimmedRange$S$I$I',  function (str, ichStart, ichMax) {
var cch=str.length$();
if (ichMax < cch) cch=ichMax;
if (cch < ichStart) return "";
return C$.parseTrimmedChecked$S$I$I(str, ichStart, cch);
}, 1);

Clazz.newMeth(C$, 'getTokensAt$S$I',  function (line, ich) {
if (line == null ) return null;
var cchLine=line.length$();
if (ich < 0 || ich > cchLine ) return null;
var tokenCount=C$.countTokens$S$I(line, ich);
var tokens=Clazz.array(String, [tokenCount]);
var next=Clazz.array(Integer.TYPE, [1]);
next[0]=ich;
for (var i=0; i < tokenCount; ++i) tokens[i]=C$.parseTokenChecked$S$I$IA(line, cchLine, next);

return tokens;
}, 1);

Clazz.newMeth(C$, 'countChar$S$C',  function (line, c) {
var n=0;
for (var i=line.lastIndexOf$I(c) + 1; --i >= 0; ) if (line.charAt$I(i) == c) ++n;

return n;
}, 1);

Clazz.newMeth(C$, 'countTokens$S$I',  function (line, ich) {
var tokenCount=0;
if (line != null ) {
var ichMax=line.length$();
while (true){
while (ich < ichMax && C$.isWhiteSpace$S$I(line, ich) )++ich;

if (ich == ichMax) break;
++tokenCount;
do {
++ich;
} while (ich < ichMax && !C$.isWhiteSpace$S$I(line, ich) );
}
}return tokenCount;
}, 1);

Clazz.newMeth(C$, 'parseTokenNext$S$IA',  function (str, next) {
var cch=str.length$();
return (next[0] < 0 || next[0] >= cch  ? null : C$.parseTokenChecked$S$I$IA(str, cch, next));
}, 1);

Clazz.newMeth(C$, 'parseTokenRange$S$I$IA',  function (str, ichMax, next) {
var cch=str.length$();
if (ichMax > cch) ichMax=cch;
return (next[0] < 0 || next[0] >= ichMax  ? null : C$.parseTokenChecked$S$I$IA(str, ichMax, next));
}, 1);

Clazz.newMeth(C$, 'parseTokenChecked$S$I$IA',  function (str, ichMax, next) {
var ich=next[0];
while (ich < ichMax && C$.isWhiteSpace$S$I(str, ich) )++ich;

var ichNonWhite=ich;
while (ich < ichMax && !C$.isWhiteSpace$S$I(str, ich) )++ich;

next[0]=ich;
return (ichNonWhite == ich ? null : str.substring$I$I(ichNonWhite, ich));
}, 1);

Clazz.newMeth(C$, 'parseTrimmedChecked$S$I$I',  function (str, ich, ichMax) {
while (ich < ichMax && C$.isWhiteSpace$S$I(str, ich) )++ich;

var ichLast=ichMax - 1;
while (ichLast >= ich && C$.isWhiteSpace$S$I(str, ichLast) )--ichLast;

return (ichLast < ich ? "" : str.substring$I$I(ich, ichLast + 1));
}, 1);

Clazz.newMeth(C$, 'parseIntRange$S$I$IA',  function (str, ichMax, next) {
var cch=str.length$();
if (ichMax > cch) ichMax=cch;
return (next[0] < 0 || next[0] >= ichMax  ? -2147483648 : C$.parseIntChecked$S$I$IA(str, ichMax, next));
}, 1);

Clazz.newMeth(C$, 'split$S$S',  function (text, run) {
if (text.length$() == 0) return Clazz.array(String, [0]);
var n=1;
var i=text.indexOf$S(run);
var lines;
var runLen=run.length$();
if (i < 0 || runLen == 0 ) {
lines=Clazz.array(String, [1]);
lines[0]=text;
return lines;
}var len=text.length$() - runLen;
for (; i >= 0 && i < len ; n++) i=text.indexOf$S$I(run, i + runLen);

lines=Clazz.array(String, [n]);
i=0;
var ipt=0;
var pt=0;
for (; (ipt=text.indexOf$S$I(run, i)) >= 0 && pt + 1 < n ; ) {
lines[pt++]=text.substring$I$I(i, ipt);
i=ipt + runLen;
}
if (text.indexOf$S$I(run, len) != len) len+=runLen;
lines[pt]=text.substring$I$I(i, len);
return lines;
}, 1);

Clazz.newMeth(C$, 'getQuotedStringAt$S$I',  function (line, ipt0) {
var next=Clazz.array(Integer.TYPE, -1, [ipt0]);
return C$.getQuotedStringNext$S$IA(line, next);
}, 1);

Clazz.newMeth(C$, 'getQuotedStringNext$S$IA',  function (line, next) {
var i=next[0];
if (i < 0 || (i=line.indexOf$S$I("\"", i)) < 0 ) return "";
var pt=i + 1;
var len=line.length$();
while (++i < len && line.charAt$I(i) != "\"" )if (line.charAt$I(i) == "\\") ++i;

next[0]=i + 1;
return line.substring$I$I(pt, i);
}, 1);

Clazz.newMeth(C$, 'getQuotedOrUnquotedAttribute$S$S',  function (line, key) {
if (line == null  || key == null  ) return null;
var pt=line.toLowerCase$().indexOf$S(key.toLowerCase$() + "=");
if (pt < 0 || (pt=pt + key.length$() + 1 ) >= line.length$() ) return "";
var c=line.charAt$I(pt);
switch (c.$c()) {
case 39:
case 34:
++pt;
break;
default:
c=" ";
line+=" ";
}
var pt1=line.indexOf$I$I(c, pt);
return (pt1 < 0 ? null : line.substring$I$I(pt, pt1));
}, 1);

Clazz.newMeth(C$, 'getCSVString$S$IA',  function (line, next) {
var i=next[1];
if (i < 0 || (i=line.indexOf$S$I("\"", i)) < 0 ) return null;
var pt=next[0]=i;
var len=line.length$();
var escaped=false;
var haveEscape=false;
while (++i < len && (line.charAt$I(i) != "\"" || (escaped=(i + 1 < len && line.charAt$I(i + 1) == "\"" )) ) )if (escaped) {
escaped=false;
haveEscape=true;
++i;
}
if (i >= len) {
next[1]=-1;
return null;
}next[1]=i + 1;
var s=line.substring$I$I(pt + 1, i);
return (haveEscape ? C$.rep$S$S$S(C$.rep$S$S$S(s, "\"\"", "\u0000"), "\u0000", "\"") : s);
}, 1);

Clazz.newMeth(C$, 'isOneOf$S$S',  function (key, semiList) {
if (semiList.length$() == 0) return false;
if (semiList.charAt$I(0) != ";") semiList=";" + semiList + ";" ;
return key.indexOf$S(";") < 0 && semiList.indexOf$S(';' + key + ';' ) >= 0 ;
}, 1);

Clazz.newMeth(C$, 'getQuotedAttribute$S$S',  function (info, name) {
var i=info.indexOf$S(name + "=");
return (i < 0 ? null : C$.getQuotedStringAt$S$I(info, i));
}, 1);

Clazz.newMeth(C$, 'approxD$D$D',  function (f, n) {
f=Math.round$D(f * n) / n;
return (f == 0  ? 0 : f);
}, 1);

Clazz.newMeth(C$, 'rep$S$S$S',  function (str, strFrom, strTo) {
if (str == null  || strFrom.length$() == 0  || str.indexOf$S(strFrom) < 0 ) return str;
var isOnce=(strTo.indexOf$S(strFrom) >= 0);
do {
str=str.replace$CharSequence$CharSequence(strFrom, strTo);
} while (!isOnce && str.indexOf$S(strFrom) >= 0 );
return str;
}, 1);

Clazz.newMeth(C$, 'formatD$D$I$I$Z$Z',  function (value, width, precision, alignLeft, zeroPad) {
return C$.formatS$S$I$I$Z$Z($I$(1).formatDecimal$D$I(value, precision), width, 0, alignLeft, zeroPad);
}, 1);

Clazz.newMeth(C$, 'formatD$D$I$I$Z$Z$Z',  function (value, width, precision, alignLeft, zeroPad, allowOverflow) {
return C$.formatS$S$I$I$Z$Z($I$(1).formatDecimal$D$I(value, -1 - precision), width, 0, alignLeft, zeroPad);
}, 1);

Clazz.newMeth(C$, 'formatS$S$I$I$Z$Z',  function (value, width, precision, alignLeft, zeroPad) {
if (value == null ) return "";
var len=value.length$();
if (precision != 2147483647 && precision > 0  && precision < len ) value=value.substring$I$I(0, precision);
 else if (precision < 0 && len + precision >= 0 ) value=value.substring$I(len + precision + 1 );
var padLength=width - value.length$();
if (padLength <= 0) return value;
var isNeg=(zeroPad && !alignLeft && value.charAt$I(0) == "-"  );
var padChar=(zeroPad ? "0" : " ");
var padChar0=(isNeg ? "-" : padChar);
var sb=Clazz.new_($I$(2,1));
if (alignLeft) sb.append$S(value);
sb.appendC$C(padChar0);
for (var i=padLength; --i > 0; ) sb.appendC$C(padChar);

if (!alignLeft) sb.append$S(isNeg ? padChar + value.substring$I(1) : value);
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'replaceWithCharacter$S$S$C',  function (str, strFrom, chTo) {
if (str == null ) return null;
for (var i=strFrom.length$(); --i >= 0; ) str=str.replace$C$C(strFrom.charAt$I(i), chTo);

return str;
}, 1);

Clazz.newMeth(C$, 'replaceAllCharacters$S$S$S',  function (str, strFrom, strTo) {
for (var i=strFrom.length$(); --i >= 0; ) {
var chFrom=strFrom.substring$I$I(i, i + 1);
str=C$.rep$S$S$S(str, chFrom, strTo);
}
return str;
}, 1);

Clazz.newMeth(C$, 'trim$S$S',  function (str, chars) {
if (str == null  || str.length$() == 0 ) return str;
if (chars.length$() == 0) return str.trim$();
var len=str.length$();
var k=0;
while (k < len && chars.indexOf$I(str.charAt$I(k)) >= 0 )++k;

var m=str.length$() - 1;
while (m > k && chars.indexOf$I(str.charAt$I(m)) >= 0 )--m;

return str.substring$I$I(k, m + 1);
}, 1);

Clazz.newMeth(C$, 'trimQuotes$S',  function (value) {
return (value != null  && value.length$() > 1  && value.startsWith$S("\"")  && value.endsWith$S("\"")  ? value.substring$I$I(1, value.length$() - 1) : value);
}, 1);

Clazz.newMeth(C$, 'isNonStringPrimitive$O',  function (info) {
{
if(typeof info == "number" || typeof info == "boolean") { return true;
}
}
return Clazz.instanceOf(info, "java.lang.Number") || Clazz.instanceOf(info, "java.lang.Boolean") ;
}, 1);

Clazz.newMeth(C$, 'toJSON$S$O',  function (infoType, info) {
if (info == null ) return C$.packageJSON$S$S(infoType, null);
if (C$.isNonStringPrimitive$O(info)) return C$.packageJSON$S$S(infoType, info.toString());
var s=null;
var sb=null;
while (true){
if (Clazz.instanceOf(info, "java.lang.String")) {
s=info;
if (s.indexOf$S("{\"") != 0) {
s=C$.esc$S(s);
}break;
}if (Clazz.instanceOf(info, "javajs.api.JSONEncodable")) {
if ((s=(info).toJSON$()) == null ) s="null";
break;
}sb=Clazz.new_($I$(2,1));
if (Clazz.instanceOf(info, "java.util.Map")) {
sb.append$S("{ ");
var sep="";
var keys=(info).keySet$();
var okeys=keys.toArray$();
$I$(3).sort$OA(okeys);
for (var i=0, n=okeys.length; i < n; i++) {
var key=okeys[i].toString();
if (key == null ) key="null";
sb.append$S(sep).append$S(C$.packageJSON$S$S(key, C$.toJSON$S$O(null, (info).get$O(okeys[i]))));
sep=",";
}
sb.append$S(" }");
break;
}if (Clazz.instanceOf(info, "javajs.util.Lst")) {
sb.append$S("[ ");
var n=(info).size$();
for (var i=0; i < n; i++) {
if (i > 0) sb.appendC$C(",");
sb.append$S(C$.toJSON$S$O(null, (info).get$I(i)));
}
sb.append$S(" ]");
break;
}s=C$.nonArrayString$O(info);
if (s == null ) {
sb.append$S("[");
var n=$I$(4).getLength$O(info);
var o=null;
{
o = info[0];
typeof o != "number" && typeof 0 != "boolean" && (o = null);
}
if (o != null ) {
sb.appendO$O(info);
} else {
for (var i=0; i < n; i++) {
if (i > 0) sb.appendC$C(",");
sb.append$S(C$.toJSON$S$O(null, $I$(5).get$O$I(info, i)));
}
}sb.append$S("]");
break;
}info=info.toString();
}
return C$.packageJSON$S$S(infoType, (s == null  ? sb.toString() : s));
}, 1);

Clazz.newMeth(C$, 'nonArrayString$O',  function (x) {
{
return (x.constructor == Array || x.BYTES_PER_ELEMENT ? null : x.toString());
}
}, 1);

Clazz.newMeth(C$, 'byteArrayToJSON$BA',  function (data) {
var sb=Clazz.new_($I$(2,1));
sb.append$S("[");
var n=data.length;
for (var i=0; i < n; i++) {
if (i > 0) sb.appendC$C(",");
sb.appendI$I(data[i] & 255);
}
sb.append$S("]");
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'packageJSON$S$S',  function (infoType, info) {
return (infoType == null  ? info : "\"" + infoType + "\": " + info );
}, 1);

Clazz.newMeth(C$, 'escapeUrl$S',  function (url) {
url=C$.rep$S$S$S(url, "\n", "");
url=C$.rep$S$S$S(url, "%", "%25");
url=C$.rep$S$S$S(url, "#", "%23");
url=C$.rep$S$S$S(url, "[", "%5B");
url=C$.rep$S$S$S(url, "\\", "%5C");
url=C$.rep$S$S$S(url, "]", "%5D");
url=C$.rep$S$S$S(url, " ", "%20");
return url;
}, 1);

Clazz.newMeth(C$, 'esc$S',  function (str) {
if (str == null  || str.length$() == 0 ) return "\"\"";
var haveEscape=false;
var i=0;
for (; i < "\\\\\tt\rr\nn\"\"".length$(); i+=2) if (str.indexOf$I("\\\\\tt\rr\nn\"\"".charAt$I(i)) >= 0) {
haveEscape=true;
break;
}
if (haveEscape) while (i < "\\\\\tt\rr\nn\"\"".length$()){
var pt=-1;
var ch="\\\\\tt\rr\nn\"\"".charAt$I(i++);
var ch2="\\\\\tt\rr\nn\"\"".charAt$I(i++);
var sb=Clazz.new_($I$(2,1));
var pt0=0;
while ((pt=str.indexOf$I$I(ch, pt + 1)) >= 0){
sb.append$S(str.substring$I$I(pt0, pt)).appendC$C("\\").appendC$C(ch2);
pt0=pt + 1;
}
sb.append$S(str.substring$I$I(pt0, str.length$()));
str=sb.toString();
}
return "\"" + C$.escUnicode$S(str) + "\"" ;
}, 1);

Clazz.newMeth(C$, 'escUnicode$S',  function (str) {
for (var i=str.length$(); --i >= 0; ) if ((str.charCodeAt$I(i)) > 127 ) {
var s="0000" + Integer.toHexString$I(str.charAt$I(i).$c());
str=str.substring$I$I(0, i) + "\\u" + s.substring$I(s.length$() - 4) + str.substring$I(i + 1) ;
}
return str;
}, 1);

Clazz.newMeth(C$, 'escD$D',  function (f) {
var sf="" + new Double(f).toString();
{
if (sf.indexOf(".") < 0 && sf.indexOf("e") < 0 && sf.indexOf("N") < 0 && sf.indexOf("n") < 0) sf += ".0";
}
return sf;
}, 1);

Clazz.newMeth(C$, 'join$SA$C$I',  function (s, c, i0) {
if (s.length < i0) return null;
var sb=Clazz.new_($I$(2,1));
sb.append$S(s[i0++]);
for (var i=i0; i < s.length; i++) sb.appendC$C(c).append$S(s[i]);

return sb.toString();
}, 1);

Clazz.newMeth(C$, 'isLike$S$S',  function (a, b) {
var areEqual=a.equals$O(b);
if (areEqual) return true;
var isStart=b.startsWith$S("*");
var isEnd=b.endsWith$S("*");
return (!isStart && !isEnd ) ? areEqual : isStart && isEnd  ? b.length$() == 1 || a.contains$CharSequence(b.substring$I$I(1, b.length$() - 1))  : isStart ? a.endsWith$S(b.substring$I(1)) : a.startsWith$S(b.substring$I$I(0, b.length$() - 1));
}, 1);

Clazz.newMeth(C$, 'leftJustify$javajs_util_SB$S$S',  function (s, s1, s2) {
s.append$S(s2);
var n=s1.length$() - s2.length$();
if (n > 0) s.append$S(s1.substring$I$I(0, n));
}, 1);

Clazz.newMeth(C$, 'rightJustify$javajs_util_SB$S$S',  function (s, s1, s2) {
var n=s1.length$() - s2.length$();
if (n > 0) s.append$S(s1.substring$I$I(0, n));
s.append$S(s2);
}, 1);

Clazz.newMeth(C$, 'isWild$S',  function (s) {
return s != null  && (s.indexOf$S("*") >= 0 || s.indexOf$S("?") >= 0 ) ;
}, 1);

Clazz.newMeth(C$, 'isMatch$S$S$Z$Z',  function (search, match, checkStar, allowInitialStar) {
if (search.equals$O(match)) return true;
var mLen=match.length$();
if (mLen == 0) return false;
var isStar0=(checkStar && allowInitialStar  ? match.charAt$I(0) == "*" : false);
if (mLen == 1 && isStar0 ) return true;
var isStar1=(checkStar && match.endsWith$S("*") );
var haveQ=(match.indexOf$I("?") >= 0);
if (!haveQ) {
if (isStar0) return (isStar1 ? (mLen < 3 || search.indexOf$S(match.substring$I$I(1, mLen - 1)) >= 0 ) : search.endsWith$S(match.substring$I(1)));
 else if (isStar1) return search.startsWith$S(match.substring$I$I(0, mLen - 1));
}var sLen=search.length$();
var qqqq="????";
var nq=4;
while (nq < sLen){
qqqq+=qqqq;
nq+=4;
}
if (checkStar) {
if (isStar0) {
match=qqqq + match.substring$I(1);
mLen+=nq - 1;
}if (isStar1) {
match=match.substring$I$I(0, mLen - 1) + qqqq;
mLen+=nq - 1;
}}if (mLen < sLen) return false;
var ich=0;
while (mLen > sLen){
if (allowInitialStar && match.charAt$I(ich) == "?" ) {
++ich;
} else if (match.charAt$I(ich + mLen - 1) != "?") {
return false;
}--mLen;
}
for (var i=sLen; --i >= 0; ) {
var chm=match.charAt$I(ich + i);
if (chm == "?") continue;
var chs=search.charAt$I(i);
if (chm != chs && (chm != "\u0001" || chs != "?" ) ) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'replaceQuotedStrings$S$javajs_util_Lst$javajs_util_Lst',  function (s, list, newList) {
var n=list.size$();
for (var i=0; i < n; i++) {
var name=list.get$I(i);
var newName=newList.get$I(i);
if (!newName.equals$O(name)) s=C$.rep$S$S$S(s, "\"" + name + "\"" , "\"" + newName + "\"" );
}
return s;
}, 1);

Clazz.newMeth(C$, 'replaceStrings$S$javajs_util_Lst$javajs_util_Lst',  function (s, list, newList) {
var n=list.size$();
for (var i=0; i < n; i++) {
var name=list.get$I(i);
var newName=newList.get$I(i);
if (!newName.equals$O(name)) s=C$.rep$S$S$S(s, name, newName);
}
return s;
}, 1);

Clazz.newMeth(C$, 'isDigit$C',  function (ch) {
var c=ch.$c();
return (48 <= c && c <= 57 );
}, 1);

Clazz.newMeth(C$, 'isUpperCase$C',  function (ch) {
var c=ch.$c();
return (65 <= c && c <= 90 );
}, 1);

Clazz.newMeth(C$, 'isLowerCase$C',  function (ch) {
var c=ch.$c();
return (97 <= c && c <= 122 );
}, 1);

Clazz.newMeth(C$, 'isLetter$C',  function (ch) {
var c=ch.$c();
return (65 <= c && c <= 90  || 97 <= c && c <= 122  );
}, 1);

Clazz.newMeth(C$, 'isLetterOrDigit$C',  function (ch) {
var c=ch.$c();
return (65 <= c && c <= 90  || 97 <= c && c <= 122   || 48 <= c && c <= 57  );
}, 1);

Clazz.newMeth(C$, 'isWhitespace$C',  function (ch) {
var c=ch.$c();
return (c >= 28 && c <= 32  || c >= 9 && c <= 13  );
}, 1);

Clazz.newMeth(C$, 'getMapValueNoCase$java_util_Map$S',  function (h, key) {
if ("this".equals$O(key)) return h;
var val=h.get$O(key);
if (val == null ) for (var e, $e = h.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) if (e.getKey$().equalsIgnoreCase$S(key)) return e.getValue$();

return val;
}, 1);

Clazz.newMeth(C$, 'clean$S',  function (s) {
return C$.rep$S$S$S(C$.replaceAllCharacters$S$S$S(s, " \t\n\r", " "), "  ", " ").trim$();
}, 1);

Clazz.newMeth(C$, 'formatString$S$S$S$F$D$Z',  function (strFormat, key, strT, floatT, doubleT, doOne) {
if (strFormat == null ) return null;
if ("".equals$O(strFormat)) return "";
var len=key.length$();
if (strFormat.indexOf$S("%") < 0 || len == 0  || strFormat.indexOf$S(key) < 0 ) return strFormat;
var strLabel="";
var ich;
var ichPercent;
var ichKey;
for (ich=0; (ichPercent=strFormat.indexOf$I$I("%", ich)) >= 0 && (ichKey=strFormat.indexOf$S$I(key, ichPercent + 1)) >= 0 ; ) {
if (ich != ichPercent) strLabel+=strFormat.substring$I$I(ich, ichPercent);
ich=ichPercent + 1;
if (ichKey > ichPercent + 6) {
strLabel+="%";
continue;
}try {
var alignLeft=false;
if (strFormat.charAt$I(ich) == "-") {
alignLeft=true;
++ich;
}var zeroPad=false;
if (strFormat.charAt$I(ich) == "0") {
zeroPad=true;
++ich;
}var ch;
var width=0;
while ((ch=strFormat.charAt$I(ich)) >= "0" && (ch <= "9") ){
width=(10 * width) + (ch.$c() - 48);
++ich;
}
var precision=2147483647;
var isExponential=false;
if (strFormat.charAt$I(ich) == ".") {
++ich;
if ((ch=strFormat.charAt$I(ich)) == "-") {
isExponential=true;
++ich;
}if ((ch=strFormat.charAt$I(ich)) >= "0" && ch <= "9" ) {
precision=ch.$c() - 48;
++ich;
if ((ch=strFormat.charAt$I(ich)) >= "0" && ch <= "9" ) {
precision=10 * precision + (ch.$c() - 48);
++ich;
}}if (isExponential) precision=-precision;
}var st=strFormat.substring$I$I(ich, ich + len);
if (!st.equals$O(key)) {
ich=ichPercent + 1;
strLabel+="%";
continue;
}ich+=len;
if (!Float.isNaN$F(floatT)) strLabel+=C$.formatD$D$I$I$Z$Z(floatT, width, (st.equals$O("f") || st.equals$O("p")  ? precision : -1 - precision), alignLeft, zeroPad);
 else if (strT != null ) strLabel+=C$.formatS$S$I$I$Z$Z(strT, width, precision < 0 ? precision - 1 : precision, alignLeft, zeroPad);
 else if (!Double.isNaN$D(doubleT)) strLabel+=C$.formatD$D$I$I$Z$Z$Z(doubleT, width, (st.equals$O("e") || st.equals$O("P")  ? precision : -1 - precision), alignLeft, zeroPad, true);
if (doOne) break;
} catch (ioobe) {
if (Clazz.exceptionOf(ioobe,"IndexOutOfBoundsException")){
ich=ichPercent;
break;
} else {
throw ioobe;
}
}
}
strLabel+=strFormat.substring$I(ich);
return strLabel;
}, 1);

Clazz.newMeth(C$, 'formatStringS$S$S$S',  function (strFormat, key, strT) {
return C$.formatString$S$S$S$F$D$Z(strFormat, key, strT, NaN, NaN, false);
}, 1);

Clazz.newMeth(C$, 'formatStringF$S$S$F',  function (strFormat, key, floatT) {
return C$.formatString$S$S$S$F$D$Z(strFormat, key, null, floatT, NaN, false);
}, 1);

Clazz.newMeth(C$, 'formatStringD$S$S$D',  function (strFormat, key, doubleT) {
return C$.formatString$S$S$S$F$D$Z(strFormat, key, null, NaN, doubleT, false);
}, 1);

Clazz.newMeth(C$, 'formatStringI$S$S$I',  function (strFormat, key, intT) {
return C$.formatString$S$S$S$F$D$Z(strFormat, key, "" + intT, NaN, NaN, false);
}, 1);

Clazz.newMeth(C$, 'sprintf$S$S$OA',  function (strFormat, list, values) {
if (values == null ) return strFormat;
var n=list.length$();
if (n == values.length) try {
for (var o=0; o < n; o++) {
if (values[o] == null ) continue;
var c;
switch ((c=list.charAt$I(o)).$c()) {
case 115:
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "s", values[o], NaN, NaN, true);
break;
case 102:
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "f", null, (values[o]).floatValue$(), NaN, true);
break;
case 105:
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "d", "" + values[o], NaN, NaN, true);
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "i", "" + values[o], NaN, NaN, true);
break;
case 100:
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "e", null, NaN, (values[o]).doubleValue$(), true);
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "f", null, NaN, (values[o]).doubleValue$(), true);
break;
case 112:
case 80:
if (Clazz.instanceOf(values[o], "javajs.util.T3")) {
var pVal=values[o];
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, (c == "p" ? "p" : "P"), null, pVal.x, NaN, true);
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, (c == "p" ? "p" : "P"), null, pVal.y, NaN, true);
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, (c == "p" ? "p" : "P"), null, pVal.z, NaN, true);
} else {
var pVal=values[o];
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, (c == "p" ? "p" : "P"), null, NaN, pVal.x, true);
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, (c == "p" ? "p" : "P"), null, NaN, pVal.y, true);
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, (c == "p" ? "p" : "P"), null, NaN, pVal.z, true);
}break;
case 113:
if (Clazz.instanceOf(values[o], "javajs.util.T4")) {
var qVal=values[o];
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "q", null, qVal.x, NaN, true);
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "q", null, qVal.y, NaN, true);
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "q", null, qVal.z, NaN, true);
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "q", null, qVal.w, NaN, true);
} else {
var qVal=values[o];
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "q", null, NaN, qVal.x, true);
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "q", null, NaN, qVal.y, true);
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "q", null, NaN, qVal.z, true);
strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "q", null, NaN, qVal.w, true);
}break;
case 83:
var sVal=values[o];
for (var i=0; i < sVal.length; i++) strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "s", sVal[i], NaN, NaN, true);

break;
case 70:
if (Clazz.instanceOf(values[o], Clazz.array(Double.TYPE, -1))) {
var dVal=values[o];
for (var i=0; i < dVal.length; i++) strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "f", null, NaN, dVal[i], true);

} else {
var fVal=values[o];
for (var i=0; i < fVal.length; i++) strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "f", null, NaN, fVal[i], true);

}break;
case 73:
var iVal=values[o];
for (var i=0; i < iVal.length; i++) strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "d", "" + iVal[i], NaN, NaN, true);

for (var i=0; i < iVal.length; i++) strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "i", "" + iVal[i], NaN, NaN, true);

break;
case 68:
var dVal=values[o];
for (var i=0; i < dVal.length; i++) strFormat=C$.formatString$S$S$S$F$D$Z(strFormat, "e", null, NaN, dVal[i], true);

}
}
return C$.rep$S$S$S(strFormat, "%%", "%");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
System.out.println$S("TextFormat.sprintf error " + list + " " + strFormat );
return C$.rep$S$S$S(strFormat, "%", "?");
}, 1);

Clazz.newMeth(C$, 'formatCheck$S',  function (strFormat) {
if (strFormat == null  || strFormat.indexOf$I("p") < 0 && strFormat.indexOf$I("P") < 0  && strFormat.indexOf$I("q") < 0  ) return strFormat;
strFormat=C$.rep$S$S$S(strFormat, "%%", "\u0001");
strFormat=C$.rep$S$S$S(strFormat, "%p", "%6.2p");
strFormat=C$.rep$S$S$S(strFormat, "%P", "%6.2P");
strFormat=C$.rep$S$S$S(strFormat, "%q", "%6.2q");
var format=C$.split$S$S(strFormat, "%");
var sb=Clazz.new_($I$(2,1));
sb.append$S(format[0]);
for (var i=1; i < format.length; i++) {
var f="%" + format[i];
var pt;
if (f.length$() >= 3) {
if ((pt=f.indexOf$I("p")) >= 0 || (pt=f.indexOf$I("P")) >= 0 ) f=C$.fdup$S$I$I(f, pt, 3);
if ((pt=f.indexOf$I("q")) >= 0) f=C$.fdup$S$I$I(f, pt, 4);
}sb.append$S(f);
}
return sb.toString().replace$C$C("\u0001", "%");
}, 1);

Clazz.newMeth(C$, 'fdup$S$I$I',  function (f, pt, n) {
var ch;
var count=0;
for (var i=pt; --i >= 1; ) {
if (C$.isDigit$C(ch=f.charAt$I(i))) continue;
switch (ch.$c()) {
case 46:
if (count++ != 0) return f;
continue;
case 45:
if (i != 1 && f.charAt$I(i - 1) != "." ) return f;
continue;
default:
return f;
}
}
var s=f.substring$I$I(0, pt + 1);
var sb=Clazz.new_($I$(2,1));
for (var i=0; i < n; i++) sb.append$S(s);

sb.append$S(f.substring$I(pt + 1));
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'parseDoubleArray$S',  function (str) {
return C$.parseDoubleArrayNext$S$IA$DA$S$S(str, Clazz.array(Integer.TYPE, [1]), null, null, null);
}, 1);

Clazz.newMeth(C$, 'parseDoubleArrayInfested$SA$DA',  function (tokens, data) {
var len=data.length;
var nTokens=tokens.length;
var n=0;
var max=0;
for (var i=0; i >= 0 && i < len  && n < nTokens ; i++) {
var f;
while (Double.isNaN$D(f=C$.parseDouble$S(tokens[n++])) && n < nTokens ){
}
if (!Double.isNaN$D(f)) data[(max=i)]=f;
if (n == nTokens) break;
}
return max + 1;
}, 1);

Clazz.newMeth(C$, 'parseDoubleArrayNext$S$IA$DA$S$S',  function (str, next, f, strStart, strEnd) {
var n=0;
var pt=next[0];
if (pt >= 0) {
if (strStart != null ) {
var p=str.indexOf$S$I(strStart, pt);
if (p >= 0) next[0]=p + strStart.length$();
}str=str.substring$I(next[0]);
pt=(strEnd == null  ? -1 : str.indexOf$S(strEnd));
if (pt < 0) pt=str.length$();
 else str=str.substring$I$I(0, pt);
next[0]+=pt + 1;
var tokens=C$.getTokens$S(str);
if (f == null ) f=Clazz.array(Double.TYPE, [tokens.length]);
n=C$.parseDoubleArrayInfested$SA$DA(tokens, f);
}if (f == null ) return Clazz.array(Double.TYPE, [0]);
for (var i=n; i < f.length; i++) f[i]=NaN;

return f;
}, 1);

Clazz.newMeth(C$, 'parseDoubleChecked$S$I$IA$Z',  function (str, ichMax, next, isStrict) {
var digitSeen=false;
var ich=next[0];
if (isStrict && str.indexOf$I("\n") != str.lastIndexOf$I("\n") ) return NaN;
while (ich < ichMax && C$.isWhiteSpace$S$I(str, ich) )++ich;

var negative=false;
if (ich < ichMax && str.charAt$I(ich) == "-" ) {
++ich;
negative=true;
}var ch=0;
var ival=0.0;
var ival2=0.0;
while (ich < ichMax && (ch=str.charAt$I(ich).$c()) >= 48  && ch <= 57 ){
ival=(ival * 10.0) + (ch - 48) * 1.0;
++ich;
digitSeen=true;
}
var isDecimal=false;
var iscale=0;
var nzero=(ival == 0  ? -1 : 0);
if (ch == 46 ) {
isDecimal=true;
while (++ich < ichMax && (ch=str.charAt$I(ich).$c()) >= 48  && ch <= 57 ){
digitSeen=true;
if (nzero < 0) {
if (ch == 48) {
--nzero;
continue;
}nzero=-nzero;
}if (iscale < C$.decimalScaleD.length) {
ival2=(ival2 * 10.0) + (ch - 48) * 1.0;
++iscale;
}}
}var value;
if (!digitSeen) {
value=NaN;
} else if (ival2 > 0 ) {
value=ival2 * C$.decimalScaleD[iscale - 1];
if (nzero > 1) {
if (nzero - 2 < C$.decimalScaleD.length) {
value*=C$.decimalScaleD[nzero - 2];
} else {
value*=Math.pow(10, 1 - nzero);
}} else {
value+=ival;
}} else {
value=ival;
}var isExponent=false;
if (ich < ichMax && (ch == 69 || ch == 101  || ch == 68 ) ) {
isExponent=true;
if (++ich >= ichMax) return NaN;
ch=str.charAt$I(ich).$c();
if ((ch == 43 ) && (++ich >= ichMax) ) return NaN;
next[0]=ich;
var exponent=C$.parseIntChecked$S$I$IA(str, ichMax, next);
if (exponent == -2147483648) return NaN;
if (exponent > 0 && exponent <= C$.tensScaleD.length ) value*=C$.tensScaleD[exponent - 1];
 else if (exponent < 0 && -exponent <= C$.decimalScaleD.length ) value*=C$.decimalScaleD[-exponent - 1];
 else if (exponent != 0) value*=Math.pow(10, exponent);
} else {
next[0]=ich;
}if (negative) value=-value;
if (value == Infinity ) value=1.7976931348623157E308;
return (!isStrict || (!isExponent || isDecimal ) && C$.checkTrailingText$S$I$I(str, next[0], ichMax)   ? value : NaN);
}, 1);

Clazz.newMeth(C$, 'parseDoubleRange$S$I$IA',  function (str, ichMax, next) {
var cch=str.length$();
if (ichMax > cch) ichMax=cch;
if (next[0] < 0 || next[0] >= ichMax ) return NaN;
return C$.parseDoubleChecked$S$I$IA$Z(str, ichMax, next, false);
}, 1);

Clazz.newMeth(C$, 'parseDoubleNext$S$IA',  function (str, next) {
var cch=(str == null  ? -1 : str.length$());
return (next[0] < 0 || next[0] >= cch  ? NaN : C$.parseDoubleChecked$S$I$IA$Z(str, cch, next, false));
}, 1);

Clazz.newMeth(C$, 'parseDoubleStrict$S',  function (str) {
var cch=str.length$();
if (cch == 0) return NaN;
return C$.parseDoubleChecked$S$I$IA$Z(str, cch, Clazz.array(Integer.TYPE, -1, [0]), true);
}, 1);

Clazz.newMeth(C$, 'parseDouble$S',  function (str) {
return C$.parseDoubleNext$S$IA(str, Clazz.array(Integer.TYPE, -1, [0]));
}, 1);

Clazz.newMeth(C$, 'parseDoubleArrayData$SA$DA',  function (tokens, data) {
C$.parseDoubleArrayDataN$SA$DA$I(tokens, data, data.length);
}, 1);

Clazz.newMeth(C$, 'parseDoubleArrayDataN$SA$DA$I',  function (tokens, data, nData) {
for (var i=nData; --i >= 0; ) data[i]=(i >= tokens.length ? NaN : C$.parseDouble$S(tokens[i]));

}, 1);

Clazz.newMeth(C$, 'parseDoubleFraction$S',  function (s) {
var pt=s.indexOf$S("/");
return (pt < 0 ? C$.parseDouble$S(s) : C$.parseDouble$S(s.substring$I$I(0, pt)) / C$.parseDouble$S(s.substring$I(pt + 1)));
}, 1);

Clazz.newMeth(C$, 'toDouble$F',  function (f) {
{
return f;
}
}, 1);

Clazz.newMeth(C$, 'parseFloatArrayData$SA$FA',  function (tokens, data) {
C$.parseFloatArrayDataN$SA$FA$I(tokens, data, data.length);
}, 1);

Clazz.newMeth(C$, 'parseFloatArrayDataN$SA$FA$I',  function (tokens, data, nData) {
for (var i=nData; --i >= 0; ) data[i]=(i >= tokens.length ? NaN : C$.parseFloat$S(tokens[i]));

}, 1);

Clazz.newMeth(C$, 'parseFloatArray$S',  function (str) {
return C$.parseFloatArrayNext$S$IA$FA$S$S(str, Clazz.array(Integer.TYPE, [1]), null, null, null);
}, 1);

Clazz.newMeth(C$, 'parseFloatArrayInfested$SA$FA',  function (tokens, data) {
var len=data.length;
var nTokens=tokens.length;
var n=0;
var max=0;
for (var i=0; i >= 0 && i < len  && n < nTokens ; i++) {
var f;
while (Float.isNaN$F(f=C$.parseFloat$S(tokens[n++])) && n < nTokens ){
}
if (!Float.isNaN$F(f)) data[(max=i)]=f;
if (n == nTokens) break;
}
return max + 1;
}, 1);

Clazz.newMeth(C$, 'parseFloatArrayNext$S$IA$FA$S$S',  function (str, next, f, strStart, strEnd) {
var n=0;
var pt=next[0];
if (pt >= 0) {
if (strStart != null ) {
var p=str.indexOf$S$I(strStart, pt);
if (p >= 0) next[0]=p + strStart.length$();
}str=str.substring$I(next[0]);
pt=(strEnd == null  ? -1 : str.indexOf$S(strEnd));
if (pt < 0) pt=str.length$();
 else str=str.substring$I$I(0, pt);
next[0]+=pt + 1;
var tokens=C$.getTokens$S(str);
if (f == null ) f=Clazz.array(Float.TYPE, [tokens.length]);
n=C$.parseFloatArrayInfested$SA$FA(tokens, f);
}if (f == null ) return Clazz.array(Float.TYPE, [0]);
for (var i=n; i < f.length; i++) f[i]=NaN;

return f;
}, 1);

Clazz.newMeth(C$, 'parseFloatRange$S$I$IA',  function (str, ichMax, next) {
var cch=str.length$();
if (ichMax > cch) ichMax=cch;
if (next[0] < 0 || next[0] >= ichMax ) return NaN;
return C$.parseFloatChecked$S$I$IA$Z(str, ichMax, next, false);
}, 1);

Clazz.newMeth(C$, 'parseFloatNext$S$IA',  function (str, next) {
var cch=(str == null  ? -1 : str.length$());
return (next[0] < 0 || next[0] >= cch  ? NaN : C$.parseFloatChecked$S$I$IA$Z(str, cch, next, false));
}, 1);

Clazz.newMeth(C$, 'parseFloatStrict$S',  function (str) {
var cch=str.length$();
if (cch == 0) return NaN;
return C$.parseFloatChecked$S$I$IA$Z(str, cch, Clazz.array(Integer.TYPE, -1, [0]), true);
}, 1);

Clazz.newMeth(C$, 'parseFloat$S',  function (str) {
return C$.parseFloatNext$S$IA(str, Clazz.array(Integer.TYPE, -1, [0]));
}, 1);

Clazz.newMeth(C$, 'parseFloatChecked$S$I$IA$Z',  function (str, ichMax, next, isStrict) {
var digitSeen=false;
var ich=next[0];
if (isStrict && str.indexOf$I("\n") != str.lastIndexOf$I("\n") ) return NaN;
while (ich < ichMax && C$.isWhiteSpace$S$I(str, ich) )++ich;

var negative=false;
if (ich < ichMax && str.charAt$I(ich) == "-" ) {
++ich;
negative=true;
}var ch=0;
var ival=0.0;
var ival2=0.0;
while (ich < ichMax && (ch=str.charAt$I(ich).$c()) >= 48  && ch <= 57 ){
ival=(ival * 10.0) + (ch - 48) * 1.0;
++ich;
digitSeen=true;
}
var isDecimal=false;
var iscale=0;
var nzero=(ival == 0  ? -1 : 0);
if (ch == 46 ) {
isDecimal=true;
while (++ich < ichMax && (ch=str.charAt$I(ich).$c()) >= 48  && ch <= 57 ){
digitSeen=true;
if (nzero < 0) {
if (ch == 48) {
--nzero;
continue;
}nzero=-nzero;
}if (iscale < C$.decimalScale.length) {
ival2=(ival2 * 10.0) + (ch - 48) * 1.0;
++iscale;
}}
}var value;
if (!digitSeen) {
value=NaN;
} else if (ival2 > 0 ) {
value=ival2 * C$.decimalScale[iscale - 1];
if (nzero > 1) {
if (nzero - 2 < C$.decimalScale.length) {
value*=C$.decimalScale[nzero - 2];
} else {
value*=Math.pow(10, 1 - nzero);
}} else {
value+=ival;
}} else {
value=ival;
}var isExponent=false;
if (ich < ichMax && (ch == 69 || ch == 101  || ch == 68 ) ) {
isExponent=true;
if (++ich >= ichMax) return NaN;
ch=str.charAt$I(ich).$c();
if ((ch == 43 ) && (++ich >= ichMax) ) return NaN;
next[0]=ich;
var exponent=C$.parseIntChecked$S$I$IA(str, ichMax, next);
if (exponent == -2147483648) return NaN;
if (exponent > 0 && exponent <= C$.tensScale.length ) value*=C$.tensScale[exponent - 1];
 else if (exponent < 0 && -exponent <= C$.decimalScale.length ) value*=C$.decimalScale[-exponent - 1];
 else if (exponent != 0) value*=Math.pow(10, exponent);
} else {
next[0]=ich;
}if (negative) value=-value;
if (value == Infinity ) value=3.4028235E38;
return (!isStrict || (!isExponent || isDecimal ) && C$.checkTrailingText$S$I$I(str, next[0], ichMax)   ? value : NaN);
}, 1);

Clazz.newMeth(C$, 'formatF$F$I$I$Z$Z',  function (value, width, precision, alignLeft, zeroPad) {
return C$.formatS$S$I$I$Z$Z($I$(1).formatDecimal$D$I(value, precision), width, 0, alignLeft, zeroPad);
}, 1);

Clazz.newMeth(C$, 'approx$F$I',  function (f, n) {
f=(Math.round(f * n)/n|0);
return (f == 0  ? 0 : f);
}, 1);

Clazz.newMeth(C$, 'escF$F',  function (f) {
var sf="" + new Float(f).toString();
{
if (sf.indexOf(".") < 0 && sf.indexOf("e") < 0 && sf.indexOf("N") < 0 && sf.indexOf("n") < 0) sf += ".0";
}
return sf;
}, 1);

Clazz.newMeth(C$, 'safeTruncate$F$I',  function (f, n) {
if (f > -0.001  && f < 0.001  ) f=0;
return (new Float(f).toString() + "         ").substring$I$I(0, n);
}, 1);

Clazz.newMeth(C$, 'fixDouble$D$D',  function (d, f) {
return Math.round$D(d * f) / f;
}, 1);

Clazz.newMeth(C$, 'parseFloatFraction$S',  function (s) {
var pt=s.indexOf$S("/");
return (pt < 0 ? C$.parseFloat$S(s) : C$.parseFloat$S(s.substring$I$I(0, pt)) / C$.parseFloat$S(s.substring$I(pt + 1)));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.tensScaleD=Clazz.array(Double.TYPE, -1, [10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0]);
C$.decimalScaleD=Clazz.array(Double.TYPE, -1, [0.1, 0.01, 0.001, 1.0E-4, 1.0E-5, 1.0E-6, 1.0E-7, 1.0E-8, 1.0E-9, 1.0E-10, 1.0E-11, 1.0E-12, 1.0E-13, 1.0E-14, 1.0E-15]);
C$.tensScale=Clazz.array(Float.TYPE, -1, [10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0]);
C$.decimalScale=Clazz.array(Float.TYPE, -1, [0.1, 0.01, 0.001, 1.0E-4, 1.0E-5, 1.0E-6, 1.0E-7, 1.0E-8, 1.0E-9, 1.0E-10, 1.0E-11, 1.0E-12, 1.0E-13, 1.0E-14, 1.0E-15]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
