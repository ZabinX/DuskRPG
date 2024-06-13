(function(){var P$=Clazz.newPackage("javax.swing.text");
/*c*/var C$=Clazz.newClass(P$, "GapVector");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['g0','g1'],'O',['array','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [10]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialLength) {
;C$.$init$.apply(this);
this.array=this.allocateArray$I(initialLength);
this.g0=0;
this.g1=initialLength;
}, 1);

Clazz.newMeth(C$, 'getArray$',  function () {
return this.array;
});

Clazz.newMeth(C$, 'getGapStart$',  function () {
return this.g0;
});

Clazz.newMeth(C$, 'getGapEnd$',  function () {
return this.g1;
});

Clazz.newMeth(C$, 'replace$I$I$O$I',  function (position, rmSize, addItems, addSize) {
var addOffset=0;
if (addSize == 0) {
this.close$I$I(position, rmSize);
return;
} else if (rmSize > addSize) {
this.close$I$I(position + addSize, rmSize - addSize);
} else {
var endSize=addSize - rmSize;
var end=this.open$I$I(position + rmSize, endSize);
System.arraycopy$O$I$O$I$I(addItems, rmSize, this.array, end, endSize);
addSize=rmSize;
}System.arraycopy$O$I$O$I$I(addItems, addOffset, this.array, position, addSize);
});

Clazz.newMeth(C$, 'close$I$I',  function (position, nItems) {
if (nItems == 0) return;
var end=position + nItems;
var new_gs=(this.g1 - this.g0) + nItems;
if (end <= this.g0) {
if (this.g0 != end) {
this.shiftGap$I(end);
}this.shiftGapStartDown$I(this.g0 - nItems);
} else if (position >= this.g0) {
if (this.g0 != position) {
this.shiftGap$I(position);
}this.shiftGapEndUp$I(this.g0 + new_gs);
} else {
this.shiftGapStartDown$I(position);
this.shiftGapEndUp$I(this.g0 + new_gs);
}});

Clazz.newMeth(C$, 'open$I$I',  function (position, nItems) {
var gapSize=this.g1 - this.g0;
if (nItems == 0) {
if (position > this.g0) position+=gapSize;
return position;
}this.shiftGap$I(position);
if (nItems >= gapSize) {
this.shiftEnd$I(this.getArrayLength$() - gapSize + nItems);
gapSize=this.g1 - this.g0;
}this.g0=this.g0 + nItems;
return position;
});

Clazz.newMeth(C$, 'resize$I',  function (nsize) {
var narray=this.allocateArray$I(nsize);
System.arraycopy$O$I$O$I$I(this.array, 0, narray, 0, Math.min(nsize, this.getArrayLength$()));
this.array=narray;
});

Clazz.newMeth(C$, 'shiftEnd$I',  function (newSize) {
var oldSize=this.getArrayLength$();
var oldGapEnd=this.g1;
var upperSize=oldSize - oldGapEnd;
var arrayLength=this.getNewArraySize$I(newSize);
var newGapEnd=arrayLength - upperSize;
this.resize$I(arrayLength);
this.g1=newGapEnd;
if (upperSize != 0) {
System.arraycopy$O$I$O$I$I(this.array, oldGapEnd, this.array, newGapEnd, upperSize);
}});

Clazz.newMeth(C$, 'getNewArraySize$I',  function (reqSize) {
return (reqSize + 1) * 2;
});

Clazz.newMeth(C$, 'shiftGap$I',  function (newGapStart) {
if (newGapStart == this.g0) {
return;
}var oldGapStart=this.g0;
var dg=newGapStart - oldGapStart;
var oldGapEnd=this.g1;
var newGapEnd=oldGapEnd + dg;
this.g0=newGapStart;
this.g1=newGapEnd;
if (dg > 0) {
System.arraycopy$O$I$O$I$I(this.array, oldGapEnd, this.array, oldGapStart, dg);
} else if (dg < 0) {
System.arraycopy$O$I$O$I$I(this.array, newGapStart, this.array, newGapEnd, -dg);
}});

Clazz.newMeth(C$, 'shiftGapStartDown$I',  function (newGapStart) {
this.g0=newGapStart;
});

Clazz.newMeth(C$, 'shiftGapEndUp$I',  function (newGapEnd) {
this.g1=newGapEnd;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
