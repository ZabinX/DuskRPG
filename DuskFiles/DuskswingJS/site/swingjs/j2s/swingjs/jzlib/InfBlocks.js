(function(){var P$=Clazz.newPackage("swingjs.jzlib"),I$=[[0,'swingjs.jzlib.InfTree','swingjs.jzlib.InfCodes']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InfBlocks");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bb=Clazz.array(Integer.TYPE, [1]);
this.tb=Clazz.array(Integer.TYPE, [1]);
this.bl=Clazz.array(Integer.TYPE, [1]);
this.bd=Clazz.array(Integer.TYPE, [1]);
this.tli=Clazz.array(Integer.TYPE, [1]);
this.tdi=Clazz.array(Integer.TYPE, [1]);
this.inftree=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['check'],'I',['mode','left','table','index','last','bitk','bitb','end','read','write'],'O',['+blens','+bb','+tb','+bl','+bd','tl','int[][]','+td','tli','int[]','+tdi','codes','swingjs.jzlib.InfCodes','hufts','int[]','window','byte[]','inftree','swingjs.jzlib.InfTree','z','swingjs.jzlib.ZStream']]
,['O',['inflate_mask','int[]','+border']]]

Clazz.newMeth(C$, 'c$$swingjs_jzlib_ZStream$I',  function (z, w) {
;C$.$init$.apply(this);
this.z=z;
this.codes=Clazz.new_($I$(2,1).c$$swingjs_jzlib_ZStream$swingjs_jzlib_InfBlocks,[this.z, this]);
this.hufts=Clazz.array(Integer.TYPE, [4320]);
this.window=Clazz.array(Byte.TYPE, [w]);
this.end=w;
this.check=(z.istate.wrap == 0) ? false : true;
this.mode=0;
this.tl=Clazz.array(Integer.TYPE, [1, null]);
this.td=Clazz.array(Integer.TYPE, [1, null]);
this.reset$();
}, 1);

Clazz.newMeth(C$, 'reset$',  function () {
if (this.mode == 6) {
this.codes.free$swingjs_jzlib_ZStream(this.z);
}this.mode=0;
this.bitk=0;
this.bitb=0;
this.read=this.write=0;
if (this.check) {
this.z.checksum.reset$();
}});

Clazz.newMeth(C$, 'proc$I',  function (r) {
var t;
var b;
var k;
var p;
var n;
var q;
var m;
{
p=this.z.in_index;
n=this.z.avail_in;
b=this.bitb;
k=this.bitk;
}{
q=this.write;
m=(q < this.read ? this.read - q - 1  : this.end - q);
}while (true){
switch (this.mode) {
case 0:
while (k < (3)){
if (n != 0) {
r=0;
} else {
this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
return this.inflate_flush$I(r);
}--n;
b|=(this.z.$in[p++] & 255) << k;
k+=8;
}
t=(b & 7);
this.last=t & 1;
switch (t >>> 1) {
case 0:
{
b>>>=(3);
k-=(3);
}t=k & 7;
{
b>>>=(t);
k-=(t);
}this.mode=1;
break;
case 1:
$I$(1).inflate_trees_fixed$IA$IA$IAA$IAA$swingjs_jzlib_ZStream(this.bl, this.bd, this.tl, this.td, this.z);
this.codes.init$I$I$IA$I$IA$I(this.bl[0], this.bd[0], this.tl[0], 0, this.td[0], 0);
{
b>>>=(3);
k-=(3);
}this.mode=6;
break;
case 2:
{
b>>>=(3);
k-=(3);
}this.mode=3;
break;
case 3:
{
b>>>=(3);
k-=(3);
}this.mode=9;
this.z.msg="invalid block type";
r=-3;
this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
return this.inflate_flush$I(r);
}
break;
case 1:
while (k < (32)){
if (n != 0) {
r=0;
} else {
this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
return this.inflate_flush$I(r);
}--n;
b|=(this.z.$in[p++] & 255) << k;
k+=8;
}
if ((((~b) >>> 16) & 65535) != (b & 65535)) {
this.mode=9;
this.z.msg="invalid stored block lengths";
r=-3;
this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
return this.inflate_flush$I(r);
}this.left=(b & 65535);
b=k=0;
this.mode=this.left != 0 ? 2 : (this.last != 0 ? 7 : 0);
break;
case 2:
if (n == 0) {
this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
return this.inflate_flush$I(r);
}if (m == 0) {
if (q == this.end && this.read != 0 ) {
q=0;
m=(q < this.read ? this.read - q - 1  : this.end - q);
}if (m == 0) {
this.write=q;
r=this.inflate_flush$I(r);
q=this.write;
m=(q < this.read ? this.read - q - 1  : this.end - q);
if (q == this.end && this.read != 0 ) {
q=0;
m=(q < this.read ? this.read - q - 1  : this.end - q);
}if (m == 0) {
this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
return this.inflate_flush$I(r);
}}}r=0;
t=this.left;
if (t > n) t=n;
if (t > m) t=m;
System.arraycopy$O$I$O$I$I(this.z.$in, p, this.window, q, t);
p+=t;
n-=t;
q+=t;
m-=t;
if ((this.left-=t) != 0) break;
this.mode=this.last != 0 ? 7 : 0;
break;
case 3:
while (k < (14)){
if (n != 0) {
r=0;
} else {
this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
return this.inflate_flush$I(r);
}--n;
b|=(this.z.$in[p++] & 255) << k;
k+=8;
}
this.table=t=(b & 16383);
if ((t & 31) > 29 || ((t >> 5) & 31) > 29 ) {
this.mode=9;
this.z.msg="too many length or distance symbols";
r=-3;
this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
return this.inflate_flush$I(r);
}t=258 + (t & 31) + ((t >> 5) & 31) ;
if (this.blens == null  || this.blens.length < t ) {
this.blens=Clazz.array(Integer.TYPE, [t]);
} else {
for (var i=0; i < t; i++) {
this.blens[i]=0;
}
}{
b>>>=(14);
k-=(14);
}this.index=0;
this.mode=4;
case 4:
while (this.index < 4 + (this.table >>> 10)){
while (k < (3)){
if (n != 0) {
r=0;
} else {
this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
return this.inflate_flush$I(r);
}--n;
b|=(this.z.$in[p++] & 255) << k;
k+=8;
}
this.blens[C$.border[this.index++]]=b & 7;
{
b>>>=(3);
k-=(3);
}}
while (this.index < 19){
this.blens[C$.border[this.index++]]=0;
}
this.bb[0]=7;
t=this.inftree.inflate_trees_bits$IA$IA$IA$IA$swingjs_jzlib_ZStream(this.blens, this.bb, this.tb, this.hufts, this.z);
if (t != 0) {
r=t;
if (r == -3) {
this.blens=null;
this.mode=9;
}this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
return this.inflate_flush$I(r);
}this.index=0;
this.mode=5;
case 5:
while (true){
t=this.table;
if (!(this.index < 258 + (t & 31) + ((t >> 5) & 31) )) {
break;
}var i;
var j;
var c;
t=this.bb[0];
while (k < (t)){
if (n != 0) {
r=0;
} else {
this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
return this.inflate_flush$I(r);
}--n;
b|=(this.z.$in[p++] & 255) << k;
k+=8;
}
t=this.hufts[(this.tb[0] + (b & C$.inflate_mask[t])) * 3 + 1];
c=this.hufts[(this.tb[0] + (b & C$.inflate_mask[t])) * 3 + 2];
if (c < 16) {
b>>>=(t);
k-=(t);
this.blens[this.index++]=c;
} else {
i=c == 18 ? 7 : c - 14;
j=c == 18 ? 11 : 3;
while (k < (t + i)){
if (n != 0) {
r=0;
} else {
this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
return this.inflate_flush$I(r);
}--n;
b|=(this.z.$in[p++] & 255) << k;
k+=8;
}
b>>>=(t);
k-=(t);
j+=(b & C$.inflate_mask[i]);
b>>>=(i);
k-=(i);
i=this.index;
t=this.table;
if (i + j > 258 + (t & 31) + ((t >> 5) & 31)  || (c == 16 && i < 1 ) ) {
this.blens=null;
this.mode=9;
this.z.msg="invalid bit length repeat";
r=-3;
this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
return this.inflate_flush$I(r);
}c=c == 16 ? this.blens[i - 1] : 0;
do {
this.blens[i++]=c;
} while (--j != 0);
this.index=i;
}}
this.tb[0]=-1;
{
this.bl[0]=9;
this.bd[0]=6;
t=this.table;
t=this.inftree.inflate_trees_dynamic$I$I$IA$IA$IA$IA$IA$IA$swingjs_jzlib_ZStream(257 + (t & 31), 1 + ((t >> 5) & 31), this.blens, this.bl, this.bd, this.tli, this.tdi, this.hufts, this.z);
if (t != 0) {
if (t == -3) {
this.blens=null;
this.mode=9;
}r=t;
this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
return this.inflate_flush$I(r);
}this.codes.init$I$I$IA$I$IA$I(this.bl[0], this.bd[0], this.hufts, this.tli[0], this.hufts, this.tdi[0]);
}this.mode=6;
case 6:
this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
if ((r=this.codes.proc$I(r)) != 1) {
return this.inflate_flush$I(r);
}r=0;
this.codes.free$swingjs_jzlib_ZStream(this.z);
p=this.z.in_index;
n=this.z.avail_in;
b=this.bitb;
k=this.bitk;
q=this.write;
m=(q < this.read ? this.read - q - 1  : this.end - q);
if (this.last == 0) {
this.mode=0;
break;
}this.mode=7;
case 7:
this.write=q;
r=this.inflate_flush$I(r);
q=this.write;
m=(q < this.read ? this.read - q - 1  : this.end - q);
if (this.read != this.write) {
this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
return this.inflate_flush$I(r);
}this.mode=8;
case 8:
r=1;
this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
return this.inflate_flush$I(r);
case 9:
r=-3;
this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
return this.inflate_flush$I(r);
default:
r=-2;
this.bitb=b;
this.bitk=k;
this.z.avail_in=n;
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.write=q;
return this.inflate_flush$I(r);
}
}
});

Clazz.newMeth(C$, 'free$',  function () {
this.reset$();
this.window=null;
this.hufts=null;
});

Clazz.newMeth(C$, 'set_dictionary$BA$I$I',  function (d, start, n) {
System.arraycopy$O$I$O$I$I(d, start, this.window, 0, n);
this.read=this.write=n;
});

Clazz.newMeth(C$, 'sync_point$',  function () {
return this.mode == 1 ? 1 : 0;
});

Clazz.newMeth(C$, 'inflate_flush$I',  function (r) {
var n;
var p;
var q;
p=this.z.next_out_index;
q=this.read;
n=((q <= this.write ? this.write : this.end) - q);
if (n > this.z.avail_out) n=this.z.avail_out;
if (n != 0 && r == -5 ) r=0;
this.z.avail_out-=n;
(this.z.total_out=Long.$add(this.z.total_out,(n)));
if (this.check && n > 0 ) {
this.z.checksum.update$BA$I$I(this.window, q, n);
}System.arraycopy$O$I$O$I$I(this.window, q, this.z.next_out, p, n);
p+=n;
q+=n;
if (q == this.end) {
q=0;
if (this.write == this.end) this.write=0;
n=this.write - q;
if (n > this.z.avail_out) n=this.z.avail_out;
if (n != 0 && r == -5 ) r=0;
this.z.avail_out-=n;
(this.z.total_out=Long.$add(this.z.total_out,(n)));
if (this.check && n > 0 ) {
this.z.checksum.update$BA$I$I(this.window, q, n);
}System.arraycopy$O$I$O$I$I(this.window, q, this.z.next_out, p, n);
p+=n;
q+=n;
}this.z.next_out_index=p;
this.read=q;
return r;
});

C$.$static$=function(){C$.$static$=0;
C$.inflate_mask=Clazz.array(Integer.TYPE, -1, [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535]);
C$.border=Clazz.array(Integer.TYPE, -1, [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
