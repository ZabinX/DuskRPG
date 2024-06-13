(function(){var P$=java.util,p$1={},p$2={},p$3={},I$=[[0,['java.util.Formatter','.Flags'],['java.util.Formatter','.Conversion'],'java.util.Calendar','java.util.Locale','java.util.Formatter','StringBuilder',['java.util.Formatter','.DateTime'],['java.util.Formatter','.FormattedFloatingDecimal'],'java.text.DateFormatSymbols','java.text.DecimalFormatSymbols','java.text.NumberFormat','java.util.regex.Pattern','javajs.util.Rdr','java.util.ArrayList',['java.util.Formatter','.FixedString'],['java.util.Formatter','.FormatSpecifier'],['java.util.Formatter','.FormatString']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Formatter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Flushable');
C$.$classes$=[['FormatString',10],['FixedString',2],['FormatSpecifier',2],['Flags',10],['Conversion',10],['DateTime',10],['FormattedFloatingDecimal',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.zero="0";
},1);

C$.$fields$=[['C',['zero'],'O',['a','Appendable','l','java.util.Locale','lastException','java.io.IOException']]
,['D',['scaleUp'],'O',['fsPattern','java.util.regex.Pattern']]]

Clazz.newMeth(C$, 'init$Appendable$java_util_Locale',  function (a, l) {
this.a=a;
this.l=l;
p$3.setZero.apply(this, []);
}, p$3);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
p$3.init$Appendable$java_util_Locale.apply(this, [Clazz.new_($I$(6,1)), $I$(4).getDefault$()]);
}, 1);

Clazz.newMeth(C$, 'c$$Appendable',  function (a) {
;C$.$init$.apply(this);
if (a == null ) a=Clazz.new_($I$(6,1));
p$3.init$Appendable$java_util_Locale.apply(this, [a, $I$(4).getDefault$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Locale',  function (l) {
;C$.$init$.apply(this);
p$3.init$Appendable$java_util_Locale.apply(this, [Clazz.new_($I$(6,1)), l]);
}, 1);

Clazz.newMeth(C$, 'c$$Appendable$java_util_Locale',  function (a, l) {
;C$.$init$.apply(this);
if (a == null ) a=Clazz.new_($I$(6,1));
p$3.init$Appendable$java_util_Locale.apply(this, [a, l]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream',  function (os) {
;C$.$init$.apply(this);
p$3.init$Appendable$java_util_Locale.apply(this, [$I$(13).getBufferedWriter$java_io_OutputStream$S(os, null), $I$(4).getDefault$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$S',  function (os, csn) {
C$.c$$java_io_OutputStream$S$java_util_Locale.apply(this, [os, csn, $I$(4).getDefault$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$S$java_util_Locale',  function (os, csn, l) {
;C$.$init$.apply(this);
p$3.init$Appendable$java_util_Locale.apply(this, [$I$(13).getBufferedWriter$java_io_OutputStream$S(os, csn), l]);
}, 1);

Clazz.newMeth(C$, 'setZero',  function () {
if ((this.l != null ) && !this.l.equals$O($I$(4).US) ) {
var dfs=$I$(10).getInstance$java_util_Locale(this.l);
this.zero=dfs.getZeroDigit$();
}}, p$3);

Clazz.newMeth(C$, 'locale$',  function () {
p$3.ensureOpen.apply(this, []);
return this.l;
});

Clazz.newMeth(C$, 'out$',  function () {
p$3.ensureOpen.apply(this, []);
return this.a;
});

Clazz.newMeth(C$, 'toString',  function () {
p$3.ensureOpen.apply(this, []);
return this.a.toString();
});

Clazz.newMeth(C$, 'flush$',  function () {
p$3.ensureOpen.apply(this, []);
if (Clazz.instanceOf(this.a, "java.io.Flushable")) {
try {
(this.a).flush$();
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
this.lastException=ioe;
} else {
throw ioe;
}
}
}});

Clazz.newMeth(C$, 'close$',  function () {
if (this.a == null ) return;
try {
if (Clazz.instanceOf(this.a, "java.io.Closeable")) (this.a).close$();
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
this.lastException=ioe;
} else {
throw ioe;
}
} finally {
this.a=null;
}
});

Clazz.newMeth(C$, 'ensureOpen',  function () {
if (this.a == null ) throw Clazz.new_(Clazz.load('java.util.FormatterClosedException'));
}, p$3);

Clazz.newMeth(C$, 'ioException$',  function () {
return this.lastException;
});

Clazz.newMeth(C$, 'format$S$OA',  function (format, args) {
return this.format$java_util_Locale$S$OA(this.l, format, args);
});

Clazz.newMeth(C$, 'format$java_util_Locale$S$OA',  function (l, format, args) {
p$3.ensureOpen.apply(this, []);
var last=-1;
var lasto=-1;
var fsa=p$3.parse$S.apply(this, [format]);
for (var i=0; i < fsa.length; i++) {
var fs=fsa[i];
var index=fs.index$();
try {
switch (index) {
case -2:
fs.printOL$O$java_util_Locale(null, l);
break;
case -1:
if (last < 0 || (args != null  && last > args.length - 1 ) ) throw Clazz.new_(Clazz.load('java.util.MissingFormatArgumentException').c$$S,[fs.toString()]);
fs.printOL$O$java_util_Locale((args == null  ? null : args[last]), l);
break;
case 0:
++lasto;
last=lasto;
if (args != null  && lasto > args.length - 1 ) throw Clazz.new_(Clazz.load('java.util.MissingFormatArgumentException').c$$S,[fs.toString()]);
fs.printOL$O$java_util_Locale((args == null  ? null : args[lasto]), l);
break;
default:
last=index - 1;
if (args != null  && last > args.length - 1 ) throw Clazz.new_(Clazz.load('java.util.MissingFormatArgumentException').c$$S,[fs.toString()]);
fs.printOL$O$java_util_Locale((args == null  ? null : args[last]), l);
break;
}
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
this.lastException=x;
} else {
throw x;
}
}
}
return this;
});

Clazz.newMeth(C$, 'parse$S',  function (s) {
var al=Clazz.new_($I$(14,1));
var m=C$.fsPattern.matcher$CharSequence(s);
var i=0;
while (i < s.length$()){
var have=m.find$I(i);
if (have) {
if (m.start$() != i) {
p$3.checkText$S.apply(this, [s.substring$I$I(i, m.start$())]);
al.add$O(Clazz.new_([this, null, s.substring$I$I(i, m.start$())],$I$(15,1).c$$S));
}var n=m.groupCount$();
var sa=Clazz.array(String, [n]);
for (var j=0; j < n; j++) {
sa[j]=m.group$I(j + 1);
}
al.add$O(Clazz.new_($I$(16,1).c$$java_util_Formatter$SA,[this, null, this, sa]));
i=m.end$();
} else {
p$3.checkText$S.apply(this, [s.substring$I(i)]);
al.add$O(Clazz.new_([this, null, s.substring$I(i)],$I$(15,1).c$$S));
break;
}}
return al.toArray$OA(Clazz.array($I$(17), [0]));
}, p$3);

Clazz.newMeth(C$, 'checkText$S',  function (s) {
var idx;
if ((idx=s.indexOf$I("%")) != -1) {
var c=(idx > s.length$() - 2 ? "%" : s.charAt$I(idx + 1));
throw Clazz.new_(Clazz.load('java.util.UnknownFormatConversionException').c$$S,[String.valueOf$C(c)]);
}}, p$3);

C$.$static$=function(){C$.$static$=0;
C$.fsPattern=$I$(12,"compile$S",["%(\\d+\\$)?([-#+ 0,(\\<]*)?(\\d+)?(\\.\\d+)?([tT])?([a-zA-Z%])"]);
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Formatter, "FormatString", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Formatter, "FixedString", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.Formatter','java.util.Formatter.FormatString']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['s']]]

Clazz.newMeth(C$, 'c$$S',  function (s) {
;C$.$init$.apply(this);
this.s=s;
}, 1);

Clazz.newMeth(C$, 'index$',  function () {
return -2;
});

Clazz.newMeth(C$, 'printOL$O$java_util_Locale',  function (arg, l) {
this.b$['java.util.Formatter'].a.append$CharSequence(this.s);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.s;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Formatter, "FormatSpecifier", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.Formatter','java.util.Formatter.FormatString']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.index=-1;
this.f=$I$(1).NONE;
this.dt=false;
},1);

C$.$fields$=[['Z',['dt'],'C',['c'],'I',['index','width','precision'],'S',['ls'],'O',['f','java.util.Formatter.Flags','formatter','java.util.Formatter']]]

Clazz.newMeth(C$, 'index$S',  function (s) {
if (s != null ) {
try {
this.index=Integer.parseInt$S(s.substring$I$I(0, s.length$() - 1));
} catch (x) {
if (Clazz.exceptionOf(x,"NumberFormatException")){
Clazz.assert(C$, this, function(){return (false)});
} else {
throw x;
}
}
} else {
this.index=0;
}return this.index;
}, p$1);

Clazz.newMeth(C$, 'index$',  function () {
return this.index;
});

Clazz.newMeth(C$, 'flags$S',  function (s) {
this.f=$I$(1).parse$S(s);
if (this.f.contains$java_util_Formatter_Flags($I$(1).PREVIOUS)) this.index=-1;
return this.f;
}, p$1);

Clazz.newMeth(C$, 'width$S',  function (s) {
this.width=-1;
if (s != null ) {
try {
this.width=Integer.parseInt$S(s);
if (this.width < 0) throw Clazz.new_(Clazz.load('java.util.IllegalFormatWidthException').c$$I,[this.width]);
} catch (x) {
if (Clazz.exceptionOf(x,"NumberFormatException")){
Clazz.assert(C$, this, function(){return (false)});
} else {
throw x;
}
}
}return this.width;
}, p$1);

Clazz.newMeth(C$, 'precision$S',  function (s) {
this.precision=-1;
if (s != null ) {
try {
this.precision=Integer.parseInt$S(s.substring$I(1));
if (this.precision < 0) throw Clazz.new_(Clazz.load('java.util.IllegalFormatPrecisionException').c$$I,[this.precision]);
} catch (x) {
if (Clazz.exceptionOf(x,"NumberFormatException")){
Clazz.assert(C$, this, function(){return (false)});
} else {
throw x;
}
}
}return this.precision;
}, p$1);

Clazz.newMeth(C$, 'conversion$S',  function (s) {
this.c=s.charAt$I(0);
if (!this.dt) {
if (!$I$(2).isValid$C(this.c)) throw Clazz.new_(Clazz.load('java.util.UnknownFormatConversionException').c$$S,[String.valueOf$C(this.c)]);
if (Character.isUpperCase$C(this.c)) this.f.add$java_util_Formatter_Flags($I$(1).UPPERCASE);
this.c=Character.toLowerCase$C(this.c);
if ($I$(2).isText$C(this.c)) this.index=-2;
}return this.c;
}, p$1);

Clazz.newMeth(C$, 'c$$java_util_Formatter$SA',  function (formatter, sa) {
;C$.$init$.apply(this);
this.formatter=formatter;
p$1.index$S.apply(this, [sa[0]]);
p$1.flags$S.apply(this, [sa[1]]);
p$1.width$S.apply(this, [sa[2]]);
p$1.precision$S.apply(this, [sa[3]]);
if (sa[4] != null ) {
this.dt=true;
if (sa[4].equals$O("T")) this.f.add$java_util_Formatter_Flags($I$(1).UPPERCASE);
}p$1.conversion$S.apply(this, [sa[5]]);
if (this.dt) p$1.checkDateTime.apply(this, []);
 else if ($I$(2).isGeneral$C(this.c)) p$1.checkGeneral.apply(this, []);
 else if ($I$(2).isCharacter$C(this.c)) p$1.checkCharacter.apply(this, []);
 else if ($I$(2).isInteger$C(this.c)) p$1.checkInteger.apply(this, []);
 else if ($I$(2).isFloat$C(this.c)) p$1.checkFloat.apply(this, []);
 else if ($I$(2).isText$C(this.c)) p$1.checkText.apply(this, []);
 else throw Clazz.new_(Clazz.load('java.util.UnknownFormatConversionException').c$$S,[String.valueOf$C(this.c)]);
}, 1);

Clazz.newMeth(C$, 'printOL$O$java_util_Locale',  function (arg, l) {
if (this.dt) {
p$1.printDateTime$O$java_util_Locale.apply(this, [arg, l]);
return;
}switch (this.c.$c()) {
case 100:
case 111:
case 120:
p$1.printInteger$O$java_util_Locale.apply(this, [arg, l]);
break;
case 101:
case 103:
case 102:
case 97:
p$1.printFloat$O$java_util_Locale.apply(this, [arg, l]);
break;
case 99:
case 67:
p$1.printCharacter$O.apply(this, [arg]);
break;
case 98:
p$1.printBoolean$O.apply(this, [arg]);
break;
case 115:
p$1.printString$O$java_util_Locale.apply(this, [arg, l]);
break;
case 104:
p$1.printHashCode$O.apply(this, [arg]);
break;
case 110:
if (this.ls == null ) this.ls=System.getProperty$S("line.separator");
this.b$['java.util.Formatter'].a.append$CharSequence(this.ls);
break;
case 37:
this.b$['java.util.Formatter'].a.append$CharSequence("%");
break;
default:
Clazz.assert(C$, this, function(){return false});
}
});

Clazz.newMeth(C$, 'printInteger$O$java_util_Locale',  function (arg, l) {
if (arg == null ) p$1.printS$S.apply(this, ["null"]);
 else if (Clazz.instanceOf(arg, "java.lang.Byte")) p$1.printB$B$java_util_Locale.apply(this, [(arg).byteValue$(), l]);
 else if (Clazz.instanceOf(arg, "java.lang.Short")) p$1.printSh$H$java_util_Locale.apply(this, [(arg).shortValue$(), l]);
 else if (Clazz.instanceOf(arg, "java.lang.Integer")) p$1.printI$I$java_util_Locale.apply(this, [(arg).intValue$(), l]);
 else if (Clazz.instanceOf(arg, "java.lang.Long")) p$1.printL$J$java_util_Locale.apply(this, [(arg).longValue$(), l]);
 else p$1.failConversion$C$O.apply(this, [this.c, arg]);
}, p$1);

Clazz.newMeth(C$, 'printFloat$O$java_util_Locale',  function (arg, l) {
if (arg == null ) p$1.printS$S.apply(this, ["null"]);
 else if (Clazz.instanceOf(arg, "java.lang.Float")) p$1.printF$F$java_util_Locale.apply(this, [(arg).floatValue$(), l]);
 else if (Clazz.instanceOf(arg, "java.lang.Double")) p$1.printDL$D$java_util_Locale.apply(this, [(arg).doubleValue$(), l]);
 else p$1.failConversion$C$O.apply(this, [this.c, arg]);
}, p$1);

Clazz.newMeth(C$, 'printDateTime$O$java_util_Locale',  function (arg, l) {
if (arg == null ) {
p$1.printS$S.apply(this, ["null"]);
return;
}var cal=null;
if (Clazz.instanceOf(arg, "java.util.Date")) {
cal=$I$(3,"getInstance$java_util_Locale",[l == null  ? $I$(4).US : l]);
cal.setTime$java_util_Date(arg);
} else if (Clazz.instanceOf(arg, "java.util.Calendar")) {
cal=(arg).clone$();
cal.setLenient$Z(true);
} else {
p$1.failConversion$C$O.apply(this, [this.c, arg]);
}p$1.printDT$java_util_Calendar$C$java_util_Locale.apply(this, [cal, this.c, l]);
}, p$1);

Clazz.newMeth(C$, 'printCharacter$O',  function (arg) {
if (arg == null ) {
p$1.printS$S.apply(this, ["null"]);
return;
}var s=null;
if (Clazz.instanceOf(arg, "java.lang.Character")) {
s=(arg).toString();
} else if (Clazz.instanceOf(arg, "java.lang.Byte")) {
var i=(arg).byteValue$();
if (Character.isValidCodePoint$I(i)) s= String.instantialize(Character.toChars$I(i));
 else throw Clazz.new_(Clazz.load('java.util.IllegalFormatCodePointException').c$$I,[i]);
} else if (Clazz.instanceOf(arg, "java.lang.Short")) {
var i=(arg).shortValue$();
if (Character.isValidCodePoint$I(i)) s= String.instantialize(Character.toChars$I(i));
 else throw Clazz.new_(Clazz.load('java.util.IllegalFormatCodePointException').c$$I,[i]);
} else if (Clazz.instanceOf(arg, "java.lang.Integer")) {
var i=(arg).intValue$();
if (Character.isValidCodePoint$I(i)) s= String.instantialize(Character.toChars$I(i));
 else throw Clazz.new_(Clazz.load('java.util.IllegalFormatCodePointException').c$$I,[i]);
} else {
p$1.failConversion$C$O.apply(this, [this.c, arg]);
}p$1.printS$S.apply(this, [s]);
}, p$1);

Clazz.newMeth(C$, 'printString$O$java_util_Locale',  function (arg, l) {
if (arg == null ) {
p$1.printS$S.apply(this, ["null"]);
} else if (Clazz.instanceOf(arg, "java.util.Formattable")) {
var fmt=this.formatter;
if (this.formatter.locale$() !== l ) fmt=Clazz.new_([this.formatter.out$(), l],$I$(5,1).c$$Appendable$java_util_Locale);
(arg).formatTo$java_util_Formatter$I$I$I(fmt, this.f.valueOf$(), this.width, this.precision);
} else {
p$1.printS$S.apply(this, [arg.toString()]);
}}, p$1);

Clazz.newMeth(C$, 'printBoolean$O',  function (arg) {
var s;
if (arg != null ) s=((Clazz.instanceOf(arg, "java.lang.Boolean")) ? (arg).toString() : "true");
 else s="false";
p$1.printS$S.apply(this, [s]);
}, p$1);

Clazz.newMeth(C$, 'printHashCode$O',  function (arg) {
var s=(arg == null  ? "null" : Integer.toHexString$I(arg.hashCode$()));
p$1.printS$S.apply(this, [s]);
}, p$1);

Clazz.newMeth(C$, 'printS$S',  function (s) {
if (this.precision != -1 && this.precision < s.length$() ) s=s.substring$I$I(0, this.precision);
if (this.f.contains$java_util_Formatter_Flags($I$(1).UPPERCASE)) s=s.toUpperCase$();
this.b$['java.util.Formatter'].a.append$CharSequence(p$1.justify$S.apply(this, [s]));
}, p$1);

Clazz.newMeth(C$, 'justify$S',  function (s) {
if (this.width == -1) return s;
var sb=Clazz.new_($I$(6,1));
var pad=this.f.contains$java_util_Formatter_Flags($I$(1).LEFT_JUSTIFY);
var sp=this.width - s.length$();
if (!pad) for (var i=0; i < sp; i++) sb.append$C(" ");

sb.append$S(s);
if (pad) for (var i=0; i < sp; i++) sb.append$C(" ");

return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_(["%".$c()],$I$(6,1).c$$I);
var dupf=this.f.dup$().remove$java_util_Formatter_Flags($I$(1).UPPERCASE);
sb.append$S(dupf.toString());
if (this.index > 0) sb.append$I(this.index).append$C("$");
if (this.width != -1) sb.append$I(this.width);
if (this.precision != -1) sb.append$C(".").append$I(this.precision);
if (this.dt) sb.append$C(this.f.contains$java_util_Formatter_Flags($I$(1).UPPERCASE) ? "T" : "t");
sb.append$C(this.f.contains$java_util_Formatter_Flags($I$(1).UPPERCASE) ? Character.toUpperCase$C(this.c) : this.c);
return sb.toString();
});

Clazz.newMeth(C$, 'checkGeneral',  function () {
if ((this.c == "b" || this.c == "h" ) && this.f.contains$java_util_Formatter_Flags($I$(1).ALTERNATE) ) p$1.failMismatch$java_util_Formatter_Flags$C.apply(this, [$I$(1).ALTERNATE, this.c]);
if (this.width == -1 && this.f.contains$java_util_Formatter_Flags($I$(1).LEFT_JUSTIFY) ) throw Clazz.new_(Clazz.load('java.util.MissingFormatWidthException').c$$S,[this.toString()]);
p$1.checkBadFlags$java_util_Formatter_FlagsA.apply(this, [Clazz.array($I$(1), -1, [$I$(1).PLUS, $I$(1).LEADING_SPACE, $I$(1).ZERO_PAD, $I$(1).GROUP, $I$(1).PARENTHESES])]);
}, p$1);

Clazz.newMeth(C$, 'checkDateTime',  function () {
if (this.precision != -1) throw Clazz.new_(Clazz.load('java.util.IllegalFormatPrecisionException').c$$I,[this.precision]);
if (!$I$(7).isValid$C(this.c)) throw Clazz.new_(Clazz.load('java.util.UnknownFormatConversionException').c$$S,["t" + this.c]);
p$1.checkBadFlags$java_util_Formatter_FlagsA.apply(this, [Clazz.array($I$(1), -1, [$I$(1).ALTERNATE, $I$(1).PLUS, $I$(1).LEADING_SPACE, $I$(1).ZERO_PAD, $I$(1).GROUP, $I$(1).PARENTHESES])]);
if (this.width == -1 && this.f.contains$java_util_Formatter_Flags($I$(1).LEFT_JUSTIFY) ) throw Clazz.new_(Clazz.load('java.util.MissingFormatWidthException').c$$S,[this.toString()]);
}, p$1);

Clazz.newMeth(C$, 'checkCharacter',  function () {
if (this.precision != -1) throw Clazz.new_(Clazz.load('java.util.IllegalFormatPrecisionException').c$$I,[this.precision]);
p$1.checkBadFlags$java_util_Formatter_FlagsA.apply(this, [Clazz.array($I$(1), -1, [$I$(1).ALTERNATE, $I$(1).PLUS, $I$(1).LEADING_SPACE, $I$(1).ZERO_PAD, $I$(1).GROUP, $I$(1).PARENTHESES])]);
if (this.width == -1 && this.f.contains$java_util_Formatter_Flags($I$(1).LEFT_JUSTIFY) ) throw Clazz.new_(Clazz.load('java.util.MissingFormatWidthException').c$$S,[this.toString()]);
}, p$1);

Clazz.newMeth(C$, 'checkInteger',  function () {
p$1.checkNumeric.apply(this, []);
if (this.precision != -1) throw Clazz.new_(Clazz.load('java.util.IllegalFormatPrecisionException').c$$I,[this.precision]);
if (this.c == "d") p$1.checkBadFlags$java_util_Formatter_FlagsA.apply(this, [Clazz.array($I$(1), -1, [$I$(1).ALTERNATE])]);
 else if (this.c == "o") p$1.checkBadFlags$java_util_Formatter_FlagsA.apply(this, [Clazz.array($I$(1), -1, [$I$(1).GROUP])]);
 else p$1.checkBadFlags$java_util_Formatter_FlagsA.apply(this, [Clazz.array($I$(1), -1, [$I$(1).GROUP])]);
}, p$1);

Clazz.newMeth(C$, 'checkBadFlags$java_util_Formatter_FlagsA',  function (badFlags) {
for (var i=0; i < badFlags.length; i++) if (this.f.contains$java_util_Formatter_Flags(badFlags[i])) p$1.failMismatch$java_util_Formatter_Flags$C.apply(this, [badFlags[i], this.c]);

}, p$1);

Clazz.newMeth(C$, 'checkFloat',  function () {
p$1.checkNumeric.apply(this, []);
if (this.c == "f") {
} else if (this.c == "a") {
p$1.checkBadFlags$java_util_Formatter_FlagsA.apply(this, [Clazz.array($I$(1), -1, [$I$(1).PARENTHESES, $I$(1).GROUP])]);
} else if (this.c == "e") {
p$1.checkBadFlags$java_util_Formatter_FlagsA.apply(this, [Clazz.array($I$(1), -1, [$I$(1).GROUP])]);
} else if (this.c == "g") {
p$1.checkBadFlags$java_util_Formatter_FlagsA.apply(this, [Clazz.array($I$(1), -1, [$I$(1).ALTERNATE])]);
}}, p$1);

Clazz.newMeth(C$, 'checkNumeric',  function () {
if (this.width != -1 && this.width < 0 ) throw Clazz.new_(Clazz.load('java.util.IllegalFormatWidthException').c$$I,[this.width]);
if (this.precision != -1 && this.precision < 0 ) throw Clazz.new_(Clazz.load('java.util.IllegalFormatPrecisionException').c$$I,[this.precision]);
if (this.width == -1 && (this.f.contains$java_util_Formatter_Flags($I$(1).LEFT_JUSTIFY) || this.f.contains$java_util_Formatter_Flags($I$(1).ZERO_PAD) ) ) throw Clazz.new_(Clazz.load('java.util.MissingFormatWidthException').c$$S,[this.toString()]);
if ((this.f.contains$java_util_Formatter_Flags($I$(1).PLUS) && this.f.contains$java_util_Formatter_Flags($I$(1).LEADING_SPACE) ) || (this.f.contains$java_util_Formatter_Flags($I$(1).LEFT_JUSTIFY) && this.f.contains$java_util_Formatter_Flags($I$(1).ZERO_PAD) ) ) throw Clazz.new_(Clazz.load('java.util.IllegalFormatFlagsException').c$$S,[this.f.toString()]);
}, p$1);

Clazz.newMeth(C$, 'checkText',  function () {
if (this.precision != -1) throw Clazz.new_(Clazz.load('java.util.IllegalFormatPrecisionException').c$$I,[this.precision]);
switch (this.c.$c()) {
case 37:
if (this.f.valueOf$() != $I$(1).LEFT_JUSTIFY.valueOf$() && this.f.valueOf$() != $I$(1).NONE.valueOf$() ) throw Clazz.new_(Clazz.load('java.util.IllegalFormatFlagsException').c$$S,[this.f.toString()]);
if (this.width == -1 && this.f.contains$java_util_Formatter_Flags($I$(1).LEFT_JUSTIFY) ) throw Clazz.new_(Clazz.load('java.util.MissingFormatWidthException').c$$S,[this.toString()]);
break;
case 110:
if (this.width != -1) throw Clazz.new_(Clazz.load('java.util.IllegalFormatWidthException').c$$I,[this.width]);
if (this.f.valueOf$() != $I$(1).NONE.valueOf$()) throw Clazz.new_(Clazz.load('java.util.IllegalFormatFlagsException').c$$S,[this.f.toString()]);
break;
default:
Clazz.assert(C$, this, function(){return false});
}
}, p$1);

Clazz.newMeth(C$, 'printB$B$java_util_Locale',  function (value, l) {
var v=value;
if (value < 0 && (this.c == "o" || this.c == "x" ) ) {
(v=Long.$add(v,((256))));
Clazz.assert(C$, this, function(){return Long.$ge(v,0 )}, function(){return v});
}p$1.printL$J$java_util_Locale.apply(this, [v, l]);
}, p$1);

Clazz.newMeth(C$, 'printSh$H$java_util_Locale',  function (value, l) {
var v=value;
if (value < 0 && (this.c == "o" || this.c == "x" ) ) {
(v=Long.$add(v,((65536))));
Clazz.assert(C$, this, function(){return Long.$ge(v,0 )}, function(){return v});
}p$1.printL$J$java_util_Locale.apply(this, [v, l]);
}, p$1);

Clazz.newMeth(C$, 'printI$I$java_util_Locale',  function (value, l) {
var v=value;
if (value < 0 && (this.c == "o" || this.c == "x" ) ) {
(v=Long.$add(v,((4294967296))));
Clazz.assert(C$, this, function(){return Long.$ge(v,0 )}, function(){return v});
}p$1.printL$J$java_util_Locale.apply(this, [v, l]);
}, p$1);

Clazz.newMeth(C$, 'printL$J$java_util_Locale',  function (value, l) {
var sb=Clazz.new_($I$(6,1));
if (this.c == "d") {
var neg=Long.$lt(value,0 );
var va;
if (Long.$lt(value,0 )) va=Long.toString$J$I(value, 10).substring$I(1).toCharArray$();
 else va=Long.toString$J$I(value, 10).toCharArray$();
p$1.leadingSign$StringBuilder$Z.apply(this, [sb, neg]);
p$1.localizedMagnitude$StringBuilder$CA$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [sb, va, this.f, p$1.adjustWidth$I$java_util_Formatter_Flags$Z.apply(this, [this.width, this.f, neg]), l]);
p$1.trailingSign$StringBuilder$Z.apply(this, [sb, neg]);
} else if (this.c == "o") {
p$1.checkBadFlags$java_util_Formatter_FlagsA.apply(this, [Clazz.array($I$(1), -1, [$I$(1).PARENTHESES, $I$(1).LEADING_SPACE, $I$(1).PLUS])]);
var s=Long.toOctalString$J(value);
var len=(this.f.contains$java_util_Formatter_Flags($I$(1).ALTERNATE) ? s.length$() + 1 : s.length$());
if (this.f.contains$java_util_Formatter_Flags($I$(1).ALTERNATE)) sb.append$C("0");
if (this.f.contains$java_util_Formatter_Flags($I$(1).ZERO_PAD)) for (var i=0; i < this.width - len; i++) sb.append$C("0");

sb.append$S(s);
} else if (this.c == "x") {
p$1.checkBadFlags$java_util_Formatter_FlagsA.apply(this, [Clazz.array($I$(1), -1, [$I$(1).PARENTHESES, $I$(1).LEADING_SPACE, $I$(1).PLUS])]);
var s=Long.toHexString$J(value);
var len=(this.f.contains$java_util_Formatter_Flags($I$(1).ALTERNATE) ? s.length$() + 2 : s.length$());
if (this.f.contains$java_util_Formatter_Flags($I$(1).ALTERNATE)) sb.append$S(this.f.contains$java_util_Formatter_Flags($I$(1).UPPERCASE) ? "0X" : "0x");
if (this.f.contains$java_util_Formatter_Flags($I$(1).ZERO_PAD)) for (var i=0; i < this.width - len; i++) sb.append$C("0");

if (this.f.contains$java_util_Formatter_Flags($I$(1).UPPERCASE)) s=s.toUpperCase$();
sb.append$S(s);
}this.b$['java.util.Formatter'].a.append$CharSequence(p$1.justify$S.apply(this, [sb.toString()]));
}, p$1);

Clazz.newMeth(C$, 'leadingSign$StringBuilder$Z',  function (sb, neg) {
if (!neg) {
if (this.f.contains$java_util_Formatter_Flags($I$(1).PLUS)) {
sb.append$C("+");
} else if (this.f.contains$java_util_Formatter_Flags($I$(1).LEADING_SPACE)) {
sb.append$C(" ");
}} else {
if (this.f.contains$java_util_Formatter_Flags($I$(1).PARENTHESES)) sb.append$C("(");
 else sb.append$C("-");
}return sb;
}, p$1);

Clazz.newMeth(C$, 'trailingSign$StringBuilder$Z',  function (sb, neg) {
if (neg && this.f.contains$java_util_Formatter_Flags($I$(1).PARENTHESES) ) sb.append$C(")");
return sb;
}, p$1);

Clazz.newMeth(C$, 'printF$F$java_util_Locale',  function (value, l) {
p$1.printDL$D$java_util_Locale.apply(this, [value, l]);
}, p$1);

Clazz.newMeth(C$, 'printDL$D$java_util_Locale',  function (value, l) {
var sb=Clazz.new_($I$(6,1));
var neg=Double.compare$D$D(value, 0.0) == -1;
if (!Double.isNaN$D(value)) {
var v=Math.abs(value);
p$1.leadingSign$StringBuilder$Z.apply(this, [sb, neg]);
if (!Double.isInfinite$D(v)) p$1.printD$StringBuilder$D$java_util_Locale$java_util_Formatter_Flags$C$I$Z.apply(this, [sb, v, l, this.f, this.c, this.precision, neg]);
 else sb.append$S(this.f.contains$java_util_Formatter_Flags($I$(1).UPPERCASE) ? "INFINITY" : "Infinity");
p$1.trailingSign$StringBuilder$Z.apply(this, [sb, neg]);
} else {
sb.append$S(this.f.contains$java_util_Formatter_Flags($I$(1).UPPERCASE) ? "NAN" : "NaN");
}this.b$['java.util.Formatter'].a.append$CharSequence(p$1.justify$S.apply(this, [sb.toString()]));
}, p$1);

Clazz.newMeth(C$, 'printD$StringBuilder$D$java_util_Locale$java_util_Formatter_Flags$C$I$Z',  function (sb, value, l, f, c, precision, neg) {
if (c == "e") {
var prec=(precision == -1 ? 6 : precision);
var fd=Clazz.new_($I$(8,1).c$$D$I$I,[this, null, value, prec, 2]);
var v=Clazz.array(Character.TYPE, [30]);
var len=fd.getChars$CA(v);
var mant=p$1.addZeros$CA$I.apply(this, [p$1.mantissa$CA$I.apply(this, [v, len]), prec]);
if (f.contains$java_util_Formatter_Flags($I$(1).ALTERNATE) && (prec == 0) ) mant=p$1.addDot$CA.apply(this, [mant]);
var exp=(value == 0.0 ) ? Clazz.array(Character.TYPE, -1, ["+", "0", "0"]) : p$1.exponent$CA$I.apply(this, [v, len]);
var newW=this.width;
if (this.width != -1) newW=p$1.adjustWidth$I$java_util_Formatter_Flags$Z.apply(this, [this.width - exp.length - 1 , f, neg]);
p$1.localizedMagnitude$StringBuilder$CA$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [sb, mant, f, newW, l]);
sb.append$C(f.contains$java_util_Formatter_Flags($I$(1).UPPERCASE) ? "E" : "e");
var flags=f.dup$().remove$java_util_Formatter_Flags($I$(1).GROUP);
var sign=exp[0];
sb.append$C(sign);
var tmp=Clazz.array(Character.TYPE, [exp.length - 1]);
System.arraycopy$O$I$O$I$I(exp, 1, tmp, 0, exp.length - 1);
sb.append$CharSequence(p$1.localizedMagnitude$StringBuilder$CA$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [null, tmp, flags, -1, l]));
} else if (c == "f") {
var prec=(precision == -1 ? 6 : precision);
var fd=Clazz.new_($I$(8,1).c$$D$I$I,[this, null, value, prec, 1]);
var v=Clazz.array(Character.TYPE, [30 + 1 + Math.abs(fd.getExponent$()) ]);
var len=fd.getChars$CA(v);
var mant=p$1.addZeros$CA$I.apply(this, [p$1.mantissa$CA$I.apply(this, [v, len]), prec]);
if (f.contains$java_util_Formatter_Flags($I$(1).ALTERNATE) && (prec == 0) ) mant=p$1.addDot$CA.apply(this, [mant]);
var newW=this.width;
if (this.width != -1) newW=p$1.adjustWidth$I$java_util_Formatter_Flags$Z.apply(this, [this.width, f, neg]);
p$1.localizedMagnitude$StringBuilder$CA$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [sb, mant, f, newW, l]);
} else if (c == "g") {
var prec=precision;
if (precision == -1) prec=6;
 else if (precision == 0) prec=1;
var fd=Clazz.new_($I$(8,1).c$$D$I$I,[this, null, value, prec, 0]);
var v=Clazz.array(Character.TYPE, [30 + 1 + Math.abs(fd.getExponent$()) ]);
var len=fd.getChars$CA(v);
var exp=p$1.exponent$CA$I.apply(this, [v, len]);
if (exp != null ) {
prec-=1;
} else {
prec=prec - (value == 0  ? 0 : fd.getExponentRounded$()) - 1 ;
}var mant=p$1.addZeros$CA$I.apply(this, [p$1.mantissa$CA$I.apply(this, [v, len]), prec]);
if (f.contains$java_util_Formatter_Flags($I$(1).ALTERNATE) && (prec == 0) ) mant=p$1.addDot$CA.apply(this, [mant]);
var newW=this.width;
if (this.width != -1) {
if (exp != null ) newW=p$1.adjustWidth$I$java_util_Formatter_Flags$Z.apply(this, [this.width - exp.length - 1 , f, neg]);
 else newW=p$1.adjustWidth$I$java_util_Formatter_Flags$Z.apply(this, [this.width, f, neg]);
}p$1.localizedMagnitude$StringBuilder$CA$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [sb, mant, f, newW, l]);
if (exp != null ) {
sb.append$C(f.contains$java_util_Formatter_Flags($I$(1).UPPERCASE) ? "E" : "e");
var flags=f.dup$().remove$java_util_Formatter_Flags($I$(1).GROUP);
var sign=exp[0];
sb.append$C(sign);
var tmp=Clazz.array(Character.TYPE, [exp.length - 1]);
System.arraycopy$O$I$O$I$I(exp, 1, tmp, 0, exp.length - 1);
sb.append$CharSequence(p$1.localizedMagnitude$StringBuilder$CA$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [null, tmp, flags, -1, l]));
}} else if (c == "a") {
var prec=precision;
if (precision == -1) prec=0;
 else if (precision == 0) prec=1;
var s=p$1.hexDouble$D$I.apply(this, [value, prec]);
var va;
var upper=f.contains$java_util_Formatter_Flags($I$(1).UPPERCASE);
sb.append$S(upper ? "0X" : "0x");
if (f.contains$java_util_Formatter_Flags($I$(1).ZERO_PAD)) for (var i=0; i < this.width - s.length$() - 2 ; i++) sb.append$C("0");

var idx=s.indexOf$I("p");
va=s.substring$I$I(0, idx).toCharArray$();
if (upper) {
var tmp= String.instantialize(va);
tmp=tmp.toUpperCase$();
va=tmp.toCharArray$();
}sb.append$CA(prec != 0 ? p$1.addZeros$CA$I.apply(this, [va, prec]) : va);
sb.append$C(upper ? "P" : "p");
sb.append$S(s.substring$I(idx + 1));
}}, p$1);

Clazz.newMeth(C$, 'mantissa$CA$I',  function (v, len) {
var i;
for (i=0; i < len; i++) {
if (v[i] == "e") break;
}
var tmp=Clazz.array(Character.TYPE, [i]);
System.arraycopy$O$I$O$I$I(v, 0, tmp, 0, i);
return tmp;
}, p$1);

Clazz.newMeth(C$, 'exponent$CA$I',  function (v, len) {
var i;
for (i=len - 1; i >= 0; i--) {
if (v[i] == "e") break;
}
if (i == -1) return null;
var tmp=Clazz.array(Character.TYPE, [len - i - 1 ]);
System.arraycopy$O$I$O$I$I(v, i + 1, tmp, 0, len - i - 1 );
return tmp;
}, p$1);

Clazz.newMeth(C$, 'addZeros$CA$I',  function (v, prec) {
var i;
for (i=0; i < v.length; i++) {
if (v[i] == ".") break;
}
var needDot=false;
if (i == v.length) {
needDot=true;
}var outPrec=v.length - i - (needDot ? 0 : 1) ;
Clazz.assert(C$, this, function(){return (outPrec <= prec)});
if (outPrec == prec) return v;
var tmp=Clazz.array(Character.TYPE, [v.length + prec - outPrec + (needDot ? 1 : 0)]);
System.arraycopy$O$I$O$I$I(v, 0, tmp, 0, v.length);
var start=v.length;
if (needDot) {
tmp[v.length]=".";
++start;
}for (var j=start; j < tmp.length; j++) tmp[j]="0";

return tmp;
}, p$1);

Clazz.newMeth(C$, 'hexDouble$D$I',  function (d, prec) {
return Integer.toHexString$I((d|0));
}, p$1);

Clazz.newMeth(C$, 'adjustWidth$I$java_util_Formatter_Flags$Z',  function (width, f, neg) {
var newW=width;
if (newW != -1 && neg  && f.contains$java_util_Formatter_Flags($I$(1).PARENTHESES) ) --newW;
return newW;
}, p$1);

Clazz.newMeth(C$, 'addDot$CA',  function (mant) {
var tmp=mant;
tmp=Clazz.array(Character.TYPE, [mant.length + 1]);
System.arraycopy$O$I$O$I$I(mant, 0, tmp, 0, mant.length);
tmp[tmp.length - 1]=".";
return tmp;
}, p$1);

Clazz.newMeth(C$, 'printDT$java_util_Calendar$C$java_util_Locale',  function (t, c, l) {
var sb=Clazz.new_($I$(6,1));
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, c, l]);
var s=p$1.justify$S.apply(this, [sb.toString()]);
if (this.f.contains$java_util_Formatter_Flags($I$(1).UPPERCASE)) s=s.toUpperCase$();
this.b$['java.util.Formatter'].a.append$CharSequence(s);
}, p$1);

