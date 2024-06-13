(function(){var P$=Clazz.newPackage("swingjs"),p$1={},I$=[[0,'java.util.Hashtable','swingjs.JSUtil','java.util.Locale']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSApp");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fullName="Main";
},1);

C$.$fields$=[['Z',['testAsync','async','isApplet','isFrame'],'S',['appletCodeBase','appletIdiomaBase','appletDocumentBase','appletName','htmlName','main','syncId','strJavaVersion','fullName'],'O',['params','java.util.Hashtable','strJavaVendor','java.lang.Object','html5Applet','swingjs.api.js.HTML5Applet']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Hashtable',  function (params) {
;C$.$init$.apply(this);
this.setAppParams$java_util_Hashtable(params);
}, 1);

Clazz.newMeth(C$, 'getParameter$S',  function (name) {
var s=this.params.get$O(name.toLowerCase$());
return (s == null  ? null : "" + s);
});

Clazz.newMeth(C$, 'setAppParams$java_util_Hashtable',  function (params0) {
this.params=Clazz.new_($I$(1,1));
for (var e, $e = params0.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var key=e.getKey$();
var lc=key.toLowerCase$();
var v=e.getValue$();
this.params.put$O$O(lc, v);
if (lc != key) this.params.put$O$O(key, v);
}
var language=this.getParameter$S("language");
if (language == null ) language=$I$(2).J2S.getDefaultLanguage(false);
$I$(3,"setDefault$java_util_Locale",[$I$(2).getDefaultLocale$S(language)]);
this.htmlName=p$1.extract$S$S.apply(this, ["" + this.getParameter$S("name"), "_object"]);
this.appletName=p$1.extract$S$S.apply(this, [this.htmlName + "_", "_"]);
this.syncId=this.getParameter$S("syncId");
this.fullName=this.htmlName + "__" + this.syncId + "__" ;
this.params.put$O$O("fullname", this.fullName);
var o=this.params.get$O("codepath");
if (o == null ) o="../java/";
this.appletCodeBase=o.toString();
this.appletIdiomaBase=this.appletCodeBase.substring$I$I(0, this.appletCodeBase.lastIndexOf$S$I("/", this.appletCodeBase.length$() - 2) + 1) + "idioma";
o=this.params.get$O("documentbase");
this.appletDocumentBase=(o == null  ? "" : o.toString());
if (this.params.containsKey$O("maximumsize")) Math.max((this.params.get$O("maximumsize")).intValue$(), 100);
this.async=(this.testAsync || this.params.containsKey$O("async") );
var applet=$I$(2).J2S.findApplet(this.htmlName);
var javaver=$I$(2).J2S.getJavaVersion();
this.html5Applet=applet;
this.strJavaVersion=javaver;
this.strJavaVendor="Java2Script/Java 1.6 (HTML5)";
o=this.params.get$O("resourceZip");
if (Clazz.instanceOf(o, "java.lang.String")) $I$(2,"loadJavaResourcesFromZip$ClassLoader$S$java_util_Map",[this.getClass$().getClassLoader$(), o, null]);
System.out.println$S("JSApp initialized");
});

Clazz.newMeth(C$, 'extract$S$S',  function (string, key) {
{
return string.split(key)[0];
}
return null;
}, p$1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:58 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
