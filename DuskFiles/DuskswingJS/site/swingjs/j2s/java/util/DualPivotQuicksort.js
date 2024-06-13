(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "DualPivotQuicksort");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'sort$IA$I$I$IA$I$I',  function (a, left, right, work, workBase, workLen) {
if (right - left < 286) {
C$.sort$IA$I$I$Z(a, left, right, true);
return;
}var run=Clazz.array(Integer.TYPE, [68]);
var count=0;
run[0]=left;
for (var k=left; k < right; run[count]=k) {
if (a[k] < a[k + 1]) {
while (++k <= right && a[k - 1] <= a[k] );
} else if (a[k] > a[k + 1]) {
while (++k <= right && a[k - 1] >= a[k] );
for (var lo=run[count] - 1, hi=k; ++lo < --hi; ) {
var t=a[lo];
a[lo]=a[hi];
a[hi]=t;
}
} else {
for (var m=33; ++k <= right && a[k - 1] == a[k] ; ) {
if (--m == 0) {
C$.sort$IA$I$I$Z(a, left, right, true);
return;
}}
}if (++count == 67) {
C$.sort$IA$I$I$Z(a, left, right, true);
return;
}}
if (run[count] == right++) {
run[++count]=right;
} else if (count == 1) {
return;
}var odd=($b$[0] = 0, $b$[0]);
for (var n=1; (n<<=1) < count; odd=($b$[0] = odd^(1), $b$[0])) ;
var b;
var ao;
var bo;
var blen=right - left;
if (work == null  || workLen < blen  || workBase + blen > work.length ) {
work=Clazz.array(Integer.TYPE, [blen]);
workBase=0;
}if (odd == 0) {
System.arraycopy$O$I$O$I$I(a, left, work, workBase, blen);
b=a;
bo=0;
a=work;
ao=workBase - left;
} else {
b=work;
ao=0;
bo=workBase - left;
}for (var last; count > 1; count=last) {
for (var k=(last=0) + 2; k <= count; k+=2) {
var hi=run[k];
var mi=run[k - 1];
for (var i=run[k - 2], p=i, q=mi; i < hi; ++i) {
if (q >= hi || p < mi && a[p + ao] <= a[q + ao]  ) {
b[i + bo]=a[p++ + ao];
} else {
b[i + bo]=a[q++ + ao];
}}
run[++last]=hi;
}
if ((count & 1) != 0) {
for (var i=right, lo=run[count - 1]; --i >= lo; b[i + bo]=a[i + ao]) ;
run[++last]=right;
}var t=a;
a=b;
b=t;
var o=ao;
ao=bo;
bo=o;
}
}, 1);

Clazz.newMeth(C$, 'sort$IA$I$I$Z',  function (a, left, right, leftmost) {
var length=right - left + 1;
if (length < 47) {
if (leftmost) {
for (var i=left, j=i; i < right; j=++i) {
var ai=a[i + 1];
while (ai < a[j]){
a[j + 1]=a[j];
if (j-- == left) {
break;
}}
a[j + 1]=ai;
}
} else {
do {
if (left >= right) {
return;
}} while (a[++left] >= a[left - 1]);
for (var k=left; ++left <= right; k=++left) {
var a1=a[k];
var a2=a[left];
if (a1 < a2) {
a2=a1;
a1=a[left];
}while (a1 < a[--k]){
a[k + 2]=a[k];
}
a[++k + 1]=a1;
while (a2 < a[--k]){
a[k + 1]=a[k];
}
a[k + 1]=a2;
}
var last=a[right];
while (last < a[--right]){
a[right + 1]=a[right];
}
a[right + 1]=last;
}return;
}var seventh=(length >> 3) + (length >> 6) + 1 ;
var e3=(left + right) >>> 1;
var e2=e3 - seventh;
var e1=e2 - seventh;
var e4=e3 + seventh;
var e5=e4 + seventh;
if (a[e2] < a[e1]) {
var t=a[e2];
a[e2]=a[e1];
a[e1]=t;
}if (a[e3] < a[e2]) {
var t=a[e3];
a[e3]=a[e2];
a[e2]=t;
if (t < a[e1]) {
a[e2]=a[e1];
a[e1]=t;
}}if (a[e4] < a[e3]) {
var t=a[e4];
a[e4]=a[e3];
a[e3]=t;
if (t < a[e2]) {
a[e3]=a[e2];
a[e2]=t;
if (t < a[e1]) {
a[e2]=a[e1];
a[e1]=t;
}}}if (a[e5] < a[e4]) {
var t=a[e5];
a[e5]=a[e4];
a[e4]=t;
if (t < a[e3]) {
a[e4]=a[e3];
a[e3]=t;
if (t < a[e2]) {
a[e3]=a[e2];
a[e2]=t;
if (t < a[e1]) {
a[e2]=a[e1];
a[e1]=t;
}}}}var less=left;
var great=right;
if (a[e1] != a[e2] && a[e2] != a[e3]  && a[e3] != a[e4]  && a[e4] != a[e5] ) {
var pivot1=a[e2];
var pivot2=a[e4];
a[e2]=a[left];
a[e4]=a[right];
while (a[++less] < pivot1);
while (a[--great] > pivot2);
 outer : for (var k=less - 1; ++k <= great; ) {
var ak=a[k];
if (ak < pivot1) {
a[k]=a[less];
a[less]=ak;
++less;
} else if (ak > pivot2) {
while (a[great] > pivot2){
if (great-- == k) {
break outer;
}}
if (a[great] < pivot1) {
a[k]=a[less];
a[less]=a[great];
++less;
} else {
a[k]=a[great];
}a[great]=ak;
--great;
}}
a[left]=a[less - 1];
a[less - 1]=pivot1;
a[right]=a[great + 1];
a[great + 1]=pivot2;
C$.sort$IA$I$I$Z(a, left, less - 2, leftmost);
C$.sort$IA$I$I$Z(a, great + 2, right, false);
if (less < e1 && e5 < great ) {
while (a[less] == pivot1){
++less;
}
while (a[great] == pivot2){
--great;
}
 outer : for (var k=less - 1; ++k <= great; ) {
var ak=a[k];
if (ak == pivot1) {
a[k]=a[less];
a[less]=ak;
++less;
} else if (ak == pivot2) {
while (a[great] == pivot2){
if (great-- == k) {
break outer;
}}
if (a[great] == pivot1) {
a[k]=a[less];
a[less]=pivot1;
++less;
} else {
a[k]=a[great];
}a[great]=ak;
--great;
}}
}C$.sort$IA$I$I$Z(a, less, great, false);
} else {
var pivot=a[e3];
for (var k=less; k <= great; ++k) {
if (a[k] == pivot) {
continue;
}var ak=a[k];
if (ak < pivot) {
a[k]=a[less];
a[less]=ak;
++less;
} else {
while (a[great] > pivot){
--great;
}
if (a[great] < pivot) {
a[k]=a[less];
a[less]=a[great];
++less;
} else {
a[k]=pivot;
}a[great]=ak;
--great;
}}
C$.sort$IA$I$I$Z(a, left, less - 1, leftmost);
C$.sort$IA$I$I$Z(a, great + 1, right, false);
}}, 1);

