(function(){var P$=Clazz.newPackage("java.awt"),p$1={},I$=[[0,'java.awt.MediaEntry','java.awt.ImageMediaEntry']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MediaTracker", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['target','java.awt.Component','head','java.awt.MediaEntry']]]

Clazz.newMeth(C$, 'c$$java_awt_Component',  function (comp) {
;C$.$init$.apply(this);
this.target=comp;
}, 1);

Clazz.newMeth(C$, 'addImage$java_awt_Image$I',  function (image, id) {
this.addImage$java_awt_Image$I$I$I(image, id, -1, -1);
});

Clazz.newMeth(C$, 'addImage$java_awt_Image$I$I$I',  function (image, id, w, h) {
this.head=$I$(1,"insert$java_awt_MediaEntry$java_awt_MediaEntry",[this.head, Clazz.new_($I$(2,1).c$$java_awt_MediaTracker$java_awt_Image$I$I$I,[this, image, id, w, h])]);
});

Clazz.newMeth(C$, 'checkAll$',  function () {
return p$1.checkAll$Z$Z.apply(this, [false, true]);
});

Clazz.newMeth(C$, 'checkAll$Z',  function (load) {
return p$1.checkAll$Z$Z.apply(this, [load, true]);
});

Clazz.newMeth(C$, 'checkAll$Z$Z',  function (load, verify) {
var cur=this.head;
var done=true;
while (cur != null ){
if ((cur.getStatus$Z$Z(load, verify) & 14) == 0) {
done=false;
}cur=cur.next;
}
return done;
}, p$1);

Clazz.newMeth(C$, 'isErrorAny$',  function () {
return false;
});

Clazz.newMeth(C$, 'getErrorsAny$',  function () {
return null;
});

Clazz.newMeth(C$, 'waitForAll$',  function () {
return;
});

Clazz.newMeth(C$, 'waitForAll$J',  function (ms) {
return true;
});

Clazz.newMeth(C$, 'statusAll$Z',  function (load) {
return 8;
});

Clazz.newMeth(C$, 'checkID$I',  function (id) {
return true;
});

Clazz.newMeth(C$, 'checkID$I$Z',  function (id, load) {
return true;
});

Clazz.newMeth(C$, 'isErrorID$I',  function (id) {
return false;
});

Clazz.newMeth(C$, 'getErrorsID$I',  function (id) {
return null;
});

Clazz.newMeth(C$, 'waitForID$I',  function (id) {
return;
});

Clazz.newMeth(C$, 'waitForID$I$J',  function (id, ms) {
return true;
});

Clazz.newMeth(C$, 'statusID$I$Z',  function (id, load) {
return 8;
});

Clazz.newMeth(C$, 'removeImage$java_awt_Image',  function (image) {
});

Clazz.newMeth(C$, 'removeImage$java_awt_Image$I',  function (image, id) {
});

Clazz.newMeth(C$, 'removeImage$java_awt_Image$I$I$I',  function (image, id, width, height) {
var cur=this.head;
var prev=null;
while (cur != null ){
var next=cur.next;
if (cur.getID$() == id && Clazz.instanceOf(cur, "java.awt.ImageMediaEntry")  && (cur).matches$java_awt_Image$I$I(image, width, height) ) {
if (prev == null ) {
this.head=next;
} else {
prev.next=next;
}cur.cancel$();
} else {
prev=cur;
}cur=next;
}
});

Clazz.newMeth(C$, 'setDone$',  function () {
return;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
