(function(){var P$=Clazz.newPackage("sun.text.normalizer"),I$=[[0,'sun.text.normalizer.ReplaceableUCharacterIterator','sun.text.normalizer.CharacterIteratorWrapper','sun.text.normalizer.UTF16','sun.text.normalizer.UCharacterProperty']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UCharacterIterator", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getInstance$S',  function (source) {
return Clazz.new_($I$(1,1).c$$S,[source]);
}, 1);

Clazz.newMeth(C$, 'getInstance$StringBuffer',  function (source) {
return Clazz.new_($I$(1,1).c$$StringBuffer,[source]);
}, 1);

Clazz.newMeth(C$, 'getInstance$java_text_CharacterIterator',  function (source) {
return Clazz.new_($I$(2,1).c$$java_text_CharacterIterator,[source]);
}, 1);

Clazz.newMeth(C$, 'nextCodePoint$',  function () {
var ch1=this.next$();
if ($I$(3,"isLeadSurrogate$C",[String.fromCharCode(ch1)])) {
var ch2=this.next$();
if ($I$(3,"isTrailSurrogate$C",[String.fromCharCode(ch2)])) {
return $I$(4,"getRawSupplementary$C$C",[String.fromCharCode(ch1), String.fromCharCode(ch2)]);
} else if (ch2 != -1) {
this.previous$();
}}return ch1;
});

Clazz.newMeth(C$, 'getText$CA',  function (fillIn) {
return this.getText$CA$I(fillIn, 0);
});

Clazz.newMeth(C$, 'getText$',  function () {
var text=Clazz.array(Character.TYPE, [this.getLength$()]);
this.getText$CA(text);
return  String.instantialize(text);
});

Clazz.newMeth(C$, 'moveIndex$I',  function (delta) {
var x=Math.max(0, Math.min(this.getIndex$() + delta, this.getLength$()));
this.setIndex$I(x);
return x;
});

Clazz.newMeth(C$, 'clone$',  function () {
return Clazz.clone(this);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