Clazz.newMeth(C$, 'sort$JA$I$I$JA$I$I',  function (a, left, right, work, workBase, workLen) {
if (right - left < 286) {
C$.sort$JA$I$I$Z(a, left, right, true);
return;
}var run=Clazz.array(Integer.TYPE, [68]);
var count=0;
run[0]=left;
for (var k=left; k < right; run[count]=k) {
if (Long.$lt(a[k],a[k + 1] )) {
while (++k <= right && Long.$le(a[k - 1],a[k] ) );
} else if (Long.$gt(a[k],a[k + 1] )) {
while (++k <= right && Long.$ge(a[k - 1],a[k] ) );
for (var lo=run[count] - 1, hi=k; ++lo < --hi; ) {
var t=a[lo];
a[lo]=a[hi];
a[hi]=t;
}
} else {
for (var m=33; ++k <= right && Long.$eq(a[k - 1],a[k] ) ; ) {
if (--m == 0) {
C$.sort$JA$I$I$Z(a, left, right, true);
return;
}}
}if (++count == 67) {
C$.sort$JA$I$I$Z(a, left, right, true);
return;
}}
if (run[count] == right++) {
run[++count]=right;
} else if (count == 1) {
return;
}var odd=($b$[0] = 0, $b$[0]);
for (var n=1; (n<<=1) < count; odd=($b$[0] = odd^(1), $b$[0])) ;
var b;
var ao;
var bo;
var blen=right - left;
if (work == null  || workLen < blen  || workBase + blen > work.length ) {
work=Clazz.array(Long.TYPE, [blen]);
workBase=0;
}if (odd == 0) {
System.arraycopy$O$I$O$I$I(a, left, work, workBase, blen);
b=a;
bo=0;
a=work;
ao=workBase - left;
} else {
b=work;
ao=0;
bo=workBase - left;
}for (var last; count > 1; count=last) {
for (var k=(last=0) + 2; k <= count; k+=2) {
var hi=run[k];
var mi=run[k - 1];
for (var i=run[k - 2], p=i, q=mi; i < hi; ++i) {
if (q >= hi || p < mi && Long.$le(a[p + ao],a[q + ao] )  ) {
b[i + bo]=a[p++ + ao];
} else {
b[i + bo]=a[q++ + ao];
}}
run[++last]=hi;
}
if ((count & 1) != 0) {
for (var i=right, lo=run[count - 1]; --i >= lo; b[i + bo]=a[i + ao]) ;
run[++last]=right;
}var t=a;
a=b;
b=t;
var o=ao;
ao=bo;
bo=o;
}
}, 1);

