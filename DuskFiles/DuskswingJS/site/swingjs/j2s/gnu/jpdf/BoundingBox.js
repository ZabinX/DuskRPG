(function(){var P$=Clazz.newPackage("gnu.jpdf"),p$1={},I$=[[0,'java.awt.Point','java.awt.Dimension','StringBuffer','java.util.Vector','java.util.StringTokenizer','java.awt.Font','java.awt.Frame']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BoundingBox", null, 'java.awt.Rectangle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['fullString'],'O',['drawingPoint','java.awt.Point','+absoluteLocation','parent','gnu.jpdf.BoundingBox','stringArray','String[]']]
,['O',['VERT_ALIGNS','int[]','+HORIZ_ALIGNS','+SUBTRACTS']]]

Clazz.newMeth(C$, 'c$$java_awt_Point$java_awt_Dimension',  function (p, d) {
;C$.superclazz.c$$java_awt_Point$java_awt_Dimension.apply(this,[p, d]);C$.$init$.apply(this);
this.drawingPoint=this.getLocation$();
this.absoluteLocation=this.getLocation$();
}, 1);

Clazz.newMeth(C$, 'hasParent$',  function () {
return this.parent != null ;
});

Clazz.newMeth(C$, 'getParent$',  function () {
return this.parent;
});

Clazz.newMeth(C$, 'add$gnu_jpdf_BoundingBox',  function (child) {
child.setParent$gnu_jpdf_BoundingBox(this);
});

Clazz.newMeth(C$, 'setParent$gnu_jpdf_BoundingBox',  function (parent) {
if (this === parent ) {
return;
}this.parent=parent;
if (this.getLocation$().equals$O(this.getAbsoluteLocation$())) {
var ancestorTranslateX=0;
var ancestorTranslateY=0;
var ancestor=this;
while (ancestor.hasParent$()){
var oldRef=ancestor;
ancestor=ancestor.getParent$();
if (ancestor === oldRef ) {
break;
}ancestorTranslateX+=(ancestor.getLocation$().getX$()|0);
ancestorTranslateY+=(ancestor.getLocation$().getY$()|0);
}
this.getAbsoluteLocation$().translate$I$I(ancestorTranslateX, ancestorTranslateY);
}});

Clazz.newMeth(C$, 'getStringArray$',  function () {
return this.stringArray;
});

Clazz.newMeth(C$, 'setStringArray$SA',  function (strArray) {
this.stringArray=strArray;
});

Clazz.newMeth(C$, 'setAbsoluteLocation$java_awt_Point',  function (point) {
this.absoluteLocation=point;
});

Clazz.newMeth(C$, 'boxExists$',  function () {
return (this.getHeight$() > 0  && this.getWidth$() > 0  );
});

Clazz.newMeth(C$, 'getAbsoluteLocation$',  function () {
return this.absoluteLocation;
});

Clazz.newMeth(C$, 'getFullString$',  function () {
return this.fullString;
});

Clazz.newMeth(C$, 'setFullString$S',  function (string) {
this.fullString=string;
});

Clazz.newMeth(C$, 'getStringBounds$S$I$I$java_awt_FontMetrics$I$Z',  function (string, hAlign, vAlign, fm, padding, enforce) {
if (!p$1.checkHAlign$I.apply(this, [hAlign])) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["BoundingBox.getStringBounds, " + "hAlign invalid : " + hAlign ]);
}if (!p$1.checkVAlign$I.apply(this, [vAlign])) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["BoundingBox.getStringBounds, " + "vAlign invalid : " + hAlign ]);
}if (fm == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["BoundingBox.getStringBounds, FontMetrics null"]);
}if (string == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["BoundingBox.getStringBounds, String null"]);
}var parentSize=this.getSize$();
var childLocation;
var childSize;
var sa;
var sw;
var sh;
var pw;
var ph;
var cw;
var ch;
var cx;
var cy;
var px;
var py;
sa=fm.getMaxAscent$();
sw=fm.stringWidth$S(string);
sh=sa + fm.getMaxDescent$();
pw=(parentSize.getWidth$()|0);
ph=(parentSize.getHeight$()|0);
if (pw < 0) {
throw Clazz.new_(Clazz.load('gnu.jpdf.StringTooLongException').c$$S,["The parent box has a negative width  (" + pw + ")" ]);
}if (ph < 0) {
throw Clazz.new_(Clazz.load('gnu.jpdf.StringTooLongException').c$$S,["The parent box has a negative height (" + ph + ")" ]);
}cw=sw + padding * 2;
ch=sh + padding * 2;
px=(this.getX$()|0);
py=(this.getY$()|0);
var childStrArray=null;
if ((cw > pw) || (string.indexOf$S("\n") != -1) ) {
cw=pw - (padding * 2);
childStrArray=p$1.createStringArray$S$java_awt_FontMetrics$I$I.apply(this, [string, fm, padding, pw]);
ch=p$1.getWrappedHeight$SA$java_awt_FontMetrics$I.apply(this, [childStrArray, fm, padding]);
if (ch > ph) {
if (enforce) {
throw Clazz.new_(Clazz.load('gnu.jpdf.StringTooLongException').c$$S,["The wrapped strings do not fit into the parent box, pw=" + pw + ", ph=" + ph + ", ch=" + ch + ", cw=" + cw + ", string: " + string ]);
}}}if (vAlign == 1) {
cy=0;
} else if (vAlign == 0) {
cy=((ph/2|0)) - ((ch/2|0));
} else {
cy=ph - ch;
}if (hAlign == 4) {
cx=0;
} else if (hAlign == 3) {
cx=((pw/2|0)) - ((cw/2|0));
} else {
cx=pw - cw;
}childLocation=Clazz.new_($I$(1,1).c$$I$I,[cx, cy]);
childSize=Clazz.new_($I$(2,1).c$$I$I,[cw, ch]);
var dpx;
var dpy;
var abx;
var aby;
var ancestorTranslateX=0;
var ancestorTranslateY=0;
var ancestor=this;
while (ancestor.hasParent$()){
var oldRef=ancestor;
ancestor=ancestor.getParent$();
if (ancestor === oldRef ) {
break;
}ancestorTranslateX+=(ancestor.getLocation$().getX$()|0);
ancestorTranslateY+=(ancestor.getLocation$().getY$()|0);
}
abx=px + cx + ancestorTranslateX ;
aby=py + cy + ancestorTranslateY ;
dpx=abx + padding;
dpy=aby + padding + sa ;
var drawingPoint=Clazz.new_($I$(1,1).c$$I$I,[dpx, dpy]);
var returnChild=Clazz.new_(C$.c$$java_awt_Point$java_awt_Dimension$java_awt_Point$java_awt_Point,[childLocation, childSize, drawingPoint, Clazz.new_($I$(1,1).c$$I$I,[abx, aby])]);
this.add$gnu_jpdf_BoundingBox(returnChild);
returnChild.setFullString$S(string);
returnChild.setStringArray$SA(childStrArray);
return returnChild;
});

