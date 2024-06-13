(function(){var P$=Clazz.newPackage("com.jcraft.jzlib");
var C$=Clazz.newClass(P$, "Tree");
C$.extra_lbits=null;
C$.extra_dbits=null;
C$.extra_blbits=null;
C$.bl_order=null;
C$._dist_code=null;
C$._length_code=null;
C$.base_length=null;
C$.base_dist=null;
C$.next_code=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.extra_lbits=Clazz.array(Integer.TYPE, -1, [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
C$.extra_dbits=Clazz.array(Integer.TYPE, -1, [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
C$.extra_blbits=Clazz.array(Integer.TYPE, -1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
C$.bl_order=Clazz.array(Byte.TYPE, -1, [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
C$._dist_code=Clazz.array(Byte.TYPE, -1, [0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29]);
C$._length_code=Clazz.array(Byte.TYPE, -1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28]);
C$.base_length=Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0]);
C$.base_dist=Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576]);
C$.next_code=Clazz.array(Short.TYPE, [16]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dyn_tree=null;
this.max_code=0;
this.stat_desc=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'd_code$I', function (dist) {
return ((dist) < 256 ? ($b$[0] = C$._dist_code[dist], $b$[0]) : ($b$[0] = C$._dist_code[256 + ((dist) >>> 7)], $b$[0]));
}, 1);

Clazz.newMeth(C$, 'gen_bitlen$com_jcraft_jzlib_Deflate', function (s) {
var tree=this.dyn_tree;
var stree=this.stat_desc.static_tree;
var extra=this.stat_desc.extra_bits;
var base=this.stat_desc.extra_base;
var max_length=this.stat_desc.max_length;
var h;
var n;
var m;
var bits;
var xbits;
var f;
var overflow=0;
for (bits=0; bits <= 15; bits++) s.bl_count[bits]=(0|0);

tree[s.heap[s.heap_max] * 2 + 1]=(0|0);
for (h=s.heap_max + 1; h < 573; h++) {
n=s.heap[h];
bits=tree[tree[n * 2 + 1] * 2 + 1] + 1;
if (bits > max_length) {
bits=max_length;
overflow++;
}tree[n * 2 + 1]=(bits|0);
if (n > this.max_code) continue;
($s$[0]=s.bl_count[$k$=bits],s.bl_count[$k$]=(++$s$[0],$s$[0]));
xbits=0;
if (n >= base) xbits=extra[n - base];
f=tree[n * 2];
s.opt_len+=f * (bits + xbits);
if (stree != null ) s.static_len+=f * (stree[n * 2 + 1] + xbits);
}
if (overflow == 0) return;
do {
bits=max_length - 1;
while (s.bl_count[bits] == 0)bits--;

($s$[0]=s.bl_count[$k$=bits],s.bl_count[$k$]=(--$s$[0],$s$[0]));
s.bl_count[$k$=bits + 1]=(s.bl_count[$k$]+(2)|0);
($s$[0]=s.bl_count[$k$=max_length],s.bl_count[$k$]=(--$s$[0],$s$[0]));
overflow-=2;
} while (overflow > 0);
for (bits=max_length; bits != 0; bits--) {
n=s.bl_count[bits];
while (n != 0){
m=s.heap[--h];
if (m > this.max_code) continue;
if (tree[m * 2 + 1] != bits) {
s.opt_len+=(bits - tree[m * 2 + 1]) * tree[m * 2];
tree[m * 2 + 1]=(bits|0);
}n--;
}
}
});

Clazz.newMeth(C$, 'build_tree$com_jcraft_jzlib_Deflate', function (s) {
var tree=this.dyn_tree;
var stree=this.stat_desc.static_tree;
var elems=this.stat_desc.elems;
var n;
var m;
var max_code=-1;
var node;
s.heap_len=0;
s.heap_max=573;
for (n=0; n < elems; n++) {
if (tree[n * 2] != 0) {
s.heap[++s.heap_len]=max_code=n;
s.depth[n]=(0|0);
} else {
tree[n * 2 + 1]=(0|0);
}}
while (s.heap_len < 2){
node=s.heap[++s.heap_len]=(max_code < 2 ? ++max_code : 0);
tree[node * 2]=(1|0);
s.depth[node]=(0|0);
s.opt_len--;
if (stree != null ) s.static_len-=stree[node * 2 + 1];
}
this.max_code=max_code;
for (n=(s.heap_len/2|0); n >= 1; n--) s.pqdownheap$HA$I(tree, n);

node=elems;
do {
n=s.heap[1];
s.heap[1]=s.heap[s.heap_len--];
s.pqdownheap$HA$I(tree, 1);
m=s.heap[1];
s.heap[--s.heap_max]=n;
s.heap[--s.heap_max]=m;
tree[node * 2]=((tree[n * 2] + tree[m * 2])|0);
s.depth[node]=(((Math.max(s.depth[n], s.depth[m]) + 1)|0)|0);
tree[n * 2 + 1]=tree[m * 2 + 1]=(node|0);
s.heap[1]=node++;
s.pqdownheap$HA$I(tree, 1);
} while (s.heap_len >= 2);
s.heap[--s.heap_max]=s.heap[1];
this.gen_bitlen$com_jcraft_jzlib_Deflate(s);
C$.gen_codes$HA$I$HA(tree, max_code, s.bl_count);
});

Clazz.newMeth(C$, 'gen_codes$HA$I$HA', function (tree, max_code, bl_count) {
var code=($s$[0] = 0, $s$[0]);
var bits;
var n;
C$.next_code[0]=(0|0);
for (bits=1; bits <= 15; bits++) {
C$.next_code[bits]=code=($s$[0] = ((code + bl_count[bits - 1]) << 1), $s$[0]);
}
for (n=0; n <= max_code; n++) {
var len=tree[n * 2 + 1];
if (len == 0) continue;
tree[n * 2]=((C$.bi_reverse$I$I(($s$[0]=C$.next_code[$k$=len],C$.next_code[$k$]=(++$s$[0],$s$[0]),--$s$[0],$s$[0]), len))|0);
}
}, 1);

Clazz.newMeth(C$, 'bi_reverse$I$I', function (code, len) {
var res=0;
do {
res|=code & 1;
code>>>=1;
res<<=1;
} while (--len > 0);
return res >>> 1;
}, 1);
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
var $k$;

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.3.00');//Created 2023-11-12 14:15:55 Java2ScriptVisitor version 3.2.3.00 net.sf.j2s.core.jar version 3.2.3.00
