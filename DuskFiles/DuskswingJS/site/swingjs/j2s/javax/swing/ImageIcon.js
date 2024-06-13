(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'StringBuilder','java.awt.Toolkit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageIcon", null, null, 'javax.swing.Icon');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.loadStatus=0;
this.description=null;
this.width=-1;
this.height=-1;
},1);

C$.$fields$=[['Z',['秘video'],'I',['loadStatus','width','height'],'S',['filename','description'],'O',['location','java.net.URL','image','java.awt.Image','imageObserver','java.awt.image.ImageObserver','秘tempIcon','javax.swing.ImageIcon']]
,['I',['mediaTrackerID'],'O',['TRACKER_KEY','java.lang.Object']]]

Clazz.newMeth(C$, '秘isVideo$',  function () {
return this.秘video;
});

Clazz.newMeth(C$, 'c$$S$S',  function (filename, description) {
;C$.$init$.apply(this);
if (description != null  && description.indexOf$S("jsvideo") >= 0 ) {
this.秘video=true;
this.image=($I$(2).getDefaultToolkit$()).getVideo$S(filename);
} else {
this.image=$I$(2).getDefaultToolkit$().getImage$S(filename);
}if (this.image == null ) {
return;
}this.filename=filename;
this.description=description;
this.loadImage$java_awt_Image(this.image);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (filename) {
C$.c$$S$S.apply(this, [filename, filename]);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL$S',  function (location, description) {
;C$.$init$.apply(this);
if (description != null  && description.indexOf$S("jsvideo") >= 0 ) {
this.image=($I$(2).getDefaultToolkit$()).getVideo$java_net_URL(location);
} else {
this.image=$I$(2).getDefaultToolkit$().getImage$java_net_URL(location);
}if (this.image == null ) {
return;
}this.location=location;
this.description=description;
this.loadImage$java_awt_Image(this.image);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL',  function (location) {
C$.c$$java_net_URL$S.apply(this, [location, location.toExternalForm$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Image$S',  function (image, description) {
C$.c$$java_awt_Image.apply(this, [image]);
this.description=description;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Image',  function (image) {
;C$.$init$.apply(this);
this.image=image;
var o=image.getProperty$S$java_awt_image_ImageObserver("comment", this.imageObserver);
if (Clazz.instanceOf(o, "java.lang.String")) {
this.description=o;
}this.loadImage$java_awt_Image(image);
}, 1);

Clazz.newMeth(C$, 'c$$BA$S',  function (imageData, description) {
;C$.$init$.apply(this);
if (description != null  && description.indexOf$S("jsvideo") >= 0 ) {
this.image=($I$(2).getDefaultToolkit$()).createVideo$BA(imageData);
} else {
this.image=$I$(2).getDefaultToolkit$().createImage$BA(imageData);
}if (this.image == null ) {
return;
}this.description=description;
this.loadImage$java_awt_Image(this.image);
}, 1);

Clazz.newMeth(C$, 'c$$BA',  function (imageData) {
;C$.$init$.apply(this);
this.image=$I$(2).getDefaultToolkit$().createImage$BA(imageData);
if (this.image == null ) {
return;
}var o=this.image.getProperty$S$java_awt_image_ImageObserver("comment", this.imageObserver);
if (Clazz.instanceOf(o, "java.lang.String")) {
this.description=o;
}this.loadImage$java_awt_Image(this.image);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'loadImage$java_awt_Image',  function (image) {
this.width=image.getWidth$java_awt_image_ImageObserver(this.imageObserver);
this.height=image.getHeight$java_awt_image_ImageObserver(this.imageObserver);
});

Clazz.newMeth(C$, '秘setIconSize$I$I',  function (w, h) {
this.width=w;
this.height=h;
});

Clazz.newMeth(C$, 'getImageLoadStatus$',  function () {
return this.loadStatus;
});

Clazz.newMeth(C$, 'getImage$',  function () {
return this.image;
});

Clazz.newMeth(C$, 'setImage$java_awt_Image',  function (image) {
this.image=image;
this.loadImage$java_awt_Image(image);
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S',  function (description) {
this.description=description;
});

Clazz.newMeth(C$, 'paintIcon$java_awt_Component$java_awt_Graphics$I$I',  function (c, g, x, y) {
if (this.imageObserver == null ) {
(g).drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, x, y, c);
} else {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, x, y, this.imageObserver);
}});

Clazz.newMeth(C$, 'getIconWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'getIconHeight$',  function () {
return this.height;
});

Clazz.newMeth(C$, 'setImageObserver$java_awt_image_ImageObserver',  function (observer) {
this.imageObserver=observer;
});

Clazz.newMeth(C$, 'getImageObserver$',  function () {
return this.imageObserver;
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.description != null ) {
return this.description;
}return C$.superclazz.prototype.toString.apply(this, []);
});

C$.$static$=function(){C$.$static$=0;
C$.TRACKER_KEY=Clazz.new_($I$(1,1).c$$S,["TRACKER_KEY"]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
