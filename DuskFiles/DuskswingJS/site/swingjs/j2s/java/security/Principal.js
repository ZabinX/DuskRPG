(function(){var P$=Clazz.newPackage("java.security"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "Principal");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'implies$javax_security_auth_Subject',  function (subject) {
if (subject == null ) return false;
return subject.getPrincipals$().contains$O(this);
});
};})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
