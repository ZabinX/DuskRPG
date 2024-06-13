(function(){var P$=Clazz.newPackage("sun.nio.cs"),p$1={},I$=[[0,'java.nio.charset.Charset',['sun.nio.cs.ThreadLocalCoders','.Cache']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ThreadLocalCoders", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Cache',1034]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['decoderCache','sun.nio.cs.ThreadLocalCoders.Cache','+encoderCache']]]

Clazz.newMeth(C$, 'decoderFor$O',  function (name) {
var cd=C$.decoderCache.forName$O(name);
cd.reset$();
return cd;
}, 1);

Clazz.newMeth(C$, 'encoderFor$O',  function (name) {
var ce=C$.encoderCache.forName$O(name);
ce.reset$();
return ce;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.decoderCache=((P$.ThreadLocalCoders$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ThreadLocalCoders$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['sun.nio.cs.ThreadLocalCoders','.Cache']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'hasName$O$O',  function (ob, name) {
if (Clazz.instanceOf(name, "java.lang.String")) return ((ob).charset$().name$().equals$O(name));
if (Clazz.instanceOf(name, "java.nio.charset.Charset")) return (ob).charset$().equals$O(name);
return false;
});

Clazz.newMeth(C$, 'create$O',  function (name) {
if (Clazz.instanceOf(name, "java.lang.String")) return $I$(1).forName$S(name).newDecoder$();
if (Clazz.instanceOf(name, "java.nio.charset.Charset")) return (name).newDecoder$();
Clazz.assert(C$, this, function(){return false});
return null;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
})()
), Clazz.new_($I$(2,1).c$$I,[this, null, 3],P$.ThreadLocalCoders$1));
C$.encoderCache=((P$.ThreadLocalCoders$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ThreadLocalCoders$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['sun.nio.cs.ThreadLocalCoders','.Cache']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'hasName$O$O',  function (ob, name) {
if (Clazz.instanceOf(name, "java.lang.String")) return ((ob).charset$().name$().equals$O(name));
if (Clazz.instanceOf(name, "java.nio.charset.Charset")) return (ob).charset$().equals$O(name);
return false;
});

Clazz.newMeth(C$, 'create$O',  function (name) {
if (Clazz.instanceOf(name, "java.lang.String")) return $I$(1).forName$S(name).newEncoder$();
if (Clazz.instanceOf(name, "java.nio.charset.Charset")) return (name).newEncoder$();
Clazz.assert(C$, this, function(){return false});
return null;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
})()
), Clazz.new_($I$(2,1).c$$I,[this, null, 3],P$.ThreadLocalCoders$2));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadLocalCoders, "Cache", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['size'],'O',['cache','Object[]']]]

Clazz.newMeth(C$, 'c$$I',  function (size) {
;C$.$init$.apply(this);
this.size=size;
}, 1);

Clazz.newMeth(C$, 'moveToFront$OA$I',  function (oa, i) {
var ob=oa[i];
for (var j=i; j > 0; j--) oa[j]=oa[j - 1];

oa[0]=ob;
}, p$1);

Clazz.newMeth(C$, 'forName$O',  function (name) {
var oa=this.cache;
if (oa == null ) {
oa=Clazz.array(java.lang.Object, [this.size]);
this.cache=oa;
} else {
for (var i=0; i < oa.length; i++) {
var ob=oa[i];
if (ob == null ) continue;
if (this.hasName$O$O(ob, name)) {
if (i > 0) p$1.moveToFront$OA$I.apply(this, [oa, i]);
return ob;
}}
}var ob=this.create$O(name);
oa[oa.length - 1]=ob;
p$1.moveToFront$OA$I.apply(this, [oa, oa.length - 1]);
return ob;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
