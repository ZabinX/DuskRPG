(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,['java.awt.JobAttributes','.DefaultSelectionType'],['java.awt.JobAttributes','.DestinationType'],['java.awt.JobAttributes','.DialogType'],'InternalError',['java.awt.JobAttributes','.MultipleDocumentHandlingType'],['java.awt.JobAttributes','.SidesType']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JobAttributes", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Cloneable');
C$.$classes$=[['DefaultSelectionType',25],['DestinationType',25],['DialogType',25],['MultipleDocumentHandlingType',25],['SidesType',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['copies','fromPage','maxPage','minPage','prFirst','prLast','toPage'],'S',['fileName','printer'],'O',['defaultSelection','java.awt.JobAttributes.DefaultSelectionType','destination','java.awt.JobAttributes.DestinationType','dialog','java.awt.JobAttributes.DialogType','multipleDocumentHandling','java.awt.JobAttributes.MultipleDocumentHandlingType','pageRanges','int[][]','sides','java.awt.JobAttributes.SidesType']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.setCopiesToDefault$();
this.setDefaultSelection$java_awt_JobAttributes_DefaultSelectionType($I$(1).ALL);
this.setDestination$java_awt_JobAttributes_DestinationType($I$(2).PRINTER);
this.setDialog$java_awt_JobAttributes_DialogType($I$(3).NATIVE);
this.setMaxPage$I(2147483647);
this.setMinPage$I(1);
this.setMultipleDocumentHandlingToDefault$();
this.setSidesToDefault$();
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JobAttributes',  function (obj) {
;C$.$init$.apply(this);
this.set$java_awt_JobAttributes(obj);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_awt_JobAttributes_DefaultSelectionType$java_awt_JobAttributes_DestinationType$java_awt_JobAttributes_DialogType$S$I$I$java_awt_JobAttributes_MultipleDocumentHandlingType$IAA$S$java_awt_JobAttributes_SidesType',  function (copies, defaultSelection, destination, dialog, fileName, maxPage, minPage, multipleDocumentHandling, pageRanges, printer, sides) {
;C$.$init$.apply(this);
this.setCopies$I(copies);
this.setDefaultSelection$java_awt_JobAttributes_DefaultSelectionType(defaultSelection);
this.setDestination$java_awt_JobAttributes_DestinationType(destination);
this.setDialog$java_awt_JobAttributes_DialogType(dialog);
this.setFileName$S(fileName);
this.setMaxPage$I(maxPage);
this.setMinPage$I(minPage);
this.setMultipleDocumentHandling$java_awt_JobAttributes_MultipleDocumentHandlingType(multipleDocumentHandling);
this.setPageRanges$IAA(pageRanges);
this.setPrinter$S(printer);
this.setSides$java_awt_JobAttributes_SidesType(sides);
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(4,1));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'set$java_awt_JobAttributes',  function (obj) {
this.copies=obj.copies;
this.defaultSelection=obj.defaultSelection;
this.destination=obj.destination;
this.dialog=obj.dialog;
this.fileName=obj.fileName;
this.fromPage=obj.fromPage;
this.maxPage=obj.maxPage;
this.minPage=obj.minPage;
this.multipleDocumentHandling=obj.multipleDocumentHandling;
this.pageRanges=obj.pageRanges;
this.prFirst=obj.prFirst;
this.prLast=obj.prLast;
this.printer=obj.printer;
this.sides=obj.sides;
this.toPage=obj.toPage;
});

Clazz.newMeth(C$, 'getCopies$',  function () {
return this.copies;
});

Clazz.newMeth(C$, 'setCopies$I',  function (copies) {
if (copies <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for attribute copies"]);
}this.copies=copies;
});

Clazz.newMeth(C$, 'setCopiesToDefault$',  function () {
this.setCopies$I(1);
});

Clazz.newMeth(C$, 'getDefaultSelection$',  function () {
return this.defaultSelection;
});

Clazz.newMeth(C$, 'setDefaultSelection$java_awt_JobAttributes_DefaultSelectionType',  function (defaultSelection) {
if (defaultSelection == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for attribute defaultSelection"]);
}this.defaultSelection=defaultSelection;
});

Clazz.newMeth(C$, 'getDestination$',  function () {
return this.destination;
});

Clazz.newMeth(C$, 'setDestination$java_awt_JobAttributes_DestinationType',  function (destination) {
if (destination == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for attribute destination"]);
}this.destination=destination;
});

Clazz.newMeth(C$, 'getDialog$',  function () {
return this.dialog;
});

Clazz.newMeth(C$, 'setDialog$java_awt_JobAttributes_DialogType',  function (dialog) {
if (dialog == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for attribute dialog"]);
}this.dialog=dialog;
});

Clazz.newMeth(C$, 'getFileName$',  function () {
return this.fileName;
});

Clazz.newMeth(C$, 'setFileName$S',  function (fileName) {
this.fileName=fileName;
});

Clazz.newMeth(C$, 'getFromPage$',  function () {
if (this.fromPage != 0) {
return this.fromPage;
} else if (this.toPage != 0) {
return this.getMinPage$();
} else if (this.pageRanges != null ) {
return this.prFirst;
} else {
return this.getMinPage$();
}});

Clazz.newMeth(C$, 'setFromPage$I',  function (fromPage) {
if (fromPage <= 0 || (this.toPage != 0 && fromPage > this.toPage )  || fromPage < this.minPage  || fromPage > this.maxPage ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for attribute fromPage"]);
}this.fromPage=fromPage;
});

Clazz.newMeth(C$, 'getMaxPage$',  function () {
return this.maxPage;
});

Clazz.newMeth(C$, 'setMaxPage$I',  function (maxPage) {
if (maxPage <= 0 || maxPage < this.minPage ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for attribute maxPage"]);
}this.maxPage=maxPage;
});

Clazz.newMeth(C$, 'getMinPage$',  function () {
return this.minPage;
});

Clazz.newMeth(C$, 'setMinPage$I',  function (minPage) {
if (minPage <= 0 || minPage > this.maxPage ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for attribute minPage"]);
}this.minPage=minPage;
});

Clazz.newMeth(C$, 'getMultipleDocumentHandling$',  function () {
return this.multipleDocumentHandling;
});

Clazz.newMeth(C$, 'setMultipleDocumentHandling$java_awt_JobAttributes_MultipleDocumentHandlingType',  function (multipleDocumentHandling) {
if (multipleDocumentHandling == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for attribute multipleDocumentHandling"]);
}this.multipleDocumentHandling=multipleDocumentHandling;
});

Clazz.newMeth(C$, 'setMultipleDocumentHandlingToDefault$',  function () {
this.setMultipleDocumentHandling$java_awt_JobAttributes_MultipleDocumentHandlingType($I$(5).SEPARATE_DOCUMENTS_UNCOLLATED_COPIES);
});

Clazz.newMeth(C$, 'getPageRanges$',  function () {
if (this.pageRanges != null ) {
var copy=Clazz.array(Integer.TYPE, [this.pageRanges.length, 2]);
for (var i=0; i < this.pageRanges.length; i++) {
copy[i][0]=this.pageRanges[i][0];
copy[i][1]=this.pageRanges[i][1];
}
return copy;
} else if (this.fromPage != 0 || this.toPage != 0 ) {
var fromPage=this.getFromPage$();
var toPage=this.getToPage$();
return Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [fromPage, toPage])]);
} else {
var minPage=this.getMinPage$();
return Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [minPage, minPage])]);
}});

