(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[[0,'java.util.concurrent.atomic.AtomicReferenceFieldUpdater']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SelectionKey");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.attachment=null;
},1);

C$.$fields$=[['O',['attachment','java.lang.Object']]
,['O',['attachmentUpdater','java.util.concurrent.atomic.AtomicReferenceFieldUpdater']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isReadable$',  function () {
return (this.readyOps$() & 1) != 0;
});

Clazz.newMeth(C$, 'isWritable$',  function () {
return (this.readyOps$() & 4) != 0;
});

Clazz.newMeth(C$, 'isConnectable$',  function () {
return (this.readyOps$() & 8) != 0;
});

Clazz.newMeth(C$, 'isAcceptable$',  function () {
return (this.readyOps$() & 16) != 0;
});

Clazz.newMeth(C$, 'attach$O',  function (ob) {
return C$.attachmentUpdater.getAndSet$O$O(this, ob);
});

Clazz.newMeth(C$, 'attachment$',  function () {
return this.attachment;
});

C$.$static$=function(){C$.$static$=0;
C$.attachmentUpdater=$I$(1,"newUpdater$Class$Class$S",[Clazz.getClass(C$), Clazz.getClass(java.lang.Object), "attachment"]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
