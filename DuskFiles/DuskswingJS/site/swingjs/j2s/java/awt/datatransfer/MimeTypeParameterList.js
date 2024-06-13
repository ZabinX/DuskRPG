(function(){var P$=Clazz.newPackage("java.awt.datatransfer"),I$=[[0,'java.util.Hashtable','StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MimeTypeParameterList", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['parameters','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.parameters=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (rawdata) {
;C$.$init$.apply(this);
this.parameters=Clazz.new_($I$(1,1));
this.parse$S(rawdata);
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
var code=47721858;
var paramName=null;
var enum_=this.getNames$();
while (enum_.hasMoreElements$()){
paramName=enum_.nextElement$();
code+=paramName.hashCode$();
code+=this.get$S(paramName).hashCode$();
}
return code;
});

Clazz.newMeth(C$, 'equals$O',  function (thatObject) {
if (!(Clazz.instanceOf(thatObject, "java.awt.datatransfer.MimeTypeParameterList"))) {
return false;
}var that=thatObject;
if (this.size$() != that.size$()) {
return false;
}var name=null;
var thisValue=null;
var thatValue=null;
var entries=this.parameters.entrySet$();
var iterator=entries.iterator$();
var entry=null;
while (iterator.hasNext$()){
entry=iterator.next$();
name=entry.getKey$();
thisValue=entry.getValue$();
thatValue=that.parameters.get$O(name);
if ((thisValue == null ) || (thatValue == null ) ) {
if (thisValue != thatValue) {
return false;
}} else if (!thisValue.equals$O(thatValue)) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'parse$S',  function (rawdata) {
var length=rawdata.length$();
if (length > 0) {
var currentIndex=C$.skipWhiteSpace$S$I(rawdata, 0);
var lastIndex=0;
if (currentIndex < length) {
var currentChar=rawdata.charAt$I(currentIndex);
while ((currentIndex < length) && (currentChar == ";") ){
var name;
var value;
var foundit;
++currentIndex;
currentIndex=C$.skipWhiteSpace$S$I(rawdata, currentIndex);
if (currentIndex < length) {
lastIndex=currentIndex;
currentChar=rawdata.charAt$I(currentIndex);
while ((currentIndex < length) && C$.isTokenChar$C(currentChar) ){
++currentIndex;
currentChar=rawdata.charAt$I(currentIndex);
}
name=rawdata.substring$I$I(lastIndex, currentIndex).toLowerCase$();
currentIndex=C$.skipWhiteSpace$S$I(rawdata, currentIndex);
if ((currentIndex < length) && (rawdata.charAt$I(currentIndex) == "=") ) {
++currentIndex;
currentIndex=C$.skipWhiteSpace$S$I(rawdata, currentIndex);
if (currentIndex < length) {
currentChar=rawdata.charAt$I(currentIndex);
if (currentChar == "\"") {
++currentIndex;
lastIndex=currentIndex;
if (currentIndex < length) {
foundit=false;
while ((currentIndex < length) && !foundit ){
currentChar=rawdata.charAt$I(currentIndex);
if (currentChar == "\\") {
currentIndex+=2;
} else if (currentChar == "\"") {
foundit=true;
} else {
++currentIndex;
}}
if (currentChar == "\"") {
value=C$.unquote$S(rawdata.substring$I$I(lastIndex, currentIndex));
++currentIndex;
} else {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.MimeTypeParseException').c$$S,["Encountered unterminated quoted parameter value."]);
}} else {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.MimeTypeParseException').c$$S,["Encountered unterminated quoted parameter value."]);
}} else if (C$.isTokenChar$C(currentChar)) {
lastIndex=currentIndex;
foundit=false;
while ((currentIndex < length) && !foundit ){
currentChar=rawdata.charAt$I(currentIndex);
if (C$.isTokenChar$C(currentChar)) {
++currentIndex;
} else {
foundit=true;
}}
value=rawdata.substring$I$I(lastIndex, currentIndex);
} else {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.MimeTypeParseException').c$$S,["Unexpected character encountered at index " + currentIndex]);
}this.parameters.put$O$O(name, value);
} else {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.MimeTypeParseException').c$$S,["Couldn't find a value for parameter named " + name]);
}} else {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.MimeTypeParseException').c$$S,["Couldn\'t find the \'=\' that separates a parameter name from its value."]);
}} else {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.MimeTypeParseException').c$$S,["Couldn\'t find parameter name"]);
}currentIndex=C$.skipWhiteSpace$S$I(rawdata, currentIndex);
if (currentIndex < length) {
currentChar=rawdata.charAt$I(currentIndex);
}}
if (currentIndex < length) {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.MimeTypeParseException').c$$S,["More characters encountered in input than expected."]);
}}}});

Clazz.newMeth(C$, 'size$',  function () {
return this.parameters.size$();
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.parameters.isEmpty$();
});

Clazz.newMeth(C$, 'get$S',  function (name) {
return this.parameters.get$O(name.trim$().toLowerCase$());
});

Clazz.newMeth(C$, 'set$S$S',  function (name, value) {
this.parameters.put$O$O(name.trim$().toLowerCase$(), value);
});

Clazz.newMeth(C$, 'remove$S',  function (name) {
this.parameters.remove$O(name.trim$().toLowerCase$());
});

Clazz.newMeth(C$, 'getNames$',  function () {
return this.parameters.keys$();
});

Clazz.newMeth(C$, 'toString',  function () {
var buffer=Clazz.new_([this.parameters.size$() * 16],$I$(2,1).c$$I);
var keys=this.parameters.keys$();
while (keys.hasMoreElements$()){
buffer.append$S("; ");
var key=keys.nextElement$();
buffer.append$S(key);
buffer.append$C("=");
buffer.append$S(C$.quote$S(this.parameters.get$O(key)));
}
return buffer.toString();
});

Clazz.newMeth(C$, 'clone$',  function () {
var newObj=null;
try {
newObj=Clazz.clone(this);
} catch (cannotHappen) {
if (Clazz.exceptionOf(cannotHappen,"CloneNotSupportedException")){
} else {
throw cannotHappen;
}
}
newObj.parameters=this.parameters.clone$();
return newObj;
});

Clazz.newMeth(C$, 'isTokenChar$C',  function (c) {
return ((c.$c() > 32 ) && (c.$c() < 127 ) ) && ("()<>@,;:\\\"/[]?=".indexOf$I(c) < 0) ;
}, 1);

Clazz.newMeth(C$, 'skipWhiteSpace$S$I',  function (rawdata, i) {
var length=rawdata.length$();
if (i < length) {
var c=rawdata.charAt$I(i);
while ((i < length) && Character.isWhitespace$C(c) ){
++i;
c=rawdata.charAt$I(i);
}
}return i;
}, 1);

Clazz.newMeth(C$, 'quote$S',  function (value) {
var needsQuotes=false;
var length=value.length$();
for (var i=0; (i < length) && !needsQuotes ; ++i) {
needsQuotes=!C$.isTokenChar$C(value.charAt$I(i));
}
if (needsQuotes) {
var buffer=Clazz.new_([((length * 1.5)|0)],$I$(2,1).c$$I);
buffer.append$C("\"");
for (var i=0; i < length; ++i) {
var c=value.charAt$I(i);
if ((c == "\\") || (c == "\"") ) {
buffer.append$C("\\");
}buffer.append$C(c);
}
buffer.append$C("\"");
return buffer.toString();
} else {
return value;
}}, 1);

Clazz.newMeth(C$, 'unquote$S',  function (value) {
var valueLength=value.length$();
var buffer=Clazz.new_($I$(2,1).c$$I,[valueLength]);
var escaped=false;
for (var i=0; i < valueLength; ++i) {
var currentChar=value.charAt$I(i);
if (!escaped && (currentChar != "\\") ) {
buffer.append$C(currentChar);
} else if (escaped) {
buffer.append$C(currentChar);
escaped=false;
} else {
escaped=true;
}}
return buffer.toString();
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
