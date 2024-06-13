(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.png"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RowFilter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'abs$I',  function (x) {
return (x < 0) ? -x : x;
}, 1);

Clazz.newMeth(C$, 'subFilter$BA$BA$I$I',  function (currRow, subFilteredRow, bytesPerPixel, bytesPerRow) {
var badness=0;
for (var i=bytesPerPixel; i < bytesPerRow + bytesPerPixel; i++) {
var curr=currRow[i] & 255;
var left=currRow[i - bytesPerPixel] & 255;
var difference=curr - left;
subFilteredRow[i]=(difference|0);
badness+=C$.abs$I(difference);
}
return badness;
}, 1);

Clazz.newMeth(C$, 'upFilter$BA$BA$BA$I$I',  function (currRow, prevRow, upFilteredRow, bytesPerPixel, bytesPerRow) {
var badness=0;
for (var i=bytesPerPixel; i < bytesPerRow + bytesPerPixel; i++) {
var curr=currRow[i] & 255;
var up=prevRow[i] & 255;
var difference=curr - up;
upFilteredRow[i]=(difference|0);
badness+=C$.abs$I(difference);
}
return badness;
}, 1);

Clazz.newMeth(C$, 'paethPredictor$I$I$I',  function (a, b, c) {
var p=a + b - c;
var pa=C$.abs$I(p - a);
var pb=C$.abs$I(p - b);
var pc=C$.abs$I(p - c);
if ((pa <= pb) && (pa <= pc) ) {
return a;
} else if (pb <= pc) {
return b;
} else {
return c;
}});

Clazz.newMeth(C$, 'filterRow$I$BA$BA$BAA$I$I',  function (colorType, currRow, prevRow, scratchRows, bytesPerRow, bytesPerPixel) {
if (colorType != 3) {
System.arraycopy$O$I$O$I$I(currRow, bytesPerPixel, scratchRows[0], bytesPerPixel, bytesPerRow);
return 0;
}var filterBadness=Clazz.array(Integer.TYPE, [5]);
for (var i=0; i < 5; i++) {
filterBadness[i]=2147483647;
}
{
var badness=0;
for (var i=bytesPerPixel; i < bytesPerRow + bytesPerPixel; i++) {
var curr=currRow[i] & 255;
badness+=curr;
}
filterBadness[0]=badness;
}{
var subFilteredRow=scratchRows[1];
var badness=C$.subFilter$BA$BA$I$I(currRow, subFilteredRow, bytesPerPixel, bytesPerRow);
filterBadness[1]=badness;
}{
var upFilteredRow=scratchRows[2];
var badness=C$.upFilter$BA$BA$BA$I$I(currRow, prevRow, upFilteredRow, bytesPerPixel, bytesPerRow);
filterBadness[2]=badness;
}{
var averageFilteredRow=scratchRows[3];
var badness=0;
for (var i=bytesPerPixel; i < bytesPerRow + bytesPerPixel; i++) {
var curr=currRow[i] & 255;
var left=currRow[i - bytesPerPixel] & 255;
var up=prevRow[i] & 255;
var difference=curr - ((left + up)/2|0);
;averageFilteredRow[i]=(difference|0);
badness+=C$.abs$I(difference);
}
filterBadness[3]=badness;
}{
var paethFilteredRow=scratchRows[4];
var badness=0;
for (var i=bytesPerPixel; i < bytesPerRow + bytesPerPixel; i++) {
var curr=currRow[i] & 255;
var left=currRow[i - bytesPerPixel] & 255;
var up=prevRow[i] & 255;
var upleft=prevRow[i - bytesPerPixel] & 255;
var predictor=this.paethPredictor$I$I$I(left, up, upleft);
var difference=curr - predictor;
paethFilteredRow[i]=(difference|0);
badness+=C$.abs$I(difference);
}
filterBadness[4]=badness;
}var minBadness=filterBadness[0];
var filterType=0;
for (var i=1; i < 5; i++) {
if (filterBadness[i] < minBadness) {
minBadness=filterBadness[i];
filterType=i;
}}
if (filterType == 0) {
System.arraycopy$O$I$O$I$I(currRow, bytesPerPixel, scratchRows[0], bytesPerPixel, bytesPerRow);
}return filterType;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
