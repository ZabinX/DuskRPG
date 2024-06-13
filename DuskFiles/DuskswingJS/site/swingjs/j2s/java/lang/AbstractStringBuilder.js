(function(){var P$=java.lang,p$1={};
/*c*/var C$=Clazz.newClass(P$, "AbstractStringBuilder", null, null, ['Appendable', 'CharSequence']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['秘s']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (capacity) {
;C$.$init$.apply(this);
this.秘s="";
}, 1);

Clazz.newMeth(C$, 'length$',  function () {
return this.秘s.length$();
});

Clazz.newMeth(C$, 'capacity$',  function () {
return 2147483647;
});

Clazz.newMeth(C$, 'ensureCapacity$I',  function (minimumCapacity) {
});

Clazz.newMeth(C$, 'ensureCapacityInternal$I',  function (minimumCapacity) {
}, p$1);

Clazz.newMeth(C$, 'expandCapacity$I',  function (minimumCapacity) {
});

Clazz.newMeth(C$, 'trimToSize$',  function () {
});

Clazz.newMeth(C$, 'setLength$I',  function (newLength) {
if (newLength < 0) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[newLength]);
p$1.ensureCapacityInternal$I.apply(this, [newLength]);
if (this.秘s.length$() > newLength) this.秘s=this.秘s.substring$I$I(0, newLength);
});

Clazz.newMeth(C$, 'charAt$I',  function (index) {
if ((index < 0) || (index >= this.秘s.length$()) ) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);
return this.秘s.charAt$I(index);
});

Clazz.newMeth(C$, 'codePointAt$I',  function (index) {
if ((index < 0) || (index >= this.秘s.length$()) ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);
}return this.秘s.codePointAt$I(index);
});

Clazz.newMeth(C$, 'codePointBefore$I',  function (index) {
var i=index - 1;
if ((i < 0) || (i >= this.秘s.length$()) ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);
}return this.秘s.codePointAt$I(i);
});

Clazz.newMeth(C$, 'codePointCount$I$I',  function (beginIndex, endIndex) {
if (beginIndex < 0 || endIndex > this.秘s.length$()  || beginIndex > endIndex ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}return endIndex - beginIndex;
});

Clazz.newMeth(C$, 'offsetByCodePoints$I$I',  function (index, codePointOffset) {
if (index < 0 || index + codePointOffset > this.秘s.length$() ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}return index + codePointOffset;
});

Clazz.newMeth(C$, 'getChars$I$I$CA$I',  function (srcBegin, srcEnd, dst, pt) {
if (srcBegin < 0) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[srcBegin]);
if ((srcEnd < 0) || (srcEnd > this.秘s.length$()) ) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[srcEnd]);
if (srcBegin > srcEnd || pt < 0  || pt + (srcEnd - srcBegin) > dst.length ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$S,[srcBegin > srcEnd ? "srcBegin > srcEnd" : pt < 0 ? "pt < 0" : "pt + len > dst.length"]);
}var s=this.秘s;
for (var i=srcBegin; i < srcEnd; i++) {

dst[pt++] = s[i];
}
});

Clazz.newMeth(C$, 'setCharAt$I$C',  function (index, ch) {
if ((index < 0) || (index >= this.秘s.length$()) ) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);

this.秘s = this.秘s.substring(0, index) + ch + this.秘s.substring(index + 1);
});

Clazz.newMeth(C$, 'append$O',  function (obj) {

this.秘s += (obj == null ? null : obj.toString());
return this;
});

Clazz.newMeth(C$, 'append$S',  function (str) {

this.秘s += str;
return this;
});

Clazz.newMeth(C$, 'append$StringBuffer',  function (sb) {
if (sb == null ) return this.appendNull$();

this.秘s += sb.秘s;
return this;
});

Clazz.newMeth(C$, 'append$AbstractStringBuilder',  function (asb) {
if (asb == null ) return this.appendNull$();
return this.append$S(asb.toString());
});

