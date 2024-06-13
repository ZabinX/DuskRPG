(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JPEGBuffer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.debug=false;
this.BUFFER_SIZE=4096;
},1);

C$.$fields$=[['Z',['debug'],'I',['BUFFER_SIZE','bufAvail','bufPtr'],'O',['buf','byte[]','iis','javax.imageio.stream.ImageInputStream']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream',  function (iis) {
;C$.$init$.apply(this);
this.buf=Clazz.array(Byte.TYPE, [4096]);
this.bufAvail=0;
this.bufPtr=0;
this.iis=iis;
}, 1);

Clazz.newMeth(C$, 'loadBuf$I',  function (count) {
if (this.debug) {
System.out.print$S("loadbuf called with ");
System.out.print$S("count " + count + ", " );
System.out.println$S("bufAvail " + this.bufAvail + ", " );
}if (count != 0) {
if (this.bufAvail >= count) {
return;
}} else {
if (this.bufAvail == 4096) {
return;
}}if ((this.bufAvail > 0) && (this.bufAvail < 4096) ) {
System.arraycopy$O$I$O$I$I(this.buf, this.bufPtr, this.buf, 0, this.bufAvail);
}var ret=this.iis.read$BA$I$I(this.buf, this.bufAvail, this.buf.length - this.bufAvail);
if (this.debug) {
System.out.println$S("iis.read returned " + ret);
}if (ret != -1) {
this.bufAvail+=ret;
}this.bufPtr=0;
var minimum=Math.min(4096, count);
if (this.bufAvail < minimum) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Image Format Error"]);
}});

Clazz.newMeth(C$, 'readData$BA',  function (data) {
var count=data.length;
if (this.bufAvail >= count) {
System.arraycopy$O$I$O$I$I(this.buf, this.bufPtr, data, 0, count);
this.bufAvail-=count;
this.bufPtr+=count;
return;
}var offset=0;
if (this.bufAvail > 0) {
System.arraycopy$O$I$O$I$I(this.buf, this.bufPtr, data, 0, this.bufAvail);
offset=this.bufAvail;
count-=this.bufAvail;
this.bufAvail=0;
this.bufPtr=0;
}if (this.iis.read$BA$I$I(data, offset, count) != count) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Image format Error"]);
}});

Clazz.newMeth(C$, 'skipData$I',  function (count) {
if (this.bufAvail >= count) {
this.bufAvail-=count;
this.bufPtr+=count;
return;
}if (this.bufAvail > 0) {
count-=this.bufAvail;
this.bufAvail=0;
this.bufPtr=0;
}if (this.iis.skipBytes$I(count) != count) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Image format Error"]);
}});

Clazz.newMeth(C$, 'pushBack$',  function () {
this.iis.seek$J(Long.$sub(this.iis.getStreamPosition$(),this.bufAvail));
this.bufAvail=0;
this.bufPtr=0;
});

Clazz.newMeth(C$, 'getStreamPosition$',  function () {
return (Long.$sub(this.iis.getStreamPosition$(),this.bufAvail));
});

Clazz.newMeth(C$, 'scanForFF$com_sun_imageio_plugins_jpeg_JPEGImageReader',  function (reader) {
var retval=false;
var foundFF=false;
while (foundFF == false ){
while (this.bufAvail > 0){
if ((this.buf[this.bufPtr++] & 255) == 255) {
--this.bufAvail;
foundFF=true;
break;
}--this.bufAvail;
}
this.loadBuf$I(0);
if (foundFF == true ) {
while ((this.bufAvail > 0) && (this.buf[this.bufPtr] & 255) == 255 ){
++this.bufPtr;
--this.bufAvail;
}
}if (this.bufAvail == 0) {
retval=true;
this.buf[0]=-39;
this.bufAvail=1;
this.bufPtr=0;
foundFF=true;
}}
return retval;
});

Clazz.newMeth(C$, 'print$I',  function (count) {
System.out.print$S("buffer has ");
System.out.print$I(this.bufAvail);
System.out.println$S(" bytes available");
if (this.bufAvail < count) {
count=this.bufAvail;
}for (var ptr=this.bufPtr; count > 0; count--) {
var val=(this.buf[ptr++]|0) & 255;
System.out.print$S(" " + Integer.toHexString$I(val));
}
System.out.println$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:54 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
