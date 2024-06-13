(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "HyperlinkEvent", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.EventObject');
C$.$classes$=[['EventType',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['desc'],'O',['type','javax.swing.event.HyperlinkEvent.EventType','u','java.net.URL','sourceElement','javax.swing.text.Element','inputEvent','java.awt.event.InputEvent']]]

Clazz.newMeth(C$, 'c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL',  function (source, type, u) {
C$.c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S.apply(this, [source, type, u, null]);
}, 1);

Clazz.newMeth(C$, 'c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S',  function (source, type, u, desc) {
C$.c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S$javax_swing_text_Element.apply(this, [source, type, u, desc, null]);
}, 1);

Clazz.newMeth(C$, 'c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S$javax_swing_text_Element',  function (source, type, u, desc, sourceElement) {
;C$.superclazz.c$$O.apply(this,[source]);C$.$init$.apply(this);
this.type=type;
this.u=u;
this.desc=desc;
this.sourceElement=sourceElement;
}, 1);

Clazz.newMeth(C$, 'c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S$javax_swing_text_Element$java_awt_event_InputEvent',  function (source, type, u, desc, sourceElement, inputEvent) {
;C$.superclazz.c$$O.apply(this,[source]);C$.$init$.apply(this);
this.type=type;
this.u=u;
this.desc=desc;
this.sourceElement=sourceElement;
this.inputEvent=inputEvent;
}, 1);

Clazz.newMeth(C$, 'getEventType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.desc;
});

Clazz.newMeth(C$, 'getURL$',  function () {
return this.u;
});

Clazz.newMeth(C$, 'getSourceElement$',  function () {
return this.sourceElement;
});

Clazz.newMeth(C$, 'getInputEvent$',  function () {
return this.inputEvent;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.HyperlinkEvent, "EventType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['typeString']]
,['O',['ENTERED','javax.swing.event.HyperlinkEvent.EventType','+EXITED','+ACTIVATED']]]

Clazz.newMeth(C$, 'c$$S',  function (s) {
;C$.$init$.apply(this);
this.typeString=s;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.typeString;
});

C$.$static$=function(){C$.$static$=0;
C$.ENTERED=Clazz.new_(C$.c$$S,["ENTERED"]);
C$.EXITED=Clazz.new_(C$.c$$S,["EXITED"]);
C$.ACTIVATED=Clazz.new_(C$.c$$S,["ACTIVATED"]);
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
