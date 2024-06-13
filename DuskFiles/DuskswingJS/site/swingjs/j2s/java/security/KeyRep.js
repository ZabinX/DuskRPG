(function(){var P$=Clazz.newPackage("java.security"),I$=[[0,'java.util.Locale',['java.security.KeyRep','.Type'],'javax.crypto.spec.SecretKeySpec','java.security.KeyFactory','java.security.spec.X509EncodedKeySpec','java.security.spec.PKCS8EncodedKeySpec']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "KeyRep", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['Type',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['algorithm','format'],'O',['type','java.security.KeyRep.Type','encoded','byte[]']]]

Clazz.newMeth(C$, 'c$$java_security_KeyRep_Type$S$S$BA',  function (type, algorithm, format, encoded) {
;C$.$init$.apply(this);
if (type == null  || algorithm == null   || format == null   || encoded == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["invalid null input(s)"]);
}this.type=type;
this.algorithm=algorithm;
this.format=format.toUpperCase$java_util_Locale($I$(1).ENGLISH);
this.encoded=encoded.clone$();
}, 1);

Clazz.newMeth(C$, 'readResolve$',  function () {
try {
if (this.type === $I$(2).SECRET  && "RAW".equals$O(this.format) ) {
return Clazz.new_($I$(3,1).c$$BA$S,[this.encoded, this.algorithm]);
} else if (this.type === $I$(2).PUBLIC  && "X.509".equals$O(this.format) ) {
var f=$I$(4).getInstance$S(this.algorithm);
return f.generatePublic$java_security_spec_KeySpec(Clazz.new_($I$(5,1).c$$BA,[this.encoded]));
} else if (this.type === $I$(2).PRIVATE  && "PKCS#8".equals$O(this.format) ) {
var f=$I$(4).getInstance$S(this.algorithm);
return f.generatePrivate$java_security_spec_KeySpec(Clazz.new_($I$(6,1).c$$BA,[this.encoded]));
} else {
throw Clazz.new_(Clazz.load('java.io.NotSerializableException').c$$S,["unrecognized type/format combination: " + this.type + "/" + this.format ]);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.NotSerializableException")){
var nse = e$$;
{
throw nse;
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
var nse=Clazz.new_(Clazz.load('java.io.NotSerializableException').c$$S,["java.security.Key: [" + this.type + "] " + "[" + this.algorithm + "] " + "[" + this.format + "]" ]);
nse.initCause$Throwable(e);
throw nse;
}
} else {
throw e$$;
}
}
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.KeyRep, "Type", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "SECRET", 0, []);
Clazz.newEnumConst($vals, C$.c$, "PUBLIC", 1, []);
Clazz.newEnumConst($vals, C$.c$, "PRIVATE", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
