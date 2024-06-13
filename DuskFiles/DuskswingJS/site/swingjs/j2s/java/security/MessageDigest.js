(function(){var P$=Clazz.newPackage("java.security"),I$=[[0,'sun.security.util.Debug','java.security.Security',['java.security.MessageDigest','.Delegate'],'java.io.ByteArrayOutputStream','java.io.PrintStream']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MessageDigest", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.security.MessageDigestSpi');
C$.$classes$=[['Delegate',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.state=0;
},1);

C$.$fields$=[['I',['state'],'S',['algorithm'],'O',['provider','java.security.Provider']]
,['Z',['skipDebug'],'O',['pdebug','sun.security.util.Debug']]]

Clazz.newMeth(C$, 'c$$S',  function (algorithm) {
Clazz.super_(C$, this);
this.algorithm=algorithm;
}, 1);

Clazz.newMeth(C$, 'getInstance$S',  function (algorithm) {
try {
var md;
var objs=$I$(2).getImpl$S$S$S(algorithm, "MessageDigest", null);
if (Clazz.instanceOf(objs[0], "java.security.MessageDigest")) {
md=objs[0];
} else {
md=Clazz.new_($I$(3,1).c$$java_security_MessageDigestSpi$S,[objs[0], algorithm]);
}md.provider=objs[1];
if (!C$.skipDebug && C$.pdebug != null  ) {
C$.pdebug.println$S("MessageDigest." + algorithm + " algorithm from: " + md.provider.getName$() );
}return md;
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.NoSuchProviderException")){
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S,[algorithm + " not found"]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getInstance$S$S',  function (algorithm, provider) {
if (provider == null  || provider.length$() == 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["missing provider"]);
var objs=$I$(2).getImpl$S$S$S(algorithm, "MessageDigest", provider);
if (Clazz.instanceOf(objs[0], "java.security.MessageDigest")) {
var md=objs[0];
md.provider=objs[1];
return md;
} else {
var delegate=Clazz.new_($I$(3,1).c$$java_security_MessageDigestSpi$S,[objs[0], algorithm]);
delegate.provider=objs[1];
return delegate;
}}, 1);

Clazz.newMeth(C$, 'getInstance$S$java_security_Provider',  function (algorithm, provider) {
if (provider == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["missing provider"]);
var objs=$I$(2).getImpl$S$S$java_security_Provider(algorithm, "MessageDigest", provider);
if (Clazz.instanceOf(objs[0], "java.security.MessageDigest")) {
var md=objs[0];
md.provider=objs[1];
return md;
} else {
var delegate=Clazz.new_($I$(3,1).c$$java_security_MessageDigestSpi$S,[objs[0], algorithm]);
delegate.provider=objs[1];
return delegate;
}}, 1);

Clazz.newMeth(C$, 'getProvider$',  function () {
return this.provider;
});

Clazz.newMeth(C$, 'update$B',  function (input) {
this.engineUpdate$B(input);
this.state=1;
});

Clazz.newMeth(C$, 'update$BA$I$I',  function (input, offset, len) {
if (input == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No input buffer given"]);
}if (input.length - offset < len) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Input buffer too short"]);
}this.engineUpdate$BA$I$I(input, offset, len);
this.state=1;
});

Clazz.newMeth(C$, 'update$BA',  function (input) {
this.engineUpdate$BA$I$I(input, 0, input.length);
this.state=1;
});

Clazz.newMeth(C$, 'update$java_nio_ByteBuffer',  function (input) {
if (input == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.engineUpdate$java_nio_ByteBuffer(input);
this.state=1;
});

Clazz.newMeth(C$, 'digest$',  function () {
var result=this.engineDigest$();
this.state=0;
return result;
});

Clazz.newMeth(C$, 'digest$BA$I$I',  function (buf, offset, len) {
if (buf == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No output buffer given"]);
}if (buf.length - offset < len) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Output buffer too small for specified offset and length"]);
}var numBytes=this.engineDigest$BA$I$I(buf, offset, len);
this.state=0;
return numBytes;
});

Clazz.newMeth(C$, 'digest$BA',  function (input) {
this.update$BA(input);
return this.digest$();
});

Clazz.newMeth(C$, 'toString',  function () {
var baos=Clazz.new_($I$(4,1));
var p=Clazz.new_($I$(5,1).c$$java_io_OutputStream,[baos]);
p.print$S(this.algorithm + " Message Digest from " + this.provider.getName$() + ", " );
switch (this.state) {
case 0:
p.print$S("<initialized>");
break;
case 1:
p.print$S("<in progress>");
break;
}
p.println$();
return (baos.toString());
});

Clazz.newMeth(C$, 'isEqual$BA$BA',  function (digesta, digestb) {
if (digesta.length != digestb.length) {
return false;
}var result=0;
for (var i=0; i < digesta.length; i++) {
result|=digesta[i] ^ digestb[i];
}
return result == 0;
}, 1);

Clazz.newMeth(C$, 'reset$',  function () {
this.engineReset$();
this.state=0;
});

Clazz.newMeth(C$, 'getAlgorithm$',  function () {
return this.algorithm;
});

Clazz.newMeth(C$, 'getDigestLength$',  function () {
var digestLen=this.engineGetDigestLength$();
if (digestLen == 0) {
try {
var md=this.clone$();
var digest=md.digest$();
return digest.length;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
return digestLen;
} else {
throw e;
}
}
}return digestLen;
});

Clazz.newMeth(C$, 'clone$',  function () {
if (Clazz.instanceOf(this, "java.lang.Cloneable")) {
return C$.superclazz.prototype.clone$.apply(this, []);
} else {
throw Clazz.new_(Clazz.load('CloneNotSupportedException'));
}});

C$.$static$=function(){C$.$static$=0;
C$.pdebug=$I$(1).getInstance$S$S("provider", "Provider");
C$.skipDebug=$I$(1,"isOn$S",["engine="]) && !$I$(1).isOn$S("messagedigest") ;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.MessageDigest, "Delegate", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.security.MessageDigest');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['digestSpi','java.security.MessageDigestSpi']]]

Clazz.newMeth(C$, 'c$$java_security_MessageDigestSpi$S',  function (digestSpi, algorithm) {
;C$.superclazz.c$$S.apply(this,[algorithm]);C$.$init$.apply(this);
this.digestSpi=digestSpi;
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
if (Clazz.instanceOf(this.digestSpi, "java.lang.Cloneable")) {
var digestSpiClone=this.digestSpi.clone$();
var that=Clazz.new_(C$.c$$java_security_MessageDigestSpi$S,[digestSpiClone, (this).algorithm]);
that.provider=(this).provider;
that.state=(this).state;
return that;
} else {
throw Clazz.new_(Clazz.load('CloneNotSupportedException'));
}});

Clazz.newMeth(C$, 'engineGetDigestLength$',  function () {
return this.digestSpi.engineGetDigestLength$();
});

Clazz.newMeth(C$, 'engineUpdate$B',  function (input) {
this.digestSpi.engineUpdate$B(input);
});

Clazz.newMeth(C$, 'engineUpdate$BA$I$I',  function (input, offset, len) {
this.digestSpi.engineUpdate$BA$I$I(input, offset, len);
});

Clazz.newMeth(C$, 'engineUpdate$java_nio_ByteBuffer',  function (input) {
this.digestSpi.engineUpdate$java_nio_ByteBuffer(input);
});

Clazz.newMeth(C$, 'engineDigest$',  function () {
return this.digestSpi.engineDigest$();
});

Clazz.newMeth(C$, 'engineDigest$BA$I$I',  function (buf, offset, len) {
return this.digestSpi.engineDigest$BA$I$I(buf, offset, len);
});

Clazz.newMeth(C$, 'engineReset$',  function () {
this.digestSpi.engineReset$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
