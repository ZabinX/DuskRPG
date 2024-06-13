(function(){var P$=java.util,p$1={},I$=[[0,'java.lang.reflect.Array']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TimSort");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.minGallop=7;
this.stackSize=0;
},1);

C$.$fields$=[['I',['minGallop','tmpBase','tmpLen','stackSize'],'O',['a','_.T[]','c','java.util.Comparator','tmp','_.T[]','runBase','int[]','+runLen']]]

Clazz.newMeth(C$, 'c$$OA$java_util_Comparator$OA$I$I',  function (a, c, work, workBase, workLen) {
;C$.$init$.apply(this);
this.a=a;
this.c=c;
var len=a.length;
var tlen=(len < 512) ? len >>> 1 : 256;
if (work == null  || workLen < tlen  || workBase + tlen > work.length ) {
var newArray=Clazz.array(a.getClass$().getComponentType$(), tlen);
this.tmp=newArray;
this.tmpBase=0;
this.tmpLen=tlen;
} else {
this.tmp=work;
this.tmpBase=workBase;
this.tmpLen=workLen;
}var stackLen=(len < 120 ? 5 : len < 1542 ? 10 : len < 119151 ? 24 : 49);
this.runBase=Clazz.array(Integer.TYPE, [stackLen]);
this.runLen=Clazz.array(Integer.TYPE, [stackLen]);
}, 1);

Clazz.newMeth(C$, 'sort$OA$I$I$java_util_Comparator$OA$I$I',  function (a, lo, hi, c, work, workBase, workLen) {
Clazz.assert(C$, this, function(){return c != null  && a != null   && lo >= 0  && lo <= hi  && hi <= a.length });
var nRemaining=hi - lo;
if (nRemaining < 2) return;
if (nRemaining < 32) {
var initRunLen=C$.countRunAndMakeAscending$OA$I$I$java_util_Comparator(a, lo, hi, c);
C$.binarySort$OA$I$I$I$java_util_Comparator(a, lo, hi, lo + initRunLen, c);
return;
}var ts=Clazz.new_(C$.c$$OA$java_util_Comparator$OA$I$I,[a, c, work, workBase, workLen]);
var minRun=C$.minRunLength$I(nRemaining);
do {
var runLen=C$.countRunAndMakeAscending$OA$I$I$java_util_Comparator(a, lo, hi, c);
if (runLen < minRun) {
var force=nRemaining <= minRun ? nRemaining : minRun;
C$.binarySort$OA$I$I$I$java_util_Comparator(a, lo, lo + force, lo + runLen, c);
runLen=force;
}p$1.pushRun$I$I.apply(ts, [lo, runLen]);
p$1.mergeCollapse.apply(ts, []);
lo+=runLen;
nRemaining-=runLen;
} while (nRemaining != 0);
Clazz.assert(C$, this, function(){return lo == hi});
p$1.mergeForceCollapse.apply(ts, []);
Clazz.assert(C$, this, function(){return ts.stackSize == 1});
}, 1);

Clazz.newMeth(C$, 'binarySort$OA$I$I$I$java_util_Comparator',  function (a, lo, hi, start, c) {
Clazz.assert(C$, this, function(){return lo <= start && start <= hi });
if (start == lo) ++start;
for (; start < hi; start++) {
var pivot=a[start];
var left=lo;
var right=start;
Clazz.assert(C$, this, function(){return left <= right});
while (left < right){
var mid=(left + right) >>> 1;
if (c.compare$O$O(pivot, a[mid]) < 0) right=mid;
 else left=mid + 1;
}
Clazz.assert(C$, this, function(){return left == right});
var n=start - left;
switch (n) {
case 2:
a[left + 2]=a[left + 1];
case 1:
a[left + 1]=a[left];
break;
default:
System.arraycopy$O$I$O$I$I(a, left, a, left + 1, n);
}
a[left]=pivot;
}
}, 1);

Clazz.newMeth(C$, 'countRunAndMakeAscending$OA$I$I$java_util_Comparator',  function (a, lo, hi, c) {
Clazz.assert(C$, this, function(){return lo < hi});
var runHi=lo + 1;
if (runHi == hi) return 1;
if (c.compare$O$O(a[runHi++], a[lo]) < 0) {
while (runHi < hi && c.compare$O$O(a[runHi], a[runHi - 1]) < 0 )++runHi;

C$.reverseRange$OA$I$I(a, lo, runHi);
} else {
while (runHi < hi && c.compare$O$O(a[runHi], a[runHi - 1]) >= 0 )++runHi;

}return runHi - lo;
}, 1);

Clazz.newMeth(C$, 'reverseRange$OA$I$I',  function (a, lo, hi) {
--hi;
while (lo < hi){
var t=a[lo];
a[lo++]=a[hi];
a[hi--]=t;
}
}, 1);

Clazz.newMeth(C$, 'minRunLength$I',  function (n) {
Clazz.assert(C$, this, function(){return n >= 0});
var r=0;
while (n >= 32){
r|=(n & 1);
n>>=1;
}
return n + r;
}, 1);

Clazz.newMeth(C$, 'pushRun$I$I',  function (runBase, runLen) {
this.runBase[this.stackSize]=runBase;
this.runLen[this.stackSize]=runLen;
++this.stackSize;
}, p$1);

Clazz.newMeth(C$, 'mergeCollapse',  function () {
while (this.stackSize > 1){
var n=this.stackSize - 2;
if (n > 0 && this.runLen[n - 1] <= this.runLen[n] + this.runLen[n + 1] ) {
if (this.runLen[n - 1] < this.runLen[n + 1]) --n;
p$1.mergeAt$I.apply(this, [n]);
} else if (this.runLen[n] <= this.runLen[n + 1]) {
p$1.mergeAt$I.apply(this, [n]);
} else {
break;
}}
}, p$1);

Clazz.newMeth(C$, 'mergeForceCollapse',  function () {
while (this.stackSize > 1){
var n=this.stackSize - 2;
if (n > 0 && this.runLen[n - 1] < this.runLen[n + 1] ) --n;
p$1.mergeAt$I.apply(this, [n]);
}
}, p$1);

Clazz.newMeth(C$, 'mergeAt$I',  function (i) {
Clazz.assert(C$, this, function(){return this.stackSize >= 2});
Clazz.assert(C$, this, function(){return i >= 0});
Clazz.assert(C$, this, function(){return i == this.stackSize - 2 || i == this.stackSize - 3 });
var base1=this.runBase[i];
var len1=this.runLen[i];
var base2=this.runBase[i + 1];
var len2=this.runLen[i + 1];
Clazz.assert(C$, this, function(){return len1 > 0 && len2 > 0 });
Clazz.assert(C$, this, function(){return base1 + len1 == base2});
this.runLen[i]=len1 + len2;
if (i == this.stackSize - 3) {
this.runBase[i + 1]=this.runBase[i + 2];
this.runLen[i + 1]=this.runLen[i + 2];
}--this.stackSize;
var k=C$.gallopRight$O$OA$I$I$I$java_util_Comparator(this.a[base2], this.a, base1, len1, 0, this.c);
Clazz.assert(C$, this, function(){return k >= 0});
base1+=k;
len1-=k;
if (len1 == 0) return;
len2=C$.gallopLeft$O$OA$I$I$I$java_util_Comparator(this.a[base1 + len1 - 1], this.a, base2, len2, len2 - 1, this.c);
Clazz.assert(C$, this, function(){return len2 >= 0});
if (len2 == 0) return;
if (len1 <= len2) p$1.mergeLo$I$I$I$I.apply(this, [base1, len1, base2, len2]);
 else p$1.mergeHi$I$I$I$I.apply(this, [base1, len1, base2, len2]);
}, p$1);

Clazz.newMeth(C$, 'gallopLeft$O$OA$I$I$I$java_util_Comparator',  function (key, a, base, len, hint, c) {
Clazz.assert(C$, this, function(){return len > 0 && hint >= 0  && hint < len });
var lastOfs=0;
var ofs=1;
if (c.compare$O$O(key, a[base + hint]) > 0) {
var maxOfs=len - hint;
while (ofs < maxOfs && c.compare$O$O(key, a[base + hint + ofs ]) > 0 ){
lastOfs=ofs;
ofs=(ofs << 1) + 1;
if (ofs <= 0) ofs=maxOfs;
}
if (ofs > maxOfs) ofs=maxOfs;
lastOfs+=hint;
ofs+=hint;
} else {
var maxOfs=hint + 1;
while (ofs < maxOfs && c.compare$O$O(key, a[base + hint - ofs]) <= 0 ){
lastOfs=ofs;
ofs=(ofs << 1) + 1;
if (ofs <= 0) ofs=maxOfs;
}
if (ofs > maxOfs) ofs=maxOfs;
var tmp=lastOfs;
lastOfs=hint - ofs;
ofs=hint - tmp;
}Clazz.assert(C$, this, function(){return -1 <= lastOfs && lastOfs < ofs  && ofs <= len });
++lastOfs;
while (lastOfs < ofs){
var m=lastOfs + ((ofs - lastOfs) >>> 1);
if (c.compare$O$O(key, a[base + m]) > 0) lastOfs=m + 1;
 else ofs=m;
}
Clazz.assert(C$, this, function(){return lastOfs == ofs});
return ofs;
}, 1);

Clazz.newMeth(C$, 'gallopRight$O$OA$I$I$I$java_util_Comparator',  function (key, a, base, len, hint, c) {
Clazz.assert(C$, this, function(){return len > 0 && hint >= 0  && hint < len });
var ofs=1;
var lastOfs=0;
if (c.compare$O$O(key, a[base + hint]) < 0) {
var maxOfs=hint + 1;
while (ofs < maxOfs && c.compare$O$O(key, a[base + hint - ofs]) < 0 ){
lastOfs=ofs;
ofs=(ofs << 1) + 1;
if (ofs <= 0) ofs=maxOfs;
}
if (ofs > maxOfs) ofs=maxOfs;
var tmp=lastOfs;
lastOfs=hint - ofs;
ofs=hint - tmp;
} else {
var maxOfs=len - hint;
while (ofs < maxOfs && c.compare$O$O(key, a[base + hint + ofs ]) >= 0 ){
lastOfs=ofs;
ofs=(ofs << 1) + 1;
if (ofs <= 0) ofs=maxOfs;
}
if (ofs > maxOfs) ofs=maxOfs;
lastOfs+=hint;
ofs+=hint;
}Clazz.assert(C$, this, function(){return -1 <= lastOfs && lastOfs < ofs  && ofs <= len });
++lastOfs;
while (lastOfs < ofs){
var m=lastOfs + ((ofs - lastOfs) >>> 1);
if (c.compare$O$O(key, a[base + m]) < 0) ofs=m;
 else lastOfs=m + 1;
}
Clazz.assert(C$, this, function(){return lastOfs == ofs});
return ofs;
}, 1);

Clazz.newMeth(C$, 'mergeLo$I$I$I$I',  function (base1, len1, base2, len2) {
Clazz.assert(C$, this, function(){return len1 > 0 && len2 > 0  && base1 + len1 == base2 });
var a=this.a;
var tmp=p$1.ensureCapacity$I.apply(this, [len1]);
var cursor1=this.tmpBase;
var cursor2=base2;
var dest=base1;
System.arraycopy$O$I$O$I$I(a, base1, tmp, cursor1, len1);
a[dest++]=a[cursor2++];
if (--len2 == 0) {
System.arraycopy$O$I$O$I$I(tmp, cursor1, a, dest, len1);
return;
}if (len1 == 1) {
System.arraycopy$O$I$O$I$I(a, cursor2, a, dest, len2);
a[dest + len2]=tmp[cursor1];
return;
}var c=this.c;
var minGallop=this.minGallop;
 outer : while (true){
var count1=0;
var count2=0;
do {
Clazz.assert(C$, this, function(){return len1 > 1 && len2 > 0 });
if (c.compare$O$O(a[cursor2], tmp[cursor1]) < 0) {
a[dest++]=a[cursor2++];
++count2;
count1=0;
if (--len2 == 0) break outer;
} else {
a[dest++]=tmp[cursor1++];
++count1;
count2=0;
if (--len1 == 1) break outer;
}} while ((count1 | count2) < minGallop);
do {
Clazz.assert(C$, this, function(){return len1 > 1 && len2 > 0 });
count1=C$.gallopRight$O$OA$I$I$I$java_util_Comparator(a[cursor2], tmp, cursor1, len1, 0, c);
if (count1 != 0) {
System.arraycopy$O$I$O$I$I(tmp, cursor1, a, dest, count1);
dest+=count1;
cursor1+=count1;
len1-=count1;
if (len1 <= 1) break outer;
}a[dest++]=a[cursor2++];
if (--len2 == 0) break outer;
count2=C$.gallopLeft$O$OA$I$I$I$java_util_Comparator(tmp[cursor1], a, cursor2, len2, 0, c);
if (count2 != 0) {
System.arraycopy$O$I$O$I$I(a, cursor2, a, dest, count2);
dest+=count2;
cursor2+=count2;
len2-=count2;
if (len2 == 0) break outer;
}a[dest++]=tmp[cursor1++];
if (--len1 == 1) break outer;
--minGallop;
} while (!!(count1 >= 7 | count2 >= 7));
if (minGallop < 0) minGallop=0;
minGallop+=2;
}
this.minGallop=minGallop < 1 ? 1 : minGallop;
if (len1 == 1) {
Clazz.assert(C$, this, function(){return len2 > 0});
System.arraycopy$O$I$O$I$I(a, cursor2, a, dest, len2);
a[dest + len2]=tmp[cursor1];
} else if (len1 == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Comparison method violates its general contract!"]);
} else {
Clazz.assert(C$, this, function(){return len2 == 0});
Clazz.assert(C$, this, function(){return len1 > 1});
System.arraycopy$O$I$O$I$I(tmp, cursor1, a, dest, len1);
}}, p$1);

Clazz.newMeth(C$, 'mergeHi$I$I$I$I',  function (base1, len1, base2, len2) {
Clazz.assert(C$, this, function(){return len1 > 0 && len2 > 0  && base1 + len1 == base2 });
var a=this.a;
var tmp=p$1.ensureCapacity$I.apply(this, [len2]);
var tmpBase=this.tmpBase;
System.arraycopy$O$I$O$I$I(a, base2, tmp, tmpBase, len2);
var cursor1=base1 + len1 - 1;
var cursor2=tmpBase + len2 - 1;
var dest=base2 + len2 - 1;
a[dest--]=a[cursor1--];
if (--len1 == 0) {
System.arraycopy$O$I$O$I$I(tmp, tmpBase, a, dest - (len2 - 1), len2);
return;
}if (len2 == 1) {
dest-=len1;
cursor1-=len1;
System.arraycopy$O$I$O$I$I(a, cursor1 + 1, a, dest + 1, len1);
a[dest]=tmp[cursor2];
return;
}var c=this.c;
var minGallop=this.minGallop;
 outer : while (true){
var count1=0;
var count2=0;
do {
Clazz.assert(C$, this, function(){return len1 > 0 && len2 > 1 });
if (c.compare$O$O(tmp[cursor2], a[cursor1]) < 0) {
a[dest--]=a[cursor1--];
++count1;
count2=0;
if (--len1 == 0) break outer;
} else {
a[dest--]=tmp[cursor2--];
++count2;
count1=0;
if (--len2 == 1) break outer;
}} while ((count1 | count2) < minGallop);
do {
Clazz.assert(C$, this, function(){return len1 > 0 && len2 > 1 });
count1=len1 - C$.gallopRight$O$OA$I$I$I$java_util_Comparator(tmp[cursor2], a, base1, len1, len1 - 1, c);
if (count1 != 0) {
dest-=count1;
cursor1-=count1;
len1-=count1;
System.arraycopy$O$I$O$I$I(a, cursor1 + 1, a, dest + 1, count1);
if (len1 == 0) break outer;
}a[dest--]=tmp[cursor2--];
if (--len2 == 1) break outer;
count2=len2 - C$.gallopLeft$O$OA$I$I$I$java_util_Comparator(a[cursor1], tmp, tmpBase, len2, len2 - 1, c);
if (count2 != 0) {
dest-=count2;
cursor2-=count2;
len2-=count2;
System.arraycopy$O$I$O$I$I(tmp, cursor2 + 1, a, dest + 1, count2);
if (len2 <= 1) break outer;
}a[dest--]=a[cursor1--];
if (--len1 == 0) break outer;
--minGallop;
} while (!!(count1 >= 7 | count2 >= 7));
if (minGallop < 0) minGallop=0;
minGallop+=2;
}
this.minGallop=minGallop < 1 ? 1 : minGallop;
if (len2 == 1) {
Clazz.assert(C$, this, function(){return len1 > 0});
dest-=len1;
cursor1-=len1;
System.arraycopy$O$I$O$I$I(a, cursor1 + 1, a, dest + 1, len1);
a[dest]=tmp[cursor2];
} else if (len2 == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Comparison method violates its general contract!"]);
} else {
Clazz.assert(C$, this, function(){return len1 == 0});
Clazz.assert(C$, this, function(){return len2 > 0});
System.arraycopy$O$I$O$I$I(tmp, tmpBase, a, dest - (len2 - 1), len2);
}}, p$1);

Clazz.newMeth(C$, 'ensureCapacity$I',  function (minCapacity) {
if (this.tmpLen < minCapacity) {
var newSize=minCapacity;
newSize|=newSize >> 1;
newSize|=newSize >> 2;
newSize|=newSize >> 4;
newSize|=newSize >> 8;
newSize|=newSize >> 16;
++newSize;
if (newSize < 0) newSize=minCapacity;
 else newSize=Math.min(newSize, this.a.length >>> 1);
var newArray=Clazz.array(this.a.getClass$().getComponentType$(), newSize);
this.tmp=newArray;
this.tmpLen=newSize;
this.tmpBase=0;
}return this.tmp;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