Clazz.newMeth(C$, 'getStringBounds$S$I$I$java_awt_FontMetrics$I',  function (string, hAlign, vAlign, fm, padding) {
return this.getStringBounds$S$I$I$java_awt_FontMetrics$I$Z(string, hAlign, vAlign, fm, padding, true);
});

Clazz.newMeth(C$, 'drawWrappedString$java_awt_Graphics$java_awt_FontMetrics$I$I',  function (g, fm, padding, hAlign) {
if (this.getStringArray$() == null ) {
var p=this.getDrawingPoint$();
var xx=(p.getX$()|0);
var yy=(p.getY$()|0);
g.drawString$S$I$I(this.getFullString$(), xx, yy);
} else {
var len=this.stringArray.length;
for (var i=0; i < len; i++) {
var wrappedBox=null;
wrappedBox=this.getStringBounds$S$I$I$java_awt_FontMetrics$I(this.stringArray[i], hAlign, 1, fm, 0);
var pp=wrappedBox.getDrawingPoint$();
var xx=(pp.getX$()|0);
if (hAlign == 5) {
xx-=padding;
}if (hAlign == 4) {
xx+=padding;
}var yy=(pp.getY$()|0) + padding;
g.drawString$S$I$I(this.stringArray[i], xx, yy);
this.subtract$gnu_jpdf_BoundingBox$I(wrappedBox, 7);
}
}});

