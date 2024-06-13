(function(){var P$=Clazz.newPackage("com.jcraft.jzlib"),I$=[];
var C$=Clazz.newClass(P$, "InfCodes");
C$.inflate_mask=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.inflate_mask=Clazz.array(Integer.TYPE, -1, [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mode=0;
this.len=0;
this.tree=null;
this.tree_index=0;
this.need=0;
this.lit=0;
this.get=0;
this.dist=0;
this.lbits=0;
this.dbits=0;
this.ltree=null;
this.ltree_index=0;
this.dtree=null;
this.dtree_index=0;
this.z=null;
this.s=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.tree_index=0;
}, 1);

Clazz.newMeth(C$, 'c$$com_jcraft_jzlib_ZStream$com_jcraft_jzlib_InfBlocks', function (z, s) {
C$.$init$.apply(this);
this.z=z;
this.s=s;
}, 1);

Clazz.newMeth(C$, 'init$I$I$IA$I$IA$I', function (bl, bd, tl, tl_index, td, td_index) {
this.mode=0;
this.lbits=($b$[0] = (bl|0), $b$[0]);
this.dbits=($b$[0] = (bd|0), $b$[0]);
this.ltree=tl;
this.ltree_index=tl_index;
this.dtree=td;
this.dtree_index=td_index;
this.tree=null;
});

Clazz.newMeth(C$, 'proc$I', function (r) {
var j;
var tindex;
var e;
var b=0;
var k=0;
var p=0;
var n;
var q;
var m;
var f;
p=this.z.next_in_index;
n=this.z.avail_in;
b=this.s.bitb;
k=this.s.bitk;
q=this.s.write;
m=q < this.s.read ? this.s.read - q - 1  : this.s.end - q;
while (true){
switch (this.mode) {
case 0:
if (m >= 258 && n >= 10 ) {
this.s.bitb=b;
this.s.bitk=k;
this.z.avail_in=n;
this.z.total_in+=p - this.z.next_in_index;
this.z.next_in_index=p;
this.s.write=q;
r=this.inflate_fast$I$I$IA$I$IA$I$com_jcraft_jzlib_InfBlocks$com_jcraft_jzlib_ZStream(this.lbits, this.dbits, this.ltree, this.ltree_index, this.dtree, this.dtree_index, this.s, this.z);
p=this.z.next_in_index;
n=this.z.avail_in;
b=this.s.bitb;
k=this.s.bitk;
q=this.s.write;
m=q < this.s.read ? this.s.read - q - 1  : this.s.end - q;
if (r != 0) {
this.mode=r == 1 ? 7 : 9;
break;
}}this.need=this.lbits;
this.tree=this.ltree;
this.tree_index=this.ltree_index;
this.mode=1;
case 1:
j=this.need;
while (k < (j)){
if (n != 0) r=0;
 else {
this.s.bitb=b;
this.s.bitk=k;
this.z.avail_in=n;
this.z.total_in+=p - this.z.next_in_index;
this.z.next_in_index=p;
this.s.write=q;
return this.s.inflate_flush$I(r);
}n--;
b|=(this.z.next_in[p++] & 255) << k;
k+=8;
}
tindex=(this.tree_index + (b & C$.inflate_mask[j])) * 3;
b>>>=(this.tree[tindex + 1]);
k-=(this.tree[tindex + 1]);
e=this.tree[tindex];
if (e == 0) {
this.lit=this.tree[tindex + 2];
this.mode=6;
break;
}if ((e & 16) != 0) {
this.get=e & 15;
this.len=this.tree[tindex + 2];
this.mode=2;
break;
}if ((e & 64) == 0) {
this.need=e;
this.tree_index=(tindex/3|0) + this.tree[tindex + 2];
break;
}if ((e & 32) != 0) {
this.mode=7;
break;
}this.mode=9;
this.z.msg="invalid literal/length code";
r=-3;
this.s.bitb=b;
this.s.bitk=k;
this.z.avail_in=n;
this.z.total_in+=p - this.z.next_in_index;
this.z.next_in_index=p;
this.s.write=q;
return this.s.inflate_flush$I(r);
case 2:
j=this.get;
while (k < (j)){
if (n != 0) r=0;
 else {
this.s.bitb=b;
this.s.bitk=k;
this.z.avail_in=n;
this.z.total_in+=p - this.z.next_in_index;
this.z.next_in_index=p;
this.s.write=q;
return this.s.inflate_flush$I(r);
}n--;
b|=(this.z.next_in[p++] & 255) << k;
k+=8;
}
this.len+=(b & C$.inflate_mask[j]);
b>>=j;
k-=j;
this.need=this.dbits;
this.tree=this.dtree;
this.tree_index=this.dtree_index;
this.mode=3;
case 3:
j=this.need;
while (k < (j)){
if (n != 0) r=0;
 else {
this.s.bitb=b;
this.s.bitk=k;
this.z.avail_in=n;
this.z.total_in+=p - this.z.next_in_index;
this.z.next_in_index=p;
this.s.write=q;
return this.s.inflate_flush$I(r);
}n--;
b|=(this.z.next_in[p++] & 255) << k;
k+=8;
}
tindex=(this.tree_index + (b & C$.inflate_mask[j])) * 3;
b>>=this.tree[tindex + 1];
k-=this.tree[tindex + 1];
e=(this.tree[tindex]);
if ((e & 16) != 0) {
this.get=e & 15;
this.dist=this.tree[tindex + 2];
this.mode=4;
break;
}if ((e & 64) == 0) {
this.need=e;
this.tree_index=(tindex/3|0) + this.tree[tindex + 2];
break;
}this.mode=9;
this.z.msg="invalid distance code";
r=-3;
this.s.bitb=b;
this.s.bitk=k;
this.z.avail_in=n;
this.z.total_in+=p - this.z.next_in_index;
this.z.next_in_index=p;
this.s.write=q;
return this.s.inflate_flush$I(r);
case 4:
j=this.get;
while (k < (j)){
if (n != 0) r=0;
 else {
this.s.bitb=b;
this.s.bitk=k;
this.z.avail_in=n;
this.z.total_in+=p - this.z.next_in_index;
this.z.next_in_index=p;
this.s.write=q;
return this.s.inflate_flush$I(r);
}n--;
b|=(this.z.next_in[p++] & 255) << k;
k+=8;
}
this.dist+=(b & C$.inflate_mask[j]);
b>>=j;
k-=j;
this.mode=5;
case 5:
f=q - this.dist;
while (f < 0){
f+=this.s.end;
}
while (this.len != 0){
if (m == 0) {
if (q == this.s.end && this.s.read != 0 ) {
q=0;
m=q < this.s.read ? this.s.read - q - 1  : this.s.end - q;
}if (m == 0) {
this.s.write=q;
r=this.s.inflate_flush$I(r);
q=this.s.write;
m=q < this.s.read ? this.s.read - q - 1  : this.s.end - q;
if (q == this.s.end && this.s.read != 0 ) {
q=0;
m=q < this.s.read ? this.s.read - q - 1  : this.s.end - q;
}if (m == 0) {
this.s.bitb=b;
this.s.bitk=k;
this.z.avail_in=n;
this.z.total_in+=p - this.z.next_in_index;
this.z.next_in_index=p;
this.s.write=q;
return this.s.inflate_flush$I(r);
}}}this.s.window[q++]=(this.s.window[f++]|0);
m--;
if (f == this.s.end) f=0;
this.len--;
}
this.mode=0;
break;
case 6:
if (m == 0) {
if (q == this.s.end && this.s.read != 0 ) {
q=0;
m=q < this.s.read ? this.s.read - q - 1  : this.s.end - q;
}if (m == 0) {
this.s.write=q;
r=this.s.inflate_flush$I(r);
q=this.s.write;
m=q < this.s.read ? this.s.read - q - 1  : this.s.end - q;
if (q == this.s.end && this.s.read != 0 ) {
q=0;
m=q < this.s.read ? this.s.read - q - 1  : this.s.end - q;
}if (m == 0) {
this.s.bitb=b;
this.s.bitk=k;
this.z.avail_in=n;
this.z.total_in+=p - this.z.next_in_index;
this.z.next_in_index=p;
this.s.write=q;
return this.s.inflate_flush$I(r);
}}}r=0;
this.s.window[q++]=((this.lit|0)|0);
m--;
this.mode=0;
break;
case 7:
if (k > 7) {
k-=8;
n++;
p--;
}this.s.write=q;
r=this.s.inflate_flush$I(r);
q=this.s.write;
m=q < this.s.read ? this.s.read - q - 1  : this.s.end - q;
if (this.s.read != this.s.write) {
this.s.bitb=b;
this.s.bitk=k;
this.z.avail_in=n;
this.z.total_in+=p - this.z.next_in_index;
this.z.next_in_index=p;
this.s.write=q;
return this.s.inflate_flush$I(r);
}this.mode=8;
case 8:
r=1;
this.s.bitb=b;
this.s.bitk=k;
this.z.avail_in=n;
this.z.total_in+=p - this.z.next_in_index;
this.z.next_in_index=p;
this.s.write=q;
return this.s.inflate_flush$I(r);
case 9:
r=-3;
this.s.bitb=b;
this.s.bitk=k;
this.z.avail_in=n;
this.z.total_in+=p - this.z.next_in_index;
this.z.next_in_index=p;
this.s.write=q;
return this.s.inflate_flush$I(r);
default:
r=-2;
this.s.bitb=b;
this.s.bitk=k;
this.z.avail_in=n;
this.z.total_in+=p - this.z.next_in_index;
this.z.next_in_index=p;
this.s.write=q;
return this.s.inflate_flush$I(r);
}
}
});

Clazz.newMeth(C$, 'free$com_jcraft_jzlib_ZStream', function (z) {
});

Clazz.newMeth(C$, 'inflate_fast$I$I$IA$I$IA$I$com_jcraft_jzlib_InfBlocks$com_jcraft_jzlib_ZStream', function (bl, bd, tl, tl_index, td, td_index, s, z) {
var t;
var tp;
var tp_index;
var e;
var b;
var k;
var p;
var n;
var q;
var m;
var ml;
var md;
var c;
var d;
var r;
var tp_index_t_3;
p=z.next_in_index;
n=z.avail_in;
b=s.bitb;
k=s.bitk;
q=s.write;
m=q < s.read ? s.read - q - 1  : s.end - q;
ml=C$.inflate_mask[bl];
md=C$.inflate_mask[bd];
do {
while (k < (20)){
n--;
b|=(z.next_in[p++] & 255) << k;
k+=8;
}
t=b & ml;
tp=tl;
tp_index=tl_index;
tp_index_t_3=(tp_index + t) * 3;
if ((e=tp[tp_index_t_3]) == 0) {
b>>=(tp[tp_index_t_3 + 1]);
k-=(tp[tp_index_t_3 + 1]);
s.window[q++]=((tp[tp_index_t_3 + 2]|0)|0);
m--;
continue;
}do {
b>>=(tp[tp_index_t_3 + 1]);
k-=(tp[tp_index_t_3 + 1]);
if ((e & 16) != 0) {
e&=15;
c=tp[tp_index_t_3 + 2] + (b & C$.inflate_mask[e]);
b>>=e;
k-=e;
while (k < (15)){
n--;
b|=(z.next_in[p++] & 255) << k;
k+=8;
}
t=b & md;
tp=td;
tp_index=td_index;
tp_index_t_3=(tp_index + t) * 3;
e=tp[tp_index_t_3];
do {
b>>=(tp[tp_index_t_3 + 1]);
k-=(tp[tp_index_t_3 + 1]);
if ((e & 16) != 0) {
e&=15;
while (k < (e)){
n--;
b|=(z.next_in[p++] & 255) << k;
k+=8;
}
d=tp[tp_index_t_3 + 2] + (b & C$.inflate_mask[e]);
b>>=(e);
k-=(e);
m-=c;
if (q >= d) {
r=q - d;
if (q - r > 0 && 2 > (q - r) ) {
s.window[q++]=(s.window[r++]|0);
s.window[q++]=(s.window[r++]|0);
c-=2;
} else {
System.arraycopy$O$I$O$I$I(s.window, r, s.window, q, 2);
q+=2;
r+=2;
c-=2;
}} else {
r=q - d;
do {
r+=s.end;
} while (r < 0);
e=s.end - r;
if (c > e) {
c-=e;
if (q - r > 0 && e > (q - r) ) {
do {
s.window[q++]=(s.window[r++]|0);
} while (--e != 0);
} else {
System.arraycopy$O$I$O$I$I(s.window, r, s.window, q, e);
q+=e;
r+=e;
e=0;
}r=0;
}}if (q - r > 0 && c > (q - r) ) {
do {
s.window[q++]=(s.window[r++]|0);
} while (--c != 0);
} else {
System.arraycopy$O$I$O$I$I(s.window, r, s.window, q, c);
q+=c;
r+=c;
c=0;
}break;
} else if ((e & 64) == 0) {
t+=tp[tp_index_t_3 + 2];
t+=(b & C$.inflate_mask[e]);
tp_index_t_3=(tp_index + t) * 3;
e=tp[tp_index_t_3];
} else {
z.msg="invalid distance code";
c=z.avail_in - n;
c=(k >> 3) < c ? k >> 3 : c;
n+=c;
p-=c;
k-=c << 3;
s.bitb=b;
s.bitk=k;
z.avail_in=n;
z.total_in+=p - z.next_in_index;
z.next_in_index=p;
s.write=q;
return -3;
}} while (true);
break;
}if ((e & 64) == 0) {
t+=tp[tp_index_t_3 + 2];
t+=(b & C$.inflate_mask[e]);
tp_index_t_3=(tp_index + t) * 3;
if ((e=tp[tp_index_t_3]) == 0) {
b>>=(tp[tp_index_t_3 + 1]);
k-=(tp[tp_index_t_3 + 1]);
s.window[q++]=((tp[tp_index_t_3 + 2]|0)|0);
m--;
break;
}} else if ((e & 32) != 0) {
c=z.avail_in - n;
c=(k >> 3) < c ? k >> 3 : c;
n+=c;
p-=c;
k-=c << 3;
s.bitb=b;
s.bitk=k;
z.avail_in=n;
z.total_in+=p - z.next_in_index;
z.next_in_index=p;
s.write=q;
return 1;
} else {
z.msg="invalid literal/length code";
c=z.avail_in - n;
c=(k >> 3) < c ? k >> 3 : c;
n+=c;
p-=c;
k-=c << 3;
s.bitb=b;
s.bitk=k;
z.avail_in=n;
z.total_in+=p - z.next_in_index;
z.next_in_index=p;
s.write=q;
return -3;
}} while (true);
} while (m >= 258 && n >= 10 );
c=z.avail_in - n;
c=(k >> 3) < c ? k >> 3 : c;
n+=c;
p-=c;
k-=c << 3;
s.bitb=b;
s.bitk=k;
z.avail_in=n;
z.total_in+=p - z.next_in_index;
z.next_in_index=p;
s.write=q;
return 0;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.3.00');//Created 2023-11-12 14:15:54 Java2ScriptVisitor version 3.2.3.00 net.sf.j2s.core.jar version 3.2.3.00
