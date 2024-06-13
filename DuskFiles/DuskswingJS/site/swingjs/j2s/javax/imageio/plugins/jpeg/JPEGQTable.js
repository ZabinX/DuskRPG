(function(){var P$=Clazz.newPackage("javax.imageio.plugins.jpeg"),I$=[[0,'java.util.Arrays','StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JPEGQTable");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['qTable','int[]']]
,['O',['k1','int[]','+k1div2','+k2','+k2div2','K1Luminance','javax.imageio.plugins.jpeg.JPEGQTable','+K1Div2Luminance','+K2Chrominance','+K2Div2Chrominance']]]

Clazz.newMeth(C$, 'c$$IA$Z',  function (table, copy) {
;C$.$init$.apply(this);
this.qTable=(copy) ? $I$(1).copyOf$IA$I(table, table.length) : table;
}, 1);

Clazz.newMeth(C$, 'c$$IA',  function (table) {
;C$.$init$.apply(this);
if (table == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["table must not be null."]);
}if (table.length != 64) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["table.length != 64"]);
}this.qTable=$I$(1).copyOf$IA$I(table, table.length);
}, 1);

Clazz.newMeth(C$, 'getTable$',  function () {
return $I$(1).copyOf$IA$I(this.qTable, this.qTable.length);
});

Clazz.newMeth(C$, 'getScaledInstance$F$Z',  function (scaleFactor, forceBaseline) {
var max=(forceBaseline) ? 255 : 32767;
var scaledTable=Clazz.array(Integer.TYPE, [this.qTable.length]);
for (var i=0; i < this.qTable.length; i++) {
var sv=(((this.qTable[i] * scaleFactor) + 0.5)|0);
if (sv < 1) {
sv=1;
}if (sv > max) {
sv=max;
}scaledTable[i]=sv;
}
return Clazz.new_(C$.c$$IA,[scaledTable]);
});

Clazz.newMeth(C$, 'toString',  function () {
var ls=System.getProperty$S$S("line.separator", "\n");
var sb=Clazz.new_($I$(2,1).c$$S,["JPEGQTable:" + ls]);
for (var i=0; i < this.qTable.length; i++) {
if (i % 8 == 0) {
sb.append$C("\t");
}sb.append$I(this.qTable[i]);
sb.append$O(((i % 8) == 7) ? ls : Character.valueOf$C(' '));
}
return sb.toString();
});

C$.$static$=function(){C$.$static$=0;
C$.k1=Clazz.array(Integer.TYPE, -1, [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99]);
C$.k1div2=Clazz.array(Integer.TYPE, -1, [8, 6, 5, 8, 12, 20, 26, 31, 6, 6, 7, 10, 13, 29, 30, 28, 7, 7, 8, 12, 20, 29, 35, 28, 7, 9, 11, 15, 26, 44, 40, 31, 9, 11, 19, 28, 34, 55, 52, 39, 12, 18, 28, 32, 41, 52, 57, 46, 25, 32, 39, 44, 52, 61, 60, 51, 36, 46, 48, 49, 56, 50, 52, 50]);
C$.k2=Clazz.array(Integer.TYPE, -1, [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99]);
C$.k2div2=Clazz.array(Integer.TYPE, -1, [9, 9, 12, 24, 50, 50, 50, 50, 9, 11, 13, 33, 50, 50, 50, 50, 12, 13, 28, 50, 50, 50, 50, 50, 24, 33, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]);
C$.K1Luminance=Clazz.new_(C$.c$$IA$Z,[C$.k1, false]);
C$.K1Div2Luminance=Clazz.new_(C$.c$$IA$Z,[C$.k1div2, false]);
C$.K2Chrominance=Clazz.new_(C$.c$$IA$Z,[C$.k2, false]);
C$.K2Div2Chrominance=Clazz.new_(C$.c$$IA$Z,[C$.k2div2, false]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