Clazz.newMeth(C$, 'printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale',  function (sb, t, c, l) {
if (sb == null ) sb=Clazz.new_($I$(6,1));
switch (c.$c()) {
case 72:
case 73:
case 107:
case 108:
{
var i=t.get$I(11);
if (c == "I" || c == "l" ) i=(i == 0 || i == 12  ? 12 : i % 12);
var flags=(c == "H" || c == "I"  ? $I$(1).ZERO_PAD : $I$(1).NONE);
sb.append$CharSequence(p$1.localizedMagnitude$StringBuilder$J$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [null, i, flags, 2, l]));
break;
}case 77:
{
var i=t.get$I(12);
var flags=$I$(1).ZERO_PAD;
sb.append$CharSequence(p$1.localizedMagnitude$StringBuilder$J$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [null, i, flags, 2, l]));
break;
}case 78:
{
var i=t.get$I(14) * 1000000;
var flags=$I$(1).ZERO_PAD;
sb.append$CharSequence(p$1.localizedMagnitude$StringBuilder$J$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [null, i, flags, 9, l]));
break;
}case 76:
{
var i=t.get$I(14);
var flags=$I$(1).ZERO_PAD;
sb.append$CharSequence(p$1.localizedMagnitude$StringBuilder$J$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [null, i, flags, 3, l]));
break;
}case 81:
{
var i=t.getTimeInMillis$();
var flags=$I$(1).NONE;
sb.append$CharSequence(p$1.localizedMagnitude$StringBuilder$J$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [null, i, flags, this.width, l]));
break;
}case 112:
{
var ampm=Clazz.array(String, -1, ["AM", "PM"]);
if (l != null  && l !== $I$(4).US  ) {
var dfs=$I$(9).getInstance$java_util_Locale(l);
ampm=dfs.getAmPmStrings$();
}var s=ampm[t.get$I(9)];
sb.append$S(s.toLowerCase$());
break;
}case 115:
{
var i=Long.$div(t.getTimeInMillis$(),1000);
var flags=$I$(1).NONE;
sb.append$CharSequence(p$1.localizedMagnitude$StringBuilder$J$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [null, i, flags, this.width, l]));
break;
}case 83:
{
var i=t.get$I(13);
var flags=$I$(1).ZERO_PAD;
sb.append$CharSequence(p$1.localizedMagnitude$StringBuilder$J$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [null, i, flags, 2, l]));
break;
}case 122:
{
var i=t.get$I(15) + t.get$I(16);
var neg=i < 0;
sb.append$C(neg ? "-" : "+");
if (neg) i=-i;
var min=(i/60000|0);
var offset=((min/60|0)) * 100 + (min % 60);
var flags=$I$(1).ZERO_PAD;
sb.append$CharSequence(p$1.localizedMagnitude$StringBuilder$J$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [null, offset, flags, 4, l]));
break;
}case 90:
{
throw Clazz.new_(Clazz.load('java.io.UnsupportedEncodingException'));
}case 97:
case 65:
{
var i=t.get$I(7);
var lt=((l == null ) ? $I$(4).US : l);
var dfs=$I$(9).getInstance$java_util_Locale(lt);
if (c == "A") sb.append$S(dfs.getWeekdays$()[i]);
 else sb.append$S(dfs.getShortWeekdays$()[i]);
break;
}case 98:
case 104:
case 66:
{
var i=t.get$I(2);
var lt=((l == null ) ? $I$(4).US : l);
var dfs=$I$(9).getInstance$java_util_Locale(lt);
if (c == "B") sb.append$S(dfs.getMonths$()[i]);
 else sb.append$S(dfs.getShortMonths$()[i]);
break;
}case 67:
case 121:
case 89:
{
var i=t.get$I(1);
var size=2;
switch (c.$c()) {
case 67:
i=(i/(100)|0);
break;
case 121:
i%=100;
break;
case 89:
size=4;
break;
}
var flags=$I$(1).ZERO_PAD;
sb.append$CharSequence(p$1.localizedMagnitude$StringBuilder$J$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [null, i, flags, size, l]));
break;
}case 100:
case 101:
{
var i=t.get$I(5);
var flags=(c == "d" ? $I$(1).ZERO_PAD : $I$(1).NONE);
sb.append$CharSequence(p$1.localizedMagnitude$StringBuilder$J$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [null, i, flags, 2, l]));
break;
}case 106:
{
var i=t.get$I(6);
var flags=$I$(1).ZERO_PAD;
sb.append$CharSequence(p$1.localizedMagnitude$StringBuilder$J$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [null, i, flags, 3, l]));
break;
}case 109:
{
var i=t.get$I(2) + 1;
var flags=$I$(1).ZERO_PAD;
sb.append$CharSequence(p$1.localizedMagnitude$StringBuilder$J$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [null, i, flags, 2, l]));
break;
}case 84:
case 82:
{
var sep=":";
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, "H", l]).append$CharSequence(sep);
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, "M", l]);
if (c == "T") {
sb.append$S(sep);
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, "S", l]);
}break;
}case 114:
{
var sep=":";
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, "I", l]).append$CharSequence(sep);
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, "M", l]).append$CharSequence(sep);
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, "S", l]).append$CharSequence(" ");
var tsb=Clazz.new_($I$(6,1));
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [tsb, t, "p", l]);
sb.append$S(tsb.toString().toUpperCase$());
break;
}case 99:
{
var sep=" ";
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, "a", l]).append$CharSequence(sep);
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, "b", l]).append$CharSequence(sep);
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, "d", l]).append$CharSequence(sep);
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, "T", l]).append$CharSequence(sep);
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, "Z", l]).append$CharSequence(sep);
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, "Y", l]);
break;
}case 68:
{
var sep="/";
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, "m", l]).append$CharSequence(sep);
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, "d", l]).append$CharSequence(sep);
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, "y", l]);
break;
}case 70:
{
var sep="-";
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, "Y", l]).append$CharSequence(sep);
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, "m", l]).append$CharSequence(sep);
p$1.printDTL$StringBuilder$java_util_Calendar$C$java_util_Locale.apply(this, [sb, t, "d", l]);
break;
}default:
Clazz.assert(C$, this, function(){return false});
}
return sb;
}, p$1);

