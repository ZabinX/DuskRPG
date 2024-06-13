(function(){var P$=java.util,p$1={},I$=[[0,'java.util.Objects','StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StringJoiner");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['prefix','delimiter','suffix','emptyValue'],'O',['value','StringBuilder']]]

Clazz.newMeth(C$, 'c$$CharSequence',  function (delimiter) {
C$.c$$CharSequence$CharSequence$CharSequence.apply(this, [delimiter, "", ""]);
}, 1);

Clazz.newMeth(C$, 'c$$CharSequence$CharSequence$CharSequence',  function (delimiter, prefix, suffix) {
;C$.$init$.apply(this);
$I$(1).requireNonNull$O$S(prefix, "The prefix must not be null");
$I$(1).requireNonNull$O$S(delimiter, "The delimiter must not be null");
$I$(1).requireNonNull$O$S(suffix, "The suffix must not be null");
this.prefix=prefix.toString();
this.delimiter=delimiter.toString();
this.suffix=suffix.toString();
this.emptyValue=this.prefix + this.suffix;
}, 1);

Clazz.newMeth(C$, 'setEmptyValue$CharSequence',  function (emptyValue) {
this.emptyValue=$I$(1).requireNonNull$O$S(emptyValue, "The empty value must not be null").toString();
return this;
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.value == null ) {
return this.emptyValue;
} else {
if (this.suffix.equals$O("")) {
return this.value.toString();
} else {
var initialLength=this.value.length$();
var result=this.value.append$S(this.suffix).toString();
this.value.setLength$I(initialLength);
return result;
}}});

Clazz.newMeth(C$, 'add$CharSequence',  function (newElement) {
p$1.prepareBuilder.apply(this, []).append$CharSequence(newElement);
return this;
});

Clazz.newMeth(C$, 'merge$java_util_StringJoiner',  function (other) {
$I$(1).requireNonNull$O(other);
if (other.value != null ) {
var length=other.value.length$();
var builder=p$1.prepareBuilder.apply(this, []);
builder.append$CharSequence$I$I(other.value, other.prefix.length$(), length);
}return this;
});

Clazz.newMeth(C$, 'prepareBuilder',  function () {
if (this.value != null ) {
this.value.append$S(this.delimiter);
} else {
this.value=Clazz.new_($I$(2,1)).append$S(this.prefix);
}return this.value;
}, p$1);

Clazz.newMeth(C$, 'length$',  function () {
return (this.value != null  ? this.value.length$() + this.suffix.length$() : this.emptyValue.length$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
