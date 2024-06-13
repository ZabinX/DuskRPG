(function(){var P$=Clazz.newPackage("javax.imageio"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ImageReadParam", null, 'javax.imageio.IIOParam');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.canSetSourceRenderSize=false;
this.sourceRenderSize=null;
this.destination=null;
this.destinationBands=null;
this.minProgressivePass=0;
this.numProgressivePasses=2147483647;
},1);

C$.$fields$=[['Z',['canSetSourceRenderSize'],'I',['minProgressivePass','numProgressivePasses'],'O',['sourceRenderSize','java.awt.Dimension','destination','java.awt.image.BufferedImage','destinationBands','int[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setDestinationType$javax_imageio_ImageTypeSpecifier',  function (destinationType) {
C$.superclazz.prototype.setDestinationType$javax_imageio_ImageTypeSpecifier.apply(this, [destinationType]);
this.setDestination$java_awt_image_BufferedImage(null);
});

Clazz.newMeth(C$, 'setDestination$java_awt_image_BufferedImage',  function (destination) {
this.destination=destination;
});

Clazz.newMeth(C$, 'getDestination$',  function () {
return this.destination;
});

Clazz.newMeth(C$, 'setDestinationBands$IA',  function (destinationBands) {
if (destinationBands == null ) {
this.destinationBands=null;
} else {
var numBands=destinationBands.length;
for (var i=0; i < numBands; i++) {
var band=destinationBands[i];
if (band < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Band value < 0!"]);
}for (var j=i + 1; j < numBands; j++) {
if (band == destinationBands[j]) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Duplicate band value!"]);
}}
}
this.destinationBands=destinationBands.clone$();
}});

Clazz.newMeth(C$, 'getDestinationBands$',  function () {
if (this.destinationBands == null ) {
return null;
} else {
return (this.destinationBands.clone$());
}});

Clazz.newMeth(C$, 'canSetSourceRenderSize$',  function () {
return this.canSetSourceRenderSize;
});

Clazz.newMeth(C$, 'setSourceRenderSize$java_awt_Dimension',  function (size) {
if (!this.canSetSourceRenderSize$()) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Can\'t set source render size!"]);
}if (size == null ) {
this.sourceRenderSize=null;
} else {
if (size.width <= 0 || size.height <= 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["width or height <= 0!"]);
}this.sourceRenderSize=size.clone$();
}});

Clazz.newMeth(C$, 'getSourceRenderSize$',  function () {
return (this.sourceRenderSize == null ) ? null : this.sourceRenderSize.clone$();
});

Clazz.newMeth(C$, 'setSourceProgressivePasses$I$I',  function (minPass, numPasses) {
if (minPass < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["minPass < 0!"]);
}if (numPasses <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["numPasses <= 0!"]);
}if ((numPasses != 2147483647) && (((minPass + numPasses - 1) & -2147483648) != 0) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["minPass + numPasses - 1 > INTEGER.MAX_VALUE!"]);
}this.minProgressivePass=minPass;
this.numProgressivePasses=numPasses;
});

Clazz.newMeth(C$, 'getSourceMinProgressivePass$',  function () {
return this.minProgressivePass;
});

Clazz.newMeth(C$, 'getSourceMaxProgressivePass$',  function () {
if (this.numProgressivePasses == 2147483647) {
return 2147483647;
} else {
return this.minProgressivePass + this.numProgressivePasses - 1;
}});

Clazz.newMeth(C$, 'getSourceNumProgressivePasses$',  function () {
return this.numProgressivePasses;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
