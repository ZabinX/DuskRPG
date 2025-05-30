(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,['sun.java2d.StateTrackable','.State']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataBufferFloat", null, 'java.awt.image.DataBuffer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['bankdata','float[][]','data','float[]']]]

Clazz.newMeth(C$, 'c$$I',  function (size) {
;C$.superclazz.c$$sun_java2d_StateTrackable_State$I$I.apply(this,[$I$(1).UNTRACKABLE, 4, size]);C$.$init$.apply(this);
this.data=Clazz.array(Float.TYPE, [size]);
this.bankdata=Clazz.array(Float.TYPE, [1, null]);
this.bankdata[0]=this.data;
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (size, numBanks) {
;C$.superclazz.c$$sun_java2d_StateTrackable_State$I$I$I.apply(this,[$I$(1).UNTRACKABLE, 4, size, numBanks]);C$.$init$.apply(this);
this.bankdata=Clazz.array(Float.TYPE, [numBanks, null]);
for (var i=0; i < numBanks; i++) {
this.bankdata[i]=Clazz.array(Float.TYPE, [size]);
}
this.data=this.bankdata[0];
}, 1);

Clazz.newMeth(C$, 'c$$FA$I',  function (dataArray, size) {
;C$.superclazz.c$$sun_java2d_StateTrackable_State$I$I.apply(this,[$I$(1).UNTRACKABLE, 4, size]);C$.$init$.apply(this);
this.data=dataArray;
this.bankdata=Clazz.array(Float.TYPE, [1, null]);
this.bankdata[0]=this.data;
}, 1);

Clazz.newMeth(C$, 'c$$FA$I$I',  function (dataArray, size, offset) {
;C$.superclazz.c$$sun_java2d_StateTrackable_State$I$I$I$I.apply(this,[$I$(1).UNTRACKABLE, 4, size, 1, offset]);C$.$init$.apply(this);
this.data=dataArray;
this.bankdata=Clazz.array(Float.TYPE, [1, null]);
this.bankdata[0]=this.data;
}, 1);

Clazz.newMeth(C$, 'c$$FAA$I',  function (dataArray, size) {
;C$.superclazz.c$$sun_java2d_StateTrackable_State$I$I$I.apply(this,[$I$(1).UNTRACKABLE, 4, size, dataArray.length]);C$.$init$.apply(this);
this.bankdata=dataArray.clone$();
this.data=this.bankdata[0];
}, 1);

Clazz.newMeth(C$, 'c$$FAA$I$IA',  function (dataArray, size, offsets) {
;C$.superclazz.c$$sun_java2d_StateTrackable_State$I$I$I$IA.apply(this,[$I$(1).UNTRACKABLE, 4, size, dataArray.length, offsets]);C$.$init$.apply(this);
this.bankdata=dataArray.clone$();
this.data=this.bankdata[0];
}, 1);

Clazz.newMeth(C$, 'getData$',  function () {
this.秘setUntrackable$();
return this.data;
});

Clazz.newMeth(C$, 'getData$I',  function (bank) {
this.秘setUntrackable$();
return this.bankdata[bank];
});

Clazz.newMeth(C$, 'getBankData$',  function () {
this.秘setUntrackable$();
return this.bankdata.clone$();
});

Clazz.newMeth(C$, 'getElem$I',  function (i) {
return ((this.data[i + this.offset])|0);
});

Clazz.newMeth(C$, 'getElem$I$I',  function (bank, i) {
return ((this.bankdata[bank][i + this.offsets[bank]])|0);
});

Clazz.newMeth(C$, 'setElem$I$I',  function (i, val) {
this.data[i + this.offset]=val;
this.theTrackable.markDirty$();
});

Clazz.newMeth(C$, 'setElem$I$I$I',  function (bank, i, val) {
this.bankdata[bank][i + this.offsets[bank]]=val;
this.theTrackable.markDirty$();
});

Clazz.newMeth(C$, 'getElemFloat$I',  function (i) {
return this.data[i + this.offset];
});

Clazz.newMeth(C$, 'getElemFloat$I$I',  function (bank, i) {
return this.bankdata[bank][i + this.offsets[bank]];
});

Clazz.newMeth(C$, 'setElemFloat$I$F',  function (i, val) {
this.data[i + this.offset]=val;
this.theTrackable.markDirty$();
});

Clazz.newMeth(C$, 'setElemFloat$I$I$F',  function (bank, i, val) {
this.bankdata[bank][i + this.offsets[bank]]=val;
this.theTrackable.markDirty$();
});

Clazz.newMeth(C$, 'getElemDouble$I',  function (i) {
return this.data[i + this.offset];
});

Clazz.newMeth(C$, 'getElemDouble$I$I',  function (bank, i) {
return this.bankdata[bank][i + this.offsets[bank]];
});

Clazz.newMeth(C$, 'setElemDouble$I$D',  function (i, val) {
this.data[i + this.offset]=val;
this.theTrackable.markDirty$();
});

Clazz.newMeth(C$, 'setElemDouble$I$I$D',  function (bank, i, val) {
this.bankdata[bank][i + this.offsets[bank]]=val;
this.theTrackable.markDirty$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