Clazz.newMeth(C$, 'setPageRanges$IAA',  function (pageRanges) {
var xcp="Invalid value for attribute pageRanges";
var first=0;
var last=0;
if (pageRanges == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[xcp]);
}for (var i=0; i < pageRanges.length; i++) {
if (pageRanges[i] == null  || pageRanges[i].length != 2  || pageRanges[i][0] <= last  || pageRanges[i][1] < pageRanges[i][0] ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[xcp]);
}last=pageRanges[i][1];
if (first == 0) {
first=pageRanges[i][0];
}}
if (first < this.minPage || last > this.maxPage ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[xcp]);
}var copy=Clazz.array(Integer.TYPE, [pageRanges.length, 2]);
for (var i=0; i < pageRanges.length; i++) {
copy[i][0]=pageRanges[i][0];
copy[i][1]=pageRanges[i][1];
}
this.pageRanges=copy;
this.prFirst=first;
this.prLast=last;
});

Clazz.newMeth(C$, 'getPrinter$',  function () {
return this.printer;
});

Clazz.newMeth(C$, 'setPrinter$S',  function (printer) {
this.printer=printer;
});

Clazz.newMeth(C$, 'getSides$',  function () {
return this.sides;
});

Clazz.newMeth(C$, 'setSides$java_awt_JobAttributes_SidesType',  function (sides) {
if (sides == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for attribute sides"]);
}this.sides=sides;
});

