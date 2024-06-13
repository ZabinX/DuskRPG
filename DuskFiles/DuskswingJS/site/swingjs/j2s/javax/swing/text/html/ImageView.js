(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},I$=[[0,['javax.swing.text.html.HTML','.Attribute'],'javax.swing.text.html.ImageView','javax.swing.text.Segment','java.awt.Rectangle',['javax.swing.text.html.ImageView','.ImageHandler'],'java.net.URL','javax.swing.UIManager','javax.swing.GrayFilter',['javax.swing.text.html.HTML','.Tag'],['javax.swing.text.Position','.Bias'],'java.awt.Toolkit','javax.swing.ImageIcon',['javax.swing.text.html.ImageView','.ImageLabelView'],'javax.swing.SwingUtilities']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.View');
C$.$classes$=[['ImageHandler',2],['ImageLabelView',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['vAlign'],'I',['width','height','state'],'H',['borderSize','leftInset','rightInset','topInset','bottomInset'],'O',['attr','javax.swing.text.AttributeSet','image','java.awt.Image','+disabledImage','container','java.awt.Container','fBounds','java.awt.Rectangle','borderColor','java.awt.Color','imageObserver','java.awt.image.ImageObserver','altView','javax.swing.text.View']]
,['Z',['sIsInc'],'I',['sIncRate']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
this.fBounds=Clazz.new_($I$(4,1));
this.imageObserver=Clazz.new_($I$(5,1),[this, null]);
this.state=48;
}, 1);

Clazz.newMeth(C$, 'getAltText$',  function () {
return this.getElement$().getAttributes$().getAttribute$O($I$(1).ALT);
});

Clazz.newMeth(C$, 'getImageURL$',  function () {
var src=this.getElement$().getAttributes$().getAttribute$O($I$(1).SRC);
if (src == null ) {
return null;
}var reference=(this.getDocument$()).getBase$();
try {
var u=Clazz.new_($I$(6,1).c$$java_net_URL$S,[reference, src]);
return u;
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getNoImageIcon$',  function () {
return $I$(7).getLookAndFeelDefaults$().get$O("html.missingImage");
});

Clazz.newMeth(C$, 'getLoadingImageIcon$',  function () {
return $I$(7).getLookAndFeelDefaults$().get$O("html.pendingImage");
});

Clazz.newMeth(C$, 'getImage$',  function () {
p$1.sync.apply(this, []);
return this.image;
});

Clazz.newMeth(C$, 'getImage$Z',  function (enabled) {
var img=this.getImage$();
if (!enabled) {
if (this.disabledImage == null ) {
this.disabledImage=$I$(8).createDisabledImage$java_awt_Image(img);
}img=this.disabledImage;
}return img;
}, p$1);

Clazz.newMeth(C$, 'setLoadsSynchronously$Z',  function (newValue) {
{
if (newValue) {
this.state|=64;
} else {
this.state=(this.state | 64) ^ 64;
}}});

Clazz.newMeth(C$, 'getLoadsSynchronously$',  function () {
return ((this.state & 64) != 0);
});

Clazz.newMeth(C$, 'getStyleSheet$',  function () {
var doc=this.getDocument$();
return doc.getStyleSheet$();
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
p$1.sync.apply(this, []);
return this.attr;
});

Clazz.newMeth(C$, 'getToolTipText$F$F$java_awt_Shape',  function (x, y, allocation) {
return this.getAltText$();
});

Clazz.newMeth(C$, 'setPropertiesFromAttributes$',  function () {
var sheet=this.getStyleSheet$();
this.attr=sheet.getViewAttributes$javax_swing_text_View(this);
this.borderSize=($s$[0] = p$1.getIntAttr$javax_swing_text_html_HTML_Attribute$I.apply(this, [$I$(1).BORDER, p$1.isLink.apply(this, []) ? 2 : 0]), $s$[0]);
this.leftInset=this.rightInset=($s$[0] = (p$1.getIntAttr$javax_swing_text_html_HTML_Attribute$I.apply(this, [$I$(1).HSPACE, 0]) + this.borderSize), $s$[0]);
this.topInset=this.bottomInset=($s$[0] = (p$1.getIntAttr$javax_swing_text_html_HTML_Attribute$I.apply(this, [$I$(1).VSPACE, 0]) + this.borderSize), $s$[0]);
this.borderColor=(this.getDocument$()).getForeground$javax_swing_text_AttributeSet(this.getAttributes$());
var attr=this.getElement$().getAttributes$();
var alignment=attr.getAttribute$O($I$(1).ALIGN);
this.vAlign=1.0;
if (alignment != null ) {
alignment=alignment.toString();
if ("top".equals$O(alignment)) {
this.vAlign=0.0;
} else if ("middle".equals$O(alignment)) {
this.vAlign=0.5;
}}var anchorAttr=attr.getAttribute$O($I$(9).A);
if (anchorAttr != null  && anchorAttr.isDefined$O($I$(1).HREF) ) {
{
this.state|=2;
}} else {
{
this.state=(this.state | 2) ^ 2;
}}});

Clazz.newMeth(C$, 'setParent$javax_swing_text_View',  function (parent) {
var oldParent=this.getParent$();
C$.superclazz.prototype.setParent$javax_swing_text_View.apply(this, [parent]);
this.container=(parent != null ) ? this.getContainer$() : null;
if (oldParent !== parent ) {
{
this.state|=16;
}}});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
C$.superclazz.prototype.changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory.apply(this, [e, a, f]);
{
this.state|=48;
}this.preferenceChanged$javax_swing_text_View$Z$Z(null, true, true);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, a) {
p$1.sync.apply(this, []);
var rect=(Clazz.instanceOf(a, "java.awt.Rectangle")) ? a : a.getBounds$();
var clip=g.getClipBounds$();
this.fBounds.setBounds$java_awt_Rectangle(rect);
p$1.paintHighlights$java_awt_Graphics$java_awt_Shape.apply(this, [g, a]);
p$1.paintBorder$java_awt_Graphics$java_awt_Rectangle.apply(this, [g, rect]);
if (clip != null ) {
g=g.create$();
g.clipRect$I$I$I$I(rect.x + this.leftInset, rect.y + this.topInset, rect.width - this.leftInset - this.rightInset , rect.height - this.topInset - this.bottomInset );
}var host=this.getContainer$();
var img=p$1.getImage$Z.apply(this, [host == null  || host.isEnabled$() ]);
if (img != null ) {
if (!p$1.hasPixels$java_awt_Image.apply(this, [img])) {
var icon=this.getLoadingImageIcon$();
if (icon != null ) {
icon.paintIcon$java_awt_Component$java_awt_Graphics$I$I(host, g, rect.x + this.leftInset, rect.y + this.topInset);
}} else {
g.drawImage$java_awt_Image$I$I$I$I$java_awt_image_ImageObserver(img, rect.x + this.leftInset, rect.y + this.topInset, this.width, this.height, this.imageObserver);
}} else {
var icon=this.getNoImageIcon$();
if (icon != null ) {
icon.paintIcon$java_awt_Component$java_awt_Graphics$I$I(host, g, rect.x + this.leftInset, rect.y + this.topInset);
}var view=p$1.getAltView.apply(this, []);
if (view != null  && ((this.state & 4) == 0 || this.width > 38 ) ) {
var altRect=Clazz.new_($I$(4,1).c$$I$I$I$I,[rect.x + this.leftInset + 38 , rect.y + this.topInset, rect.width - this.leftInset - this.rightInset - 38 , rect.height - this.topInset - this.bottomInset ]);
view.paint$java_awt_Graphics$java_awt_Shape(g, altRect);
}}if (clip != null ) {
g.dispose$();
}});

