(function(){var P$=Clazz.newPackage("javax.sound.sampled"),I$=[[0,'javax.sound.sampled.AudioFormat','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "DataLine", function(){
}, null, 'javax.sound.sampled.Line');
C$.$classes$=[['Info',9]];

C$.$clinit$=2;
;
(function(){/*c*/var C$=Clazz.newClass(P$.DataLine, "Info", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.sound.sampled.Line','.Info']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['minBufferSize','maxBufferSize'],'O',['formats','javax.sound.sampled.AudioFormat[]']]]

Clazz.newMeth(C$, 'c$$Class$javax_sound_sampled_AudioFormatA$I$I',  function (lineClass, formats, minBufferSize, maxBufferSize) {
;C$.superclazz.c$$Class.apply(this,[lineClass]);C$.$init$.apply(this);
if (formats == null ) {
this.formats=Clazz.array($I$(1), [0]);
} else {
this.formats=formats;
}this.minBufferSize=minBufferSize;
this.maxBufferSize=maxBufferSize;
}, 1);

Clazz.newMeth(C$, 'c$$Class$javax_sound_sampled_AudioFormat$I',  function (lineClass, format, bufferSize) {
;C$.superclazz.c$$Class.apply(this,[lineClass]);C$.$init$.apply(this);
if (format == null ) {
this.formats=Clazz.array($I$(1), [0]);
} else {
var formats=Clazz.array($I$(1), -1, [format]);
this.formats=formats;
}this.minBufferSize=bufferSize;
this.maxBufferSize=bufferSize;
}, 1);

Clazz.newMeth(C$, 'c$$Class$javax_sound_sampled_AudioFormat',  function (lineClass, format) {
C$.c$$Class$javax_sound_sampled_AudioFormat$I.apply(this, [lineClass, format, -1]);
}, 1);

Clazz.newMeth(C$, 'getFormats$',  function () {
var returnedArray=Clazz.array($I$(1), [this.formats.length]);
System.arraycopy$O$I$O$I$I(this.formats, 0, returnedArray, 0, this.formats.length);
return returnedArray;
});

Clazz.newMeth(C$, 'isFormatSupported$javax_sound_sampled_AudioFormat',  function (format) {
for (var i=0; i < this.formats.length; i++) {
if (format.matches$javax_sound_sampled_AudioFormat(this.formats[i])) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getMinBufferSize$',  function () {
return this.minBufferSize;
});

Clazz.newMeth(C$, 'getMaxBufferSize$',  function () {
return this.maxBufferSize;
});

Clazz.newMeth(C$, 'matches$javax_sound_sampled_Line_Info',  function (info) {
if (!(C$.superclazz.prototype.matches$javax_sound_sampled_Line_Info.apply(this, [info]))) {
return false;
}var dataLineInfo=info;
if ((this.getMaxBufferSize$() >= 0) && (dataLineInfo.getMaxBufferSize$() >= 0) ) {
if (this.getMaxBufferSize$() > dataLineInfo.getMaxBufferSize$()) {
return false;
}}if ((this.getMinBufferSize$() >= 0) && (dataLineInfo.getMinBufferSize$() >= 0) ) {
if (this.getMinBufferSize$() < dataLineInfo.getMinBufferSize$()) {
return false;
}}var localFormats=this.getFormats$();
if (localFormats != null ) {
for (var i=0; i < localFormats.length; i++) {
if (!(localFormats[i] == null )) {
if (!(dataLineInfo.isFormatSupported$javax_sound_sampled_AudioFormat(localFormats[i]))) {
return false;
}}}
}return true;
});

Clazz.newMeth(C$, 'toString',  function () {
var buf=Clazz.new_($I$(2,1));
if ((this.formats.length == 1) && (this.formats[0] != null ) ) {
buf.append$S(" supporting format " + this.formats[0]);
} else if (this.getFormats$().length > 1) {
buf.append$S(" supporting " + this.getFormats$().length + " audio formats" );
}if ((this.minBufferSize != -1) && (this.maxBufferSize != -1) ) {
buf.append$S(", and buffers of " + this.minBufferSize + " to " + this.maxBufferSize + " bytes" );
} else if ((this.minBufferSize != -1) && (this.minBufferSize > 0) ) {
buf.append$S(", and buffers of at least " + this.minBufferSize + " bytes" );
} else if (this.maxBufferSize != -1) {
buf.append$S(", and buffers of up to " + this.minBufferSize + " bytes" );
}return  String.instantialize(C$.superclazz.prototype.toString.apply(this, []) + buf);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
