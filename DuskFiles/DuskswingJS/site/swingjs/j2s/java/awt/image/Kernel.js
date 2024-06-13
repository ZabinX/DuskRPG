(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,'InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Kernel", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['width','height','xOrigin','yOrigin'],'O',['data','float[]']]]

Clazz.newMeth(C$, 'c$$I$I$FA',  function (width, height, data) {
;C$.$init$.apply(this);
this.width=width;
this.height=height;
this.xOrigin=(width - 1) >> 1;
this.yOrigin=(height - 1) >> 1;
var len=width * height;
if (data.length < len) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Data array too small (is " + data.length + " and should be " + len ]);
}this.data=Clazz.array(Float.TYPE, [len]);
System.arraycopy$O$I$O$I$I(data, 0, this.data, 0, len);
}, 1);

Clazz.newMeth(C$, 'getXOrigin$',  function () {
return this.xOrigin;
});

Clazz.newMeth(C$, 'getYOrigin$',  function () {
return this.yOrigin;
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.height;
});

Clazz.newMeth(C$, 'getKernelData$FA',  function (data) {
if (data == null ) {
data=Clazz.array(Float.TYPE, [this.data.length]);
} else if (data.length < this.data.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Data array too small (should be " + this.data.length + " but is " + data.length + " )" ]);
}System.arraycopy$O$I$O$I$I(this.data, 0, data, 0, this.data.length);
return data;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(1,1));
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
