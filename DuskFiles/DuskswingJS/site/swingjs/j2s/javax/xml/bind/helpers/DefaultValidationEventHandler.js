(function(){var P$=Clazz.newPackage("javax.xml.bind.helpers"),p$1={},I$=[[0,'javax.xml.bind.helpers.Messages','StringBuffer']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultValidationEventHandler", null, null, 'javax.xml.bind.ValidationEventHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'handleEvent$javax_xml_bind_ValidationEvent',  function (event) {
if (event == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}var severity=null;
var retVal=false;
switch (event.getSeverity$()) {
case 0:
severity=$I$(1).format$S("DefaultValidationEventHandler.Warning");
retVal=true;
break;
case 1:
severity=$I$(1).format$S("DefaultValidationEventHandler.Error");
retVal=false;
break;
case 2:
severity=$I$(1).format$S("DefaultValidationEventHandler.FatalError");
retVal=false;
break;
default:
Clazz.assert(C$, this, function(){return false}, function(){return $I$(1,"format$S$O",["DefaultValidationEventHandler.UnrecognizedSeverity", Integer.valueOf$I(event.getSeverity$())])});
}
var location=p$1.getLocation$javax_xml_bind_ValidationEvent.apply(this, [event]);
System.out.println$S($I$(1,"format$S$O$O$O",["DefaultValidationEventHandler.SeverityMessage", severity, event.getMessage$(), location]));
return retVal;
});

Clazz.newMeth(C$, 'getLocation$javax_xml_bind_ValidationEvent',  function (event) {
var msg=Clazz.new_($I$(2,1));
var locator=event.getLocator$();
if (locator != null ) {
var url=locator.getURL$();
var obj=locator.getObject$();
var node=locator.getNode$();
var line=locator.getLineNumber$();
if (url != null  || line != -1 ) {
msg.append$S("line " + line);
if (url != null ) msg.append$S(" of " + url);
} else if (obj != null ) {
msg.append$S(" obj: " + obj.toString());
} else if (node != null ) {
msg.append$S(" node: " + node.toString());
}} else {
msg.append$S($I$(1).format$S("DefaultValidationEventHandler.LocationUnavailable"));
}return msg.toString();
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