Clazz.newMeth(C$, 'paintHighlights$java_awt_Graphics$java_awt_Shape',  function (g, shape) {
if (Clazz.instanceOf(this.container, "javax.swing.text.JTextComponent")) {
var tc=this.container;
var h=tc.getHighlighter$();
if (Clazz.instanceOf(h, "javax.swing.text.LayeredHighlighter")) {
(h).paintLayeredHighlights$java_awt_Graphics$I$I$java_awt_Shape$javax_swing_text_JTextComponent$javax_swing_text_View(g, this.getStartOffset$(), this.getEndOffset$(), shape, tc, this);
}}}, p$1);

Clazz.newMeth(C$, 'paintBorder$java_awt_Graphics$java_awt_Rectangle',  function (g, rect) {
var color=this.borderColor;
if ((this.borderSize > 0 || this.image == null  ) && color != null  ) {
var xOffset=this.leftInset - this.borderSize;
var yOffset=this.topInset - this.borderSize;
g.setColor$java_awt_Color(color);
var n=(this.image == null ) ? ($s$[0] = 1, $s$[0]) : this.borderSize;
for (var counter=0; counter < n; counter++) {
g.drawRect$I$I$I$I(rect.x + xOffset + counter , rect.y + yOffset + counter , rect.width - counter - counter - xOffset - xOffset - 1 , rect.height - counter - counter - yOffset - yOffset - 1 );
}
}}, p$1);

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
p$1.sync.apply(this, []);
if (axis == 0 && (this.state & 4) == 4 ) {
p$1.getPreferredSpanFromAltView$I.apply(this, [axis]);
return this.width + this.leftInset + this.rightInset ;
}if (axis == 1 && (this.state & 8) == 8 ) {
p$1.getPreferredSpanFromAltView$I.apply(this, [axis]);
return this.height + this.topInset + this.bottomInset ;
}var image=this.getImage$();
if (image != null ) {
switch (axis) {
case 0:
return this.width + this.leftInset + this.rightInset ;
case 1:
return this.height + this.topInset + this.bottomInset ;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid axis: " + axis]);
}
} else {
var view=p$1.getAltView.apply(this, []);
var retValue=0.0;
if (view != null ) {
retValue=view.getPreferredSpan$I(axis);
}switch (axis) {
case 0:
return retValue + (this.width + this.leftInset + this.rightInset );
case 1:
return retValue + (this.height + this.topInset + this.bottomInset );
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid axis: " + axis]);
}
}});

