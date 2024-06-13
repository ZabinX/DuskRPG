(function(){var P$=Clazz.newPackage("swingjs.api.js"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "HTML5CanvasContext2D", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ImageData',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['lineWidth'],'F',['globalAlpha'],'S',['font','fillStyle','strokeStyle'],'O',['imageData','swingjs.api.js.HTML5CanvasContext2D.ImageData','_aSaved','Object[][]']]]

Clazz.newMeth(C$, 'push',  function (ctx, map) {
{
(ctx._aSaved || (ctx._aSaved = [])).push(map);
return ctx._aSaved.length;
}
}, 1);

Clazz.newMeth(C$, 'pop',  function (ctx) {
{
return (ctx._aSaved && ctx._aSaved.length > 0 ? ctx._aSaved.pop() : null);
}
}, 1);

Clazz.newMeth(C$, 'getSavedLevel',  function (ctx) {
{
return (ctx._aSaved ? ctx._aSaved.length : 0);
}
}, 1);

Clazz.newMeth(C$, 'getSavedStack',  function (ctx) {
{
return (ctx._aSaved || []);
}
}, 1);

Clazz.newMeth(C$, 'setMatrix',  function (ctx, transform) {
var m=ctx._m ||null;
if (transform == null ) {

ctx._m = null;
return null;
}if (m == null ) {

ctx._m = m = new Array(6);
transform.getMatrix$DA(m);
}return m;
}, 1);

Clazz.newMeth(C$, 'createLinearGradient',  function (ctx, p1, p2, css1, css2) {

var grd = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
grd.addColorStop(0,css1);
grd.addColorStop(1,css2);
ctx.fillStyle = grd;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTML5CanvasContext2D, "ImageData", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['data','int[]']]]

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
