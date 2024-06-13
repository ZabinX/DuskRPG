(function(){var P$=Clazz.newPackage("swingjs.api.js"),I$=[[0,'java.awt.Dimension','java.awt.image.BufferedImage','swingjs.api.js.HTML5Canvas','java.awt.event.ActionEvent','java.util.ArrayList','javax.swing.ImageIcon','java.nio.file.Files','java.io.File','javax.swing.JLabel',['swingjs.api.js.HTML5Video','.HTML5VideoDialog'],'javax.swing.BoxLayout','swingjs.api.js.HTML5Video','javax.swing.JPanel','javax.swing.JButton']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "HTML5Video", function(){
}, null, 'swingjs.api.js.DOMNode');
C$.$classes$=[['HTML5VideoDialog',9]];

C$.$clinit$=2;

C$.$fields$=[[]
,['O',['eventTypes','String[]']]]

Clazz.newMeth(C$, 'getDuration',  function (v) {
return v.duration ||0;
}, 1);

Clazz.newMeth(C$, 'setCurrentTime',  function (v, time) {
return v.currentTime = time||0;
}, 1);

Clazz.newMeth(C$, 'getCurrentTime',  function (v) {
return v.currentTime||0;
}, 1);

Clazz.newMeth(C$, 'getErrorMessage',  function (v) {
return v.error && v.error.message ||null;
}, 1);

Clazz.newMeth(C$, 'getSize',  function (v) {
return Clazz.new_($I$(1,1).c$$I$I,[v.videoWidth ||0, v.videoHeight||0]);
}, 1);

Clazz.newMeth(C$, 'getImage',  function (v, imageType) {
var d=C$.getSize(v);
var image=C$.getProperty(v, "_image");
if (image == null  || image.getWidth$() != d.width  || image.getHeight$() != d.height ) {
if (d.width == 0 || d.height == 0 ) return null;
image=Clazz.new_([d.width, d.height, imageType == -2147483648 ? -6 : imageType],$I$(2,1).c$$I$I$I);
C$.setProperty(v, "_image", image);
}$I$(3).setImageNode(v, image);
return image;
}, 1);

Clazz.newMeth(C$, 'setProperty',  function (jsvideo, key, value) {
if (Clazz.instanceOf(value, "java.lang.Number")) {

jsvideo[key] = +value;
} else if (Clazz.instanceOf(value, "java.lang.Boolean")) {

jsvideo[key] = !!+value
} else {

jsvideo[key] = value;
}}, 1);

Clazz.newMeth(C$, 'getProperty',  function (jsvideo, key) {
var val=(1? jsvideo[key] :null);
if (val == null ) return null;
switch (typeof val ||"") {
case "number":
return Double.valueOf$D(val ||0);
case "boolean":
return Boolean.valueOf$Z(val ||false);
default:
return val;
}
}, 1);

Clazz.newMeth(C$, 'addActionListener',  function (jsvideo, listener, events) {
if (events == null  || events.length == 0 ) events=C$.eventTypes;
var f=((P$.HTML5Video$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "HTML5Video$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'apply$O',  function (jsevent) {
var name=(jsevent.type ||"?");
var e=Clazz.new_([Clazz.array(java.lang.Object, -1, [this.$finals$.jsvideo, jsevent]), 12345, name, System.currentTimeMillis$(), 0],$I$(4,1).c$$O$I$S$J$I);
this.$finals$.listener.actionPerformed$java_awt_event_ActionEvent(e);
return null;
});
})()
), Clazz.new_(P$.HTML5Video$1.$init$,[this, {jsvideo:jsvideo,listener:listener}]));
var listeners=Clazz.new_($I$(5,1));
for (var i=0; i < events.length; i++) {
var func=function(event){f.apply$O.apply(f, [event])} ||null;
listeners.add$O(events[i]);
listeners.add$O(func);
if (jsvideo != null ) jsvideo.addEventListener(events[i], func);
}
return listeners.toArray$OA(Clazz.array(java.lang.Object, [listeners.size$()]));
}, 1);