Clazz.newMeth(C$, 'sort$JA$I$I$Z',  function (a, left, right, leftmost) {
var length=right - left + 1;
if (length < 47) {
if (leftmost) {
for (var i=left, j=i; i < right; j=++i) {
var ai=a[i + 1];
while (Long.$lt(ai,a[j] )){
a[j + 1]=a[j];
if (j-- == left) {
break;
}}
a[j + 1]=ai;
}
} else {
do {
if (left >= right) {
return;
}} while (Long.$ge(a[++left],a[left - 1] ));
for (var k=left; ++left <= right; k=++left) {
var a1=a[k];
var a2=a[left];
if (Long.$lt(a1,a2 )) {
a2=a1;
a1=a[left];
}while (Long.$lt(a1,a[--k] )){
a[k + 2]=a[k];
}
a[++k + 1]=a1;
while (Long.$lt(a2,a[--k] )){
a[k + 1]=a[k];
}
a[k + 1]=a2;
}
var last=a[right];
while (Long.$lt(last,a[--right] )){
a[right + 1]=a[right];
}
a[right + 1]=last;
}return;
}var seventh=(length >> 3) + (length >> 6) + 1 ;
var e3=(left + right) >>> 1;
var e2=e3 - seventh;
var e1=e2 - seventh;
var e4=e3 + seventh;
var e5=e4 + seventh;
if (Long.$lt(a[e2],a[e1] )) {
var t=a[e2];
a[e2]=a[e1];
a[e1]=t;
}if (Long.$lt(a[e3],a[e2] )) {
var t=a[e3];
a[e3]=a[e2];
a[e2]=t;
if (Long.$lt(t,a[e1] )) {
a[e2]=a[e1];
a[e1]=t;
}}if (Long.$lt(a[e4],a[e3] )) {
var t=a[e4];
a[e4]=a[e3];
a[e3]=t;
if (Long.$lt(t,a[e2] )) {
a[e3]=a[e2];
a[e2]=t;
if (Long.$lt(t,a[e1] )) {
a[e2]=a[e1];
a[e1]=t;
}}}if (Long.$lt(a[e5],a[e4] )) {
var t=a[e5];
a[e5]=a[e4];
a[e4]=t;
if (Long.$lt(t,a[e3] )) {
a[e4]=a[e3];
a[e3]=t;
if (Long.$lt(t,a[e2] )) {
a[e3]=a[e2];
a[e2]=t;
if (Long.$lt(t,a[e1] )) {
a[e2]=a[e1];
a[e1]=t;
}}}}var less=left;
var great=right;
if (Long.$ne(a[e1],a[e2] ) && Long.$ne(a[e2],a[e3] )  && Long.$ne(a[e3],a[e4] )  && Long.$ne(a[e4],a[e5] ) ) {
var pivot1=a[e2];
var pivot2=a[e4];
a[e2]=a[left];
a[e4]=a[right];
while (Long.$lt(a[++less],pivot1 ));
while (Long.$gt(a[--great],pivot2 ));
 outer : for (var k=less - 1; ++k <= great; ) {
var ak=a[k];
if (Long.$lt(ak,pivot1 )) {
a[k]=a[less];
a[less]=ak;
++less;
} else if (Long.$gt(ak,pivot2 )) {
while (Long.$gt(a[great],pivot2 )){
if (great-- == k) {
break outer;
}}
if (Long.$lt(a[great],pivot1 )) {
a[k]=a[less];
a[less]=a[great];
++less;
} else {
a[k]=a[great];
}a[great]=ak;
--great;
}}
a[left]=a[less - 1];
a[less - 1]=pivot1;
a[right]=a[great + 1];
a[great + 1]=pivot2;
C$.sort$JA$I$I$Z(a, left, less - 2, leftmost);
C$.sort$JA$I$I$Z(a, great + 2, right, false);
if (less < e1 && e5 < great ) {
while (Long.$eq(a[less],pivot1 )){
++less;
}
while (Long.$eq(a[great],pivot2 )){
--great;
}
 outer : for (var k=less - 1; ++k <= great; ) {
var ak=a[k];
if (Long.$eq(ak,pivot1 )) {
a[k]=a[less];
a[less]=ak;
++less;
} else if (Long.$eq(ak,pivot2 )) {
while (Long.$eq(a[great],pivot2 )){
if (great-- == k) {
break outer;
}}
if (Long.$eq(a[great],pivot1 )) {
a[k]=a[less];
a[less]=pivot1;
++less;
} else {
a[k]=a[great];
}a[great]=ak;
--great;
}}
}C$.sort$JA$I$I$Z(a, less, great, false);
} else {
var pivot=a[e3];
for (var k=less; k <= great; ++k) {
if (Long.$eq(a[k],pivot )) {
continue;
}var ak=a[k];
if (Long.$lt(ak,pivot )) {
a[k]=a[less];
a[less]=ak;
++less;
} else {
while (Long.$gt(a[great],pivot )){
--great;
}
if (Long.$lt(a[great],pivot )) {
a[k]=a[less];
a[less]=a[great];
++less;
} else {
a[k]=pivot;
}a[great]=ak;
--great;
}}
C$.sort$JA$I$I$Z(a, left, less - 1, leftmost);
C$.sort$JA$I$I$Z(a, great + 1, right, false);
}}, 1);

Clazz.newMeth(C$, 'sort$HA$I$I$HA$I$I',  function (a, left, right, work, workBase, workLen) {
if (right - left > 3200) {
var count=Clazz.array(Integer.TYPE, [65536]);
for (var i=left - 1; ++i <= right; count[a[i] - -32768]++) ;
for (var i=65536, k=right + 1; k > left; ) {
while (count[--i] == 0);
var value=($s$[0] = (i + -32768), $s$[0]);
var s=count[i];
do {
a[--k]=value;
} while (--s > 0);
}
} else {
C$.doSort$HA$I$I$HA$I$I(a, left, right, work, workBase, workLen);
}}, 1);

Clazz.newMeth(C$, 'doSort$HA$I$I$HA$I$I',  function (a, left, right, work, workBase, workLen) {
if (right - left < 286) {
C$.sort$HA$I$I$Z(a, left, right, true);
return;
}var run=Clazz.array(Integer.TYPE, [68]);
var count=0;
run[0]=left;
for (var k=left; k < right; run[count]=k) {
if (a[k] < a[k + 1]) {
while (++k <= right && a[k - 1] <= a[k] );
} else if (a[k] > a[k + 1]) {
while (++k <= right && a[k - 1] >= a[k] );
for (var lo=run[count] - 1, hi=k; ++lo < --hi; ) {
var t=a[lo];
a[lo]=a[hi];
a[hi]=t;
}
} else {
for (var m=33; ++k <= right && a[k - 1] == a[k] ; ) {
if (--m == 0) {
C$.sort$HA$I$I$Z(a, left, right, true);
return;
}}
}if (++count == 67) {
C$.sort$HA$I$I$Z(a, left, right, true);
return;
}}
if (run[count] == right++) {
run[++count]=right;
} else if (count == 1) {
return;
}var odd=($b$[0] = 0, $b$[0]);
for (var n=1; (n<<=1) < count; odd=($b$[0] = odd^(1), $b$[0])) ;
var b;
var ao;
var bo;
var blen=right - left;
if (work == null  || workLen < blen  || workBase + blen > work.length ) {
work=Clazz.array(Short.TYPE, [blen]);
workBase=0;
}if (odd == 0) {
System.arraycopy$O$I$O$I$I(a, left, work, workBase, blen);
b=a;
bo=0;
a=work;
ao=workBase - left;
} else {
b=work;
ao=0;
bo=workBase - left;
}for (var last; count > 1; count=last) {
for (var k=(last=0) + 2; k <= count; k+=2) {
var hi=run[k];
var mi=run[k - 1];
for (var i=run[k - 2], p=i, q=mi; i < hi; ++i) {
if (q >= hi || p < mi && a[p + ao] <= a[q + ao]  ) {
b[i + bo]=a[p++ + ao];
} else {
b[i + bo]=a[q++ + ao];
}}
run[++last]=hi;
}
if ((count & 1) != 0) {
for (var i=right, lo=run[count - 1]; --i >= lo; b[i + bo]=a[i + ao]) ;
run[++last]=right;
}var t=a;
a=b;
b=t;
var o=ao;
ao=bo;
bo=o;
}
}, 1);