Clazz.newMeth(C$, 'setSidesToDefault$',  function () {
this.setSides$java_awt_JobAttributes_SidesType($I$(6).ONE_SIDED);
});

Clazz.newMeth(C$, 'getToPage$',  function () {
if (this.toPage != 0) {
return this.toPage;
} else if (this.fromPage != 0) {
return this.fromPage;
} else if (this.pageRanges != null ) {
return this.prLast;
} else {
return this.getMinPage$();
}});

Clazz.newMeth(C$, 'setToPage$I',  function (toPage) {
if (toPage <= 0 || (this.fromPage != 0 && toPage < this.fromPage )  || toPage < this.minPage  || toPage > this.maxPage ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid value for attribute toPage"]);
}this.toPage=toPage;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (!(Clazz.instanceOf(obj, "java.awt.JobAttributes"))) {
return false;
}var rhs=obj;
if (this.fileName == null ) {
if (rhs.fileName != null ) {
return false;
}} else {
if (!this.fileName.equals$O(rhs.fileName)) {
return false;
}}if (this.pageRanges == null ) {
if (rhs.pageRanges != null ) {
return false;
}} else {
if (rhs.pageRanges == null  || this.pageRanges.length != rhs.pageRanges.length ) {
return false;
}for (var i=0; i < this.pageRanges.length; i++) {
if (this.pageRanges[i][0] != rhs.pageRanges[i][0] || this.pageRanges[i][1] != rhs.pageRanges[i][1] ) {
return false;
}}
}if (this.printer == null ) {
if (rhs.printer != null ) {
return false;
}} else {
if (!this.printer.equals$O(rhs.printer)) {
return false;
}}return (this.copies == rhs.copies && this.defaultSelection === rhs.defaultSelection   && this.destination === rhs.destination   && this.dialog === rhs.dialog   && this.fromPage == rhs.fromPage  && this.maxPage == rhs.maxPage  && this.minPage == rhs.minPage  && this.multipleDocumentHandling === rhs.multipleDocumentHandling   && this.prFirst == rhs.prFirst  && this.prLast == rhs.prLast  && this.sides === rhs.sides   && this.toPage == rhs.toPage );
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var rest=((this.copies + this.fromPage + this.maxPage + this.minPage + this.prFirst + this.prLast + this.toPage ) * 31) << 21;
if (this.pageRanges != null ) {
var sum=0;
for (var i=0; i < this.pageRanges.length; i++) {
sum+=this.pageRanges[i][0] + this.pageRanges[i][1];
}
rest^=(sum * 31) << 11;
}if (this.fileName != null ) {
rest^=this.fileName.hashCode$();
}if (this.printer != null ) {
rest^=this.printer.hashCode$();
}return (this.defaultSelection.hashCode$() << 6 ^ this.destination.hashCode$() << 5 ^ this.dialog.hashCode$() << 3 ^ this.multipleDocumentHandling.hashCode$() << 2 ^ this.sides.hashCode$() ^ rest);
});

