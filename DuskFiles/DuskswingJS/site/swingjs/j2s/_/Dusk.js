(function(){var P$=Clazz.newPackage("_"),I$=[[0,['.','.MainFrame'],['.','.GraphicsThread'],'java.net.Socket','java.io.DataOutputStream','java.io.DataInputStream','Thread',['.','.Entity'],['.','.MerchantFrame'],['.','.BattleFrame'],'java.util.Vector','java.util.StringTokenizer','javax.swing.text.SimpleAttributeSet','javax.swing.text.StyleConstants','java.awt.Color','java.applet.AudioClip','java.net.URL',['.','.EditFrame'],'java.awt.MediaTracker']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Dusk", null, null, ['Runnable', 'java.awt.event.MouseListener', 'java.awt.event.KeyListener', 'java.awt.event.ComponentListener', 'java.awt.image.ImageObserver']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.MapRows=0;
this.MapColumns=0;
this.LocX=0;
this.LocY=0;
this.range=1;
this.strTile="-1";
this.blnConnected=false;
this.strWebAssetPath="";
this.mapSize=11;
this.viewRange=5;
this.blnMusic=true;
this.intImageSize=36;
this.strSet=null;
this.address="127.0.0.1";
this.port=7474;
},1);

C$.$fields$=[['Z',['blnLoaded','blnRefreshing','blnMenuRefresh','blnConnected','blnApplet','intStep','blnMusic'],'I',['numSpriteImages','numPlayerImages','numMapImages','MapRows','MapColumns','LocX','LocY','inthp','intmaxhp','intsp','intmaxsp','range','intMusicTypes','mapSize','viewRange','intImageSize','port'],'J',['loncash'],'S',['strTile','strRCAddress','strWebAssetPath','strSet','address'],'O',['intNumSongs','int[]','audSFX','java.applet.AudioClip[]','+audMusic','audMusicPlaying','java.applet.AudioClip','appShell','java.applet.Applet','vctMerchantItems','java.util.Vector','+vctSell','+vctChoiceDropItems','+vctChoiceActionItems','+vctEntities','imgOriginalSprites','java.awt.Image','+imgOriginalPlayers','+imgOriginalMap','+imgSprites','+imgPlayers','+imgMap','+imgDisplay','sckConnection','java.net.Socket','stmOut','java.io.DataOutputStream','stmIn','java.io.DataInputStream','shrMap','short[][]','entEntities','_.Entity[][]','+entBuffer','thrRun','Thread','frame','_.MainFrame','frmBattle','_.BattleFrame','frmMerchant','_.MerchantFrame','g','java.awt.Graphics','+gD','thrGraphics','_.GraphicsThread']]
,['S',['strVersion']]]

Clazz.newMeth(C$, 'c$$java_applet_Applet',  function (parent) {
;C$.$init$.apply(this);
this.appShell=parent;
this.blnApplet=true;
this.startUp$();
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.startUp$();
}, 1);

Clazz.newMeth(C$, 'startUp$',  function () {
try {
this.frame=Clazz.new_($I$(1,1).c$$__Dusk,[this]);
this.frame.initComponents$();
this.frame.setVisible$Z(true);
this.frame.docOutput.insertString$I$S$javax_swing_text_AttributeSet(0, "Dusk Client v" + C$.strVersion + " -- https://sourceforge.net/projects/duskrpg/\n" , null);
this.addText$S("You are using Java version " + System.getProperty$S("java.version") + "\n" );
this.frame.txtInput.addKeyListener$java_awt_event_KeyListener(this);
this.frame.addComponentListener$java_awt_event_ComponentListener(this);
this.frame.pnlGraphics.addMouseListener$java_awt_event_MouseListener(this);
this.frame.pnlGraphics.addKeyListener$java_awt_event_KeyListener(this);
this.scaleWindow$();
try {
if (this.blnApplet) {
this.frame.btnEquipment.repaint$();
this.frame.btnMerchant.repaint$();
this.frame.btnQuit.repaint$();
this.paint$();
} else {
this.frame.btnConnect.repaint$();
this.frame.btnEquipment.repaint$();
this.frame.btnMerchant.repaint$();
this.frame.btnQuit.repaint$();
this.frame.btnPotion.repaint$();
this.frame.btnPotion2.repaint$();
this.frame.btnPotion3.repaint$();
this.frame.btnPotion4.repaint$();
this.paint$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (this.blnApplet) {
this.address=this.appShell.getParameter$S("address");
this.port=Integer.parseInt$S(this.appShell.getParameter$S("port"));
this.strWebAssetPath=this.appShell.getParameter$S("webAssetPath");
this.connect$();
} else {
this.addText$I$I$I$S(255, 0, 0, "Click \"connect\" to connect to a server and begin playing.\n");
}this.thrGraphics=Clazz.new_($I$(2,1).c$$__Dusk,[this]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'connect$',  function () {
try {
this.sckConnection=Clazz.new_($I$(3,1).c$$S$I,[this.address, this.port]);
this.stmOut=Clazz.new_([this.sckConnection.getOutputStream$()],$I$(4,1).c$$java_io_OutputStream);
this.stmIn=Clazz.new_([this.sckConnection.getInputStream$()],$I$(5,1).c$$java_io_InputStream);
this.addText$S("Please enter your character name or the name of a new character: \n");
this.thrRun=Clazz.new_($I$(6,1).c$$Runnable,[this]);
this.thrRun.start$();
this.blnConnected=true;
this.entEntities=Clazz.array($I$(7), [this.mapSize, this.mapSize]);
this.frmMerchant=Clazz.new_($I$(8,1).c$$__Dusk,[this]);
this.frmBattle=Clazz.new_($I$(9,1).c$$__Dusk,[this]);
this.vctEntities=Clazz.new_($I$(10,1).c$$I$I,[0, 3]);
this.vctMerchantItems=Clazz.new_($I$(10,1).c$$I$I,[0, 3]);
this.vctSell=Clazz.new_($I$(10,1).c$$I$I,[0, 3]);
this.vctChoiceDropItems=Clazz.new_($I$(10,1).c$$I$I,[0, 3]);
this.vctChoiceActionItems=Clazz.new_($I$(10,1).c$$I$I,[0, 3]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error connecting to server: " + e.toString());
this.addText$S("Error connecting to server: " + e.toString() + "\n" );
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'addText$S',  function (strAdd) {
var i;
var j;
var red;
var green;
var blue;
var strStore=null;
var strRGB;
var strBlue;
var tokStore;
i=strAdd.indexOf$S("<RGB ");
while (strAdd != null  && i != -1 ){
red=0;
green=0;
blue=0;
if (i != 0) {
strStore=strAdd.substring$I$I(0, i);
this.addText$I$I$I$S(0, 0, 0, strStore);
}strAdd=strAdd.substring$I(i + 1);
j=strAdd.indexOf$S(">");
strRGB=strAdd.substring$I$I(0, j);
strAdd=strAdd.substring$I(j + 1);
i=strAdd.indexOf$S("</RGB>");
if (i != -1) {
strStore=strAdd.substring$I$I(0, i);
strAdd=strAdd.substring$I(i + 6);
i=strAdd.indexOf$S("<RGB ");
} else {
strStore=strAdd;
strAdd=null;
i=-1;
}tokStore=Clazz.new_($I$(11,1).c$$S,[strRGB]);
try {
tokStore.nextToken$();
red=Integer.parseInt$S(tokStore.nextToken$());
green=Integer.parseInt$S(tokStore.nextToken$());
strBlue=tokStore.nextToken$();
blue=Integer.parseInt$S(strBlue.substring$I$I(0, strBlue.length$()));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
if (red < 0) red=0;
if (green < 0) green=0;
if (blue < 0) blue=0;
if (red > 255) red=255;
if (green > 255) green=255;
if (blue > 255) blue=255;
this.addText$I$I$I$S(red, green, blue, strStore);
}
if (strAdd != null ) this.addText$I$I$I$S(0, 0, 0, strAdd);
});

Clazz.newMeth(C$, 'addText$I$I$I$S',  function (red, green, blue, strAdd) {
if (this.frame.docOutput.getLength$() > 8000) {
try {
this.frame.docOutput.remove$I$I(0, 4000);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
} else {
throw e;
}
}
}var style=Clazz.new_($I$(12,1));
$I$(13,"setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color",[style, Clazz.new_($I$(14,1).c$$I$I$I,[red, green, blue])]);
try {
this.frame.docOutput.insertString$I$S$javax_swing_text_AttributeSet(this.frame.docOutput.getEndPosition$().getOffset$() - 1, strAdd, style);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
System.err.println$S(e.toString());
} else {
throw e;
}
}
var sb=this.frame.scrText.getVerticalScrollBar$();
if (!sb.getValueIsAdjusting$()) {
sb.setValueIsAdjusting$Z(true);
try {
sb.setValue$I(sb.getMaximum$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
sb.setValueIsAdjusting$Z(false);
}});

Clazz.newMeth(C$, 'addEntity$__Entity',  function (entStore) {
{
entStore.intNum=0;
var entStore2=null;
var i=0;
var i2=0;
var xloc=entStore.intLocX - this.LocX + this.viewRange;
var yloc=entStore.intLocY - this.LocY + this.viewRange;
if (entStore.intMoveDirection != -1) {
switch (entStore.intMoveDirection) {
case 0:
{
break;
}case 1:
{
break;
}case 2:
{
break;
}case 3:
{
break;
}}
}if (xloc > this.mapSize  || yloc > this.mapSize   || xloc < 0   || yloc < 0  ) {
try {
this.stmOut.writeBytes$S("rement " + Long.$s(entStore.ID) + "\n" );
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
this.reloadJComboBoxLook$();
return;
}for (i=0; i < xloc ; i++) {
for (i2=0; i2 < this.mapSize; i2++) {
entStore2=this.entEntities[i][i2];
while (entStore2 != null ){
if (entStore.strName.equalsIgnoreCase$S(entStore2.strName)) {
++entStore.intNum;
}entStore2=entStore2.entNext;
}
}
}
for (i2=0; i2 < yloc + 1 ; i2++) {
entStore2=this.entEntities[(xloc|0)][i2];
if (entStore2 != null ) {
if (entStore.strName.equalsIgnoreCase$S(entStore2.strName)) {
++entStore.intNum;
}while (entStore2.entNext != null ){
if (entStore.strName.equalsIgnoreCase$S(entStore2.strName)) {
++entStore.intNum;
}entStore2=entStore2.entNext;
}
}}
if (entStore2 == null ) {
this.entEntities[(xloc|0)][(yloc|0)]=entStore;
} else {
entStore2.entNext=entStore;
}this.vctEntities.addElement$O(entStore);
for (i=(xloc|0); i < this.mapSize; i++) {
for (; i2 < this.mapSize; i2++) {
entStore2=this.entEntities[i][i2];
while (entStore2 != null ){
if (entStore.strName.equalsIgnoreCase$S(entStore2.strName)) {
++entStore2.intNum;
}entStore2=entStore2.entNext;
}
}
i2=0;
}
}});

Clazz.newMeth(C$, 'removeEntity$J',  function (lngStore) {
var entStore=null;
var entStore2;
var intStore;
var intStore2=0;
var blnBreak=false;
{
for (intStore=0; intStore < this.mapSize && blnBreak == false  ; intStore++) {
for (intStore2=0; intStore2 < this.mapSize && blnBreak == false  ; intStore2++) {
entStore2=this.entEntities[intStore][intStore2];
if (entStore2 != null ) {
if (Long.$eq(entStore2.ID,lngStore )) {
this.vctEntities.removeElement$O(entStore2);
this.entEntities[intStore][intStore2]=entStore2.entNext;
entStore=entStore2;
entStore2=entStore2.entNext;
while (entStore2 != null ){
if (entStore.strName.equalsIgnoreCase$S(entStore2.strName)) {
--entStore2.intNum;
}entStore2=entStore2.entNext;
}
blnBreak=true;
} else {
while (entStore2.entNext != null ){
if (Long.$eq(entStore2.entNext.ID,lngStore )) {
this.vctEntities.removeElement$O(entStore2.entNext);
entStore=entStore2.entNext;
entStore2.entNext=entStore2.entNext.entNext;
blnBreak=true;
while (entStore2.entNext != null ){
if (entStore.strName.equalsIgnoreCase$S(entStore2.entNext.strName)) {
--entStore2.entNext.intNum;
}entStore2=entStore2.entNext;
}
} else entStore2=entStore2.entNext;
}
}}}
}
if (entStore != null ) {
--intStore;
for (; intStore < this.mapSize; intStore++) {
for (; intStore2 < this.mapSize; intStore2++) {
entStore2=this.entEntities[intStore][intStore2];
while (entStore2 != null ){
if (entStore.strName.equalsIgnoreCase$S(entStore2.strName)) {
--entStore2.intNum;
}entStore2=entStore2.entNext;
}
}
intStore2=0;
}
this.vctEntities.removeElement$O(entStore);
}}});

Clazz.newMeth(C$, 'removeEntity$__Entity',  function (entStore) {
{
this.vctEntities.removeElement$O(entStore);
var entStore2;
var dblStore=entStore.intLocX - this.LocX + this.viewRange;
var dblStore2=entStore.intLocY - this.LocY + this.viewRange;
if (entStore.intMoveDirection != -1) {
switch (entStore.intMoveDirection) {
case 0:
{
break;
}case 1:
{
break;
}case 2:
{
break;
}case 3:
{
break;
}}
}try {
entStore2=this.entEntities[(dblStore|0)][(dblStore2|0)];
if (entStore2 == null ) return;
if (entStore === entStore2 ) {
this.entEntities[(dblStore|0)][(dblStore2|0)]=entStore.entNext;
entStore.entNext=null;
} else {
while (entStore2.entNext != null  && entStore2.entNext !== entStore  ){
entStore2=entStore2.entNext;
}
if (entStore2.entNext == null ) {
return;
}entStore2.entNext=entStore2.entNext.entNext;
entStore.entNext=null;
entStore2=entStore2.entNext;
}while (entStore2 != null ){
if (entStore.strName.equalsIgnoreCase$S(entStore2.strName)) {
--entStore2.intNum;
}entStore2=entStore2.entNext;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (dblStore < 0 ) dblStore=0;
if (dblStore2 < 0 ) dblStore2=0;
 else ++dblStore2;
for (; dblStore < this.mapSize ; dblStore++) {
for (; dblStore2 < this.mapSize ; dblStore2++) {
entStore2=this.entEntities[(dblStore|0)][(dblStore2|0)];
while (entStore2 != null ){
if (entStore.strName.equalsIgnoreCase$S(entStore2.strName)) {
--entStore2.intNum;
}entStore2=entStore2.entNext;
}
}
dblStore2=0;
}
}});

Clazz.newMeth(C$, 'removeEntityFromBuffer$__Entity',  function (entStore) {
{
this.vctEntities.removeElement$O(entStore);
var entStore2;
var intStore=(entStore.intLocX|0) - this.LocX + this.viewRange;
var intStore2=(entStore.intLocY|0) - this.LocY + this.viewRange;
try {
entStore2=this.entBuffer[intStore][intStore2];
while (entStore2 !== entStore ){
entStore2=entStore2.entNext;
}
entStore2=entStore2.entNext;
while (entStore2 != null ){
if (entStore.strName.equalsIgnoreCase$S(entStore2.strName)) {
--entStore2.intNum;
}entStore2=entStore2.entNext;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (intStore < 0) intStore=0;
if (intStore2 < 0) intStore2=0;
 else ++intStore2;
for (; intStore < this.mapSize; intStore++) {
for (; intStore2 < this.mapSize; intStore2++) {
entStore2=this.entBuffer[intStore][intStore2];
while (entStore2 != null ){
if (entStore.strName.equalsIgnoreCase$S(entStore2.strName)) {
--entStore2.intNum;
}entStore2=entStore2.entNext;
}
}
intStore2=0;
}
}});

Clazz.newMeth(C$, 'run$',  function () {
var intStore;
var intStore2;
var strStore;
var strStore2;
var entStore=null;
var entStore2;
intStore=0;
var lngStore;
var incoming=0;
var blnBreak=false;
while (incoming != -1){
try {
incoming=this.stmIn.read$();
switch (incoming) {
case (0):
{
this.blnLoaded=false;
this.blnConnected=false;
this.sckConnection.close$();
return;
}case (1):
{
this.strRCAddress=this.stmIn.readLine$();
try {
this.thrGraphics.thread.stop$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
this.thrGraphics.thread=Clazz.new_($I$(6,1).c$$Runnable,[this.thrGraphics]);
this.thrGraphics.thread.start$();
break;
}case (2):
{
{
var i;
var i2;
var changeLocX=Integer.parseInt$S(this.stmIn.readLine$()) - this.LocX;
var changeLocY=Integer.parseInt$S(this.stmIn.readLine$()) - this.LocY;
this.LocX+=changeLocX;
this.LocY+=changeLocY;
for (i=0; i < this.mapSize; i++) {
for (i2=0; i2 < this.mapSize; i2++) {
this.shrMap[i][i2]=Short.parseShort$S(this.stmIn.readLine$());
}
}
var iter=this.vctEntities.iterator$();
while (iter.hasNext$()){
entStore=iter.next$();
if (Math.abs(entStore.intLocX - this.LocX) > this.viewRange  || Math.abs(entStore.intLocY - this.LocY) > this.viewRange  ) {
iter.remove$();
}}
this.entBuffer=this.entEntities;
this.entEntities=Clazz.array($I$(7), [this.mapSize, this.mapSize]);
for (i=0; i < this.mapSize; i++) {
for (i2=0; i2 < this.mapSize; i2++) {
entStore=this.entBuffer[i][i2];
if (entStore != null ) {
try {
this.entEntities[i - changeLocX][i2 - changeLocY]=entStore;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
do {
this.removeEntityFromBuffer$__Entity(entStore);
entStore=entStore.entNext;
} while (entStore != null );
} else {
throw e;
}
}
}}
}
this.frame.lblInfo.setText$S("HP: " + this.inthp + "/" + this.intmaxhp + " MP: " + this.intsp + "/" + this.intmaxsp + " Loc: " + this.LocX + "/" + this.LocY );
this.vctMerchantItems=Clazz.new_($I$(10,1).c$$I$I,[0, 5]);
this.reloadJComboBoxLook$();
this.reloadJComboBoxGet$();
this.reloadJComboBoxAttack$();
this.update$();
this.paint$();
}break;
}case (3):
{
this.addText$S(this.stmIn.readLine$() + "\n");
break;
}case (4):
{
{
strStore=this.stmIn.readLine$();
intStore=Byte.parseByte$S(this.stmIn.readLine$());
if (intStore == 0) {
try {
entStore=Clazz.new_([strStore, Long.parseLong$S(this.stmIn.readLine$()), Integer.parseInt$S(this.stmIn.readLine$()), Integer.parseInt$S(this.stmIn.readLine$()), Integer.parseInt$S(this.stmIn.readLine$()), Integer.parseInt$S(this.stmIn.readLine$()), intStore],$I$(7,1).c$$S$J$D$D$I$I$I);
} catch (e) {
if (Clazz.exceptionOf(e,"NullPointerException")){
entStore=null;
} else {
throw e;
}
}
} else {
try {
entStore=Clazz.new_([strStore, Long.parseLong$S(this.stmIn.readLine$()), Integer.parseInt$S(this.stmIn.readLine$()), Integer.parseInt$S(this.stmIn.readLine$()), Integer.parseInt$S(this.stmIn.readLine$()), -1, intStore],$I$(7,1).c$$S$J$D$D$I$I$I);
} catch (e) {
if (Clazz.exceptionOf(e,"NullPointerException")){
entStore=null;
} else {
throw e;
}
}
}if (entStore != null ) {
this.addEntity$__Entity(entStore);
}this.reloadJComboBoxLook$();
this.reloadJComboBoxGet$();
this.reloadJComboBoxAttack$();
this.update$();
this.paint$();
}break;
}case (5):
{
this.inthp=Integer.parseInt$S(this.stmIn.readLine$());
this.intmaxhp=Integer.parseInt$S(this.stmIn.readLine$());
this.intsp=Integer.parseInt$S(this.stmIn.readLine$());
this.intmaxsp=Integer.parseInt$S(this.stmIn.readLine$());
this.frame.lblInfo.setText$S("HP: " + this.inthp + "/" + this.intmaxhp + " MP: " + this.intsp + "/" + this.intmaxsp + " Loc: " + this.LocX + "/" + this.LocY );
break;
}case (6):
{
this.vctChoiceDropItems=Clazz.new_($I$(10,1).c$$I$I,[0, 5]);
this.frame.frmEquipment.blnRefreshMenus=true;
try {
this.frame.frmEquipment.chcWield.removeAll$();
this.frame.frmEquipment.chcArms.removeAll$();
this.frame.frmEquipment.chcLegs.removeAll$();
this.frame.frmEquipment.chcTorso.removeAll$();
this.frame.frmEquipment.chcWaist.removeAll$();
this.frame.frmEquipment.chcNeck.removeAll$();
this.frame.frmEquipment.chcSkull.removeAll$();
this.frame.frmEquipment.chcEyes.removeAll$();
this.frame.frmEquipment.chcHands.removeAll$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
try {
intStore=Integer.parseInt$S(this.stmIn.readLine$());
while (true){
strStore=this.stmIn.readLine$();
switch (intStore) {
case (0):
{
this.vctChoiceDropItems.addElement$O(strStore);
break;
}case (1):
{
this.vctChoiceDropItems.addElement$O(strStore);
this.frame.frmEquipment.chcWield.addItem$O(strStore);
break;
}case (2):
{
this.vctChoiceDropItems.addElement$O(strStore);
this.frame.frmEquipment.chcArms.addItem$O(strStore);
break;
}case (3):
{
this.vctChoiceDropItems.addElement$O(strStore);
this.frame.frmEquipment.chcLegs.addItem$O(strStore);
break;
}case (4):
{
this.vctChoiceDropItems.addElement$O(strStore);
this.frame.frmEquipment.chcTorso.addItem$O(strStore);
break;
}case (5):
{
this.vctChoiceDropItems.addElement$O(strStore);
this.frame.frmEquipment.chcWaist.addItem$O(strStore);
break;
}case (6):
{
this.vctChoiceDropItems.addElement$O(strStore);
this.frame.frmEquipment.chcNeck.addItem$O(strStore);
break;
}case (7):
{
this.vctChoiceDropItems.addElement$O(strStore);
this.frame.frmEquipment.chcSkull.addItem$O(strStore);
break;
}case (8):
{
this.vctChoiceDropItems.addElement$O(strStore);
this.frame.frmEquipment.chcEyes.addItem$O(strStore);
break;
}case (9):
{
this.vctChoiceDropItems.addElement$O(strStore);
this.frame.frmEquipment.chcHands.addItem$O(strStore);
break;
}}
intStore=Integer.parseInt$S(this.stmIn.readLine$());
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
this.frame.frmEquipment.chcWield.addItem$O("none");
this.frame.frmEquipment.chcArms.addItem$O("none");
this.frame.frmEquipment.chcLegs.addItem$O("none");
this.frame.frmEquipment.chcTorso.addItem$O("none");
this.frame.frmEquipment.chcWaist.addItem$O("none");
this.frame.frmEquipment.chcNeck.addItem$O("none");
this.frame.frmEquipment.chcSkull.addItem$O("none");
this.frame.frmEquipment.chcEyes.addItem$O("none");
this.frame.frmEquipment.chcHands.addItem$O("none");
this.frame.frmEquipment.blnRefreshMenus=false;
this.reloadJComboBoxDrop$();
break;
}case (7):
{
try {
this.frame.frmEquipment.JLabel9.setText$S("Wielded: " + this.stmIn.readLine$());
this.frame.frmEquipment.JLabel2.setText$S("Arms: " + this.stmIn.readLine$());
this.frame.frmEquipment.JLabel3.setText$S("Legs: " + this.stmIn.readLine$());
this.frame.frmEquipment.JLabel1.setText$S("Torso: " + this.stmIn.readLine$());
this.frame.frmEquipment.JLabel6.setText$S("Waist: " + this.stmIn.readLine$());
this.frame.frmEquipment.JLabel4.setText$S("Neck: " + this.stmIn.readLine$());
this.frame.frmEquipment.lblSkull.setText$S("Skull: " + this.stmIn.readLine$());
this.frame.frmEquipment.JLabel5.setText$S("Eyes: " + this.stmIn.readLine$());
this.frame.frmEquipment.JLabel7.setText$S("Hands: " + this.stmIn.readLine$());
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Error loading equipment" + e.toString());
} else {
throw e;
}
}
break;
}case (8):
{
try {
strStore2="";
strStore=this.stmIn.readLine$();
while (!strStore.equals$O(".")){
strStore2+=strStore + "\n";
strStore=this.stmIn.readLine$();
}
this.frame.txtOther.setText$S(strStore2);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Error loading stats" + e.toString());
} else {
throw e;
}
}
break;
}case (9):
{
this.blnLoaded=false;
break;
}case (10):
{
strStore=this.stmIn.readLine$();
this.vctChoiceActionItems=Clazz.new_($I$(10,1).c$$I$I,[0, 5]);
while (!strStore.equals$O(".")){
this.vctChoiceActionItems.addElement$O(strStore);
strStore=this.stmIn.readLine$();
}
this.reloadJComboBoxAction$();
break;
}case (11):
{
try {
if (this.blnApplet) {
this.addText$S("Loading music.\n");
this.intMusicTypes=Integer.parseInt$S(this.stmIn.readLine$());
this.audMusic=Clazz.array($I$(15), [this.intMusicTypes, null]);
this.intNumSongs=Clazz.array(Integer.TYPE, [this.intMusicTypes]);
for (intStore=0; intStore < this.intMusicTypes; intStore++) {
this.intNumSongs[intStore]=Integer.parseInt$S(this.stmIn.readLine$());
this.audMusic[intStore]=Clazz.array($I$(15), [this.intNumSongs[intStore]]);
for (intStore2=0; intStore2 < this.intNumSongs[intStore]; intStore2++) {
strStore=this.stmIn.readLine$();
try {
this.audMusic[intStore][intStore2]=this.appShell.getAudioClip$java_net_URL(Clazz.new_($I$(16,1).c$$S,[strStore]));
while (this.audMusic[intStore][intStore2] == null ){
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
System.err.println$S("Error while trying to load music file " + strStore + ":" + e.toString() );
} else {
throw e;
}
}
}
}
this.addText$S("Music loaded.\n");
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"NumberFormatException")){
this.blnMusic=false;
this.addText$S("Your java virtual machine does not support midi music\n");
System.err.println$S("Error while trying to load music files:" + e.toString());
} else {
throw e;
}
}
break;
}case (12):
{
if (this.blnMusic) {
try {
intStore=Integer.parseInt$S(this.stmIn.readLine$());
if (this.audMusicPlaying != null ) this.audMusicPlaying.stop$();
this.audMusicPlaying=this.audMusic[intStore][((Math.random() * this.intNumSongs[intStore])|0)];
this.audMusicPlaying.loop$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"NumberFormatException")){
System.err.println$S("Error while trying to play music file:" + e.toString());
} else {
throw e;
}
}
}break;
}case (13):
{
this.stmOut.writeBytes$S("notdead\n");
break;
}case (14):
{
this.blnLoaded=true;
break;
}case (15):
{
try {
this.audSFX[Integer.parseInt$S(this.stmIn.readLine$())].play$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
break;
}case (16):
{
{
lngStore=Long.parseLong$S(this.stmIn.readLine$());
this.removeEntity$J(lngStore);
this.reloadJComboBoxLook$();
this.reloadJComboBoxGet$();
this.reloadJComboBoxAttack$();
this.update$();
this.paint$();
}break;
}case (17):
{
strStore=this.stmIn.readLine$();
while (!strStore.equals$O(".")){
this.vctMerchantItems.addElement$O(strStore);
strStore=this.stmIn.readLine$();
}
this.frame.btnMerchant.setEnabled$Z(true);
this.reloadJComboBoxBuy$();
break;
}case (18):
{
var frmEdit=Clazz.new_([this.stmIn.readLine$(), this, true],$I$(17,1).c$$S$__Dusk$Z);
frmEdit.show$();
strStore=this.stmIn.readLine$();
while (!strStore.equals$O("--EOF--")){
frmEdit.txtEdit.append$S(strStore + "\n");
strStore=this.stmIn.readLine$();
}
break;
}case (19):
{
{
this.mapSize=Integer.parseInt$S(this.stmIn.readLine$());
this.viewRange=((this.mapSize - 1)/2|0);
this.entEntities=Clazz.array($I$(7), [this.mapSize, this.mapSize]);
this.shrMap=Clazz.array(Short.TYPE, [this.mapSize, this.mapSize]);
if (this.blnApplet) {
this.stmOut.writeBytes$S("appletimages\n");
} else {
this.stmOut.writeBytes$S("applicationimages\n");
}this.scaleWindow$();
}break;
}case (20):
{
var frmEdit=Clazz.new_([this.stmIn.readLine$(), this, false],$I$(17,1).c$$S$__Dusk$Z);
frmEdit.show$();
strStore=this.stmIn.readLine$();
while (!strStore.equals$O("--EOF--")){
frmEdit.txtEdit.append$S(strStore + "\n");
strStore=this.stmIn.readLine$();
}
break;
}case (21):
{
this.frmMerchant.hide$();
this.vctMerchantItems=Clazz.new_($I$(10,1).c$$I$I,[0, 5]);
this.vctSell=Clazz.new_($I$(10,1).c$$I$I,[0, 5]);
this.frame.btnMerchant.setEnabled$Z(false);
break;
}case (22):
{
this.vctSell=Clazz.new_($I$(10,1).c$$I$I,[0, 5]);
strStore=this.stmIn.readLine$();
while (!strStore.equals$O(".")){
this.vctSell.addElement$O(strStore);
strStore=this.stmIn.readLine$();
}
this.reloadJComboBoxSell$();
break;
}case (23):
{
this.addText$I$I$I$S(Integer.parseInt$S(strStore=this.stmIn.readLine$()), Integer.parseInt$S(strStore=this.stmIn.readLine$()), Integer.parseInt$S(strStore=this.stmIn.readLine$()), this.stmIn.readLine$() + "\n");
break;
}case (24):
{
var ID=Long.parseLong$S(this.stmIn.readLine$());
{
for (var i=0; i < this.vctEntities.size$(); i++) {
entStore=this.vctEntities.elementAt$I(i);
if (Long.$eq(entStore.ID,ID )) {
if (entStore.intMoveDirection == -1) ;this.removeEntity$__Entity(entStore);
if (entStore.intStep != -1) {
if (entStore.intMoveDirection == 0) {
entStore.intStep^=1;
} else {
entStore.intStep=1;
entStore.intMoveDirection=0;
}}entStore.intLocY+=-1;
entStore.intLocX+=0;
try {
this.addEntity$__Entity(entStore);
} catch (var13) {
if (Clazz.exceptionOf(var13,"Exception")){
} else {
throw var13;
}
}
this.reloadJComboBoxAttack$();
if (Long.$ne(ID,ID )) {
this.update$();
this.paint$();
}break;
}}
}this.update$();
break;
}case (25):
{
var ID=Long.parseLong$S(this.stmIn.readLine$());
{
for (var i=0; i < this.vctEntities.size$(); i++) {
entStore=this.vctEntities.elementAt$I(i);
if (Long.$eq(entStore.ID,ID )) {
if (entStore.intMoveDirection == -1) ;this.removeEntity$__Entity(entStore);
if (entStore.intStep != -1) {
if (entStore.intMoveDirection == 1) {
entStore.intStep^=1;
} else {
entStore.intStep=3;
entStore.intMoveDirection=1;
}}entStore.intLocY+=1;
entStore.intLocX+=0;
try {
this.addEntity$__Entity(entStore);
} catch (var13) {
if (Clazz.exceptionOf(var13,"Exception")){
} else {
throw var13;
}
}
this.reloadJComboBoxAttack$();
if (Long.$ne(ID,ID )) {
this.update$();
this.paint$();
}break;
}}
}this.update$();
break;
}case (26):
{
var ID=Long.parseLong$S(this.stmIn.readLine$());
{
for (var i=0; i < this.vctEntities.size$(); i++) {
entStore=this.vctEntities.elementAt$I(i);
if (Long.$eq(entStore.ID,ID )) {
if (entStore.intMoveDirection == -1) ;this.removeEntity$__Entity(entStore);
if (entStore.intStep != -1) {
if (entStore.intMoveDirection == 2) {
entStore.intStep^=1;
} else {
entStore.intStep=5;
entStore.intMoveDirection=2;
}}entStore.intLocY+=0;
entStore.intLocX+=-1;
try {
this.addEntity$__Entity(entStore);
} catch (var13) {
if (Clazz.exceptionOf(var13,"Exception")){
} else {
throw var13;
}
}
this.reloadJComboBoxAttack$();
if (Long.$ne(ID,ID )) {
this.update$();
this.paint$();
}break;
}}
}this.update$();
break;
}case (27):
{
var ID=Long.parseLong$S(this.stmIn.readLine$());
{
for (var i=0; i < this.vctEntities.size$(); i++) {
entStore=this.vctEntities.elementAt$I(i);
if (Long.$eq(entStore.ID,ID )) {
if (entStore.intMoveDirection == -1) ;this.removeEntity$__Entity(entStore);
if (entStore.intStep != -1) {
if (entStore.intMoveDirection == 3) {
entStore.intStep^=1;
} else {
entStore.intStep=7;
entStore.intMoveDirection=3;
}}entStore.intLocY+=0;
entStore.intLocX+=1;
try {
this.addEntity$__Entity(entStore);
} catch (var13) {
if (Clazz.exceptionOf(var13,"Exception")){
} else {
throw var13;
}
}
this.reloadJComboBoxAttack$();
if (Long.$ne(ID,ID )) {
this.update$();
this.paint$();
}break;
}}
}this.update$();
break;
}case (28):
{
this.range=Integer.parseInt$S(this.stmIn.readLine$());
break;
}case (29):
{
lngStore=Long.parseLong$S(this.stmIn.readLine$());
intStore=Integer.parseInt$S(this.stmIn.readLine$());
{
var iter=this.vctEntities.iterator$();
while (iter.hasNext$()){
entStore=iter.next$();
if (Long.$eq(entStore.ID,lngStore )) {
entStore.intFlag=intStore;
break;
}}
}this.update$();
break;
}case (30):
{
{
var iter=this.vctEntities.iterator$();
while (iter.hasNext$()){
entStore=iter.next$();
entStore.intFlag=0;
}
}this.update$();
break;
}case (31):
{
if (!this.frmBattle.isShowing$()) this.frmBattle.show$();
strStore=this.stmIn.readLine$();
this.frmBattle.setTitle$S(strStore);
this.frmBattle.txtEdit.setText$S("");
this.frame.lblTarget.setText$S("");
break;
}case (32):
{
if (!this.frmBattle.isShowing$()) this.frmBattle.show$();
strStore=this.stmIn.readLine$();
this.frmBattle.setTitle$S(strStore);
this.frame.lblTarget.setText$S(strStore);
break;
}case (33):
{
if (!this.frmBattle.isShowing$()) this.frmBattle.show$();
strStore=this.stmIn.readLine$();
this.frmBattle.txtEdit.append$S(strStore + "\n");
break;
}default:
{
System.err.println$S("Lost incoming byte: " + incoming);
}}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"NumberFormatException")){
System.err.println$S("Error at run() with value " + incoming + " : " + e.toString() );
e.printStackTrace$java_io_PrintStream(System.out);
this.addText$S("Error at run() with value " + incoming + " : " + e.toString() + "\n" );
this.blnConnected=false;
return;
} else {
throw e;
}
}
}
System.err.println$S("Error at run() with value " + incoming);
});

Clazz.newMeth(C$, 'reloadJComboBoxLook$',  function () {
var i;
var i2;
var entStore;
this.blnMenuRefresh=true;
try {
this.frame.chcLook.removeAllItems$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
;this.frame.chcLook.addItem$O("Look");
for (i=0; i < this.mapSize; i++) {
for (i2=0; i2 < this.mapSize; i2++) {
entStore=this.entEntities[i][i2];
while (entStore != null ){
if (entStore.intNum == 0) this.frame.chcLook.addItem$O(entStore.strName);
 else this.frame.chcLook.addItem$O(entStore.intNum + "." + entStore.strName );
entStore=entStore.entNext;
}
}
}
this.blnMenuRefresh=false;
});

Clazz.newMeth(C$, 'reloadJComboBoxAttack$',  function () {
var i;
var i2;
var entStore;
this.blnMenuRefresh=true;
try {
this.frame.chcAttack.removeAllItems$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
;this.frame.chcAttack.addItem$O("Attack");
for (i=0; i < this.mapSize; i++) {
for (i2=0; i2 < this.mapSize; i2++) {
entStore=this.entEntities[i][i2];
while (entStore != null ){
if ((entStore.intType == 0 || entStore.intType == 1  || entStore.intType == 4 ) && (Math.abs(this.LocX - entStore.intLocX) + Math.abs(this.LocY - entStore.intLocY) < 2 ) ) {
if (entStore.intNum == 0) this.frame.chcAttack.addItem$O(entStore.strName);
 else this.frame.chcAttack.addItem$O(entStore.intNum + "." + entStore.strName );
}entStore=entStore.entNext;
}
}
}
this.blnMenuRefresh=false;
});

Clazz.newMeth(C$, 'reloadJComboBoxGet$',  function () {
var i;
var i2;
var entStore;
this.blnMenuRefresh=true;
try {
this.frame.chcGet.removeAllItems$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
;this.frame.chcGet.addItem$O("Get");
for (i=0; i < this.mapSize; i++) {
for (i2=0; i2 < this.mapSize; i2++) {
entStore=this.entEntities[i][i2];
while (entStore != null ){
if (entStore.intType == 1 && (this.LocX - entStore.intLocX) + (this.LocY - entStore.intLocY) < 2  ) {
if (entStore.intNum == 0) this.frame.chcGet.addItem$O(entStore.strName);
 else this.frame.chcGet.addItem$O(entStore.intNum + "." + entStore.strName );
}entStore=entStore.entNext;
}
}
}
this.blnMenuRefresh=false;
});

Clazz.newMeth(C$, 'reloadJComboBoxBuy$',  function () {
this.blnMenuRefresh=true;
try {
this.frmMerchant.chcBuy.removeAllItems$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
var i;
for (i=0; i < this.vctMerchantItems.size$(); i++) {
this.frmMerchant.chcBuy.addItem$O(this.vctMerchantItems.elementAt$I(i));
}
this.blnMenuRefresh=false;
});

Clazz.newMeth(C$, 'reloadJComboBoxSell$',  function () {
this.blnMenuRefresh=true;
try {
this.frmMerchant.chcSell.removeAllItems$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
var i;
for (i=0; i < this.vctSell.size$(); i++) {
this.frmMerchant.chcSell.addItem$O(this.vctSell.elementAt$I(i));
}
this.blnMenuRefresh=false;
});

Clazz.newMeth(C$, 'reloadJComboBoxDrop$',  function () {
this.blnMenuRefresh=true;
try {
this.frame.chcDrop.removeAllItems$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
this.frame.chcDrop.addItem$O("Drop");
var i;
for (i=0; i < this.vctChoiceDropItems.size$(); i++) {
this.frame.chcDrop.addItem$O(this.vctChoiceDropItems.elementAt$I(i));
}
this.blnMenuRefresh=false;
});

Clazz.newMeth(C$, 'reloadJComboBoxAction$',  function () {
this.blnMenuRefresh=true;
try {
this.frame.chcAction.removeAllItems$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
this.frame.chcAction.addItem$O("Action");
var i;
for (i=0; i < this.vctChoiceActionItems.size$(); i++) {
this.frame.chcAction.addItem$O(this.vctChoiceActionItems.elementAt$I(i));
}
this.blnMenuRefresh=false;
});

Clazz.newMeth(C$, 'scaleImages$',  function () {
try {
if (this.imgMap != null ) this.imgMap.flush$();
if (this.imgPlayers != null ) this.imgMap.flush$();
if (this.imgSprites != null ) this.imgMap.flush$();
this.imgMap=this.imgOriginalMap.getScaledInstance$I$I$I(this.intImageSize * (this.numMapImages + 1), this.intImageSize, 1);
this.imgPlayers=this.imgOriginalPlayers.getScaledInstance$I$I$I(this.intImageSize * (this.numPlayerImages + 1) * 8 , this.intImageSize, 1);
this.imgSprites=this.imgOriginalSprites.getScaledInstance$I$I$I(this.intImageSize * (this.numSpriteImages + 1), this.intImageSize, 1);
try {
var mdtTracker=Clazz.new_($I$(18,1).c$$java_awt_Component,[this.frame]);
mdtTracker.addImage$java_awt_Image$I(this.imgMap, 0);
mdtTracker.addImage$java_awt_Image$I(this.imgPlayers, 0);
mdtTracker.addImage$java_awt_Image$I(this.imgSprites, 0);
mdtTracker.waitForAll$();
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
System.err.println$S("Error while scaling for images: " + e.toString());
} else {
throw e;
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'scaleWindow$',  function () {
if ((this.frame.pnlContents.getBounds$().width - 310) > (this.frame.pnlContents.getBounds$().height - 100)) {
this.frame.pnlGraphics.setSize$I$I(this.frame.pnlContents.getBounds$().height - 100, this.frame.pnlContents.getBounds$().height - 100);
} else {
this.frame.pnlGraphics.setSize$I$I(this.frame.pnlContents.getBounds$().width - 310, this.frame.pnlContents.getBounds$().width - 310);
}this.intImageSize=(this.frame.pnlGraphics.getBounds$().width/this.mapSize|0);
if (this.intImageSize < 1) this.intImageSize=1;
this.frame.pnlGraphics.setSize$I$I(this.intImageSize * this.mapSize, this.intImageSize * this.mapSize);
this.imgDisplay=this.frame.pnlGraphics.createImage$I$I(this.intImageSize * this.mapSize, this.intImageSize * this.mapSize);
this.gD=this.imgDisplay.getGraphics$();
this.g=this.frame.pnlGraphics.getGraphics$();
this.frame.txtInput.setLocation$I$I(0, this.frame.pnlGraphics.getBounds$().height);
this.frame.scrText.setLocation$I$I(0, this.frame.pnlGraphics.getBounds$().height + 25);
this.frame.scrText.setSize$I$I(this.frame.pnlContents.getBounds$().width, this.frame.pnlContents.getBounds$().height - this.frame.pnlGraphics.getBounds$().height - 25 );
this.frame.txtInput.setSize$I$I(this.frame.pnlContents.getBounds$().width, 25);
this.frame.scrText.getViewport$().setSize$I$I(this.frame.pnlContents.getBounds$().width, this.frame.pnlContents.getBounds$().height - this.frame.pnlGraphics.getBounds$().height - 25 );
this.frame.txtInput.setSize$I$I(this.frame.pnlContents.getBounds$().width, 25);
this.frame.pnlStats.setSize$I$I(this.frame.pnlContents.getBounds$().width - this.frame.pnlGraphics.getBounds$().width, this.frame.pnlGraphics.getBounds$().height);
this.frame.pnlStats.setLocation$I$I(this.frame.pnlGraphics.getBounds$().width, 0);
this.frame.txtOther.setSize$I$I(this.frame.pnlStats.getBounds$().width - 140, this.frame.pnlStats.getBounds$().height - 60);
this.frame.lblTarget.setSize$I$I(this.frame.pnlStats.getBounds$().width, 20);
this.frame.lblInfo.setSize$I$I(this.frame.pnlContents.getBounds$().width, 20);
this.frame.scrText.getVerticalScrollBar$().setValue$I(this.frame.scrText.getVerticalScrollBar$().getMaximum$());
System.gc$();
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (evt) {
if (!this.blnConnected) return;
if (evt.getComponent$() === this.frame.pnlGraphics ) {
var x=evt.getX$();
var y=evt.getY$();
if (!this.blnLoaded) return;
var destX=((x/this.intImageSize|0)) + this.LocX - this.viewRange;
var destY=((y/this.intImageSize|0)) + this.LocY - this.viewRange;
try {
this.stmOut.writeBytes$S("goto " + destX + " " + destY + "\n" );
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.addText$S("Error at mouseDown(): " + e.toString() + "\n" );
} else {
throw e;
}
}
}this.frame.txtInput.requestFocus$();
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (evt) {
if (!this.blnConnected) return;
{
try {
var nkey=evt.getKeyCode$();
if (nkey == 10) {
var strStore=this.frame.txtInput.getText$();
if (strStore.startsWith$S("!")) {
if (strStore.length$() == 1) {
this.strSet=null;
} else {
this.strSet=strStore.substring$I(1);
}} else {
this.stmOut.writeBytes$S(strStore + "\n");
}this.frame.txtInput.setText$S("");
}if (this.blnLoaded) {
switch (nkey) {
case 38:
{
this.stmOut.writeBytes$S("n\n");
if (this.strSet != null ) {
this.stmOut.writeBytes$S(this.strSet + "\n");
}return;
}case 40:
{
this.stmOut.writeBytes$S("s\n");
if (this.strSet != null ) {
this.stmOut.writeBytes$S(this.strSet + "\n");
}return;
}case 37:
{
this.stmOut.writeBytes$S("w\n");
if (this.strSet != null ) {
this.stmOut.writeBytes$S(this.strSet + "\n");
}return;
}case 39:
{
this.stmOut.writeBytes$S("e\n");
if (this.strSet != null ) {
this.stmOut.writeBytes$S(this.strSet + "\n");
}}}
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.addText$S("Error at keyPressed(): " + e.toString() + "\n" );
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (evt) {
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (evt) {
});

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {
this.scaleWindow$();
this.scaleImages$();
this.update$();
this.paint$();
});

Clazz.newMeth(C$, 'componentMoved$java_awt_event_ComponentEvent',  function (e) {
});

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent',  function (e) {
});

Clazz.newMeth(C$, 'componentHidden$java_awt_event_ComponentEvent',  function (e) {
});

Clazz.newMeth(C$, 'thisWindowClosing$java_awt_event_WindowEvent',  function (e) {
this.frame.setVisible$Z(false);
});

Clazz.newMeth(C$, 'update$',  function () {
{
var i;
var i2;
var entStore;
for (i=0; i < this.mapSize; i++) {
for (i2=0; i2 < this.mapSize; i2++) {
try {
this.gD.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(this.imgMap, i * this.intImageSize, i2 * this.intImageSize, (i + 1) * this.intImageSize, (i2 + 1) * this.intImageSize, this.shrMap[i][i2] * this.intImageSize, 0, (this.shrMap[i][i2] + 1) * this.intImageSize, this.intImageSize, null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
try {
this.gD.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(this.imgMap, i * this.intImageSize, i2 * this.intImageSize, (i + 1) * this.intImageSize, (i2 + 1) * this.intImageSize, 0, 0, this.intImageSize, this.intImageSize, null);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
} else {
throw exc;
}
}
} else {
throw e;
}
}
}
}
for (i=0; i < this.vctEntities.size$(); i++) {
entStore=this.vctEntities.elementAt$I(i);
this.drawEntity$__Entity(entStore);
}
}});

Clazz.newMeth(C$, 'drawEntity$__Entity',  function (entStore) {
var x=entStore.intLocX - this.LocX + this.viewRange;
var y=entStore.intLocY - this.LocY + this.viewRange;
if (entStore.intFlag != 0) {
if (entStore.intFlag == 1) {
this.gD.setColor$java_awt_Color($I$(14).green);
this.gD.drawRoundRect$I$I$I$I$I$I(((x * this.intImageSize)|0), ((y * this.intImageSize)|0), this.intImageSize, this.intImageSize, (this.intImageSize/3|0), (this.intImageSize/3|0));
} else if (entStore.intFlag == 2) {
this.gD.setColor$java_awt_Color($I$(14).red);
this.gD.drawRoundRect$I$I$I$I$I$I(((x * this.intImageSize)|0), ((y * this.intImageSize)|0), this.intImageSize, this.intImageSize, (this.intImageSize/3|0), (this.intImageSize/3|0));
}}if (entStore.intStep == -1) {
try {
this.gD.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(this.imgSprites, ((x * this.intImageSize)|0) - 52, ((y * this.intImageSize)|0) - 52, (((x + 1.5) * this.intImageSize)|0), (((y + 1) * this.intImageSize)|0), entStore.intImage * this.intImageSize, 0, (entStore.intImage + 1) * this.intImageSize, this.intImageSize, null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
} else {
try {
this.gD.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(this.imgPlayers, ((x * this.intImageSize)|0) - 52, ((y * this.intImageSize)|0) - 52, (((x + 1.5) * this.intImageSize)|0), (((y + 1) * this.intImageSize)|0), (entStore.intImage * 8 + entStore.intStep) * this.intImageSize, 0, (entStore.intImage * 8 + entStore.intStep + 1) * this.intImageSize, this.intImageSize, null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}if (entStore.intNum == 0) {
this.gD.setColor$java_awt_Color($I$(14).black);
this.gD.drawString$S$I$I(entStore.strName, ((x * this.intImageSize)|0) - 1, (((y + 1) * this.intImageSize)|0));
this.gD.setColor$java_awt_Color($I$(14).white);
this.gD.drawString$S$I$I(entStore.strName, ((x * this.intImageSize)|0), (((y + 1) * this.intImageSize)|0));
} else {
this.gD.setColor$java_awt_Color($I$(14).black);
this.gD.drawString$S$I$I(entStore.intNum + "." + entStore.strName , ((x * this.intImageSize)|0) - 1, (((y + 1) * this.intImageSize)|0));
this.gD.setColor$java_awt_Color($I$(14).white);
this.gD.drawString$S$I$I(entStore.intNum + "." + entStore.strName , ((x * this.intImageSize)|0), (((y + 1) * this.intImageSize)|0));
}});

Clazz.newMeth(C$, 'imageUpdate$java_awt_Image$I$I$I$I$I',  function (img, infoflags, x, y, width, height) {
this.paint$();
return true;
});

Clazz.newMeth(C$, 'paint$',  function () {
this.g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.imgDisplay, 0, 0, this);
});

C$.$static$=function(){C$.$static$=0;
C$.strVersion="2.7.1.Z47";
};
})();
;Clazz.setTVer('3.3.1-v5');//Created 2024-06-07 21:09:51 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
