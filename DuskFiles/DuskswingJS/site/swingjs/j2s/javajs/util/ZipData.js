(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'javajs.util.Rdr','javajs.util.ZipTools']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ZipData");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isEnabled=true;
},1);

C$.$fields$=[['Z',['isEnabled'],'I',['pt','nBytes'],'O',['buf','byte[]']]]

Clazz.newMeth(C$, 'c$$I',  function (nBytes) {
;C$.$init$.apply(this);
this.nBytes=nBytes;
}, 1);

Clazz.newMeth(C$, 'addBytes$BA$I$I',  function (byteBuf, nSectorBytes, nBytesRemaining) {
if (this.pt == 0) {
if (!$I$(1).isGzipB$BA(byteBuf)) {
this.isEnabled=false;
return -1;
}this.buf=Clazz.array(Byte.TYPE, [nBytesRemaining]);
}var nToAdd=Math.min(nSectorBytes, nBytesRemaining);
System.arraycopy$O$I$O$I$I(byteBuf, 0, this.buf, this.pt, nToAdd);
this.pt+=nToAdd;
return nBytesRemaining - nToAdd;
});

Clazz.newMeth(C$, 'addTo$javajs_util_SB',  function (data) {
data.append$S($I$(2).getGzippedBytesAsString$BA(this.buf));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
