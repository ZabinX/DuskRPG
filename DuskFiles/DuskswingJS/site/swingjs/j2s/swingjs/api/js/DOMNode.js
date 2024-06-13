(function(){var P$=Clazz.newPackage("swingjs.api.js"),I$=[[0,'java.awt.Dimension']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "DOMNode", function(){

eval("Promise.prototype.$then = function(resolve,reject){return this.then(function(value) {return resolve ? resolve.apply$O(value) : value},function(reason){return reject ? reject.apply$O(reason) : reason})};");
eval("Promise.prototype.$finally = function(r){this.finally(function(){r.run$()})};");
eval("Promise.prototype.$catch = function(err){this.catch(function(){err.accept$S('' + err)})};");
});
C$.$classes$=[['Promise',9]];

C$.$fields$=[[]
,['O',['jQuery','swingjs.api.js.JQuery']]]

Clazz.newMeth(C$, 'createElement',  function (key, id) {
var node=null;

node = document.createElement(key);
id && (node.id = id);
return node;
}, 1);

Clazz.newMeth(C$, 'getElement',  function (id) {
return (document.getElementById(id) ||null);
}, 1);

Clazz.newMeth(C$, 'createTextNode',  function (text) {
return (document.createTextNode(text) ||null);
}, 1);

Clazz.newMeth(C$, 'getParent',  function (node) {
return (node.parentNode ||null);
}, 1);

Clazz.newMeth(C$, 'getPreviousSibling',  function (node) {
return (node.previousSibling ||null);
}, 1);

Clazz.newMeth(C$, 'firstChild',  function (node) {
return (node.firstChild ||null);
}, 1);

Clazz.newMeth(C$, 'lastChild',  function (node) {
return (node.lastChild ||null);
}, 1);

Clazz.newMeth(C$, 'setZ',  function (node, z) {
return C$.setStyle(node, "z-index", "" + z);
}, 1);

Clazz.newMeth(C$, 'getAttr',  function (node, attr) {
{
if (!node) return null;
var a = node[attr];
return (typeof a == "undefined" ? null : a);
}
}, 1);

Clazz.newMeth(C$, 'getAttrInt',  function (node, attr) {
return (node && node[attr] ||0);
}, 1);

Clazz.newMeth(C$, 'getStyle',  function (node, style) {
return (node && node.style[style] ||null);
}, 1);

Clazz.newMeth(C$, 'getCSSRectangle',  function (node, r) {

r.x = parseInt(node.style.left.split("p")[0]);
r.y = parseInt(node.style.top.split("p")[0]);
r.width = parseInt(node.style.width.split("p")[0]);
r.height = parseInt(node.style.height.split("p")[0]);
}, 1);

Clazz.newMeth(C$, 'setAttr',  function (node, attr, val) {

attr && (node[attr] = (val == "秘TRUE" ? true : val == "秘FALSE" ? false : val));
return node;
}, 1);

Clazz.newMeth(C$, 'setAttrInt',  function (node, attr, val) {

node[attr] = val;
}, 1);

Clazz.newMeth(C$, 'setAttrs',  function (node, attr) {

for (var i = 0; i < attr.length;) { C$.setAttr(node, attr[i++],attr[i++]);
}
return node;
}, 1);

Clazz.newMeth(C$, 'setStyle',  function (node, attr, val) {

node && (node.style[attr] = val);
return node;
}, 1);

Clazz.newMeth(C$, 'setStyles',  function (node, av) {

if (node)for (var i = 0, n = av.length; i < n;) { var k = av[i++], v = av[i++];
node.style[k] != v && (node.style[k] = v);
}
return node;
}, 1);

Clazz.newMeth(C$, 'setSize',  function (node, width, height) {
return C$.setStyles(node, ["width", width + "px", "height", height + "px"]);
}, 1);

Clazz.newMeth(C$, 'setPositionAbsolute',  function (node) {
return C$.setStyle(node, "position", "absolute");
}, 1);

Clazz.newMeth(C$, 'setVisible',  function (node, visible) {
C$.setStyle(node, "display", visible ? "block" : "none");
}, 1);

Clazz.newMeth(C$, 'setTopLeftAbsolute',  function (node, top, left) {
return C$.setStyles(node, ["top", top + "px", "left", left + "px", "position", "absolute"]);
}, 1);

Clazz.newMeth(C$, 'addHorizontalGap',  function (domNode, gap) {
var label=C$.setStyles(C$.createElement("label", null), ["letter-spacing", gap + "px", "font-size", "0pt"]);
label.appendChild(C$.createTextNode("."));
domNode.appendChild(label);
}, 1);

Clazz.newMeth(C$, 'appendChildSafely',  function (parent, node) {

if (!parent || node.parentElement == parent) return;
parent.appendChild(node);
}, 1);

Clazz.newMeth(C$, 'getHeight',  function (node) {
return C$.jQuery.$(node).height();
}, 1);

Clazz.newMeth(C$, 'getWidth',  function (node) {
return C$.jQuery.$(node).width();
}, 1);

Clazz.newMeth(C$, 'dispose',  function (node) {
if (node != null ) C$.jQuery.$(node).remove();
}, 1);

Clazz.newMeth(C$, 'remove',  function (node) {
var p=C$.getParent(node);
if (p != null ) p.removeChild(node);
}, 1);

Clazz.newMeth(C$, 'detachAll',  function (node) {

if(node) while(node.lastChild) node.removeChild(node.lastChild);
}, 1);

Clazz.newMeth(C$, 'transferTo',  function (node, container) {
if (node == null ) return null;
var p=C$.getParent(node);
try {
if (p != null ) C$.jQuery.$(node).detach();
} catch (e) {
}
if (container == null ) return p;
C$.jQuery.$(container).append(node);
return container;
}, 1);

Clazz.newMeth(C$, 'getEmbedded',  function (name, type) {
var node=C$.getElement(name + "-div");
if (node == null ) return null;
switch (type) {
case "node":
return node;
case "dim":
return Clazz.new_([C$.getWidth(node), C$.getHeight(node)],$I$(1,1).c$$I$I);
default:
return C$.getAttr(node, type);
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.jQuery=jQuery.$ || (jQuery.$ = jQuery) ||null;
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.DOMNode, "Promise", function(){
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
