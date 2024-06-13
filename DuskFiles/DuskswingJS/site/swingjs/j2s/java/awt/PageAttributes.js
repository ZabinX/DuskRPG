(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,['java.awt.PageAttributes','.ColorType'],['java.awt.PageAttributes','.OriginType'],'InternalError','java.util.Locale',['java.awt.PageAttributes','.MediaType'],['java.awt.PageAttributes','.OrientationRequestedType'],['java.awt.PageAttributes','.PrintQualityType']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PageAttributes", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Cloneable');
C$.$classes$=[['ColorType',25],['MediaType',25],['OrientationRequestedType',25],['OriginType',25],['PrintQualityType',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['color','java.awt.PageAttributes.ColorType','media','java.awt.PageAttributes.MediaType','orientationRequested','java.awt.PageAttributes.OrientationRequestedType','origin','java.awt.PageAttributes.OriginType','printQuality','java.awt.PageAttributes.PrintQualityType','printerResolution','int[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.setColor$java_awt_PageAttributes_ColorType($I$(1).MONOCHROME);
this.setMediaToDefault$();
this.setOrientationRequestedToDefault$();
this.setOrigin$java_awt_PageAttributes_OriginType($I$(2).PHYSICAL);
this.setPrintQualityToDefault$();
this.setPrinterResolutionToDefault$();
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_PageAttributes',  function (obj) {
;C$.$init$.apply(this);
this.set$java_awt_PageAttributes(obj);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_PageAttributes_ColorType$java_awt_PageAttributes_MediaType$java_awt_PageAttributes_OrientationRequestedType$java_awt_PageAttributes_OriginType$java_awt_PageAttributes_PrintQualityType$IA',  function (color, media, orientationRequested, origin, printQuality, printerResolution) {
;C$.$init$.apply(this);
this.setColor$java_awt_PageAttributes_ColorType(color);
this.setMedia$java_awt_PageAttributes_MediaType(media);
this.setOrientationRequested$java_awt_PageAttributes_OrientationRequestedType(orientationRequested);
this.setOrigin$java_awt_PageAttributes_OriginType(origin);
this.setPrintQuality$java_awt_PageAttributes_PrintQualityType(printQuality);
this.setPrinterResolution$IA(printerResolution);
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(3,1));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'set$java_awt_PageAttributes',  function (obj) {
this.color=obj.color;
this.media=obj.media;
this.orientationRequested=obj.orientationRequested;
this.origin=obj.origin;
this.printQuality=obj.printQuality;
this.printerResolution=obj.printerResolution;
});

Clazz.newMeth(C$, 'getColor$',  function () {
return this.color;
});

Clazz.newMeth(C$, 'setColor$java_awt_PageAttributes_ColorType',  function (color) {
if (color == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for attribute color"]);
}this.color=color;
});

Clazz.newMeth(C$, 'getMedia$',  function () {
return this.media;
});

Clazz.newMeth(C$, 'setMedia$java_awt_PageAttributes_MediaType',  function (media) {
if (media == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for attribute media"]);
}this.media=media;
});

Clazz.newMeth(C$, 'setMediaToDefault$',  function () {
var defaultCountry=$I$(4).getDefault$().getCountry$();
if (defaultCountry != null  && (defaultCountry.equals$O($I$(4).US.getCountry$())) ) {
this.setMedia$java_awt_PageAttributes_MediaType($I$(5).NA_LETTER);
} else {
this.setMedia$java_awt_PageAttributes_MediaType($I$(5).ISO_A4);
}});

Clazz.newMeth(C$, 'getOrientationRequested$',  function () {
return this.orientationRequested;
});

Clazz.newMeth(C$, 'setOrientationRequested$java_awt_PageAttributes_OrientationRequestedType',  function (orientationRequested) {
if (orientationRequested == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for attribute orientationRequested"]);
}this.orientationRequested=orientationRequested;
});

Clazz.newMeth(C$, 'setOrientationRequested$I',  function (orientationRequested) {
switch (orientationRequested) {
case 3:
this.setOrientationRequested$java_awt_PageAttributes_OrientationRequestedType($I$(6).PORTRAIT);
break;
case 4:
this.setOrientationRequested$java_awt_PageAttributes_OrientationRequestedType($I$(6).LANDSCAPE);
break;
default:
this.setOrientationRequested$java_awt_PageAttributes_OrientationRequestedType(null);
break;
}
});

Clazz.newMeth(C$, 'setOrientationRequestedToDefault$',  function () {
this.setOrientationRequested$java_awt_PageAttributes_OrientationRequestedType($I$(6).PORTRAIT);
});

Clazz.newMeth(C$, 'getOrigin$',  function () {
return this.origin;
});

Clazz.newMeth(C$, 'setOrigin$java_awt_PageAttributes_OriginType',  function (origin) {
if (origin == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for attribute origin"]);
}this.origin=origin;
});

Clazz.newMeth(C$, 'getPrintQuality$',  function () {
return this.printQuality;
});

Clazz.newMeth(C$, 'setPrintQuality$java_awt_PageAttributes_PrintQualityType',  function (printQuality) {
if (printQuality == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for attribute printQuality"]);
}this.printQuality=printQuality;
});

Clazz.newMeth(C$, 'setPrintQuality$I',  function (printQuality) {
switch (printQuality) {
case 3:
this.setPrintQuality$java_awt_PageAttributes_PrintQualityType($I$(7).DRAFT);
break;
case 4:
this.setPrintQuality$java_awt_PageAttributes_PrintQualityType($I$(7).NORMAL);
break;
case 5:
this.setPrintQuality$java_awt_PageAttributes_PrintQualityType($I$(7).HIGH);
break;
default:
this.setPrintQuality$java_awt_PageAttributes_PrintQualityType(null);
break;
}
});

Clazz.newMeth(C$, 'setPrintQualityToDefault$',  function () {
this.setPrintQuality$java_awt_PageAttributes_PrintQualityType($I$(7).NORMAL);
});

Clazz.newMeth(C$, 'getPrinterResolution$',  function () {
var copy=Clazz.array(Integer.TYPE, [3]);
copy[0]=this.printerResolution[0];
copy[1]=this.printerResolution[1];
copy[2]=this.printerResolution[2];
return copy;
});

Clazz.newMeth(C$, 'setPrinterResolution$IA',  function (printerResolution) {
if (printerResolution == null  || printerResolution.length != 3  || printerResolution[0] <= 0  || printerResolution[1] <= 0  || (printerResolution[2] != 3 && printerResolution[2] != 4 ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for attribute printerResolution"]);
}var copy=Clazz.array(Integer.TYPE, [3]);
copy[0]=printerResolution[0];
copy[1]=printerResolution[1];
copy[2]=printerResolution[2];
this.printerResolution=copy;
});

Clazz.newMeth(C$, 'setPrinterResolution$I',  function (printerResolution) {
this.setPrinterResolution$IA(Clazz.array(Integer.TYPE, -1, [printerResolution, printerResolution, 3]));
});

Clazz.newMeth(C$, 'setPrinterResolutionToDefault$',  function () {
this.setPrinterResolution$I(72);
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (!(Clazz.instanceOf(obj, "java.awt.PageAttributes"))) {
return false;
}var rhs=obj;
return (this.color === rhs.color  && this.media === rhs.media   && this.orientationRequested === rhs.orientationRequested   && this.origin === rhs.origin   && this.printQuality === rhs.printQuality   && this.printerResolution[0] == rhs.printerResolution[0]  && this.printerResolution[1] == rhs.printerResolution[1]  && this.printerResolution[2] == rhs.printerResolution[2] );
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return (this.color.hashCode$() << 31 ^ this.media.hashCode$() << 24 ^ this.orientationRequested.hashCode$() << 23 ^ this.origin.hashCode$() << 22 ^ this.printQuality.hashCode$() << 20 ^ this.printerResolution[2] >> 2 << 19 ^ this.printerResolution[1] << 10 ^ this.printerResolution[0]);
});

Clazz.newMeth(C$, 'toString',  function () {
return "color=" + this.getColor$() + ",media=" + this.getMedia$() + ",orientation-requested=" + this.getOrientationRequested$() + ",origin=" + this.getOrigin$() + ",print-quality=" + this.getPrintQuality$() + ",printer-resolution=[" + this.printerResolution[0] + "," + this.printerResolution[1] + "," + this.printerResolution[2] + "]" ;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.PageAttributes, "ColorType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.AttributeValue');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['NAMES','String[]','COLOR','java.awt.PageAttributes.ColorType','+MONOCHROME']]]

Clazz.newMeth(C$, 'c$$I',  function (type) {
;C$.superclazz.c$$I$SA.apply(this,[type, C$.NAMES]);C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NAMES=Clazz.array(String, -1, ["color", "monochrome"]);
C$.COLOR=Clazz.new_(C$.c$$I,[0]);
C$.MONOCHROME=Clazz.new_(C$.c$$I,[1]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PageAttributes, "MediaType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.AttributeValue');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['NAMES','String[]','ISO_4A0','java.awt.PageAttributes.MediaType','+ISO_2A0','+ISO_A0','+ISO_A1','+ISO_A2','+ISO_A3','+ISO_A4','+ISO_A5','+ISO_A6','+ISO_A7','+ISO_A8','+ISO_A9','+ISO_A10','+ISO_B0','+ISO_B1','+ISO_B2','+ISO_B3','+ISO_B4','+ISO_B5','+ISO_B6','+ISO_B7','+ISO_B8','+ISO_B9','+ISO_B10','+JIS_B0','+JIS_B1','+JIS_B2','+JIS_B3','+JIS_B4','+JIS_B5','+JIS_B6','+JIS_B7','+JIS_B8','+JIS_B9','+JIS_B10','+ISO_C0','+ISO_C1','+ISO_C2','+ISO_C3','+ISO_C4','+ISO_C5','+ISO_C6','+ISO_C7','+ISO_C8','+ISO_C9','+ISO_C10','+ISO_DESIGNATED_LONG','+EXECUTIVE','+FOLIO','+INVOICE','+LEDGER','+NA_LETTER','+NA_LEGAL','+QUARTO','+A','+B','+C','+D','+E','+NA_10X15_ENVELOPE','+NA_10X14_ENVELOPE','+NA_10X13_ENVELOPE','+NA_9X12_ENVELOPE','+NA_9X11_ENVELOPE','+NA_7X9_ENVELOPE','+NA_6X9_ENVELOPE','+NA_NUMBER_9_ENVELOPE','+NA_NUMBER_10_ENVELOPE','+NA_NUMBER_11_ENVELOPE','+NA_NUMBER_12_ENVELOPE','+NA_NUMBER_14_ENVELOPE','+INVITE_ENVELOPE','+ITALY_ENVELOPE','+MONARCH_ENVELOPE','+PERSONAL_ENVELOPE','+A0','+A1','+A2','+A3','+A4','+A5','+A6','+A7','+A8','+A9','+A10','+B0','+B1','+B2','+B3','+B4','+ISO_B4_ENVELOPE','+B5','+ISO_B5_ENVELOPE','+B6','+B7','+B8','+B9','+B10','+C0','+ISO_C0_ENVELOPE','+C1','+ISO_C1_ENVELOPE','+C2','+ISO_C2_ENVELOPE','+C3','+ISO_C3_ENVELOPE','+C4','+ISO_C4_ENVELOPE','+C5','+ISO_C5_ENVELOPE','+C6','+ISO_C6_ENVELOPE','+C7','+ISO_C7_ENVELOPE','+C8','+ISO_C8_ENVELOPE','+C9','+ISO_C9_ENVELOPE','+C10','+ISO_C10_ENVELOPE','+ISO_DESIGNATED_LONG_ENVELOPE','+STATEMENT','+TABLOID','+LETTER','+NOTE','+LEGAL','+ENV_10X15','+ENV_10X14','+ENV_10X13','+ENV_9X12','+ENV_9X11','+ENV_7X9','+ENV_6X9','+ENV_9','+ENV_10','+ENV_11','+ENV_12','+ENV_14','+ENV_INVITE','+ENV_ITALY','+ENV_MONARCH','+ENV_PERSONAL','+INVITE','+ITALY','+MONARCH','+PERSONAL']]]

Clazz.newMeth(C$, 'c$$I',  function (type) {
;C$.superclazz.c$$I$SA.apply(this,[type, C$.NAMES]);C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NAMES=Clazz.array(String, -1, ["iso-4a0", "iso-2a0", "iso-a0", "iso-a1", "iso-a2", "iso-a3", "iso-a4", "iso-a5", "iso-a6", "iso-a7", "iso-a8", "iso-a9", "iso-a10", "iso-b0", "iso-b1", "iso-b2", "iso-b3", "iso-b4", "iso-b5", "iso-b6", "iso-b7", "iso-b8", "iso-b9", "iso-b10", "jis-b0", "jis-b1", "jis-b2", "jis-b3", "jis-b4", "jis-b5", "jis-b6", "jis-b7", "jis-b8", "jis-b9", "jis-b10", "iso-c0", "iso-c1", "iso-c2", "iso-c3", "iso-c4", "iso-c5", "iso-c6", "iso-c7", "iso-c8", "iso-c9", "iso-c10", "iso-designated-long", "executive", "folio", "invoice", "ledger", "na-letter", "na-legal", "quarto", "a", "b", "c", "d", "e", "na-10x15-envelope", "na-10x14-envelope", "na-10x13-envelope", "na-9x12-envelope", "na-9x11-envelope", "na-7x9-envelope", "na-6x9-envelope", "na-number-9-envelope", "na-number-10-envelope", "na-number-11-envelope", "na-number-12-envelope", "na-number-14-envelope", "invite-envelope", "italy-envelope", "monarch-envelope", "personal-envelope"]);
C$.ISO_4A0=Clazz.new_(C$.c$$I,[0]);
C$.ISO_2A0=Clazz.new_(C$.c$$I,[1]);
C$.ISO_A0=Clazz.new_(C$.c$$I,[2]);
C$.ISO_A1=Clazz.new_(C$.c$$I,[3]);
C$.ISO_A2=Clazz.new_(C$.c$$I,[4]);
C$.ISO_A3=Clazz.new_(C$.c$$I,[5]);
C$.ISO_A4=Clazz.new_(C$.c$$I,[6]);
C$.ISO_A5=Clazz.new_(C$.c$$I,[7]);
C$.ISO_A6=Clazz.new_(C$.c$$I,[8]);
C$.ISO_A7=Clazz.new_(C$.c$$I,[9]);
C$.ISO_A8=Clazz.new_(C$.c$$I,[10]);
C$.ISO_A9=Clazz.new_(C$.c$$I,[11]);
C$.ISO_A10=Clazz.new_(C$.c$$I,[12]);
C$.ISO_B0=Clazz.new_(C$.c$$I,[13]);
C$.ISO_B1=Clazz.new_(C$.c$$I,[14]);
C$.ISO_B2=Clazz.new_(C$.c$$I,[15]);
C$.ISO_B3=Clazz.new_(C$.c$$I,[16]);
C$.ISO_B4=Clazz.new_(C$.c$$I,[17]);
C$.ISO_B5=Clazz.new_(C$.c$$I,[18]);
C$.ISO_B6=Clazz.new_(C$.c$$I,[19]);
C$.ISO_B7=Clazz.new_(C$.c$$I,[20]);
C$.ISO_B8=Clazz.new_(C$.c$$I,[21]);
C$.ISO_B9=Clazz.new_(C$.c$$I,[22]);
C$.ISO_B10=Clazz.new_(C$.c$$I,[23]);
C$.JIS_B0=Clazz.new_(C$.c$$I,[24]);
C$.JIS_B1=Clazz.new_(C$.c$$I,[25]);
C$.JIS_B2=Clazz.new_(C$.c$$I,[26]);
C$.JIS_B3=Clazz.new_(C$.c$$I,[27]);
C$.JIS_B4=Clazz.new_(C$.c$$I,[28]);
C$.JIS_B5=Clazz.new_(C$.c$$I,[29]);
C$.JIS_B6=Clazz.new_(C$.c$$I,[30]);
C$.JIS_B7=Clazz.new_(C$.c$$I,[31]);
C$.JIS_B8=Clazz.new_(C$.c$$I,[32]);
C$.JIS_B9=Clazz.new_(C$.c$$I,[33]);
C$.JIS_B10=Clazz.new_(C$.c$$I,[34]);
C$.ISO_C0=Clazz.new_(C$.c$$I,[35]);
C$.ISO_C1=Clazz.new_(C$.c$$I,[36]);
C$.ISO_C2=Clazz.new_(C$.c$$I,[37]);
C$.ISO_C3=Clazz.new_(C$.c$$I,[38]);
C$.ISO_C4=Clazz.new_(C$.c$$I,[39]);
C$.ISO_C5=Clazz.new_(C$.c$$I,[40]);
C$.ISO_C6=Clazz.new_(C$.c$$I,[41]);
C$.ISO_C7=Clazz.new_(C$.c$$I,[42]);
C$.ISO_C8=Clazz.new_(C$.c$$I,[43]);
C$.ISO_C9=Clazz.new_(C$.c$$I,[44]);
C$.ISO_C10=Clazz.new_(C$.c$$I,[45]);
C$.ISO_DESIGNATED_LONG=Clazz.new_(C$.c$$I,[46]);
C$.EXECUTIVE=Clazz.new_(C$.c$$I,[47]);
C$.FOLIO=Clazz.new_(C$.c$$I,[48]);
C$.INVOICE=Clazz.new_(C$.c$$I,[49]);
C$.LEDGER=Clazz.new_(C$.c$$I,[50]);
C$.NA_LETTER=Clazz.new_(C$.c$$I,[51]);
C$.NA_LEGAL=Clazz.new_(C$.c$$I,[52]);
C$.QUARTO=Clazz.new_(C$.c$$I,[53]);
C$.A=Clazz.new_(C$.c$$I,[54]);
C$.B=Clazz.new_(C$.c$$I,[55]);
C$.C=Clazz.new_(C$.c$$I,[56]);
C$.D=Clazz.new_(C$.c$$I,[57]);
C$.E=Clazz.new_(C$.c$$I,[58]);
C$.NA_10X15_ENVELOPE=Clazz.new_(C$.c$$I,[59]);
C$.NA_10X14_ENVELOPE=Clazz.new_(C$.c$$I,[60]);
C$.NA_10X13_ENVELOPE=Clazz.new_(C$.c$$I,[61]);
C$.NA_9X12_ENVELOPE=Clazz.new_(C$.c$$I,[62]);
C$.NA_9X11_ENVELOPE=Clazz.new_(C$.c$$I,[63]);
C$.NA_7X9_ENVELOPE=Clazz.new_(C$.c$$I,[64]);
C$.NA_6X9_ENVELOPE=Clazz.new_(C$.c$$I,[65]);
C$.NA_NUMBER_9_ENVELOPE=Clazz.new_(C$.c$$I,[66]);
C$.NA_NUMBER_10_ENVELOPE=Clazz.new_(C$.c$$I,[67]);
C$.NA_NUMBER_11_ENVELOPE=Clazz.new_(C$.c$$I,[68]);
C$.NA_NUMBER_12_ENVELOPE=Clazz.new_(C$.c$$I,[69]);
C$.NA_NUMBER_14_ENVELOPE=Clazz.new_(C$.c$$I,[70]);
C$.INVITE_ENVELOPE=Clazz.new_(C$.c$$I,[71]);
C$.ITALY_ENVELOPE=Clazz.new_(C$.c$$I,[72]);
C$.MONARCH_ENVELOPE=Clazz.new_(C$.c$$I,[73]);
C$.PERSONAL_ENVELOPE=Clazz.new_(C$.c$$I,[74]);
C$.A0=C$.ISO_A0;
C$.A1=C$.ISO_A1;
C$.A2=C$.ISO_A2;
C$.A3=C$.ISO_A3;
C$.A4=C$.ISO_A4;
C$.A5=C$.ISO_A5;
C$.A6=C$.ISO_A6;
C$.A7=C$.ISO_A7;
C$.A8=C$.ISO_A8;
C$.A9=C$.ISO_A9;
C$.A10=C$.ISO_A10;
C$.B0=C$.ISO_B0;
C$.B1=C$.ISO_B1;
C$.B2=C$.ISO_B2;
C$.B3=C$.ISO_B3;
C$.B4=C$.ISO_B4;
C$.ISO_B4_ENVELOPE=C$.ISO_B4;
C$.B5=C$.ISO_B5;
C$.ISO_B5_ENVELOPE=C$.ISO_B5;
C$.B6=C$.ISO_B6;
C$.B7=C$.ISO_B7;
C$.B8=C$.ISO_B8;
C$.B9=C$.ISO_B9;
C$.B10=C$.ISO_B10;
C$.C0=C$.ISO_C0;
C$.ISO_C0_ENVELOPE=C$.ISO_C0;
C$.C1=C$.ISO_C1;
C$.ISO_C1_ENVELOPE=C$.ISO_C1;
C$.C2=C$.ISO_C2;
C$.ISO_C2_ENVELOPE=C$.ISO_C2;
C$.C3=C$.ISO_C3;
C$.ISO_C3_ENVELOPE=C$.ISO_C3;
C$.C4=C$.ISO_C4;
C$.ISO_C4_ENVELOPE=C$.ISO_C4;
C$.C5=C$.ISO_C5;
C$.ISO_C5_ENVELOPE=C$.ISO_C5;
C$.C6=C$.ISO_C6;
C$.ISO_C6_ENVELOPE=C$.ISO_C6;
C$.C7=C$.ISO_C7;
C$.ISO_C7_ENVELOPE=C$.ISO_C7;
C$.C8=C$.ISO_C8;
C$.ISO_C8_ENVELOPE=C$.ISO_C8;
C$.C9=C$.ISO_C9;
C$.ISO_C9_ENVELOPE=C$.ISO_C9;
C$.C10=C$.ISO_C10;
C$.ISO_C10_ENVELOPE=C$.ISO_C10;
C$.ISO_DESIGNATED_LONG_ENVELOPE=C$.ISO_DESIGNATED_LONG;
C$.STATEMENT=C$.INVOICE;
C$.TABLOID=C$.LEDGER;
C$.LETTER=C$.NA_LETTER;
C$.NOTE=C$.NA_LETTER;
C$.LEGAL=C$.NA_LEGAL;
C$.ENV_10X15=C$.NA_10X15_ENVELOPE;
C$.ENV_10X14=C$.NA_10X14_ENVELOPE;
C$.ENV_10X13=C$.NA_10X13_ENVELOPE;
C$.ENV_9X12=C$.NA_9X12_ENVELOPE;
C$.ENV_9X11=C$.NA_9X11_ENVELOPE;
C$.ENV_7X9=C$.NA_7X9_ENVELOPE;
C$.ENV_6X9=C$.NA_6X9_ENVELOPE;
C$.ENV_9=C$.NA_NUMBER_9_ENVELOPE;
C$.ENV_10=C$.NA_NUMBER_10_ENVELOPE;
C$.ENV_11=C$.NA_NUMBER_11_ENVELOPE;
C$.ENV_12=C$.NA_NUMBER_12_ENVELOPE;
C$.ENV_14=C$.NA_NUMBER_14_ENVELOPE;
C$.ENV_INVITE=C$.INVITE_ENVELOPE;
C$.ENV_ITALY=C$.ITALY_ENVELOPE;
C$.ENV_MONARCH=C$.MONARCH_ENVELOPE;
C$.ENV_PERSONAL=C$.PERSONAL_ENVELOPE;
C$.INVITE=C$.INVITE_ENVELOPE;
C$.ITALY=C$.ITALY_ENVELOPE;
C$.MONARCH=C$.MONARCH_ENVELOPE;
C$.PERSONAL=C$.PERSONAL_ENVELOPE;
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PageAttributes, "OrientationRequestedType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.AttributeValue');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['NAMES','String[]','PORTRAIT','java.awt.PageAttributes.OrientationRequestedType','+LANDSCAPE']]]

Clazz.newMeth(C$, 'c$$I',  function (type) {
;C$.superclazz.c$$I$SA.apply(this,[type, C$.NAMES]);C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NAMES=Clazz.array(String, -1, ["portrait", "landscape"]);
C$.PORTRAIT=Clazz.new_(C$.c$$I,[0]);
C$.LANDSCAPE=Clazz.new_(C$.c$$I,[1]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PageAttributes, "OriginType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.AttributeValue');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['NAMES','String[]','PHYSICAL','java.awt.PageAttributes.OriginType','+PRINTABLE']]]

Clazz.newMeth(C$, 'c$$I',  function (type) {
;C$.superclazz.c$$I$SA.apply(this,[type, C$.NAMES]);C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NAMES=Clazz.array(String, -1, ["physical", "printable"]);
C$.PHYSICAL=Clazz.new_(C$.c$$I,[0]);
C$.PRINTABLE=Clazz.new_(C$.c$$I,[1]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PageAttributes, "PrintQualityType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.AttributeValue');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['NAMES','String[]','HIGH','java.awt.PageAttributes.PrintQualityType','+NORMAL','+DRAFT']]]

Clazz.newMeth(C$, 'c$$I',  function (type) {
;C$.superclazz.c$$I$SA.apply(this,[type, C$.NAMES]);C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NAMES=Clazz.array(String, -1, ["high", "normal", "draft"]);
C$.HIGH=Clazz.new_(C$.c$$I,[0]);
C$.NORMAL=Clazz.new_(C$.c$$I,[1]);
C$.DRAFT=Clazz.new_(C$.c$$I,[2]);
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
