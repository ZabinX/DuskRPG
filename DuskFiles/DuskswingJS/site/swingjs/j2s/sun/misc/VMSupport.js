(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'java.util.Properties','java.io.ByteArrayOutputStream','java.util.jar.JarFile',['java.util.jar.Attributes','.Name']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VMSupport");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['agentProps','java.util.Properties']]]

Clazz.newMeth(C$, 'getAgentProperties$',  function () {
if (C$.agentProps == null ) {
C$.agentProps=Clazz.new_($I$(1,1));
C$.initAgentProperties$java_util_Properties(C$.agentProps);
}return C$.agentProps;
}, 1);

Clazz.newMeth(C$, 'initAgentProperties$java_util_Properties',  function (props) {
alert('native method must be replaced! initAgentProperties');
}
, 2);

Clazz.newMeth(C$, 'serializePropertiesToByteArray$java_util_Properties',  function (p) {
var out=Clazz.new_($I$(2,1).c$$I,[4096]);
var props=Clazz.new_($I$(1,1));
var keyset=p.stringPropertyNames$();
for (var key, $key = keyset.iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var value=p.getProperty$S(key);
props.put$O$O(key, value);
}
props.store$java_io_OutputStream$S(out, null);
return out.toByteArray$();
}, 1);

Clazz.newMeth(C$, 'serializePropertiesToByteArray$',  function () {
return C$.serializePropertiesToByteArray$java_util_Properties(System.getProperties$());
}, 1);

Clazz.newMeth(C$, 'serializeAgentPropertiesToByteArray$',  function () {
return C$.serializePropertiesToByteArray$java_util_Properties(C$.getAgentProperties$());
}, 1);

Clazz.newMeth(C$, 'isClassPathAttributePresent$S',  function (path) {
try {
var man=(Clazz.new_($I$(3,1).c$$S,[path])).getManifest$();
if (man != null ) {
if (man.getMainAttributes$().getValue$java_util_jar_Attributes_Name($I$(4).CLASS_PATH) != null ) {
return true;
}}return false;
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[ioe.getMessage$()]);
} else {
throw ioe;
}
}
}, 1);

Clazz.newMeth(C$, 'getVMTemporaryDirectory$',  function () {
alert('native method must be replaced! getVMTemporaryDirectory');
}
, 2);

C$.$static$=function(){C$.$static$=0;
C$.agentProps=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
