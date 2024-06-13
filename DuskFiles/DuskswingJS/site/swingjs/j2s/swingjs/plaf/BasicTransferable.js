(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'java.awt.datatransfer.DataFlavor','java.io.Reader','java.io.StringReader','java.io.InputStream','sun.awt.datatransfer.DataTransferer','java.io.ByteArrayInputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BasicTransferable", null, null, ['java.awt.datatransfer.Transferable', 'javax.swing.plaf.UIResource']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['plainData','htmlData']]
,['O',['htmlFlavors','java.awt.datatransfer.DataFlavor[]','+stringFlavors','+plainFlavors']]]

Clazz.newMeth(C$, 'c$$S$S',  function (plainData, htmlData) {
;C$.$init$.apply(this);
this.plainData=plainData;
this.htmlData=htmlData;
}, 1);

Clazz.newMeth(C$, 'getTransferDataFlavors$',  function () {
var nRicher=0;
var nHTML=(this.isHTMLSupported$()) ? C$.htmlFlavors.length : 0;
var nPlain=(this.isPlainSupported$()) ? C$.plainFlavors.length : 0;
var nString=(this.isPlainSupported$()) ? C$.stringFlavors.length : 0;
var nFlavors=nRicher + nHTML + nPlain + nString ;
var flavors=Clazz.array($I$(1), [nFlavors]);
var nDone=0;
if (nHTML > 0) {
System.arraycopy$O$I$O$I$I(C$.htmlFlavors, 0, flavors, nDone, nHTML);
nDone+=nHTML;
}if (nPlain > 0) {
System.arraycopy$O$I$O$I$I(C$.plainFlavors, 0, flavors, nDone, nPlain);
nDone+=nPlain;
}if (nString > 0) {
System.arraycopy$O$I$O$I$I(C$.stringFlavors, 0, flavors, nDone, nString);
nDone+=nString;
}return flavors;
});

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor',  function (flavor) {
var flavors=this.getTransferDataFlavors$();
for (var i=0; i < flavors.length; i++) {
if (flavors[i].equals$java_awt_datatransfer_DataFlavor(flavor)) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getTransferData$java_awt_datatransfer_DataFlavor',  function (flavor) {
if (this.isHTMLFlavor$java_awt_datatransfer_DataFlavor(flavor)) {
var data=this.getHTMLData$();
data=(data == null ) ? "" : data;
if (Clazz.getClass(String).equals$O(flavor.getRepresentationClass$())) {
return data;
} else if (Clazz.getClass($I$(2)).equals$O(flavor.getRepresentationClass$())) {
return Clazz.new_($I$(3,1).c$$S,[data]);
} else if (Clazz.getClass($I$(4)).equals$O(flavor.getRepresentationClass$())) {
return p$1.createInputStream$java_awt_datatransfer_DataFlavor$S.apply(this, [flavor, data]);
}} else if (this.isPlainFlavor$java_awt_datatransfer_DataFlavor(flavor)) {
var data=this.getPlainData$();
data=(data == null ) ? "" : data;
if (Clazz.getClass(String).equals$O(flavor.getRepresentationClass$())) {
return data;
} else if (Clazz.getClass($I$(2)).equals$O(flavor.getRepresentationClass$())) {
return Clazz.new_($I$(3,1).c$$S,[data]);
} else if (Clazz.getClass($I$(4)).equals$O(flavor.getRepresentationClass$())) {
return p$1.createInputStream$java_awt_datatransfer_DataFlavor$S.apply(this, [flavor, data]);
}} else if (this.isStringFlavor$java_awt_datatransfer_DataFlavor(flavor)) {
var data=this.getPlainData$();
data=(data == null ) ? "" : data;
return data;
}throw Clazz.new_(Clazz.load('java.awt.datatransfer.UnsupportedFlavorException').c$$java_awt_datatransfer_DataFlavor,[flavor]);
});

Clazz.newMeth(C$, 'createInputStream$java_awt_datatransfer_DataFlavor$S',  function (flavor, data) {
var cs=$I$(5).getTextCharset$java_awt_datatransfer_DataFlavor(flavor);
if (cs == null ) {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.UnsupportedFlavorException').c$$java_awt_datatransfer_DataFlavor,[flavor]);
}return Clazz.new_([data.getBytes$S(cs)],$I$(6,1).c$$BA);
}, p$1);

Clazz.newMeth(C$, 'isHTMLFlavor$java_awt_datatransfer_DataFlavor',  function (flavor) {
var flavors=C$.htmlFlavors;
for (var i=0; i < flavors.length; i++) {
if (flavors[i].equals$java_awt_datatransfer_DataFlavor(flavor)) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'isHTMLSupported$',  function () {
return this.htmlData != null ;
});

Clazz.newMeth(C$, 'getHTMLData$',  function () {
return this.htmlData;
});

Clazz.newMeth(C$, 'isPlainFlavor$java_awt_datatransfer_DataFlavor',  function (flavor) {
var flavors=C$.plainFlavors;
for (var i=0; i < flavors.length; i++) {
if (flavors[i].equals$java_awt_datatransfer_DataFlavor(flavor)) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'isPlainSupported$',  function () {
return this.plainData != null ;
});

Clazz.newMeth(C$, 'getPlainData$',  function () {
return this.plainData;
});

Clazz.newMeth(C$, 'isStringFlavor$java_awt_datatransfer_DataFlavor',  function (flavor) {
var flavors=C$.stringFlavors;
for (var i=0; i < flavors.length; i++) {
if (flavors[i].equals$java_awt_datatransfer_DataFlavor(flavor)) {
return true;
}}
return false;
});

C$.$static$=function(){C$.$static$=0;
{
try {
C$.htmlFlavors=Clazz.array($I$(1), [3]);
C$.htmlFlavors[0]=Clazz.new_(["text/html;class=java.lang.String"],$I$(1,1).c$$S);
C$.htmlFlavors[1]=Clazz.new_(["text/html;class=java.io.Reader"],$I$(1,1).c$$S);
C$.htmlFlavors[2]=Clazz.new_(["text/html;charset=unicode;class=java.io.InputStream"],$I$(1,1).c$$S);
C$.plainFlavors=Clazz.array($I$(1), [3]);
C$.plainFlavors[0]=Clazz.new_(["text/plain;class=java.lang.String"],$I$(1,1).c$$S);
C$.plainFlavors[1]=Clazz.new_(["text/plain;class=java.io.Reader"],$I$(1,1).c$$S);
C$.plainFlavors[2]=Clazz.new_(["text/plain;charset=unicode;class=java.io.InputStream"],$I$(1,1).c$$S);
C$.stringFlavors=Clazz.array($I$(1), [2]);
C$.stringFlavors[0]=Clazz.new_(["application/x-java-jvm-local-objectref;class=java.lang.String"],$I$(1,1).c$$S);
C$.stringFlavors[1]=$I$(1).stringFlavor;
} catch (cle) {
if (Clazz.exceptionOf(cle,"ClassNotFoundException")){
System.err.println$S("error initializing javax.swing.plaf.basic.BasicTranserable");
} else {
throw cle;
}
}
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
