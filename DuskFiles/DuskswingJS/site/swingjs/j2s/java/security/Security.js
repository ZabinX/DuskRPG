(function(){var P$=Clazz.newPackage("java.security"),I$=[[0,'sun.security.util.Debug','java.security.AccessController','java.security.Security','java.util.concurrent.ConcurrentHashMap','java.util.Properties','java.io.FileInputStream','java.io.BufferedInputStream','sun.security.util.PropertyExpander','java.io.File','java.net.URL','sun.security.jca.Providers',['java.security.Security','.ProviderProperty'],'sun.security.jca.ProviderList','java.util.Hashtable','java.util.LinkedHashSet','java.security.Provider','AssertionError','sun.security.jca.GetInstance','java.security.SecurityPermission','java.util.Collections','java.util.HashSet','java.util.Locale']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Security", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ProviderProperty',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['sdebug','sun.security.util.Debug','props','java.util.Properties','spiMap','java.util.Map']]]

Clazz.newMeth(C$, 'initialize$',  function () {
C$.props=Clazz.new_($I$(5,1));
var loadedProps=false;
var overrideAll=false;
var propFile=C$.securityPropFile$S("java.security");
if (propFile.exists$()) {
var is=null;
try {
var fis=Clazz.new_($I$(6,1).c$$java_io_File,[propFile]);
is=Clazz.new_($I$(7,1).c$$java_io_InputStream,[fis]);
C$.props.load$java_io_InputStream(is);
loadedProps=true;
if (C$.sdebug != null ) {
C$.sdebug.println$S("reading security properties file: " + propFile);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
if (C$.sdebug != null ) {
C$.sdebug.println$S("unable to load security properties from " + propFile);
e.printStackTrace$();
}} else {
throw e;
}
} finally {
if (is != null ) {
try {
is.close$();
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
if (C$.sdebug != null ) {
C$.sdebug.println$S("unable to close input stream");
}} else {
throw ioe;
}
}
}}
}if ("true".equalsIgnoreCase$S(C$.props.getProperty$S("security.overridePropertiesFile"))) {
var extraPropFile=System.getProperty$S("java.security.properties");
if (extraPropFile != null  && extraPropFile.startsWith$S("=") ) {
overrideAll=true;
extraPropFile=extraPropFile.substring$I(1);
}if (overrideAll) {
C$.props=Clazz.new_($I$(5,1));
if (C$.sdebug != null ) {
C$.sdebug.println$S("overriding other security properties files!");
}}if (extraPropFile != null ) {
var bis=null;
try {
var propURL;
extraPropFile=$I$(8).expand$S(extraPropFile);
propFile=Clazz.new_($I$(9,1).c$$S,[extraPropFile]);
if (propFile.exists$()) {
propURL=Clazz.new_(["file:" + propFile.getCanonicalPath$()],$I$(10,1).c$$S);
} else {
propURL=Clazz.new_($I$(10,1).c$$S,[extraPropFile]);
}bis=Clazz.new_([propURL.openStream$()],$I$(7,1).c$$java_io_InputStream);
C$.props.load$java_io_InputStream(bis);
loadedProps=true;
if (C$.sdebug != null ) {
C$.sdebug.println$S("reading security properties file: " + propURL);
if (overrideAll) {
C$.sdebug.println$S("overriding other security properties files!");
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (C$.sdebug != null ) {
C$.sdebug.println$S("unable to load security properties from " + extraPropFile);
e.printStackTrace$();
}} else {
throw e;
}
} finally {
if (bis != null ) {
try {
bis.close$();
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
if (C$.sdebug != null ) {
C$.sdebug.println$S("unable to close input stream");
}} else {
throw ioe;
}
}
}}
}}if (!loadedProps) {
C$.initializeStatic$();
if (C$.sdebug != null ) {
C$.sdebug.println$S("unable to load security properties -- using defaults");
}}}, 1);

Clazz.newMeth(C$, 'initializeStatic$',  function () {
C$.props.put$O$O("security.provider.1", "sun.security.provider.Sun");
C$.props.put$O$O("security.provider.2", "sun.security.rsa.SunRsaSign");
C$.props.put$O$O("security.provider.3", "com.sun.net.ssl.internal.ssl.Provider");
C$.props.put$O$O("security.provider.4", "com.sun.crypto.provider.SunJCE");
C$.props.put$O$O("security.provider.5", "sun.security.jgss.SunProvider");
C$.props.put$O$O("security.provider.6", "com.sun.security.sasl.Provider");
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'securityPropFile$S',  function (filename) {
var sep=$I$(9).separator;
return Clazz.new_([System.getProperty$S("java.home") + sep + "lib" + sep + "security" + sep + filename ],$I$(9,1).c$$S);
}, 1);

Clazz.newMeth(C$, 'getProviderProperty$S',  function (key) {
var entry=null;
var providers=$I$(11).getProviderList$().providers$();
for (var i=0; i < providers.size$(); i++) {
var matchKey=null;
var prov=providers.get$I(i);
var prop=prov.getProperty$S(key);
if (prop == null ) {
for (var e=prov.keys$(); e.hasMoreElements$() && prop == null  ; ) {
matchKey=e.nextElement$();
if (key.equalsIgnoreCase$S(matchKey)) {
prop=prov.getProperty$S(matchKey);
break;
}}
}if (prop != null ) {
var newEntry=Clazz.new_($I$(12,1));
newEntry.className=prop;
newEntry.provider=prov;
return newEntry;
}}
return entry;
}, 1);

Clazz.newMeth(C$, 'getProviderProperty$S$java_security_Provider',  function (key, provider) {
var prop=provider.getProperty$S(key);
if (prop == null ) {
for (var e=provider.keys$(); e.hasMoreElements$() && prop == null  ; ) {
var matchKey=e.nextElement$();
if (key.equalsIgnoreCase$S(matchKey)) {
prop=provider.getProperty$S(matchKey);
break;
}}
}return prop;
}, 1);

Clazz.newMeth(C$, 'getAlgorithmProperty$S$S',  function (algName, propName) {
var entry=C$.getProviderProperty$S("Alg." + propName + "." + algName );
if (entry != null ) {
return entry.className;
} else {
return null;
}}, 1);

Clazz.newMeth(C$, 'insertProviderAt$java_security_Provider$I',  function (provider, position) {
var providerName=provider.getName$();
C$.checkInsertProvider$S(providerName);
var list=$I$(11).getFullProviderList$();
var newList=$I$(13).insertAt$sun_security_jca_ProviderList$java_security_Provider$I(list, provider, position - 1);
if (list === newList ) {
return -1;
}$I$(11).setProviderList$sun_security_jca_ProviderList(newList);
return newList.getIndex$S(providerName) + 1;
}, 1);

Clazz.newMeth(C$, 'addProvider$java_security_Provider',  function (provider) {
return C$.insertProviderAt$java_security_Provider$I(provider, 0);
}, 1);

Clazz.newMeth(C$, 'removeProvider$S',  function (name) {
C$.check$S("removeProvider." + name);
var list=$I$(11).getFullProviderList$();
var newList=$I$(13).remove$sun_security_jca_ProviderList$S(list, name);
$I$(11).setProviderList$sun_security_jca_ProviderList(newList);
}, 1);

Clazz.newMeth(C$, 'getProviders$',  function () {
return $I$(11).getFullProviderList$().toArray$();
}, 1);

Clazz.newMeth(C$, 'getProvider$S',  function (name) {
return $I$(11).getProviderList$().getProvider$S(name);
}, 1);

Clazz.newMeth(C$, 'getProviders$S',  function (filter) {
var key=null;
var value=null;
var index=filter.indexOf$I(":");
if (index == -1) {
key=filter;
value="";
} else {
key=filter.substring$I$I(0, index);
value=filter.substring$I(index + 1);
}var hashtableFilter=Clazz.new_($I$(14,1).c$$I,[1]);
hashtableFilter.put$O$O(key, value);
return (C$.getProviders$java_util_Map(hashtableFilter));
}, 1);

Clazz.newMeth(C$, 'getProviders$java_util_Map',  function (filter) {
var allProviders=C$.getProviders$();
var keySet=filter.keySet$();
var candidates=Clazz.new_($I$(15,1).c$$I,[5]);
if ((keySet == null ) || (allProviders == null ) ) {
return allProviders;
}var firstSearch=true;
for (var ite=keySet.iterator$(); ite.hasNext$(); ) {
var key=ite.next$();
var value=filter.get$O(key);
var newCandidates=C$.getAllQualifyingCandidates$S$S$java_security_ProviderA(key, value, allProviders);
if (firstSearch) {
candidates=newCandidates;
firstSearch=false;
}if ((newCandidates != null ) && !newCandidates.isEmpty$() ) {
for (var cansIte=candidates.iterator$(); cansIte.hasNext$(); ) {
var prov=cansIte.next$();
if (!newCandidates.contains$O(prov)) {
cansIte.remove$();
}}
} else {
candidates=null;
break;
}}
if ((candidates == null ) || (candidates.isEmpty$()) ) return null;
var candidatesArray=candidates.toArray$();
var result=Clazz.array($I$(16), [candidatesArray.length]);
for (var i=0; i < result.length; i++) {
result[i]=candidatesArray[i];
}
return result;
}, 1);

Clazz.newMeth(C$, 'getSpiClass$S',  function (type) {
var clazz=C$.spiMap.get$O(type);
if (clazz != null ) {
return clazz;
}try {
clazz=Clazz.forName("java.security." + type + "Spi" );
C$.spiMap.put$O$O(type, clazz);
return clazz;
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
throw Clazz.new_($I$(17,1).c$$S$Throwable,["Spi class not found", e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getImpl$S$S$S',  function (algorithm, type, provider) {
if (provider == null ) {
return $I$(18,"getInstance$S$Class$S",[type, C$.getSpiClass$S(type), algorithm]).toArray$();
} else {
return $I$(18,"getInstance$S$Class$S$S",[type, C$.getSpiClass$S(type), algorithm, provider]).toArray$();
}}, 1);

Clazz.newMeth(C$, 'getImpl$S$S$S$O',  function (algorithm, type, provider, params) {
if (provider == null ) {
return $I$(18,"getInstance$S$Class$S$O",[type, C$.getSpiClass$S(type), algorithm, params]).toArray$();
} else {
return $I$(18,"getInstance$S$Class$S$O$S",[type, C$.getSpiClass$S(type), algorithm, params, provider]).toArray$();
}}, 1);

Clazz.newMeth(C$, 'getImpl$S$S$java_security_Provider',  function (algorithm, type, provider) {
return $I$(18,"getInstance$S$Class$S$java_security_Provider",[type, C$.getSpiClass$S(type), algorithm, provider]).toArray$();
}, 1);

Clazz.newMeth(C$, 'getImpl$S$S$java_security_Provider$O',  function (algorithm, type, provider, params) {
return $I$(18,"getInstance$S$Class$S$O$java_security_Provider",[type, C$.getSpiClass$S(type), algorithm, params, provider]).toArray$();
}, 1);

Clazz.newMeth(C$, 'getProperty$S',  function (key) {
var sm=System.getSecurityManager$();
if (sm != null ) {
sm.checkPermission$java_security_Permission(Clazz.new_($I$(19,1).c$$S,["getProperty." + key]));
}var name=C$.props.getProperty$S(key);
if (name != null ) name=name.trim$();
return name;
}, 1);

Clazz.newMeth(C$, 'setProperty$S$S',  function (key, datum) {
C$.check$S("setProperty." + key);
C$.props.put$O$O(key, datum);
C$.invalidateSMCache$S(key);
}, 1);

Clazz.newMeth(C$, 'invalidateSMCache$S',  function (key) {
var pa=key.equals$O("package.access");
var pd=key.equals$O("package.definition");
if (pa || pd ) {
$I$(2,"doPrivileged$java_security_PrivilegedAction",[((P$.Security$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Security$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
try {
var cl=Clazz.forName("java.lang.SecurityManager", false, null);
var f=null;
var accessible=false;
if (this.$finals$.pa) {
f=cl.getDeclaredField$S("packageAccessValid");
accessible=f.isAccessible$();
f.setAccessible$Z(true);
} else {
f=cl.getDeclaredField$S("packageDefinitionValid");
accessible=f.isAccessible$();
f.setAccessible$Z(true);
}f.setBoolean$O$Z(f, false);
f.setAccessible$Z(accessible);
} catch (e1) {
if (Clazz.exceptionOf(e1,"Exception")){
} else {
throw e1;
}
}
return null;
});
})()
), Clazz.new_(P$.Security$2.$init$,[this, {pa:pa}]))]);
}}, 1);

Clazz.newMeth(C$, 'check$S',  function (directive) {
var security=System.getSecurityManager$();
if (security != null ) {
security.checkSecurityAccess$S(directive);
}}, 1);

Clazz.newMeth(C$, 'checkInsertProvider$S',  function (name) {
var security=System.getSecurityManager$();
if (security != null ) {
try {
security.checkSecurityAccess$S("insertProvider");
} catch (se1) {
if (Clazz.exceptionOf(se1,"SecurityException")){
try {
security.checkSecurityAccess$S("insertProvider." + name);
} catch (se2) {
if (Clazz.exceptionOf(se2,"SecurityException")){
se1.addSuppressed$Throwable(se2);
throw se1;
} else {
throw se2;
}
}
} else {
throw se1;
}
}
}}, 1);

Clazz.newMeth(C$, 'getAllQualifyingCandidates$S$S$java_security_ProviderA',  function (filterKey, filterValue, allProviders) {
var filterComponents=C$.getFilterComponents$S$S(filterKey, filterValue);
var serviceName=filterComponents[0];
var algName=filterComponents[1];
var attrName=filterComponents[2];
return C$.getProvidersNotUsingCache$S$S$S$S$java_security_ProviderA(serviceName, algName, attrName, filterValue, allProviders);
}, 1);

Clazz.newMeth(C$, 'getProvidersNotUsingCache$S$S$S$S$java_security_ProviderA',  function (serviceName, algName, attrName, filterValue, allProviders) {
var candidates=Clazz.new_($I$(15,1).c$$I,[5]);
for (var i=0; i < allProviders.length; i++) {
if (C$.isCriterionSatisfied$java_security_Provider$S$S$S$S(allProviders[i], serviceName, algName, attrName, filterValue)) {
candidates.add$O(allProviders[i]);
}}
return candidates;
}, 1);

Clazz.newMeth(C$, 'isCriterionSatisfied$java_security_Provider$S$S$S$S',  function (prov, serviceName, algName, attrName, filterValue) {
var key=serviceName + '.' + algName ;
if (attrName != null ) {
key+=' ' + attrName;
}var propValue=C$.getProviderProperty$S$java_security_Provider(key, prov);
if (propValue == null ) {
var standardName=C$.getProviderProperty$S$java_security_Provider("Alg.Alias." + serviceName + "." + algName , prov);
if (standardName != null ) {
key=serviceName + "." + standardName ;
if (attrName != null ) {
key+=' ' + attrName;
}propValue=C$.getProviderProperty$S$java_security_Provider(key, prov);
}if (propValue == null ) {
return false;
}}if (attrName == null ) {
return true;
}if (C$.isStandardAttr$S(attrName)) {
return C$.isConstraintSatisfied$S$S$S(attrName, filterValue, propValue);
} else {
return filterValue.equalsIgnoreCase$S(propValue);
}}, 1);

Clazz.newMeth(C$, 'isStandardAttr$S',  function (attribute) {
if (attribute.equalsIgnoreCase$S("KeySize")) return true;
if (attribute.equalsIgnoreCase$S("ImplementedIn")) return true;
return false;
}, 1);

Clazz.newMeth(C$, 'isConstraintSatisfied$S$S$S',  function (attribute, value, prop) {
if (attribute.equalsIgnoreCase$S("KeySize")) {
var requestedSize=Integer.parseInt$S(value);
var maxSize=Integer.parseInt$S(prop);
if (requestedSize <= maxSize) {
return true;
} else {
return false;
}}if (attribute.equalsIgnoreCase$S("ImplementedIn")) {
return value.equalsIgnoreCase$S(prop);
}return false;
}, 1);

Clazz.newMeth(C$, 'getFilterComponents$S$S',  function (filterKey, filterValue) {
var algIndex=filterKey.indexOf$I(".");
if (algIndex < 0) {
throw Clazz.new_(Clazz.load('java.security.InvalidParameterException').c$$S,["Invalid filter"]);
}var serviceName=filterKey.substring$I$I(0, algIndex);
var algName=null;
var attrName=null;
if (filterValue.length$() == 0) {
algName=filterKey.substring$I(algIndex + 1).trim$();
if (algName.length$() == 0) {
throw Clazz.new_(Clazz.load('java.security.InvalidParameterException').c$$S,["Invalid filter"]);
}} else {
var attrIndex=filterKey.indexOf$I(" ");
if (attrIndex == -1) {
throw Clazz.new_(Clazz.load('java.security.InvalidParameterException').c$$S,["Invalid filter"]);
} else {
attrName=filterKey.substring$I(attrIndex + 1).trim$();
if (attrName.length$() == 0) {
throw Clazz.new_(Clazz.load('java.security.InvalidParameterException').c$$S,["Invalid filter"]);
}}if ((attrIndex < algIndex) || (algIndex == attrIndex - 1) ) {
throw Clazz.new_(Clazz.load('java.security.InvalidParameterException').c$$S,["Invalid filter"]);
} else {
algName=filterKey.substring$I$I(algIndex + 1, attrIndex);
}}var result=Clazz.array(String, [3]);
result[0]=serviceName;
result[1]=algName;
result[2]=attrName;
return result;
}, 1);

Clazz.newMeth(C$, 'getAlgorithms$S',  function (serviceName) {
if ((serviceName == null ) || (serviceName.length$() == 0) || (serviceName.endsWith$S("."))  ) {
return $I$(20).emptySet$();
}var result=Clazz.new_($I$(21,1));
var providers=C$.getProviders$();
for (var i=0; i < providers.length; i++) {
for (var e=providers[i].keys$(); e.hasMoreElements$(); ) {
var currentKey=(e.nextElement$()).toUpperCase$java_util_Locale($I$(22).ENGLISH);
if (currentKey.startsWith$S(serviceName.toUpperCase$java_util_Locale($I$(22).ENGLISH))) {
if (currentKey.indexOf$S(" ") < 0) {
result.add$O(currentKey.substring$I(serviceName.length$() + 1));
}}}
}
return $I$(20).unmodifiableSet$java_util_Set(result);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.sdebug=$I$(1).getInstance$S("properties");
{
$I$(2,"doPrivileged$java_security_PrivilegedAction",[((P$.Security$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Security$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'run$',  function () {
$I$(3).initialize$();
return null;
});
})()
), Clazz.new_(P$.Security$1.$init$,[this, null]))]);
};
C$.spiMap=Clazz.new_($I$(4,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Security, "ProviderProperty", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['className'],'O',['provider','java.security.Provider']]]

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
