(function(){var P$=Clazz.newPackage("java.text"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CollationKey", null, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['source']]]

Clazz.newMeth(C$, 'getSourceString$',  function () {
return this.source;
});

Clazz.newMeth(C$, 'c$$S',  function (source) {
;C$.$init$.apply(this);
if (source == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.source=source;
}, 1);

C$.$synth$=function(){
/*$synth$*/C$.prototype['compareTo$java_text_CollationKey']=C$.prototype['compareTo$O'];
}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