Clazz.newMeth(C$, 'drawWrappedStringTruncate$java_awt_Graphics$java_awt_FontMetrics$I$I',  function (g, fm, padding, hAlign) {
if (this.getStringArray$() == null ) {
var p=this.getDrawingPoint$();
var xx=(p.getX$()|0);
var yy=(p.getY$()|0);
if (this.getFullString$() != null ) {
g.drawString$S$I$I(this.getFullString$(), xx, yy);
} else {
System.err.println$S("getStringArray and getFullString are null");
}} else {
var totalHeight=0;
var len=this.stringArray.length;
for (var i=0; i < len; i++) {
var wrappedBox=null;
try {
wrappedBox=this.getStringBounds$S$I$I$java_awt_FontMetrics$I$Z(this.stringArray[i], hAlign, 1, fm, 0, false);
totalHeight+=(wrappedBox.getHeight$()|0);
if (this.getParent$() != null ) {
if (totalHeight > ((this.getParent$().getHeight$())|0)) {
return;
}}} catch (stle) {
if (Clazz.exceptionOf(stle,"gnu.jpdf.StringTooLongException")){
stle.printStackTrace$();
return;
} else {
throw stle;
}
}
wrappedBox.drawChoppedString$java_awt_Graphics$java_awt_FontMetrics$I$I(g, fm, padding, hAlign);
this.subtract$gnu_jpdf_BoundingBox$I(wrappedBox, 7);
}
}});

Clazz.newMeth(C$, 'drawChoppedString$java_awt_Graphics$java_awt_FontMetrics$I$I',  function (g, fm, padding, hAlign) {
var string="";
if (this.getStringArray$() != null ) {
string= String.instantialize(this.getStringArray$()[0]);
} else {
string= String.instantialize(this.getFullString$());
}var choppedBox=null;
try {
choppedBox=this.getStringBounds$S$I$I$java_awt_FontMetrics$I(string, hAlign, 1, fm, padding);
var p=choppedBox.getDrawingPoint$();
var x=(p.getX$()|0);
var y=(p.getY$()|0);
g.drawString$S$I$I(string, x, y);
} catch (stle) {
if (Clazz.exceptionOf(stle,"gnu.jpdf.StringTooLongException")){
var buf=Clazz.new_($I$(3,1)).append$S(string);
if (buf.length$() == 0) {
System.out.println$S("BoundingBox.drawChoppedString, buf len 0 ??");
throw Clazz.new_(Clazz.load('RuntimeException'));
}buf.deleteCharAt$I(buf.length$() - 1);
while ((fm.stringWidth$S(buf.toString()) > (this.getWidth$()|0)) && (buf.length$() > 0) ){
buf.deleteCharAt$I(buf.length$() - 1);
}
try {
choppedBox=this.getStringBounds$S$I$I$java_awt_FontMetrics$I(buf.toString(), hAlign, 1, fm, padding);
var pp=choppedBox.getDrawingPoint$();
var xx=(pp.getX$()|0);
var yy=(pp.getY$()|0);
g.drawString$S$I$I(string, xx, yy);
} catch (sstle) {
if (Clazz.exceptionOf(sstle,"gnu.jpdf.StringTooLongException")){
sstle.printStackTrace$();
} else {
throw sstle;
}
}
} else {
throw stle;
}
}
});

Clazz.newMeth(C$, 'getWrappedHeight$SA$java_awt_FontMetrics$I',  function (strings, fm, padding) {
var ma=fm.getMaxAscent$();
var md=fm.getMaxDescent$();
var sh=ma + md;
var hPad=(sh/20|0);
sh+=hPad;
var total=sh * strings.length;
return total + (padding * 2);
}, p$1);