Clazz.newMeth(C$, 'failMismatch$java_util_Formatter_Flags$C',  function (f, c) {
var fs=f.toString();
throw Clazz.new_(Clazz.load('java.util.FormatFlagsConversionMismatchException').c$$S$C,[fs, c]);
}, p$1);

Clazz.newMeth(C$, 'failConversion$C$O',  function (c, arg) {
throw Clazz.new_(Clazz.load('java.util.IllegalFormatConversionException').c$$C$Class,[c, arg.getClass$()]);
}, p$1);

Clazz.newMeth(C$, 'getZero$java_util_Locale',  function (l) {
if ((l != null ) && !l.equals$O(this.b$['java.util.Formatter'].locale$.apply(this.b$['java.util.Formatter'], [])) ) {
var dfs=$I$(10).getInstance$java_util_Locale(l);
return dfs.getZeroDigit$();
}return this.b$['java.util.Formatter'].zero;
}, p$1);

Clazz.newMeth(C$, 'localizedMagnitude$StringBuilder$J$java_util_Formatter_Flags$I$java_util_Locale',  function (sb, value, f, width, l) {
var va=Long.toString$J$I(value, 10).toCharArray$();
return p$1.localizedMagnitude$StringBuilder$CA$java_util_Formatter_Flags$I$java_util_Locale.apply(this, [sb, va, f, width, l]);
}, p$1);

