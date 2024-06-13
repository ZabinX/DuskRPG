(function(){var P$=Clazz.newPackage("sun.net.www"),I$=[[0,'java.util.BitSet','java.io.File','StringBuilder','java.nio.ByteBuffer','java.nio.CharBuffer','sun.nio.cs.ThreadLocalCoders','java.nio.charset.CodingErrorAction','java.net.URL','java.net.URI','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParseUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['J',['L_DIGIT','L_HEX','H_HEX','H_UPALPHA','H_LOWALPHA','H_ALPHA','L_ALPHANUM','H_ALPHANUM','L_MARK','H_MARK','L_UNRESERVED','H_UNRESERVED','L_RESERVED','H_RESERVED','L_DASH','H_DASH','L_URIC','H_URIC','L_PCHAR','H_PCHAR','L_PATH','H_PATH','L_USERINFO','H_USERINFO','L_REG_NAME','H_REG_NAME','L_SERVER','H_SERVER'],'O',['encodedInPath','java.util.BitSet','hexDigits','char[]']]]

Clazz.newMeth(C$, 'encodePath$S',  function (path) {
return C$.encodePath$S$Z(path, true);
}, 1);

Clazz.newMeth(C$, 'encodePath$S$Z',  function (path, flag) {
var retCC=Clazz.array(Character.TYPE, [path.length$() * 2 + 16]);
var retLen=0;
var pathCC=path.toCharArray$();
var n=path.length$();
for (var i=0; i < n; i++) {
var c=pathCC[i];
if ((!flag && c == "/" ) || (flag && c == $I$(2).separatorChar ) ) retCC[retLen++]="/";
 else {
if (c.$c() <= 127 ) {
if (c >= "a" && c <= "z"  || c >= "A" && c <= "Z"   || c >= "0" && c <= "9"  ) {
retCC[retLen++]=c;
} else if (C$.encodedInPath.get$I(c.$c())) retLen=C$.escape$CA$C$I(retCC, c, retLen);
 else retCC[retLen++]=c;
} else if (c.$c() > 2047 ) {
retLen=C$.escape$CA$C$I(retCC, String.fromCharCode((224 | ((c.$c() >> 12) & 15))), retLen);
retLen=C$.escape$CA$C$I(retCC, String.fromCharCode((128 | ((c.$c() >> 6) & 63))), retLen);
retLen=C$.escape$CA$C$I(retCC, String.fromCharCode((128 | ((c.$c() >> 0) & 63))), retLen);
} else {
retLen=C$.escape$CA$C$I(retCC, String.fromCharCode((192 | ((c.$c() >> 6) & 31))), retLen);
retLen=C$.escape$CA$C$I(retCC, String.fromCharCode((128 | ((c.$c() >> 0) & 63))), retLen);
}}if (retLen + 9 > retCC.length) {
var newLen=retCC.length * 2 + 16;
if (newLen < 0) {
newLen=2147483647;
}var buf=Clazz.array(Character.TYPE, [newLen]);
System.arraycopy$O$I$O$I$I(retCC, 0, buf, 0, retLen);
retCC=buf;
}}
return  String.instantialize(retCC, 0, retLen);
}, 1);

Clazz.newMeth(C$, 'escape$CA$C$I',  function (cc, c, index) {
cc[index++]="%";
cc[index++]=Character.forDigit$I$I((c.$c() >> 4) & 15, 16);
cc[index++]=Character.forDigit$I$I(c.$c() & 15, 16);
return index;
}, 1);

Clazz.newMeth(C$, 'unescape$S$I',  function (s, i) {
return ($b$[0] = Integer.parseInt$S$I(s.substring$I$I(i + 1, i + 3), 16), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'decode$S',  function (s) {
var n=s.length$();
if ((n == 0) || (s.indexOf$I("%") < 0) ) return s;
var sb=Clazz.new_($I$(3,1).c$$I,[n]);
var bb=$I$(4).allocate$I(n);
var cb=$I$(5).allocate$I(n);
var dec=$I$(6).decoderFor$O("UTF-8").onMalformedInput$java_nio_charset_CodingErrorAction($I$(7).REPORT).onUnmappableCharacter$java_nio_charset_CodingErrorAction($I$(7).REPORT);
var c=s.charAt$I(0);
for (var i=0; i < n; ) {
Clazz.assert(C$, this, function(){return c == s.charAt$I(i)});
if (c != "%") {
sb.append$C(c);
if (++i >= n) break;
c=s.charAt$I(i);
continue;
}bb.clear$();
var ui=i;
for (; ; ) {
Clazz.assert(C$, this, function(){return (n - i >= 2)});
try {
bb.put$B(C$.unescape$S$I(s, i));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
} else {
throw e;
}
}
i+=3;
if (i >= n) break;
c=s.charAt$I(i);
if (c != "%") break;
}
bb.flip$();
cb.clear$();
dec.reset$();
var cr=dec.decode$java_nio_ByteBuffer$java_nio_CharBuffer$Z(bb, cb, true);
if (cr.isError$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Error decoding percent encoded characters"]);
cr=dec.flush$java_nio_CharBuffer(cb);
if (cr.isError$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Error decoding percent encoded characters"]);
sb.append$S(cb.flip$().toString());
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'canonizeString$S',  function (file) {
var i=0;
var lim=file.length$();
while ((i=file.indexOf$S("/../")) >= 0){
if ((lim=file.lastIndexOf$I$I("/", i - 1)) >= 0) {
file=file.substring$I$I(0, lim) + file.substring$I(i + 3);
} else {
file=file.substring$I(i + 3);
}}
while ((i=file.indexOf$S("/./")) >= 0){
file=file.substring$I$I(0, i) + file.substring$I(i + 2);
}
while (file.endsWith$S("/..")){
i=file.indexOf$S("/..");
if ((lim=file.lastIndexOf$I$I("/", i - 1)) >= 0) {
file=file.substring$I$I(0, lim + 1);
} else {
file=file.substring$I$I(0, i);
}}
if (file.endsWith$S("/.")) file=file.substring$I$I(0, file.length$() - 1);
return file;
});

Clazz.newMeth(C$, 'fileToEncodedURL$java_io_File',  function (file) {
var path=file.getAbsolutePath$();
path=C$.encodePath$S(path);
if (!path.startsWith$S("/")) {
path="/" + path;
}if (!path.endsWith$S("/") && file.isDirectory$() ) {
path=path + "/";
}return Clazz.new_($I$(8,1).c$$S$S$S,["file", "", path]);
}, 1);

Clazz.newMeth(C$, 'toURI$java_net_URL',  function (url) {
var protocol=url.getProtocol$();
var auth=url.getAuthority$();
var path=url.getPath$();
var query=url.getQuery$();
var ref=url.getRef$();
if (path != null  && !(path.startsWith$S("/")) ) path="/" + path;
if (auth != null  && auth.endsWith$S(":-1") ) auth=auth.substring$I$I(0, auth.length$() - 3);
var uri;
try {
uri=C$.createURI$S$S$S$S$S(protocol, auth, path, query, ref);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.URISyntaxException")){
uri=null;
} else {
throw e;
}
}
return uri;
}, 1);

Clazz.newMeth(C$, 'createURI$S$S$S$S$S',  function (scheme, authority, path, query, fragment) {
var s=C$.toString$S$S$S$S$S$I$S$S$S(scheme, null, authority, null, null, -1, path, query, fragment);
C$.checkPath$S$S$S(s, scheme, path);
return Clazz.new_($I$(9,1).c$$S,[s]);
}, 1);

Clazz.newMeth(C$, 'toString$S$S$S$S$S$I$S$S$S',  function (scheme, opaquePart, authority, userInfo, host, port, path, query, fragment) {
var sb=Clazz.new_($I$(10,1));
if (scheme != null ) {
sb.append$S(scheme);
sb.append$C(":");
}C$.appendSchemeSpecificPart$StringBuffer$S$S$S$S$I$S$S(sb, opaquePart, authority, userInfo, host, port, path, query);
C$.appendFragment$StringBuffer$S(sb, fragment);
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'appendSchemeSpecificPart$StringBuffer$S$S$S$S$I$S$S',  function (sb, opaquePart, authority, userInfo, host, port, path, query) {
if (opaquePart != null ) {
if (opaquePart.startsWith$S("//[")) {
var end=opaquePart.indexOf$S("]");
if (end != -1 && opaquePart.indexOf$S(":") != -1 ) {
var doquote;
var dontquote;
if (end == opaquePart.length$()) {
dontquote=opaquePart;
doquote="";
} else {
dontquote=opaquePart.substring$I$I(0, end + 1);
doquote=opaquePart.substring$I(end + 1);
}sb.append$S(dontquote);
sb.append$S(C$.quote$S$J$J(doquote, C$.L_URIC, C$.H_URIC));
}} else {
sb.append$S(C$.quote$S$J$J(opaquePart, C$.L_URIC, C$.H_URIC));
}} else {
C$.appendAuthority$StringBuffer$S$S$S$I(sb, authority, userInfo, host, port);
if (path != null ) sb.append$S(C$.quote$S$J$J(path, C$.L_PATH, C$.H_PATH));
if (query != null ) {
sb.append$C("?");
sb.append$S(C$.quote$S$J$J(query, C$.L_URIC, C$.H_URIC));
}}}, 1);

Clazz.newMeth(C$, 'appendAuthority$StringBuffer$S$S$S$I',  function (sb, authority, userInfo, host, port) {
if (host != null ) {
sb.append$S("//");
if (userInfo != null ) {
sb.append$S(C$.quote$S$J$J(userInfo, C$.L_USERINFO, C$.H_USERINFO));
sb.append$C("@");
}var needBrackets=((host.indexOf$I(":") >= 0) && !host.startsWith$S("[") && !host.endsWith$S("]")  );
if (needBrackets) sb.append$C("[");
sb.append$S(host);
if (needBrackets) sb.append$C("]");
if (port != -1) {
sb.append$C(":");
sb.append$I(port);
}} else if (authority != null ) {
sb.append$S("//");
if (authority.startsWith$S("[")) {
var end=authority.indexOf$S("]");
if (end != -1 && authority.indexOf$S(":") != -1 ) {
var doquote;
var dontquote;
if (end == authority.length$()) {
dontquote=authority;
doquote="";
} else {
dontquote=authority.substring$I$I(0, end + 1);
doquote=authority.substring$I(end + 1);
}sb.append$S(dontquote);
sb.append$S(C$.quote$S$J$J(doquote, Long.$or(C$.L_REG_NAME,C$.L_SERVER), Long.$or(C$.H_REG_NAME,C$.H_SERVER)));
}} else {
sb.append$S(C$.quote$S$J$J(authority, Long.$or(C$.L_REG_NAME,C$.L_SERVER), Long.$or(C$.H_REG_NAME,C$.H_SERVER)));
}}}, 1);

Clazz.newMeth(C$, 'appendFragment$StringBuffer$S',  function (sb, fragment) {
if (fragment != null ) {
sb.append$C("#");
sb.append$S(C$.quote$S$J$J(fragment, C$.L_URIC, C$.H_URIC));
}}, 1);

Clazz.newMeth(C$, 'quote$S$J$J',  function (s, lowMask, highMask) {
var n=s.length$();
var sb=null;
var allowNonASCII=(Long.$ne((Long.$and(lowMask,1)),0 ));
for (var i=0; i < s.length$(); i++) {
var c=s.charAt$I(i);
if (c < "\u0080") {
if (!C$.match$C$J$J(c, lowMask, highMask) && !C$.isEscaped$S$I(s, i) ) {
if (sb == null ) {
sb=Clazz.new_($I$(10,1));
sb.append$S(s.substring$I$I(0, i));
}C$.appendEscape$StringBuffer$B(sb, ($b$[0] = c.$c(), $b$[0]));
} else {
if (sb != null ) sb.append$C(c);
}} else if (allowNonASCII && (Character.isSpaceChar$C(c) || Character.isISOControl$C(c) ) ) {
if (sb == null ) {
sb=Clazz.new_($I$(10,1));
sb.append$S(s.substring$I$I(0, i));
}C$.appendEncoded$StringBuffer$C(sb, c);
} else {
if (sb != null ) sb.append$C(c);
}}
return (sb == null ) ? s : sb.toString();
}, 1);

Clazz.newMeth(C$, 'isEscaped$S$I',  function (s, pos) {
if (s == null  || (s.length$() <= (pos + 2)) ) return false;
return s.charAt$I(pos) == "%" && C$.match$C$J$J(s.charAt$I(pos + 1), C$.L_HEX, C$.H_HEX)  && C$.match$C$J$J(s.charAt$I(pos + 2), C$.L_HEX, C$.H_HEX) ;
}, 1);

Clazz.newMeth(C$, 'appendEncoded$StringBuffer$C',  function (sb, c) {
var bb=null;
try {
bb=$I$(6).encoderFor$O("UTF-8").encode$java_nio_CharBuffer($I$(5).wrap$CharSequence("" + c));
} catch (x) {
if (Clazz.exceptionOf(x,"java.nio.charset.CharacterCodingException")){
Clazz.assert(C$, this, function(){return false});
} else {
throw x;
}
}
while (bb.hasRemaining$()){
var b=bb.get$() & 255;
if (b >= 128) C$.appendEscape$StringBuffer$B(sb, ($b$[0] = b, $b$[0]));
 else sb.append$C(String.fromCharCode(b));
}
}, 1);

Clazz.newMeth(C$, 'appendEscape$StringBuffer$B',  function (sb, b) {
sb.append$C("%");
sb.append$C(C$.hexDigits[(b >> 4) & 15]);
sb.append$C(C$.hexDigits[(b >> 0) & 15]);
}, 1);

Clazz.newMeth(C$, 'match$C$J$J',  function (c, lowMask, highMask) {
if (c.$c() < 64 ) return Long.$ne((Long.$and((Long.$sl(1,c.$c())),lowMask)),0 );
if (c.$c() < 128 ) return Long.$ne((Long.$and((Long.$sl(1,(c.$c() - 64))),highMask)),0 );
return false;
}, 1);

Clazz.newMeth(C$, 'checkPath$S$S$S',  function (s, scheme, path) {
if (scheme != null ) {
if ((path != null ) && ((path.length$() > 0) && (path.charAt$I(0) != "/") ) ) throw Clazz.new_(Clazz.load('java.net.URISyntaxException').c$$S$S,[s, "Relative path in absolute URI"]);
}}, 1);

Clazz.newMeth(C$, 'lowMask$C$C',  function (first, last) {
var m=0;
var f=Math.max(Math.min(first.$c(), 63), 0);
var l=Math.max(Math.min(last.$c(), 63), 0);
for (var i=f; i <= l; i++) (m=Long.$or(m,(Long.$sl(1,i))));

return m;
}, 1);

Clazz.newMeth(C$, 'lowMask$S',  function (chars) {
var n=chars.length$();
var m=0;
for (var i=0; i < n; i++) {
var c=chars.charAt$I(i);
if (c.$c() < 64 ) (m=Long.$or(m,((Long.$sl(1,c.$c())))));
}
return m;
}, 1);

Clazz.newMeth(C$, 'highMask$C$C',  function (first, last) {
var m=0;
var f=Math.max(Math.min(first.$c(), 127), 64) - 64;
var l=Math.max(Math.min(last.$c(), 127), 64) - 64;
for (var i=f; i <= l; i++) (m=Long.$or(m,(Long.$sl(1,i))));

return m;
}, 1);

Clazz.newMeth(C$, 'highMask$S',  function (chars) {
var n=chars.length$();
var m=0;
for (var i=0; i < n; i++) {
var c=chars.charAt$I(i);
if ((c.$c() >= 64 ) && (c.$c() < 128 ) ) (m=Long.$or(m,((Long.$sl(1,(c.$c() - 64))))));
}
return m;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
{
C$.encodedInPath=Clazz.new_($I$(1,1).c$$I,[256]);
C$.encodedInPath.set$I("=".$c());
C$.encodedInPath.set$I(";".$c());
C$.encodedInPath.set$I("?".$c());
C$.encodedInPath.set$I("/".$c());
C$.encodedInPath.set$I("#".$c());
C$.encodedInPath.set$I(" ".$c());
C$.encodedInPath.set$I("<".$c());
C$.encodedInPath.set$I(">".$c());
C$.encodedInPath.set$I("%".$c());
C$.encodedInPath.set$I("\"".$c());
C$.encodedInPath.set$I("{".$c());
C$.encodedInPath.set$I("}".$c());
C$.encodedInPath.set$I("|".$c());
C$.encodedInPath.set$I("\\".$c());
C$.encodedInPath.set$I("^".$c());
C$.encodedInPath.set$I("[".$c());
C$.encodedInPath.set$I("]".$c());
C$.encodedInPath.set$I("`".$c());
for (var i=0; i < 32; i++) C$.encodedInPath.set$I(i);

C$.encodedInPath.set$I(127);
};
C$.hexDigits=Clazz.array(Character.TYPE, -1, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]);
C$.L_DIGIT=C$.lowMask$C$C("0", "9");
C$.L_HEX=C$.L_DIGIT;
C$.H_HEX=Long.$or(C$.highMask$C$C("A", "F"),C$.highMask$C$C("a", "f"));
C$.H_UPALPHA=C$.highMask$C$C("A", "Z");
C$.H_LOWALPHA=C$.highMask$C$C("a", "z");
C$.H_ALPHA=Long.$or(C$.H_LOWALPHA,C$.H_UPALPHA);
C$.L_ALPHANUM=Long.$or(C$.L_DIGIT,0);
C$.H_ALPHANUM=Long.$or(0,C$.H_ALPHA);
C$.L_MARK=C$.lowMask$S("-_.!~*\'()");
C$.H_MARK=C$.highMask$S("-_.!~*\'()");
C$.L_UNRESERVED=Long.$or(C$.L_ALPHANUM,C$.L_MARK);
C$.H_UNRESERVED=Long.$or(C$.H_ALPHANUM,C$.H_MARK);
C$.L_RESERVED=C$.lowMask$S(";/?:@&=+$,[]");
C$.H_RESERVED=C$.highMask$S(";/?:@&=+$,[]");
C$.L_DASH=C$.lowMask$S("-");
C$.H_DASH=C$.highMask$S("-");
C$.L_URIC=Long.$or(C$.L_RESERVED,C$.L_UNRESERVED , 1 );
C$.H_URIC=Long.$or(C$.H_RESERVED,C$.H_UNRESERVED , 0 );
C$.L_PCHAR=Long.$or(C$.L_UNRESERVED,1 , C$.lowMask$S(":@&=+$,") );
C$.H_PCHAR=Long.$or(C$.H_UNRESERVED,0 , C$.highMask$S(":@&=+$,") );
C$.L_PATH=Long.$or(C$.L_PCHAR,C$.lowMask$S(";/"));
C$.H_PATH=Long.$or(C$.H_PCHAR,C$.highMask$S(";/"));
C$.L_USERINFO=Long.$or(C$.L_UNRESERVED,1 , C$.lowMask$S(";:&=+$,") );
C$.H_USERINFO=Long.$or(C$.H_UNRESERVED,0 , C$.highMask$S(";:&=+$,") );
C$.L_REG_NAME=Long.$or(C$.L_UNRESERVED,1 , C$.lowMask$S("$,;:@&=+") );
C$.H_REG_NAME=Long.$or(C$.H_UNRESERVED,0 , C$.highMask$S("$,;:@&=+") );
C$.L_SERVER=Long.$or(C$.L_USERINFO,C$.L_ALPHANUM , C$.L_DASH , C$.lowMask$S(".:@[]") );
C$.H_SERVER=Long.$or(C$.H_USERINFO,C$.H_ALPHANUM , C$.H_DASH , C$.highMask$S(".:@[]") );
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
