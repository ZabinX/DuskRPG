(function(){var P$=Clazz.newPackage("java.text"),I$=[[0,'StringBuffer','java.text.PatternEntry']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PatternEntry", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Parser',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.strength=-1;
this.chars="";
this.extension="";
},1);

C$.$fields$=[['I',['strength'],'S',['chars','extension']]]

Clazz.newMeth(C$, 'appendQuotedExtension$StringBuffer',  function (toAddTo) {
C$.appendQuoted$S$StringBuffer(this.extension, toAddTo);
});

Clazz.newMeth(C$, 'appendQuotedChars$StringBuffer',  function (toAddTo) {
C$.appendQuoted$S$StringBuffer(this.chars, toAddTo);
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null ) return false;
var other=obj;
var result=this.chars.equals$O(other.chars);
return result;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.chars.hashCode$();
});

Clazz.newMeth(C$, 'toString',  function () {
var result=Clazz.new_($I$(1,1));
this.addToBuffer$StringBuffer$Z$Z$java_text_PatternEntry(result, true, false, null);
return result.toString();
});

Clazz.newMeth(C$, 'getStrength$',  function () {
return this.strength;
});

Clazz.newMeth(C$, 'getExtension$',  function () {
return this.extension;
});

Clazz.newMeth(C$, 'getChars$',  function () {
return this.chars;
});

Clazz.newMeth(C$, 'addToBuffer$StringBuffer$Z$Z$java_text_PatternEntry',  function (toAddTo, showExtension, showWhiteSpace, lastEntry) {
if (showWhiteSpace && toAddTo.length$() > 0 ) if (this.strength == 0 || lastEntry != null  ) toAddTo.append$C("\n");
 else toAddTo.append$C(" ");
if (lastEntry != null ) {
toAddTo.append$C("&");
if (showWhiteSpace) toAddTo.append$C(" ");
lastEntry.appendQuotedChars$StringBuffer(toAddTo);
this.appendQuotedExtension$StringBuffer(toAddTo);
if (showWhiteSpace) toAddTo.append$C(" ");
}switch (this.strength) {
case 3:
toAddTo.append$C("=");
break;
case 2:
toAddTo.append$C(",");
break;
case 1:
toAddTo.append$C(";");
break;
case 0:
toAddTo.append$C("<");
break;
case -2:
toAddTo.append$C("&");
break;
case -1:
toAddTo.append$C("?");
break;
}
if (showWhiteSpace) toAddTo.append$C(" ");
C$.appendQuoted$S$StringBuffer(this.chars, toAddTo);
if (showExtension && this.extension.length$() != 0 ) {
toAddTo.append$C("/");
C$.appendQuoted$S$StringBuffer(this.extension, toAddTo);
}});

Clazz.newMeth(C$, 'appendQuoted$S$StringBuffer',  function (chars, toAddTo) {
var inQuote=false;
var ch=chars.charAt$I(0);
if (Character.isSpaceChar$C(ch)) {
inQuote=true;
toAddTo.append$C("\'");
} else {
if (C$.isSpecialChar$C(ch)) {
inQuote=true;
toAddTo.append$C("\'");
} else {
switch (ch.$c()) {
case 16:
case 12:
case 13:
case 9:
case 10:
case 64:
inQuote=true;
toAddTo.append$C("\'");
break;
case 39:
inQuote=true;
toAddTo.append$C("\'");
break;
default:
if (inQuote) {
inQuote=false;
toAddTo.append$C("\'");
}break;
}
}}toAddTo.append$S(chars);
if (inQuote) toAddTo.append$C("\'");
}, 1);

Clazz.newMeth(C$, 'c$$I$StringBuffer$StringBuffer',  function (strength, chars, extension) {
;C$.$init$.apply(this);
this.strength=strength;
this.chars=chars.toString();
this.extension=(extension.length$() > 0) ? extension.toString() : "";
}, 1);

Clazz.newMeth(C$, 'isSpecialChar$C',  function (ch) {
return ((ch == " ") || ((ch <= "/") && (ch >= "\"") ) || ((ch <= "?") && (ch >= ":") ) || ((ch <= "`") && (ch >= "[") ) || ((ch <= "~") && (ch >= "{") )  );
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.PatternEntry, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.newChars=Clazz.new_($I$(1,1));
this.newExtension=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['I',['i'],'S',['pattern'],'O',['newChars','StringBuffer','+newExtension']]]

Clazz.newMeth(C$, 'c$$S',  function (pattern) {
;C$.$init$.apply(this);
this.pattern=pattern;
this.i=0;
}, 1);

Clazz.newMeth(C$, 'next$',  function () {
var newStrength=-1;
this.newChars.setLength$I(0);
this.newExtension.setLength$I(0);
var inChars=true;
var inQuote=false;
 mainLoop : while (this.i < this.pattern.length$()){
var ch=this.pattern.charAt$I(this.i);
if (inQuote) {
if (ch == "\'") {
inQuote=false;
} else {
if (this.newChars.length$() == 0) this.newChars.append$C(ch);
 else if (inChars) this.newChars.append$C(ch);
 else this.newExtension.append$C(ch);
}} else switch (ch.$c()) {
case 61:
if (newStrength != -1) break mainLoop;
newStrength=3;
break;
case 44:
if (newStrength != -1) break mainLoop;
newStrength=2;
break;
case 59:
if (newStrength != -1) break mainLoop;
newStrength=1;
break;
case 60:
if (newStrength != -1) break mainLoop;
newStrength=0;
break;
case 38:
if (newStrength != -1) break mainLoop;
newStrength=-2;
break;
case 9:
case 10:
case 12:
case 13:
case 32:
break;
case 47:
inChars=false;
break;
case 39:
inQuote=true;
ch=this.pattern.charAt$I(++this.i);
if (this.newChars.length$() == 0) this.newChars.append$C(ch);
 else if (inChars) this.newChars.append$C(ch);
 else this.newExtension.append$C(ch);
break;
default:
if (newStrength == -1) {
throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,["missing char (=,;<&) : " + this.pattern.substring$I$I(this.i, (this.i + 10 < this.pattern.length$()) ? this.i + 10 : this.pattern.length$()), this.i]);
}if ($I$(2).isSpecialChar$C(ch) && (inQuote == false ) ) throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,["Unquoted punctuation character : " + Integer.toString$I$I(ch.$c(), 16), this.i]);
if (inChars) {
this.newChars.append$C(ch);
} else {
this.newExtension.append$C(ch);
}break;
}
++this.i;
}
if (newStrength == -1) return null;
if (this.newChars.length$() == 0) {
throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,["missing chars (=,;<&): " + this.pattern.substring$I$I(this.i, (this.i + 10 < this.pattern.length$()) ? this.i + 10 : this.pattern.length$()), this.i]);
}return Clazz.new_($I$(2,1).c$$I$StringBuffer$StringBuffer,[newStrength, this.newChars, this.newExtension]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
