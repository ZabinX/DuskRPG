(function(){var P$=Clazz.newPackage("sun.awt.image"),I$=[[0,['sun.awt.image.ImageWatched','.Link'],['sun.awt.image.ImageWatched','.WeakLink']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageWatched", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Link',9],['WeakLink',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['+watcherList']]
,['O',['endlink','sun.awt.image.ImageWatched.Link']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.watcherList=C$.endlink;
}, 1);

Clazz.newMeth(C$, 'addWatcher$java_awt_image_ImageObserver',  function (iw) {
if (iw != null  && !this.isWatcher$java_awt_image_ImageObserver(iw) ) {
this.watcherList=Clazz.new_($I$(2,1).c$$java_awt_image_ImageObserver$sun_awt_image_ImageWatched_Link,[iw, this.watcherList]);
}});

Clazz.newMeth(C$, 'isWatcher$java_awt_image_ImageObserver',  function (iw) {
return this.watcherList.isWatcher$java_awt_image_ImageObserver(iw);
});

Clazz.newMeth(C$, 'removeWatcher$java_awt_image_ImageObserver',  function (iw) {
{
this.watcherList=this.watcherList.removeWatcher$java_awt_image_ImageObserver(iw);
}if (this.watcherList === C$.endlink ) {
this.notifyWatcherListEmpty$();
}});

Clazz.newMeth(C$, 'isWatcherListEmpty$',  function () {
{
this.watcherList=this.watcherList.removeWatcher$java_awt_image_ImageObserver(null);
}return (this.watcherList === C$.endlink );
});

Clazz.newMeth(C$, 'newInfo$java_awt_Image$I$I$I$I$I',  function (img, info, x, y, w, h) {
if (this.watcherList.newInfo$java_awt_Image$I$I$I$I$I(img, info, x, y, w, h)) {
this.removeWatcher$java_awt_image_ImageObserver(null);
}});

C$.$static$=function(){C$.$static$=0;
C$.endlink=Clazz.new_($I$(1,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageWatched, "Link", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isWatcher$java_awt_image_ImageObserver',  function (iw) {
return false;
});

Clazz.newMeth(C$, 'removeWatcher$java_awt_image_ImageObserver',  function (iw) {
return this;
});

Clazz.newMeth(C$, 'newInfo$java_awt_Image$I$I$I$I$I',  function (img, info, x, y, w, h) {
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageWatched, "WeakLink", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.awt.image.ImageWatched','.Link']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['myref','java.awt.image.ImageObserver','next','sun.awt.image.ImageWatched.Link']]]

Clazz.newMeth(C$, 'c$$java_awt_image_ImageObserver$sun_awt_image_ImageWatched_Link',  function (obs, next) {
Clazz.super_(C$, this);
this.myref=obs;
this.next=next;
}, 1);

Clazz.newMeth(C$, 'isWatcher$java_awt_image_ImageObserver',  function (iw) {
return (this.myref === iw  || this.next.isWatcher$java_awt_image_ImageObserver(iw) );
});

Clazz.newMeth(C$, 'removeWatcher$java_awt_image_ImageObserver',  function (iw) {
var myiw=this.myref;
if (myiw == null ) {
return this.next.removeWatcher$java_awt_image_ImageObserver(iw);
}if (myiw === iw ) {
return this.next;
}this.next=this.next.removeWatcher$java_awt_image_ImageObserver(iw);
return this;
});

Clazz.newMeth(C$, 'newInfo$java_awt_Image$I$I$I$I$I',  function (img, info, x, y, w, h) {
var ret=this.next.newInfo$java_awt_Image$I$I$I$I$I(img, info, x, y, w, h);
var myiw=this.myref;
if (myiw == null ) {
ret=true;
} else if (myiw.imageUpdate$java_awt_Image$I$I$I$I$I(img, info, x, y, w, h) == false ) {
this.myref=null;
ret=true;
}return ret;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
