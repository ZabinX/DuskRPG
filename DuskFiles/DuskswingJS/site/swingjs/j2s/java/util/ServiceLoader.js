(function(){var P$=java.util,p$1={},I$=[[0,'java.util.ServiceLoader','Error','java.security.AccessController','java.util.LinkedHashMap',['java.util.ServiceLoader','.LazyIterator'],'java.util.Objects','java.util.ServiceConfigurationError','Thread']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ServiceLoader", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Iterable');
C$.$classes$=[['LazyIterator',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.providers=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['O',['service','Class','loader','ClassLoader','acc','java.security.AccessControlContext','providers','java.util.LinkedHashMap','lookupIterator','java.util.ServiceLoader.LazyIterator']]]

Clazz.newMeth(C$, 'reload$',  function () {
this.providers.clear$();
this.lookupIterator=Clazz.new_($I$(5,1).c$$Class$ClassLoader,[this, null, this.service, this.loader]);
});

Clazz.newMeth(C$, 'c$$Class$ClassLoader',  function (svc, cl) {
;C$.$init$.apply(this);
this.service=$I$(6).requireNonNull$O$S(svc, "Service interface cannot be null");
this.loader=(cl == null ) ? ClassLoader.getSystemClassLoader$() : cl;
this.acc=null;
this.reload$();
}, 1);

Clazz.newMeth(C$, 'fail$Class$S$Throwable',  function (service, msg, cause) {
throw Clazz.new_([service.getName$() + ": " + msg , cause],$I$(7,1).c$$S$Throwable);
}, 1);

Clazz.newMeth(C$, 'fail$Class$S',  function (service, msg) {
throw Clazz.new_([service.getName$() + ": " + msg ],$I$(7,1).c$$S);
}, 1);

Clazz.newMeth(C$, 'iterator$',  function () {
return ((P$.ServiceLoader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ServiceLoader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.knownProviders=this.b$['java.util.ServiceLoader'].providers.entrySet$().iterator$();
},1);

C$.$fields$=[['O',['knownProviders','java.util.Iterator']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
if (this.knownProviders.hasNext$()) return true;
return this.b$['java.util.ServiceLoader'].lookupIterator.hasNext$();
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.knownProviders.hasNext$()) return this.knownProviders.next$().getValue$();
return this.b$['java.util.ServiceLoader'].lookupIterator.next$();
});

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.ServiceLoader$1.$init$,[this, null]));
});

Clazz.newMeth(C$, 'load$Class$ClassLoader',  function (service, loader) {
return Clazz.new_(C$.c$$Class$ClassLoader,[service, loader]);
}, 1);

Clazz.newMeth(C$, 'load$Class',  function (service) {
var cl=$I$(8).currentThread$().getContextClassLoader$();
return C$.load$Class$ClassLoader(service, cl);
}, 1);

Clazz.newMeth(C$, 'loadInstalled$Class',  function (service) {
var cl=ClassLoader.getSystemClassLoader$();
var prev=null;
while (cl != null ){
prev=cl;
cl=cl.getParent$();
}
return C$.load$Class$ClassLoader(service, prev);
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "java.util.ServiceLoader[" + this.service.getName$() + "]" ;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ServiceLoader, "LazyIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nextName=null;
},1);

C$.$fields$=[['S',['nextName'],'O',['service','Class','loader','ClassLoader']]]

Clazz.newMeth(C$, 'c$$Class$ClassLoader',  function (service, loader) {
;C$.$init$.apply(this);
this.service=service;
this.loader=loader;
}, 1);

Clazz.newMeth(C$, 'hasNextService',  function () {
return false;
}, p$1);

Clazz.newMeth(C$, 'nextService',  function () {
if (!p$1.hasNextService.apply(this, [])) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
var cn=this.nextName;
this.nextName=null;
var c=null;
try {
c=Clazz.forName(cn, false, this.loader);
} catch (x) {
if (Clazz.exceptionOf(x,"ClassNotFoundException")){
$I$(1).fail$Class$S(this.service, "Provider " + cn + " not found" );
} else {
throw x;
}
}
if (!this.service.isAssignableFrom$Class(c)) {
$I$(1).fail$Class$S(this.service, "Provider " + cn + " not a subtype" );
}try {
var p=this.service.cast$O(c.newInstance$());
this.b$['java.util.ServiceLoader'].providers.put$O$O(cn, p);
return p;
} catch (x) {
$I$(1).fail$Class$S$Throwable(this.service, "Provider " + cn + " could not be instantiated" , x);
}
throw Clazz.new_($I$(2,1));
}, p$1);

Clazz.newMeth(C$, 'hasNext$',  function () {
if (this.b$['java.util.ServiceLoader'].acc == null ) {
return p$1.hasNextService.apply(this, []);
} else {
var action=((P$.ServiceLoader$LazyIterator$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ServiceLoader$LazyIterator$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return Boolean.valueOf$Z(p$1.hasNextService.apply(this.b$['java.util.ServiceLoader.LazyIterator'], []));
});
})()
), Clazz.new_(P$.ServiceLoader$LazyIterator$1.$init$,[this, null]));
return ($I$(3).doPrivileged$java_security_PrivilegedAction$java_security_AccessControlContext(action, this.b$['java.util.ServiceLoader'].acc)).valueOf();
}});

Clazz.newMeth(C$, 'next$',  function () {
if (this.b$['java.util.ServiceLoader'].acc == null ) {
return p$1.nextService.apply(this, []);
} else {
var action=((P$.ServiceLoader$LazyIterator$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ServiceLoader$LazyIterator$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return p$1.nextService.apply(this.b$['java.util.ServiceLoader.LazyIterator'], []);
});
})()
), Clazz.new_(P$.ServiceLoader$LazyIterator$2.$init$,[this, null]));
return $I$(3).doPrivileged$java_security_PrivilegedAction$java_security_AccessControlContext(action, this.b$['java.util.ServiceLoader'].acc);
}});

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