Clazz.newMeth(C$, 'removeActionListener',  function (jsvideo, listeners) {
if (listeners == null ) {
for (var i=0; i < C$.eventTypes.length; i++) {
jsvideo.removeEventListener(C$.eventTypes[i]);
}
return;
}for (var i=0; i < listeners.length; i+=2) {
var event=listeners[i];
var listener=listeners[i + 1];
jsvideo.removeEventListener(event, listener);
}
}, 1);

Clazz.newMeth(C$, 'createIcon',  function (source) {
try {
if (Clazz.instanceOf(source, "java.net.URL")) {
return Clazz.new_($I$(6,1).c$$java_net_URL$S,[source, "jsvideo"]);
} else if (Clazz.instanceOf(source, Clazz.array(Byte.TYPE, -1))) {
return Clazz.new_($I$(6,1).c$$BA$S,[source, "jsvideo"]);
} else if (Clazz.instanceOf(source, "java.io.File")) {
return Clazz.new_([$I$(7,"readAllBytes$java_nio_file_Path",[(source).toPath$()])],$I$(6,1).c$$BA);
} else {
return Clazz.new_([$I$(7,"readAllBytes$java_nio_file_Path",[Clazz.new_([source.toString()],$I$(8,1).c$$S).toPath$()])],$I$(6,1).c$$BA);
}} catch (t) {
return null;
}
}, 1);

Clazz.newMeth(C$, 'createLabel',  function (source) {
var icon=(Clazz.instanceOf(source, "javax.swing.ImageIcon") ? source : C$.createIcon(source));
return (icon == null  ? null : Clazz.new_($I$(9,1).c$$javax_swing_Icon,[icon]));
}, 1);

Clazz.newMeth(C$, 'createDialog',  function (parent, source, maxWidth, whenReady) {
return C$.createDialog(parent, source, maxWidth, true, whenReady);
}, 1);

Clazz.newMeth(C$, 'createDialog',  function (parent, source, maxWidth, addControls, whenReady) {
var dialog=Clazz.new_($I$(10,1),[parent]);
var p=dialog.getContentPane$();
p.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11,1).c$$java_awt_Container$I,[p, 1]));
var label=(Clazz.instanceOf(source, "javax.swing.JLabel") ? source : C$.createLabel(source));
label.setAlignmentX$F(0.5);
p.add$java_awt_Component(label);
label.setVisible$Z(false);
var q=dialog.controls=C$.getControls(label);
p.add$java_awt_Component(q);
q.setVisible$Z(addControls);
label.putClientProperty$O$O("controls", q);
dialog.setModal$Z(false);
dialog.pack$();
dialog.setVisible$Z(true);
dialog.setVisible$Z(false);
var jsvideo=label.getClientProperty$O("jsvideo");

jsvideo.dialog = dialog;
var j2sListener=C$.addActionListener(jsvideo, ((P$.HTML5Video$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "HTML5Video$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.$finals$.label.getClientProperty$O("jsvideo.size") != null ) return;
var dim=$I$(12).getSize(this.$finals$.jsvideo);
while (dim.width > this.$finals$.maxWidth){
dim.width=(dim.width/(2)|0);
dim.height=(dim.height/(2)|0);
}
this.$finals$.label.putClientProperty$O$O("jsvideo.size", dim);
this.$finals$.label.setPreferredSize$java_awt_Dimension(dim);
this.$finals$.label.setVisible$Z(true);
this.$finals$.dialog.pack$();
if (this.$finals$.whenReady != null ) this.$finals$.whenReady.apply$O(this.$finals$.jsvideo);
$I$(12,"removeActionListener",[this.$finals$.jsvideo, $I$(12).getProperty(this.$finals$.jsvideo, "j2sListener")]);
});
})()
), Clazz.new_(P$.HTML5Video$2.$init$,[this, {label:label,whenReady:whenReady,jsvideo:jsvideo,dialog:dialog,maxWidth:maxWidth}])), ["canplaythrough"]);
C$.setProperty(jsvideo, "j2sListener", j2sListener);
C$.setCurrentTime(jsvideo, 0);
return dialog;
}, 1);

