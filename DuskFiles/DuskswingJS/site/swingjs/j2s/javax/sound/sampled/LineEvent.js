(function(){var P$=Clazz.newPackage("javax.sound.sampled"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LineEvent", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.EventObject');
C$.$classes$=[['Type',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['position'],'O',['type','javax.sound.sampled.LineEvent.Type']]]

Clazz.newMeth(C$, 'c$$javax_sound_sampled_Line$javax_sound_sampled_LineEvent_Type$J',  function (line, type, position) {
;C$.superclazz.c$$O.apply(this,[line]);C$.$init$.apply(this);
this.type=type;
this.position=position;
}, 1);

Clazz.newMeth(C$, 'getLine$',  function () {
return this.getSource$();
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'getFramePosition$',  function () {
return this.position;
});

Clazz.newMeth(C$, 'toString',  function () {
var sType="";
if (this.type != null ) sType=this.type.toString() + " ";
var sLine;
if (this.getLine$() == null ) {
sLine="null";
} else {
sLine=this.getLine$().toString();
}return  String.instantialize(sType + "event from line " + sLine );
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.LineEvent, "Type", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]
,['O',['OPEN','javax.sound.sampled.LineEvent.Type','+CLOSE','+START','+STOP']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (obj) {
return C$.superclazz.prototype.equals$O.apply(this, [obj]);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return C$.superclazz.prototype.hashCode$.apply(this, []);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

C$.$static$=function(){C$.$static$=0;
C$.OPEN=Clazz.new_(C$.c$$S,["Open"]);
C$.CLOSE=Clazz.new_(C$.c$$S,["Close"]);
C$.START=Clazz.new_(C$.c$$S,["Start"]);
C$.STOP=Clazz.new_(C$.c$$S,["Stop"]);
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
