(function(){var P$=Clazz.newPackage("swingjs"),p$1={},I$=[[0,['javax.sound.sampled.AudioFormat','.Encoding'],'swingjs.JSUtil']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSAudioLine", null, null, 'javax.sound.sampled.SourceDataLine');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['bOpen','isBigEndian','isUnsignedPCM','bStopped'],'I',['nChannels','sampleRate','sampleSizeInBytes','startTime'],'O',['info','javax.sound.sampled.DataLine.Info','auctx','swingjs.api.js.HTML5AudioContext','audioBuffer','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$javax_sound_sampled_Line_Info',  function (info) {
;C$.$init$.apply(this);
this.info=info;
}, 1);

Clazz.newMeth(C$, 'open$',  function () {
this.open$javax_sound_sampled_AudioFormat$I(null, -1);
});

Clazz.newMeth(C$, 'open$javax_sound_sampled_AudioFormat',  function (format) {
this.open$javax_sound_sampled_AudioFormat$I(format, -1);
});

Clazz.newMeth(C$, 'open$javax_sound_sampled_AudioFormat$I',  function (format, bufferSizeBytes) {
{
window.AudioContext = window.AudioContext || window.webkitAudioContext; this.auctx = new AudioContext();
}
if (format != null ) {
this.info.getFormats$()[0]=format;
this.nChannels=format.getChannels$();
this.sampleRate=(format.getSampleRate$()|0);
this.sampleSizeInBytes=format.getSampleSizeInBits$() >> 3;
this.isBigEndian=format.isBigEndian$();
this.isUnsignedPCM=format.getEncoding$() === $I$(1).PCM_UNSIGNED ;
this.audioBuffer=null;
}this.startTime=0;
this.bOpen=true;
this.bStopped=false;
});

Clazz.newMeth(C$, 'getLineInfo$',  function () {
return this.info;
});

Clazz.newMeth(C$, 'isOpen$',  function () {
return this.bOpen;
});

Clazz.newMeth(C$, 'close$',  function () {
if (this.auctx != null ) this.auctx.close();
this.auctx=null;
this.bOpen=false;
});

Clazz.newMeth(C$, 'start$',  function () {
this.auctx.resume();
this.bStopped=false;
});

Clazz.newMeth(C$, 'stop$',  function () {
this.bStopped=true;
this.auctx.suspend();
});

Clazz.newMeth(C$, 'drain$',  function () {
this.flush$();
});

Clazz.newMeth(C$, 'flush$',  function () {
this.startTime=0;
this.close$();
});

Clazz.newMeth(C$, 'isRunning$',  function () {
return !this.bStopped;
});

Clazz.newMeth(C$, 'isActive$',  function () {
return !this.bStopped;
});

Clazz.newMeth(C$, 'getFormat$',  function () {
return this.info.getFormats$()[0];
});

Clazz.newMeth(C$, 'getBufferSize$',  function () {
return 2147483647;
});

Clazz.newMeth(C$, 'available$',  function () {
return 2147483647;
});

Clazz.newMeth(C$, 'getFramePosition$',  function () {
$I$(2).notImplemented$S(null);
return 0;
});

Clazz.newMeth(C$, 'getLongFramePosition$',  function () {
$I$(2).notImplemented$S(null);
return 0;
});

Clazz.newMeth(C$, 'getMicrosecondPosition$',  function () {
{
return this.auctx.currentTime * 1000000;
}
return 0;
});

Clazz.newMeth(C$, 'getLevel$',  function () {
$I$(2).notImplemented$S(null);
return 0;
});

Clazz.newMeth(C$, 'getControls$',  function () {
$I$(2).notImplemented$S(null);
return null;
});

Clazz.newMeth(C$, 'isControlSupported$javax_sound_sampled_Control_Type',  function (control) {
$I$(2).notImplemented$S(null);
return false;
});

Clazz.newMeth(C$, 'getControl$javax_sound_sampled_Control_Type',  function (control) {
$I$(2).notImplemented$S(null);
return null;
});

Clazz.newMeth(C$, 'addLineListener$javax_sound_sampled_LineListener',  function (listener) {
$I$(2).notImplemented$S(null);
});

Clazz.newMeth(C$, 'removeLineListener$javax_sound_sampled_LineListener',  function (listener) {
});

Clazz.newMeth(C$, 'write$BA$I$I',  function (b, off, len) {
if (!this.bOpen) try {
this.open$javax_sound_sampled_AudioFormat(this.getFormat$());
} catch (e) {
if (Clazz.exceptionOf(e,"javax.sound.sampled.LineUnavailableException")){
return -1;
} else {
throw e;
}
}
for (var i=this.nChannels; --i >= 0; ) p$1.setChannelData$I$BA$I$I.apply(this, [i, b, off, len]);

{
var source = this.auctx.createBufferSource(); if (this.starTime == 0) this.auctx.currentTime = 0; if (this.startTime < this.auctx.currentTime) this.startTime = this.auctx.currentTime;
source.buffer = this.audioBuffer;
source.connect(this.auctx.destination);
source.start(this.startTime);
this.startTime += this.audioBuffer.duration;
}
return len;
});

Clazz.newMeth(C$, 'setChannelData$I$BA$I$I',  function (ich, b, offset, len) {
var data=null;
var ab=this.audioBuffer;
var abLen=0;
{
abLen = (ab ? ab.length : 0);
}
var nFrames=((len - offset)/this.sampleSizeInBytes / this.nChannels |0);
if (this.audioBuffer == null  || abLen != nFrames ) {
ab=this.audioBuffer=this.auctx.createBuffer(this.nChannels, nFrames, this.sampleRate);
}{
data = ab.getChannelData(ich);
}
var bytesPerSample=this.sampleSizeInBytes;
var di=bytesPerSample * this.nChannels;
var big=this.isBigEndian;
var unsigned=this.isUnsignedPCM;
var f=0;
for (var i=offset + ich * bytesPerSample, pt=0; i < len; i+=di) {
switch (bytesPerSample) {
case 1:
f=b[i] * 1.0 / 128;
break;
case 2:
var bi1=b[i];
var bi2=b[i + 1];
f=(big ? (bi1 << 8) | (bi2 & 255) : (bi2 << 8) | (bi1 & 255)) * 1.0 / 32768;
}
data[pt++]=(unsigned ? f - 1 : f);
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