Clazz.newMeth(C$, 'localizedMagnitude$StringBuilder$CA$java_util_Formatter_Flags$I$java_util_Locale',  function (sb, value, f, width, l) {
if (sb == null ) sb=Clazz.new_($I$(6,1));
var begin=sb.length$();
var zero=p$1.getZero$java_util_Locale.apply(this, [l]);
var grpSep="\u0000";
var grpSize=-1;
var decSep="\u0000";
var len=value.length;
var dot=len;
for (var j=0; j < len; j++) {
if (value[j] == ".") {
dot=j;
break;
}}
if (dot < len) {
if (l == null  || l.equals$O($I$(4).US) ) {
decSep=".";
} else {
var dfs=$I$(10).getInstance$java_util_Locale(l);
decSep=dfs.getDecimalSeparator$();
}}if (f.contains$java_util_Formatter_Flags($I$(1).GROUP)) {
if (l == null  || l.equals$O($I$(4).US) ) {
grpSep=",";
grpSize=3;
} else {
var dfs=$I$(10).getInstance$java_util_Locale(l);
grpSep=dfs.getGroupingSeparator$();
var df=$I$(11).getIntegerInstance$java_util_Locale(l);
grpSize=df.getGroupingSize$();
}}for (var j=0; j < len; j++) {
if (j == dot) {
sb.append$C(decSep);
grpSep="\u0000";
continue;
}var c=value[j];
sb.append$C(String.fromCharCode(((c.$c() - 48) + zero.$c())));
if (grpSep != "\u0000" && j != dot - 1  && ((dot - j) % grpSize == 1) ) sb.append$C(grpSep);
}
len=sb.length$();
if (width != -1 && f.contains$java_util_Formatter_Flags($I$(1).ZERO_PAD) ) for (var k=0; k < width - len; k++) sb.insert$I$C(begin, zero);

return sb;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Formatter, "Flags", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['flags']]
,['O',['NONE','java.util.Formatter.Flags','+LEFT_JUSTIFY','+UPPERCASE','+ALTERNATE','+PLUS','+LEADING_SPACE','+ZERO_PAD','+GROUP','+PARENTHESES','+PREVIOUS']]]

