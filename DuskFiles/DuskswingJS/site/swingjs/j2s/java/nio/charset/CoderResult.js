(function(){var P$=Clazz.newPackage("java.nio.charset"),p$1={},I$=[[0,'java.util.HashMap','java.nio.charset.CoderResult',['java.nio.charset.CoderResult','.Cache']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CoderResult", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Cache',1034]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['type','length']]
,['O',['names','String[]','UNDERFLOW','java.nio.charset.CoderResult','+OVERFLOW','malformedCache','java.nio.charset.CoderResult.Cache','+unmappableCache']]]

Clazz.newMeth(C$, 'c$$I$I',  function (type, length) {
;C$.$init$.apply(this);
this.type=type;
this.length=length;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
var nm=C$.names[this.type];
return this.isError$() ? nm + "[" + this.length + "]"  : nm;
});

Clazz.newMeth(C$, 'isUnderflow$',  function () {
return (this.type == 0);
});

Clazz.newMeth(C$, 'isOverflow$',  function () {
return (this.type == 1);
});

Clazz.newMeth(C$, 'isError$',  function () {
return (this.type >= 2);
});

Clazz.newMeth(C$, 'isMalformed$',  function () {
return (this.type == 2);
});

Clazz.newMeth(C$, 'isUnmappable$',  function () {
return (this.type == 3);
});

Clazz.newMeth(C$, 'length$',  function () {
if (!this.isError$()) throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
return this.length;
});

Clazz.newMeth(C$, 'malformedForLength$I',  function (length) {
return p$1.get$I.apply(C$.malformedCache, [length]);
}, 1);

Clazz.newMeth(C$, 'unmappableForLength$I',  function (length) {
return p$1.get$I.apply(C$.unmappableCache, [length]);
}, 1);

Clazz.newMeth(C$, 'throwException$',  function () {
switch (this.type) {
case 0:
throw Clazz.new_(Clazz.load('java.nio.BufferUnderflowException'));
case 1:
throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
case 2:
throw Clazz.new_(Clazz.load('java.nio.charset.MalformedInputException').c$$I,[this.length]);
case 3:
throw Clazz.new_(Clazz.load('java.nio.charset.UnmappableCharacterException').c$$I,[this.length]);
default:
Clazz.assert(C$, this, function(){return false});
}
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.names=Clazz.array(String, -1, ["UNDERFLOW", "OVERFLOW", "MALFORMED", "UNMAPPABLE"]);
C$.UNDERFLOW=Clazz.new_(C$.c$$I$I,[0, 0]);
C$.OVERFLOW=Clazz.new_(C$.c$$I$I,[1, 0]);
C$.malformedCache=((P$.CoderResult$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoderResult$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.nio.charset.CoderResult','.Cache']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'create$I',  function (len) {
return Clazz.new_($I$(2,1).c$$I$I,[2, len]);
});
})()
), Clazz.new_($I$(3,1),[this, null],P$.CoderResult$1));
C$.unmappableCache=((P$.CoderResult$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "CoderResult$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.nio.charset.CoderResult','.Cache']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'create$I',  function (len) {
return Clazz.new_($I$(2,1).c$$I$I,[3, len]);
});
})()
), Clazz.new_($I$(3,1),[this, null],P$.CoderResult$2));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.CoderResult, "Cache", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cache=null;
},1);

C$.$fields$=[['O',['cache','java.util.Map']]]

Clazz.newMeth(C$, 'get$I',  function (len) {
if (len <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non-positive length"]);
var k= new Integer(len);
var w;
var e=null;
if (this.cache == null ) {
this.cache=Clazz.new_($I$(1,1));
} else if ((w=this.cache.get$O(k)) != null ) {
e=w;
}if (e == null ) {
e=this.create$I(len);
this.cache.put$O$O(k, (e));
}return e;
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
