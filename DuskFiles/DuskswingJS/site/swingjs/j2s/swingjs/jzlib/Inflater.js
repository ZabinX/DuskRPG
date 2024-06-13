(function(){var P$=Clazz.newPackage("swingjs.jzlib"),I$=[[0,'swingjs.jzlib.Inflate']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Inflater", null, 'swingjs.jzlib.ZStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'init$I$Z',  function (w, nowrap) {
this.setAdler32$();
if (w == 0) w=15;
this.istate=Clazz.new_($I$(1,1).c$$swingjs_jzlib_ZStream,[this]);
this.istate.inflateInit$I(nowrap ? -w : w);
return this;
});

Clazz.newMeth(C$, 'inflate$I',  function (f) {
if (this.istate == null ) return -2;
var ret=this.istate.inflate$I(f);
return ret;
});

Clazz.newMeth(C$, 'end$',  function () {
if (this.istate == null ) return;
this.istate.inflateEnd$();
});

Clazz.newMeth(C$, 'sync$',  function () {
if (this.istate == null ) return -2;
return this.istate.inflateSync$();
});

Clazz.newMeth(C$, 'syncPoint$',  function () {
if (this.istate == null ) return -2;
return this.istate.inflateSyncPoint$();
});

Clazz.newMeth(C$, 'setDictionary$BA$I',  function (dictionary, dictLength) {
if (this.istate == null ) return -2;
return this.istate.inflateSetDictionary$BA$I(dictionary, dictLength);
});

Clazz.newMeth(C$, 'finished$',  function () {
return this.istate.mode == 12;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.avail_in=0;
if (this.istate != null ) this.istate.reset$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