Clazz.newMeth(C$, 'c$$I',  function (f) {
;C$.$init$.apply(this);
this.flags=f;
}, 1);

Clazz.newMeth(C$, 'valueOf$',  function () {
return this.flags;
});

Clazz.newMeth(C$, 'contains$java_util_Formatter_Flags',  function (f) {
return (this.flags & f.valueOf$()) == f.valueOf$();
});

Clazz.newMeth(C$, 'dup$',  function () {
return Clazz.new_(C$.c$$I,[this.flags]);
});

Clazz.newMeth(C$, 'add$java_util_Formatter_Flags',  function (f) {
this.flags|=f.valueOf$();
return this;
});

Clazz.newMeth(C$, 'remove$java_util_Formatter_Flags',  function (f) {
this.flags&=~f.valueOf$();
return this;
});

Clazz.newMeth(C$, 'parse$S',  function (s) {
var f=Clazz.new_(C$.c$$I,[0]);
if (s == null  || s.length$() == 0 ) return f;
var ca=s.toCharArray$();
for (var i=0; i < ca.length; i++) {
var v=C$.parseChar$C(ca[i]);
if (f.contains$java_util_Formatter_Flags(v)) throw Clazz.new_(Clazz.load('java.util.DuplicateFormatFlagsException').c$$S,[v.toString()]);
f.add$java_util_Formatter_Flags(v);
}
return f;
}, 1);

