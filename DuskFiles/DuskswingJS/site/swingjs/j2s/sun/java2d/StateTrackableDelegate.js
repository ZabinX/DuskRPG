(function(){var P$=Clazz.newPackage("sun.java2d"),I$=[[0,['sun.java2d.StateTrackable','.State'],'InternalError','sun.java2d.StateTracker']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StateTrackableDelegate", null, null, 'sun.java2d.StateTrackable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isDirty'],'I',['numDynamicAgents'],'O',['theState','sun.java2d.StateTrackable.State','theTracker','sun.java2d.StateTracker']]
,['O',['UNTRACKABLE_DELEGATE','sun.java2d.StateTrackableDelegate','+IMMUTABLE_DELEGATE']]]

Clazz.newMeth(C$, 'createInstance$sun_java2d_StateTrackable_State',  function (state) {
switch (state) {
case $I$(1).UNTRACKABLE:
return C$.UNTRACKABLE_DELEGATE;
case $I$(1).STABLE:
return Clazz.new_(C$.c$$sun_java2d_StateTrackable_State,[$I$(1).STABLE]);
case $I$(1).DYNAMIC:
return Clazz.new_(C$.c$$sun_java2d_StateTrackable_State,[$I$(1).DYNAMIC]);
case $I$(1).IMMUTABLE:
return C$.IMMUTABLE_DELEGATE;
default:
throw Clazz.new_($I$(2,1).c$$S,["unknown state"]);
}
}, 1);

Clazz.newMeth(C$, 'c$$sun_java2d_StateTrackable_State',  function (state) {
;C$.$init$.apply(this);
this.theState=state;
}, 1);

Clazz.newMeth(C$, 'getState$',  function () {
return this.theState;
});

Clazz.newMeth(C$, 'getStateTracker$',  function () {
var st=this.theTracker;
if (st == null ) {
switch (this.theState) {
case $I$(1).IMMUTABLE:
st=$I$(3).ALWAYS_CURRENT;
break;
case $I$(1).STABLE:
st=((P$.StateTrackableDelegate$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "StateTrackableDelegate$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'sun.java2d.StateTracker', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isCurrent$',  function () {
return (this.b$['sun.java2d.StateTrackableDelegate'].theTracker === this );
});
})()
), Clazz.new_(P$.StateTrackableDelegate$1.$init$,[this, null]));
break;
case $I$(1).DYNAMIC:
case $I$(1).UNTRACKABLE:
st=$I$(3).NEVER_CURRENT;
break;
}
this.theTracker=st;
}return st;
});

Clazz.newMeth(C$, 'setImmutable$',  function () {
if (this.theState === $I$(1).UNTRACKABLE  || this.theState === $I$(1).DYNAMIC  ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["UNTRACKABLE or DYNAMIC objects cannot become IMMUTABLE"]);
}this.theState=$I$(1).IMMUTABLE;
this.theTracker=null;
});

Clazz.newMeth(C$, 'setUntrackable$',  function () {
if (this.theState === $I$(1).IMMUTABLE ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["IMMUTABLE objects cannot become UNTRACKABLE"]);
}this.theState=$I$(1).UNTRACKABLE;
this.theTracker=null;
});

Clazz.newMeth(C$, 'addDynamicAgent$',  function () {
if (this.theState === $I$(1).IMMUTABLE ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Cannot change state from IMMUTABLE"]);
}++this.numDynamicAgents;
if (this.theState === $I$(1).STABLE ) {
this.theState=$I$(1).DYNAMIC;
this.theTracker=null;
}});

Clazz.newMeth(C$, 'removeDynamicAgent$',  function () {
if (--this.numDynamicAgents == 0 && this.theState === $I$(1).DYNAMIC  ) {
this.theState=$I$(1).STABLE;
this.theTracker=null;
}});

Clazz.newMeth(C$, 'markDirty$',  function () {
this.theTracker=null;
this.isDirty=true;
});

Clazz.newMeth(C$, '秘isDirty$Z',  function (doReset) {
var isDirty=this.isDirty;
if (doReset) this.isDirty=false;
return isDirty;
});

C$.$static$=function(){C$.$static$=0;
C$.UNTRACKABLE_DELEGATE=Clazz.new_(C$.c$$sun_java2d_StateTrackable_State,[$I$(1).UNTRACKABLE]);
C$.IMMUTABLE_DELEGATE=Clazz.new_(C$.c$$sun_java2d_StateTrackable_State,[$I$(1).IMMUTABLE]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
