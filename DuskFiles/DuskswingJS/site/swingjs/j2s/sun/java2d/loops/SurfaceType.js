(function(){var P$=Clazz.newPackage("sun.java2d.loops"),I$=[[0,'java.util.HashMap','sun.awt.image.PixelConverter',['sun.awt.image.PixelConverter','.Xrgb'],['sun.awt.image.PixelConverter','.Argb'],['sun.awt.image.PixelConverter','.ArgbPre'],['sun.awt.image.PixelConverter','.Xbgr'],['sun.awt.image.PixelConverter','.Rgba'],['sun.awt.image.PixelConverter','.RgbaPre'],['sun.awt.image.PixelConverter','.Ushort565Rgb'],['sun.awt.image.PixelConverter','.Ushort555Rgb'],['sun.awt.image.PixelConverter','.Ushort555Rgbx'],['sun.awt.image.PixelConverter','.Ushort4444Argb'],['sun.awt.image.PixelConverter','.ByteGray'],['sun.awt.image.PixelConverter','.UshortGray'],['sun.awt.image.PixelConverter','.Rgbx'],['sun.awt.image.PixelConverter','.Bgrx'],['sun.awt.image.PixelConverter','.ArgbBm'],'InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SurfaceType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['uniqueID'],'S',['desc'],'O',['+next','pixelConverter','sun.awt.image.PixelConverter']]
,['I',['unusedUID'],'O',['surfaceUIDMap','java.util.HashMap','Any','sun.java2d.loops.SurfaceType','+AnyInt','+AnyShort','+AnyByte','+AnyByteBinary','+Any3Byte','+Any4Byte','+AnyDcm','+Custom','+IntRgb','+IntArgb','+IntArgbPre','+IntBgr','+ThreeByteBgr','+FourByteAbgr','+FourByteAbgrPre','+Ushort565Rgb','+Ushort555Rgb','+Ushort555Rgbx','+Ushort4444Argb','+UshortIndexed','+ByteGray','+UshortGray','+ByteBinary1Bit','+ByteBinary2Bit','+ByteBinary4Bit','+ByteIndexed','+IntRgbx','+IntBgrx','+ThreeByteRgb','+IntArgbBm','+ByteIndexedBm','+ByteIndexedOpaque','+Index8Gray','+Index12Gray','+AnyPaint','+AnyColor','+OpaqueColor','+GradientPaint','+OpaqueGradientPaint','+LinearGradientPaint','+OpaqueLinearGradientPaint','+RadialGradientPaint','+OpaqueRadialGradientPaint','+TexturePaint','+OpaqueTexturePaint']]]

Clazz.newMeth(C$, 'deriveSubType$S',  function (desc) {
return Clazz.new_(C$.c$$sun_java2d_loops_SurfaceType$S,[this, desc]);
});

Clazz.newMeth(C$, 'deriveSubType$S$sun_awt_image_PixelConverter',  function (desc, pixelConverter) {
return Clazz.new_(C$.c$$sun_java2d_loops_SurfaceType$S$sun_awt_image_PixelConverter,[this, desc, pixelConverter]);
});

Clazz.newMeth(C$, 'c$$sun_java2d_loops_SurfaceType$S$sun_awt_image_PixelConverter',  function (parent, desc, pixelConverter) {
;C$.$init$.apply(this);
this.next=parent;
this.desc=desc;
this.uniqueID=C$.makeUniqueID$S(desc);
this.pixelConverter=pixelConverter;
}, 1);

Clazz.newMeth(C$, 'c$$sun_java2d_loops_SurfaceType$S',  function (parent, desc) {
;C$.$init$.apply(this);
this.next=parent;
this.desc=desc;
this.uniqueID=C$.makeUniqueID$S(desc);
this.pixelConverter=parent.pixelConverter;
}, 1);

Clazz.newMeth(C$, 'makeUniqueID$S',  function (desc) {
var i=C$.surfaceUIDMap.get$O(desc);
if (i == null ) {
if (C$.unusedUID > 255) {
throw Clazz.new_($I$(18,1).c$$S,["surface type id overflow"]);
}i= new Integer(C$.unusedUID++);
C$.surfaceUIDMap.put$O$O(desc, i);
}return i.intValue$();
}, 1);

Clazz.newMeth(C$, 'getUniqueID$',  function () {
return this.uniqueID;
});

Clazz.newMeth(C$, 'getDescriptor$',  function () {
return this.desc;
});

Clazz.newMeth(C$, 'getSuperType$',  function () {
return this.next;
});

Clazz.newMeth(C$, 'getPixelConverter$',  function () {
return this.pixelConverter;
});

Clazz.newMeth(C$, 'pixelFor$I$java_awt_image_ColorModel',  function (rgb, cm) {
return this.pixelConverter.rgbToPixel$I$java_awt_image_ColorModel(rgb, cm);
});

Clazz.newMeth(C$, 'rgbFor$I$java_awt_image_ColorModel',  function (pixel, cm) {
return this.pixelConverter.pixelToRgb$I$java_awt_image_ColorModel(pixel, cm);
});

Clazz.newMeth(C$, 'getAlphaMask$',  function () {
return this.pixelConverter.getAlphaMask$();
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.desc.hashCode$();
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (Clazz.instanceOf(o, "sun.java2d.loops.SurfaceType")) {
return ((o).uniqueID == this.uniqueID);
}return false;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.desc;
});

C$.$static$=function(){C$.$static$=0;
C$.unusedUID=1;
C$.surfaceUIDMap=Clazz.new_($I$(1,1).c$$I,[100]);
C$.Any=Clazz.new_(C$.c$$sun_java2d_loops_SurfaceType$S$sun_awt_image_PixelConverter,[null, "Any Surface", $I$(2).instance]);
C$.AnyInt=C$.Any.deriveSubType$S("Any Discrete Integer");
C$.AnyShort=C$.Any.deriveSubType$S("Any Discrete Short");
C$.AnyByte=C$.Any.deriveSubType$S("Any Discrete Byte");
C$.AnyByteBinary=C$.Any.deriveSubType$S("Packed Binary Bitmap");
C$.Any3Byte=C$.Any.deriveSubType$S("Any 3 Byte Component");
C$.Any4Byte=C$.Any.deriveSubType$S("Any 4 Byte Component");
C$.AnyDcm=C$.AnyInt.deriveSubType$S("Any Integer DCM");
C$.Custom=C$.Any;
C$.IntRgb=C$.AnyDcm.deriveSubType$S$sun_awt_image_PixelConverter("Integer RGB", $I$(3).$instance);
C$.IntArgb=C$.AnyDcm.deriveSubType$S$sun_awt_image_PixelConverter("Integer ARGB", $I$(4).$instance);
C$.IntArgbPre=C$.AnyDcm.deriveSubType$S$sun_awt_image_PixelConverter("Integer ARGB Premultiplied", $I$(5).$instance);
C$.IntBgr=C$.AnyDcm.deriveSubType$S$sun_awt_image_PixelConverter("Integer BGR", $I$(6).$instance);
C$.ThreeByteBgr=C$.Any3Byte.deriveSubType$S$sun_awt_image_PixelConverter("3 Byte BGR", $I$(3).$instance);
C$.FourByteAbgr=C$.Any4Byte.deriveSubType$S$sun_awt_image_PixelConverter("4 Byte ABGR", $I$(7).$instance);
C$.FourByteAbgrPre=C$.Any4Byte.deriveSubType$S$sun_awt_image_PixelConverter("4 Byte ABGR Premultiplied", $I$(8).$instance);
C$.Ushort565Rgb=C$.AnyShort.deriveSubType$S$sun_awt_image_PixelConverter("Short 565 RGB", $I$(9).$instance);
C$.Ushort555Rgb=C$.AnyShort.deriveSubType$S$sun_awt_image_PixelConverter("Short 555 RGB", $I$(10).$instance);
C$.Ushort555Rgbx=C$.AnyShort.deriveSubType$S$sun_awt_image_PixelConverter("Short 555 RGBx", $I$(11).$instance);
C$.Ushort4444Argb=C$.AnyShort.deriveSubType$S$sun_awt_image_PixelConverter("Short 4444 ARGB", $I$(12).$instance);
C$.UshortIndexed=C$.AnyShort.deriveSubType$S("16-bit Indexed");
C$.ByteGray=C$.AnyByte.deriveSubType$S$sun_awt_image_PixelConverter("8-bit Gray", $I$(13).$instance);
C$.UshortGray=C$.AnyShort.deriveSubType$S$sun_awt_image_PixelConverter("16-bit Gray", $I$(14).$$instance);
C$.ByteBinary1Bit=C$.AnyByteBinary.deriveSubType$S("Packed Binary 1-bit Bitmap");
C$.ByteBinary2Bit=C$.AnyByteBinary.deriveSubType$S("Packed Binary 2-bit Bitmap");
C$.ByteBinary4Bit=C$.AnyByteBinary.deriveSubType$S("Packed Binary 4-bit Bitmap");
C$.ByteIndexed=C$.AnyByte.deriveSubType$S("8-bit Indexed");
C$.IntRgbx=C$.AnyDcm.deriveSubType$S$sun_awt_image_PixelConverter("Integer RGBx", $I$(15).$instance);
C$.IntBgrx=C$.AnyDcm.deriveSubType$S$sun_awt_image_PixelConverter("Integer BGRx", $I$(16).$instance);
C$.ThreeByteRgb=C$.Any3Byte.deriveSubType$S$sun_awt_image_PixelConverter("3 Byte RGB", $I$(6).$instance);
C$.IntArgbBm=C$.AnyDcm.deriveSubType$S$sun_awt_image_PixelConverter("Int ARGB (Bitmask)", $I$(17).$instance);
C$.ByteIndexedBm=C$.ByteIndexed.deriveSubType$S("8-bit Indexed (Bitmask)");
C$.ByteIndexedOpaque=C$.ByteIndexedBm.deriveSubType$S("8-bit Indexed (Opaque)");
C$.Index8Gray=C$.ByteIndexedOpaque.deriveSubType$S("8-bit Palettized Gray");
C$.Index12Gray=C$.Any.deriveSubType$S("12-bit Palettized Gray");
C$.AnyPaint=C$.Any.deriveSubType$S("Paint Object");
C$.AnyColor=C$.AnyPaint.deriveSubType$S("Single Color");
C$.OpaqueColor=C$.AnyColor.deriveSubType$S("Opaque Color");
C$.GradientPaint=C$.AnyPaint.deriveSubType$S("Gradient Paint");
C$.OpaqueGradientPaint=C$.GradientPaint.deriveSubType$S("Opaque Gradient Paint");
C$.LinearGradientPaint=C$.AnyPaint.deriveSubType$S("Linear Gradient Paint");
C$.OpaqueLinearGradientPaint=C$.LinearGradientPaint.deriveSubType$S("Opaque Linear Gradient Paint");
C$.RadialGradientPaint=C$.AnyPaint.deriveSubType$S("Radial Gradient Paint");
C$.OpaqueRadialGradientPaint=C$.RadialGradientPaint.deriveSubType$S("Opaque Radial Gradient Paint");
C$.TexturePaint=C$.AnyPaint.deriveSubType$S("Texture Paint");
C$.OpaqueTexturePaint=C$.TexturePaint.deriveSubType$S("Opaque Texture Paint");
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
