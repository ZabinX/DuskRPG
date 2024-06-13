(function(){var P$=Clazz.newPackage("java.security"),p$1={},p$2={},I$=[[0,'java.util.Locale','java.util.Collections','java.util.ArrayList','java.util.HashMap',['java.security.Provider','.UString'],'java.security.Provider','java.lang.reflect.Modifier','sun.security.util.Debug',['java.security.Provider','.ServiceKey'],'java.util.Properties','java.util.LinkedHashMap',['java.security.Provider','.Service'],'java.util.LinkedHashSet',['java.security.Provider','.EngineDescription']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Provider", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.Properties');
C$.$classes$=[['ServiceKey',10],['UString',10],['EngineDescription',10],['Service',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$entrySet=null;
this.entrySetCallCount=0;
},1);

C$.$fields$=[['Z',['initialized','legacyChanged','servicesChanged'],'D',['version'],'I',['entrySetCallCount'],'S',['name','info'],'O',['$entrySet','java.util.Set','legacyStrings','java.util.Map','+serviceMap','+legacyMap','serviceSet','java.util.Set']]
,['I',['ALIAS_LENGTH'],'O',['debug','sun.security.util.Debug','previousKey','java.security.Provider.ServiceKey','knownEngines','java.util.Map']]]

Clazz.newMeth(C$, 'c$$S$D$S',  function (name, version, info) {
Clazz.super_(C$, this);
this.name=name;
this.version=version;
this.info=info;
p$2.putId.apply(this, []);
this.initialized=true;
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getVersion$',  function () {
return this.version;
});

Clazz.newMeth(C$, 'getInfo$',  function () {
return this.info;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.name + " version " + new Double(this.version).toString() ;
});

Clazz.newMeth(C$, 'clear$',  function () {
p$2.check$S.apply(this, ["clearProviderProperties." + this.name]);
if (C$.debug != null ) {
C$.debug.println$S("Remove " + this.name + " provider properties" );
}p$2.implClear.apply(this, []);
});

Clazz.newMeth(C$, 'load$java_io_InputStream',  function (inStream) {
p$2.check$S.apply(this, ["putProviderProperty." + this.name]);
if (C$.debug != null ) {
C$.debug.println$S("Load " + this.name + " provider properties" );
}var tempProperties=Clazz.new_($I$(10,1));
tempProperties.load$java_io_InputStream(inStream);
p$2.implPutAll$java_util_Map.apply(this, [tempProperties]);
});

Clazz.newMeth(C$, 'putAll$java_util_Map',  function (t) {
p$2.check$S.apply(this, ["putProviderProperty." + this.name]);
if (C$.debug != null ) {
C$.debug.println$S("Put all " + this.name + " provider properties" );
}p$2.implPutAll$java_util_Map.apply(this, [t]);
});

Clazz.newMeth(C$, 'entrySet$',  function () {
p$2.checkInitialized.apply(this, []);
if (this.$entrySet == null ) {
if (this.entrySetCallCount++ == 0) this.$entrySet=$I$(2).unmodifiableMap$java_util_Map(this).entrySet$();
 else return C$.superclazz.prototype.entrySet$.apply(this, []);
}if (this.entrySetCallCount != 2) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Internal error."]);
return this.$entrySet;
});

Clazz.newMeth(C$, 'keySet$',  function () {
p$2.checkInitialized.apply(this, []);
return $I$(2,"unmodifiableSet$java_util_Set",[C$.superclazz.prototype.keySet$.apply(this, [])]);
});

Clazz.newMeth(C$, 'values$',  function () {
p$2.checkInitialized.apply(this, []);
return $I$(2,"unmodifiableCollection$java_util_Collection",[C$.superclazz.prototype.values$.apply(this, [])]);
});

Clazz.newMeth(C$, 'put$O$O',  function (key, value) {
p$2.check$S.apply(this, ["putProviderProperty." + this.name]);
if (C$.debug != null ) {
C$.debug.println$S("Set " + this.name + " provider property [" + key + "/" + value + "]" );
}return p$2.implPut$O$O.apply(this, [key, value]);
});

Clazz.newMeth(C$, 'putIfAbsent$O$O',  function (key, value) {
p$2.check$S.apply(this, ["putProviderProperty." + this.name]);
if (C$.debug != null ) {
C$.debug.println$S("Set " + this.name + " provider property [" + key + "/" + value + "]" );
}return p$2.implPutIfAbsent$O$O.apply(this, [key, value]);
});

Clazz.newMeth(C$, 'remove$O',  function (key) {
p$2.check$S.apply(this, ["removeProviderProperty." + this.name]);
if (C$.debug != null ) {
C$.debug.println$S("Remove " + this.name + " provider property " + key );
}return p$2.implRemove$O.apply(this, [key]);
});

Clazz.newMeth(C$, 'remove$O$O',  function (key, value) {
p$2.check$S.apply(this, ["removeProviderProperty." + this.name]);
if (C$.debug != null ) {
C$.debug.println$S("Remove " + this.name + " provider property " + key );
}return p$2.implRemove$O$O.apply(this, [key, value]);
});

Clazz.newMeth(C$, 'replace$O$O$O',  function (key, oldValue, newValue) {
p$2.check$S.apply(this, ["putProviderProperty." + this.name]);
if (C$.debug != null ) {
C$.debug.println$S("Replace " + this.name + " provider property " + key );
}return p$2.implReplace$O$O$O.apply(this, [key, oldValue, newValue]);
});

Clazz.newMeth(C$, 'replace$O$O',  function (key, value) {
p$2.check$S.apply(this, ["putProviderProperty." + this.name]);
if (C$.debug != null ) {
C$.debug.println$S("Replace " + this.name + " provider property " + key );
}return p$2.implReplace$O$O.apply(this, [key, value]);
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_BiFunction',  function ($function) {
p$2.check$S.apply(this, ["putProviderProperty." + this.name]);
if (C$.debug != null ) {
C$.debug.println$S("ReplaceAll " + this.name + " provider property " );
}p$2.implReplaceAll$java_util_function_BiFunction.apply(this, [$function]);
});

Clazz.newMeth(C$, 'compute$O$java_util_function_BiFunction',  function (key, remappingFunction) {
p$2.check$S.apply(this, ["putProviderProperty." + this.name]);
p$2.check$S.apply(this, ["removeProviderProperty" + this.name]);
if (C$.debug != null ) {
C$.debug.println$S("Compute " + this.name + " provider property " + key );
}return p$2.implCompute$O$java_util_function_BiFunction.apply(this, [key, remappingFunction]);
});

Clazz.newMeth(C$, 'computeIfAbsent$O$java_util_function_Function',  function (key, mappingFunction) {
p$2.check$S.apply(this, ["putProviderProperty." + this.name]);
p$2.check$S.apply(this, ["removeProviderProperty" + this.name]);
if (C$.debug != null ) {
C$.debug.println$S("ComputeIfAbsent " + this.name + " provider property " + key );
}return p$2.implComputeIfAbsent$O$java_util_function_Function.apply(this, [key, mappingFunction]);
});

Clazz.newMeth(C$, 'computeIfPresent$O$java_util_function_BiFunction',  function (key, remappingFunction) {
p$2.check$S.apply(this, ["putProviderProperty." + this.name]);
p$2.check$S.apply(this, ["removeProviderProperty" + this.name]);
if (C$.debug != null ) {
C$.debug.println$S("ComputeIfPresent " + this.name + " provider property " + key );
}return p$2.implComputeIfPresent$O$java_util_function_BiFunction.apply(this, [key, remappingFunction]);
});

Clazz.newMeth(C$, 'merge$O$O$java_util_function_BiFunction',  function (key, value, remappingFunction) {
p$2.check$S.apply(this, ["putProviderProperty." + this.name]);
p$2.check$S.apply(this, ["removeProviderProperty" + this.name]);
if (C$.debug != null ) {
C$.debug.println$S("Merge " + this.name + " provider property " + key );
}return p$2.implMerge$O$O$java_util_function_BiFunction.apply(this, [key, value, remappingFunction]);
});

Clazz.newMeth(C$, 'get$O',  function (key) {
p$2.checkInitialized.apply(this, []);
return C$.superclazz.prototype.get$O.apply(this, [key]);
});

Clazz.newMeth(C$, 'getOrDefault$O$O',  function (key, defaultValue) {
p$2.checkInitialized.apply(this, []);
return C$.superclazz.prototype.getOrDefault$O$O.apply(this, [key, defaultValue]);
});

Clazz.newMeth(C$, 'forEach$java_util_function_BiConsumer',  function (action) {
p$2.checkInitialized.apply(this, []);
C$.superclazz.prototype.forEach$java_util_function_BiConsumer.apply(this, [action]);
});

Clazz.newMeth(C$, 'keys$',  function () {
p$2.checkInitialized.apply(this, []);
return C$.superclazz.prototype.keys$.apply(this, []);
});

Clazz.newMeth(C$, 'elements$',  function () {
p$2.checkInitialized.apply(this, []);
return C$.superclazz.prototype.elements$.apply(this, []);
});

Clazz.newMeth(C$, 'getProperty$S',  function (key) {
p$2.checkInitialized.apply(this, []);
return C$.superclazz.prototype.getProperty$S.apply(this, [key]);
});

Clazz.newMeth(C$, 'checkInitialized',  function () {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('IllegalStateException'));
}}, p$2);

Clazz.newMeth(C$, 'check$S',  function (directive) {
p$2.checkInitialized.apply(this, []);
var security=System.getSecurityManager$();
if (security != null ) {
security.checkSecurityAccess$S(directive);
}}, p$2);

Clazz.newMeth(C$, 'putId',  function () {
C$.superclazz.prototype.put$O$O.apply(this, ["Provider.id name", String.valueOf$O(this.name)]);
C$.superclazz.prototype.put$O$O.apply(this, ["Provider.id version", String.valueOf$D(this.version)]);
C$.superclazz.prototype.put$O$O.apply(this, ["Provider.id info", String.valueOf$O(this.info)]);
C$.superclazz.prototype.put$O$O.apply(this, ["Provider.id className", this.getClass$().getName$()]);
}, p$2);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function ($in) {
var copy=Clazz.new_($I$(4,1));
for (var entry, $entry = C$.superclazz.prototype.entrySet$.apply(this, []).iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
copy.put$O$O(entry.getKey$(), entry.getValue$());
}
this.defaults=null;
$in.defaultReadObject$();
p$2.implClear.apply(this, []);
this.initialized=true;
this.putAll$java_util_Map(copy);
}, p$2);

Clazz.newMeth(C$, 'checkLegacy$O',  function (key) {
var keyString=key;
if (keyString.startsWith$S("Provider.")) {
return false;
}this.legacyChanged=true;
if (this.legacyStrings == null ) {
this.legacyStrings=Clazz.new_($I$(11,1));
}return true;
}, p$2);

Clazz.newMeth(C$, 'implPutAll$java_util_Map',  function (t) {
for (var e, $e = t.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
p$2.implPut$O$O.apply(this, [e.getKey$(), e.getValue$()]);
}
}, p$2);

Clazz.newMeth(C$, 'implRemove$O',  function (key) {
if (Clazz.instanceOf(key, "java.lang.String")) {
if (!p$2.checkLegacy$O.apply(this, [key])) {
return null;
}this.legacyStrings.remove$O(key);
}return C$.superclazz.prototype.remove$O.apply(this, [key]);
}, p$2);

Clazz.newMeth(C$, 'implRemove$O$O',  function (key, value) {
if (Clazz.instanceOf(key, "java.lang.String") && Clazz.instanceOf(value, "java.lang.String") ) {
if (!p$2.checkLegacy$O.apply(this, [key])) {
return false;
}this.legacyStrings.remove$O$O(key, value);
}return C$.superclazz.prototype.remove$O$O.apply(this, [key, value]);
}, p$2);

Clazz.newMeth(C$, 'implReplace$O$O$O',  function (key, oldValue, newValue) {
if ((Clazz.instanceOf(key, "java.lang.String")) && (Clazz.instanceOf(oldValue, "java.lang.String")) && (Clazz.instanceOf(newValue, "java.lang.String"))  ) {
if (!p$2.checkLegacy$O.apply(this, [key])) {
return false;
}this.legacyStrings.replace$O$O$O(key, oldValue, newValue);
}return C$.superclazz.prototype.replace$O$O$O.apply(this, [key, oldValue, newValue]);
}, p$2);

Clazz.newMeth(C$, 'implReplace$O$O',  function (key, value) {
if ((Clazz.instanceOf(key, "java.lang.String")) && (Clazz.instanceOf(value, "java.lang.String")) ) {
if (!p$2.checkLegacy$O.apply(this, [key])) {
return null;
}this.legacyStrings.replace$O$O(key, value);
}return C$.superclazz.prototype.replace$O$O.apply(this, [key, value]);
}, p$2);

Clazz.newMeth(C$, 'implReplaceAll$java_util_function_BiFunction',  function ($function) {
this.legacyChanged=true;
if (this.legacyStrings == null ) {
this.legacyStrings=Clazz.new_($I$(11,1));
} else {
this.legacyStrings.replaceAll$java_util_function_BiFunction($function);
}C$.superclazz.prototype.replaceAll$java_util_function_BiFunction.apply(this, [$function]);
}, p$2);

Clazz.newMeth(C$, 'implMerge$O$O$java_util_function_BiFunction',  function (key, value, remappingFunction) {
if ((Clazz.instanceOf(key, "java.lang.String")) && (Clazz.instanceOf(value, "java.lang.String")) ) {
if (!p$2.checkLegacy$O.apply(this, [key])) {
return null;
}this.legacyStrings.merge$O$O$java_util_function_BiFunction(key, value, remappingFunction);
}return C$.superclazz.prototype.merge$O$O$java_util_function_BiFunction.apply(this, [key, value, remappingFunction]);
}, p$2);

Clazz.newMeth(C$, 'implCompute$O$java_util_function_BiFunction',  function (key, remappingFunction) {
if (Clazz.instanceOf(key, "java.lang.String")) {
if (!p$2.checkLegacy$O.apply(this, [key])) {
return null;
}this.legacyStrings.computeIfAbsent$O$java_util_function_Function(key, remappingFunction);
}return C$.superclazz.prototype.compute$O$java_util_function_BiFunction.apply(this, [key, remappingFunction]);
}, p$2);

Clazz.newMeth(C$, 'implComputeIfAbsent$O$java_util_function_Function',  function (key, mappingFunction) {
if (Clazz.instanceOf(key, "java.lang.String")) {
if (!p$2.checkLegacy$O.apply(this, [key])) {
return null;
}this.legacyStrings.computeIfAbsent$O$java_util_function_Function(key, mappingFunction);
}return C$.superclazz.prototype.computeIfAbsent$O$java_util_function_Function.apply(this, [key, mappingFunction]);
}, p$2);

Clazz.newMeth(C$, 'implComputeIfPresent$O$java_util_function_BiFunction',  function (key, remappingFunction) {
if (Clazz.instanceOf(key, "java.lang.String")) {
if (!p$2.checkLegacy$O.apply(this, [key])) {
return null;
}this.legacyStrings.computeIfPresent$O$java_util_function_BiFunction(key, remappingFunction);
}return C$.superclazz.prototype.computeIfPresent$O$java_util_function_BiFunction.apply(this, [key, remappingFunction]);
}, p$2);

Clazz.newMeth(C$, 'implPut$O$O',  function (key, value) {
if ((Clazz.instanceOf(key, "java.lang.String")) && (Clazz.instanceOf(value, "java.lang.String")) ) {
if (!p$2.checkLegacy$O.apply(this, [key])) {
return null;
}this.legacyStrings.put$O$O(key, value);
}return C$.superclazz.prototype.put$O$O.apply(this, [key, value]);
}, p$2);

Clazz.newMeth(C$, 'implPutIfAbsent$O$O',  function (key, value) {
if ((Clazz.instanceOf(key, "java.lang.String")) && (Clazz.instanceOf(value, "java.lang.String")) ) {
if (!p$2.checkLegacy$O.apply(this, [key])) {
return null;
}this.legacyStrings.putIfAbsent$O$O(key, value);
}return C$.superclazz.prototype.putIfAbsent$O$O.apply(this, [key, value]);
}, p$2);

Clazz.newMeth(C$, 'implClear',  function () {
if (this.legacyStrings != null ) {
this.legacyStrings.clear$();
}if (this.legacyMap != null ) {
this.legacyMap.clear$();
}if (this.serviceMap != null ) {
this.serviceMap.clear$();
}this.legacyChanged=false;
this.servicesChanged=false;
this.serviceSet=null;
C$.superclazz.prototype.clear$.apply(this, []);
p$2.putId.apply(this, []);
}, p$2);

Clazz.newMeth(C$, 'ensureLegacyParsed',  function () {
if ((this.legacyChanged == false ) || (this.legacyStrings == null ) ) {
return;
}this.serviceSet=null;
if (this.legacyMap == null ) {
this.legacyMap=Clazz.new_($I$(11,1));
} else {
this.legacyMap.clear$();
}for (var entry, $entry = this.legacyStrings.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
p$2.parseLegacyPut$S$S.apply(this, [entry.getKey$(), entry.getValue$()]);
}
p$2.removeInvalidServices$java_util_Map.apply(this, [this.legacyMap]);
this.legacyChanged=false;
}, p$2);

Clazz.newMeth(C$, 'removeInvalidServices$java_util_Map',  function (map) {
for (var t=map.entrySet$().iterator$(); t.hasNext$(); ) {
var s=t.next$().getValue$();
if (p$1.isValid.apply(s, []) == false ) {
t.remove$();
}}
}, p$2);

Clazz.newMeth(C$, 'getTypeAndAlgorithm$S',  function (key) {
var i=key.indexOf$S(".");
if (i < 1) {
if (C$.debug != null ) {
C$.debug.println$S("Ignoring invalid entry in provider " + this.name + ":" + key );
}return null;
}var type=key.substring$I$I(0, i);
var alg=key.substring$I(i + 1);
return Clazz.array(String, -1, [type, alg]);
}, p$2);

Clazz.newMeth(C$, 'parseLegacyPut$S$S',  function (name, value) {
if (name.toLowerCase$java_util_Locale($I$(1).ENGLISH).startsWith$S("alg.alias.")) {
var stdAlg=value;
var aliasKey=name.substring$I(C$.ALIAS_LENGTH);
var typeAndAlg=p$2.getTypeAndAlgorithm$S.apply(this, [aliasKey]);
if (typeAndAlg == null ) {
return;
}var type=C$.getEngineName$S(typeAndAlg[0]);
var aliasAlg=typeAndAlg[1].intern$();
var key=Clazz.new_($I$(9,1).c$$S$S$Z,[type, stdAlg, true]);
var s=this.legacyMap.get$O(key);
if (s == null ) {
s=Clazz.new_($I$(12,1).c$$java_security_Provider,[this]);
s.type=type;
s.algorithm=stdAlg;
this.legacyMap.put$O$O(key, s);
}this.legacyMap.put$O$O(Clazz.new_($I$(9,1).c$$S$S$Z,[type, aliasAlg, true]), s);
p$1.addAlias$S.apply(s, [aliasAlg]);
} else {
var typeAndAlg=p$2.getTypeAndAlgorithm$S.apply(this, [name]);
if (typeAndAlg == null ) {
return;
}var i=typeAndAlg[1].indexOf$I(" ");
if (i == -1) {
var type=C$.getEngineName$S(typeAndAlg[0]);
var stdAlg=typeAndAlg[1].intern$();
var className=value;
var key=Clazz.new_($I$(9,1).c$$S$S$Z,[type, stdAlg, true]);
var s=this.legacyMap.get$O(key);
if (s == null ) {
s=Clazz.new_($I$(12,1).c$$java_security_Provider,[this]);
s.type=type;
s.algorithm=stdAlg;
this.legacyMap.put$O$O(key, s);
}s.className=className;
} else {
var attributeValue=value;
var type=C$.getEngineName$S(typeAndAlg[0]);
var attributeString=typeAndAlg[1];
var stdAlg=attributeString.substring$I$I(0, i).intern$();
var attributeName=attributeString.substring$I(i + 1);
while (attributeName.startsWith$S(" ")){
attributeName=attributeName.substring$I(1);
}
attributeName=attributeName.intern$();
var key=Clazz.new_($I$(9,1).c$$S$S$Z,[type, stdAlg, true]);
var s=this.legacyMap.get$O(key);
if (s == null ) {
s=Clazz.new_($I$(12,1).c$$java_security_Provider,[this]);
s.type=type;
s.algorithm=stdAlg;
this.legacyMap.put$O$O(key, s);
}s.addAttribute$S$S(attributeName, attributeValue);
}}}, p$2);

Clazz.newMeth(C$, 'getService$S$S',  function (type, algorithm) {
p$2.checkInitialized.apply(this, []);
var key=C$.previousKey;
if (key.matches$S$S(type, algorithm) == false ) {
key=Clazz.new_($I$(9,1).c$$S$S$Z,[type, algorithm, false]);
C$.previousKey=key;
}if (this.serviceMap != null ) {
var service=this.serviceMap.get$O(key);
if (service != null ) {
return service;
}}p$2.ensureLegacyParsed.apply(this, []);
return (this.legacyMap != null ) ? this.legacyMap.get$O(key) : null;
});

Clazz.newMeth(C$, 'getServices$',  function () {
p$2.checkInitialized.apply(this, []);
if (this.legacyChanged || this.servicesChanged ) {
this.serviceSet=null;
}if (this.serviceSet == null ) {
p$2.ensureLegacyParsed.apply(this, []);
var set=Clazz.new_($I$(13,1));
if (this.serviceMap != null ) {
set.addAll$java_util_Collection(this.serviceMap.values$());
}if (this.legacyMap != null ) {
set.addAll$java_util_Collection(this.legacyMap.values$());
}this.serviceSet=$I$(2).unmodifiableSet$java_util_Set(set);
this.servicesChanged=false;
}return this.serviceSet;
});

Clazz.newMeth(C$, 'putService$java_security_Provider_Service',  function (s) {
p$2.check$S.apply(this, ["putProviderProperty." + this.name]);
if (C$.debug != null ) {
C$.debug.println$S(this.name + ".putService(): " + s );
}if (s == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (s.getProvider$() !== this ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["service.getProvider() must match this Provider object"]);
}if (this.serviceMap == null ) {
this.serviceMap=Clazz.new_($I$(11,1));
}this.servicesChanged=true;
var type=s.getType$();
var algorithm=s.getAlgorithm$();
var key=Clazz.new_($I$(9,1).c$$S$S$Z,[type, algorithm, true]);
p$2.implRemoveService$java_security_Provider_Service.apply(this, [this.serviceMap.get$O(key)]);
this.serviceMap.put$O$O(key, s);
for (var alias, $alias = p$1.getAliases.apply(s, []).iterator$(); $alias.hasNext$()&&((alias=($alias.next$())),1);) {
this.serviceMap.put$O$O(Clazz.new_($I$(9,1).c$$S$S$Z,[type, alias, true]), s);
}
p$2.putPropertyStrings$java_security_Provider_Service.apply(this, [s]);
});

Clazz.newMeth(C$, 'putPropertyStrings$java_security_Provider_Service',  function (s) {
var type=s.getType$();
var algorithm=s.getAlgorithm$();
C$.superclazz.prototype.put$O$O.apply(this, [type + "." + algorithm , s.getClassName$()]);
for (var alias, $alias = p$1.getAliases.apply(s, []).iterator$(); $alias.hasNext$()&&((alias=($alias.next$())),1);) {
C$.superclazz.prototype.put$O$O.apply(this, ["Alg.Alias." + type + "." + alias , algorithm]);
}
for (var entry, $entry = s.attributes.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=type + "." + algorithm + " " + entry.getKey$() ;
C$.superclazz.prototype.put$O$O.apply(this, [key, entry.getValue$()]);
}
}, p$2);

Clazz.newMeth(C$, 'removePropertyStrings$java_security_Provider_Service',  function (s) {
var type=s.getType$();
var algorithm=s.getAlgorithm$();
C$.superclazz.prototype.remove$O.apply(this, [type + "." + algorithm ]);
for (var alias, $alias = p$1.getAliases.apply(s, []).iterator$(); $alias.hasNext$()&&((alias=($alias.next$())),1);) {
C$.superclazz.prototype.remove$O.apply(this, ["Alg.Alias." + type + "." + alias ]);
}
for (var entry, $entry = s.attributes.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=type + "." + algorithm + " " + entry.getKey$() ;
C$.superclazz.prototype.remove$O.apply(this, [key]);
}
}, p$2);

Clazz.newMeth(C$, 'removeService$java_security_Provider_Service',  function (s) {
p$2.check$S.apply(this, ["removeProviderProperty." + this.name]);
if (C$.debug != null ) {
C$.debug.println$S(this.name + ".removeService(): " + s );
}if (s == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}p$2.implRemoveService$java_security_Provider_Service.apply(this, [s]);
});

Clazz.newMeth(C$, 'implRemoveService$java_security_Provider_Service',  function (s) {
if ((s == null ) || (this.serviceMap == null ) ) {
return;
}var type=s.getType$();
var algorithm=s.getAlgorithm$();
var key=Clazz.new_($I$(9,1).c$$S$S$Z,[type, algorithm, false]);
var oldService=this.serviceMap.get$O(key);
if (s !== oldService ) {
return;
}this.servicesChanged=true;
this.serviceMap.remove$O(key);
for (var alias, $alias = p$1.getAliases.apply(s, []).iterator$(); $alias.hasNext$()&&((alias=($alias.next$())),1);) {
this.serviceMap.remove$O(Clazz.new_($I$(9,1).c$$S$S$Z,[type, alias, false]));
}
p$2.removePropertyStrings$java_security_Provider_Service.apply(this, [s]);
}, p$2);

Clazz.newMeth(C$, 'addEngine$S$Z$S',  function (name, sp, paramName) {
var ed=Clazz.new_($I$(14,1).c$$S$Z$S,[name, sp, paramName]);
C$.knownEngines.put$O$O(name.toLowerCase$java_util_Locale($I$(1).ENGLISH), ed);
C$.knownEngines.put$O$O(name, ed);
}, 1);

Clazz.newMeth(C$, 'getEngineName$S',  function (s) {
var e=C$.knownEngines.get$O(s);
if (e == null ) {
e=C$.knownEngines.get$O(s.toLowerCase$java_util_Locale($I$(1).ENGLISH));
}return (e == null ) ? s : e.name;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.debug=$I$(8).getInstance$S$S("provider", "Provider");
C$.ALIAS_LENGTH="Alg.Alias.".length$();
C$.previousKey=Clazz.new_($I$(9,1).c$$S$S$Z,["", "", false]);
{
C$.knownEngines=Clazz.new_($I$(4,1));
C$.addEngine$S$Z$S("AlgorithmParameterGenerator", false, null);
C$.addEngine$S$Z$S("AlgorithmParameters", false, null);
C$.addEngine$S$Z$S("KeyFactory", false, null);
C$.addEngine$S$Z$S("KeyPairGenerator", false, null);
C$.addEngine$S$Z$S("KeyStore", false, null);
C$.addEngine$S$Z$S("MessageDigest", false, null);
C$.addEngine$S$Z$S("SecureRandom", false, null);
C$.addEngine$S$Z$S("Signature", true, null);
C$.addEngine$S$Z$S("CertificateFactory", false, null);
C$.addEngine$S$Z$S("CertPathBuilder", false, null);
C$.addEngine$S$Z$S("CertPathValidator", false, null);
C$.addEngine$S$Z$S("CertStore", false, "java.security.cert.CertStoreParameters");
C$.addEngine$S$Z$S("Cipher", true, null);
C$.addEngine$S$Z$S("ExemptionMechanism", false, null);
C$.addEngine$S$Z$S("Mac", true, null);
C$.addEngine$S$Z$S("KeyAgreement", true, null);
C$.addEngine$S$Z$S("KeyGenerator", false, null);
C$.addEngine$S$Z$S("SecretKeyFactory", false, null);
C$.addEngine$S$Z$S("KeyManagerFactory", false, null);
C$.addEngine$S$Z$S("SSLContext", false, null);
C$.addEngine$S$Z$S("TrustManagerFactory", false, null);
C$.addEngine$S$Z$S("GssApiMechanism", false, null);
C$.addEngine$S$Z$S("SaslClientFactory", false, null);
C$.addEngine$S$Z$S("SaslServerFactory", false, null);
C$.addEngine$S$Z$S("Policy", false, "java.security.Policy$Parameters");
C$.addEngine$S$Z$S("Configuration", false, "javax.security.auth.login.Configuration$Parameters");
C$.addEngine$S$Z$S("XMLSignatureFactory", false, null);
C$.addEngine$S$Z$S("KeyInfoFactory", false, null);
C$.addEngine$S$Z$S("TransformService", false, null);
C$.addEngine$S$Z$S("TerminalFactory", false, "java.lang.Object");
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Provider, "ServiceKey", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['type','algorithm','originalAlgorithm']]]

Clazz.newMeth(C$, 'c$$S$S$Z',  function (type, algorithm, intern) {
;C$.$init$.apply(this);
this.type=type;
this.originalAlgorithm=algorithm;
algorithm=algorithm.toUpperCase$java_util_Locale($I$(1).ENGLISH);
this.algorithm=intern ? algorithm.intern$() : algorithm;
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.type.hashCode$() + this.algorithm.hashCode$();
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.security.Provider.ServiceKey") == false ) {
return false;
}var other=obj;
return this.type.equals$O(other.type) && this.algorithm.equals$O(other.algorithm) ;
});

Clazz.newMeth(C$, 'matches$S$S',  function (type, algorithm) {
return (this.type == type) && (this.originalAlgorithm == algorithm) ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Provider, "UString", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['string','lowerString']]]

Clazz.newMeth(C$, 'c$$S',  function (s) {
;C$.$init$.apply(this);
this.string=s;
this.lowerString=s.toLowerCase$java_util_Locale($I$(1).ENGLISH);
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.lowerString.hashCode$();
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "java.security.Provider.UString") == false ) {
return false;
}var other=obj;
return this.lowerString.equals$O(other.lowerString);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.string;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Provider, "EngineDescription", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['supportsParameter'],'S',['name','constructorParameterClassName'],'O',['constructorParameterClass','Class']]]

