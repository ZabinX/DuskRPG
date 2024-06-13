(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'javajs.util.PT']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XmlUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'openDocument$javajs_util_SB',  function (data) {
data.append$S("<?xml version=\"1.0\"?>\n");
}, 1);

Clazz.newMeth(C$, 'openTag$javajs_util_SB$S',  function (sb, name) {
sb.append$S("<").append$S(name).append$S(">\n");
}, 1);

Clazz.newMeth(C$, 'openTagAttr$javajs_util_SB$S$OA',  function (sb, name, attributes) {
C$.appendTagAll$javajs_util_SB$S$OA$O$Z$Z(sb, name, attributes, null, false, false);
sb.append$S("\n");
}, 1);

Clazz.newMeth(C$, 'closeTag$javajs_util_SB$S',  function (sb, name) {
sb.append$S("</").append$S(name).append$S(">\n");
}, 1);

Clazz.newMeth(C$, 'appendTagAll$javajs_util_SB$S$OA$O$Z$Z',  function (sb, name, attributes, data, isCdata, doClose) {
var closer=">";
if (name.endsWith$S("/")) {
name=name.substring$I$I(0, name.length$() - 1);
if (data == null ) {
closer="/>\n";
doClose=false;
}}sb.append$S("<").append$S(name);
if (attributes != null ) for (var i=0; i < attributes.length; i++) {
var o=attributes[i];
if (o == null ) continue;
if (Clazz.instanceOf(o, Clazz.array(java.lang.Object, -1))) for (var j=0; j < (o).length; j+=2) C$.appendAttrib$javajs_util_SB$O$O(sb, (o)[j], (o)[j + 1]);

 else C$.appendAttrib$javajs_util_SB$O$O(sb, o, attributes[++i]);
}
sb.append$S(closer);
if (data != null ) {
if (isCdata) data=C$.wrapCdata$O(data);
sb.appendO$O(data);
}if (doClose) C$.closeTag$javajs_util_SB$S(sb, name);
}, 1);

Clazz.newMeth(C$, 'wrapCdata$O',  function (data) {
var s="" + data;
return (s.indexOf$S("&") < 0 && s.indexOf$S("<") < 0  ? (s.startsWith$S("\n") ? "" : "\n") + s : "<![CDATA[" + $I$(1).rep$S$S$S(s, "]]>", "]]]]><![CDATA[>") + "]]>" );
}, 1);

Clazz.newMeth(C$, 'appendTagObj$javajs_util_SB$S$OA$O',  function (sb, name, attributes, data) {
C$.appendTagAll$javajs_util_SB$S$OA$O$Z$Z(sb, name, attributes, data, false, true);
}, 1);

Clazz.newMeth(C$, 'appendTag$javajs_util_SB$S$O',  function (sb, name, data) {
if (Clazz.instanceOf(data, Clazz.array(java.lang.Object, -1))) C$.appendTagAll$javajs_util_SB$S$OA$O$Z$Z(sb, name, data, null, false, true);
 else C$.appendTagAll$javajs_util_SB$S$OA$O$Z$Z(sb, name, null, data, false, true);
}, 1);

Clazz.newMeth(C$, 'appendCdata$javajs_util_SB$S$OA$S',  function (sb, name, attributes, data) {
C$.appendTagAll$javajs_util_SB$S$OA$O$Z$Z(sb, name, attributes, data, true, true);
}, 1);

Clazz.newMeth(C$, 'appendAttrib$javajs_util_SB$O$O',  function (sb, name, value) {
if (value == null ) return;
sb.append$S(" ").appendO$O(name).append$S("=\"").appendO$O(value).append$S("\"");
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