Clazz.newMeth(C$, 'sort$HA$I$I$Z',  function (a, left, right, leftmost) {
var length=right - left + 1;
if (length < 47) {
if (leftmost) {
for (var i=left, j=i; i < right; j=++i) {
var ai=a[i + 1];
while (ai < a[j]){
a[j + 1]=a[j];
if (j-- == left) {
break;
}}
a[j + 1]=ai;
}
} else {
do {
if (left >= right) {
return;
}} while (a[++left] >= a[left - 1]);
for (var k=left; ++left <= right; k=++left) {
var a1=a[k];
var a2=a[left];
if (a1 < a2) {
a2=a1;
a1=a[left];
}while (a1 < a[--k]){
a[k + 2]=a[k];
}
a[++k + 1]=a1;
while (a2 < a[--k]){
a[k + 1]=a[k];
}
a[k + 1]=a2;
}
var last=a[right];
while (last < a[--right]){
a[right + 1]=a[right];
}
a[right + 1]=last;
}return;
}var seventh=(length >> 3) + (length >> 6) + 1 ;
var e3=(left + right) >>> 1;
var e2=e3 - seventh;
var e1=e2 - seventh;
var e4=e3 + seventh;
var e5=e4 + seventh;
if (a[e2] < a[e1]) {
var t=a[e2];
a[e2]=a[e1];
a[e1]=t;
}if (a[e3] < a[e2]) {
var t=a[e3];
a[e3]=a[e2];
a[e2]=t;
if (t < a[e1]) {
a[e2]=a[e1];
a[e1]=t;
}}if (a[e4] < a[e3]) {
var t=a[e4];
a[e4]=a[e3];
a[e3]=t;
if (t < a[e2]) {
a[e3]=a[e2];
a[e2]=t;
if (t < a[e1]) {
a[e2]=a[e1];
a[e1]=t;
}}}if (a[e5] < a[e4]) {
var t=a[e5];
a[e5]=a[e4];
a[e4]=t;
if (t < a[e3]) {
a[e4]=a[e3];
a[e3]=t;
if (t < a[e2]) {
a[e3]=a[e2];
a[e2]=t;
if (t < a[e1]) {
a[e2]=a[e1];
a[e1]=t;
}}}}var less=left;
var great=right;
if (a[e1] != a[e2] && a[e2] != a[e3]  && a[e3] != a[e4]  && a[e4] != a[e5] ) {
var pivot1=a[e2];
var pivot2=a[e4];
a[e2]=a[left];
a[e4]=a[right];
while (a[++less] < pivot1);
while (a[--great] > pivot2);
 outer : for (var k=less - 1; ++k <= great; ) {
var ak=a[k];
if (ak < pivot1) {
a[k]=a[less];
a[less]=ak;
++less;
} else if (ak > pivot2) {
while (a[great] > pivot2){
if (great-- == k) {
break outer;
}}
if (a[great] < pivot1) {
a[k]=a[less];
a[less]=a[great];
++less;
} else {
a[k]=a[great];
}a[great]=ak;
--great;
}}
a[left]=a[less - 1];
a[less - 1]=pivot1;
a[right]=a[great + 1];
a[great + 1]=pivot2;
C$.sort$HA$I$I$Z(a, left, less - 2, leftmost);
C$.sort$HA$I$I$Z(a, great + 2, right, false);
if (less < e1 && e5 < great ) {
while (a[less] == pivot1){
++less;
}
while (a[great] == pivot2){
--great;
}
 outer : for (var k=less - 1; ++k <= great; ) {
var ak=a[k];
if (ak == pivot1) {
a[k]=a[less];
a[less]=ak;
++less;
} else if (ak == pivot2) {
while (a[great] == pivot2){
if (great-- == k) {
break outer;
}}
if (a[great] == pivot1) {
a[k]=a[less];
a[less]=pivot1;
++less;
} else {
a[k]=a[great];
}a[great]=ak;
--great;
}}
}C$.sort$HA$I$I$Z(a, less, great, false);
} else {
var pivot=a[e3];
for (var k=less; k <= great; ++k) {
if (a[k] == pivot) {
continue;
}var ak=a[k];
if (ak < pivot) {
a[k]=a[less];
a[less]=ak;
++less;
} else {
while (a[great] > pivot){
--great;
}
if (a[great] < pivot) {
a[k]=a[less];
a[less]=a[great];
++less;
} else {
a[k]=pivot;
}a[great]=ak;
--great;
}}
C$.sort$HA$I$I$Z(a, left, less - 1, leftmost);
C$.sort$HA$I$I$Z(a, great + 1, right, false);
}}, 1);

Clazz.newMeth(C$, 'sort$CA$I$I$CA$I$I',  function (a, left, right, work, workBase, workLen) {
if (right - left > 3200) {
var count=Clazz.array(Integer.TYPE, [65536]);
for (var i=left - 1; ++i <= right; count[(a[i]).$c()]++) ;
for (var i=65536, k=right + 1; k > left; ) {
while (count[--i] == 0);
var value=String.fromCharCode(i);
var s=count[i];
do {
a[--k]=value;
} while (--s > 0);
}
} else {
C$.doSort$CA$I$I$CA$I$I(a, left, right, work, workBase, workLen);
}}, 1);

