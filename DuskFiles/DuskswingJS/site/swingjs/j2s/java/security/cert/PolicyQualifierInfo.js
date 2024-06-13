(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'sun.security.util.DerValue','sun.misc.HexDumpEncoder','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PolicyQualifierInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['mId','pqiString'],'O',['mEncoded','byte[]','+mData']]]

Clazz.newMeth(C$, 'c$$BA',  function (encoded) {
;C$.$init$.apply(this);
this.mEncoded=encoded.clone$();
var val=Clazz.new_($I$(1,1).c$$BA,[this.mEncoded]);
if (val.tag != 48) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Invalid encoding for PolicyQualifierInfo"]);
this.mId=(val.data.getDerValue$()).getOID$().toString();
var tmp=val.data.toByteArray$();
if (tmp == null ) {
this.mData=null;
} else {
this.mData=Clazz.array(Byte.TYPE, [tmp.length]);
System.arraycopy$O$I$O$I$I(tmp, 0, this.mData, 0, tmp.length);
}}, 1);

Clazz.newMeth(C$, 'getPolicyQualifierId$',  function () {
return this.mId;
});

Clazz.newMeth(C$, 'getEncoded$',  function () {
return this.mEncoded.clone$();
});

Clazz.newMeth(C$, 'getPolicyQualifier$',  function () {
return (this.mData == null  ? null : this.mData.clone$());
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.pqiString != null ) return this.pqiString;
var enc=Clazz.new_($I$(2,1));
var sb=Clazz.new_($I$(3,1));
sb.append$S("PolicyQualifierInfo: [\n");
sb.append$S("  qualifierID: " + this.mId + "\n" );
sb.append$S("  qualifier: " + (this.mData == null  ? "null" : enc.encodeBuffer$BA(this.mData)) + "\n" );
sb.append$S("]");
this.pqiString=sb.toString();
return this.pqiString;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:28 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
