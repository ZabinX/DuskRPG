(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'javajs.util.PT','javajs.util.SB']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DF");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['formattingStrings','String[]','formatAdds','double[]','useNumberLocalization','Boolean[]']]]

Clazz.newMeth(C$, 'setUseNumberLocalization$Z',  function (TF) {
C$.useNumberLocalization[0]=(TF ? Boolean.TRUE : Boolean.FALSE);
}, 1);

Clazz.newMeth(C$, 'formatDecimalDbl$D$I',  function (value, decimalDigits) {
if (decimalDigits == 2147483647 || value == -Infinity   || value == Infinity   || Double.isNaN$D(value) ) return "" + new Double(value).toString();
return C$.formatDecimal$D$I(value, decimalDigits);
}, 1);

Clazz.newMeth(C$, 'formatDecimal$D$I',  function (value, decimalDigits) {
if (value == -Infinity  || value == Infinity   || Double.isNaN$D(value) ) return "" + new Double(value).toString();
if (decimalDigits == 2147483647) return "" + new Float(value).toString();
var isNeg=(value < 0 );
if (isNeg) value=-value;
var n;
if (decimalDigits < 0) {
decimalDigits=-decimalDigits;
if (decimalDigits > C$.formattingStrings.length) decimalDigits=C$.formattingStrings.length;
if (value == 0 ) return C$.formattingStrings[decimalDigits - 1] + "E+0";
n=0;
var d;
if (Math.abs(value) < 1 ) {
n=100;
d=value * 1.0E-100;
} else {
n=-100;
d=value * 1.0E100;
}var s=("" + new Double(d).toString()).toUpperCase$();
var i1=s.indexOf$S("E");
var sf;
if (i1 < 0) {
sf="" + new Double(value).toString();
} else {
n=$I$(1,"parseInt$S",[s.substring$I(i1 + (s.indexOf$S("E+") == i1 ? 2 : 1))]) + n;
var f=$I$(1,"parseDouble$S",[s.substring$I$I(0, i1)]);
sf=C$.formatDecimal$D$I(f, decimalDigits - 1);
if (sf.startsWith$S("10.")) {
sf=C$.formatDecimal$D$I(1, decimalDigits - 1);
++n;
}}return (isNeg ? "-" : "") + sf + "E" + (n >= 0 ? "+" : "") + n ;
}if (decimalDigits >= C$.formattingStrings.length) decimalDigits=C$.formattingStrings.length - 1;
var s1=("" + new Double(value).toString()).toUpperCase$();
var pt=s1.indexOf$S(".");
if (pt < 0) return (isNeg ? "-" : "") + s1 + C$.formattingStrings[decimalDigits].substring$I(1) ;
var pt1=s1.indexOf$S("E-");
if (pt1 > 0) {
n=$I$(1,"parseInt$S",[s1.substring$I(pt1 + 1)]);
s1="0." + "0000000000000000000000000000000000000000".substring$I$I(0, -n - 1) + s1.substring$I$I(0, 1) + s1.substring$I$I(2, pt1) ;
pt=1;
}pt1=s1.indexOf$S("E");
if (pt1 > 0) {
n=$I$(1,"parseInt$S",[s1.substring$I(pt1 + 1)]);
s1=s1.substring$I$I(0, 1) + s1.substring$I$I(2, pt1) + "0000000000000000000000000000000000000000" ;
s1=s1.substring$I$I(0, n + 1) + "." + s1.substring$I(n + 1) ;
pt=s1.indexOf$S(".");
}var len=s1.length$();
var pt2=decimalDigits + pt + 1 ;
if (pt2 < len && s1.charAt$I(pt2) >= "5" ) {
return C$.formatDecimal$D$I((isNeg ? -1 : 1) * (value + C$.formatAdds[decimalDigits]), decimalDigits);
}var s0=s1.substring$I$I(0, (decimalDigits == 0 ? pt : ++pt));
var sb=$I$(2).newS$S(s0);
if (isNeg && s0.equals$O("0.") && decimalDigits + 2 <= len   && s1.substring$I$I(2, 2 + decimalDigits).equals$O("0000000000000000000000000000000000000000".substring$I$I(0, decimalDigits)) ) isNeg=false;
for (var i=0; i < decimalDigits; i++, pt++) {
if (pt < len) sb.appendC$C(s1.charAt$I(pt));
 else sb.appendC$C("0");
}
s1=(isNeg ? "-" : "") + sb;
return (Boolean.TRUE.equals$O(C$.useNumberLocalization[0]) ? s1 : s1.replace$C$C(",", "."));
}, 1);

Clazz.newMeth(C$, 'formatDecimalTrimmed$D$I',  function (x, precision) {
var str=C$.formatDecimalDbl$D$I(x, precision);
var m=str.length$() - 1;
var zero="0";
while (m >= 0 && str.charAt$I(m) == zero )--m;

return str.substring$I$I(0, m + 1);
}, 1);

Clazz.newMeth(C$, 'formatDecimalTrimmed0$D$I',  function (x, precision) {
var str=C$.formatDecimalDbl$D$I(x, precision);
var m=str.length$() - 1;
var pt=str.indexOf$S(".") + 1;
while (m > pt && str.charAt$I(m) == "0" )--m;

return str.substring$I$I(0, m + 1);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.formattingStrings=Clazz.array(String, -1, ["0", "0.0", "0.00", "0.000", "0.0000", "0.00000", "0.000000", "0.0000000", "0.00000000", "0.000000000", "0.0000000000", "0.00000000000", "0.000000000000", "0.0000000000000", "0.00000000000000", "0.000000000000000"]);
C$.formatAdds=Clazz.array(Double.TYPE, -1, [0.5, 0.05, 0.005, 5.0E-4, 5.0E-5, 5.0E-6, 5.0E-7, 5.0E-8, 5.0E-9, 5.0E-10, 5.0E-11, 5.0E-12, 5.0E-13, 5.0E-14, 5.0E-15, 5.0E-16]);
C$.useNumberLocalization=Clazz.array(Boolean, -1, [Boolean.TRUE]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