Clazz.newMeth(C$, 'doSort$CA$I$I$CA$I$I',  function (a, left, right, work, workBase, workLen) {
if (right - left < 286) {
C$.sort$CA$I$I$Z(a, left, right, true);
return;
}var run=Clazz.array(Integer.TYPE, [68]);
var count=0;
run[0]=left;
for (var k=left; k < right; run[count]=k) {
if (a[k] < a[k + 1]) {
while (++k <= right && a[k - 1] <= a[k] );
} else if (a[k] > a[k + 1]) {
while (++k <= right && a[k - 1] >= a[k] );
for (var lo=run[count] - 1, hi=k; ++lo < --hi; ) {
var t=a[lo];
a[lo]=a[hi];
a[hi]=t;
}
} else {
for (var m=33; ++k <= right && a[k - 1] == a[k] ; ) {
if (--m == 0) {
C$.sort$CA$I$I$Z(a, left, right, true);
return;
}}
}if (++count == 67) {
C$.sort$CA$I$I$Z(a, left, right, true);
return;
}}
if (run[count] == right++) {
run[++count]=right;
} else if (count == 1) {
return;
}var odd=($b$[0] = 0, $b$[0]);
for (var n=1; (n<<=1) < count; odd=($b$[0] = odd^(1), $b$[0])) ;
var b;
var ao;
var bo;
var blen=right - left;
if (work == null  || workLen < blen  || workBase + blen > work.length ) {
work=Clazz.array(Character.TYPE, [blen]);
workBase=0;
}if (odd == 0) {
System.arraycopy$O$I$O$I$I(a, left, work, workBase, blen);
b=a;
bo=0;
a=work;
ao=workBase - left;
} else {
b=work;
ao=0;
bo=workBase - left;
}for (var last; count > 1; count=last) {
for (var k=(last=0) + 2; k <= count; k+=2) {
var hi=run[k];
var mi=run[k - 1];
for (var i=run[k - 2], p=i, q=mi; i < hi; ++i) {
if (q >= hi || p < mi && a[p + ao] <= a[q + ao]  ) {
b[i + bo]=a[p++ + ao];
} else {
b[i + bo]=a[q++ + ao];
}}
run[++last]=hi;
}
if ((count & 1) != 0) {
for (var i=right, lo=run[count - 1]; --i >= lo; b[i + bo]=a[i + ao]) ;
run[++last]=right;
}var t=a;
a=b;
b=t;
var o=ao;
ao=bo;
bo=o;
}
}, 1);

Clazz.newMeth(C$, 'sort$CA$I$I$Z',  function (a, left, right, leftmost) {
var length=right - left + 1;
if (length < 47) {
if (leftmost) {
for (var i=left, j=i; i < right; j=++i) {
var ai=a[i + 1];
while (ai < a[j]){
a[j + 1]=a[j];
if (j-- == left) {
break;
}}
a[j + 1]=ai;
}
} else {
do {
if (left >= right) {
return;
}} while (a[++left] >= a[left - 1]);
for (var k=left; ++left <= right; k=++left) {
var a1=a[k];
var a2=a[left];
if (a1 < a2) {
a2=a1;
a1=a[left];
}while (a1 < a[--k]){
a[k + 2]=a[k];
}
a[++k + 1]=a1;
while (a2 < a[--k]){
a[k + 1]=a[k];
}
a[k + 1]=a2;
}
var last=a[right];
while (last < a[--right]){
a[right + 1]=a[right];
}
a[right + 1]=last;
}return;
}var seventh=(length >> 3) + (length >> 6) + 1 ;
var e3=(left + right) >>> 1;
var e2=e3 - seventh;
var e1=e2 - seventh;
var e4=e3 + seventh;
var e5=e4 + seventh;
if (a[e2] < a[e1]) {
var t=a[e2];
a[e2]=a[e1];
a[e1]=t;
}if (a[e3] < a[e2]) {
var t=a[e3];
a[e3]=a[e2];
a[e2]=t;
if (t < a[e1]) {
a[e2]=a[e1];
a[e1]=t;
}}if (a[e4] < a[e3]) {
var t=a[e4];
a[e4]=a[e3];
a[e3]=t;
if (t < a[e2]) {
a[e3]=a[e2];
a[e2]=t;
if (t < a[e1]) {
a[e2]=a[e1];
a[e1]=t;
}}}if (a[e5] < a[e4]) {
var t=a[e5];
a[e5]=a[e4];
a[e4]=t;
if (t < a[e3]) {
a[e4]=a[e3];
a[e3]=t;
if (t < a[e2]) {
a[e3]=a[e2];
a[e2]=t;
if (t < a[e1]) {
a[e2]=a[e1];
a[e1]=t;
}}}}var less=left;
var great=right;
if (a[e1] != a[e2] && a[e2] != a[e3]  && a[e3] != a[e4]  && a[e4] != a[e5] ) {
var pivot1=a[e2];
var pivot2=a[e4];
a[e2]=a[left];
a[e4]=a[right];
while (a[++less] < pivot1);
while (a[--great] > pivot2);
 outer : for (var k=less - 1; ++k <= great; ) {
var ak=a[k];
if (ak < pivot1) {
a[k]=a[less];
a[less]=ak;
++less;
} else if (ak > pivot2) {
while (a[great] > pivot2){
if (great-- == k) {
break outer;
}}
if (a[great] < pivot1) {
a[k]=a[less];
a[less]=a[great];
++less;
} else {
a[k]=a[great];
}a[great]=ak;
--great;
}}
a[left]=a[less - 1];
a[less - 1]=pivot1;
a[right]=a[great + 1];
a[great + 1]=pivot2;
C$.sort$CA$I$I$Z(a, left, less - 2, leftmost);
C$.sort$CA$I$I$Z(a, great + 2, right, false);
if (less < e1 && e5 < great ) {
while (a[less] == pivot1){
++less;
}
while (a[great] == pivot2){
--great;
}
 outer : for (var k=less - 1; ++k <= great; ) {
var ak=a[k];
if (ak == pivot1) {
a[k]=a[less];
a[less]=ak;
++less;
} else if (ak == pivot2) {
while (a[great] == pivot2){
if (great-- == k) {
break outer;
}}
if (a[great] == pivot1) {
a[k]=a[less];
a[less]=pivot1;
++less;
} else {
a[k]=a[great];
}a[great]=ak;
--great;
}}
}C$.sort$CA$I$I$Z(a, less, great, false);
} else {
var pivot=a[e3];
for (var k=less; k <= great; ++k) {
if (a[k] == pivot) {
continue;
}var ak=a[k];
if (ak < pivot) {
a[k]=a[less];
a[less]=ak;
++less;
} else {
while (a[great] > pivot){
--great;
}
if (a[great] < pivot) {
a[k]=a[less];
a[less]=a[great];
++less;
} else {
a[k]=pivot;
}a[great]=ak;
--great;
}}
C$.sort$CA$I$I$Z(a, left, less - 1, leftmost);
C$.sort$CA$I$I$Z(a, great + 1, right, false);
}}, 1);

