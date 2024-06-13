(function(){var P$=Clazz.newPackage("java.security"),I$=[[0,'StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PermissionCollection", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['readOnly']]]

Clazz.newMeth(C$, 'setReadOnly$',  function () {
this.readOnly=true;
});

Clazz.newMeth(C$, 'isReadOnly$',  function () {
return this.readOnly;
});

Clazz.newMeth(C$, 'toString',  function () {
var enum_=this.elements$();
var sb=Clazz.new_($I$(1,1));
sb.append$S(C$.superclazz.prototype.toString.apply(this, []) + " (\n");
while (enum_.hasMoreElements$()){
try {
sb.append$S(" ");
sb.append$S(enum_.nextElement$().toString());
sb.append$S("\n");
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.NoSuchElementException")){
} else {
throw e;
}
}
}
sb.append$S(")\n");
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
