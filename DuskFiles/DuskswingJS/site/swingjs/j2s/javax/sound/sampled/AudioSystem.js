(function(){var P$=Clazz.newPackage("javax.sound.sampled"),I$=[[0,'swingjs.JSToolkit','swingjs.JSAudio','javax.sound.sampled.AudioFileFormat',['javax.sound.sampled.AudioFileFormat','.Type'],'java.io.ByteArrayInputStream','javajs.util.Rdr','swingjs.JSUtil']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AudioSystem");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getLine$javax_sound_sampled_Line_Info',  function (info) {
var line=$I$(1).getAudioLine$javax_sound_sampled_Line_Info(info);
if (line != null ) return line;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No line matching " + info.toString() + " is supported." ]);
}, 1);

Clazz.newMeth(C$, 'getAudioInputStream$java_io_ByteArrayInputStream',  function (stream) {
return $I$(2).getAudioInputStream$java_io_ByteArrayInputStream(stream);
}, 1);

Clazz.newMeth(C$, 'getAudioFileFormat$java_net_URL',  function (url) {
var ais=C$.getAudioInputStream$java_net_URL(url);
var format=(ais == null  ? null : ais.getFormat$());
if (format == null ) throw Clazz.new_(Clazz.load('javax.sound.sampled.UnsupportedAudioFileException').c$$S,["file is not a supported file type"]);
return Clazz.new_([$I$(4).getType$javax_sound_sampled_AudioFormat(format), format, -1],$I$(3,1).c$$javax_sound_sampled_AudioFileFormat_Type$javax_sound_sampled_AudioFormat$I);
}, 1);

Clazz.newMeth(C$, 'getAudioInputStream$java_io_InputStream',  function (stream) {
if (Clazz.instanceOf(stream, "java.io.ByteArrayInputStream")) return C$.getAudioInputStream$java_io_ByteArrayInputStream(stream);
return C$.getAudioInputStream$java_io_ByteArrayInputStream(Clazz.new_([$I$(6).getLimitedStreamBytes$java_io_InputStream$J(stream, -1)],$I$(5,1).c$$BA));
}, 1);

Clazz.newMeth(C$, 'getAudioInputStream$java_net_URL',  function (url) {
return C$.getAudioInputStream$java_io_InputStream($I$(7).getURLInputStream$java_net_URL$Z(url, false));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