Clazz.newMeth(C$, 'sort$BA$I$I',  function (a, left, right) {
if (right - left > 29) {
var count=Clazz.array(Integer.TYPE, [256]);
for (var i=left - 1; ++i <= right; count[a[i] - -128]++) ;
for (var i=256, k=right + 1; k > left; ) {
while (count[--i] == 0);
var value=($b$[0] = (i + -128), $b$[0]);
var s=count[i];
do {
a[--k]=value;
} while (--s > 0);
}
} else {
for (var i=left, j=i; i < right; j=++i) {
var ai=a[i + 1];
while (ai < a[j]){
a[j + 1]=a[j];
if (j-- == left) {
break;
}}
a[j + 1]=ai;
}
}}, 1);

Clazz.newMeth(C$, 'sort$FA$I$I$FA$I$I',  function (a, left, right, work, workBase, workLen) {
while (left <= right && Float.isNaN$F(a[right]) ){
--right;
}
for (var k=right; --k >= left; ) {
var ak=a[k];
if (ak != ak ) {
a[k]=a[right];
a[right]=ak;
--right;
}}
C$.doSort$FA$I$I$FA$I$I(a, left, right, work, workBase, workLen);
var hi=right;
while (left < hi){
var middle=(left + hi) >>> 1;
var middleValue=a[middle];
if (middleValue < 0.0 ) {
left=middle + 1;
} else {
hi=middle;
}}
while (left <= right && Float.floatToRawIntBits$F(a[left]) < 0 ){
++left;
}
for (var k=left, p=left - 1; ++k <= right; ) {
var ak=a[k];
if (ak != 0.0 ) {
break;
}if (Float.floatToRawIntBits$F(ak) < 0) {
a[k]=0.0;
a[++p]=-0.0;
}}
}, 1);

Clazz.newMeth(C$, 'doSort$FA$I$I$FA$I$I',  function (a, left, right, work, workBase, workLen) {
if (right - left < 286) {
C$.sort$FA$I$I$Z(a, left, right, true);
return;
}var run=Clazz.array(Integer.TYPE, [68]);
var count=0;
run[0]=left;
for (var k=left; k < right; run[count]=k) {
if (a[k] < a[k + 1] ) {
while (++k <= right && a[k - 1] <= a[k]  );
} else if (a[k] > a[k + 1] ) {
while (++k <= right && a[k - 1] >= a[k]  );
for (var lo=run[count] - 1, hi=k; ++lo < --hi; ) {
var t=a[lo];
a[lo]=a[hi];
a[hi]=t;
}
} else {
for (var m=33; ++k <= right && a[k - 1] == a[k]  ; ) {
if (--m == 0) {
C$.sort$FA$I$I$Z(a, left, right, true);
return;
}}
}if (++count == 67) {
C$.sort$FA$I$I$Z(a, left, right, true);
return;
}}
if (run[count] == right++) {
run[++count]=right;
} else if (count == 1) {
return;
}var odd=($b$[0] = 0, $b$[0]);
for (var n=1; (n<<=1) < count; odd=($b$[0] = odd^(1), $b$[0])) ;
var b;
var ao;
var bo;
var blen=right - left;
if (work == null  || workLen < blen  || workBase + blen > work.length ) {
work=Clazz.array(Float.TYPE, [blen]);
workBase=0;
}if (odd == 0) {
System.arraycopy$O$I$O$I$I(a, left, work, workBase, blen);
b=a;
bo=0;
a=work;
ao=workBase - left;
} else {
b=work;
ao=0;
bo=workBase - left;
}for (var last; count > 1; count=last) {
for (var k=(last=0) + 2; k <= count; k+=2) {
var hi=run[k];
var mi=run[k - 1];
for (var i=run[k - 2], p=i, q=mi; i < hi; ++i) {
if (q >= hi || p < mi && a[p + ao] <= a[q + ao]   ) {
b[i + bo]=a[p++ + ao];
} else {
b[i + bo]=a[q++ + ao];
}}
run[++last]=hi;
}
if ((count & 1) != 0) {
for (var i=right, lo=run[count - 1]; --i >= lo; b[i + bo]=a[i + ao]) ;
run[++last]=right;
}var t=a;
a=b;
b=t;
var o=ao;
ao=bo;
bo=o;
}
}, 1);

