(function(){var P$=Clazz.newPackage("swingjs.xml"),I$=[[0,'swingjs.xml.JSXMLNode']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSXMLAttr", null, 'swingjs.xml.JSXMLNode', 'org.w3c.dom.Attr');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getName$',  function () {
return 1 ? this.name :"";
});

Clazz.newMeth(C$, 'getSpecified$',  function () {
return 1 ? this.specified :false;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return 1 ? this.value :"";
});

Clazz.newMeth(C$, 'setValue$S',  function (value) {

this.value = value
;});

Clazz.newMeth(C$, 'getOwnerElement$',  function () {
return $I$(1).newNode$swingjs_api_js_DOMNode(this.ownerElement ||null);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