Clazz.newMeth(C$, 'c$$S$Z$S',  function (name, sp, paramName) {
;C$.$init$.apply(this);
this.name=name;
this.supportsParameter=sp;
this.constructorParameterClassName=paramName;
}, 1);

Clazz.newMeth(C$, 'getConstructorParameterClass$',  function () {
var clazz=this.constructorParameterClass;
if (clazz == null ) {
clazz=Clazz.forName(this.constructorParameterClassName);
this.constructorParameterClass=clazz;
}return clazz;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Provider, "Service", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['registered'],'S',['type','algorithm','className'],'O',['provider','java.security.Provider','aliases','java.util.List','attributes','java.util.Map','classRef','Class','hasKeyAttributes','Boolean','supportedFormats','String[]','supportedClasses','Class[]']]
,['O',['CLASS0','Class[]']]]

Clazz.newMeth(C$, 'c$$java_security_Provider',  function (provider) {
;C$.$init$.apply(this);
this.provider=provider;
this.aliases=$I$(2).emptyList$();
this.attributes=$I$(2).emptyMap$();
}, 1);

Clazz.newMeth(C$, 'isValid',  function () {
return (this.type != null ) && (this.algorithm != null ) && (this.className != null )  ;
}, p$1);

Clazz.newMeth(C$, 'addAlias$S',  function (alias) {
if (this.aliases.isEmpty$()) {
this.aliases=Clazz.new_($I$(3,1).c$$I,[2]);
}this.aliases.add$O(alias);
}, p$1);

