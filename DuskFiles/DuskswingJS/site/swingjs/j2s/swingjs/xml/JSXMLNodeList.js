(function(){var P$=Clazz.newPackage("swingjs.xml"),I$=[[0,'swingjs.xml.JSXMLNode']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSXMLNodeList", null, null, 'org.w3c.dom.NodeList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['list','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$O',  function (nodes) {
;C$.$init$.apply(this);
this.list=nodes;
}, 1);

Clazz.newMeth(C$, 'item$I',  function (index) {
return $I$(1).newNode$swingjs_api_js_DOMNode(this.list[index] ||null);
});

Clazz.newMeth(C$, 'getLength$',  function () {
return this.list.length ||0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:13 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
