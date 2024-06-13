(function(){var P$=Clazz.newPackage("sun.text"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "UCompactIntArray", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isCompact'],'I',['defaultValue'],'O',['values','int[][]','indices','short[][]','blockTouched','boolean[][]','planeTouched','boolean[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.values=Clazz.array(Integer.TYPE, [16, null]);
this.indices=Clazz.array(Short.TYPE, [16, null]);
this.blockTouched=Clazz.array(Boolean.TYPE, [16, null]);
this.planeTouched=Clazz.array(Boolean.TYPE, [16]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (defaultValue) {
C$.c$.apply(this, []);
this.defaultValue=defaultValue;
}, 1);

Clazz.newMeth(C$, 'elementAt$I',  function (index) {
var plane=(index & 196608) >> 16;
if (!this.planeTouched[plane]) {
return this.defaultValue;
}index&=65535;
return this.values[plane][(this.indices[plane][index >> 7] & 65535) + (index & 127)];
});

Clazz.newMeth(C$, 'setElementAt$I$I',  function (index, value) {
if (this.isCompact) {
p$1.expand.apply(this, []);
}var plane=(index & 196608) >> 16;
if (!this.planeTouched[plane]) {
p$1.initPlane$I.apply(this, [plane]);
}index&=65535;
this.values[plane][index]=value;
this.blockTouched[plane][index >> 7]=true;
});

Clazz.newMeth(C$, 'compact$',  function () {
if (this.isCompact) {
return;
}for (var plane=0; plane < 16; plane++) {
if (!this.planeTouched[plane]) {
continue;
}var limitCompacted=0;
var iBlockStart=0;
var iUntouched=($s$[0] = -1, $s$[0]);
for (var i=0; i < this.indices[plane].length; ++i, iBlockStart+=128) {
this.indices[plane][i]=(-1|0);
if (!this.blockTouched[plane][i] && iUntouched != -1 ) {
this.indices[plane][i]=iUntouched;
} else {
var jBlockStart=limitCompacted * 128;
if (i > limitCompacted) {
System.arraycopy$O$I$O$I$I(this.values[plane], iBlockStart, this.values[plane], jBlockStart, 128);
}if (!this.blockTouched[plane][i]) {
iUntouched=($s$[0] = jBlockStart, $s$[0]);
}this.indices[plane][i]=(jBlockStart|0);
++limitCompacted;
}}
var newSize=limitCompacted * 128;
var result=Clazz.array(Integer.TYPE, [newSize]);
System.arraycopy$O$I$O$I$I(this.values[plane], 0, result, 0, newSize);
this.values[plane]=result;
this.blockTouched[plane]=null;
}
this.isCompact=true;
});

Clazz.newMeth(C$, 'expand',  function () {
var i;
if (this.isCompact) {
var tempArray;
for (var plane=0; plane < 16; plane++) {
if (!this.planeTouched[plane]) {
continue;
}this.blockTouched[plane]=Clazz.array(Boolean.TYPE, [512]);
tempArray=Clazz.array(Integer.TYPE, [65536]);
for (i=0; i < 65536; ++i) {
tempArray[i]=this.values[plane][this.indices[plane][i >> 7] & 65535 + (i & 127)];
this.blockTouched[plane][i >> 7]=true;
}
for (i=0; i < 512; ++i) {
this.indices[plane][i]=((i << 7)|0);
}
this.values[plane]=tempArray;
}
this.isCompact=false;
}}, p$1);

Clazz.newMeth(C$, 'initPlane$I',  function (plane) {
this.values[plane]=Clazz.array(Integer.TYPE, [65536]);
this.indices[plane]=Clazz.array(Short.TYPE, [512]);
this.blockTouched[plane]=Clazz.array(Boolean.TYPE, [512]);
this.planeTouched[plane]=true;
if (this.planeTouched[0] && plane != 0 ) {
System.arraycopy$O$I$O$I$I(this.indices[0], 0, this.indices[plane], 0, 512);
} else {
for (var i=0; i < 512; ++i) {
this.indices[plane][i]=((i << 7)|0);
}
}for (var i=0; i < 65536; ++i) {
this.values[plane][i]=this.defaultValue;
}
}, p$1);

Clazz.newMeth(C$, 'getKSize$',  function () {
var size=0;
for (var plane=0; plane < 16; plane++) {
if (this.planeTouched[plane]) {
size+=(this.values[plane].length * 4 + this.indices[plane].length * 2);
}}
return (size/1024|0);
});
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
