(function(){var P$=Clazz.newPackage("java.nio.file"),I$=[[0,'StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileSystemException", null, 'java.io.IOException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['file','other']]]

Clazz.newMeth(C$, 'c$$S',  function (file) {
;C$.superclazz.c$$S.apply(this,[null]);C$.$init$.apply(this);
this.file=file;
this.other=null;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S',  function (file, other, reason) {
;C$.superclazz.c$$S.apply(this,[reason]);C$.$init$.apply(this);
this.file=file;
this.other=other;
}, 1);

Clazz.newMeth(C$, 'getFile$',  function () {
return this.file;
});

Clazz.newMeth(C$, 'getOtherFile$',  function () {
return this.other;
});

Clazz.newMeth(C$, 'getReason$',  function () {
return C$.superclazz.prototype.getMessage$.apply(this, []);
});

Clazz.newMeth(C$, 'getMessage$',  function () {
if (this.file == null  && this.other == null  ) return this.getReason$();
var sb=Clazz.new_($I$(1,1));
if (this.file != null ) sb.append$S(this.file);
if (this.other != null ) {
sb.append$S(" -> ");
sb.append$S(this.other);
}if (this.getReason$() != null ) {
sb.append$S(": ");
sb.append$S(this.getReason$());
}return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:22 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
