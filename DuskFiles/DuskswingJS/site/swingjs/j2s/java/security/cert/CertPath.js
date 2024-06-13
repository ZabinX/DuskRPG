(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'java.security.cert.CertificateFactory','java.io.ByteArrayInputStream','StringBuffer',['java.security.cert.CertPath','.CertPathRep']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CertPath", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['CertPathRep',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['type']]]

Clazz.newMeth(C$, 'c$$S',  function (type) {
;C$.$init$.apply(this);
this.type=type;
}, 1);

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'equals$O',  function (other) {
if (this === other ) return true;
if (!(Clazz.instanceOf(other, "java.security.cert.CertPath"))) return false;
var otherCP=other;
if (!otherCP.getType$().equals$O(this.type)) return false;
var thisCertList=this.getCertificates$();
var otherCertList=otherCP.getCertificates$();
return (thisCertList.equals$O(otherCertList));
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var hashCode=this.type.hashCode$();
hashCode=31 * hashCode + this.getCertificates$().hashCode$();
return hashCode;
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(3,1));
var stringIterator=this.getCertificates$().iterator$();
sb.append$S("\n" + this.type + " Cert Path: length = " + this.getCertificates$().size$() + ".\n" );
sb.append$S("[\n");
var i=1;
while (stringIterator.hasNext$()){
sb.append$S("=========================================================Certificate " + i + " start.\n" );
var stringCert=stringIterator.next$();
sb.append$S(stringCert.toString());
sb.append$S("\n=========================================================Certificate " + i + " end.\n\n\n" );
++i;
}
sb.append$S("\n]");
return sb.toString();
});

Clazz.newMeth(C$, 'writeReplace$',  function () {
try {
return Clazz.new_([this.type, this.getEncoded$()],$I$(4,1).c$$S$BA);
} catch (ce) {
if (Clazz.exceptionOf(ce,"java.security.cert.CertificateException")){
var nse=Clazz.new_(Clazz.load('java.io.NotSerializableException').c$$S,["java.security.cert.CertPath: " + this.type]);
nse.initCause$Throwable(ce);
throw nse;
} else {
throw ce;
}
}
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.CertPath, "CertPathRep", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['type'],'O',['data','byte[]']]]

Clazz.newMeth(C$, 'c$$S$BA',  function (type, data) {
;C$.$init$.apply(this);
this.type=type;
this.data=data;
}, 1);

Clazz.newMeth(C$, 'readResolve$',  function () {
try {
var cf=$I$(1).getInstance$S(this.type);
return cf.generateCertPath$java_io_InputStream(Clazz.new_($I$(2,1).c$$BA,[this.data]));
} catch (ce) {
if (Clazz.exceptionOf(ce,"java.security.cert.CertificateException")){
var nse=Clazz.new_(Clazz.load('java.io.NotSerializableException').c$$S,["java.security.cert.CertPath: " + this.type]);
nse.initCause$Throwable(ce);
throw nse;
} else {
throw ce;
}
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