Clazz.newMeth(C$, 'getAlignment$I',  function (axis) {
switch (axis) {
case 1:
return this.vAlign;
default:
return C$.superclazz.prototype.getAlignment$I.apply(this, [axis]);
}
});

Clazz.newMeth(C$, 'modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias',  function (pos, a, b) {
var p0=this.getStartOffset$();
var p1=this.getEndOffset$();
if ((pos >= p0) && (pos <= p1) ) {
var r=a.getBounds$();
if (pos == p1) {
r.x+=r.width;
}r.width=0;
return r;
}return null;
});

Clazz.newMeth(C$, 'viewToModel$F$F$java_awt_Shape$javax_swing_text_Position_BiasA',  function (x, y, a, bias) {
var alloc=a;
if (x < alloc.x + alloc.width ) {
bias[0]=$I$(10).Forward;
return this.getStartOffset$();
}bias[0]=$I$(10).Backward;
return this.getEndOffset$();
});

Clazz.newMeth(C$, 'setSize$F$F',  function (width, height) {
p$1.sync.apply(this, []);
if (this.getImage$() == null ) {
var view=p$1.getAltView.apply(this, []);
if (view != null ) {
view.setSize$F$F(Math.max(0.0, width - (38 + this.leftInset + this.rightInset )), Math.max(0.0, height - (this.topInset + this.bottomInset)));
}}});

Clazz.newMeth(C$, 'isLink',  function () {
return ((this.state & 2) == 2);
}, p$1);

Clazz.newMeth(C$, 'hasPixels$java_awt_Image',  function (image) {
return image != null  && (image.getHeight$java_awt_image_ImageObserver(this.imageObserver) > 0)  && (image.getWidth$java_awt_image_ImageObserver(this.imageObserver) > 0) ;
}, p$1);

Clazz.newMeth(C$, 'getPreferredSpanFromAltView$I',  function (axis) {
if (this.getImage$() == null ) {
var view=p$1.getAltView.apply(this, []);
if (view != null ) {
return view.getPreferredSpan$I(axis);
}}return 0.0;
}, p$1);

Clazz.newMeth(C$, 'repaint$J',  function (delay) {
if (this.container != null  && this.fBounds != null  ) {
this.container.repaint$J$I$I$I$I(delay, this.fBounds.x, this.fBounds.y, this.fBounds.width, this.fBounds.height);
}}, p$1);

Clazz.newMeth(C$, 'getIntAttr$javax_swing_text_html_HTML_Attribute$I',  function (name, deflt) {
var attr=this.getElement$().getAttributes$();
if (attr.isDefined$O(name)) {
var i;
var val=attr.getAttribute$O(name);
if (val == null ) {
i=deflt;
} else {
try {
i=Math.max(0, Integer.parseInt$S(val));
} catch (x) {
if (Clazz.exceptionOf(x,"NumberFormatException")){
i=deflt;
} else {
throw x;
}
}
}return i;
} else return deflt;
}, p$1);

Clazz.newMeth(C$, 'sync',  function () {
var s=this.state;
if ((s & 32) != 0) {
p$1.refreshImage.apply(this, []);
}s=this.state;
if ((s & 16) != 0) {
{
this.state=(this.state | 16) ^ 16;
}this.setPropertiesFromAttributes$();
}}, p$1);

