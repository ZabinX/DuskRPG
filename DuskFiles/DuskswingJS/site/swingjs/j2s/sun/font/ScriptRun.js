(function(){var P$=Clazz.newPackage("sun.font"),p$1={},I$=[[0,'sun.font.ScriptRunData']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ScriptRun");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['textStart','textLimit','scriptStart','scriptLimit','scriptCode','parenSP'],'O',['text','char[]','stack','int[]']]
,['I',['pairedCharPower','pairedCharExtra'],'O',['pairedChars','int[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$CA$I$I',  function (chars, start, count) {
;C$.$init$.apply(this);
this.init$CA$I$I(chars, start, count);
}, 1);

Clazz.newMeth(C$, 'init$CA$I$I',  function (chars, start, count) {
if (chars == null  || start < 0  || count < 0  || count > chars.length - start ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.text=chars;
this.textStart=start;
this.textLimit=start + count;
this.scriptStart=this.textStart;
this.scriptLimit=this.textStart;
this.scriptCode=-1;
this.parenSP=0;
});

Clazz.newMeth(C$, 'getScriptStart$',  function () {
return this.scriptStart;
});

Clazz.newMeth(C$, 'getScriptLimit$',  function () {
return this.scriptLimit;
});

Clazz.newMeth(C$, 'getScriptCode$',  function () {
return this.scriptCode;
});

Clazz.newMeth(C$, 'next$',  function () {
var startSP=this.parenSP;
if (this.scriptLimit >= this.textLimit) {
return false;
}this.scriptCode=0;
this.scriptStart=this.scriptLimit;
var ch;
while ((ch=p$1.nextCodePoint.apply(this, [])) != -1){
var sc=$I$(1).getScript$I(ch);
var pairIndex=sc == 0 ? C$.getPairIndex$I(ch) : -1;
if (pairIndex >= 0) {
if ((pairIndex & 1) == 0) {
if (this.stack == null ) {
this.stack=Clazz.array(Integer.TYPE, [32]);
} else if (this.parenSP == this.stack.length) {
var newstack=Clazz.array(Integer.TYPE, [this.stack.length + 32]);
System.arraycopy$O$I$O$I$I(this.stack, 0, newstack, 0, this.stack.length);
this.stack=newstack;
}this.stack[this.parenSP++]=pairIndex;
this.stack[this.parenSP++]=this.scriptCode;
} else if (this.parenSP > 0) {
var pi=pairIndex & ~1;
while ((this.parenSP-=2) >= 0 && this.stack[this.parenSP] != pi );
if (this.parenSP >= 0) {
sc=this.stack[this.parenSP + 1];
} else {
this.parenSP=0;
}if (this.parenSP < startSP) {
startSP=this.parenSP;
}}}if (C$.sameScript$I$I(this.scriptCode, sc)) {
if (this.scriptCode <= 1 && sc > 1 ) {
this.scriptCode=sc;
while (startSP < this.parenSP){
this.stack[startSP + 1]=this.scriptCode;
startSP+=2;
}
}if (pairIndex > 0 && (pairIndex & 1) != 0  && this.parenSP > 0 ) {
this.parenSP-=2;
}} else {
p$1.pushback$I.apply(this, [ch]);
break;
}}
return true;
});

Clazz.newMeth(C$, 'nextCodePoint',  function () {
if (this.scriptLimit >= this.textLimit) {
return -1;
}var ch=this.text[this.scriptLimit++].$c();
if (ch >= 55296 && ch < 56320  && this.scriptLimit < this.textLimit ) {
var nch=this.text[this.scriptLimit].$c();
if (nch >= 56320 && nch < 57344 ) {
++this.scriptLimit;
ch=(ch << 10) + nch + -56613888 ;
}}return ch;
}, p$1);

Clazz.newMeth(C$, 'pushback$I',  function (ch) {
if (ch >= 0) {
if (ch >= 65536) {
this.scriptLimit-=2;
} else {
this.scriptLimit-=1;
}}}, p$1);

Clazz.newMeth(C$, 'sameScript$I$I',  function (scriptOne, scriptTwo) {
return scriptOne == scriptTwo || scriptOne <= 1  || scriptTwo <= 1 ;
}, 1);

Clazz.newMeth(C$, 'highBit$I',  function (n) {
if (n <= 0) {
return $b$[0] = -32, $b$[0];
}var bit=($b$[0] = 0, $b$[0]);
if (n >= 65536) {
n>>=16;
bit=($b$[0] = bit+(16), $b$[0]);
}if (n >= 256) {
n>>=8;
bit=($b$[0] = bit+(8), $b$[0]);
}if (n >= 16) {
n>>=4;
bit=($b$[0] = bit+(4), $b$[0]);
}if (n >= 4) {
n>>=2;
bit=($b$[0] = bit+(2), $b$[0]);
}if (n >= 2) {
n>>=1;
bit=($b$[0] = bit+(1), $b$[0]);
}return bit;
}, 1);

Clazz.newMeth(C$, 'getPairIndex$I',  function (ch) {
var probe=C$.pairedCharPower;
var index=0;
if (ch >= C$.pairedChars[C$.pairedCharExtra]) {
index=C$.pairedCharExtra;
}while (probe > (1)){
probe>>=1;
if (ch >= C$.pairedChars[index + probe]) {
index+=probe;
}}
if (C$.pairedChars[index] != ch) {
index=-1;
}return index;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.pairedChars=Clazz.array(Integer.TYPE, -1, [40, 41, 60, 62, 91, 93, 123, 125, 171, 187, 8216, 8217, 8220, 8221, 8249, 8250, 12296, 12297, 12298, 12299, 12300, 12301, 12302, 12303, 12304, 12305, 12308, 12309, 12310, 12311, 12312, 12313, 12314, 12315]);
C$.pairedCharPower=1 << C$.highBit$I(C$.pairedChars.length);
C$.pairedCharExtra=C$.pairedChars.length - C$.pairedCharPower;
};
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
