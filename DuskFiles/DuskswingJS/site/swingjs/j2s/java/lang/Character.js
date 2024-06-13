(function(){var P$=java.lang,I$=[];
var C$=Clazz.newClass(P$, "Character", null, null, ['java.io.Serializable', 'Comparable']);
C$.TYPE=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.TYPE=null;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value='\0';
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$C', function (value) {
C$.$init$.apply(this);
this.value=value;
}, 1);

Clazz.newMeth(C$, 'charValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.value.$c();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "java.lang.Character")) {
return this.value == (obj).charValue$();
}return false;
});

Clazz.newMeth(C$, ['compareTo$Character','compareTo$','compareTo$TT'], function (c) {
return this.value.$c() - c.value.$c();
});

Clazz.newMeth(C$, 'toLowerCase$C', function (c) {
return ("" + c).toLowerCase$().charAt$I(0);
}, 1);

Clazz.newMeth(C$, 'toUpperCase$C', function (c) {
return ("" + c).toUpperCase$().charAt$I(0);
}, 1);

Clazz.newMeth(C$, 'isDigit$C', function (c) {
if ("0" <= c && c <= "9" ) return true;
if (c.$c() < 1632 ) return false;
return false;
}, 1);

Clazz.newMeth(C$, 'forDigit$I$I', function (digit, radix) {
if ((digit >= radix) || (digit < 0) ) {
return "\u0000";
}if ((radix < 2) || (radix > 36) ) {
return "\u0000";
}if (digit < 10) {
return String.fromCharCode((48 + digit));
}return String.fromCharCode((87 + digit));
}, 1);

Clazz.newMeth(C$, 'isUpperCase$C', function (c) {
if ("A" <= c && c <= "Z" ) {
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'isLowerCase$C', function (c) {
if ("a" <= c && c <= "z" ) {
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'isWhitespace$C', function (c) {
if ((c.$c() >= 28  && c.$c() <= 32  ) || (c.$c() >= 9  && c.$c() <= 13  ) ) return true;
if (c.$c() == 5760 ) return true;
if (c.$c() < 8192  || c.$c() == 8199  ) return false;
return c.$c() <= 8203  || c.$c() == 8232   || c.$c() == 8233   || c.$c() == 12288  ;
}, 1);

Clazz.newMeth(C$, 'isLetter$C', function (c) {
if (("A" <= c && c <= "Z" ) || ("a" <= c && c <= "z" ) ) return true;
if (c.$c() < 128 ) return false;
return false;
}, 1);

Clazz.newMeth(C$, 'isLetterOrDigit$C', function (c) {
return C$.isLetter$C(c) || C$.isDigit$C(c) ;
}, 1);

Clazz.newMeth(C$, 'isSpaceChar$C', function (c) {
if (c.$c() == 32  || c.$c() == 160   || c.$c() == 5760  ) return true;
if (c.$c() < 8192 ) return false;
return c.$c() <= 8203  || c.$c() == 8232   || c.$c() == 8233   || c.$c() == 8239   || c.$c() == 12288  ;
}, 1);

Clazz.newMeth(C$, 'digit$C$I', function (c, radix) {
if (radix >= 2 && radix <= 36 ) {
if (c.$c() < 128 ) {
var result=-1;
if ("0" <= c && c <= "9" ) {
result=c.$c() - 48;
} else if ("a" <= c && c <= "z" ) {
result=c.$c() - (87);
} else if ("A" <= c && c <= "Z" ) {
result=c.$c() - (55);
}return result < radix ? result : -1;
}}return -1;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.array(Character.TYPE, -1, [this.value]);
return String.valueOf$CA(buf);
});

Clazz.newMeth(C$, 'toString$C', function (c) {
{
if (this === Charater) { return "class java.lang.Charater"; // Charater.class.toString
}
}
return String.valueOf$C(c);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.3.00');//Created 2023-11-12 14:15:56 Java2ScriptVisitor version 3.2.3.00 net.sf.j2s.core.jar version 3.2.3.00
