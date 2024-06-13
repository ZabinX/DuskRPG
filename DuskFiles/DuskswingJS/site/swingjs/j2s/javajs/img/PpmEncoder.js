(function(){var P$=Clazz.newPackage("javajs.img"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PpmEncoder", null, 'javajs.img.ImageEncoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setParams$java_util_Map',  function (params) {
});

Clazz.newMeth(C$, 'generate$',  function () {
this.putString$S("P6\n");
this.putString$S(this.width + " " + this.height + "\n" );
this.putString$S("255\n");
var ppmPixels=Clazz.array(Byte.TYPE, [this.width * 3]);
for (var pt=0, row=0; row < this.height; ++row) {
for (var col=0, j=0; col < this.width; ++col, pt++) {
var p=this.pixels[pt];
ppmPixels[j++]=(((p >> 16) & 255)|0);
ppmPixels[j++]=(((p >> 8) & 255)|0);
ppmPixels[j++]=((p & 255)|0);
}
this.out.write$BA$I$I(ppmPixels, 0, ppmPixels.length);
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
