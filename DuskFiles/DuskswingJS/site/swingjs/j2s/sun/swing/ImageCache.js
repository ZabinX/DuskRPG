(function(){var P$=Clazz.newPackage("sun.swing"),p$1={},I$=[[0,'java.util.LinkedList',['sun.swing.ImageCache','.Entry']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageCache", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Entry',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['maxCount'],'O',['entries','java.util.LinkedList']]]

Clazz.newMeth(C$, 'c$$I',  function (maxCount) {
;C$.$init$.apply(this);
this.maxCount=maxCount;
this.entries=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'setMaxCount$I',  function (maxCount) {
this.maxCount=maxCount;
});

Clazz.newMeth(C$, 'flush$',  function () {
this.entries.clear$();
});

Clazz.newMeth(C$, 'getEntry$O$java_awt_GraphicsConfiguration$I$I$OA',  function (key, config, w, h, args) {
var entry;
var iter=this.entries.listIterator$();
while (iter.hasNext$()){
var ref=iter.next$();
entry=ref;
if (entry == null ) {
iter.remove$();
} else if (entry.equals$java_awt_GraphicsConfiguration$I$I$OA(config, w, h, args)) {
iter.remove$();
this.entries.addFirst$O(ref);
return entry;
}}
entry=Clazz.new_($I$(2,1).c$$java_awt_GraphicsConfiguration$I$I$OA,[config, w, h, args]);
if (this.entries.size$() >= this.maxCount) {
this.entries.removeLast$();
}this.entries.addFirst$O(entry);
return entry;
}, p$1);

Clazz.newMeth(C$, 'getImage$O$java_awt_GraphicsConfiguration$I$I$OA',  function (key, config, w, h, args) {
var entry=p$1.getEntry$O$java_awt_GraphicsConfiguration$I$I$OA.apply(this, [key, config, w, h, args]);
return entry.getImage$();
});

Clazz.newMeth(C$, 'setImage$O$java_awt_GraphicsConfiguration$I$I$OA$java_awt_Image',  function (key, config, w, h, args, image) {
var entry=p$1.getEntry$O$java_awt_GraphicsConfiguration$I$I$OA.apply(this, [key, config, w, h, args]);
entry.setImage$java_awt_Image(image);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageCache, "Entry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['w','h'],'O',['config','java.awt.GraphicsConfiguration','args','Object[]','image','java.awt.Image']]]

Clazz.newMeth(C$, 'c$$java_awt_GraphicsConfiguration$I$I$OA',  function (config, w, h, args) {
;C$.$init$.apply(this);
this.config=config;
this.args=args;
this.w=w;
this.h=h;
}, 1);

Clazz.newMeth(C$, 'setImage$java_awt_Image',  function (image) {
this.image=image;
});

Clazz.newMeth(C$, 'getImage$',  function () {
return this.image;
});

Clazz.newMeth(C$, 'toString',  function () {
var value=C$.superclazz.prototype.toString.apply(this, []) + "[ graphicsConfig=" + this.config + ", image=" + this.image + ", w=" + this.w + ", h=" + this.h ;
if (this.args != null ) {
for (var counter=0; counter < this.args.length; counter++) {
value+=", " + this.args[counter];
}
}value+="]";
return value;
});

Clazz.newMeth(C$, 'equals$java_awt_GraphicsConfiguration$I$I$OA',  function (config, w, h, args) {
if (this.w == w && this.h == h  && ((this.config != null  && this.config.equals$O(config) ) || (this.config == null  && config == null  ) ) ) {
if (this.args == null  && args == null  ) {
return true;
}if (this.args != null  && args != null   && this.args.length == args.length ) {
for (var counter=args.length - 1; counter >= 0; counter--) {
var a1=this.args[counter];
var a2=args[counter];
if ((a1 == null  && a2 != null  ) || (a1 != null  && !a1.equals$O(a2) ) ) {
return false;
}}
return true;
}}return false;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