Clazz.newMeth(C$, 'createStringArray$S$java_awt_FontMetrics$I$I',  function (string, fm, padding, pw) {
if (string == null ) {
System.err.println$S("Tried createStringArray with null String");
return null;
}if (fm == null ) {
System.err.println$S("Tried createStringArray with null FontMetrics");
}var lw=pw - (padding * 2);
var returnVector=Clazz.new_($I$(4,1));
var st=Clazz.new_($I$(5,1).c$$S$S$Z,[string, " \t\n\r\f", true]);
var tempBuffer=Clazz.new_($I$(3,1));
var finalBuffer=Clazz.new_($I$(3,1));
while (st.hasMoreTokens$()){
var tempString=st.nextToken$();
tempBuffer.append$S(tempString);
if ((fm.stringWidth$S(tempBuffer.toString()) < lw) && (tempBuffer.toString().charAt$I(tempBuffer.toString().length$() - 1) != "\n") && (tempBuffer.toString().charAt$I(tempBuffer.toString().length$() - 1) != "\r")  ) {
finalBuffer.append$S(tempString);
continue;
}returnVector.addElement$O(finalBuffer.toString());
finalBuffer.delete$I$I(0, finalBuffer.length$());
tempBuffer.delete$I$I(0, tempBuffer.length$());
if ((tempString.charAt$I(0) != "\n") && (tempString.charAt$I(0) != "\r") ) {
tempBuffer.append$S(tempString);
finalBuffer.append$S(tempString);
}continue;
}
returnVector.addElement$O(finalBuffer.toString());
var len=returnVector.size$();
var childStrArray=Clazz.array(String, [len]);
for (var i=0; i < len; i++) {
var curStr=returnVector.get$I(i);
childStrArray[i]=curStr;
}
return childStrArray;
}, p$1);

Clazz.newMeth(C$, 'subtract$gnu_jpdf_BoundingBox$I',  function (child, subtractFrom) {
if (child == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["BoundingBox.subtract, BoundingBox child is null"]);
}if (!child.hasParent$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["BoundingBox.subtract, BoundingBox child has no parent"]);
}if (!(child.getParent$() === this )) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["BoundingBox.subtract, this is not BoundingBox child\'s parent"]);
}var len=C$.SUBTRACTS.length;
var valid=false;
for (var i=0; i < len; i++) {
if (subtractFrom == C$.SUBTRACTS[i]) {
valid=true;
}}
if (!valid) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["BoundingBox.subtract, " + "subtractFrom invalid: " + subtractFrom ]);
}child.setParent$gnu_jpdf_BoundingBox(null);
var cx=(child.getLocation$().getX$()|0);
var cy=(child.getLocation$().getY$()|0);
var cw=(child.getSize$().getWidth$()|0);
var ch=(child.getSize$().getHeight$()|0);
var px=(this.getLocation$().getX$()|0);
var py=(this.getLocation$().getY$()|0);
var pw=(this.getSize$().getWidth$()|0);
var ph=(this.getSize$().getHeight$()|0);
switch (subtractFrom) {
case 8:
pw=cx;
this.setSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[pw, ph]));
return this;
case 9:
px=px + cw + cx ;
pw=pw - cw - cx ;
this.setLocation$java_awt_Point(Clazz.new_($I$(1,1).c$$I$I,[px, py]));
this.setSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[pw, ph]));
return this;
case 7:
py=py + ch + cy ;
ph=ph - ch - cy ;
this.setLocation$java_awt_Point(Clazz.new_($I$(1,1).c$$I$I,[px, py]));
this.setSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[pw, ph]));
return this;
case 6:
ph=cy;
this.setSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[pw, ph]));
return this;
default:
break;
}
return this;
});