Clazz.newMeth(C$, 'parseChar$C',  function (c) {
switch (c.$c()) {
case 45:
return C$.LEFT_JUSTIFY;
case 35:
return C$.ALTERNATE;
case 43:
return C$.PLUS;
case 32:
return C$.LEADING_SPACE;
case 48:
return C$.ZERO_PAD;
case 44:
return C$.GROUP;
case 40:
return C$.PARENTHESES;
case 60:
return C$.PREVIOUS;
default:
throw Clazz.new_(Clazz.load('java.util.UnknownFormatFlagsException').c$$S,[String.valueOf$C(c)]);
}
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(6,1));
if (this.contains$java_util_Formatter_Flags(C$.LEFT_JUSTIFY)) sb.append$C("-");
if (this.contains$java_util_Formatter_Flags(C$.UPPERCASE)) sb.append$C("^");
if (this.contains$java_util_Formatter_Flags(C$.ALTERNATE)) sb.append$C("#");
if (this.contains$java_util_Formatter_Flags(C$.PLUS)) sb.append$C("+");
if (this.contains$java_util_Formatter_Flags(C$.LEADING_SPACE)) sb.append$C(" ");
if (this.contains$java_util_Formatter_Flags(C$.ZERO_PAD)) sb.append$C("0");
if (this.contains$java_util_Formatter_Flags(C$.GROUP)) sb.append$C(",");
if (this.contains$java_util_Formatter_Flags(C$.PARENTHESES)) sb.append$C("(");
if (this.contains$java_util_Formatter_Flags(C$.PREVIOUS)) sb.append$C("<");
return sb.toString();
});

