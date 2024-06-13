(function(){var P$=Clazz.newPackage("javax.xml.transform"),I$=[[0,'java.security.AccessController','Thread','java.io.FileInputStream']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SecuritySupport");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getContextClassLoader$',  function () {
return $I$(1,"doPrivileged$java_security_PrivilegedAction",[((P$.SecuritySupport$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SecuritySupport$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var cl=null;
cl=$I$(2).currentThread$().getContextClassLoader$();
if (cl == null ) cl=ClassLoader.getSystemClassLoader$();
return cl;
});
})()
), Clazz.new_(P$.SecuritySupport$1.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'getSystemProperty$S',  function (propName) {
return $I$(1,"doPrivileged$java_security_PrivilegedAction",[((P$.SecuritySupport$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "SecuritySupport$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return System.getProperty$S(this.$finals$.propName);
});
})()
), Clazz.new_(P$.SecuritySupport$2.$init$,[this, {propName:propName}]))]);
});

Clazz.newMeth(C$, 'getFileInputStream$java_io_File',  function (file) {
try {
return $I$(1,"doPrivileged$java_security_PrivilegedExceptionAction",[((P$.SecuritySupport$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "SecuritySupport$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return Clazz.new_($I$(3,1).c$$java_io_File,[this.$finals$.file]);
});
})()
), Clazz.new_(P$.SecuritySupport$3.$init$,[this, {file:file}]))]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.PrivilegedActionException")){
throw e.getException$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getResourceAsStream$ClassLoader$S',  function (cl, name) {
return $I$(1,"doPrivileged$java_security_PrivilegedAction",[((P$.SecuritySupport$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "SecuritySupport$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var ris;
if (this.$finals$.cl == null ) {
ris=Clazz.getClass(java.lang.Object).getResourceAsStream$S(this.$finals$.name);
} else {
ris=this.$finals$.cl.getResourceAsStream$S(this.$finals$.name);
}return ris;
});
})()
), Clazz.new_(P$.SecuritySupport$4.$init$,[this, {cl:cl,name:name}]))]);
});

Clazz.newMeth(C$, 'doesFileExist$java_io_File',  function (f) {
return ($I$(1,"doPrivileged$java_security_PrivilegedAction",[((P$.SecuritySupport$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "SecuritySupport$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return  Boolean.from(this.$finals$.f.exists$());
});
})()
), Clazz.new_(P$.SecuritySupport$5.$init$,[this, {f:f}]))])).booleanValue$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
