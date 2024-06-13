(function(){var P$=Clazz.newPackage("javax.sound.sampled"),I$=[[0,'java.util.HashMap','java.util.Collections','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AudioFileFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Type',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['byteLength','frameLength'],'O',['type','javax.sound.sampled.AudioFileFormat.Type','format','javax.sound.sampled.AudioFormat','properties','java.util.HashMap']]]

Clazz.newMeth(C$, 'c$$javax_sound_sampled_AudioFileFormat_Type$I$javax_sound_sampled_AudioFormat$I',  function (type, byteLength, format, frameLength) {
;C$.$init$.apply(this);
this.type=type;
this.byteLength=byteLength;
this.format=format;
this.frameLength=frameLength;
this.properties=null;
}, 1);

Clazz.newMeth(C$, 'c$$javax_sound_sampled_AudioFileFormat_Type$javax_sound_sampled_AudioFormat$I',  function (type, format, frameLength) {
C$.c$$javax_sound_sampled_AudioFileFormat_Type$I$javax_sound_sampled_AudioFormat$I.apply(this, [type, -1, format, frameLength]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_sound_sampled_AudioFileFormat_Type$javax_sound_sampled_AudioFormat$I$java_util_Map',  function (type, format, frameLength, properties) {
C$.c$$javax_sound_sampled_AudioFileFormat_Type$I$javax_sound_sampled_AudioFormat$I.apply(this, [type, -1, format, frameLength]);
this.properties=Clazz.new_($I$(1,1).c$$java_util_Map,[properties]);
}, 1);

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'getByteLength$',  function () {
return this.byteLength;
});

Clazz.newMeth(C$, 'getFormat$',  function () {
return this.format;
});

Clazz.newMeth(C$, 'getFrameLength$',  function () {
return this.frameLength;
});

Clazz.newMeth(C$, 'properties$',  function () {
var ret;
if (this.properties == null ) {
ret=Clazz.new_($I$(1,1).c$$I,[0]);
} else {
ret=(this.properties.clone$());
}return $I$(2).unmodifiableMap$java_util_Map(ret);
});

Clazz.newMeth(C$, 'getProperty$S',  function (key) {
if (this.properties == null ) {
return null;
}return this.properties.get$O(key);
});

Clazz.newMeth(C$, 'toString',  function () {
var buf=Clazz.new_($I$(3,1));
if (this.type != null ) {
buf.append$S(this.type.toString() + " (." + this.type.getExtension$() + ") file" );
} else {
buf.append$S("unknown file format");
}if (this.byteLength != -1) {
buf.append$S(", byte length: " + this.byteLength);
}buf.append$S(", data format: " + this.format);
if (this.frameLength != -1) {
buf.append$S(", frame length: " + this.frameLength);
}return  String.instantialize(buf);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AudioFileFormat, "Type", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name','extension']]
,['O',['WAVE','javax.sound.sampled.AudioFileFormat.Type','+AU','+AIFF','+AIFC','+OGG','+MP3','+SND']]]

Clazz.newMeth(C$, 'c$$S$S',  function (name, extension) {
;C$.$init$.apply(this);
this.name=name;
this.extension=extension;
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this.toString() == null ) {
return (obj != null ) && (obj.toString() == null ) ;
}if (Clazz.instanceOf(obj, "javax.sound.sampled.AudioFileFormat.Type")) {
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

Clazz.newMeth(C$, 'getExtension$',  function () {
return this.extension;
});

Clazz.newMeth(C$, 'getType$javax_sound_sampled_AudioFormat',  function (format) {
var type=format.getProperty$S("fileFormat");
if (type === "WAV" ) return C$.WAVE;
if (type === "OGG" ) return C$.OGG;
if (type === "MP3" ) return C$.MP3;
return null;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.WAVE=Clazz.new_(C$.c$$S$S,["WAVE", "wav"]);
C$.AU=Clazz.new_(C$.c$$S$S,["AU", "au"]);
C$.AIFF=Clazz.new_(C$.c$$S$S,["AIFF", "aif"]);
C$.AIFC=Clazz.new_(C$.c$$S$S,["AIFF-C", "aifc"]);
C$.OGG=Clazz.new_(C$.c$$S$S,["OGG", "ogg"]);
C$.MP3=Clazz.new_(C$.c$$S$S,["MP3", "mp3"]);
C$.SND=Clazz.new_(C$.c$$S$S,["SND", "snd"]);
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
