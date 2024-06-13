(function(){var P$=Clazz.newPackage("java.security"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "URIParameter", null, null, [['java.security.Policy','java.security.Policy.Parameters'], ['javax.security.auth.login.Configuration','javax.security.auth.login.Configuration.Parameters']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['uri','java.net.URI']]]

Clazz.newMeth(C$, 'c$$java_net_URI',  function (uri) {
;C$.$init$.apply(this);
if (uri == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["invalid null URI"]);
}this.uri=uri;
}, 1);

Clazz.newMeth(C$, 'getURI$',  function () {
return this.uri;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
