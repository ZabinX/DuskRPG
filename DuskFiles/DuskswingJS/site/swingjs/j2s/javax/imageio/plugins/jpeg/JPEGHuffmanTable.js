(function(){var P$=Clazz.newPackage("javax.imageio.plugins.jpeg"),p$1={},I$=[[0,'java.util.Arrays','StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JPEGHuffmanTable");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['lengths','short[]','+values']]
,['O',['StdDCLuminanceLengths','short[]','+StdDCLuminanceValues','+StdDCChrominanceLengths','+StdDCChrominanceValues','+StdACLuminanceLengths','+StdACLuminanceValues','+StdACChrominanceLengths','+StdACChrominanceValues','StdDCLuminance','javax.imageio.plugins.jpeg.JPEGHuffmanTable','+StdDCChrominance','+StdACLuminance','+StdACChrominance']]]

Clazz.newMeth(C$, 'c$$HA$HA',  function (lengths, values) {
;C$.$init$.apply(this);
if (lengths == null  || values == null   || lengths.length == 0  || values.length == 0  || lengths.length > 16  || values.length > 256 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal lengths or values"]);
}for (var i=0; i < lengths.length; i++) {
if (lengths[i] < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["lengths[" + i + "] < 0" ]);
}}
for (var i=0; i < values.length; i++) {
if (values[i] < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["values[" + i + "] < 0" ]);
}}
this.lengths=$I$(1).copyOf$HA$I(lengths, lengths.length);
this.values=$I$(1).copyOf$HA$I(values, values.length);
p$1.validate.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'validate',  function () {
var sumOfLengths=0;
for (var i=0; i < this.lengths.length; i++) {
sumOfLengths+=this.lengths[i];
}
if (sumOfLengths != this.values.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["lengths do not correspond to length of value table"]);
}}, p$1);

Clazz.newMeth(C$, 'c$$HA$HA$Z',  function (lengths, values, copy) {
;C$.$init$.apply(this);
if (copy) {
this.lengths=$I$(1).copyOf$HA$I(lengths, lengths.length);
this.values=$I$(1).copyOf$HA$I(values, values.length);
} else {
this.lengths=lengths;
this.values=values;
}}, 1);

Clazz.newMeth(C$, 'getLengths$',  function () {
return $I$(1).copyOf$HA$I(this.lengths, this.lengths.length);
});

Clazz.newMeth(C$, 'getValues$',  function () {
return $I$(1).copyOf$HA$I(this.values, this.values.length);
});

Clazz.newMeth(C$, 'toString',  function () {
var ls=System.getProperty$S$S("line.separator", "\n");
var sb=Clazz.new_($I$(2,1).c$$S,["JPEGHuffmanTable"]);
sb.append$S(ls).append$S("lengths:");
for (var i=0; i < this.lengths.length; i++) {
sb.append$S(" ").append$I(this.lengths[i]);
}
sb.append$S(ls).append$S("values:");
for (var i=0; i < this.values.length; i++) {
sb.append$S(" ").append$I(this.values[i]);
}
return sb.toString();
});

C$.$static$=function(){C$.$static$=0;
C$.StdDCLuminanceLengths=Clazz.array(Short.TYPE, -1, [0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
C$.StdDCLuminanceValues=Clazz.array(Short.TYPE, -1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
C$.StdDCChrominanceLengths=Clazz.array(Short.TYPE, -1, [0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]);
C$.StdDCChrominanceValues=Clazz.array(Short.TYPE, -1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
C$.StdACLuminanceLengths=Clazz.array(Short.TYPE, -1, [0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125]);
C$.StdACLuminanceValues=Clazz.array(Short.TYPE, -1, [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250]);
C$.StdACChrominanceLengths=Clazz.array(Short.TYPE, -1, [0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119]);
C$.StdACChrominanceValues=Clazz.array(Short.TYPE, -1, [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250]);
C$.StdDCLuminance=Clazz.new_(C$.c$$HA$HA$Z,[C$.StdDCLuminanceLengths, C$.StdDCLuminanceValues, false]);
C$.StdDCChrominance=Clazz.new_(C$.c$$HA$HA$Z,[C$.StdDCChrominanceLengths, C$.StdDCChrominanceValues, false]);
C$.StdACLuminance=Clazz.new_(C$.c$$HA$HA$Z,[C$.StdACLuminanceLengths, C$.StdACLuminanceValues, false]);
C$.StdACChrominance=Clazz.new_(C$.c$$HA$HA$Z,[C$.StdACChrominanceLengths, C$.StdACChrominanceValues, false]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
