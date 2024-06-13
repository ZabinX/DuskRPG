(function(){var P$=java.util,I$=[[0,'java.security.SecureRandom',['java.util.UUID','.Holder'],'java.security.MessageDigest','InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UUID", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.io.Serializable', 'Comparable']);
C$.$classes$=[['Holder',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['mostSigBits','leastSigBits']]]

Clazz.newMeth(C$, 'c$$BA',  function (data) {
;C$.$init$.apply(this);
var msb=0;
var lsb=0;
Clazz.assert(C$, this, function(){return data.length == 16}, function(){return "data must be 16 bytes in length"});
for (var i=0; i < 8; i++) msb=Long.$or((Long.$sl(msb,8)),(data[i] & 255));

for (var i=8; i < 16; i++) lsb=Long.$or((Long.$sl(lsb,8)),(data[i] & 255));

this.mostSigBits=msb;
this.leastSigBits=lsb;
}, 1);

Clazz.newMeth(C$, 'c$$J$J',  function (mostSigBits, leastSigBits) {
;C$.$init$.apply(this);
this.mostSigBits=mostSigBits;
this.leastSigBits=leastSigBits;
}, 1);

Clazz.newMeth(C$, 'randomUUID$',  function () {
var ng=$I$(2).numberGenerator;
var randomBytes=Clazz.array(Byte.TYPE, [16]);
ng.nextBytes$BA(randomBytes);
randomBytes[6]=(randomBytes[6]&(15)|0);
randomBytes[6]=(randomBytes[6]|(64)|0);
randomBytes[8]=(randomBytes[8]&(63)|0);
randomBytes[8]=(randomBytes[8]|(128)|0);
return Clazz.new_(C$.c$$BA,[randomBytes]);
}, 1);

Clazz.newMeth(C$, 'nameUUIDFromBytes$BA',  function (name) {
var md;
try {
md=$I$(3).getInstance$S("MD5");
} catch (nsae) {
if (Clazz.exceptionOf(nsae,"java.security.NoSuchAlgorithmException")){
throw Clazz.new_($I$(4,1).c$$S$Throwable,["MD5 not supported", nsae]);
} else {
throw nsae;
}
}
var md5Bytes=md.digest$BA(name);
md5Bytes[6]=(md5Bytes[6]&(15)|0);
md5Bytes[6]=(md5Bytes[6]|(48)|0);
md5Bytes[8]=(md5Bytes[8]&(63)|0);
md5Bytes[8]=(md5Bytes[8]|(128)|0);
return Clazz.new_(C$.c$$BA,[md5Bytes]);
}, 1);

Clazz.newMeth(C$, 'fromString$S',  function (name) {
var components=name.split$S("-");
if (components.length != 5) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid UUID string: " + name]);
for (var i=0; i < 5; i++) components[i]="0x" + components[i];

var mostSigBits=Long.decode$S(components[0]).longValue$();
(mostSigBits=Long.$sl(mostSigBits,(16)));
(mostSigBits=Long.$or(mostSigBits,(Long.decode$S(components[1]).longValue$())));
(mostSigBits=Long.$sl(mostSigBits,(16)));
(mostSigBits=Long.$or(mostSigBits,(Long.decode$S(components[2]).longValue$())));
var leastSigBits=Long.decode$S(components[3]).longValue$();
(leastSigBits=Long.$sl(leastSigBits,(48)));
(leastSigBits=Long.$or(leastSigBits,(Long.decode$S(components[4]).longValue$())));
return Clazz.new_(C$.c$$J$J,[mostSigBits, leastSigBits]);
}, 1);

Clazz.newMeth(C$, 'getLeastSignificantBits$',  function () {
return this.leastSigBits;
});

Clazz.newMeth(C$, 'getMostSignificantBits$',  function () {
return this.mostSigBits;
});

Clazz.newMeth(C$, 'version$',  function () {
return Long.$ival((Long.$and((Long.$sr(this.mostSigBits,12)),15)));
});

Clazz.newMeth(C$, 'variant$',  function () {
return Long.$ival((Long.$and((Long.$usr(this.leastSigBits,(Long.$sub(64,(Long.$usr(this.leastSigBits,62)))))),(Long.$sr(this.leastSigBits,63)))));
});

Clazz.newMeth(C$, 'timestamp$',  function () {
if (this.version$() != 1) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Not a time-based UUID"]);
}return Long.$or(Long.$or(Long.$sl((Long.$and(this.mostSigBits,4095)),48),Long.$sl((Long.$and((Long.$sr(this.mostSigBits,16)),65535)),32)),Long.$usr(this.mostSigBits,32));
});

Clazz.newMeth(C$, 'clockSequence$',  function () {
if (this.version$() != 1) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Not a time-based UUID"]);
}return Long.$ival((Long.$usr((Long.$and(this.leastSigBits,[0,274861129728,1])),48)));
});

Clazz.newMeth(C$, 'node$',  function () {
if (this.version$() != 1) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Not a time-based UUID"]);
}return Long.$and(this.leastSigBits,281474976710655);
});

Clazz.newMeth(C$, 'toString',  function () {
return (C$.digits$J$I(Long.$sr(this.mostSigBits,32), 8) + "-" + C$.digits$J$I(Long.$sr(this.mostSigBits,16), 4) + "-" + C$.digits$J$I(this.mostSigBits, 4) + "-" + C$.digits$J$I(Long.$sr(this.leastSigBits,48), 4) + "-" + C$.digits$J$I(this.leastSigBits, 12) );
});

Clazz.newMeth(C$, 'digits$J$I',  function (val, digits) {
var hi=Long.$sl(1,(digits * 4));
return Long.toHexString$J(Long.$or(hi,(Long.$and(val,(Long.$sub(hi,1)))))).substring$I(1);
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
var hilo=Long.$xor(this.mostSigBits,this.leastSigBits);
return (Long.$ival((Long.$sr(hilo,32)))) ^ Long.$ival(hilo);
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if ((null == obj ) || (obj.getClass$() !== Clazz.getClass(C$) ) ) return false;
var id=obj;
return (Long.$eq(this.mostSigBits,id.mostSigBits ) && Long.$eq(this.leastSigBits,id.leastSigBits ) );
});

Clazz.newMeth(C$, ['compareTo$java_util_UUID','compareTo$O'],  function (val) {
return (Long.$lt(this.mostSigBits,val.mostSigBits ) ? -1 : (Long.$gt(this.mostSigBits,val.mostSigBits ) ? 1 : (Long.$lt(this.leastSigBits,val.leastSigBits ) ? -1 : (Long.$gt(this.leastSigBits,val.leastSigBits ) ? 1 : 0))));
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.UUID, "Holder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['numberGenerator','java.security.SecureRandom']]]

C$.$static$=function(){C$.$static$=0;
C$.numberGenerator=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
