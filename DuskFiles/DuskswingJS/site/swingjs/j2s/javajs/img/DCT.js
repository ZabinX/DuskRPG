(function(){var P$=Clazz.newPackage("javajs.img"),p$1={},p$2={},p$3={},I$=[[0,'javajs.img.JpegObj','javajs.img.DCT','javajs.img.Huffman','javajs.util.AU']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DCT");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.quantum=$I$(4).newInt2$I(2);
this.divisors=$I$(4).newDouble2$I(2);
this.quantum_luminance=Clazz.array(Integer.TYPE, [64]);
this.DivisorsLuminance=Clazz.array(Double.TYPE, [64]);
this.quantum_chrominance=Clazz.array(Integer.TYPE, [64]);
this.DivisorsChrominance=Clazz.array(Double.TYPE, [64]);
},1);

C$.$fields$=[['O',['quantum','int[][]','divisors','double[][]','quantum_luminance','int[]','DivisorsLuminance','double[]','quantum_chrominance','int[]','DivisorsChrominance','double[]']]
,['O',['AANscaleFactor','double[]']]]

Clazz.newMeth(C$, 'c$$I',  function (quality) {
;C$.$init$.apply(this);
p$2.initMatrix$I.apply(this, [quality]);
}, 1);

Clazz.newMeth(C$, 'initMatrix$I',  function (quality) {
quality=(quality < 1 ? 1 : quality > 100 ? 100 : quality);
quality=(quality < 50 ? (5000/quality|0) : 200 - quality * 2);
this.quantum_luminance[0]=16;
this.quantum_luminance[1]=11;
this.quantum_luminance[2]=10;
this.quantum_luminance[3]=16;
this.quantum_luminance[4]=24;
this.quantum_luminance[5]=40;
this.quantum_luminance[6]=51;
this.quantum_luminance[7]=61;
this.quantum_luminance[8]=12;
this.quantum_luminance[9]=12;
this.quantum_luminance[10]=14;
this.quantum_luminance[11]=19;
this.quantum_luminance[12]=26;
this.quantum_luminance[13]=58;
this.quantum_luminance[14]=60;
this.quantum_luminance[15]=55;
this.quantum_luminance[16]=14;
this.quantum_luminance[17]=13;
this.quantum_luminance[18]=16;
this.quantum_luminance[19]=24;
this.quantum_luminance[20]=40;
this.quantum_luminance[21]=57;
this.quantum_luminance[22]=69;
this.quantum_luminance[23]=56;
this.quantum_luminance[24]=14;
this.quantum_luminance[25]=17;
this.quantum_luminance[26]=22;
this.quantum_luminance[27]=29;
this.quantum_luminance[28]=51;
this.quantum_luminance[29]=87;
this.quantum_luminance[30]=80;
this.quantum_luminance[31]=62;
this.quantum_luminance[32]=18;
this.quantum_luminance[33]=22;
this.quantum_luminance[34]=37;
this.quantum_luminance[35]=56;
this.quantum_luminance[36]=68;
this.quantum_luminance[37]=109;
this.quantum_luminance[38]=103;
this.quantum_luminance[39]=77;
this.quantum_luminance[40]=24;
this.quantum_luminance[41]=35;
this.quantum_luminance[42]=55;
this.quantum_luminance[43]=64;
this.quantum_luminance[44]=81;
this.quantum_luminance[45]=104;
this.quantum_luminance[46]=113;
this.quantum_luminance[47]=92;
this.quantum_luminance[48]=49;
this.quantum_luminance[49]=64;
this.quantum_luminance[50]=78;
this.quantum_luminance[51]=87;
this.quantum_luminance[52]=103;
this.quantum_luminance[53]=121;
this.quantum_luminance[54]=120;
this.quantum_luminance[55]=101;
this.quantum_luminance[56]=72;
this.quantum_luminance[57]=92;
this.quantum_luminance[58]=95;
this.quantum_luminance[59]=98;
this.quantum_luminance[60]=112;
this.quantum_luminance[61]=100;
this.quantum_luminance[62]=103;
this.quantum_luminance[63]=99;
C$.AANscale$DA$IA$I(this.DivisorsLuminance, this.quantum_luminance, quality);
for (var i=4; i < 64; i++) this.quantum_chrominance[i]=99;

this.quantum_chrominance[0]=17;
this.quantum_chrominance[1]=18;
this.quantum_chrominance[2]=24;
this.quantum_chrominance[3]=47;
this.quantum_chrominance[8]=18;
this.quantum_chrominance[9]=21;
this.quantum_chrominance[10]=26;
this.quantum_chrominance[11]=66;
this.quantum_chrominance[16]=24;
this.quantum_chrominance[17]=26;
this.quantum_chrominance[18]=56;
this.quantum_chrominance[24]=47;
this.quantum_chrominance[25]=66;
C$.AANscale$DA$IA$I(this.DivisorsChrominance, this.quantum_chrominance, quality);
this.quantum[0]=this.quantum_luminance;
this.quantum[1]=this.quantum_chrominance;
this.divisors[0]=this.DivisorsLuminance;
this.divisors[1]=this.DivisorsChrominance;
}, p$2);

Clazz.newMeth(C$, 'AANscale$DA$IA$I',  function (divisors, values, quality) {
for (var j=0; j < 64; j++) {
var temp=((values[j] * quality + 50)/100|0);
values[j]=(temp < 1 ? 1 : temp > 255 ? 255 : temp);
}
for (var i=0, index=0; i < 8; i++) for (var j=0; j < 8; j++, index++) divisors[index]=(0.125 / (values[index] * C$.AANscaleFactor[i] * C$.AANscaleFactor[j] ));


}, 1);

Clazz.newMeth(C$, 'forwardDCT$FAA',  function (input) {
var output=Clazz.array(Double.TYPE, [8, 8]);
var tmp0;
var tmp1;
var tmp2;
var tmp3;
var tmp4;
var tmp5;
var tmp6;
var tmp7;
var tmp10;
var tmp11;
var tmp12;
var tmp13;
var z1;
var z2;
var z3;
var z4;
var z5;
var z11;
var z13;
for (var i=0; i < 8; i++) for (var j=0; j < 8; j++) output[i][j]=(input[i][j] - 128.0);


for (var i=0; i < 8; i++) {
tmp0=output[i][0] + output[i][7];
tmp7=output[i][0] - output[i][7];
tmp1=output[i][1] + output[i][6];
tmp6=output[i][1] - output[i][6];
tmp2=output[i][2] + output[i][5];
tmp5=output[i][2] - output[i][5];
tmp3=output[i][3] + output[i][4];
tmp4=output[i][3] - output[i][4];
tmp10=tmp0 + tmp3;
tmp13=tmp0 - tmp3;
tmp11=tmp1 + tmp2;
tmp12=tmp1 - tmp2;
output[i][0]=tmp10 + tmp11;
output[i][4]=tmp10 - tmp11;
z1=(tmp12 + tmp13) * 0.707106781;
output[i][2]=tmp13 + z1;
output[i][6]=tmp13 - z1;
tmp10=tmp4 + tmp5;
tmp11=tmp5 + tmp6;
tmp12=tmp6 + tmp7;
z5=(tmp10 - tmp12) * 0.382683433;
z2=0.5411961 * tmp10 + z5;
z4=1.306562965 * tmp12 + z5;
z3=tmp11 * 0.707106781;
z11=tmp7 + z3;
z13=tmp7 - z3;
output[i][5]=z13 + z2;
output[i][3]=z13 - z2;
output[i][1]=z11 + z4;
output[i][7]=z11 - z4;
}
for (var i=0; i < 8; i++) {
tmp0=output[0][i] + output[7][i];
tmp7=output[0][i] - output[7][i];
tmp1=output[1][i] + output[6][i];
tmp6=output[1][i] - output[6][i];
tmp2=output[2][i] + output[5][i];
tmp5=output[2][i] - output[5][i];
tmp3=output[3][i] + output[4][i];
tmp4=output[3][i] - output[4][i];
tmp10=tmp0 + tmp3;
tmp13=tmp0 - tmp3;
tmp11=tmp1 + tmp2;
tmp12=tmp1 - tmp2;
output[0][i]=tmp10 + tmp11;
output[4][i]=tmp10 - tmp11;
z1=(tmp12 + tmp13) * 0.707106781;
output[2][i]=tmp13 + z1;
output[6][i]=tmp13 - z1;
tmp10=tmp4 + tmp5;
tmp11=tmp5 + tmp6;
tmp12=tmp6 + tmp7;
z5=(tmp10 - tmp12) * 0.382683433;
z2=0.5411961 * tmp10 + z5;
z4=1.306562965 * tmp12 + z5;
z3=tmp11 * 0.707106781;
z11=tmp7 + z3;
z13=tmp7 - z3;
output[5][i]=z13 + z2;
output[3][i]=z13 - z2;
output[1][i]=z11 + z4;
output[7][i]=z11 - z4;
}
return output;
}, 1);

Clazz.newMeth(C$, 'quantizeBlock$DAA$DA',  function (inputData, divisorsCode) {
var outputData=Clazz.array(Integer.TYPE, [64]);
for (var i=0, index=0; i < 8; i++) for (var j=0; j < 8; j++, index++) outputData[index]=Long.$ival((Math.round$D(inputData[i][j] * divisorsCode[index])));


return outputData;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.AANscaleFactor=Clazz.array(Double.TYPE, -1, [1.0, 1.387039845, 1.306562965, 1.175875602, 1.0, 0.785694958, 0.5411961, 0.275899379]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
