(function(){var P$=Clazz.newPackage("sun.text.normalizer"),I$=[[0,'StringBuffer','sun.text.normalizer.Utility']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReplaceableString", null, null, 'sun.text.normalizer.Replaceable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['buf','StringBuffer']]]

Clazz.newMeth(C$, 'c$$S',  function (str) {
;C$.$init$.apply(this);
this.buf=Clazz.new_($I$(1,1).c$$S,[str]);
}, 1);

Clazz.newMeth(C$, 'c$$StringBuffer',  function (buf) {
;C$.$init$.apply(this);
this.buf=buf;
}, 1);

Clazz.newMeth(C$, 'length$',  function () {
return this.buf.length$();
});

Clazz.newMeth(C$, 'charAt$I',  function (offset) {
return this.buf.charAt$I(offset);
});

Clazz.newMeth(C$, 'getChars$I$I$CA$I',  function (srcStart, srcLimit, dst, dstStart) {
$I$(2).getChars$StringBuffer$I$I$CA$I(this.buf, srcStart, srcLimit, dst, dstStart);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