Clazz.newMeth(C$, 'sort$FA$I$I$Z',  function (a, left, right, leftmost) {
var length=right - left + 1;
if (length < 47) {
if (leftmost) {
for (var i=left, j=i; i < right; j=++i) {
var ai=a[i + 1];
while (ai < a[j] ){
a[j + 1]=a[j];
if (j-- == left) {
break;
}}
a[j + 1]=ai;
}
} else {
do {
if (left >= right) {
return;
}} while (a[++left] >= a[left - 1] );
for (var k=left; ++left <= right; k=++left) {
var a1=a[k];
var a2=a[left];
if (a1 < a2 ) {
a2=a1;
a1=a[left];
}while (a1 < a[--k] ){
a[k + 2]=a[k];
}
a[++k + 1]=a1;
while (a2 < a[--k] ){
a[k + 1]=a[k];
}
a[k + 1]=a2;
}
var last=a[right];
while (last < a[--right] ){
a[right + 1]=a[right];
}
a[right + 1]=last;
}return;
}var seventh=(length >> 3) + (length >> 6) + 1 ;
var e3=(left + right) >>> 1;
var e2=e3 - seventh;
var e1=e2 - seventh;
var e4=e3 + seventh;
var e5=e4 + seventh;
if (a[e2] < a[e1] ) {
var t=a[e2];
a[e2]=a[e1];
a[e1]=t;
}if (a[e3] < a[e2] ) {
var t=a[e3];
a[e3]=a[e2];
a[e2]=t;
if (t < a[e1] ) {
a[e2]=a[e1];
a[e1]=t;
}}if (a[e4] < a[e3] ) {
var t=a[e4];
a[e4]=a[e3];
a[e3]=t;
if (t < a[e2] ) {
a[e3]=a[e2];
a[e2]=t;
if (t < a[e1] ) {
a[e2]=a[e1];
a[e1]=t;
}}}if (a[e5] < a[e4] ) {
var t=a[e5];
a[e5]=a[e4];
a[e4]=t;
if (t < a[e3] ) {
a[e4]=a[e3];
a[e3]=t;
if (t < a[e2] ) {
a[e3]=a[e2];
a[e2]=t;
if (t < a[e1] ) {
a[e2]=a[e1];
a[e1]=t;
}}}}var less=left;
var great=right;
if (a[e1] != a[e2]  && a[e2] != a[e3]   && a[e3] != a[e4]   && a[e4] != a[e5]  ) {
var pivot1=a[e2];
var pivot2=a[e4];
a[e2]=a[left];
a[e4]=a[right];
while (a[++less] < pivot1 );
while (a[--great] > pivot2 );
 outer : for (var k=less - 1; ++k <= great; ) {
var ak=a[k];
if (ak < pivot1 ) {
a[k]=a[less];
a[less]=ak;
++less;
} else if (ak > pivot2 ) {
while (a[great] > pivot2 ){
if (great-- == k) {
break outer;
}}
if (a[great] < pivot1 ) {
a[k]=a[less];
a[less]=a[great];
++less;
} else {
a[k]=a[great];
}a[great]=ak;
--great;
}}
a[left]=a[less - 1];
a[less - 1]=pivot1;
a[right]=a[great + 1];
a[great + 1]=pivot2;
C$.sort$FA$I$I$Z(a, left, less - 2, leftmost);
C$.sort$FA$I$I$Z(a, great + 2, right, false);
if (less < e1 && e5 < great ) {
while (a[less] == pivot1 ){
++less;
}
while (a[great] == pivot2 ){
--great;
}
 outer : for (var k=less - 1; ++k <= great; ) {
var ak=a[k];
if (ak == pivot1 ) {
a[k]=a[less];
a[less]=ak;
++less;
} else if (ak == pivot2 ) {
while (a[great] == pivot2 ){
if (great-- == k) {
break outer;
}}
if (a[great] == pivot1 ) {
a[k]=a[less];
a[less]=a[great];
++less;
} else {
a[k]=a[great];
}a[great]=ak;
--great;
}}
}C$.sort$FA$I$I$Z(a, less, great, false);
} else {
var pivot=a[e3];
for (var k=less; k <= great; ++k) {
if (a[k] == pivot ) {
continue;
}var ak=a[k];
if (ak < pivot ) {
a[k]=a[less];
a[less]=ak;
++less;
} else {
while (a[great] > pivot ){
--great;
}
if (a[great] < pivot ) {
a[k]=a[less];
a[less]=a[great];
++less;
} else {
a[k]=a[great];
}a[great]=ak;
--great;
}}
C$.sort$FA$I$I$Z(a, left, less - 1, leftmost);
C$.sort$FA$I$I$Z(a, great + 1, right, false);
}}, 1);

Clazz.newMeth(C$, 'sort$DA$I$I$DA$I$I',  function (a, left, right, work, workBase, workLen) {
while (left <= right && Double.isNaN$D(a[right]) ){
--right;
}
for (var k=right; --k >= left; ) {
var ak=a[k];
if (ak != ak ) {
a[k]=a[right];
a[right]=ak;
--right;
}}
C$.doSort$DA$I$I$DA$I$I(a, left, right, work, workBase, workLen);
var hi=right;
while (left < hi){
var middle=(left + hi) >>> 1;
var middleValue=a[middle];
if (middleValue < 0.0 ) {
left=middle + 1;
} else {
hi=middle;
}}
while (left <= right && Long.$lt(Double.doubleToRawLongBits$D(a[left]),0 ) ){
++left;
}
for (var k=left, p=left - 1; ++k <= right; ) {
var ak=a[k];
if (ak != 0.0 ) {
break;
}if (Long.$lt(Double.doubleToRawLongBits$D(ak),0 )) {
a[k]=0.0;
a[++p]=-0.0;
}}
}, 1);