Clazz.newMeth(C$, 'refreshImage',  function () {
{
this.state=(this.state | 1 | 32 | 4 | 8 ) ^ (44);
this.image=null;
this.width=this.height=0;
}try {
p$1.loadImage.apply(this, []);
p$1.updateImageSize.apply(this, []);
} finally {
{
this.state=(this.state | 1) ^ 1;
}}
}, p$1);

Clazz.newMeth(C$, 'loadImage',  function () {
var src=this.getImageURL$();
var newImage=null;
if (src != null ) {
var cache=this.getDocument$().getProperty$O("imageCache");
if (cache != null ) {
newImage=cache.get$O(src);
} else {
newImage=$I$(11).getDefaultToolkit$().createImage$java_net_URL(src);
if (newImage != null  && this.getLoadsSynchronously$() ) {
var ii=Clazz.new_($I$(12,1));
ii.setImage$java_awt_Image(newImage);
}}}this.image=newImage;
}, p$1);

Clazz.newMeth(C$, 'updateImageSize',  function () {
var newWidth=0;
var newHeight=0;
var newState=0;
var newImage=this.getImage$();
if (newImage != null ) {
var elem=this.getElement$();
var attr=elem.getAttributes$();
newWidth=p$1.getIntAttr$javax_swing_text_html_HTML_Attribute$I.apply(this, [$I$(1).WIDTH, -1]);
if (newWidth > 0) {
newState|=4;
}newHeight=p$1.getIntAttr$javax_swing_text_html_HTML_Attribute$I.apply(this, [$I$(1).HEIGHT, -1]);
if (newHeight > 0) {
newState|=8;
}if (newWidth <= 0) {
newWidth=newImage.getWidth$java_awt_image_ImageObserver(this.imageObserver);
if (newWidth <= 0) {
newWidth=38;
}}if (newHeight <= 0) {
newHeight=newImage.getHeight$java_awt_image_ImageObserver(this.imageObserver);
if (newHeight <= 0) {
newHeight=38;
}}if ((newState & (12)) != 0) {
$I$(11).getDefaultToolkit$().prepareImage$java_awt_Image$I$I$java_awt_image_ImageObserver(newImage, newWidth, newHeight, this.imageObserver);
} else {
$I$(11).getDefaultToolkit$().prepareImage$java_awt_Image$I$I$java_awt_image_ImageObserver(newImage, -1, -1, this.imageObserver);
}var createText=false;
{
if (this.image != null ) {
if ((newState & 4) == 4 || this.width == 0 ) {
this.width=newWidth;
}if ((newState & 8) == 8 || this.height == 0 ) {
this.height=newHeight;
}} else {
createText=true;
if ((newState & 4) == 4) {
this.width=newWidth;
}if ((newState & 8) == 8) {
this.height=newHeight;
}}this.state=this.state | newState;
this.state=(this.state | 1) ^ 1;
}if (createText) {
p$1.updateAltTextView.apply(this, []);
}} else {
this.width=this.height=38;
p$1.updateAltTextView.apply(this, []);
}}, p$1);

Clazz.newMeth(C$, 'updateAltTextView',  function () {
var text=this.getAltText$();
if (text != null ) {
var newView;
newView=Clazz.new_([this, null, this.getElement$(), text],$I$(13,1).c$$javax_swing_text_Element$S);
{
this.altView=newView;
}}}, p$1);

Clazz.newMeth(C$, 'getAltView',  function () {
var view;
{
view=this.altView;
}if (view != null  && view.getParent$() == null  ) {
view.setParent$javax_swing_text_View(this.getParent$());
}return view;
}, p$1);