Clazz.newMeth(C$, 'addAttribute$S$S',  function (type, value) {
if (this.attributes.isEmpty$()) {
this.attributes=Clazz.new_($I$(4,1).c$$I,[8]);
}this.attributes.put$O$O(Clazz.new_($I$(5,1).c$$S,[type]), value);
});

Clazz.newMeth(C$, 'c$$java_security_Provider$S$S$S$java_util_List$java_util_Map',  function (provider, type, algorithm, className, aliases, attributes) {
;C$.$init$.apply(this);
if ((provider == null ) || (type == null ) || (algorithm == null ) || (className == null )  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.provider=provider;
this.type=$I$(6).getEngineName$S(type);
this.algorithm=algorithm;
this.className=className;
if (aliases == null ) {
this.aliases=$I$(2).emptyList$();
} else {
this.aliases=Clazz.new_($I$(3,1).c$$java_util_Collection,[aliases]);
}if (attributes == null ) {
this.attributes=$I$(2).emptyMap$();
} else {
this.attributes=Clazz.new_($I$(4,1));
for (var entry, $entry = attributes.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
this.attributes.put$O$O(Clazz.new_([entry.getKey$()],$I$(5,1).c$$S), entry.getValue$());
}
}}, 1);

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'getAlgorithm$',  function () {
return this.algorithm;
});

