(function(){var P$=Clazz.newPackage("javax.imageio"),I$=[[0,'java.awt.Point']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IIOParam");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sourceRegion=null;
this.sourceXSubsampling=1;
this.sourceYSubsampling=1;
this.subsamplingXOffset=0;
this.subsamplingYOffset=0;
this.sourceBands=null;
this.destinationType=null;
this.destinationOffset=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
this.defaultController=null;
this.controller=null;
},1);

C$.$fields$=[['I',['sourceXSubsampling','sourceYSubsampling','subsamplingXOffset','subsamplingYOffset'],'O',['sourceRegion','java.awt.Rectangle','sourceBands','int[]','destinationType','javax.imageio.ImageTypeSpecifier','destinationOffset','java.awt.Point','defaultController','javax.imageio.IIOParamController','+controller']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.controller=this.defaultController;
}, 1);

Clazz.newMeth(C$, 'setSourceRegion$java_awt_Rectangle',  function (sourceRegion) {
if (sourceRegion == null ) {
this.sourceRegion=null;
return;
}if (sourceRegion.x < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["sourceRegion.x < 0!"]);
}if (sourceRegion.y < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["sourceRegion.y < 0!"]);
}if (sourceRegion.width <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["sourceRegion.width <= 0!"]);
}if (sourceRegion.height <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["sourceRegion.height <= 0!"]);
}if (sourceRegion.width <= this.subsamplingXOffset) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["sourceRegion.width <= subsamplingXOffset!"]);
}if (sourceRegion.height <= this.subsamplingYOffset) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["sourceRegion.height <= subsamplingYOffset!"]);
}this.sourceRegion=sourceRegion.clone$();
});

Clazz.newMeth(C$, 'getSourceRegion$',  function () {
if (this.sourceRegion == null ) {
return null;
}return this.sourceRegion.clone$();
});

Clazz.newMeth(C$, 'setSourceSubsampling$I$I$I$I',  function (sourceXSubsampling, sourceYSubsampling, subsamplingXOffset, subsamplingYOffset) {
if (sourceXSubsampling <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["sourceXSubsampling <= 0!"]);
}if (sourceYSubsampling <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["sourceYSubsampling <= 0!"]);
}if (subsamplingXOffset < 0 || subsamplingXOffset >= sourceXSubsampling ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["subsamplingXOffset out of range!"]);
}if (subsamplingYOffset < 0 || subsamplingYOffset >= sourceYSubsampling ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["subsamplingYOffset out of range!"]);
}if (this.sourceRegion != null ) {
if (subsamplingXOffset >= this.sourceRegion.width || subsamplingYOffset >= this.sourceRegion.height ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["region contains no pixels!"]);
}}this.sourceXSubsampling=sourceXSubsampling;
this.sourceYSubsampling=sourceYSubsampling;
this.subsamplingXOffset=subsamplingXOffset;
this.subsamplingYOffset=subsamplingYOffset;
});

Clazz.newMeth(C$, 'getSourceXSubsampling$',  function () {
return this.sourceXSubsampling;
});

Clazz.newMeth(C$, 'getSourceYSubsampling$',  function () {
return this.sourceYSubsampling;
});

Clazz.newMeth(C$, 'getSubsamplingXOffset$',  function () {
return this.subsamplingXOffset;
});

Clazz.newMeth(C$, 'getSubsamplingYOffset$',  function () {
return this.subsamplingYOffset;
});

Clazz.newMeth(C$, 'setSourceBands$IA',  function (sourceBands) {
if (sourceBands == null ) {
this.sourceBands=null;
} else {
var numBands=sourceBands.length;
for (var i=0; i < numBands; i++) {
var band=sourceBands[i];
if (band < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Band value < 0!"]);
}for (var j=i + 1; j < numBands; j++) {
if (band == sourceBands[j]) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Duplicate band value!"]);
}}
}
this.sourceBands=(sourceBands.clone$());
}});

Clazz.newMeth(C$, 'getSourceBands$',  function () {
if (this.sourceBands == null ) {
return null;
}return (this.sourceBands.clone$());
});

Clazz.newMeth(C$, 'setDestinationType$javax_imageio_ImageTypeSpecifier',  function (destinationType) {
this.destinationType=destinationType;
});

Clazz.newMeth(C$, 'getDestinationType$',  function () {
return this.destinationType;
});

Clazz.newMeth(C$, 'setDestinationOffset$java_awt_Point',  function (destinationOffset) {
if (destinationOffset == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["destinationOffset == null!"]);
}this.destinationOffset=destinationOffset.clone$();
});

Clazz.newMeth(C$, 'getDestinationOffset$',  function () {
return this.destinationOffset.clone$();
});

Clazz.newMeth(C$, 'setController$javax_imageio_IIOParamController',  function (controller) {
this.controller=controller;
});

Clazz.newMeth(C$, 'getController$',  function () {
return this.controller;
});

Clazz.newMeth(C$, 'getDefaultController$',  function () {
return this.defaultController;
});

Clazz.newMeth(C$, 'hasController$',  function () {
return (this.controller != null );
});

Clazz.newMeth(C$, 'activateController$',  function () {
if (!this.hasController$()) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["hasController() == false!"]);
}return this.getController$().activate$javax_imageio_IIOParam(this);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