Clazz.newMeth(C$, 'safePreferenceChanged',  function () {
if ($I$(14).isEventDispatchThread$()) {
var doc=this.getDocument$();
if (Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument")) {
(doc).readLock$();
}this.preferenceChanged$javax_swing_text_View$Z$Z(null, true, true);
if (Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument")) {
(doc).readUnlock$();
}} else {
$I$(14,"invokeLater$Runnable",[((P$.ImageView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
p$1.safePreferenceChanged.apply(this.b$['javax.swing.text.html.ImageView'], []);
});
})()
), Clazz.new_(P$.ImageView$1.$init$,[this, null]))]);
}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.sIsInc=false;
C$.sIncRate=100;
};
var $s$ = new Int16Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageView, "ImageHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.image.ImageObserver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'imageUpdate$java_awt_Image$I$I$I$I$I',  function (img, flags, x, y, newWidth, newHeight) {
if (img !== this.b$['javax.swing.text.html.ImageView'].image  && img !== this.b$['javax.swing.text.html.ImageView'].disabledImage   || this.b$['javax.swing.text.html.ImageView'].image == null   || this.b$['javax.swing.text.View'].getParent$.apply(this.b$['javax.swing.text.View'], []) == null  ) {
return false;
}if ((flags & (192)) != 0) {
p$1.repaint$J.apply(this.b$['javax.swing.text.html.ImageView'], [0]);
{
if (this.b$['javax.swing.text.html.ImageView'].image === img ) {
this.b$['javax.swing.text.html.ImageView'].image=null;
if ((this.b$['javax.swing.text.html.ImageView'].state & 4) != 4) {
this.b$['javax.swing.text.html.ImageView'].width=38;
}if ((this.b$['javax.swing.text.html.ImageView'].state & 8) != 8) {
this.b$['javax.swing.text.html.ImageView'].height=38;
}} else {
this.b$['javax.swing.text.html.ImageView'].disabledImage=null;
}if ((this.b$['javax.swing.text.html.ImageView'].state & 1) == 1) {
return false;
}}p$1.updateAltTextView.apply(this.b$['javax.swing.text.html.ImageView'], []);
p$1.safePreferenceChanged.apply(this.b$['javax.swing.text.html.ImageView'], []);
return false;
}if (this.b$['javax.swing.text.html.ImageView'].image === img ) {
var changed=($s$[0] = 0, $s$[0]);
if ((flags & 2) != 0 && !this.b$['javax.swing.text.View'].getElement$.apply(this.b$['javax.swing.text.View'], []).getAttributes$().isDefined$O($I$(1).HEIGHT) ) {
changed=($s$[0] = changed|(1), $s$[0]);
}if ((flags & 1) != 0 && !this.b$['javax.swing.text.View'].getElement$.apply(this.b$['javax.swing.text.View'], []).getAttributes$().isDefined$O($I$(1).WIDTH) ) {
changed=($s$[0] = changed|(2), $s$[0]);
}{
if ((changed & 1) == 1 && (this.b$['javax.swing.text.html.ImageView'].state & 4) == 0 ) {
this.b$['javax.swing.text.html.ImageView'].width=newWidth;
}if ((changed & 2) == 2 && (this.b$['javax.swing.text.html.ImageView'].state & 8) == 0 ) {
this.b$['javax.swing.text.html.ImageView'].height=newHeight;
}if ((this.b$['javax.swing.text.html.ImageView'].state & 1) == 1) {
return true;
}}if (changed != 0) {
p$1.safePreferenceChanged.apply(this.b$['javax.swing.text.html.ImageView'], []);
return true;
}}if ((flags & (48)) != 0) {
p$1.repaint$J.apply(this.b$['javax.swing.text.html.ImageView'], [0]);
} else if ((flags & 8) != 0 && $I$(2).sIsInc ) {
p$1.repaint$J.apply(this.b$['javax.swing.text.html.ImageView'], [$I$(2).sIncRate]);
}return ((flags & 32) == 0);
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageView, "ImageLabelView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.html.InlineView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['segment','javax.swing.text.Segment','$fg','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$S',  function (e, text) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[e]);C$.$init$.apply(this);
this.reset$S(text);
}, 1);

Clazz.newMeth(C$, 'reset$S',  function (text) {
this.segment=Clazz.new_([text.toCharArray$(), 0, text.length$()],$I$(3,1).c$$CA$I$I);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, a) {
var painter=this.getGlyphPainter$();
if (painter != null ) {
g.setColor$java_awt_Color(this.getForeground$());
painter.paint$javax_swing_text_GlyphView$java_awt_Graphics$java_awt_Shape$I$I(this, g, a, this.getStartOffset$(), this.getEndOffset$());
}});

Clazz.newMeth(C$, 'getText$I$I',  function (p0, p1) {
if (p0 < 0 || p1 > this.segment.array.length ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["ImageLabelView: Stale view"]);
}this.segment.offset=p0;
this.segment.count=p1 - p0;
return this.segment;
});

Clazz.newMeth(C$, 'getStartOffset$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getEndOffset$',  function () {
return this.segment.array.length;
});

Clazz.newMeth(C$, 'breakView$I$I$F$F',  function (axis, p0, pos, len) {
return this;
});

Clazz.newMeth(C$, 'getForeground$',  function () {
var parent;
if (this.$fg == null  && (parent=this.getParent$()) != null  ) {
var doc=this.getDocument$();
var attr=parent.getAttributes$();
if (attr != null  && (Clazz.instanceOf(doc, "javax.swing.text.StyledDocument")) ) {
this.$fg=(doc).getForeground$javax_swing_text_AttributeSet(attr);
}}return this.$fg;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
