(function(){var P$=Clazz.newPackage("com.jcraft.jzlib"),p$1={},I$=[[0,['com.jcraft.jzlib.Deflate','.Config'],'com.jcraft.jzlib.Tree','com.jcraft.jzlib.StaticTree','com.jcraft.jzlib.CRC32','com.jcraft.jzlib.GZIPHeader']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Deflate", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.config_table=null;
C$.z_errmsg=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.config_table=null;
{
C$.config_table=Clazz.array(Clazz.load(['com.jcraft.jzlib.Deflate','.Config']), [10]);
C$.config_table[0]=Clazz.new_($I$(1).c$$I$I$I$I$I,[0, 0, 0, 0, 0]);
C$.config_table[1]=Clazz.new_($I$(1).c$$I$I$I$I$I,[4, 4, 8, 4, 1]);
C$.config_table[2]=Clazz.new_($I$(1).c$$I$I$I$I$I,[4, 5, 16, 8, 1]);
C$.config_table[3]=Clazz.new_($I$(1).c$$I$I$I$I$I,[4, 6, 32, 32, 1]);
C$.config_table[4]=Clazz.new_($I$(1).c$$I$I$I$I$I,[4, 4, 16, 16, 2]);
C$.config_table[5]=Clazz.new_($I$(1).c$$I$I$I$I$I,[8, 16, 32, 32, 2]);
C$.config_table[6]=Clazz.new_($I$(1).c$$I$I$I$I$I,[8, 16, 128, 128, 2]);
C$.config_table[7]=Clazz.new_($I$(1).c$$I$I$I$I$I,[8, 32, 128, 256, 2]);
C$.config_table[8]=Clazz.new_($I$(1).c$$I$I$I$I$I,[32, 128, 258, 1024, 2]);
C$.config_table[9]=Clazz.new_($I$(1).c$$I$I$I$I$I,[32, 258, 258, 4096, 2]);
}
;
C$.z_errmsg=Clazz.array(String, -1, ["need dictionary", "stream end", "", "file error", "stream error", "data error", "insufficient memory", "buffer error", "incompatible version", ""]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.strm=null;
this.status=0;
this.pending_buf=null;
this.pending_buf_size=0;
this.pending_out=0;
this.pending=0;
this.wrap=0;
this.data_type=0;
this.method=0;
this.last_flush=0;
this.w_size=0;
this.w_bits=0;
this.w_mask=0;
this.window=null;
this.window_size=0;
this.prev=null;
this.head=null;
this.ins_h=0;
this.hash_size=0;
this.hash_bits=0;
this.hash_mask=0;
this.hash_shift=0;
this.block_start=0;
this.match_length=0;
this.prev_match=0;
this.match_available=0;
this.strstart=0;
this.match_start=0;
this.lookahead=0;
this.prev_length=0;
this.max_chain_length=0;
this.max_lazy_match=0;
this.level=0;
this.strategy=0;
this.good_match=0;
this.nice_match=0;
this.dyn_ltree=null;
this.dyn_dtree=null;
this.bl_tree=null;
this.l_desc=null;
this.d_desc=null;
this.bl_desc=null;
this.bl_count=null;
this.heap=null;
this.heap_len=0;
this.heap_max=0;
this.depth=null;
this.l_buf=0;
this.lit_bufsize=0;
this.last_lit=0;
this.d_buf=0;
this.opt_len=0;
this.static_len=0;
this.matches=0;
this.last_eob_len=0;
this.bi_buf=0;
this.bi_valid=0;
this.gheader=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.wrap=1;
this.l_desc=Clazz.new_(Clazz.load('com.jcraft.jzlib.Tree'));
this.d_desc=Clazz.new_($I$(2));
this.bl_desc=Clazz.new_($I$(2));
this.bl_count=Clazz.array(Short.TYPE, [16]);
this.heap=Clazz.array(Integer.TYPE, [573]);
this.depth=Clazz.array(Byte.TYPE, [573]);
this.gheader=null;
}, 1);

Clazz.newMeth(C$, 'c$$com_jcraft_jzlib_ZStream', function (strm) {
C$.$init$.apply(this);
this.strm=strm;
this.dyn_ltree=Clazz.array(Short.TYPE, [1146]);
this.dyn_dtree=Clazz.array(Short.TYPE, [122]);
this.bl_tree=Clazz.array(Short.TYPE, [78]);
}, 1);

Clazz.newMeth(C$, 'deflateInit$I', function (level) {
return this.deflateInit2$I$I(level, 15);
});

Clazz.newMeth(C$, 'deflateInit2$I$I', function (level, bits) {
return p$1.deflateInit5$I$I$I$I$I.apply(this, [level, 8, bits, 8, 0]);
});

Clazz.newMeth(C$, 'deflateInit3$I$I$I', function (level, bits, memlevel) {
return p$1.deflateInit5$I$I$I$I$I.apply(this, [level, 8, bits, memlevel, 0]);
});

Clazz.newMeth(C$, 'lm_init$', function () {
this.window_size=2 * this.w_size;
this.head[this.hash_size - 1]=(0|0);
for (var i=0; i < this.hash_size - 1; i++) {
this.head[i]=(0|0);
}
this.max_lazy_match=C$.config_table[this.level].max_lazy;
this.good_match=C$.config_table[this.level].good_length;
this.nice_match=C$.config_table[this.level].nice_length;
this.max_chain_length=C$.config_table[this.level].max_chain;
this.strstart=0;
this.block_start=0;
this.lookahead=0;
this.match_length=this.prev_length=2;
this.match_available=0;
this.ins_h=0;
});

Clazz.newMeth(C$, 'tr_init$', function () {
this.l_desc.dyn_tree=this.dyn_ltree;
this.l_desc.stat_desc=Clazz.load('com.jcraft.jzlib.StaticTree').static_l_desc;
this.d_desc.dyn_tree=this.dyn_dtree;
this.d_desc.stat_desc=$I$(3).static_d_desc;
this.bl_desc.dyn_tree=this.bl_tree;
this.bl_desc.stat_desc=$I$(3).static_bl_desc;
this.bi_buf=($s$[0] = 0, $s$[0]);
this.bi_valid=0;
this.last_eob_len=8;
this.init_block$();
});

Clazz.newMeth(C$, 'init_block$', function () {
for (var i=0; i < 286; i++) this.dyn_ltree[i * 2]=(0|0);

for (var i=0; i < 30; i++) this.dyn_dtree[i * 2]=(0|0);

for (var i=0; i < 19; i++) this.bl_tree[i * 2]=(0|0);

this.dyn_ltree[512]=(1|0);
this.opt_len=this.static_len=0;
this.last_lit=this.matches=0;
});

Clazz.newMeth(C$, 'pqdownheap$HA$I', function (tree, k) {
var v=this.heap[k];
var j=k << 1;
while (j <= this.heap_len){
if (j < this.heap_len && C$.smaller$HA$I$I$BA(tree, this.heap[j + 1], this.heap[j], this.depth) ) {
j++;
}if (C$.smaller$HA$I$I$BA(tree, v, this.heap[j], this.depth)) break;
this.heap[k]=this.heap[j];
k=j;
j<<=1;
}
this.heap[k]=v;
});

Clazz.newMeth(C$, 'smaller$HA$I$I$BA', function (tree, n, m, depth) {
var tn2=tree[n * 2];
var tm2=tree[m * 2];
return (tn2 < tm2 || (tn2 == tm2 && depth[n] <= depth[m] ) );
}, 1);

Clazz.newMeth(C$, 'scan_tree$HA$I', function (tree, max_code) {
var n;
var prevlen=-1;
var curlen;
var nextlen=tree[1];
var count=0;
var max_count=7;
var min_count=4;
if (nextlen == 0) {
max_count=138;
min_count=3;
}tree[(max_code + 1) * 2 + 1]=-1;
for (n=0; n <= max_code; n++) {
curlen=nextlen;
nextlen=tree[(n + 1) * 2 + 1];
if (++count < max_count && curlen == nextlen ) {
continue;
} else if (count < min_count) {
this.bl_tree[$k$=curlen * 2]=(this.bl_tree[$k$]+(count)|0);
} else if (curlen != 0) {
if (curlen != prevlen) ($s$[0]=this.bl_tree[$k$=curlen * 2],this.bl_tree[$k$]=(++$s$[0],$s$[0]));
($s$[0]=this.bl_tree[32],this.bl_tree[32]=(++$s$[0],$s$[0]));
} else if (count <= 10) {
($s$[0]=this.bl_tree[34],this.bl_tree[34]=(++$s$[0],$s$[0]));
} else {
($s$[0]=this.bl_tree[36],this.bl_tree[36]=(++$s$[0],$s$[0]));
}count=0;
prevlen=curlen;
if (nextlen == 0) {
max_count=138;
min_count=3;
} else if (curlen == nextlen) {
max_count=6;
min_count=3;
} else {
max_count=7;
min_count=4;
}}
});

Clazz.newMeth(C$, 'build_bl_tree$', function () {
var max_blindex;
this.scan_tree$HA$I(this.dyn_ltree, this.l_desc.max_code);
this.scan_tree$HA$I(this.dyn_dtree, this.d_desc.max_code);
this.bl_desc.build_tree$com_jcraft_jzlib_Deflate(this);
for (max_blindex=18; max_blindex >= 3; max_blindex--) {
if (this.bl_tree[$I$(2).bl_order[max_blindex] * 2 + 1] != 0) break;
}
this.opt_len+=3 * (max_blindex + 1) + 5 + 5 + 4;
return max_blindex;
});

Clazz.newMeth(C$, 'send_all_trees$I$I$I', function (lcodes, dcodes, blcodes) {
var rank;
this.send_bits$I$I(lcodes - 257, 5);
this.send_bits$I$I(dcodes - 1, 5);
this.send_bits$I$I(blcodes - 4, 4);
for (rank=0; rank < blcodes; rank++) {
this.send_bits$I$I(this.bl_tree[$I$(2).bl_order[rank] * 2 + 1], 3);
}
this.send_tree$HA$I(this.dyn_ltree, lcodes - 1);
this.send_tree$HA$I(this.dyn_dtree, dcodes - 1);
});

Clazz.newMeth(C$, 'send_tree$HA$I', function (tree, max_code) {
var n;
var prevlen=-1;
var curlen;
var nextlen=tree[1];
var count=0;
var max_count=7;
var min_count=4;
if (nextlen == 0) {
max_count=138;
min_count=3;
}for (n=0; n <= max_code; n++) {
curlen=nextlen;
nextlen=tree[(n + 1) * 2 + 1];
if (++count < max_count && curlen == nextlen ) {
continue;
} else if (count < min_count) {
do {
this.send_code$I$HA(curlen, this.bl_tree);
} while (--count != 0);
} else if (curlen != 0) {
if (curlen != prevlen) {
this.send_code$I$HA(curlen, this.bl_tree);
count--;
}this.send_code$I$HA(16, this.bl_tree);
this.send_bits$I$I(count - 3, 2);
} else if (count <= 10) {
this.send_code$I$HA(17, this.bl_tree);
this.send_bits$I$I(count - 3, 3);
} else {
this.send_code$I$HA(18, this.bl_tree);
this.send_bits$I$I(count - 11, 7);
}count=0;
prevlen=curlen;
if (nextlen == 0) {
max_count=138;
min_count=3;
} else if (curlen == nextlen) {
max_count=6;
min_count=3;
} else {
max_count=7;
min_count=4;
}}
});

Clazz.newMeth(C$, 'put_byte$BA$I$I', function (p, start, len) {
System.arraycopy$O$I$O$I$I(p, start, this.pending_buf, this.pending, len);
this.pending+=len;
});

Clazz.newMeth(C$, 'put_byteB$B', function (c) {
{
this.pending_buf[this.pending++] = c&0xff;
}
});

Clazz.newMeth(C$, 'put_short$I', function (w) {
this.put_byteB$B(($b$[0] = ((w)|0), $b$[0]));
this.put_byteB$B(($b$[0] = ((w >>> 8)|0), $b$[0]));
});

Clazz.newMeth(C$, 'putShortMSB$I', function (b) {
this.put_byteB$B(($b$[0] = ((b >> 8)|0), $b$[0]));
this.put_byteB$B(($b$[0] = ((b)|0), $b$[0]));
});

Clazz.newMeth(C$, 'send_code$I$HA', function (c, tree) {
var c2=c * 2;
this.send_bits$I$I((tree[c2] & 65535), (tree[c2 + 1] & 65535));
});

Clazz.newMeth(C$, 'send_bits$I$I', function (value, length) {
var len=length;
if (this.bi_valid > 16 - len) {
var val=value;
this.bi_buf=($s$[0] = this.bi_buf|(((val << this.bi_valid) & 65535)), $s$[0]);
this.put_short$I(this.bi_buf);
this.bi_buf=($s$[0] = ((val >>> (16 - this.bi_valid)) & 65535), $s$[0]);
this.bi_valid+=len - 16;
} else {
this.bi_buf=($s$[0] = this.bi_buf|((((value) << this.bi_valid) & 65535)), $s$[0]);
this.bi_valid+=len;
}});

Clazz.newMeth(C$, '_tr_align$', function () {
this.send_bits$I$I(2, 3);
this.send_code$I$HA(256, $I$(3).static_ltree);
this.bi_flush$();
if (1 + this.last_eob_len + 10  - this.bi_valid < 9) {
this.send_bits$I$I(2, 3);
this.send_code$I$HA(256, $I$(3).static_ltree);
this.bi_flush$();
}this.last_eob_len=7;
});

Clazz.newMeth(C$, '_tr_tally$I$I', function (dist, lc) {
this.pending_buf[this.d_buf + this.last_lit * 2]=(((dist >>> 8)|0)|0);
this.pending_buf[this.d_buf + this.last_lit * 2 + 1]=((dist|0)|0);
this.pending_buf[this.l_buf + this.last_lit]=((lc|0)|0);
this.last_lit++;
if (dist == 0) {
($s$[0]=this.dyn_ltree[$k$=lc * 2],this.dyn_ltree[$k$]=(++$s$[0],$s$[0]));
} else {
this.matches++;
dist--;
($s$[0]=this.dyn_ltree[$k$=($I$(2)._length_code[lc] + 256 + 1 ) * 2],this.dyn_ltree[$k$]=(++$s$[0],$s$[0]));
($s$[0]=this.dyn_dtree[$k$=$I$(2).d_code$I(dist) * 2],this.dyn_dtree[$k$]=(++$s$[0],$s$[0]));
}if ((this.last_lit & 8191) == 0 && this.level > 2 ) {
var out_length=this.last_lit * 8;
var in_length=this.strstart - this.block_start;
var dcode;
for (dcode=0; dcode < 30; dcode++) {
out_length+=this.dyn_dtree[dcode * 2] * (5 + $I$(2).extra_dbits[dcode]);
}
out_length>>>=3;
if ((this.matches < ((this.last_lit/2|0))) && out_length < (in_length/2|0) ) return true;
}return (this.last_lit == this.lit_bufsize - 1);
});

Clazz.newMeth(C$, 'compress_block$HA$HA', function (ltree, dtree) {
var dist;
var lc;
var lx=0;
var code;
var extra;
if (this.last_lit != 0) {
do {
dist=((this.pending_buf[this.d_buf + lx * 2] << 8) & 65280) | (this.pending_buf[this.d_buf + lx * 2 + 1] & 255);
lc=(this.pending_buf[this.l_buf + lx]) & 255;
lx++;
if (dist == 0) {
this.send_code$I$HA(lc, ltree);
} else {
code=$I$(2)._length_code[lc];
this.send_code$I$HA(code + 256 + 1 , ltree);
extra=$I$(2).extra_lbits[code];
if (extra != 0) {
lc-=$I$(2).base_length[code];
this.send_bits$I$I(lc, extra);
}dist--;
code=$I$(2).d_code$I(dist);
this.send_code$I$HA(code, dtree);
extra=$I$(2).extra_dbits[code];
if (extra != 0) {
dist-=$I$(2).base_dist[code];
this.send_bits$I$I(dist, extra);
}}} while (lx < this.last_lit);
}this.send_code$I$HA(256, ltree);
this.last_eob_len=ltree[513];
});

Clazz.newMeth(C$, 'set_data_type$', function () {
var n=0;
var ascii_freq=0;
var bin_freq=0;
while (n < 7){
bin_freq+=this.dyn_ltree[n * 2];
n++;
}
while (n < 128){
ascii_freq+=this.dyn_ltree[n * 2];
n++;
}
while (n < 256){
bin_freq+=this.dyn_ltree[n * 2];
n++;
}
this.data_type=($b$[0] = ((bin_freq > (ascii_freq >>> 2) ? 0 : 1)|0), $b$[0]);
});

Clazz.newMeth(C$, 'bi_flush$', function () {
if (this.bi_valid == 16) {
this.put_short$I(this.bi_buf);
this.bi_buf=($s$[0] = 0, $s$[0]);
this.bi_valid=0;
} else if (this.bi_valid >= 8) {
this.put_byteB$B(($b$[0] = (this.bi_buf|0), $b$[0]));
this.bi_buf=($s$[0] = this.bi_buf>>>(8), $s$[0]);
this.bi_valid-=8;
}});

Clazz.newMeth(C$, 'bi_windup$', function () {
if (this.bi_valid > 8) {
this.put_short$I(this.bi_buf);
} else if (this.bi_valid > 0) {
this.put_byteB$B(($b$[0] = (this.bi_buf|0), $b$[0]));
}this.bi_buf=($s$[0] = 0, $s$[0]);
this.bi_valid=0;
});

Clazz.newMeth(C$, 'copy_block$I$I$Z', function (buf, len, header) {
this.bi_windup$();
this.last_eob_len=8;
if (header) {
this.put_short$I(($s$[0] = len, $s$[0]));
this.put_short$I(($s$[0] = ~len, $s$[0]));
}this.put_byte$BA$I$I(this.window, buf, len);
});

Clazz.newMeth(C$, 'flush_block_only$Z', function (eof) {
this._tr_flush_block$I$I$Z(this.block_start >= 0 ? this.block_start : -1, this.strstart - this.block_start, eof);
this.block_start=this.strstart;
this.strm.flush_pending$();
});

Clazz.newMeth(C$, 'deflate_stored$I', function (flush) {
var max_block_size=65535;
var max_start;
if (max_block_size > this.pending_buf_size - 5) {
max_block_size=this.pending_buf_size - 5;
}while (true){
if (this.lookahead <= 1) {
this.fill_window$();
if (this.lookahead == 0 && flush == 0 ) return 0;
if (this.lookahead == 0) break;
}this.strstart+=this.lookahead;
this.lookahead=0;
max_start=this.block_start + max_block_size;
if (this.strstart == 0 || this.strstart >= max_start ) {
this.lookahead=(this.strstart - max_start);
this.strstart=max_start;
this.flush_block_only$Z(false);
if (this.strm.avail_out == 0) return 0;
}if (this.strstart - this.block_start >= this.w_size - 262) {
this.flush_block_only$Z(false);
if (this.strm.avail_out == 0) return 0;
}}
this.flush_block_only$Z(flush == 4);
if (this.strm.avail_out == 0) return (flush == 4) ? 2 : 0;
return flush == 4 ? 3 : 1;
});

Clazz.newMeth(C$, '_tr_stored_block$I$I$Z', function (buf, stored_len, eof) {
this.send_bits$I$I((0) + (eof ? 1 : 0), 3);
this.copy_block$I$I$Z(buf, stored_len, true);
});

Clazz.newMeth(C$, '_tr_flush_block$I$I$Z', function (buf, stored_len, eof) {
var opt_lenb;
var static_lenb;
var max_blindex=0;
if (this.level > 0) {
if (this.data_type == 2) this.set_data_type$();
this.l_desc.build_tree$com_jcraft_jzlib_Deflate(this);
this.d_desc.build_tree$com_jcraft_jzlib_Deflate(this);
max_blindex=this.build_bl_tree$();
opt_lenb=(this.opt_len + 3 + 7 ) >>> 3;
static_lenb=(this.static_len + 3 + 7 ) >>> 3;
if (static_lenb <= opt_lenb) opt_lenb=static_lenb;
} else {
opt_lenb=static_lenb=stored_len + 5;
}if (stored_len + 4 <= opt_lenb && buf != -1 ) {
this._tr_stored_block$I$I$Z(buf, stored_len, eof);
} else if (static_lenb == opt_lenb) {
this.send_bits$I$I((2) + (eof ? 1 : 0), 3);
this.compress_block$HA$HA($I$(3).static_ltree, $I$(3).static_dtree);
} else {
this.send_bits$I$I((4) + (eof ? 1 : 0), 3);
this.send_all_trees$I$I$I(this.l_desc.max_code + 1, this.d_desc.max_code + 1, max_blindex + 1);
this.compress_block$HA$HA(this.dyn_ltree, this.dyn_dtree);
}this.init_block$();
if (eof) {
this.bi_windup$();
}});

Clazz.newMeth(C$, 'fill_window$', function () {
var n;
var m;
var p;
var more;
do {
more=(this.window_size - this.lookahead - this.strstart );
if (more == 0 && this.strstart == 0  && this.lookahead == 0 ) {
more=this.w_size;
} else if (more == -1) {
more--;
} else if (this.strstart >= this.w_size + this.w_size - 262) {
System.arraycopy$O$I$O$I$I(this.window, this.w_size, this.window, 0, this.w_size);
this.match_start-=this.w_size;
this.strstart-=this.w_size;
this.block_start-=this.w_size;
n=this.hash_size;
p=n;
do {
m=(this.head[--p] & 65535);
this.head[p]=(m >= this.w_size ? ((m - this.w_size)|0) : (0|0));
} while (--n != 0);
n=this.w_size;
p=n;
do {
m=(this.prev[--p] & 65535);
this.prev[p]=(m >= this.w_size ? ((m - this.w_size)|0) : (0|0));
} while (--n != 0);
more+=this.w_size;
}if (this.strm.avail_in == 0) return;
n=this.strm.read_buf$BA$I$I(this.window, this.strstart + this.lookahead, more);
this.lookahead+=n;
if (this.lookahead >= 3) {
this.ins_h=this.window[this.strstart] & 255;
this.ins_h=(((this.ins_h) << this.hash_shift) ^ (this.window[this.strstart + 1] & 255)) & this.hash_mask;
}} while (this.lookahead < 262 && this.strm.avail_in != 0 );
});

Clazz.newMeth(C$, 'deflate_fast$I', function (flush) {
var hash_head=0;
var bflush;
while (true){
if (this.lookahead < 262) {
this.fill_window$();
if (this.lookahead < 262 && flush == 0 ) {
return 0;
}if (this.lookahead == 0) break;
}if (this.lookahead >= 3) {
this.ins_h=(((this.ins_h) << this.hash_shift) ^ (this.window[(this.strstart) + (2)] & 255)) & this.hash_mask;
hash_head=(this.head[this.ins_h] & 65535);
this.prev[this.strstart & this.w_mask]=this.head[this.ins_h];
this.head[this.ins_h]=(this.strstart|0);
}if (hash_head != 0 && ((this.strstart - hash_head) & 65535) <= this.w_size - 262 ) {
if (this.strategy != 2) {
this.match_length=this.longest_match$I(hash_head);
}}if (this.match_length >= 3) {
bflush=this._tr_tally$I$I(this.strstart - this.match_start, this.match_length - 3);
this.lookahead-=this.match_length;
if (this.match_length <= this.max_lazy_match && this.lookahead >= 3 ) {
this.match_length--;
do {
this.strstart++;
this.ins_h=((this.ins_h << this.hash_shift) ^ (this.window[(this.strstart) + (2)] & 255)) & this.hash_mask;
hash_head=(this.head[this.ins_h] & 65535);
this.prev[this.strstart & this.w_mask]=this.head[this.ins_h];
this.head[this.ins_h]=(this.strstart|0);
} while (--this.match_length != 0);
this.strstart++;
} else {
this.strstart+=this.match_length;
this.match_length=0;
this.ins_h=this.window[this.strstart] & 255;
this.ins_h=(((this.ins_h) << this.hash_shift) ^ (this.window[this.strstart + 1] & 255)) & this.hash_mask;
}} else {
bflush=this._tr_tally$I$I(0, this.window[this.strstart] & 255);
this.lookahead--;
this.strstart++;
}if (bflush) {
this.flush_block_only$Z(false);
if (this.strm.avail_out == 0) return 0;
}}
this.flush_block_only$Z(flush == 4);
if (this.strm.avail_out == 0) {
if (flush == 4) return 2;
return 0;
}return flush == 4 ? 3 : 1;
});

Clazz.newMeth(C$, 'deflate_slow$I', function (flush) {
var hash_head=0;
var bflush;
while (true){
if (this.lookahead < 262) {
this.fill_window$();
if (this.lookahead < 262 && flush == 0 ) {
return 0;
}if (this.lookahead == 0) break;
}if (this.lookahead >= 3) {
this.ins_h=(((this.ins_h) << this.hash_shift) ^ (this.window[(this.strstart) + (2)] & 255)) & this.hash_mask;
hash_head=(this.head[this.ins_h] & 65535);
this.prev[this.strstart & this.w_mask]=this.head[this.ins_h];
this.head[this.ins_h]=(this.strstart|0);
}this.prev_length=this.match_length;
this.prev_match=this.match_start;
this.match_length=2;
if (hash_head != 0 && this.prev_length < this.max_lazy_match  && ((this.strstart - hash_head) & 65535) <= this.w_size - 262 ) {
if (this.strategy != 2) {
this.match_length=this.longest_match$I(hash_head);
}if (this.match_length <= 5 && (this.strategy == 1 || (this.match_length == 3 && this.strstart - this.match_start > 4096 ) ) ) {
this.match_length=2;
}}if (this.prev_length >= 3 && this.match_length <= this.prev_length ) {
var max_insert=this.strstart + this.lookahead - 3;
bflush=this._tr_tally$I$I(this.strstart - 1 - this.prev_match , this.prev_length - 3);
this.lookahead-=this.prev_length - 1;
this.prev_length-=2;
do {
if (++this.strstart <= max_insert) {
this.ins_h=(((this.ins_h) << this.hash_shift) ^ (this.window[(this.strstart) + (2)] & 255)) & this.hash_mask;
hash_head=(this.head[this.ins_h] & 65535);
this.prev[this.strstart & this.w_mask]=this.head[this.ins_h];
this.head[this.ins_h]=(this.strstart|0);
}} while (--this.prev_length != 0);
this.match_available=0;
this.match_length=2;
this.strstart++;
if (bflush) {
this.flush_block_only$Z(false);
if (this.strm.avail_out == 0) return 0;
}} else if (this.match_available != 0) {
bflush=this._tr_tally$I$I(0, this.window[this.strstart - 1] & 255);
if (bflush) {
this.flush_block_only$Z(false);
}this.strstart++;
this.lookahead--;
if (this.strm.avail_out == 0) return 0;
} else {
this.match_available=1;
this.strstart++;
this.lookahead--;
}}
if (this.match_available != 0) {
bflush=this._tr_tally$I$I(0, this.window[this.strstart - 1] & 255);
this.match_available=0;
}this.flush_block_only$Z(flush == 4);
if (this.strm.avail_out == 0) {
if (flush == 4) return 2;
return 0;
}return flush == 4 ? 3 : 1;
});

Clazz.newMeth(C$, 'longest_match$I', function (cur_match) {
var chain_length=this.max_chain_length;
var scan=this.strstart;
var match;
var len;
var best_len=this.prev_length;
var limit=this.strstart > (this.w_size - 262) ? this.strstart - (this.w_size - 262) : 0;
var nice_match=this.nice_match;
var wmask=this.w_mask;
var strend=this.strstart + 258;
var scan_end1=($b$[0] = this.window[scan + best_len - 1], $b$[0]);
var scan_end=($b$[0] = this.window[scan + best_len], $b$[0]);
if (this.prev_length >= this.good_match) {
chain_length>>=2;
}if (nice_match > this.lookahead) nice_match=this.lookahead;
do {
match=cur_match;
if (this.window[match + best_len] != scan_end || this.window[match + best_len - 1] != scan_end1  || this.window[match] != this.window[scan]  || this.window[++match] != this.window[scan + 1] ) continue;
scan+=2;
match++;
do {
} while (this.window[++scan] == this.window[++match] && this.window[++scan] == this.window[++match]  && this.window[++scan] == this.window[++match]  && this.window[++scan] == this.window[++match]  && this.window[++scan] == this.window[++match]  && this.window[++scan] == this.window[++match]  && this.window[++scan] == this.window[++match]  && this.window[++scan] == this.window[++match]  && scan < strend );
len=258 - (strend - scan);
scan=strend - 258;
if (len > best_len) {
this.match_start=cur_match;
best_len=len;
if (len >= nice_match) break;
scan_end1=($b$[0] = this.window[scan + best_len - 1], $b$[0]);
scan_end=($b$[0] = this.window[scan + best_len], $b$[0]);
}} while ((cur_match=(this.prev[cur_match & wmask] & 65535)) > limit && --chain_length != 0 );
if (best_len <= this.lookahead) return best_len;
return this.lookahead;
});

Clazz.newMeth(C$, 'deflateInit5$I$I$I$I$I', function (level, method, windowBits, memLevel, strategy) {
var wrap=1;
this.strm.msg=null;
if (level == -1) level=6;
if (windowBits < 0) {
wrap=0;
windowBits=-windowBits;
} else if (windowBits > 15) {
wrap=2;
windowBits-=16;
this.strm.checksum=Clazz.new_(Clazz.load('com.jcraft.jzlib.CRC32'));
}if (memLevel < 1 || memLevel > 9  || method != 8  || windowBits < 9  || windowBits > 15  || level < 0  || level > 9  || strategy < 0  || strategy > 2 ) {
return -2;
}this.strm.dstate=this;
this.wrap=wrap;
this.w_bits=windowBits;
this.w_size=1 << this.w_bits;
this.w_mask=this.w_size - 1;
this.hash_bits=memLevel + 7;
this.hash_size=1 << this.hash_bits;
this.hash_mask=this.hash_size - 1;
this.hash_shift=(((this.hash_bits + 3 - 1)/3|0));
this.window=Clazz.array(Byte.TYPE, [this.w_size * 2]);
this.prev=Clazz.array(Short.TYPE, [this.w_size]);
this.head=Clazz.array(Short.TYPE, [this.hash_size]);
this.lit_bufsize=1 << (memLevel + 6);
this.pending_buf=Clazz.array(Byte.TYPE, [this.lit_bufsize * 4]);
this.pending_buf_size=this.lit_bufsize * 4;
this.d_buf=(this.lit_bufsize/2|0);
this.l_buf=(3) * this.lit_bufsize;
this.level=level;
this.strategy=strategy;
this.method=($b$[0] = (method|0), $b$[0]);
return this.deflateReset$();
}, p$1);

Clazz.newMeth(C$, 'deflateReset$', function () {
this.strm.total_in=this.strm.total_out=0;
this.strm.msg=null;
this.strm.data_type=2;
this.pending=0;
this.pending_out=0;
if (this.wrap < 0) {
this.wrap=-this.wrap;
}this.status=(this.wrap == 0) ? 113 : 42;
this.strm.checksum.reset$();
this.last_flush=0;
this.tr_init$();
this.lm_init$();
return 0;
});

Clazz.newMeth(C$, 'deflateEnd$', function () {
if (this.status != 42 && this.status != 113  && this.status != 666 ) {
return -2;
}this.pending_buf=null;
this.head=null;
this.prev=null;
this.window=null;
return this.status == 113 ? -3 : 0;
});

Clazz.newMeth(C$, 'deflateParams$I$I', function (_level, _strategy) {
var err=0;
if (_level == -1) {
_level=6;
}if (_level < 0 || _level > 9  || _strategy < 0  || _strategy > 2 ) {
return -2;
}if (C$.config_table[this.level].func != C$.config_table[_level].func && this.strm.total_in != 0 ) {
err=this.strm.deflate$I(1);
}if (this.level != _level) {
this.level=_level;
this.max_lazy_match=C$.config_table[this.level].max_lazy;
this.good_match=C$.config_table[this.level].good_length;
this.nice_match=C$.config_table[this.level].nice_length;
this.max_chain_length=C$.config_table[this.level].max_chain;
}this.strategy=_strategy;
return err;
});

Clazz.newMeth(C$, 'deflateSetDictionary$BA$I', function (dictionary, dictLength) {
var length=dictLength;
var index=0;
if (dictionary == null  || this.status != 42 ) return -2;
this.strm.checksum.update$BA$I$I(dictionary, 0, dictLength);
if (length < 3) return 0;
if (length > this.w_size - 262) {
length=this.w_size - 262;
index=dictLength - length;
}System.arraycopy$O$I$O$I$I(dictionary, index, this.window, 0, length);
this.strstart=length;
this.block_start=length;
this.ins_h=this.window[0] & 255;
this.ins_h=(((this.ins_h) << this.hash_shift) ^ (this.window[1] & 255)) & this.hash_mask;
for (var n=0; n <= length - 3; n++) {
this.ins_h=(((this.ins_h) << this.hash_shift) ^ (this.window[(n) + (2)] & 255)) & this.hash_mask;
this.prev[n & this.w_mask]=this.head[this.ins_h];
this.head[this.ins_h]=(n|0);
}
return 0;
});

Clazz.newMeth(C$, 'deflate$I', function (flush) {
var old_flush;
if (flush > 4 || flush < 0 ) {
return -2;
}if (this.strm.next_out == null  || (this.strm.next_in == null  && this.strm.avail_in != 0 )  || (this.status == 666 && flush != 4 ) ) {
this.strm.msg=C$.z_errmsg[4];
return -2;
}if (this.strm.avail_out == 0) {
this.strm.msg=C$.z_errmsg[7];
return -5;
}old_flush=this.last_flush;
this.last_flush=flush;
if (this.status == 42) {
if (this.wrap == 2) {
this.getGZIPHeader$().put$com_jcraft_jzlib_Deflate(this);
this.status=113;
this.strm.checksum.reset$();
} else {
var header=(8 + ((this.w_bits - 8) << 4)) << 8;
var level_flags=((this.level - 1) & 255) >> 1;
if (level_flags > 3) level_flags=3;
header|=(level_flags << 6);
if (this.strstart != 0) header|=32;
header+=31 - (header % 31);
this.status=113;
this.putShortMSB$I(header);
if (this.strstart != 0) {
var adler=this.strm.checksum.getValue$();
this.putShortMSB$I(((adler >>> 16)|0));
this.putShortMSB$I(((adler & 65535)|0));
}this.strm.checksum.reset$();
}}if (this.pending != 0) {
this.strm.flush_pending$();
if (this.strm.avail_out == 0) {
this.last_flush=-1;
return 0;
}} else if (this.strm.avail_in == 0 && flush <= old_flush  && flush != 4 ) {
this.strm.msg=C$.z_errmsg[7];
return -5;
}if (this.status == 666 && this.strm.avail_in != 0 ) {
this.strm.msg=C$.z_errmsg[7];
return -5;
}if (this.strm.avail_in != 0 || this.lookahead != 0  || (flush != 0 && this.status != 666 ) ) {
var bstate=-1;
switch (C$.config_table[this.level].func) {
case 0:
bstate=this.deflate_stored$I(flush);
break;
case 1:
bstate=this.deflate_fast$I(flush);
break;
case 2:
bstate=this.deflate_slow$I(flush);
break;
default:
}
if (bstate == 2 || bstate == 3 ) {
this.status=666;
}if (bstate == 0 || bstate == 2 ) {
if (this.strm.avail_out == 0) {
this.last_flush=-1;
}return 0;
}if (bstate == 1) {
if (flush == 1) {
this._tr_align$();
} else {
this._tr_stored_block$I$I$Z(0, 0, false);
if (flush == 3) {
for (var i=0; i < this.hash_size; i++) this.head[i]=(0|0);

}}this.strm.flush_pending$();
if (this.strm.avail_out == 0) {
this.last_flush=-1;
return 0;
}}}if (flush != 4) return 0;
if (this.wrap <= 0) return 1;
if (this.wrap == 2) {
var adler=this.strm.checksum.getValue$();
this.put_byteB$B(($b$[0] = ((adler & 255)|0), $b$[0]));
this.put_byteB$B(($b$[0] = (((adler >> 8) & 255)|0), $b$[0]));
this.put_byteB$B(($b$[0] = (((adler >> 16) & 255)|0), $b$[0]));
this.put_byteB$B(($b$[0] = (((adler >> 24) & 255)|0), $b$[0]));
this.put_byteB$B(($b$[0] = ((this.strm.total_in & 255)|0), $b$[0]));
this.put_byteB$B(($b$[0] = (((this.strm.total_in >> 8) & 255)|0), $b$[0]));
this.put_byteB$B(($b$[0] = (((this.strm.total_in >> 16) & 255)|0), $b$[0]));
this.put_byteB$B(($b$[0] = (((this.strm.total_in >> 24) & 255)|0), $b$[0]));
this.getGZIPHeader$().setCRC$J(adler);
} else {
var adler=this.strm.checksum.getValue$();
this.putShortMSB$I(((adler >>> 16)|0));
this.putShortMSB$I(((adler & 65535)|0));
}this.strm.flush_pending$();
if (this.wrap > 0) this.wrap=-this.wrap;
return this.pending != 0 ? 0 : 1;
});

Clazz.newMeth(C$, 'getGZIPHeader$', function () {
if (this.gheader == null ) {
this.gheader=Clazz.new_(Clazz.load('com.jcraft.jzlib.GZIPHeader'));
}return this.gheader;
});

Clazz.newMeth(C$, 'getBytesRead$', function () {
return this.strm.total_in;
});

Clazz.newMeth(C$, 'getBytesWritten$', function () {
return this.strm.total_out;
});
var $s$ = new Int16Array(1);
var $k$;
var $b$ = new Int8Array(1);
;
(function(){var C$=Clazz.newClass(P$.Deflate, "Config", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.good_length=0;
this.max_lazy=0;
this.nice_length=0;
this.max_chain=0;
this.func=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I', function (good_length, max_lazy, nice_length, max_chain, func) {
C$.$init$.apply(this);
this.good_length=good_length;
this.max_lazy=max_lazy;
this.nice_length=nice_length;
this.max_chain=max_chain;
this.func=func;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.3.00');//Created 2023-11-12 14:15:54 Java2ScriptVisitor version 3.2.3.00 net.sf.j2s.core.jar version 3.2.3.00
