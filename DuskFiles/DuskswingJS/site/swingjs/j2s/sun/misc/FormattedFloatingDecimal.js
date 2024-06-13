(function(){var P$=Clazz.newPackage("sun.misc"),p$1={},I$=[[0,'ThreadLocal','sun.misc.FloatingDecimal',['sun.misc.FormattedFloatingDecimal','.Form'],'java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FormattedFloatingDecimal", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Form',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['decExponentRounded'],'O',['mantissa','char[]','+exponent']]
,['O',['threadLocalCharBuffer','ThreadLocal']]]

Clazz.newMeth(C$, 'valueOf$D$I$sun_misc_FormattedFloatingDecimal_Form',  function (d, precision, form) {
var fdConverter=$I$(2,"getBinaryToASCIIConverter$D$Z",[d, form === $I$(3).COMPATIBLE ]);
return Clazz.new_(C$.c$$I$sun_misc_FormattedFloatingDecimal_Form$sun_misc_FloatingDecimal_BinaryToASCIIConverter,[precision, form, fdConverter]);
}, 1);

Clazz.newMeth(C$, 'getBuffer$',  function () {
return C$.threadLocalCharBuffer.get$();
}, 1);

Clazz.newMeth(C$, 'c$$I$sun_misc_FormattedFloatingDecimal_Form$sun_misc_FloatingDecimal_BinaryToASCIIConverter',  function (precision, form, fdConverter) {
;C$.$init$.apply(this);
if (fdConverter.isExceptional$()) {
this.mantissa=fdConverter.toJavaFormatString$().toCharArray$();
this.exponent=null;
return;
}var digits=C$.getBuffer$();
var nDigits=fdConverter.getDigits$CA(digits);
var decExp=fdConverter.getDecimalExponent$();
var exp;
var isNegative=fdConverter.isNegative$();
switch (form) {
case $I$(3).COMPATIBLE:
exp=decExp;
this.decExponentRounded=exp;
p$1.fillCompatible$I$CA$I$I$Z.apply(this, [precision, digits, nDigits, exp, isNegative]);
break;
case $I$(3).DECIMAL_FLOAT:
exp=C$.applyPrecision$I$CA$I$I(decExp, digits, nDigits, decExp + precision);
p$1.fillDecimal$I$CA$I$I$Z.apply(this, [precision, digits, nDigits, exp, isNegative]);
this.decExponentRounded=exp;
break;
case $I$(3).SCIENTIFIC:
exp=C$.applyPrecision$I$CA$I$I(decExp, digits, nDigits, precision + 1);
p$1.fillScientific$I$CA$I$I$Z.apply(this, [precision, digits, nDigits, exp, isNegative]);
this.decExponentRounded=exp;
break;
case $I$(3).GENERAL:
exp=C$.applyPrecision$I$CA$I$I(decExp, digits, nDigits, precision);
if (exp - 1 < -4 || exp - 1 >= precision ) {
--precision;
p$1.fillScientific$I$CA$I$I$Z.apply(this, [precision, digits, nDigits, exp, isNegative]);
} else {
precision=precision - exp;
p$1.fillDecimal$I$CA$I$I$Z.apply(this, [precision, digits, nDigits, exp, isNegative]);
}this.decExponentRounded=exp;
break;
default:
Clazz.assert(C$, this, function(){return false});
}
}, 1);

Clazz.newMeth(C$, 'getExponentRounded$',  function () {
return this.decExponentRounded - 1;
});

Clazz.newMeth(C$, 'getMantissa$',  function () {
return this.mantissa;
});

Clazz.newMeth(C$, 'getExponent$',  function () {
return this.exponent;
});

Clazz.newMeth(C$, 'applyPrecision$I$CA$I$I',  function (decExp, digits, nDigits, prec) {
if (prec >= nDigits || prec < 0 ) {
return decExp;
}if (prec == 0) {
if (digits[0] >= "5") {
digits[0]="1";
$I$(4).fill$CA$I$I$C(digits, 1, nDigits, "0");
return decExp + 1;
} else {
$I$(4).fill$CA$I$I$C(digits, 0, nDigits, "0");
return decExp;
}}var q=digits[prec].$c();
if (q >= 53 ) {
var i=prec;
q=digits[--i].$c();
if (q == 57 ) {
while (q == 57  && i > 0 ){
q=digits[--i].$c();
}
if (q == 57 ) {
digits[0]="1";
$I$(4).fill$CA$I$I$C(digits, 1, nDigits, "0");
return decExp + 1;
}}digits[i]=String.fromCharCode((q + 1));
$I$(4).fill$CA$I$I$C(digits, i + 1, nDigits, "0");
} else {
$I$(4).fill$CA$I$I$C(digits, prec, nDigits, "0");
}return decExp;
}, 1);

Clazz.newMeth(C$, 'fillCompatible$I$CA$I$I$Z',  function (precision, digits, nDigits, exp, isNegative) {
var startIndex=isNegative ? 1 : 0;
if (exp > 0 && exp < 8 ) {
if (nDigits < exp) {
var extraZeros=exp - nDigits;
this.mantissa=C$.create$Z$I(isNegative, nDigits + extraZeros + 2 );
System.arraycopy$O$I$O$I$I(digits, 0, this.mantissa, startIndex, nDigits);
$I$(4).fill$CA$I$I$C(this.mantissa, startIndex + nDigits, startIndex + nDigits + extraZeros , "0");
this.mantissa[startIndex + nDigits + extraZeros ]=".";
this.mantissa[startIndex + nDigits + extraZeros + 1 ]="0";
} else if (exp < nDigits) {
var t=Math.min(nDigits - exp, precision);
this.mantissa=C$.create$Z$I(isNegative, exp + 1 + t );
System.arraycopy$O$I$O$I$I(digits, 0, this.mantissa, startIndex, exp);
this.mantissa[startIndex + exp]=".";
System.arraycopy$O$I$O$I$I(digits, exp, this.mantissa, startIndex + exp + 1 , t);
} else {
this.mantissa=C$.create$Z$I(isNegative, nDigits + 2);
System.arraycopy$O$I$O$I$I(digits, 0, this.mantissa, startIndex, nDigits);
this.mantissa[startIndex + nDigits]=".";
this.mantissa[startIndex + nDigits + 1 ]="0";
}} else if (exp <= 0 && exp > -3 ) {
var zeros=Math.max(0, Math.min(-exp, precision));
var t=Math.max(0, Math.min(nDigits, precision + exp));
if (zeros > 0) {
this.mantissa=C$.create$Z$I(isNegative, zeros + 2 + t );
this.mantissa[startIndex]="0";
this.mantissa[startIndex + 1]=".";
$I$(4).fill$CA$I$I$C(this.mantissa, startIndex + 2, startIndex + 2 + zeros , "0");
if (t > 0) {
System.arraycopy$O$I$O$I$I(digits, 0, this.mantissa, startIndex + 2 + zeros , t);
}} else if (t > 0) {
this.mantissa=C$.create$Z$I(isNegative, zeros + 2 + t );
this.mantissa[startIndex]="0";
this.mantissa[startIndex + 1]=".";
System.arraycopy$O$I$O$I$I(digits, 0, this.mantissa, startIndex + 2, t);
} else {
this.mantissa=C$.create$Z$I(isNegative, 1);
this.mantissa[startIndex]="0";
}} else {
if (nDigits > 1) {
this.mantissa=C$.create$Z$I(isNegative, nDigits + 1);
this.mantissa[startIndex]=digits[0];
this.mantissa[startIndex + 1]=".";
System.arraycopy$O$I$O$I$I(digits, 1, this.mantissa, startIndex + 2, nDigits - 1);
} else {
this.mantissa=C$.create$Z$I(isNegative, 3);
this.mantissa[startIndex]=digits[0];
this.mantissa[startIndex + 1]=".";
this.mantissa[startIndex + 2]="0";
}var e;
var expStartIntex;
var isNegExp=(exp <= 0);
if (isNegExp) {
e=-exp + 1;
expStartIntex=1;
} else {
e=exp - 1;
expStartIntex=0;
}if (e <= 9) {
this.exponent=C$.create$Z$I(isNegExp, 1);
this.exponent[expStartIntex]=String.fromCharCode((e + 48));
} else if (e <= 99) {
this.exponent=C$.create$Z$I(isNegExp, 2);
this.exponent[expStartIntex]=String.fromCharCode(((e/10|0) + 48));
this.exponent[expStartIntex + 1]=String.fromCharCode((e % 10 + 48));
} else {
this.exponent=C$.create$Z$I(isNegExp, 3);
this.exponent[expStartIntex]=String.fromCharCode(((e/100|0) + 48));
e%=100;
this.exponent[expStartIntex + 1]=String.fromCharCode(((e/10|0) + 48));
this.exponent[expStartIntex + 2]=String.fromCharCode((e % 10 + 48));
}}}, p$1);

Clazz.newMeth(C$, 'create$Z$I',  function (isNegative, size) {
if (isNegative) {
var r=Clazz.array(Character.TYPE, [size + 1]);
r[0]="-";
return r;
} else {
return Clazz.array(Character.TYPE, [size]);
}}, 1);

Clazz.newMeth(C$, 'fillDecimal$I$CA$I$I$Z',  function (precision, digits, nDigits, exp, isNegative) {
var startIndex=isNegative ? 1 : 0;
if (exp > 0) {
if (nDigits < exp) {
this.mantissa=C$.create$Z$I(isNegative, exp);
System.arraycopy$O$I$O$I$I(digits, 0, this.mantissa, startIndex, nDigits);
$I$(4).fill$CA$I$I$C(this.mantissa, startIndex + nDigits, startIndex + exp, "0");
} else {
var t=Math.min(nDigits - exp, precision);
this.mantissa=C$.create$Z$I(isNegative, exp + (t > 0 ? (t + 1) : 0));
System.arraycopy$O$I$O$I$I(digits, 0, this.mantissa, startIndex, exp);
if (t > 0) {
this.mantissa[startIndex + exp]=".";
System.arraycopy$O$I$O$I$I(digits, exp, this.mantissa, startIndex + exp + 1 , t);
}}} else if (exp <= 0) {
var zeros=Math.max(0, Math.min(-exp, precision));
var t=Math.max(0, Math.min(nDigits, precision + exp));
if (zeros > 0) {
this.mantissa=C$.create$Z$I(isNegative, zeros + 2 + t );
this.mantissa[startIndex]="0";
this.mantissa[startIndex + 1]=".";
$I$(4).fill$CA$I$I$C(this.mantissa, startIndex + 2, startIndex + 2 + zeros , "0");
if (t > 0) {
System.arraycopy$O$I$O$I$I(digits, 0, this.mantissa, startIndex + 2 + zeros , t);
}} else if (t > 0) {
this.mantissa=C$.create$Z$I(isNegative, zeros + 2 + t );
this.mantissa[startIndex]="0";
this.mantissa[startIndex + 1]=".";
System.arraycopy$O$I$O$I$I(digits, 0, this.mantissa, startIndex + 2, t);
} else {
this.mantissa=C$.create$Z$I(isNegative, 1);
this.mantissa[startIndex]="0";
}}}, p$1);

Clazz.newMeth(C$, 'fillScientific$I$CA$I$I$Z',  function (precision, digits, nDigits, exp, isNegative) {
var startIndex=isNegative ? 1 : 0;
var t=Math.max(0, Math.min(nDigits - 1, precision));
if (t > 0) {
this.mantissa=C$.create$Z$I(isNegative, t + 2);
this.mantissa[startIndex]=digits[0];
this.mantissa[startIndex + 1]=".";
System.arraycopy$O$I$O$I$I(digits, 1, this.mantissa, startIndex + 2, t);
} else {
this.mantissa=C$.create$Z$I(isNegative, 1);
this.mantissa[startIndex]=digits[0];
}var expSign;
var e;
if (exp <= 0) {
expSign="-";
e=-exp + 1;
} else {
expSign="+";
e=exp - 1;
}if (e <= 9) {
this.exponent=Clazz.array(Character.TYPE, -1, [expSign, "0", String.fromCharCode((e + 48))]);
} else if (e <= 99) {
this.exponent=Clazz.array(Character.TYPE, -1, [expSign, String.fromCharCode(((e/10|0) + 48)), String.fromCharCode((e % 10 + 48))]);
} else {
var hiExpChar=String.fromCharCode(((e/100|0) + 48));
e%=100;
this.exponent=Clazz.array(Character.TYPE, -1, [expSign, hiExpChar, String.fromCharCode(((e/10|0) + 48)), String.fromCharCode((e % 10 + 48))]);
}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.threadLocalCharBuffer=((P$.FormattedFloatingDecimal$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FormattedFloatingDecimal$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('ThreadLocal'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'initialValue$',  function () {
return Clazz.array(Character.TYPE, [20]);
});
})()
), Clazz.new_($I$(1,1),[this, null],P$.FormattedFloatingDecimal$1));
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.FormattedFloatingDecimal, "Form", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "SCIENTIFIC", 0, []);
Clazz.newEnumConst($vals, C$.c$, "COMPATIBLE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "DECIMAL_FLOAT", 2, []);
Clazz.newEnumConst($vals, C$.c$, "GENERAL", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
