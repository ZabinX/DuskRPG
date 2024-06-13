(function(){var P$=Clazz.newPackage("org.json"),I$=[[0,'java.io.StringWriter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSONStringer", null, 'org.json.JSONWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$Appendable.apply(this,[Clazz.new_($I$(1,1))]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.mode == "d" ? this.writer.toString() : null;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
