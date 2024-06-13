(function(){var P$=Clazz.newPackage("java.awt.font"),I$=[[0,['java.awt.geom.Rectangle2D','.Float']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageGraphicAttribute", null, 'java.awt.font.GraphicAttribute');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['fImageWidth','fImageHeight','fOriginX','fOriginY'],'O',['fImage','java.awt.Image']]]

Clazz.newMeth(C$, 'c$$java_awt_Image$I',  function (image, alignment) {
C$.c$$java_awt_Image$I$F$F.apply(this, [image, alignment, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Image$I$F$F',  function (image, alignment, originX, originY) {
;C$.superclazz.c$$I.apply(this,[alignment]);C$.$init$.apply(this);
this.fImage=image;
this.fImageWidth=image.getWidth$java_awt_image_ImageObserver(null);
this.fImageHeight=image.getHeight$java_awt_image_ImageObserver(null);
this.fOriginX=originX;
this.fOriginY=originY;
}, 1);

Clazz.newMeth(C$, 'getAscent$',  function () {
return Math.max(0, this.fOriginY);
});

Clazz.newMeth(C$, 'getDescent$',  function () {
return Math.max(0, this.fImageHeight - this.fOriginY);
});

Clazz.newMeth(C$, 'getAdvance$',  function () {
return Math.max(0, this.fImageWidth - this.fOriginX);
});

Clazz.newMeth(C$, 'getBounds$',  function () {
return Clazz.new_($I$(1,1).c$$F$F$F$F,[-this.fOriginX, -this.fOriginY, this.fImageWidth, this.fImageHeight]);
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$F$F',  function (graphics, x, y) {
graphics.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.fImage, ((x - this.fOriginX)|0), ((y - this.fOriginY)|0), null);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.fImage.hashCode$();
});

Clazz.newMeth(C$, 'equals$O',  function (rhs) {
try {
return this.equals$java_awt_font_ImageGraphicAttribute(rhs);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'equals$java_awt_font_ImageGraphicAttribute',  function (rhs) {
if (rhs == null ) {
return false;
}if (this === rhs ) {
return true;
}if (this.fOriginX != rhs.fOriginX  || this.fOriginY != rhs.fOriginY  ) {
return false;
}if (this.getAlignment$() != rhs.getAlignment$()) {
return false;
}if (!this.fImage.equals$O(rhs.fImage)) {
return false;
}return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
