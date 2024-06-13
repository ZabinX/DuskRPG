(function(){var P$=Clazz.newPackage("javajs.util"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.SB','javajs.util.Lst','javajs.util.PT']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CifDataParser", null, null, 'javajs.api.GenericCifDataParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cterm="\u0000";
this.nullString="\u0000";
this.columnData=Clazz.array(java.lang.Object, [100]);
this.fileHeader=Clazz.new_($I$(2,1));
this.isHeader=true;
},1);

C$.$fields$=[['Z',['wasUnquoted','asObject','debugging','isLoop','haveData','isHeader','skipToken'],'C',['cterm'],'I',['ich','cch','ichPeeked','columnCount'],'S',['line','str','nullString'],'O',['reader','javajs.api.GenericLineReader','br','java.io.BufferedReader','strPeeked','java.lang.Object','columnNames','String[]','columnData','Object[]','fileHeader','javajs.util.SB']]
,['O',['htFields','java.util.Map']]]

Clazz.newMeth(C$, 'getVersion$',  function () {
return 1;
});

Clazz.newMeth(C$, 'setNullValue$S',  function (nullString) {
this.nullString=nullString;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getColumnData$I',  function (i) {
return this.columnData[i];
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return this.columnCount;
});

Clazz.newMeth(C$, 'getColumnName$I',  function (i) {
return this.columnNames[i];
});

Clazz.newMeth(C$, 'set$javajs_api_GenericLineReader$java_io_BufferedReader$Z',  function (reader, br, debugging) {
this.reader=reader;
this.br=br;
this.debugging=debugging;
return this;
});

Clazz.newMeth(C$, 'getFileHeader$',  function () {
return this.fileHeader.toString();
});

Clazz.newMeth(C$, 'getAllCifData$',  function () {
return this.getAllCifDataType$SA(Clazz.array(String, -1, []));
});

Clazz.newMeth(C$, 'getAllCifDataType$SA',  function (types) {
if (types != null ) {
if (types.length == 0) types=null;
 else for (var i=0; i < types.length; i++) types[i]=this.fixKey$S(types[i]);

}this.line="";
var key;
var data=null;
var data0=null;
var allData=Clazz.new_($I$(1,1));
var models=Clazz.new_($I$(3,1));
allData.put$O$O("models", models);
this.asObject=(this.getVersion$() >= 2);
this.nullString=null;
var saveFrames=Clazz.new_($I$(3,1));
try {
while ((key=this.getNextToken$()) != null ){
if (key.startsWith$S("global_") || key.startsWith$S("data_") ) {
models.addLast$O(data0=data=Clazz.new_($I$(1,1)));
data.put$O$O("name", key);
continue;
}if (key.startsWith$S("loop_")) {
p$1.getAllCifLoopData$java_util_Map$SA.apply(this, [data, types]);
continue;
}if (key.startsWith$S("save_")) {
if (key.equals$O("save_")) {
var n=saveFrames.size$();
if (n == 0) {
System.out.println$S("CIF ERROR ? save_ without corresponding save_xxxx");
data=data0;
} else {
data=saveFrames.removeItemAt$I(n - 1);
}} else {
saveFrames.addLast$O(data);
var d=data;
data=Clazz.new_($I$(1,1));
d.put$O$O(key, data);
}continue;
}if (key.charAt$I(0) != "_") {
System.out.println$S("CIF ERROR ? should be an underscore: " + key);
} else {
var value=(this.asObject ? this.getNextTokenObject$() : this.getNextToken$());
if (value == null ) {
System.out.println$S("CIF ERROR ? end of file; data missing: " + key);
} else {
key=this.fixKey$S(key);
if (types == null  || p$1.checkKey$SA$S.apply(this, [types, key]) ) data.put$O$O(key, value);
}}}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
this.asObject=false;
try {
if (this.br != null ) this.br.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
this.nullString="\u0000";
return allData;
});

Clazz.newMeth(C$, 'getAllCifLoopData$java_util_Map$SA',  function (data, types) {
var key;
var keyWords=Clazz.new_($I$(3,1));
var o;
var skipping=false;
while ((o=this.peekToken$()) != null  && Clazz.instanceOf(o, "java.lang.String")  && (o).charAt$I(0) == "_" ){
key=this.fixKey$S(this.getTokenPeeked$());
keyWords.addLast$O(key);
if (types == null  || p$1.checkKey$SA$S.apply(this, [types, key]) ) data.put$O$O(key, Clazz.new_($I$(3,1)));
 else skipping=true;
}
this.columnCount=keyWords.size$();
if (this.columnCount == 0) return;
this.isLoop=true;
if (skipping) this.skipLoop$Z(false);
 else while (this.getData$())for (var i=0; i < this.columnCount; i++) (data.get$O(keyWords.get$I(i))).addLast$O(this.columnData[i]);


this.isLoop=false;
}, p$1);

Clazz.newMeth(C$, 'checkKey$SA$S',  function (types, key) {
for (var i=0; i < types.length; i++) if (key.startsWith$S(types[i])) return true;

return false;
}, p$1);

Clazz.newMeth(C$, 'readLine$',  function () {
try {
this.line=(this.reader == null  ? this.br.readLine$() : this.reader.readNextLine$());
if (this.line == null ) return null;
if (this.isHeader) {
if (this.line.startsWith$S("#")) {
this.fileHeader.append$S(this.line).appendC$C("\n");
} else if (this.line.length$() > 0) {
this.isHeader=false;
}}return this.line;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getData$',  function () {
if (this.isLoop) {
for (var i=0; i < this.columnCount; ++i) if ((this.columnData[i]=this.getNextDataToken$()) == null ) return false;

} else if (this.haveData) {
this.haveData=false;
} else {
return false;
}return (this.columnCount > 0);
});

Clazz.newMeth(C$, 'skipLoop$Z',  function (doReport) {
var str;
var ret=(doReport ? Clazz.new_($I$(2,1)) : null);
var n=0;
while ((str=this.peekToken$()) != null  && str.charAt$I(0) == "_" ){
if (ret != null ) ret.append$S(str).append$S("\n");
this.getTokenPeeked$();
++n;
}
if (n == 0) n=this.columnCount;
var m=0;
while ((str=this.getNextDataToken$()) != null ){
if (ret == null ) continue;
ret.append$S(str).append$S(" ");
if ((++m % n) == 0) ret.append$S("\n");
}
return (ret == null  ? null : ret.toString());
});

Clazz.newMeth(C$, 'getNextToken$',  function () {
this.wasUnquoted=true;
return this.getNextTokenProtected$();
});

Clazz.newMeth(C$, 'getNextTokenObject$',  function () {
this.wasUnquoted=true;
return this.getNextTokenProtected$();
});

Clazz.newMeth(C$, 'getNextTokenProtected$',  function () {
return (p$1.getNextLine.apply(this, []) ? p$1.nextStrToken.apply(this, []) : null);
});

Clazz.newMeth(C$, 'getNextDataToken$',  function () {
var o=this.peekToken$();
if (o == null ) return null;
if (this.wasUnquoted && Clazz.instanceOf(o, "java.lang.String") ) {
var str=o;
if (str.charAt$I(0) == "_" || str.startsWith$S("loop_")  || str.startsWith$S("data_")  || str.startsWith$S("save_")  || str.startsWith$S("stop_")  || str.startsWith$S("global_") ) return null;
}return this.getTokenPeeked$();
});

Clazz.newMeth(C$, 'peekToken$',  function () {
if (!p$1.getNextLine.apply(this, [])) return null;
var ich=this.ich;
this.strPeeked=p$1.nextStrToken.apply(this, []);
this.ichPeeked=this.ich;
this.ich=ich;
return this.strPeeked;
});

Clazz.newMeth(C$, 'getNextLine',  function () {
while (!p$1.strHasMoreTokens.apply(this, []))if (this.prepareNextLine$() == null ) return false;

return true;
}, p$1);

Clazz.newMeth(C$, 'getTokenPeeked$',  function () {
this.ich=this.ichPeeked;
return this.strPeeked;
});

Clazz.newMeth(C$, 'fullTrim$S',  function (str) {
var pt0=-1;
var pt1=str.length$();
while (++pt0 < pt1 && $I$(4,"isWhitespace$C",[str.charAt$I(pt0)]) ){
}
while (--pt1 > pt0 && $I$(4,"isWhitespace$C",[str.charAt$I(pt1)]) ){
}
return str.substring$I$I(pt0, pt1 + 1);
});

Clazz.newMeth(C$, 'toUnicode$S',  function (data) {
var pt;
try {
while ((pt=data.indexOf$I("\\")) >= 0){
var c=data.charAt$I(pt + 1).$c();
var ch=(c >= 65 && c <= 90  ? "ABX\u0394E\u03a6\u0393HI_K\u039bMNO\u03a0\u0398P\u03a3TY_\u03a9\u039e\u03a5Z".substring$I$I(c - 65, c - 64) : c >= 97 && c <= 122  ? "\u03b1\u03b2\u03c7\u03a4\u03a5\u03c6\u03b3\u03b7\u03b9_\u03ba\u03bb\u03bc\u03bd\u03bf\u03c0\u03b8\u03c1\u03c3\u03c4\u03c5_\u03c9\u03be\u03c5\u03b6".substring$I$I(c - 97, c - 96) : "_");
data=data.substring$I$I(0, pt) + ch + data.substring$I(pt + 2) ;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return data;
});

Clazz.newMeth(C$, 'parseDataBlockParameters$SA$S$S$IA$IA',  function (fields, key, data, key2col, col2key) {
this.isLoop=(key == null );
var o;
var s;
if (fields == null ) {
this.columnNames=Clazz.array(String, [100]);
} else {
if (!C$.htFields.containsKey$O(fields[0])) for (var i=fields.length; --i >= 0; ) C$.htFields.put$O$O(fields[i], Integer.valueOf$I(i));

for (var i=fields.length; --i >= 0; ) key2col[i]=-1;

}this.columnCount=0;
var pt;
var i;
if (this.isLoop) {
while (true){
o=this.peekToken$();
if (o == null ) {
this.columnCount=0;
break;
}if (!(Clazz.instanceOf(o, "java.lang.String")) || (o).charAt$I(0) != "_" ) break;
pt=this.columnCount++;
s=this.fixKey$S(this.getTokenPeeked$());
if (fields == null ) {
this.columnNames[col2key[pt]=key2col[pt]=pt]=s;
continue;
}var iField=C$.htFields.get$O(s);
i=(iField == null  ? -1 : iField.intValue$());
if ((col2key[pt]=i) != -1) key2col[i]=pt;
}
} else {
pt=key.indexOf$S(".");
var str0=(pt < 0 ? key : key.substring$I$I(0, pt + 1));
while (true){
pt=this.columnCount++;
if (key == null ) {
key=this.getTokenPeeked$();
data=this.getNextToken$();
}var iField=C$.htFields.get$O(this.fixKey$S(key));
i=(iField == null  ? -1 : iField.intValue$());
if ((col2key[pt]=i) == -1) this.columnData[pt]="";
 else this.columnData[key2col[i]=pt]=data;
if ((o=this.peekToken$()) == null  || !(Clazz.instanceOf(o, "java.lang.String"))  || !(o).startsWith$S(str0) ) break;
key=null;
}
this.haveData=(this.columnCount > 0);
}});

Clazz.newMeth(C$, 'fixKey$S',  function (key) {
return (key.startsWith$S("_magnetic") ? key.substring$I(9) : key.startsWith$S("_jana") ? key.substring$I(5) : key).replace$C$C(".", "_").toLowerCase$();
});

Clazz.newMeth(C$, 'setString$S',  function (str) {
this.str=this.line=str;
this.cch=(str == null  ? 0 : str.length$());
this.ich=0;
return str;
});

Clazz.newMeth(C$, 'prepareNextLine$',  function () {
this.setString$S(this.readLine$());
if (this.line == null  || this.line.length$() == 0 ) return this.line;
if (this.line.charAt$I(0) == ";") return this.preprocessString$();
if (this.str.startsWith$S("###non-st#")) this.ich=10;
return this.line;
});

Clazz.newMeth(C$, 'preprocessString$',  function () {
return this.setString$S(this.preprocessSemiString$());
});

Clazz.newMeth(C$, 'preprocessSemiString$',  function () {
this.ich=1;
var str='\u0001' + this.line.substring$I(1) + '\n' ;
while (this.readLine$() != null ){
if (this.line.startsWith$S(";")) {
str=str.substring$I$I(0, str.length$() - 1) + '\u0001' + this.line.substring$I(1) ;
break;
} else if (!this.skipToken) {
str+=this.line + '\n';
}}
return str;
});

Clazz.newMeth(C$, 'strHasMoreTokens',  function () {
if (this.str == null ) return false;
var ch="#";
while (this.ich < this.cch && ((ch=this.str.charAt$I(this.ich)) == " " || ch == "\t" ) )++this.ich;

return (this.ich < this.cch && ch != "#" );
}, p$1);

Clazz.newMeth(C$, 'nextStrToken',  function () {
if (this.ich == this.cch) return null;
var ch=this.str.charAt$I(this.ich);
if (this.isQuote$C(ch)) {
this.wasUnquoted=false;
return this.getQuotedStringOrObject$C(ch);
}var ichStart=this.ich;
this.wasUnquoted=true;
while (this.ich < this.cch && !this.isTerminator$C(ch=this.str.charAt$I(this.ich)) )++this.ich;

if (this.ich == ichStart + 1) if (this.nullString != null  && (this.str.charAt$I(ichStart) == "." || this.str.charAt$I(ichStart) == "?" ) ) return this.nullString;
var s=this.str.substring$I$I(ichStart, this.ich);
return this.unquoted$S(s);
}, p$1);

Clazz.newMeth(C$, 'unquoted$S',  function (s) {
return s;
});

Clazz.newMeth(C$, 'isTerminator$C',  function (c) {
return c == " " || c == "\t"  || c == this.cterm ;
});

Clazz.newMeth(C$, 'isQuote$C',  function (ch) {
switch (ch.$c()) {
case 39:
case 34:
case 1:
case 91:
case 93:
return true;
}
return false;
});

Clazz.newMeth(C$, 'getQuotedStringOrObject$C',  function (ch) {
switch (ch.$c()) {
case 91:
try {
return this.readList$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("exception in CifDataParser ; " + e);
} else {
throw e;
}
}
return "[";
case 93:
++this.ich;
return "]";
}
var ichStart=this.ich;
var chClosingQuote=ch;
var wasQuote=false;
while (++this.ich < this.cch){
ch=this.str.charAt$I(this.ich);
if (wasQuote && (ch == " " || ch == "\t" ) ) break;
wasQuote=(ch == chClosingQuote);
}
var pt1=ichStart + 1;
var pt2=this.ich - 1;
if (this.ich == this.cch && !wasQuote ) {
--pt1;
++pt2;
} else {
++this.ich;
}return this.str.substring$I$I(pt1, pt2);
});

Clazz.newMeth(C$, 'readList$',  function () {
++this.ich;
var cterm0=this.cterm;
this.cterm="]";
var ns=this.nullString;
this.nullString=null;
var lst=(this.asObject ? Clazz.new_($I$(3,1)) : null);
var n=0;
var str="";
while (true){
var value=(this.asObject ? this.getNextTokenObject$() : this.getNextToken$());
if (value == null  || value.equals$O("]") ) break;
if (this.asObject) {
lst.addLast$O(value);
} else {
if (n++ > 0) str+=",";
str+=value;
}}
this.cterm=cterm0;
this.nullString=ns;
return (this.asObject ? lst : "[" + str + "]" );
});

Clazz.newMeth(C$, 'skipNextToken$',  function () {
this.skipToken=true;
this.getNextToken$();
this.skipToken=false;
return "<skipped>";
});

C$.$static$=function(){C$.$static$=0;
C$.htFields=Clazz.new_($I$(1,1));
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