Clazz.newMeth(C$, 'append$CharSequence',  function (s) {
if (s == null ) return this.appendNull$();
if (Clazz.instanceOf(s, "java.lang.String")) return this.append$S(s);
if (Clazz.instanceOf(s, "java.lang.AbstractStringBuilder")) return this.append$S((s).toString());
return this.append$S(s.toString());
});

Clazz.newMeth(C$, 'appendNull$',  function () {

this.秘s += "null";
return this;
});

Clazz.newMeth(C$, 'append$CharSequence$I$I',  function (cs, start, end) {
if (cs == null ) cs="null";
if ((start < 0) || (start > end) || (end > cs.length$())  ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["start " + start + ", end " + end + ", s.length() " + cs.length$() ]);
if (Clazz.instanceOf(cs, "java.lang.String")) {
return this.append$S((cs).substring$I$I(start, end));
}if (Clazz.instanceOf(cs, "java.lang.AbstractStringBuilder")) {
return this.append$S((cs).substring$I$I(start, end));
}for (var i=start; i < end; i++) {
var c=cs.charAt$I(i);

this.秘s += c;
}
return this;
});

Clazz.newMeth(C$, 'append$CA',  function (str) {

this.秘s += str.join("");
return this;
});

Clazz.newMeth(C$, 'append$CA$I$I',  function (str, offset, len) {

this.秘s += str.slice(offset, offset + len).join("");
return this;
});

Clazz.newMeth(C$, 'append$Z',  function (b) {

this.秘s += b;
return this;
});

Clazz.newMeth(C$, 'append$C',  function (c) {

this.秘s += c;
return this;
});

Clazz.newMeth(C$, 'append$I',  function (i) {

this.秘s += i;
return this;
});

Clazz.newMeth(C$, 'append$J',  function (l) {
var s=Long.toString$J(l);

this.秘s += s;
return this;
});

Clazz.newMeth(C$, 'append$F',  function (f) {

this.秘s += f;
return this;
});

Clazz.newMeth(C$, 'append$D',  function (d) {

this.秘s += d;
return this;
});

Clazz.newMeth(C$, 'delete$I$I',  function (start, end) {
if (start < 0) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[start]);
if (end > this.秘s.length$()) end=this.秘s.length$();
if (start > end) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException'));

this.秘s = this.秘s.substring(0, start)+this.秘s.substring(end);
return this;
});

Clazz.newMeth(C$, 'appendCodePoint$I',  function (c) {
try {

this.秘s += String.fromCodePoint(c);
} catch (t) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}
return this;
});

Clazz.newMeth(C$, 'deleteCharAt$I',  function (index) {
if ((index < 0) || (index >= this.秘s.length$()) ) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);

this.秘s = this.秘s.substring(0, index) + this.秘s.substring(index + 1);
return this;
});

Clazz.newMeth(C$, 'replace$I$I$S',  function (start, end, str) {
if (start < 0) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[start]);
var len=this.秘s.length$();
if (start > len) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$S,["start > length()"]);
if (start > end) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$S,["start > end"]);
if (end > len) end=len;

this.秘s = this.秘s.substring(0, start) + str + this.秘s.substring(end);
return this;
});

Clazz.newMeth(C$, 'substring$I',  function (start) {
return this.substring$I$I(start, this.秘s.length$());
});

Clazz.newMeth(C$, 'subSequence$I$I',  function (start, end) {
return this.substring$I$I(start, end);
});

Clazz.newMeth(C$, 'substring$I$I',  function (start, end) {
if (start < 0) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[start]);
if (end > this.秘s.length$()) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[end]);
if (start > end) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[end - start]);
{
return this.秘s.substring(start, end);
}
});

Clazz.newMeth(C$, 'insert$I$CA$I$I',  function (index, str, offset, len) {
if ((index < 0) || (index > this.秘s.length$()) ) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);
if ((offset < 0) || (len < 0) || (offset + len > str.length)  ) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$S,["offset " + offset + ", len " + len + ", str.length " + str.length ]);

