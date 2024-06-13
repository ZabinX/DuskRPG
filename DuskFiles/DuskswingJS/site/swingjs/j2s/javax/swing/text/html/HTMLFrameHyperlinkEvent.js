(function(){var P$=Clazz.newPackage("javax.swing.text.html"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "HTMLFrameHyperlinkEvent", null, 'javax.swing.event.HyperlinkEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['targetFrame']]]

Clazz.newMeth(C$, 'c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S',  function (source, type, targetURL, targetFrame) {
;C$.superclazz.c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL.apply(this,[source, type, targetURL]);C$.$init$.apply(this);
this.targetFrame=targetFrame;
}, 1);

Clazz.newMeth(C$, 'c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S$S',  function (source, type, targetURL, desc, targetFrame) {
;C$.superclazz.c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S.apply(this,[source, type, targetURL, desc]);C$.$init$.apply(this);
this.targetFrame=targetFrame;
}, 1);

Clazz.newMeth(C$, 'c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$javax_swing_text_Element$S',  function (source, type, targetURL, sourceElement, targetFrame) {
;C$.superclazz.c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S$javax_swing_text_Element.apply(this,[source, type, targetURL, null, sourceElement]);C$.$init$.apply(this);
this.targetFrame=targetFrame;
}, 1);

Clazz.newMeth(C$, 'c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S$javax_swing_text_Element$S',  function (source, type, targetURL, desc, sourceElement, targetFrame) {
;C$.superclazz.c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S$javax_swing_text_Element.apply(this,[source, type, targetURL, desc, sourceElement]);C$.$init$.apply(this);
this.targetFrame=targetFrame;
}, 1);

Clazz.newMeth(C$, 'c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S$javax_swing_text_Element$java_awt_event_InputEvent$S',  function (source, type, targetURL, desc, sourceElement, inputEvent, targetFrame) {
;C$.superclazz.c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S$javax_swing_text_Element$java_awt_event_InputEvent.apply(this,[source, type, targetURL, desc, sourceElement, inputEvent]);C$.$init$.apply(this);
this.targetFrame=targetFrame;
}, 1);

Clazz.newMeth(C$, 'getTarget$',  function () {
return this.targetFrame;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