Clazz.newMeth(C$, 'getProvider$',  function () {
return this.provider;
});

Clazz.newMeth(C$, 'getClassName$',  function () {
return this.className;
});

Clazz.newMeth(C$, 'getAliases',  function () {
return this.aliases;
}, p$1);

Clazz.newMeth(C$, 'getAttribute$S',  function (name) {
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return this.attributes.get$O(Clazz.new_($I$(5,1).c$$S,[name]));
});

Clazz.newMeth(C$, 'newInstance$O',  function (constructorParameter) {
if (this.registered == false ) {
if (this.provider.getService$S$S(this.type, this.algorithm) !== this ) {
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S,["Service not registered with Provider " + this.provider.getName$() + ": " + this ]);
}this.registered=true;
}try {
var cap=$I$(6).knownEngines.get$O(this.type);
if (cap == null ) {
return p$1.newInstanceGeneric$O.apply(this, [constructorParameter]);
}if (cap.constructorParameterClassName == null ) {
if (constructorParameter != null ) {
throw Clazz.new_(Clazz.load('java.security.InvalidParameterException').c$$S,["constructorParameter not used with " + this.type + " engines" ]);
}var clazz=p$1.getImplClass.apply(this, []);
var empty=Clazz.array(Class, -1, []);
var con=clazz.getConstructor$ClassA(empty);
return con.newInstance$OA(Clazz.array(java.lang.Object, -1, []));
} else {
var paramClass=cap.getConstructorParameterClass$();
if (constructorParameter != null ) {
var argClass=constructorParameter.getClass$();
if (paramClass.isAssignableFrom$Class(argClass) == false ) {
throw Clazz.new_(Clazz.load('java.security.InvalidParameterException').c$$S,["constructorParameter must be instanceof " + cap.constructorParameterClassName.replace$C$C("$", ".") + " for engine type " + this.type ]);
}}var clazz=p$1.getImplClass.apply(this, []);
var cons=clazz.getConstructor$ClassA(Clazz.array(Class, -1, [paramClass]));
return cons.newInstance$OA(Clazz.array(java.lang.Object, -1, [constructorParameter]));
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.security.NoSuchAlgorithmException")){
var e = e$$;
{
throw e;
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S$Throwable,["Error constructing implementation (algorithm: " + this.algorithm + ", provider: " + this.provider.getName$() + ", class: " + this.className + ")" , e.getCause$()]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S$Throwable,["Error constructing implementation (algorithm: " + this.algorithm + ", provider: " + this.provider.getName$() + ", class: " + this.className + ")" , e]);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'getImplClass',  function () {
try {
var clazz=this.classRef;
if (clazz == null ) {
var cl=this.provider.getClass$().getClassLoader$();
if (cl == null ) {
clazz=Clazz.forName(this.className);
} else {
clazz=cl.loadClass$S(this.className);
}if (!$I$(7,"isPublic$I",[clazz.getModifiers$()])) {
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S,["class configured for " + this.type + " (provider: " + this.provider.getName$() + ") is not public." ]);
}this.classRef=clazz;
}return clazz;
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S$Throwable,["class configured for " + this.type + " (provider: " + this.provider.getName$() + ") cannot be found." , e]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'newInstanceGeneric$O',  function (constructorParameter) {
var clazz=p$1.getImplClass.apply(this, []);
if (constructorParameter == null ) {
try {
var empty=Clazz.array(Class, -1, []);
var con=clazz.getConstructor$ClassA(empty);
return con.newInstance$OA(Clazz.array(java.lang.Object, -1, []));
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchMethodException")){
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S,["No public no-arg " + "constructor found in class " + this.className ]);
} else {
throw e;
}
}
}var argClass=constructorParameter.getClass$();
var cons=clazz.getConstructors$();
for (var con, $con = 0, $$con = cons; $con<$$con.length&&((con=($$con[$con])),1);$con++) {
var paramTypes=con.getParameterTypes$();
if (paramTypes.length != 1) {
continue;
}if (paramTypes[0].isAssignableFrom$Class(argClass) == false ) {
continue;
}return con.newInstance$OA(Clazz.array(java.lang.Object, -1, [constructorParameter]));
}
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S,["No public constructor matching " + argClass.getName$() + " found in class " + this.className ]);
}, p$1);

