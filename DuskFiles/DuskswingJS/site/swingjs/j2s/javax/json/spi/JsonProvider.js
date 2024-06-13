(function(){var P$=Clazz.newPackage("javax.json.spi"),I$=[[0,'java.util.ServiceLoader']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JsonProvider");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'provider$',  function () {
var loader=$I$(1,"load$Class",[Clazz.getClass(C$)]);
var it=loader.iterator$();
if (it.hasNext$()) {
return it.next$();
}try {
var clazz=Clazz.forName("org.glassfish.json.JsonProviderImpl");
return clazz.newInstance$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var x = e$$;
{
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["Provider org.glassfish.json.JsonProviderImpl not found", x]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var x = e$$;
{
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["Provider " + "org.glassfish.json.JsonProviderImpl" + " could not be instantiated: " + x , x]);
}
} else {
throw e$$;
}
}
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
