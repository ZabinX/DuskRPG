(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.common"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SubImageInputStream", null, 'javax.imageio.stream.ImageInputStreamImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['startingLength','length'],'J',['startingPos'],'O',['stream','javax.imageio.stream.ImageInputStream']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream$I',  function (stream, length) {
Clazz.super_(C$, this);
this.stream=stream;
this.startingPos=stream.getStreamPosition$();
this.startingLength=this.length=length;
}, 1);

Clazz.newMeth(C$, 'read$',  function () {
if (this.length == 0) {
return -1;
} else {
--this.length;
return this.stream.read$();
}});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
if (this.length == 0) {
return -1;
}len=Math.min(len, this.length);
var bytes=this.stream.read$BA$I$I(b, off, len);
this.length-=bytes;
return bytes;
});

Clazz.newMeth(C$, 'length$',  function () {
return this.startingLength;
});

Clazz.newMeth(C$, 'seek$J',  function (pos) {
this.stream.seek$J(Long.$sub(pos,this.startingPos));
this.streamPos=pos;
});

Clazz.newMeth(C$, 'finalize$',  function () {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