Clazz.newMeth(C$, 'supportsParameter$O',  function (parameter) {
var cap=$I$(6).knownEngines.get$O(this.type);
if (cap == null ) {
return true;
}if (cap.supportsParameter == false ) {
throw Clazz.new_(Clazz.load('java.security.InvalidParameterException').c$$S,["supportsParameter() not used with " + this.type + " engines" ]);
}if ((parameter != null ) && (Clazz.instanceOf(parameter, "java.security.Key") == false ) ) {
throw Clazz.new_(Clazz.load('java.security.InvalidParameterException').c$$S,["Parameter must be instanceof Key for engine " + this.type]);
}if (p$1.hasKeyAttributes.apply(this, []) == false ) {
return true;
}if (parameter == null ) {
return false;
}var key=parameter;
if (p$1.supportsKeyFormat$java_security_Key.apply(this, [key])) {
return true;
}if (p$1.supportsKeyClass$java_security_Key.apply(this, [key])) {
return true;
}return false;
});

Clazz.newMeth(C$, 'hasKeyAttributes',  function () {
var b=this.hasKeyAttributes;
if (b == null ) {
{
var s;
s=this.getAttribute$S("SupportedKeyFormats");
if (s != null ) {
this.supportedFormats=s.split$S("\\|");
}s=this.getAttribute$S("SupportedKeyClasses");
if (s != null ) {
var classNames=s.split$S("\\|");
var classList=Clazz.new_($I$(3,1).c$$I,[classNames.length]);
for (var className, $className = 0, $$className = classNames; $className<$$className.length&&((className=($$className[$className])),1);$className++) {
var clazz=p$1.getKeyClass$S.apply(this, [className]);
if (clazz != null ) {
classList.add$O(clazz);
}}
this.supportedClasses=classList.toArray$OA(C$.CLASS0);
}var bool=(this.supportedFormats != null ) || (this.supportedClasses != null ) ;
b=Boolean.valueOf$Z(bool);
this.hasKeyAttributes=b;
}}return b.booleanValue$();
}, p$1);

