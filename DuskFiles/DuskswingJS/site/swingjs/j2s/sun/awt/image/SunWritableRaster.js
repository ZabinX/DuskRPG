(function(){var P$=Clazz.newPackage("sun.awt.image"),I$=[[0,'InternalError','sun.java2d.StateTrackableDelegate',['sun.java2d.StateTrackable','.State']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SunWritableRaster", null, 'java.awt.image.WritableRaster');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['stealer','sun.awt.image.DataStealer']]]

Clazz.newMeth(C$, 'getStealer$',  function () {
return (C$.stealer == null  ? C$.stealer=((P$.SunWritableRaster$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SunWritableRaster$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'sun.awt.image.DataStealer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getData$java_awt_image_DataBufferByte$I',  function (dbb, bank) {
return dbb.bankdata[bank];
});

Clazz.newMeth(C$, 'getData$java_awt_image_DataBufferUShort$I',  function (dbus, bank) {
return dbus.bankdata[bank];
});

Clazz.newMeth(C$, 'getData$java_awt_image_DataBufferInt$I',  function (dbi, bank) {
return dbi.bankdata[bank];
});

Clazz.newMeth(C$, 'getTrackable$java_awt_image_DataBuffer',  function (db) {
return db.theTrackable;
});

Clazz.newMeth(C$, 'setTrackable$java_awt_image_DataBuffer$sun_java2d_StateTrackableDelegate',  function (db, trackable) {
db.theTrackable=trackable;
});
})()
), Clazz.new_(P$.SunWritableRaster$1.$init$,[this, null])) : C$.stealer);
}, 1);

Clazz.newMeth(C$, 'setDataStealer$sun_awt_image_DataStealer',  function (ds) {
if (C$.stealer != null ) {
throw Clazz.new_($I$(1,1).c$$S,["Attempt to set DataStealer twice"]);
}C$.stealer=ds;
}, 1);

Clazz.newMeth(C$, 'stealData$java_awt_image_DataBufferByte$I',  function (dbb, bank) {
return C$.getStealer$().getData$java_awt_image_DataBufferByte$I(dbb, bank);
}, 1);

Clazz.newMeth(C$, 'stealData$java_awt_image_DataBufferUShort$I',  function (dbus, bank) {
return C$.getStealer$().getData$java_awt_image_DataBufferUShort$I(dbus, bank);
}, 1);

Clazz.newMeth(C$, 'stealData$java_awt_image_DataBufferInt$I',  function (dbi, bank) {
return C$.getStealer$().getData$java_awt_image_DataBufferInt$I(dbi, bank);
}, 1);

Clazz.newMeth(C$, 'stealTrackable$java_awt_image_DataBuffer',  function (db) {
return C$.getStealer$().getTrackable$java_awt_image_DataBuffer(db);
}, 1);

Clazz.newMeth(C$, 'setTrackable$java_awt_image_DataBuffer$sun_java2d_StateTrackableDelegate',  function (db, trackable) {
C$.getStealer$().setTrackable$java_awt_image_DataBuffer$sun_java2d_StateTrackableDelegate(db, trackable);
}, 1);

Clazz.newMeth(C$, 'makeTrackable$java_awt_image_DataBuffer',  function (db) {
C$.getStealer$().setTrackable$java_awt_image_DataBuffer$sun_java2d_StateTrackableDelegate(db, $I$(2,"createInstance$sun_java2d_StateTrackable_State",[$I$(3).STABLE]));
}, 1);

Clazz.newMeth(C$, 'markDirty$java_awt_image_DataBuffer',  function (db) {
C$.getStealer$().getTrackable$java_awt_image_DataBuffer(db).markDirty$();
}, 1);

Clazz.newMeth(C$, 'markDirty$java_awt_image_WritableRaster',  function (wr) {
if (Clazz.instanceOf(wr, "sun.awt.image.SunWritableRaster")) {
(wr).markDirty$();
} else {
C$.markDirty$java_awt_image_DataBuffer(wr.getDataBuffer$());
}}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_Point',  function (sampleModel, origin) {
;C$.superclazz.c$$java_awt_image_SampleModel$java_awt_Point.apply(this,[sampleModel, origin]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point',  function (sampleModel, dataBuffer, origin) {
;C$.superclazz.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point.apply(this,[sampleModel, dataBuffer, origin]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_WritableRaster',  function (sampleModel, dataBuffer, aRegion, sampleModelTranslate, parent) {
;C$.superclazz.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_WritableRaster.apply(this,[sampleModel, dataBuffer, aRegion, sampleModelTranslate, parent]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'markDirty$',  function () {
C$.stealTrackable$java_awt_image_DataBuffer(this.dataBuffer).markDirty$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