Clazz.newMeth(C$, 'cancelVideoFrameCallback',  function (jsvideo) {

jsvideo._cancelVFCallback = true;
}, 1);

Clazz.newMeth(C$, 'requestVideoFrameCallback',  function (jsvideo, a) {
var f=null;

if (jsvideo.requestVideoFrameCallback) { jsvideo._cancelVFCallback = false;
var ff = function(now,metadata){ a.actionPerformed$java_awt_event_ActionEvent( [jsvideo,now,metadata]);
};
f = [];
f[0] = function(now, metadata) { if (jsvideo._cancelVFCallback) { jsvideo._cancelVFCallback = false;
} else { ff(now, metadata);
jsvideo.requestVideoFrameCallback(f[0]);
} };
}
if (f == null ) return 0;
var id=0;
try {
id=jsvideo.requestVideoFrameCallback(f[0]);
} catch (e) {
e.printStackTrace$();
}
return id;
}, 1);

Clazz.newMeth(C$, 'getControls',  function (label) {
var controls=Clazz.new_($I$(13,1));
controls.setAlignmentX$F(0.5);
var btn=Clazz.new_($I$(14,1).c$$S,["play"]);
btn.addActionListener$java_awt_event_ActionListener(((P$.HTML5Video$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "HTML5Video$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
(this.$finals$.label.getClientProperty$O("jsvideo")).play();
} catch (e1) {
e1.printStackTrace$();
}
});
})()
), Clazz.new_(P$.HTML5Video$3.$init$,[this, {label:label}])));
controls.add$java_awt_Component(btn);
btn=Clazz.new_($I$(14,1).c$$S,["pause"]);
btn.addActionListener$java_awt_event_ActionListener(((P$.HTML5Video$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "HTML5Video$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
(this.$finals$.label.getClientProperty$O("jsvideo")).pause();
} catch (e1) {
e1.printStackTrace$();
}
});
})()
), Clazz.new_(P$.HTML5Video$4.$init$,[this, {label:label}])));
controls.add$java_awt_Component(btn);
btn=Clazz.new_($I$(14,1).c$$S,["reset"]);
btn.addActionListener$java_awt_event_ActionListener(((P$.HTML5Video$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "HTML5Video$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(12,"setCurrentTime",[this.$finals$.label.getClientProperty$O("jsvideo"), 0]);
});
})()
), Clazz.new_(P$.HTML5Video$5.$init$,[this, {label:label}])));
controls.add$java_awt_Component(btn);
return controls;
}, 1);

Clazz.newMeth(C$, 'nextFrame',  function (jsvideo, dt) {
var canSeek=C$.getProperty(jsvideo, "_canseek");
if (canSeek == null ) {
C$.setProperty(jsvideo, "_canseek", canSeek=Boolean.valueOf$Z(C$.getProperty(jsvideo, "seekToNextFrame") != null ));
}try {
if ((canSeek).valueOf()) {
jsvideo.seekToNextFrame();
} else {
C$.setCurrentTime(jsvideo, C$.getCurrentTime(jsvideo) + dt);
}} catch (e1) {
}
return canSeek.booleanValue$();
}, 1);

Clazz.newMeth(C$, 'getFrameCount',  function (jsvideo) {
return ((C$.getDuration(jsvideo) / 0.033334)|0);
}, 1);

Clazz.newMeth(C$, 'startVideo',  function (jsvideo) {
var d=jsvideo.dialog ||null;
try {

var promise = jsvideo.play();
if (promise !== undefined) { promise["catch"](function(){ d.controls.setVisible$Z(true);d.pack$();
if (!d.t) d.t = setTimeout(function(){ alert("Please press OK and then the play button.")} ,1000); }); }
} catch (e) {
e.printStackTrace$();
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.eventTypes=Clazz.array(String, -1, ["audioprocess", "canplay", "canplaythrough", "complete", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTML5Video, "HTML5VideoDialog", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JDialog');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['controls','javax.swing.JPanel']]]

Clazz.newMeth(C$, 'c$',  function (parent) {
;C$.superclazz.c$$java_awt_Frame.apply(this,[parent]);C$.$init$.apply(this);
}, 1);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-07 05:40:23 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
