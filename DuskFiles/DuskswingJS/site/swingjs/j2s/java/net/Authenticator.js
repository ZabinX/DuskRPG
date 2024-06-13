(function(){var P$=Clazz.newPackage("java.net"),p$1={},I$=[[0,['java.net.Authenticator','.RequestorType']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Authenticator", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['RequestorType',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['requestingPort'],'S',['requestingHost','requestingProtocol','requestingPrompt','requestingScheme'],'O',['requestingSite','java.net.InetAddress','requestingURL','java.net.URL','requestingAuthType','java.net.Authenticator.RequestorType']]
,['O',['theAuthenticator','java.net.Authenticator']]]

Clazz.newMeth(C$, 'reset',  function () {
this.requestingHost=null;
this.requestingSite=null;
this.requestingPort=-1;
this.requestingProtocol=null;
this.requestingPrompt=null;
this.requestingScheme=null;
this.requestingURL=null;
this.requestingAuthType=$I$(1).SERVER;
}, p$1);

Clazz.newMeth(C$, 'setDefault$java_net_Authenticator',  function (a) {
C$.theAuthenticator=a;
}, 1);

Clazz.newMeth(C$, 'requestPasswordAuthentication$java_net_InetAddress$I$S$S$S',  function (addr, port, protocol, prompt, scheme) {
var a=C$.theAuthenticator;
if (a == null ) {
return null;
} else {
{
p$1.reset.apply(a, []);
a.requestingSite=addr;
a.requestingPort=port;
a.requestingProtocol=protocol;
a.requestingPrompt=prompt;
a.requestingScheme=scheme;
return a.getPasswordAuthentication$();
}}}, 1);

Clazz.newMeth(C$, 'requestPasswordAuthentication$S$java_net_InetAddress$I$S$S$S',  function (host, addr, port, protocol, prompt, scheme) {
var a=C$.theAuthenticator;
if (a == null ) {
return null;
} else {
{
p$1.reset.apply(a, []);
a.requestingHost=host;
a.requestingSite=addr;
a.requestingPort=port;
a.requestingProtocol=protocol;
a.requestingPrompt=prompt;
a.requestingScheme=scheme;
return a.getPasswordAuthentication$();
}}}, 1);

Clazz.newMeth(C$, 'requestPasswordAuthentication$S$java_net_InetAddress$I$S$S$S$java_net_URL$java_net_Authenticator_RequestorType',  function (host, addr, port, protocol, prompt, scheme, url, reqType) {
var a=C$.theAuthenticator;
if (a == null ) {
return null;
} else {
{
p$1.reset.apply(a, []);
a.requestingHost=host;
a.requestingSite=addr;
a.requestingPort=port;
a.requestingProtocol=protocol;
a.requestingPrompt=prompt;
a.requestingScheme=scheme;
a.requestingURL=url;
a.requestingAuthType=reqType;
return a.getPasswordAuthentication$();
}}}, 1);

Clazz.newMeth(C$, 'getRequestingHost$',  function () {
return this.requestingHost;
});

Clazz.newMeth(C$, 'getRequestingSite$',  function () {
return this.requestingSite;
});

Clazz.newMeth(C$, 'getRequestingPort$',  function () {
return this.requestingPort;
});

Clazz.newMeth(C$, 'getRequestingProtocol$',  function () {
return this.requestingProtocol;
});

Clazz.newMeth(C$, 'getRequestingPrompt$',  function () {
return this.requestingPrompt;
});

Clazz.newMeth(C$, 'getRequestingScheme$',  function () {
return this.requestingScheme;
});

Clazz.newMeth(C$, 'getPasswordAuthentication$',  function () {
return null;
});

Clazz.newMeth(C$, 'getRequestingURL$',  function () {
return this.requestingURL;
});

Clazz.newMeth(C$, 'getRequestorType$',  function () {
return this.requestingAuthType;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.Authenticator, "RequestorType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "PROXY", 0, []);
Clazz.newEnumConst($vals, C$.c$, "SERVER", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:19 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
