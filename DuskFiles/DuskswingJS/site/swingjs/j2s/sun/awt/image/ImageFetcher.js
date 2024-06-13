(function(){var P$=Clazz.newPackage("sun.awt.image"),p$1={},I$=[[0,'sun.awt.image.FetcherInfo','Thread','sun.awt.AppContext','java.util.Vector']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageFetcher", null, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$ThreadGroup$I',  function (threadGroup, index) {
;C$.superclazz.c$$ThreadGroup$S.apply(this,[threadGroup, "Image Fetcher " + index]);C$.$init$.apply(this);
this.setDaemon$Z(true);
}, 1);

Clazz.newMeth(C$, 'add$sun_awt_image_ImageFetchable',  function (src) {
var info=$I$(1).getFetcherInfo$();
{
if (!info.waitList.contains$O(src)) {
info.waitList.addElement$O(src);
if (info.numWaiting == 0 && info.numFetchers < info.fetchers.length ) {
C$.createFetchers$sun_awt_image_FetcherInfo(info);
}info.waitList.notify$();
}}}, 1);

Clazz.newMeth(C$, 'remove$sun_awt_image_ImageFetchable',  function (src) {
var info=$I$(1).getFetcherInfo$();
{
if (info.waitList.contains$O(src)) {
info.waitList.removeElement$O(src);
}}}, 1);

Clazz.newMeth(C$, 'isFetcher$Thread',  function (t) {
var info=$I$(1).getFetcherInfo$();
{
for (var i=0; i < info.fetchers.length; i++) {
if (info.fetchers[i] === t ) {
return true;
}}
}return false;
}, 1);

Clazz.newMeth(C$, 'amFetcher$',  function () {
return C$.isFetcher$Thread($I$(2).currentThread$());
}, 1);

Clazz.newMeth(C$, 'nextImage$',  function () {
var info=$I$(1).getFetcherInfo$();
{
var src=null;
var end=Long.$add(System.currentTimeMillis$(),5000);
while (src == null ){
while (info.waitList.size$() == 0){
var now=System.currentTimeMillis$();
if (Long.$ge(now,end )) {
return null;
}try {
++info.numWaiting;
info.waitList.wait$J(Long.$sub(end,now));
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
return null;
} else {
throw e;
}
} finally {
--info.numWaiting;
}
}
src=info.waitList.elementAt$I(0);
info.waitList.removeElement$O(src);
}
return src;
}}, 1);

Clazz.newMeth(C$, 'run$',  function () {
var info=$I$(1).getFetcherInfo$();
try {
p$1.fetchloop.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
} finally {
{
var me=$I$(2).currentThread$();
for (var i=0; i < info.fetchers.length; i++) {
if (info.fetchers[i] === me ) {
info.fetchers[i]=null;
--info.numFetchers;
}}
}}
});

Clazz.newMeth(C$, 'fetchloop',  function () {
var me=$I$(2).currentThread$();
while (C$.isFetcher$Thread(me)){
$I$(2).interrupted$();
me.setPriority$I(8);
var src=C$.nextImage$();
if (src == null ) {
return;
}try {
src.doFetch$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Uncaught error fetching image:");
e.printStackTrace$();
} else {
throw e;
}
}
C$.stoppingAnimation$Thread(me);
}
}, p$1);

Clazz.newMeth(C$, 'startingAnimation$',  function () {
var info=$I$(1).getFetcherInfo$();
var me=$I$(2).currentThread$();
{
for (var i=0; i < info.fetchers.length; i++) {
if (info.fetchers[i] === me ) {
info.fetchers[i]=null;
--info.numFetchers;
me.setName$S("Image Animator " + i);
if (info.waitList.size$() > info.numWaiting) {
C$.createFetchers$sun_awt_image_FetcherInfo(info);
}return;
}}
}me.setPriority$I(2);
me.setName$S("Image Animator");
}, 1);

Clazz.newMeth(C$, 'stoppingAnimation$Thread',  function (me) {
var info=$I$(1).getFetcherInfo$();
{
var index=-1;
for (var i=0; i < info.fetchers.length; i++) {
if (info.fetchers[i] === me ) {
return;
}if (info.fetchers[i] == null ) {
index=i;
}}
if (index >= 0) {
info.fetchers[index]=me;
++info.numFetchers;
me.setName$S("Image Fetcher " + index);
return;
}}}, 1);

Clazz.newMeth(C$, 'createFetchers$sun_awt_image_FetcherInfo',  function (info) {
var appContext=$I$(3).getAppContext$();
var threadGroup=appContext.getThreadGroup$();
var fetcherThreadGroup;
try {
if (threadGroup.getParent$() != null ) {
fetcherThreadGroup=threadGroup;
} else {
threadGroup=$I$(2).currentThread$().getThreadGroup$();
var parent=threadGroup.getParent$();
while ((parent != null ) && (parent.getParent$() != null ) ){
threadGroup=parent;
parent=threadGroup.getParent$();
}
fetcherThreadGroup=threadGroup;
}} catch (e) {
if (Clazz.exceptionOf(e,"SecurityException")){
fetcherThreadGroup=appContext.getThreadGroup$();
} else {
throw e;
}
}
var fetcherGroup=fetcherThreadGroup;
for (var i=0; i < info.fetchers.length; i++) {
if (info.fetchers[i] == null ) {
info.fetchers[i]=Clazz.new_(C$.c$$ThreadGroup$I,[fetcherGroup, i]);
info.fetchers[i].start$();
++info.numFetchers;
break;
}}
return;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
