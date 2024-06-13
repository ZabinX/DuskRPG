(function(){var P$=Clazz.newPackage("swingjs.api.js"),I$=[[0,'swingjs.api.js.DOMNode']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "HTML5Canvas", null, null, 'swingjs.api.js.DOMNode');

C$.$clinit$=2;

Clazz.newMeth(C$, 'getDataBufferBytes',  function (canvas, sourceNode, w, h) {
if (sourceNode != null ) {
$I$(1).setAttrInt(canvas, "width", w);
$I$(1).setAttrInt(canvas, "height", h);
}var ctx=canvas.getContext("2d");
if (sourceNode != null ) {
ctx.drawImage(sourceNode, 0, 0, w, h);
}return ctx.getImageData(0, 0, w, h).data;
}, 1);

Clazz.newMeth(C$, 'setImageNode',  function (sourceNode, image) {
{
image._setImageNode$O$Z(sourceNode, false);
}
}, 1);

Clazz.newMeth(C$, 'createCanvas',  function (width, height, id) {
var canvas=$I$(1,"createElement",["canvas", (id == null  ? "img" + new Double(Math.random()).toString() : id + "")]);
$I$(1).setStyles(canvas, ["width", width + "px", "height", height + "px"]);

canvas.width = width;
canvas.height = height;
return canvas;
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
