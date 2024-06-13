(function(){var P$=java.lang,I$=[];
/*c*/var C$=Clazz.newClass(P$, "CharacterDataLatin1", null, 'CharacterData');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['sharpsMap','char[]','instance','CharacterDataLatin1','A','int[]']]]

Clazz.newMeth(C$, 'getProperties$I',  function (ch) {
var offset=String.fromCharCode(ch);
var props=C$.A[offset.$c()];
return props;
});

Clazz.newMeth(C$, 'getType$I',  function (ch) {
var props=this.getProperties$I(ch);
return (props & 31);
});

Clazz.newMeth(C$, 'isJavaIdentifierStart$I',  function (ch) {
var props=this.getProperties$I(ch);
return ((props & 28672) >= 20480);
});

Clazz.newMeth(C$, 'isJavaIdentifierPart$I',  function (ch) {
var props=this.getProperties$I(ch);
return ((props & 12288) != 0);
});

Clazz.newMeth(C$, 'isUnicodeIdentifierStart$I',  function (ch) {
var props=this.getProperties$I(ch);
return ((props & 28672) == 28672);
});

Clazz.newMeth(C$, 'isUnicodeIdentifierPart$I',  function (ch) {
var props=this.getProperties$I(ch);
return ((props & 4096) != 0);
});

Clazz.newMeth(C$, 'isIdentifierIgnorable$I',  function (ch) {
var props=this.getProperties$I(ch);
return ((props & 28672) == 4096);
});

Clazz.newMeth(C$, 'toLowerCase$I',  function (ch) {
var mapChar=ch;
var val=this.getProperties$I(ch);
if (((val & 131072) != 0) && ((val & 133955584) != 133955584) ) {
var offset=val << 5 >> (23);
mapChar=ch + offset;
}return mapChar;
});

Clazz.newMeth(C$, 'toUpperCase$I',  function (ch) {
var mapChar=ch;
var val=this.getProperties$I(ch);
if ((val & 65536) != 0) {
if ((val & 133955584) != 133955584) {
var offset=val << 5 >> (23);
mapChar=ch - offset;
} else if (ch == 181) {
mapChar=924;
}}return mapChar;
});

Clazz.newMeth(C$, 'toTitleCase$I',  function (ch) {
return this.toUpperCase$I(ch);
});

Clazz.newMeth(C$, 'digit$I$I',  function (ch, radix) {
var value=-1;
if (radix >= 2 && radix <= 36 ) {
var val=this.getProperties$I(ch);
var kind=val & 31;
if (kind == 9) {
value=ch + ((val & 992) >> 5) & 31;
} else if ((val & 3072) == 3072) {
value=(ch + ((val & 992) >> 5) & 31) + 10;
}}return (value < radix) ? value : -1;
});

Clazz.newMeth(C$, 'getNumericValue$I',  function (ch) {
var val=this.getProperties$I(ch);
var retval=-1;
switch (val & 3072) {
default:
case (0):
retval=-1;
break;
case (1024):
retval=ch + ((val & 992) >> 5) & 31;
break;
case (2048):
retval=-2;
break;
case (3072):
retval=(ch + ((val & 992) >> 5) & 31) + 10;
break;
}
return retval;
});

Clazz.newMeth(C$, 'isWhitespace$I',  function (ch) {
var props=this.getProperties$I(ch);
return ((props & 28672) == 16384);
});

Clazz.newMeth(C$, 'getDirectionality$I',  function (ch) {
var val=this.getProperties$I(ch);
var directionality=($b$[0] = ((val & 2013265920) >> 27), $b$[0]);
if (directionality == 15) {
directionality=($b$[0] = -1, $b$[0]);
}return directionality;
});

Clazz.newMeth(C$, 'isMirrored$I',  function (ch) {
var props=this.getProperties$I(ch);
return ((props & -2147483648) != 0);
});

Clazz.newMeth(C$, 'toUpperCaseEx$I',  function (ch) {
var mapChar=ch;
var val=this.getProperties$I(ch);
if ((val & 65536) != 0) {
if ((val & 133955584) != 133955584) {
var offset=val << 5 >> (23);
mapChar=ch - offset;
} else {
switch (ch) {
case 181:
mapChar=924;
break;
default:
mapChar=-1;
break;
}
}}return mapChar;
});

Clazz.newMeth(C$, 'toUpperCaseCharArray$I',  function (ch) {
var upperMap=Clazz.array(Character.TYPE, -1, [String.fromCharCode(ch)]);
if (ch == 223) {
upperMap=C$.sharpsMap;
}return upperMap;
});

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.sharpsMap=Clazz.array(Character.TYPE, -1, ["S", "S"]);
C$.instance=Clazz.new_(C$);
C$.A=Clazz.array(Integer.TYPE, [256]);
{
{
var data="\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u5800\u400f\u5000\u400f\u5800\u400f\u6000\u400f\u5000\u400f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u5000\u400f\u5000\u400f\u5000\u400f\u5800\u400f\u6000\u400c\u6800\u0018\u6800\u0018\u2800\u0018\u2800\u601a\u2800\u0018\u6800\u0018\u6800\u0018\ue800\u0015\ue800\u0016\u6800\u0018\u2800\u0019\u3800\u0018\u2800\u0014\u3800\u0018\u2000\u0018\u1800\u3609\u1800\u3609\u1800\u3609\u1800\u3609\u1800\u3609\u1800\u3609\u1800\u3609\u1800\u3609\u1800\u3609\u1800\u3609\u3800\u0018\u6800\u0018\ue800\u0019\u6800\u0019\ue800\u0019\u6800\u0018\u6800\u0018\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\u0082\u7fe1\ue800\u0015\u6800\u0018\ue800\u0016\u6800\u001b\u6800\u5017\u6800\u001b\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\u0081\u7fe2\ue800\u0015\u6800\u0019\ue800\u0016\u6800\u0019\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u5000\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u4800\u100f\u3800\f\u6800\u0018\u2800\u601a\u2800\u601a\u2800\u601a\u2800\u601a\u6800\u001c\u6800\u001c\u6800\u001b\u6800\u001c\u0000\u7002\ue800\u001d\u6800\u0019\u6800\u1010\u6800\u001c\u6800\u001b\u2800\u001c\u2800\u0019\u1800\u060b\u1800\u060b\u6800\u001b\u07fd\u7002\u6800\u001c\u6800\u0018\u6800\u001b\u1800\u050b\u0000\u7002\ue800\u001e\u6800\u080b\u6800\u080b\u6800\u080b\u6800\u0018\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u6800\u0019\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u0082\u7001\u07fd\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u6800\u0019\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u0081\u7002\u061d\u7002".toCharArray$();
Clazz.assert(C$, this, function(){return (data.length == (512))});
var i=0;
var j=0;
while (i < (512)){
var entry=(data[i++]).$c() << 16;
C$.A[j++]=entry | (data[i++]).$c();
}
}};
};
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:16 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
