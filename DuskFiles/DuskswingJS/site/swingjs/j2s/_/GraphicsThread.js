(function(){var P$=Clazz.newPackage("_"),I$=[[0,'java.util.Vector','java.net.URL','java.awt.Toolkit','java.awt.MediaTracker','java.applet.Applet','java.applet.AudioClip','java.lang.reflect.Array','Thread']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GraphicsThread", null, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['appParent','_.Dusk','thread','Thread','vctToMove','java.util.Vector']]]

Clazz.newMeth(C$, 'c$$__Dusk',  function (inParent) {
;C$.$init$.apply(this);
this.appParent=inParent;
this.vctToMove=Clazz.new_($I$(1,1).c$$I$I,[0, 5]);
}, 1);

Clazz.newMeth(C$, 'addEntityToMove$__Entity$I',  function (entStore, direction) {
entStore.intTicks=12;
entStore.intMoveDirection=direction;
this.vctToMove.addElement$O(entStore);
});

Clazz.newMeth(C$, 'run$',  function () {
var i=0;
var prefix;
if (this.appParent.blnApplet) {
prefix="";
try {
this.appParent.imgOriginalMap=this.appParent.appShell.getImage$java_net_URL(Clazz.new_($I$(2,1).c$$S,[prefix + this.appParent.strRCAddress + "/images/map.gif" ]));
this.appParent.imgOriginalPlayers=this.appParent.appShell.getImage$java_net_URL(Clazz.new_($I$(2,1).c$$S,[prefix + this.appParent.strRCAddress + "/images/players.gif" ]));
this.appParent.imgOriginalSprites=this.appParent.appShell.getImage$java_net_URL(Clazz.new_($I$(2,1).c$$S,[prefix + this.appParent.strRCAddress + "/images/sprites.gif" ]));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error loading images: " + e.toString());
} else {
throw e;
}
}
} else {
prefix="rc/";
this.appParent.imgOriginalMap=$I$(3).getDefaultToolkit$().getImage$S(prefix + this.appParent.strRCAddress + "/images/map.gif" );
this.appParent.imgOriginalPlayers=$I$(3).getDefaultToolkit$().getImage$S(prefix + this.appParent.strRCAddress + "/images/players.gif" );
this.appParent.imgOriginalSprites=$I$(3).getDefaultToolkit$().getImage$S(prefix + this.appParent.strRCAddress + "/images/sprites.gif" );
}try {
var mdtTracker=Clazz.new_($I$(4,1).c$$java_awt_Component,[this.appParent.frame]);
mdtTracker.addImage$java_awt_Image$I(this.appParent.imgOriginalMap, 0);
mdtTracker.addImage$java_awt_Image$I(this.appParent.imgOriginalPlayers, 0);
mdtTracker.addImage$java_awt_Image$I(this.appParent.imgOriginalSprites, 0);
mdtTracker.waitForAll$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error while waiting for images: " + e.toString());
} else {
throw e;
}
}
this.appParent.numMapImages=((this.appParent.imgOriginalMap.getWidth$java_awt_image_ImageObserver(null)/this.appParent.imgOriginalMap.getHeight$java_awt_image_ImageObserver(null)|0)) - 1;
this.appParent.numPlayerImages=((((this.appParent.imgOriginalPlayers.getWidth$java_awt_image_ImageObserver(null)/this.appParent.imgOriginalPlayers.getHeight$java_awt_image_ImageObserver(null)|0))/8|0)) - 1;
this.appParent.numSpriteImages=((this.appParent.imgOriginalSprites.getWidth$java_awt_image_ImageObserver(null)/this.appParent.imgOriginalSprites.getHeight$java_awt_image_ImageObserver(null)|0)) - 1;
this.appParent.addText$S((this.appParent.numMapImages + this.appParent.numPlayerImages + this.appParent.numSpriteImages ) + " image files loaded.\n");
this.appParent.scaleImages$();
if (!this.appParent.blnApplet) {
prefix="file:" + System.getProperty$S("user.dir") + prefix ;
}if (this.appParent.blnApplet) {
var urlStore;
this.appParent.addText$S("Loading audio.\n");
var vctStore=Clazz.new_($I$(1,1).c$$I,[0]);
try {
urlStore=Clazz.new_($I$(2,1).c$$S,[prefix + this.appParent.strRCAddress + "/audio/sfx/0.au" ]);
var urlConnection=urlStore.openConnection$();
vctStore.addElement$O($I$(5).newAudioClip$java_net_URL(urlStore));
urlStore=Clazz.new_($I$(2,1).c$$S,[prefix + this.appParent.strRCAddress + "/audio/sfx/1.au" ]);
urlConnection=urlStore.openConnection$();
vctStore.addElement$O($I$(5).newAudioClip$java_net_URL(urlStore));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
this.appParent.audSFX=Clazz.array($I$(6), [vctStore.size$()]);
try {
for (i=0; i < vctStore.size$(); i++) {
this.appParent.audSFX[i]=vctStore.elementAt$I(i);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error loading audio: " + e.toString());
this.appParent.addText$S("Error loading audio: " + e.toString() + "\n" );
return;
} else {
throw e;
}
}
this.appParent.addText$S(($I$(7).getLength$O(this.appParent.audSFX)) + " audio files loaded.\n");
}this.appParent.update$();
this.appParent.paint$();
var timer=0;
var entStore;
while (true){
try {
$I$(8).sleep$J(10);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
++timer;
{
for (i=0; i < this.vctToMove.size$(); i++) {
entStore=this.vctToMove.elementAt$I(i);
{
if (entStore.intTicks == 0) {
this.vctToMove.removeElement$O(entStore);
switch (entStore.intMoveDirection) {
case 0:
{
if (entStore.intStep != -1) entStore.intStep=0;
break;
}case 1:
{
if (entStore.intStep != -1) entStore.intStep=2;
break;
}case 2:
{
if (entStore.intStep != -1) entStore.intStep=4;
break;
}case 3:
{
if (entStore.intStep != -1) entStore.intStep=6;
break;
}}
entStore.intMoveDirection=-1;
this.appParent.reloadJComboBoxAttack$();
this.appParent.paint$();
} else --entStore.intTicks;
}}
}if (timer == 25) {
this.appParent.paint$();
timer=0;
}}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2024-06-07 21:09:51 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
