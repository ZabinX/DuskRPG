(function(){var P$=Clazz.newPackage("java.text"),I$=[[0,'java.util.HashMap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "AttributedCharacterIterator", function(){
}, null, 'java.text.CharacterIterator');
C$.$classes$=[['Attribute',9]];

C$.$clinit$=2;
;
(function(){/*c*/var C$=Clazz.newClass(P$.AttributedCharacterIterator, "Attribute", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]
,['O',['instanceMap','java.util.Map','LANGUAGE','java.text.AttributedCharacterIterator.Attribute','+READING','+INPUT_METHOD_SEGMENT']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.name=name;
if (this.getClass$() === Clazz.getClass(C$) ) {
C$.instanceMap.put$O$O(name, this);
}}, 1);

Clazz.newMeth(C$, 'equals$O',  function (obj) {
return C$.superclazz.prototype.equals$O.apply(this, [obj]);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return C$.superclazz.prototype.hashCode$.apply(this, []);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "(" + this.name + ")" ;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'readResolve$',  function () {
if (this.getClass$() !== Clazz.getClass(C$) ) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["subclass didn\'t correctly implement readResolve"]);
}var instance=C$.instanceMap.get$O(this.getName$());
if (instance != null ) {
return instance;
} else {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["unknown attribute name"]);
}});

C$.$static$=function(){C$.$static$=0;
C$.instanceMap=Clazz.new_($I$(1,1).c$$I,[7]);
C$.LANGUAGE=Clazz.new_(C$.c$$S,["language"]);
C$.READING=Clazz.new_(C$.c$$S,["reading"]);
C$.INPUT_METHOD_SEGMENT=Clazz.new_(C$.c$$S,["input_method_segment"]);
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