Clazz.newMeth(C$, 'toString',  function () {
var pageRanges=this.getPageRanges$();
var prStr="[";
var first=true;
for (var i=0; i < pageRanges.length; i++) {
if (first) {
first=false;
} else {
prStr+=",";
}prStr+=pageRanges[i][0] + ":" + pageRanges[i][1] ;
}
prStr+="]";
return "copies=" + this.getCopies$() + ",defaultSelection=" + this.getDefaultSelection$() + ",destination=" + this.getDestination$() + ",dialog=" + this.getDialog$() + ",fileName=" + this.getFileName$() + ",fromPage=" + this.getFromPage$() + ",maxPage=" + this.getMaxPage$() + ",minPage=" + this.getMinPage$() + ",multiple-document-handling=" + this.getMultipleDocumentHandling$() + ",page-ranges=" + prStr + ",printer=" + this.getPrinter$() + ",sides=" + this.getSides$() + ",toPage=" + this.getToPage$() ;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JobAttributes, "DefaultSelectionType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.AttributeValue');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['NAMES','String[]','ALL','java.awt.JobAttributes.DefaultSelectionType','+RANGE','+SELECTION']]]

Clazz.newMeth(C$, 'c$$I',  function (type) {
;C$.superclazz.c$$I$SA.apply(this,[type, C$.NAMES]);C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NAMES=Clazz.array(String, -1, ["all", "range", "selection"]);
C$.ALL=Clazz.new_(C$.c$$I,[0]);
C$.RANGE=Clazz.new_(C$.c$$I,[1]);
C$.SELECTION=Clazz.new_(C$.c$$I,[2]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JobAttributes, "DestinationType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.AttributeValue');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['NAMES','String[]','FILE','java.awt.JobAttributes.DestinationType','+PRINTER']]]

Clazz.newMeth(C$, 'c$$I',  function (type) {
;C$.superclazz.c$$I$SA.apply(this,[type, C$.NAMES]);C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NAMES=Clazz.array(String, -1, ["file", "printer"]);
C$.FILE=Clazz.new_(C$.c$$I,[0]);
C$.PRINTER=Clazz.new_(C$.c$$I,[1]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JobAttributes, "DialogType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.AttributeValue');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['NAMES','String[]','COMMON','java.awt.JobAttributes.DialogType','+NATIVE','+NONE']]]

Clazz.newMeth(C$, 'c$$I',  function (type) {
;C$.superclazz.c$$I$SA.apply(this,[type, C$.NAMES]);C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NAMES=Clazz.array(String, -1, ["common", "native", "none"]);
C$.COMMON=Clazz.new_(C$.c$$I,[0]);
C$.NATIVE=Clazz.new_(C$.c$$I,[1]);
C$.NONE=Clazz.new_(C$.c$$I,[2]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JobAttributes, "MultipleDocumentHandlingType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.AttributeValue');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['NAMES','String[]','SEPARATE_DOCUMENTS_COLLATED_COPIES','java.awt.JobAttributes.MultipleDocumentHandlingType','+SEPARATE_DOCUMENTS_UNCOLLATED_COPIES']]]

Clazz.newMeth(C$, 'c$$I',  function (type) {
;C$.superclazz.c$$I$SA.apply(this,[type, C$.NAMES]);C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NAMES=Clazz.array(String, -1, ["separate-documents-collated-copies", "separate-documents-uncollated-copies"]);
C$.SEPARATE_DOCUMENTS_COLLATED_COPIES=Clazz.new_(C$.c$$I,[0]);
C$.SEPARATE_DOCUMENTS_UNCOLLATED_COPIES=Clazz.new_(C$.c$$I,[1]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JobAttributes, "SidesType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.AttributeValue');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['NAMES','String[]','ONE_SIDED','java.awt.JobAttributes.SidesType','+TWO_SIDED_LONG_EDGE','+TWO_SIDED_SHORT_EDGE']]]

Clazz.newMeth(C$, 'c$$I',  function (type) {
;C$.superclazz.c$$I$SA.apply(this,[type, C$.NAMES]);C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NAMES=Clazz.array(String, -1, ["one-sided", "two-sided-long-edge", "two-sided-short-edge"]);
C$.ONE_SIDED=Clazz.new_(C$.c$$I,[0]);
C$.TWO_SIDED_LONG_EDGE=Clazz.new_(C$.c$$I,[1]);
C$.TWO_SIDED_SHORT_EDGE=Clazz.new_(C$.c$$I,[2]);
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
