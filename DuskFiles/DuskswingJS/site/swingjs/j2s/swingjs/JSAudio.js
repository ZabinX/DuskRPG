(function(){var P$=Clazz.newPackage("swingjs"),p$1={},I$=[[0,'javajs.util.Rdr','swingjs.api.js.DOMNode','swingjs.JSAudioLine','swingjs.JSUtil','java.util.Hashtable','javax.sound.sampled.AudioFormat','javajs.util.Base64','javajs.util.BC','javajs.util.OC','swingjs.JSAudioInputStream',['javax.sound.sampled.AudioFormat','.Encoding']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSAudio", null, null, 'java.applet.AudioClip');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['myURI'],'O',['myPlayer','java.applet.AudioClip']]
,['O',['to_ulaw','int[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL',  function (url) {
;C$.$init$.apply(this);
try {
var bytes=$I$(1,"getLimitedStreamBytes$java_io_InputStream$J",[url.openStream$(), -1]);
var audioFormat=C$.getAudioFormatForStreamOrBytes$java_io_ByteArrayInputStream$BA(null, bytes);
var format=audioFormat.getProperty$S("fileFormat");
if (format == null  || format === "AU"  ) {
bytes=this.createWaveData$BA$javax_sound_sampled_AudioFormat(bytes, audioFormat);
format="wav";
}if (bytes == null ) return;
this.myURI=p$1.getBase64$BA$S.apply(this, [bytes, format]);
this.myPlayer=C$.getAudioElement$S$Z(this.myURI, false);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("Exception creating AudioClip for " + url);
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getAudioClip$java_net_URL',  function (url) {
var jsAudio=Clazz.new_(C$.c$$java_net_URL,[url]);
return jsAudio;
});

Clazz.newMeth(C$, 'getAudioElement$S$Z',  function (filePath, isLoop) {
var clip=$I$(2,"setAttrs",[$I$(2).createElement("audio", null), ["controls", "true", (isLoop ? "loop" : null), (isLoop ? "true" : null), "src", filePath]]);

clip.play$ = clip.play;
clip.stop$ = clip.stop;
clip.loop$ = clip.loop;
return clip;
}, 1);

Clazz.newMeth(C$, 'play$',  function () {
if (this.myPlayer == null ) return;

this.myPlayer.currentTime = 0;
this.myPlayer.play$();
});

Clazz.newMeth(C$, 'loop$',  function () {
if (this.myPlayer == null ) return;
this.stop$();

this.myPlayer.loop = true;
this.play$();
});

Clazz.newMeth(C$, 'stop$',  function () {
if (this.myPlayer == null ) return;
{
this.myPlayer.pause();
this.myPlayer.currentTime = 0;
}
});

Clazz.newMeth(C$, 'getAudioLine$javax_sound_sampled_Line_Info',  function (info) {
return Clazz.new_($I$(3,1).c$$javax_sound_sampled_Line_Info,[info]);
});

Clazz.newMeth(C$, 'getAudioFileFromURL$java_net_URL',  function (url) {
if ($I$(4).debugging) System.out.println$S(url + " AudioFormat:" + C$.getAudioFileFormat$java_net_URL(url) );
return this.getAudioPlayerForBytes$BA$S($I$(1,"getLimitedStreamBytes$java_io_InputStream$J",[url.openStream$(), -1]), null);
});

Clazz.newMeth(C$, 'getAudioFileFormat$java_net_URL',  function (url) {
return C$.getAudioFormatForStreamOrBytes$java_io_ByteArrayInputStream$BA(null, $I$(1,"getLimitedStreamBytes$java_io_InputStream$J",[url.openStream$(), -1]));
}, 1);

Clazz.newMeth(C$, 'getAudioPlayerForBytes$BA$S',  function (fileData, fileType) {
var format=p$1.getFormat$BA$S.apply(this, [fileData, fileType]);
return this.getAudio$BA$javax_sound_sampled_AudioFormat(fileData, format);
});

Clazz.newMeth(C$, 'getFormat$BA$S',  function (fileData, fileType) {
var props=Clazz.new_($I$(5,1));
if (fileType == null ) fileType=C$.getAudioTypeForBytes$BA(fileData);
props.put$O$O("fileFormat", fileType);
return Clazz.new_($I$(6,1).c$$javax_sound_sampled_AudioFormat_Encoding$F$I$I$I$F$Z$java_util_Map,[null, -1, -1, -1, -1, -1, false, props]);
}, p$1);

Clazz.newMeth(C$, 'getAudio$BA$javax_sound_sampled_AudioFormat',  function (data, audioFormat) {
var format=audioFormat.getProperty$S("fileFormat");
if (format == null  || format === "AU"  ) {
data=this.createWaveData$BA$javax_sound_sampled_AudioFormat(data, audioFormat);
format="wav";
}if (data == null ) return null;
return C$.getAudioElement$S$Z(p$1.getBase64$BA$S.apply(this, [data, format]), false);
});

Clazz.newMeth(C$, 'getBase64$BA$S',  function (data, format) {
return "data:audio/" + format.toLowerCase$() + ";base64," + $I$(7).getBase64$BA(data) ;
}, p$1);

Clazz.newMeth(C$, 'createWaveData$BA$javax_sound_sampled_AudioFormat',  function (data, af) {
var spsec=(af.getSampleRate$()|0);
var bitsPerSample=af.getSampleSizeInBits$();
var bytesPerSample=(bitsPerSample/8|0);
switch (spsec) {
case 8000:
case 11025:
case 16000:
case 22050:
case 44100:
break;
default:
throw Clazz.new_(Clazz.load('javax.sound.sampled.UnsupportedAudioFileException').c$$S,["sample rate of " + spsec + " must be one of 8000,11025,1600,22050,44100" ]);
}
var fmt=0;
var offset=0;
var format=af.getEncoding$().toString();
switch ("PCM_SIGNED     PCM_UNSIGNED   PCM_FLOAT      ULAW           ALAW           ".indexOf$S(format)) {
case 0:
switch (bitsPerSample) {
case 8:
fmt=7;
data=C$.toULaw$BA(data);
break;
case 16:
fmt=1;
if (af.isBigEndian$()) data=C$.toLittleEndian$BA(data);
break;
}
break;
case 45:
if (bitsPerSample == 8) {
fmt=7;
if (C$.isAU$BA(data)) offset=$I$(8).bytesToInt$BA$I$Z(data, 4, true);
}break;
}
if (fmt == 0) throw Clazz.new_(Clazz.load('javax.sound.sampled.UnsupportedAudioFileException').c$$S,["unsupported format " + bitsPerSample + "-bit " + format ]);
var nchannels=1;
var bytesPerSecond=spsec * nchannels * bytesPerSample ;
var out=Clazz.new_($I$(9,1));
out.setBigEndian$Z(false);
out.append$S("RIFF");
out.writeInt$I(36 + data.length);
out.append$S("WAVE");
out.append$S("fmt ");
out.writeInt$I(16);
out.writeShort$H(($s$[0] = fmt, $s$[0]));
out.writeShort$H(1);
out.writeInt$I(spsec);
out.writeInt$I(bytesPerSecond);
out.writeShort$H(($s$[0] = bytesPerSample, $s$[0]));
out.writeShort$H(($s$[0] = (bitsPerSample), $s$[0]));
out.append$S("data");
out.writeInt$I(data.length - offset);
out.write$BA$I$I(data, offset, data.length - offset);
out.closeChannel$();
return out.toByteArray$();
});

Clazz.newMeth(C$, 'toLittleEndian$BA',  function (data) {
var b=Clazz.array(Byte.TYPE, [data.length]);
for (var i=data.length; --i > 0; --i) {
b[i - 1]=data[i];
b[i]=data[i - 1];
}
return b;
}, 1);

Clazz.newMeth(C$, 'toULaw$BA',  function (data) {
var b=Clazz.array(Byte.TYPE, [data.length]);
System.arraycopy$O$I$O$I$I(data, 0, b, 0, b.length);
for (var i=b.length; --i >= 0; ) b[i]=(C$.to_ulaw[128 + b[i]]|0);

return b;
}, 1);

Clazz.newMeth(C$, 'getAudioInputStream$java_io_ByteArrayInputStream',  function (stream) {
return Clazz.new_([stream, C$.getAudioFormatForStreamOrBytes$java_io_ByteArrayInputStream$BA(stream, null), -1],$I$(10,1).c$$java_io_InputStream$javax_sound_sampled_AudioFormat$J);
}, 1);

Clazz.newMeth(C$, 'getAudioFormatForStreamOrBytes$java_io_ByteArrayInputStream$BA',  function (stream, header) {
var props=Clazz.new_($I$(5,1));
var fmt=(stream == null  ? C$.getAudioTypeForBytes$BA(header) : C$.getAudioTypeForStream$java_io_ByteArrayInputStream(stream));
props.put$O$O("fileFormat", fmt);
if (stream != null ) stream.reset$();
var encoding=null;
var sampleRate=-1;
var sampleSizeInBits=-1;
var channels=-1;
var frameSize=-1;
var frameRate=-1;
var bigEndian=false;
try {
if (fmt === "MP3" ) {
} else if (fmt === "OGG" ) {
} else if (fmt === "AU" ) {
if (stream != null ) {
header=Clazz.array(Byte.TYPE, [24]);
stream.read$BA(header);
}sampleSizeInBits=8;
var enc=$I$(8).bytesToInt$BA$I$Z(header, 12, true);
frameRate=sampleRate=$I$(8).bytesToInt$BA$I$Z(header, 16, true);
channels=$I$(8).bytesToInt$BA$I$Z(header, 20, true);
frameSize=(channels * sampleSizeInBits/8|0);
bigEndian=true;
if (enc != 1) {
System.out.println$S("AU audio encoding " + enc + " not supported" );
}encoding=$I$(11).ULAW;
} else if (fmt === "WAV" ) {
if (stream != null ) {
header=Clazz.array(Byte.TYPE, [36]);
stream.read$BA(header);
}var enc=$I$(8).bytesToShort$BA$I$Z(header, 20, false);
if (enc == 1) encoding=$I$(11).PCM_SIGNED;
channels=$I$(8).bytesToShort$BA$I$Z(header, 22, false);
frameRate=sampleRate=$I$(8).bytesToInt$BA$I$Z(header, 24, false);
frameSize=$I$(8).bytesToShort$BA$I$Z(header, 32, false);
sampleSizeInBits=$I$(8).bytesToShort$BA$I$Z(header, 34, false);
}} catch (e) {
} finally {
if (stream != null ) stream.reset$();
}
return Clazz.new_($I$(6,1).c$$javax_sound_sampled_AudioFormat_Encoding$F$I$I$I$F$Z$java_util_Map,[encoding, sampleRate, sampleSizeInBits, channels, frameSize, frameRate, bigEndian, props]);
}, 1);

Clazz.newMeth(C$, 'getAudioTypeForStream$java_io_ByteArrayInputStream',  function (stream) {
stream.reset$();
var b=Clazz.array(Byte.TYPE, [12]);
try {
stream.read$BA(b);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
stream.reset$();
return C$.getAudioTypeForBytes$BA(b);
}, 1);

Clazz.newMeth(C$, 'getAudioTypeForBytes$BA',  function (b) {
if (C$.isWave$BA(b)) return "WAV";
if (C$.isMP3$BA(b)) return "MP3";
if (C$.isOGG$BA(b)) return "OGG";
if (C$.isAU$BA(b)) return "AU";
throw Clazz.new_(Clazz.load('javax.sound.sampled.UnsupportedAudioFileException'));
}, 1);

Clazz.newMeth(C$, 'isOGG$BA',  function (b) {
return b[0] == 79 && b[1] == 103  && b[2] == 103  && b[3] == 83 ;
}, 1);

Clazz.newMeth(C$, 'isMP3$BA',  function (b) {
return b[0] == 255 && b[1] == 251  || b[0] == 73 && b[1] == 68  && b[2] == 51  ;
}, 1);

Clazz.newMeth(C$, 'isWave$BA',  function (b) {
return b[0] == 82 && b[1] == 73  && b[2] == 70  && b[3] == 70  && b[8] == 87  && b[9] == 65  && b[10] == 86  && b[11] == 69 ;
}, 1);

Clazz.newMeth(C$, 'isAU$BA',  function (b) {
return b[0] == 46 && b[1] == 115  && b[2] == 110  && b[3] == 100 ;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.to_ulaw=Clazz.array(Integer.TYPE, -1, [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 49, 51, 53, 55, 57, 59, 61, 63, 66, 70, 74, 78, 84, 92, 104, 254, 231, 219, 211, 205, 201, 197, 193, 190, 188, 186, 184, 182, 180, 178, 176, 175, 174, 173, 172, 171, 170, 169, 168, 167, 166, 165, 164, 163, 162, 161, 160, 159, 159, 158, 158, 157, 157, 156, 156, 155, 155, 154, 154, 153, 153, 152, 152, 151, 151, 150, 150, 149, 149, 148, 148, 147, 147, 146, 146, 145, 145, 144, 144, 143, 143, 143, 143, 142, 142, 142, 142, 141, 141, 141, 141, 140, 140, 140, 140, 139, 139, 139, 139, 138, 138, 138, 138, 137, 137, 137, 137, 136, 136, 136, 136, 135, 135, 135, 135, 134, 134, 134, 134, 133, 133, 133, 133, 132, 132, 132, 132, 131, 131, 131, 131, 130, 130, 130, 130, 129, 129, 129, 129, 128, 128, 128, 128]);
};
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
