(function(){var P$=Clazz.newPackage("java.text"),I$=[[0,'sun.text.normalizer.NormalizerBase']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Normalizer", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Form',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'normalize$CharSequence$java_text_Normalizer_Form',  function (src, form) {
return $I$(1,"normalize$S$java_text_Normalizer_Form",[src.toString(), form]);
}, 1);

Clazz.newMeth(C$, 'isNormalized$CharSequence$java_text_Normalizer_Form',  function (src, form) {
return $I$(1,"isNormalized$S$java_text_Normalizer_Form",[src.toString(), form]);
}, 1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.Normalizer, "Form", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NFD", 0, []);
Clazz.newEnumConst($vals, C$.c$, "NFC", 1, []);
Clazz.newEnumConst($vals, C$.c$, "NFKD", 2, []);
Clazz.newEnumConst($vals, C$.c$, "NFKC", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
