(function(){var P$=Clazz.newPackage("java.net"),I$=[[0,'StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "URISyntaxException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index'],'S',['input']]]

Clazz.newMeth(C$, 'c$$S$S$I',  function (input, reason, index) {
;C$.superclazz.c$$S.apply(this,[reason]);C$.$init$.apply(this);
if ((input == null ) || (reason == null ) ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (index < -1) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.input=input;
this.index=index;
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (input, reason) {
C$.c$$S$S$I.apply(this, [input, reason, -1]);
}, 1);

Clazz.newMeth(C$, 'getInput$',  function () {
return this.input;
});

Clazz.newMeth(C$, 'getReason$',  function () {
return C$.superclazz.prototype.getMessage$.apply(this, []);
});

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.index;
});

Clazz.newMeth(C$, 'getMessage$',  function () {
var sb=Clazz.new_($I$(1,1));
sb.append$S(this.getReason$());
if (this.index > -1) {
sb.append$S(" at index ");
sb.append$I(this.index);
}sb.append$S(": ");
sb.append$S(this.input);
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:19 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
