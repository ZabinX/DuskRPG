(function(){var P$=Clazz.newPackage("java.text"),p$1={},I$=[[0,'java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChoiceFormat", null, 'java.text.NumberFormat');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['choiceLimits','double[]','choiceFormats','String[]']]]

Clazz.newMeth(C$, 'applyPattern$S',  function (newPattern) {
var segments=Clazz.array(String, -1, ["", ""]);
var newChoiceLimits=Clazz.array(Double.TYPE, [30]);
var newChoiceFormats=Clazz.array(String, [30]);
var count=0;
var part=0;
var startValue=0;
var oldStartValue=NaN;
var inQuote=false;
for (var i=0; i < newPattern.length$(); ++i) {
var ch=newPattern.charAt$I(i);
if (ch == "\'") {
if ((i + 1) < newPattern.length$() && newPattern.charAt$I(i + 1) == ch ) {
segments[part]+=ch;
++i;
} else {
inQuote=!inQuote;
}} else if (inQuote) {
segments[part]+=ch;
} else if (ch == "<" || ch == "#"  || ch == "\u2264" ) {
if (segments[0].length$() == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}try {
var tempBuffer=segments[0].toString();
if (tempBuffer.equals$O("\u221e")) {
startValue=Infinity;
} else if (tempBuffer.equals$O("-\u221e")) {
startValue=-Infinity;
} else {
startValue=Double.valueOf$S(segments[0].toString()).doubleValue$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
} else {
throw e;
}
}
if (ch == "<" && startValue != Infinity   && startValue != -Infinity  ) {
startValue=C$.nextDouble$D(startValue);
}if (startValue <= oldStartValue ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}segments[0]="";
part=1;
} else if (ch == "|") {
if (count == newChoiceLimits.length) {
newChoiceLimits=C$.doubleArraySize$DA(newChoiceLimits);
newChoiceFormats=p$1.doubleArraySize$SA.apply(this, [newChoiceFormats]);
}newChoiceLimits[count]=startValue;
newChoiceFormats[count]=segments[1].toString();
++count;
oldStartValue=startValue;
segments[1]="";
part=0;
} else {
segments[part]+=ch;
}}
if (part == 1) {
if (count == newChoiceLimits.length) {
newChoiceLimits=C$.doubleArraySize$DA(newChoiceLimits);
newChoiceFormats=p$1.doubleArraySize$SA.apply(this, [newChoiceFormats]);
}newChoiceLimits[count]=startValue;
newChoiceFormats[count]=segments[1].toString();
++count;
}this.choiceLimits=Clazz.array(Double.TYPE, [count]);
System.arraycopy$O$I$O$I$I(newChoiceLimits, 0, this.choiceLimits, 0, count);
this.choiceFormats=Clazz.array(String, [count]);
System.arraycopy$O$I$O$I$I(newChoiceFormats, 0, this.choiceFormats, 0, count);
});

Clazz.newMeth(C$, 'toPattern$',  function () {
var result="";
for (var i=0; i < this.choiceLimits.length; ++i) {
if (i != 0) {
result+="|";
}var less=C$.previousDouble$D(this.choiceLimits[i]);
var tryLessOrEqual=Math.abs(Math.IEEEremainder(this.choiceLimits[i], 1.0));
var tryLess=Math.abs(Math.IEEEremainder(less, 1.0));
if (tryLessOrEqual < tryLess ) {
result+=new Double(this.choiceLimits[i]).toString() + "#";
} else {
if (this.choiceLimits[i] == Infinity ) {
result+=("\u221E");
} else if (this.choiceLimits[i] == -Infinity ) {
result+=("-\u221E");
} else {
result+=("" + new Double(less).toString());
}result+=('<');
}var text=this.choiceFormats[i];
var needQuote=text.indexOf$I("<") >= 0 || text.indexOf$I("#") >= 0  || text.indexOf$I("\u2264") >= 0  || text.indexOf$I("|") >= 0 ;
if (needQuote) result+=('\'');
if (text.indexOf$I("\'") < 0) result+=(text);
 else {
for (var j=0; j < text.length$(); ++j) {
var c=text.charAt$I(j);
result+=(c);
if (c == "\'") result+=(c);
}
}if (needQuote) result+=('\'');
}
return result;
});

Clazz.newMeth(C$, 'c$$S',  function (newPattern) {
Clazz.super_(C$, this);
this.applyPattern$S(newPattern);
}, 1);

Clazz.newMeth(C$, 'c$$DA$SA',  function (limits, formats) {
Clazz.super_(C$, this);
this.setChoices$DA$SA(limits, formats);
}, 1);

Clazz.newMeth(C$, 'setChoices$DA$SA',  function (limits, formats) {
if (limits.length != formats.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Array and limit arrays must be of the same length."]);
}this.choiceLimits=$I$(1).copyOf$DA$I(limits, limits.length);
this.choiceFormats=$I$(1).copyOf$OA$I(formats, formats.length);
});

Clazz.newMeth(C$, 'getLimits$',  function () {
var newLimits=$I$(1).copyOf$DA$I(this.choiceLimits, this.choiceLimits.length);
return newLimits;
});

Clazz.newMeth(C$, 'getFormats$',  function () {
var newFormats=$I$(1).copyOf$OA$I(this.choiceFormats, this.choiceFormats.length);
return newFormats;
});

Clazz.newMeth(C$, 'format$J$StringBuffer$java_text_FieldPosition',  function (number, toAppendTo, status) {
return this.format$D$StringBuffer$java_text_FieldPosition(Long.$dval(number), toAppendTo, status);
});

Clazz.newMeth(C$, 'format$D$StringBuffer$java_text_FieldPosition',  function (number, toAppendTo, status) {
var i;
for (i=0; i < this.choiceLimits.length; ++i) {
if (!(number >= this.choiceLimits[i] )) {
break;
}}
--i;
if (i < 0) i=0;
var s=this.choiceFormats[i];

if (Array.isArray(toAppendTo)) { toAppendTo[0] += s;
return toAppendTo;
return toAppendTo.append$S(s);
});

Clazz.newMeth(C$, 'parse$S$java_text_ParsePosition',  function (text, status) {
var start=status.index;
var furthest=start;
var bestNumber=NaN;
var tempNumber=0.0;
for (var i=0; i < this.choiceFormats.length; ++i) {
var tempString=this.choiceFormats[i];
if (text.regionMatches$I$S$I$I(start, tempString, 0, tempString.length$())) {
status.index=start + tempString.length$();
tempNumber=this.choiceLimits[i];
if (status.index > furthest) {
furthest=status.index;
bestNumber=tempNumber;
if (furthest == text.length$()) break;
}}}
status.index=furthest;
if (status.index == start) {
status.errorIndex=furthest;
}return  new Double(bestNumber);
});

Clazz.newMeth(C$, 'nextDouble$D',  function (d) {
return C$.nextDouble$D$Z(d, true);
}, 1);

Clazz.newMeth(C$, 'previousDouble$D',  function (d) {
return C$.nextDouble$D$Z(d, false);
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
var other=C$.superclazz.prototype.clone$.apply(this, []);
other.choiceLimits=this.choiceLimits.clone$();
other.choiceFormats=this.choiceFormats.clone$();
return other;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var result=this.choiceLimits.length;
if (this.choiceFormats.length > 0) {
result^=this.choiceFormats[this.choiceFormats.length - 1].hashCode$();
}return result;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null ) return false;
if (this === obj ) return true;
if (this.getClass$() !== obj.getClass$() ) return false;
var other=obj;
return ($I$(1).equals$DA$DA(this.choiceLimits, other.choiceLimits) && $I$(1).equals$OA$OA(this.choiceFormats, other.choiceFormats) );
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function ($in) {
$in.defaultReadObject$();
if (this.choiceLimits.length != this.choiceFormats.length) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["limits and format arrays of different length."]);
}}, p$1);

Clazz.newMeth(C$, 'nextDouble$D$Z',  function (d, positive) {
if (Double.isNaN$D(d)) {
return d;
}if (d == 0.0 ) {
var smallestPositiveDouble=Double.longBitsToDouble$J(1);
if (positive) {
return smallestPositiveDouble;
} else {
return -smallestPositiveDouble;
}}var bits=Double.doubleToLongBits$D(d);
var magnitude=Long.$and(bits,(Long.$not([0,549755813888,-1])));
if ((Long.$gt(bits,0 )) == positive ) {
if (Long.$ne(magnitude,[0,549487378432,1] )) {
(magnitude=Long.$add(magnitude,(1)));
}} else {
(magnitude=Long.$sub(magnitude,(1)));
}var signbit=Long.$and(bits,[0,549755813888,-1]);
return Double.longBitsToDouble$J(Long.$or(magnitude,signbit));
}, 1);

Clazz.newMeth(C$, 'doubleArraySize$DA',  function (array) {
var oldSize=array.length;
var newArray=Clazz.array(Double.TYPE, [oldSize * 2]);
System.arraycopy$O$I$O$I$I(array, 0, newArray, 0, oldSize);
return newArray;
}, 1);

Clazz.newMeth(C$, 'doubleArraySize$SA',  function (array) {
var oldSize=array.length;
var newArray=Clazz.array(String, [oldSize * 2]);
System.arraycopy$O$I$O$I$I(array, 0, newArray, 0, oldSize);
return newArray;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
