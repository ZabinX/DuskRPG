(function(){var P$=Clazz.newPackage("java.net"),I$=[[0,['java.net.Proxy','.Type']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Proxy", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Type',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['type','java.net.Proxy.Type','sa','java.net.SocketAddress']]
,['O',['NO_PROXY','java.net.Proxy']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.type=$I$(1).DIRECT;
this.sa=null;
}, 1);

Clazz.newMeth(C$, 'c$$java_net_Proxy_Type$java_net_SocketAddress',  function (type, sa) {
;C$.$init$.apply(this);
if ((type === $I$(1).DIRECT ) || !(Clazz.instanceOf(sa, "java.net.InetSocketAddress")) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["type " + type + " is not compatible with address " + sa ]);
this.type=type;
this.sa=sa;
}, 1);

Clazz.newMeth(C$, 'type$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'address$',  function () {
return this.sa;
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.type$() === $I$(1).DIRECT ) return "DIRECT";
return this.type$() + " @ " + this.address$() ;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null  || !(Clazz.instanceOf(obj, "java.net.Proxy")) ) return false;
var p=obj;
if (p.type$() === this.type$() ) {
if (this.address$() == null ) {
return (p.address$() == null );
} else return this.address$().equals$O(p.address$());
}return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.address$() == null ) return this.type$().hashCode$();
return this.type$().hashCode$() + this.address$().hashCode$();
});

C$.$static$=function(){C$.$static$=0;
C$.NO_PROXY=Clazz.new_(C$);
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.Proxy, "Type", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "DIRECT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "HTTP", 1, []);
Clazz.newEnumConst($vals, C$.c$, "SOCKS", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:19 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