C$.$static$=function(){C$.$static$=0;
C$.NONE=Clazz.new_(C$.c$$I,[0]);
C$.LEFT_JUSTIFY=Clazz.new_(C$.c$$I,[1]);
C$.UPPERCASE=Clazz.new_(C$.c$$I,[2]);
C$.ALTERNATE=Clazz.new_(C$.c$$I,[4]);
C$.PLUS=Clazz.new_(C$.c$$I,[8]);
C$.LEADING_SPACE=Clazz.new_(C$.c$$I,[16]);
C$.ZERO_PAD=Clazz.new_(C$.c$$I,[32]);
C$.GROUP=Clazz.new_(C$.c$$I,[64]);
C$.PARENTHESES=Clazz.new_(C$.c$$I,[128]);
C$.PREVIOUS=Clazz.new_(C$.c$$I,[256]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Formatter, "Conversion", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isValid$C',  function (c) {
return (C$.isGeneral$C(c) || C$.isInteger$C(c) || C$.isFloat$C(c) || C$.isText$C(c) || c == "t"   || C$.isCharacter$C(c) );
}, 1);

Clazz.newMeth(C$, 'isGeneral$C',  function (c) {
switch (c.$c()) {
case 98:
case 66:
case 115:
case 83:
case 104:
case 72:
return true;
default:
return false;
}
}, 1);