Clazz.newMeth(C$, 'getDrawingPoint$',  function () {
return this.drawingPoint;
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
var upperLeft=Clazz.new_($I$(1,1).c$$I$I,[5, 5]);
var bounds=Clazz.new_($I$(2,1).c$$I$I,[100, 100]);
var parent=Clazz.new_(C$.c$$java_awt_Point$java_awt_Dimension,[upperLeft, bounds]);
var string="Hello World!";
var font=Clazz.new_($I$(6,1).c$$S$I$I,["SansSerif", 0, 12]);
var frame=Clazz.new_($I$(7,1));
frame.addNotify$();
try {
var image=frame.createImage$I$I(100, 100);
if (image == null ) {
System.err.println$S("image is null");
}var graphics=image.getGraphics$();
var fm=graphics.getFontMetrics$java_awt_Font(font);
var child=parent.getStringBounds$S$I$I$java_awt_FontMetrics$I(string, 4, 1, fm, 5);
System.out.println$S("Drawing Point: " + child.getDrawingPoint$().toString());
System.out.println$S("Now testing subtract() method...");
parent=Clazz.new_(C$.c$$java_awt_Point$java_awt_Dimension,[Clazz.new_($I$(1,1).c$$I$I,[10, 10]), Clazz.new_($I$(2,1).c$$I$I,[300, 300])]);
System.out.println$S("parent: " + parent.toString());
child=Clazz.new_(C$.c$$java_awt_Point$java_awt_Dimension,[Clazz.new_($I$(1,1).c$$I$I,[90, 110]), Clazz.new_($I$(2,1).c$$I$I,[100, 100])]);
parent.add$gnu_jpdf_BoundingBox(child);
System.out.println$S("child: " + child.toString());
System.out.println$();
System.out.println$S("subtracting the child from the parent");
System.out.println$S("SUBTRACT_FROM_TOP: ");
parent=parent.subtract$gnu_jpdf_BoundingBox$I(child, 6);
System.out.println$S("new parent: " + parent.toString());
System.out.println$();
System.out.println$S("Resetting parent");
parent=Clazz.new_(C$.c$$java_awt_Point$java_awt_Dimension,[Clazz.new_($I$(1,1).c$$I$I,[10, 10]), Clazz.new_($I$(2,1).c$$I$I,[300, 300])]);
parent.add$gnu_jpdf_BoundingBox(child);
System.out.println$S("SUBTRACT_FROM_BOTTOM");
parent.subtract$gnu_jpdf_BoundingBox$I(child, 7);
System.out.println$S("new parent: " + parent.toString());
System.out.println$();
System.out.println$S("Resetting parent");
parent=Clazz.new_(C$.c$$java_awt_Point$java_awt_Dimension,[Clazz.new_($I$(1,1).c$$I$I,[10, 10]), Clazz.new_($I$(2,1).c$$I$I,[300, 300])]);
parent.add$gnu_jpdf_BoundingBox(child);
System.out.println$S("SUBTRACT_FROM_LEFT");
parent.subtract$gnu_jpdf_BoundingBox$I(child, 8);
System.out.println$S("new parent: " + parent.toString());
System.out.println$();
System.out.println$S("Resetting parent");
parent=Clazz.new_(C$.c$$java_awt_Point$java_awt_Dimension,[Clazz.new_($I$(1,1).c$$I$I,[10, 10]), Clazz.new_($I$(2,1).c$$I$I,[300, 300])]);
parent.add$gnu_jpdf_BoundingBox(child);
System.out.println$S("SUBTRACT_FROM_RIGHT");
parent.subtract$gnu_jpdf_BoundingBox$I(child, 9);
System.out.println$S("new parent: " + parent.toString());
System.out.println$();
System.exit$I(0);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
System.exit$I(1);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Point$java_awt_Dimension$java_awt_Point$java_awt_Point',  function (p, d, drawingPoint, absolute) {
;C$.superclazz.c$$java_awt_Point$java_awt_Dimension.apply(this,[p, d]);C$.$init$.apply(this);
this.drawingPoint=drawingPoint;
this.absoluteLocation=absolute;
}, 1);

Clazz.newMeth(C$, 'checkHAlign$I',  function (hAlign) {
var len=C$.HORIZ_ALIGNS.length;
for (var i=0; i < len; i++) {
if (hAlign == C$.HORIZ_ALIGNS[i]) {
return true;
}}
return false;
}, p$1);

Clazz.newMeth(C$, 'checkVAlign$I',  function (vAlign) {
var len=C$.VERT_ALIGNS.length;
for (var i=0; i < len; i++) {
if (vAlign == C$.VERT_ALIGNS[i]) {
return true;
}}
return false;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.VERT_ALIGNS=Clazz.array(Integer.TYPE, -1, [0, 1, 2]);
C$.HORIZ_ALIGNS=Clazz.array(Integer.TYPE, -1, [3, 4, 5]);
C$.SUBTRACTS=Clazz.array(Integer.TYPE, -1, [6, 7, 8, 9]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