this.秘s = this.秘s.substring(0, index) + str.slice(offset, offset + len).join("") + this.秘s.substring(index);
return this;
});

Clazz.newMeth(C$, 'insert$I$O',  function (index, obj) {
return this.insert$I$S(index, "" + obj);
});

Clazz.newMeth(C$, 'insert$I$S',  function (index, str) {
if ((index < 0) || (index > this.秘s.length$()) ) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);
if (str == null ) str="null";

this.秘s = this.秘s.substring(0, index) + str + this.秘s.substring(index);
return this;
});

Clazz.newMeth(C$, 'insert$I$CA',  function (index, str) {
if ((index < 0) || (index > this.length$()) ) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);

this.秘s = this.秘s.substring(0, index) + str.join() + this.秘s.substring(index);
return this;
});

Clazz.newMeth(C$, 'insert$I$CharSequence',  function (index, s) {
if (s == null ) s="null";
if (Clazz.instanceOf(s, "java.lang.String")) return this.insert$I$S(index, s);
if (Clazz.instanceOf(s, "java.lang.AbstractStringBuilder")) return this.insert$I$S(index, (s).toString());
return this.insert$I$CharSequence$I$I(index, s, 0, s.length$());
});

Clazz.newMeth(C$, 'insert$I$CharSequence$I$I',  function (index, cs, start, end) {
if (cs == null ) cs="null";
if ((index < 0) || (index > this.length$()) ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["index " + index]);
if ((start < 0) || (end < 0) || (start > end) || (end > cs.length$())  ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["start " + start + ", end " + end + ", s.length() " + cs.length$() ]);
if (Clazz.instanceOf(cs, "java.lang.String")) return this.insert$I$S(index, (cs).substring$I$I(start, end));
if (Clazz.instanceOf(cs, "java.lang.AbstractStringBuilder")) return this.insert$I$S(index, (cs).substring$I$I(start, end));
var c=Clazz.array(Character.TYPE, [end - start]);
for (var i=start, pt=0; i < end; i++) c[pt++]=cs.charAt$I(i);

return this.insert$I$CA(index, c);
});

Clazz.newMeth(C$, 'insert$I$Z',  function (index, b) {
return this.insert$I$S(index, b ? "true" : "false");
});

Clazz.newMeth(C$, 'insert$I$C',  function (index, c) {

this.秘s = this.秘s.substring(0, index) + c + this.秘s.substring(index);
return this;
});

Clazz.newMeth(C$, 'insert$I$I',  function (index, i) {
return this.insert$I$S(index, "" + i);
});

Clazz.newMeth(C$, 'insert$I$J',  function (index, l) {
return this.insert$I$S(index, "" + Long.$s(l));
});

Clazz.newMeth(C$, 'insert$I$F',  function (index, f) {
return this.insert$I$S(index, "" + new Float(f).toString());
});

Clazz.newMeth(C$, 'insert$I$D',  function (index, d) {
return this.insert$I$S(index, "" + new Double(d).toString());
});

Clazz.newMeth(C$, 'indexOf$S',  function (str) {
return this.indexOf$S$I(str, 0);
});

Clazz.newMeth(C$, 'indexOf$S$I',  function (str, fromIndex) {
{
return this.秘s.indexOf(str, fromIndex);
}
});

Clazz.newMeth(C$, 'lastIndexOf$S',  function (str) {
return this.lastIndexOf$S$I(str, this.秘s.length$());
});

Clazz.newMeth(C$, 'lastIndexOf$S$I',  function (str, fromIndex) {
{
return this.秘s.lastIndexOf(str, fromIndex);
}
});

Clazz.newMeth(C$, 'reverse$',  function () {

this.秘s.split("").reverse().join("");
return this;
});

Clazz.newMeth(C$, 'getValue$',  function () {
{
return this.秘s.split("");
}
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:16 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
