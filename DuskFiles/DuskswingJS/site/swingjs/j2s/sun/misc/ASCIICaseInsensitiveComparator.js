(function(){var P$=Clazz.newPackage("sun.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ASCIICaseInsensitiveComparator", null, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['CASE_INSENSITIVE_ORDER','java.util.Comparator']]]

Clazz.newMeth(C$, ['compare$S$S','compare$O$O'],  function (s1, s2) {
var n1=s1.length$();
var n2=s2.length$();
var minLen=n1 < n2 ? n1 : n2;
for (var i=0; i < minLen; i++) {
var c1=s1.charAt$I(i);
var c2=s2.charAt$I(i);
Clazz.assert(C$, this, function(){return c1 <= "" && c2 <= "" });
if (c1 != c2) {
c1=String.fromCharCode(C$.toLower$I(c1.$c()));
c2=String.fromCharCode(C$.toLower$I(c2.$c()));
if (c1 != c2) {
return c1.$c() - c2.$c();
}}}
return n1 - n2;
});

Clazz.newMeth(C$, 'lowerCaseHashCode$S',  function (s) {
var h=0;
var len=s.length$();
for (var i=0; i < len; i++) {
h=31 * h + C$.toLower$I(s.charAt$I(i).$c());
}
return h;
}, 1);

Clazz.newMeth(C$, 'isLower$I',  function (ch) {
return ((ch - 97) | (122 - ch)) >= 0;
}, 1);

Clazz.newMeth(C$, 'isUpper$I',  function (ch) {
return ((ch - 65) | (90 - ch)) >= 0;
}, 1);

Clazz.newMeth(C$, 'toLower$I',  function (ch) {
return C$.isUpper$I(ch) ? (ch + 32) : ch;
}, 1);

Clazz.newMeth(C$, 'toUpper$I',  function (ch) {
return C$.isLower$I(ch) ? (ch - 32) : ch;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.CASE_INSENSITIVE_ORDER=Clazz.new_(C$);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
