(function(){var P$=java.util,p$1={},I$=[[0,'java.util.ServiceConfigurationError','java.util.ServiceLoader','sun.util.spi.XmlPropertiesProvider','java.security.AccessController',['java.util.Properties','.XmlSupport'],'jdk.internal.util.xml.BasicXmlPropertiesProvider',['java.util.Properties','.LineReader'],'StringBuffer','java.io.BufferedWriter','java.io.OutputStreamWriter','java.util.Objects','java.util.Hashtable']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Properties", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.Hashtable');
C$.$classes$=[['LineReader',0],['XmlSupport',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['defaults','java.util.Properties']]
,['O',['hexDigit','char[]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_util_Properties.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Properties',  function (defaults) {
Clazz.super_(C$, this);
this.defaults=defaults;
}, 1);

Clazz.newMeth(C$, 'setProperty$S$S',  function (key, value) {
return this.put$O$O(key, value);
});

Clazz.newMeth(C$, 'load$java_io_Reader',  function (reader) {
p$1.load0$java_util_Properties_LineReader.apply(this, [Clazz.new_($I$(7,1).c$$java_io_Reader,[this, null, reader])]);
});

Clazz.newMeth(C$, 'load$java_io_InputStream',  function (inStream) {
p$1.load0$java_util_Properties_LineReader.apply(this, [Clazz.new_($I$(7,1).c$$java_io_InputStream,[this, null, inStream])]);
});

Clazz.newMeth(C$, 'load0$java_util_Properties_LineReader',  function (lr) {
var convtBuf=Clazz.array(Character.TYPE, [1024]);
var limit;
var keyLen;
var valueStart;
var c;
var hasSep;
var precedingBackslash;
while ((limit=lr.readLine$()) >= 0){
c=String.fromCharCode(0);
keyLen=0;
valueStart=limit;
hasSep=false;
precedingBackslash=false;
while (keyLen < limit){
c=lr.lineBuf[keyLen];
if ((c == "=" || c == ":" ) && !precedingBackslash ) {
valueStart=keyLen + 1;
hasSep=true;
break;
} else if ((c == " " || c == "\t"  || c == "\f" ) && !precedingBackslash ) {
valueStart=keyLen + 1;
break;
}if (c == "\\") {
precedingBackslash=!precedingBackslash;
} else {
precedingBackslash=false;
}++keyLen;
}
while (valueStart < limit){
c=lr.lineBuf[valueStart];
if (c != " " && c != "\t"  && c != "\f" ) {
if (!hasSep && (c == "=" || c == ":" ) ) {
hasSep=true;
} else {
break;
}}++valueStart;
}
var key=p$1.loadConvert$CA$I$I$CA.apply(this, [lr.lineBuf, 0, keyLen, convtBuf]);
var value=p$1.loadConvert$CA$I$I$CA.apply(this, [lr.lineBuf, valueStart, limit - valueStart, convtBuf]);
this.put$O$O(key, value);
}
}, p$1);

Clazz.newMeth(C$, 'loadConvert$CA$I$I$CA',  function ($in, off, len, convtBuf) {
if (convtBuf.length < len) {
var newLen=len * 2;
if (newLen < 0) {
newLen=2147483647;
}convtBuf=Clazz.array(Character.TYPE, [newLen]);
}var aChar;
var out=convtBuf;
var outLen=0;
var end=off + len;
while (off < end){
aChar=$in[off++];
if (aChar == "\\") {
aChar=$in[off++];
if (aChar == "u") {
var value=0;
for (var i=0; i < 4; i++) {
aChar=$in[off++];
switch (aChar.$c()) {
case 48:
case 49:
case 50:
case 51:
case 52:
case 53:
case 54:
case 55:
case 56:
case 57:
value=(value << 4) + aChar.$c() - 48;
break;
case 97:
case 98:
case 99:
case 100:
case 101:
case 102:
value=(value << 4) + 10 + aChar.$c()  - 97;
break;
case 65:
case 66:
case 67:
case 68:
case 69:
case 70:
value=(value << 4) + 10 + aChar.$c()  - 65;
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Malformed \\uxxxx encoding."]);
}
}
out[outLen++]=String.fromCharCode(value);
} else {
if (aChar == "t") aChar="\t";
 else if (aChar == "r") aChar="\r";
 else if (aChar == "n") aChar="\n";
 else if (aChar == "f") aChar="\f";
out[outLen++]=aChar;
}} else {
out[outLen++]=aChar;
}}
return  String.instantialize(out, 0, outLen);
}, p$1);

Clazz.newMeth(C$, 'saveConvert$S$Z$Z',  function (theString, escapeSpace, escapeUnicode) {
var len=theString.length$();
var bufLen=len * 2;
if (bufLen < 0) {
bufLen=2147483647;
}var outBuffer=Clazz.new_($I$(8,1).c$$I,[bufLen]);
for (var x=0; x < len; x++) {
var aChar=theString.charAt$I(x);
if ((aChar.$c() > 61 ) && (aChar.$c() < 127 ) ) {
if (aChar == "\\") {
outBuffer.append$C("\\");
outBuffer.append$C("\\");
continue;
}outBuffer.append$C(aChar);
continue;
}switch (aChar.$c()) {
case 32:
if (x == 0 || escapeSpace ) outBuffer.append$C("\\");
outBuffer.append$C(" ");
break;
case 9:
outBuffer.append$C("\\");
outBuffer.append$C("t");
break;
case 10:
outBuffer.append$C("\\");
outBuffer.append$C("n");
break;
case 13:
outBuffer.append$C("\\");
outBuffer.append$C("r");
break;
case 12:
outBuffer.append$C("\\");
outBuffer.append$C("f");
break;
case 61:
case 58:
case 35:
case 33:
outBuffer.append$C("\\");
outBuffer.append$C(aChar);
break;
default:
if (!!(((aChar.$c() < 32 ) || (aChar.$c() > 126 ) ) & escapeUnicode)) {
outBuffer.append$C("\\");
outBuffer.append$C("u");
outBuffer.append$C(C$.toHex$I((aChar.$c() >> 12) & 15));
outBuffer.append$C(C$.toHex$I((aChar.$c() >> 8) & 15));
outBuffer.append$C(C$.toHex$I((aChar.$c() >> 4) & 15));
outBuffer.append$C(C$.toHex$I(aChar.$c() & 15));
} else {
outBuffer.append$C(aChar);
}}
}
return outBuffer.toString();
}, p$1);

Clazz.newMeth(C$, 'writeComments$java_io_BufferedWriter$S',  function (bw, comments) {
bw.write$S("#");
var len=comments.length$();
var current=0;
var last=0;
var uu=Clazz.array(Character.TYPE, [6]);
uu[0]="\\";
uu[1]="u";
while (current < len){
var c=comments.charAt$I(current);
if (c > "\u00ff" || c == "\n"  || c == "\r" ) {
if (last != current) bw.write$S(comments.substring$I$I(last, current));
if (c > "\u00ff") {
uu[2]=C$.toHex$I((c.$c() >> 12) & 15);
uu[3]=C$.toHex$I((c.$c() >> 8) & 15);
uu[4]=C$.toHex$I((c.$c() >> 4) & 15);
uu[5]=C$.toHex$I(c.$c() & 15);
bw.write$S( String.instantialize(uu));
} else {
bw.newLine$();
if (c == "\r" && current != len - 1  && comments.charAt$I(current + 1) == "\n" ) {
++current;
}if (current == len - 1 || (comments.charAt$I(current + 1) != "#" && comments.charAt$I(current + 1) != "!" ) ) bw.write$S("#");
}last=current + 1;
}++current;
}
if (last != current) bw.write$S(comments.substring$I$I(last, current));
bw.newLine$();
}, 1);

Clazz.newMeth(C$, 'save$java_io_OutputStream$S',  function (out, comments) {
try {
this.store$java_io_OutputStream$S(out, comments);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'store$java_io_Writer$S',  function (writer, comments) {
p$1.store0$java_io_BufferedWriter$S$Z.apply(this, [(Clazz.instanceOf(writer, "java.io.BufferedWriter")) ? writer : Clazz.new_($I$(9,1).c$$java_io_Writer,[writer]), comments, false]);
});

Clazz.newMeth(C$, 'store$java_io_OutputStream$S',  function (out, comments) {
p$1.store0$java_io_BufferedWriter$S$Z.apply(this, [Clazz.new_([Clazz.new_($I$(10,1).c$$java_io_OutputStream$S,[out, "8859_1"])],$I$(9,1).c$$java_io_Writer), comments, true]);
});

Clazz.newMeth(C$, 'store0$java_io_BufferedWriter$S$Z',  function (bw, comments, escUnicode) {
if (comments != null ) {
C$.writeComments$java_io_BufferedWriter$S(bw, comments);
}bw.write$S("#" + Clazz.new_(java.util.Date).toString());
bw.newLine$();
{
for (var e=this.keys$(); e.hasMoreElements$(); ) {
var key=e.nextElement$();
var val=this.get$O(key);
key=p$1.saveConvert$S$Z$Z.apply(this, [key, true, escUnicode]);
val=p$1.saveConvert$S$Z$Z.apply(this, [val, false, escUnicode]);
bw.write$S(key + "=" + val );
bw.newLine$();
}
}bw.flush$();
}, p$1);

Clazz.newMeth(C$, 'loadFromXML$java_io_InputStream',  function ($in) {
$I$(5,"load$java_util_Properties$java_io_InputStream",[this, $I$(11).requireNonNull$O($in)]);
$in.close$();
});

Clazz.newMeth(C$, 'storeToXML$java_io_OutputStream$S',  function (os, comment) {
this.storeToXML$java_io_OutputStream$S$S(os, comment, "UTF-8");
});

Clazz.newMeth(C$, 'storeToXML$java_io_OutputStream$S$S',  function (os, comment, encoding) {
$I$(5,"save$java_util_Properties$java_io_OutputStream$S$S",[this, $I$(11).requireNonNull$O(os), comment, $I$(11).requireNonNull$O(encoding)]);
});

Clazz.newMeth(C$, 'getProperty$S',  function (key) {
var oval=C$.superclazz.prototype.get$O.apply(this, [key]);
var sval=(Clazz.instanceOf(oval, "java.lang.String")) ? oval : null;
return ((sval == null ) && (this.defaults != null ) ) ? this.defaults.getProperty$S(key) : sval;
});

Clazz.newMeth(C$, 'getProperty$S$S',  function (key, defaultValue) {
var val=this.getProperty$S(key);
return (val == null ) ? defaultValue : val;
});

Clazz.newMeth(C$, 'propertyNames$',  function () {
var h=Clazz.new_($I$(12,1));
p$1.enumerate$java_util_Hashtable.apply(this, [h]);
return h.keys$();
});

Clazz.newMeth(C$, 'stringPropertyNames$',  function () {
var h=Clazz.new_($I$(12,1));
p$1.enumerateStringProperties$java_util_Hashtable.apply(this, [h]);
return h.keySet$();
});

Clazz.newMeth(C$, 'list$java_io_PrintStream',  function (out) {
out.println$S("-- listing properties --");
var h=Clazz.new_($I$(12,1));
p$1.enumerate$java_util_Hashtable.apply(this, [h]);
for (var e=h.keys$(); e.hasMoreElements$(); ) {
var key=e.nextElement$();
var val=h.get$O(key);
if (val.length$() > 40) {
val=val.substring$I$I(0, 37) + "...";
}out.println$S(key + "=" + val );
}
});

Clazz.newMeth(C$, 'list$java_io_PrintWriter',  function (out) {
out.println$S("-- listing properties --");
var h=Clazz.new_($I$(12,1));
p$1.enumerate$java_util_Hashtable.apply(this, [h]);
for (var e=h.keys$(); e.hasMoreElements$(); ) {
var key=e.nextElement$();
var val=h.get$O(key);
if (val.length$() > 40) {
val=val.substring$I$I(0, 37) + "...";
}out.println$S(key + "=" + val );
}
});

Clazz.newMeth(C$, 'enumerate$java_util_Hashtable',  function (h) {
if (this.defaults != null ) {
p$1.enumerate$java_util_Hashtable.apply(this.defaults, [h]);
}for (var e=this.keys$(); e.hasMoreElements$(); ) {
var key=e.nextElement$();
h.put$O$O(key, this.get$O(key));
}
}, p$1);

Clazz.newMeth(C$, 'enumerateStringProperties$java_util_Hashtable',  function (h) {
if (this.defaults != null ) {
p$1.enumerateStringProperties$java_util_Hashtable.apply(this.defaults, [h]);
}for (var e=this.keys$(); e.hasMoreElements$(); ) {
var k=e.nextElement$();
var v=this.get$O(k);
if (Clazz.instanceOf(k, "java.lang.String") && Clazz.instanceOf(v, "java.lang.String") ) {
h.put$O$O(k, v);
}}
}, p$1);

Clazz.newMeth(C$, 'toHex$I',  function (nibble) {
return C$.hexDigit[(nibble & 15)];
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.hexDigit=Clazz.array(Character.TYPE, -1, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Properties, "LineReader", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lineBuf=Clazz.array(Character.TYPE, [1024]);
this.inLimit=0;
this.inOff=0;
},1);

C$.$fields$=[['I',['inLimit','inOff'],'O',['inByteBuf','byte[]','inCharBuf','char[]','+lineBuf','inStream','java.io.InputStream','reader','java.io.Reader']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function (inStream) {
;C$.$init$.apply(this);
this.inStream=inStream;
this.inByteBuf=Clazz.array(Byte.TYPE, [8192]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader',  function (reader) {
;C$.$init$.apply(this);
this.reader=reader;
this.inCharBuf=Clazz.array(Character.TYPE, [8192]);
}, 1);

Clazz.newMeth(C$, 'readLine$',  function () {
var len=0;
var c=String.fromCharCode(0);
var skipWhiteSpace=true;
var isCommentLine=false;
var isNewLine=true;
var appendedLineBegin=false;
var precedingBackslash=false;
var skipLF=false;
while (true){
if (this.inOff >= this.inLimit) {
this.inLimit=(this.inStream == null ) ? this.reader.read$CA(this.inCharBuf) : this.inStream.read$BA(this.inByteBuf);
this.inOff=0;
if (this.inLimit <= 0) {
if (len == 0 || isCommentLine ) {
return -1;
}if (precedingBackslash) {
--len;
}return len;
}}if (this.inStream != null ) {
c=String.fromCharCode((255 & this.inByteBuf[this.inOff++]));
} else {
c=this.inCharBuf[this.inOff++];
}if (skipLF) {
skipLF=false;
if (c == "\n") {
continue;
}}if (skipWhiteSpace) {
if (c == " " || c == "\t"  || c == "\f" ) {
continue;
}if (!appendedLineBegin && (c == "\r" || c == "\n" ) ) {
continue;
}skipWhiteSpace=false;
appendedLineBegin=false;
}if (isNewLine) {
isNewLine=false;
if (c == "#" || c == "!" ) {
isCommentLine=true;
continue;
}}if (c != "\n" && c != "\r" ) {
this.lineBuf[len++]=c;
if (len == this.lineBuf.length) {
var newLength=this.lineBuf.length * 2;
var buf=Clazz.array(Character.TYPE, [newLength]);
System.arraycopy$O$I$O$I$I(this.lineBuf, 0, buf, 0, this.lineBuf.length);
this.lineBuf=buf;
}if (c == "\\") {
precedingBackslash=!precedingBackslash;
} else {
precedingBackslash=false;
}} else {
if (isCommentLine || len == 0 ) {
isCommentLine=false;
isNewLine=true;
skipWhiteSpace=true;
len=0;
continue;
}if (this.inOff >= this.inLimit) {
this.inLimit=(this.inStream == null ) ? this.reader.read$CA(this.inCharBuf) : this.inStream.read$BA(this.inByteBuf);
this.inOff=0;
if (this.inLimit <= 0) {
if (precedingBackslash) {
--len;
}return len;
}}if (precedingBackslash) {
len-=1;
skipWhiteSpace=true;
appendedLineBegin=true;
precedingBackslash=false;
if (c == "\r") {
skipLF=true;
}} else {
return len;
}}}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Properties, "XmlSupport", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['PROVIDER','sun.util.spi.XmlPropertiesProvider']]]

Clazz.newMeth(C$, 'loadProviderFromProperty$ClassLoader',  function (cl) {
var cn=System.getProperty$S("sun.util.spi.XmlPropertiesProvider");
if (cn == null ) return null;
try {
var c=Clazz.forName(cn, true, cl);
return c.newInstance$();
} catch (x) {
if (Clazz.exceptionOf(x,"ClassNotFoundException") || Clazz.exceptionOf(x,"IllegalAccessException") || Clazz.exceptionOf(x,"InstantiationException")){
throw Clazz.new_($I$(1,1).c$$S$Throwable,[null, x]);
} else {
throw x;
}
}
}, 1);

Clazz.newMeth(C$, 'loadProviderAsService$ClassLoader',  function (cl) {
var iterator=$I$(2,"load$Class$ClassLoader",[Clazz.getClass($I$(3)), cl]).iterator$();
return iterator.hasNext$() ? iterator.next$() : null;
}, 1);

Clazz.newMeth(C$, 'loadProvider$',  function () {
return $I$(4,"doPrivileged$java_security_PrivilegedAction",[((P$.Properties$XmlSupport$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Properties$XmlSupport$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var cl=ClassLoader.getSystemClassLoader$();
var provider=$I$(5).loadProviderFromProperty$ClassLoader(cl);
if (provider != null ) return provider;
provider=$I$(5).loadProviderAsService$ClassLoader(cl);
if (provider != null ) return provider;
return Clazz.new_($I$(6,1));
});
})()
), Clazz.new_(P$.Properties$XmlSupport$1.$init$,[this, null]))]);
}, 1);

Clazz.newMeth(C$, 'load$java_util_Properties$java_io_InputStream',  function (props, $in) {
C$.PROVIDER.load$java_util_Properties$java_io_InputStream(props, $in);
}, 1);

Clazz.newMeth(C$, 'save$java_util_Properties$java_io_OutputStream$S$S',  function (props, os, comment, encoding) {
C$.PROVIDER.store$java_util_Properties$java_io_OutputStream$S$S(props, os, comment, encoding);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.PROVIDER=C$.loadProvider$();
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
