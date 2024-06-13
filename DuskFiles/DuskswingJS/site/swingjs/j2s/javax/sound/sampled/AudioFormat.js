(function(){var P$=Clazz.newPackage("javax.sound.sampled"),I$=[[0,'java.util.HashMap',['javax.sound.sampled.AudioFormat','.Encoding'],'java.util.Collections']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AudioFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Encoding',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['bigEndian'],'F',['sampleRate','frameRate'],'I',['sampleSizeInBits','channels','frameSize'],'O',['encoding','javax.sound.sampled.AudioFormat.Encoding','properties','java.util.HashMap']]]

Clazz.newMeth(C$, 'c$$javax_sound_sampled_AudioFormat_Encoding$F$I$I$I$F$Z',  function (encoding, sampleRate, sampleSizeInBits, channels, frameSize, frameRate, bigEndian) {
;C$.$init$.apply(this);
this.encoding=encoding;
this.sampleRate=sampleRate;
this.sampleSizeInBits=sampleSizeInBits;
this.channels=channels;
this.frameSize=frameSize;
this.frameRate=frameRate;
this.bigEndian=bigEndian;
this.properties=null;
}, 1);

Clazz.newMeth(C$, 'c$$javax_sound_sampled_AudioFormat_Encoding$F$I$I$I$F$Z$java_util_Map',  function (encoding, sampleRate, sampleSizeInBits, channels, frameSize, frameRate, bigEndian, properties) {
C$.c$$javax_sound_sampled_AudioFormat_Encoding$F$I$I$I$F$Z.apply(this, [encoding, sampleRate, sampleSizeInBits, channels, frameSize, frameRate, bigEndian]);
this.properties=Clazz.new_($I$(1,1).c$$java_util_Map,[properties]);
}, 1);

Clazz.newMeth(C$, 'c$$F$I$I$Z$Z',  function (sampleRate, sampleSizeInBits, channels, signed, bigEndian) {
C$.c$$javax_sound_sampled_AudioFormat_Encoding$F$I$I$I$F$Z.apply(this, [(signed == true  ? $I$(2).PCM_SIGNED : $I$(2).PCM_UNSIGNED), sampleRate, sampleSizeInBits, channels, (channels == -1 || sampleSizeInBits == -1 ) ? -1 : (((sampleSizeInBits + 7)/8|0)) * channels, sampleRate, bigEndian]);
}, 1);

Clazz.newMeth(C$, 'getEncoding$',  function () {
return this.encoding;
});

Clazz.newMeth(C$, 'getSampleRate$',  function () {
return this.sampleRate;
});

Clazz.newMeth(C$, 'getSampleSizeInBits$',  function () {
return this.sampleSizeInBits;
});

Clazz.newMeth(C$, 'getChannels$',  function () {
return this.channels;
});

Clazz.newMeth(C$, 'getFrameSize$',  function () {
return this.frameSize;
});

Clazz.newMeth(C$, 'getFrameRate$',  function () {
return this.frameRate;
});

Clazz.newMeth(C$, 'isBigEndian$',  function () {
return this.bigEndian;
});

Clazz.newMeth(C$, 'properties$',  function () {
var ret;
if (this.properties == null ) {
ret=Clazz.new_($I$(1,1).c$$I,[0]);
} else {
ret=(this.properties.clone$());
}return $I$(3).unmodifiableMap$java_util_Map(ret);
});

Clazz.newMeth(C$, 'getProperty$S',  function (key) {
if (this.properties == null ) {
return null;
}return this.properties.get$O(key);
});

Clazz.newMeth(C$, 'matches$javax_sound_sampled_AudioFormat',  function (format) {
if (format.getEncoding$().equals$O(this.getEncoding$()) && ((format.getSampleRate$() == -1.0 ) || (format.getSampleRate$() == this.getSampleRate$() ) ) && (format.getSampleSizeInBits$() == this.getSampleSizeInBits$()) && (format.getChannels$() == this.getChannels$() && (format.getFrameSize$() == this.getFrameSize$())  && ((format.getFrameRate$() == -1.0 ) || (format.getFrameRate$() == this.getFrameRate$() ) )  && ((format.getSampleSizeInBits$() <= 8) || (format.isBigEndian$() == this.isBigEndian$() ) ) )  ) return true;
return false;
});

Clazz.newMeth(C$, 'toString',  function () {
var sEncoding="";
if (this.getEncoding$() != null ) {
sEncoding=this.getEncoding$().toString() + " ";
}var sSampleRate;
if (this.getSampleRate$() == -1.0 ) {
sSampleRate="unknown sample rate, ";
} else {
sSampleRate="" + new Float(this.getSampleRate$()).toString() + " Hz, " ;
}var sSampleSizeInBits;
if (this.getSampleSizeInBits$() == -1.0 ) {
sSampleSizeInBits="unknown bits per sample, ";
} else {
sSampleSizeInBits="" + this.getSampleSizeInBits$() + " bit, " ;
}var sChannels;
if (this.getChannels$() == 1) {
sChannels="mono, ";
} else if (this.getChannels$() == 2) {
sChannels="stereo, ";
} else {
if (this.getChannels$() == -1) {
sChannels=" unknown number of channels, ";
} else {
sChannels="" + this.getChannels$() + " channels, " ;
}}var sFrameSize;
if (this.getFrameSize$() == -1.0 ) {
sFrameSize="unknown frame size, ";
} else {
sFrameSize="" + this.getFrameSize$() + " bytes/frame, " ;
}var sFrameRate="";
if (Math.abs(this.getSampleRate$() - this.getFrameRate$()) > 1.0E-5 ) {
if (this.getFrameRate$() == -1.0 ) {
sFrameRate="unknown frame rate, ";
} else {
sFrameRate=new Float(this.getFrameRate$()).toString() + " frames/second, ";
}}var sEndian="";
if ((this.getEncoding$().equals$O($I$(2).PCM_SIGNED) || this.getEncoding$().equals$O($I$(2).PCM_UNSIGNED) ) && ((this.getSampleSizeInBits$() > 8) || (this.getSampleSizeInBits$() == -1) ) ) {
if (this.isBigEndian$()) {
sEndian="big-endian";
} else {
sEndian="little-endian";
}}return sEncoding + sSampleRate + sSampleSizeInBits + sChannels + sFrameSize + sFrameRate + sEndian ;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AudioFormat, "Encoding", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]
,['O',['PCM_SIGNED','javax.sound.sampled.AudioFormat.Encoding','+PCM_UNSIGNED','+ULAW','+ALAW']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this.toString() == null ) {
return (obj != null ) && (obj.toString() == null ) ;
}if (Clazz.instanceOf(obj, "javax.sound.sampled.AudioFormat.Encoding")) {
return this.toString().equals$O(obj.toString());
}return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.toString() == null ) {
return 0;
}return this.toString().hashCode$();
});

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

C$.$static$=function(){C$.$static$=0;
C$.PCM_SIGNED=Clazz.new_(C$.c$$S,["PCM_SIGNED"]);
C$.PCM_UNSIGNED=Clazz.new_(C$.c$$S,["PCM_UNSIGNED"]);
C$.ULAW=Clazz.new_(C$.c$$S,["ULAW"]);
C$.ALAW=Clazz.new_(C$.c$$S,["ALAW"]);
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
