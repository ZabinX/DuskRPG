(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.common"),I$=[[0,'java.util.PropertyResourceBundle']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "I18NImpl");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getString$S$S$S',  function (className, resource_name, key) {
var bundle=null;
try {
var stream=Clazz.forName(className).getResourceAsStream$S(resource_name);
bundle=Clazz.new_($I$(1,1).c$$java_io_InputStream,[stream]);
} catch (e) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
}
return bundle.handleGetObject$S(key);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