Clazz.newMeth(C$, 'doSort$DA$I$I$DA$I$I',  function (a, left, right, work, workBase, workLen) {
if (right - left < 286) {
C$.sort$DA$I$I$Z(a, left, right, true);
return;
}var run=Clazz.array(Integer.TYPE, [68]);
var count=0;
run[0]=left;
for (var k=left; k < right; run[count]=k) {
if (a[k] < a[k + 1] ) {
while (++k <= right && a[k - 1] <= a[k]  );
} else if (a[k] > a[k + 1] ) {
while (++k <= right && a[k - 1] >= a[k]  );
for (var lo=run[count] - 1, hi=k; ++lo < --hi; ) {
var t=a[lo];
a[lo]=a[hi];
a[hi]=t;
}
} else {
for (var m=33; ++k <= right && a[k - 1] == a[k]  ; ) {
if (--m == 0) {
C$.sort$DA$I$I$Z(a, left, right, true);
return;
}}
}if (++count == 67) {
C$.sort$DA$I$I$Z(a, left, right, true);
return;
}}
if (run[count] == right++) {
run[++count]=right;
} else if (count == 1) {
return;
}var odd=($b$[0] = 0, $b$[0]);
for (var n=1; (n<<=1) < count; odd=($b$[0] = odd^(1), $b$[0])) ;
var b;
var ao;
var bo;
var blen=right - left;
if (work == null  || workLen < blen  || workBase + blen > work.length ) {
work=Clazz.array(Double.TYPE, [blen]);
workBase=0;
}if (odd == 0) {
System.arraycopy$O$I$O$I$I(a, left, work, workBase, blen);
b=a;
bo=0;
a=work;
ao=workBase - left;
} else {
b=work;
ao=0;
bo=workBase - left;
}for (var last; count > 1; count=last) {
for (var k=(last=0) + 2; k <= count; k+=2) {
var hi=run[k];
var mi=run[k - 1];
for (var i=run[k - 2], p=i, q=mi; i < hi; ++i) {
if (q >= hi || p < mi && a[p + ao] <= a[q + ao]   ) {
b[i + bo]=a[p++ + ao];
} else {
b[i + bo]=a[q++ + ao];
}}
run[++last]=hi;
}
if ((count & 1) != 0) {
for (var i=right, lo=run[count - 1]; --i >= lo; b[i + bo]=a[i + ao]) ;
run[++last]=right;
}var t=a;
a=b;
b=t;
var o=ao;
ao=bo;
bo=o;
}
}, 1);

Clazz.newMeth(C$, 'sort$DA$I$I$Z',  function (a, left, right, leftmost) {
var length=right - left + 1;
if (length < 47) {
if (leftmost) {
for (var i=left, j=i; i < right; j=++i) {
var ai=a[i + 1];
while (ai < a[j] ){
a[j + 1]=a[j];
if (j-- == left) {
break;
}}
a[j + 1]=ai;
}
} else {
do {
if (left >= right) {
return;
}} while (a[++left] >= a[left - 1] );
for (var k=left; ++left <= right; k=++left) {
var a1=a[k];
var a2=a[left];
if (a1 < a2 ) {
a2=a1;
a1=a[left];
}while (a1 < a[--k] ){
a[k + 2]=a[k];
}
a[++k + 1]=a1;
while (a2 < a[--k] ){
a[k + 1]=a[k];
}
a[k + 1]=a2;
}
var last=a[right];
while (last < a[--right] ){
a[right + 1]=a[right];
}
a[right + 1]=last;
}return;
}var seventh=(length >> 3) + (length >> 6) + 1 ;
var e3=(left + right) >>> 1;
var e2=e3 - seventh;
var e1=e2 - seventh;
var e4=e3 + seventh;
var e5=e4 + seventh;
if (a[e2] < a[e1] ) {
var t=a[e2];
a[e2]=a[e1];
a[e1]=t;
}if (a[e3] < a[e2] ) {
var t=a[e3];
a[e3]=a[e2];
a[e2]=t;
if (t < a[e1] ) {
a[e2]=a[e1];
a[e1]=t;
}}if (a[e4] < a[e3] ) {
var t=a[e4];
a[e4]=a[e3];
a[e3]=t;
if (t < a[e2] ) {
a[e3]=a[e2];
a[e2]=t;
if (t < a[e1] ) {
a[e2]=a[e1];
a[e1]=t;
}}}if (a[e5] < a[e4] ) {
var t=a[e5];
a[e5]=a[e4];
a[e4]=t;
if (t < a[e3] ) {
a[e4]=a[e3];
a[e3]=t;
if (t < a[e2] ) {
a[e3]=a[e2];
a[e2]=t;
if (t < a[e1] ) {
a[e2]=a[e1];
a[e1]=t;
}}}}var less=left;
var great=right;
if (a[e1] != a[e2]  && a[e2] != a[e3]   && a[e3] != a[e4]   && a[e4] != a[e5]  ) {
var pivot1=a[e2];
var pivot2=a[e4];
a[e2]=a[left];
a[e4]=a[right];
while (a[++less] < pivot1 );
while (a[--great] > pivot2 );
 outer : for (var k=less - 1; ++k <= great; ) {
var ak=a[k];
if (ak < pivot1 ) {
a[k]=a[less];
a[less]=ak;
++less;
} else if (ak > pivot2 ) {
while (a[great] > pivot2 ){
if (great-- == k) {
break outer;
}}
if (a[great] < pivot1 ) {
a[k]=a[less];
a[less]=a[great];
++less;
} else {
a[k]=a[great];
}a[great]=ak;
--great;
}}
a[left]=a[less - 1];
a[less - 1]=pivot1;
a[right]=a[great + 1];
a[great + 1]=pivot2;
C$.sort$DA$I$I$Z(a, left, less - 2, leftmost);
C$.sort$DA$I$I$Z(a, great + 2, right, false);
if (less < e1 && e5 < great ) {
while (a[less] == pivot1 ){
++less;
}
while (a[great] == pivot2 ){
--great;
}
 outer : for (var k=less - 1; ++k <= great; ) {
var ak=a[k];
if (ak == pivot1 ) {
a[k]=a[less];
a[less]=ak;
++less;
} else if (ak == pivot2 ) {
while (a[great] == pivot2 ){
if (great-- == k) {
break outer;
}}
if (a[great] == pivot1 ) {
a[k]=a[less];
a[less]=a[great];
++less;
} else {
a[k]=a[great];
}a[great]=ak;
--great;
}}
}C$.sort$DA$I$I$Z(a, less, great, false);
} else {
var pivot=a[e3];
for (var k=less; k <= great; ++k) {
if (a[k] == pivot ) {
continue;
}var ak=a[k];
if (ak < pivot ) {
a[k]=a[less];
a[less]=ak;
++less;
} else {
while (a[great] > pivot ){
--great;
}
if (a[great] < pivot ) {
a[k]=a[less];
a[less]=a[great];
++less;
} else {
a[k]=a[great];
}a[great]=ak;
--great;
}}
C$.sort$DA$I$I$Z(a, left, less - 1, leftmost);
C$.sort$DA$I$I$Z(a, great + 1, right, false);
}}, 1);
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