Clazz.newMeth(C$, 'isCharacter$C',  function (c) {
switch (c.$c()) {
case 99:
case 67:
return true;
default:
return false;
}
}, 1);

Clazz.newMeth(C$, 'isInteger$C',  function (c) {
switch (c.$c()) {
case 100:
case 111:
case 120:
case 88:
return true;
default:
return false;
}
}, 1);

Clazz.newMeth(C$, 'isFloat$C',  function (c) {
switch (c.$c()) {
case 101:
case 69:
case 103:
case 71:
case 102:
case 97:
case 65:
return true;
default:
return false;
}
}, 1);

Clazz.newMeth(C$, 'isText$C',  function (c) {
switch (c.$c()) {
case 110:
case 37:
return true;
default:
return false;
}
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Formatter, "DateTime", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isValid$C',  function (c) {
switch (c.$c()) {
case 72:
case 73:
case 107:
case 108:
case 77:
case 78:
case 76:
case 81:
case 112:
case 115:
case 83:
case 84:
case 122:
case 90:
case 97:
case 65:
case 98:
case 66:
case 67:
case 100:
case 101:
case 104:
case 106:
case 109:
case 121:
case 89:
case 114:
case 82:
case 99:
case 68:
case 70:
return true;
default:
return false;
}
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Formatter, "FormattedFloatingDecimal", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['exp','expr'],'S',['str']]]

Clazz.newMeth(C$, 'c$$D$I$I',  function (value, prec, type) {
;C$.$init$.apply(this);
this.str="" + new Double(value).toString();
p$2.getString$I$D$I.apply(this, [type, value, prec]);
if (p$2.checkRoundHalfDown$D.apply(this, [value])) {
this.str="" + new Double(value).toString();
p$2.getString$I$D$I.apply(this, [type, value + value / 1.0E10, prec]);
};}, 1);

Clazz.newMeth(C$, 'checkRoundHalfDown$D',  function (value) {
{
var v = ("" + value).split('e')[0];
var pt = v.length;
var d;
while (--pt > 0 && ((d=v[pt]) == '0' || d=='.')){} return (pt >= 0 && v[pt] == "5" && parseFloat(this.str) < value);
}
}, p$2);

Clazz.newMeth(C$, 'getString$I$D$I',  function (type, value, prec) {
if (Double.isNaN$D(value) || Double.isInfinite$D(value) ) return;
var sNoRound="";
var sRound="";
{
sNoRound = value.toExponential(13);
sRound = value.toExponential(prec);
}
this.exp=p$2.getExp$S.apply(this, [sNoRound]);
this.expr=p$2.getExp$S.apply(this, [sRound]);
if (type == 0) {
{
sRound = value.toExponential(prec-1);
}
if (this.expr < -4 || this.exp >= prec ) type=2;
}if (type == 1) {
{
sRound = value.toFixed(); sNoRound = value.toFixed(prec);
}
}if (sNoRound.length$() < sRound.length$()) sRound=sNoRound;
var pt=sRound.indexOf$S("e");
switch (type) {
case 2:
if (pt >= 0 && sRound.indexOf$S("e-") < 0  && sRound.indexOf$S("e+") < 0 ) sRound=sRound.substring$I$I(0, pt + 1) + "+" + sRound.substring$I(pt + 1) ;
if (pt == sRound.length$() - 3) sRound=sRound.substring$I$I(0, pt + 2) + "0" + sRound.substring$I(pt + 2) ;
break;
case 1:
sRound=sNoRound;
break;
case 0:
var ndig=Math.max(1, pt - (value < 0  ? 2 : 1));
ndig=Math.max(0, ndig - 1 - this.exp );
{
sRound = parseFloat(sRound).toFixed(ndig);
}
}
this.str=sRound;
}, p$2);

Clazz.newMeth(C$, 'getExp$S',  function (s) {
return Integer.parseInt$S(s.substring$I(s.indexOf$S("e") + 1));
}, p$2);

Clazz.newMeth(C$, 'getChars$CA',  function (v) {
var len=this.str.length$();
System.arraycopy$O$I$O$I$I(this.str.toCharArray$(), 0, v, 0, len);
return len;
});

Clazz.newMeth(C$, 'getExponent$',  function () {
return this.exp;
});

Clazz.newMeth(C$, 'getExponentRounded$',  function () {
return this.expr;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:32 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