Clazz.newMeth(C$, 'getKeyClass$S',  function (name) {
try {
return Clazz.forName(name);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
} else {
throw e;
}
}
try {
var cl=this.provider.getClass$().getClassLoader$();
if (cl != null ) {
return cl.loadClass$S(name);
}} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
} else {
throw e;
}
}
return null;
}, p$1);

Clazz.newMeth(C$, 'supportsKeyFormat$java_security_Key',  function (key) {
if (this.supportedFormats == null ) {
return false;
}var format=key.getFormat$();
if (format == null ) {
return false;
}for (var supportedFormat, $supportedFormat = 0, $$supportedFormat = this.supportedFormats; $supportedFormat<$$supportedFormat.length&&((supportedFormat=($$supportedFormat[$supportedFormat])),1);$supportedFormat++) {
if (supportedFormat.equals$O(format)) {
return true;
}}
return false;
}, p$1);

Clazz.newMeth(C$, 'supportsKeyClass$java_security_Key',  function (key) {
if (this.supportedClasses == null ) {
return false;
}var keyClass=key.getClass$();
for (var clazz, $clazz = 0, $$clazz = this.supportedClasses; $clazz<$$clazz.length&&((clazz=($$clazz[$clazz])),1);$clazz++) {
if (clazz.isAssignableFrom$Class(keyClass)) {
return true;
}}
return false;
}, p$1);

Clazz.newMeth(C$, 'toString',  function () {
var aString=this.aliases.isEmpty$() ? "" : "\r\n  aliases: " + this.aliases.toString();
var attrs=this.attributes.isEmpty$() ? "" : "\r\n  attributes: " + this.attributes.toString();
return this.provider.getName$() + ": " + this.type + "." + this.algorithm + " -> " + this.className + aString + attrs + "\r\n" ;
});

C$.$static$=function(){C$.$static$=0;
C$.CLASS0=Clazz.array(Class, [0]);
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
