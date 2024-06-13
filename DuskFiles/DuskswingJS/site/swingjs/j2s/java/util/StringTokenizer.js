(function(){var P$=java.util,p$1={};
/*c*/var C$=Clazz.newClass(P$, "StringTokenizer", null, null, 'java.util.Enumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hasSurrogates=false;
},1);

C$.$fields$=[['Z',['retDelims','delimsChanged','hasSurrogates'],'I',['currentPosition','newPosition','maxPosition','maxDelimCodePoint'],'S',['str','delimiters'],'O',['delimiterCodePoints','int[]']]]

Clazz.newMeth(C$, 'setMaxDelimCodePoint',  function () {
if (this.delimiters == null ) {
this.maxDelimCodePoint=0;
return;
}var m=0;
var c;
var count=0;
for (var i=0; i < this.delimiters.length$(); i+=Character.charCount$I(c)) {
c=this.delimiters.charAt$I(i).$c();
if (c >= 55296  && c <= 57343  ) {
c=this.delimiters.codePointAt$I(i);
this.hasSurrogates=true;
}if (m < c) m=c;
++count;
}
this.maxDelimCodePoint=m;
if (this.hasSurrogates) {
this.delimiterCodePoints=Clazz.array(Integer.TYPE, [count]);
for (var i=0, j=0; i < count; i++, j+=Character.charCount$I(c)) {
c=this.delimiters.codePointAt$I(j);
this.delimiterCodePoints[i]=c;
}
}}, p$1);

Clazz.newMeth(C$, 'c$$S$S$Z',  function (str, delim, returnDelims) {
;C$.$init$.apply(this);
this.currentPosition=0;
this.newPosition=-1;
this.delimsChanged=false;
this.str=str;
this.maxPosition=str.length$();
this.delimiters=delim;
this.retDelims=returnDelims;
p$1.setMaxDelimCodePoint.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (str, delim) {
C$.c$$S$S$Z.apply(this, [str, delim, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (str) {
C$.c$$S$S$Z.apply(this, [str, " \t\n\r\f", false]);
}, 1);

Clazz.newMeth(C$, 'skipDelimiters$I',  function (startPos) {
if (this.delimiters == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var position=startPos;
while (!this.retDelims && position < this.maxPosition ){
if (!this.hasSurrogates) {
var c=this.str.charAt$I(position);
if ((c.$c() > this.maxDelimCodePoint ) || (this.delimiters.indexOf$I(c) < 0) ) break;
++position;
} else {
var c=this.str.codePointAt$I(position);
if ((c > this.maxDelimCodePoint) || !p$1.isDelimiter$I.apply(this, [c]) ) {
break;
}position+=Character.charCount$I(c);
}}
return position;
}, p$1);

Clazz.newMeth(C$, 'scanToken$I',  function (startPos) {
var position=startPos;
while (position < this.maxPosition){
if (!this.hasSurrogates) {
var c=this.str.charAt$I(position);
if ((c.$c() <= this.maxDelimCodePoint ) && (this.delimiters.indexOf$I(c) >= 0) ) break;
++position;
} else {
var c=this.str.codePointAt$I(position);
if ((c <= this.maxDelimCodePoint) && p$1.isDelimiter$I.apply(this, [c]) ) break;
position+=Character.charCount$I(c);
}}
if (this.retDelims && (startPos == position) ) {
if (!this.hasSurrogates) {
var c=this.str.charAt$I(position);
if ((c.$c() <= this.maxDelimCodePoint ) && (this.delimiters.indexOf$I(c) >= 0) ) ++position;
} else {
var c=this.str.codePointAt$I(position);
if ((c <= this.maxDelimCodePoint) && p$1.isDelimiter$I.apply(this, [c]) ) position+=Character.charCount$I(c);
}}return position;
}, p$1);

Clazz.newMeth(C$, 'isDelimiter$I',  function (codePoint) {
for (var i=0; i < this.delimiterCodePoints.length; i++) {
if (this.delimiterCodePoints[i] == codePoint) {
return true;
}}
return false;
}, p$1);

Clazz.newMeth(C$, 'hasMoreTokens$',  function () {
this.newPosition=p$1.skipDelimiters$I.apply(this, [this.currentPosition]);
return (this.newPosition < this.maxPosition);
});

Clazz.newMeth(C$, 'nextToken$',  function () {
this.currentPosition=(this.newPosition >= 0 && !this.delimsChanged ) ? this.newPosition : p$1.skipDelimiters$I.apply(this, [this.currentPosition]);
this.delimsChanged=false;
this.newPosition=-1;
if (this.currentPosition >= this.maxPosition) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
var start=this.currentPosition;
this.currentPosition=p$1.scanToken$I.apply(this, [this.currentPosition]);
return this.str.substring$I$I(start, this.currentPosition);
});

Clazz.newMeth(C$, 'nextToken$S',  function (delim) {
this.delimiters=delim;
this.delimsChanged=true;
p$1.setMaxDelimCodePoint.apply(this, []);
return this.nextToken$();
});

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return this.hasMoreTokens$();
});

Clazz.newMeth(C$, 'nextElement$',  function () {
return this.nextToken$();
});

Clazz.newMeth(C$, 'countTokens$',  function () {
var count=0;
var currpos=this.currentPosition;
while (currpos < this.maxPosition){
currpos=p$1.skipDelimiters$I.apply(this, [currpos]);
if (currpos >= this.maxPosition) break;
currpos=p$1.scanToken$I.apply(this, [currpos]);
++count;
}
return count;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
