(function(){var P$=Clazz.newPackage("javax.swing.text.html"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FormSubmitEvent", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.html.HTMLFrameHyperlinkEvent');
C$.$classes$=[['MethodType',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['data'],'O',['method','javax.swing.text.html.FormSubmitEvent.MethodType']]]

Clazz.newMeth(C$, 'c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$javax_swing_text_Element$S$javax_swing_text_html_FormSubmitEvent_MethodType$S',  function (source, type, targetURL, sourceElement, targetFrame, method, data) {
;C$.superclazz.c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$javax_swing_text_Element$S.apply(this,[source, type, targetURL, sourceElement, targetFrame]);C$.$init$.apply(this);
this.method=method;
this.data=data;
}, 1);

Clazz.newMeth(C$, 'getMethod$',  function () {
return this.method;
});

Clazz.newMeth(C$, 'getData$',  function () {
return this.data;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.FormSubmitEvent, "MethodType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "GET", 0, []);
Clazz.newEnumConst($vals, C$.c$, "POST", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
