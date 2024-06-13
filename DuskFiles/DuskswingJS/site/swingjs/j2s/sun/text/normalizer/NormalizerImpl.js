(function(){var P$=Clazz.newPackage("sun.text.normalizer"),I$=[[0,'sun.text.normalizer.UnicodeSet','sun.text.normalizer.ICUData','java.io.BufferedInputStream','sun.text.normalizer.NormalizerDataReader',['sun.text.normalizer.NormalizerImpl','.FCDTrieImpl'],['sun.text.normalizer.NormalizerImpl','.NormTrieImpl'],['sun.text.normalizer.NormalizerImpl','.AuxTrieImpl'],'sun.text.normalizer.IntTrie','java.io.ByteArrayInputStream','sun.text.normalizer.CharTrie','sun.text.normalizer.VersionInfo','sun.text.normalizer.UTF16',['sun.text.normalizer.NormalizerImpl','.DecomposeArgs'],['sun.text.normalizer.NormalizerImpl','.PrevArgs'],['sun.text.normalizer.NormalizerImpl','.NextCCArgs'],['sun.text.normalizer.NormalizerImpl','.ComposePartArgs'],'sun.text.normalizer.NormalizerBase',['sun.text.normalizer.NormalizerImpl','.NextCombiningArgs'],['sun.text.normalizer.NormalizerImpl','.RecomposeArgs'],'sun.text.normalizer.TrieIterator',['sun.text.normalizer.RangeValueIterator','.Element'],'sun.text.normalizer.UnicodeSetIterator','sun.text.normalizer.UCharacterProperty','StringBuffer','sun.text.normalizer.UCharacterIterator']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NormalizerImpl", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['NormTrieImpl',24],['FCDTrieImpl',24],['AuxTrieImpl',24],['DecomposeArgs',26],['NextCCArgs',26],['PrevArgs',26],['NextCombiningArgs',26],['RecomposeArgs',26],['ComposePartArgs',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['isDataLoaded','isFormatVersion_2_1','isFormatVersion_2_2'],'O',['IMPL','sun.text.normalizer.NormalizerImpl','fcdTrieImpl','sun.text.normalizer.NormalizerImpl.FCDTrieImpl','normTrieImpl','sun.text.normalizer.NormalizerImpl.NormTrieImpl','auxTrieImpl','sun.text.normalizer.NormalizerImpl.AuxTrieImpl','indexes','int[]','combiningTable','char[]','+extraData','unicodeVersion','byte[]','nxCache','sun.text.normalizer.UnicodeSet[]','corrigendum4MappingTable','char[][]']]]

Clazz.newMeth(C$, 'getFromIndexesArr$I',  function (index) {
return C$.indexes[index];
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
if (!C$.isDataLoaded) {
var i=$I$(2).getRequiredStream$S("/sun/text/resources/unorm.icu");
var b=Clazz.new_($I$(3,1).c$$java_io_InputStream$I,[i, 25000]);
var reader=Clazz.new_($I$(4,1).c$$java_io_InputStream,[b]);
C$.indexes=reader.readIndexes$I(32);
var normBytes=Clazz.array(Byte.TYPE, [C$.indexes[0]]);
var combiningTableTop=C$.indexes[2];
C$.combiningTable=Clazz.array(Character.TYPE, [combiningTableTop]);
var extraDataTop=C$.indexes[1];
C$.extraData=Clazz.array(Character.TYPE, [extraDataTop]);
var fcdBytes=Clazz.array(Byte.TYPE, [C$.indexes[10]]);
var auxBytes=Clazz.array(Byte.TYPE, [C$.indexes[11]]);
C$.fcdTrieImpl=Clazz.new_($I$(5,1));
C$.normTrieImpl=Clazz.new_($I$(6,1));
C$.auxTrieImpl=Clazz.new_($I$(7,1));
reader.read$BA$BA$BA$CA$CA(normBytes, fcdBytes, auxBytes, C$.extraData, C$.combiningTable);
$I$(6).normTrie=Clazz.new_([Clazz.new_($I$(9,1).c$$BA,[normBytes]), C$.normTrieImpl],$I$(8,1).c$$java_io_InputStream$sun_text_normalizer_Trie_DataManipulate);
$I$(5).fcdTrie=Clazz.new_([Clazz.new_($I$(9,1).c$$BA,[fcdBytes]), C$.fcdTrieImpl],$I$(10,1).c$$java_io_InputStream$sun_text_normalizer_Trie_DataManipulate);
$I$(7).auxTrie=Clazz.new_([Clazz.new_($I$(9,1).c$$BA,[auxBytes]), C$.auxTrieImpl],$I$(10,1).c$$java_io_InputStream$sun_text_normalizer_Trie_DataManipulate);
C$.isDataLoaded=true;
var formatVersion=reader.getDataFormatVersion$();
C$.isFormatVersion_2_1=(formatVersion[0] > 2 || (formatVersion[0] == 2 && formatVersion[1] >= 1 ) );
C$.isFormatVersion_2_2=(formatVersion[0] > 2 || (formatVersion[0] == 2 && formatVersion[1] >= 2 ) );
C$.unicodeVersion=reader.getUnicodeVersion$();
b.close$();
}}, 1);

Clazz.newMeth(C$, 'isHangulWithoutJamoT$C',  function (c) {
c = String.fromCharCode(c.$c()- 44032);
return c.$c() < 11172  && c.$c() % 28 == 0 ;
}, 1);

Clazz.newMeth(C$, 'isNorm32Regular$J',  function (norm32) {
return Long.$lt(norm32,4227858432 );
}, 1);

Clazz.newMeth(C$, 'isNorm32LeadSurrogate$J',  function (norm32) {
return Long.$le(4227858432,norm32 ) && Long.$lt(norm32,4293918720 ) ;
}, 1);

Clazz.newMeth(C$, 'isNorm32HangulOrJamo$J',  function (norm32) {
return Long.$ge(norm32,4293918720 );
}, 1);

Clazz.newMeth(C$, 'isJamoVTNorm32JamoV$J',  function (norm32) {
return Long.$lt(norm32,4294115328 );
}, 1);

Clazz.newMeth(C$, 'getNorm32$C',  function (c) {
return (Long.$and((4294967295),($I$(6).normTrie.getLeadValue$C(c))));
}, 1);

Clazz.newMeth(C$, 'getNorm32FromSurrogatePair$J$C',  function (norm32, c2) {
return (Long.$and((4294967295),$I$(6).normTrie.getTrailValue$I$C(Long.$ival(norm32), c2)));
}, 1);

Clazz.newMeth(C$, 'getNorm32$I',  function (c) {
return (Long.$and(4294967295,($I$(6).normTrie.getCodePointValue$I(c))));
}, 1);

Clazz.newMeth(C$, 'getNorm32$CA$I$I',  function (p, start, mask) {
var norm32=C$.getNorm32$C(p[start]);
if ((Long.$gt((Long.$and(norm32,mask)),0 )) && C$.isNorm32LeadSurrogate$J(norm32) ) {
norm32=C$.getNorm32FromSurrogatePair$J$C(norm32, p[start + 1]);
}return norm32;
}, 1);

Clazz.newMeth(C$, 'getUnicodeVersion$',  function () {
return $I$(11).getInstance$I$I$I$I(C$.unicodeVersion[0], C$.unicodeVersion[1], C$.unicodeVersion[2], C$.unicodeVersion[3]);
}, 1);

Clazz.newMeth(C$, 'getFCD16$C',  function (c) {
return $I$(5).fcdTrie.getLeadValue$C(c);
}, 1);

Clazz.newMeth(C$, 'getFCD16FromSurrogatePair$C$C',  function (fcd16, c2) {
return $I$(5).fcdTrie.getTrailValue$I$C(fcd16.$c(), c2);
}, 1);

Clazz.newMeth(C$, 'getFCD16$I',  function (c) {
return $I$(5).fcdTrie.getCodePointValue$I(c).$c();
}, 1);

Clazz.newMeth(C$, 'getExtraDataIndex$J',  function (norm32) {
return Long.$ival((Long.$sr(norm32,16)));
}, 1);

Clazz.newMeth(C$, 'decompose$J$I$sun_text_normalizer_NormalizerImpl_DecomposeArgs',  function (norm32, qcMask, args) {
var p=C$.getExtraDataIndex$J(norm32);
args.length=C$.extraData[p++].$c();
if (Long.$ne((Long.$and(norm32,qcMask , 8 )),0 ) && args.length >= 256 ) {
p+=((args.length >> 7) & 1) + (args.length & 127);
args.length>>=8;
}if ((args.length & 128) > 0) {
var bothCCs=C$.extraData[p++];
args.cc=(255) & (bothCCs.$c() >> 8);
args.trailCC=(255) & bothCCs.$c();
} else {
args.cc=args.trailCC=0;
}args.length&=127;
return p;
}, 1);

Clazz.newMeth(C$, 'decompose$J$sun_text_normalizer_NormalizerImpl_DecomposeArgs',  function (norm32, args) {
var p=C$.getExtraDataIndex$J(norm32);
args.length=C$.extraData[p++].$c();
if ((args.length & 128) > 0) {
var bothCCs=C$.extraData[p++];
args.cc=(255) & (bothCCs.$c() >> 8);
args.trailCC=(255) & bothCCs.$c();
} else {
args.cc=args.trailCC=0;
}args.length&=127;
return p;
}, 1);

Clazz.newMeth(C$, 'getNextCC$sun_text_normalizer_NormalizerImpl_NextCCArgs',  function (args) {
var norm32;
args.c=args.source[args.next++];
norm32=C$.getNorm32$C(args.c);
if (Long.$eq((Long.$and(norm32,65280)),0 )) {
args.c2=String.fromCharCode(0);
return 0;
} else {
if (!C$.isNorm32LeadSurrogate$J(norm32)) {
args.c2=String.fromCharCode(0);
} else {
if (args.next != args.limit && $I$(12,"isTrailSurrogate$C",[args.c2=args.source[args.next]]) ) {
++args.next;
norm32=C$.getNorm32FromSurrogatePair$J$C(norm32, args.c2);
} else {
args.c2=String.fromCharCode(0);
return 0;
}}return Long.$ival((Long.$and((255),(Long.$sr(norm32,8)))));
}}, 1);

Clazz.newMeth(C$, 'getPrevNorm32$sun_text_normalizer_NormalizerImpl_PrevArgs$I$I',  function (args, minC, mask) {
var norm32;
args.c=args.src[--args.current];
args.c2=String.fromCharCode(0);
if (args.c.$c() < minC ) {
return 0;
} else if (!$I$(12).isSurrogate$C(args.c)) {
return C$.getNorm32$C(args.c);
} else if ($I$(12).isLeadSurrogate$C(args.c)) {
return 0;
} else if (args.current != args.start && $I$(12,"isLeadSurrogate$C",[args.c2=args.src[args.current - 1]]) ) {
--args.current;
norm32=C$.getNorm32$C(args.c2);
if (Long.$eq((Long.$and(norm32,mask)),0 )) {
return 0;
} else {
return C$.getNorm32FromSurrogatePair$J$C(norm32, args.c);
}} else {
args.c2=String.fromCharCode(0);
return 0;
}}, 1);

Clazz.newMeth(C$, 'getPrevCC$sun_text_normalizer_NormalizerImpl_PrevArgs',  function (args) {
return Long.$ival((Long.$and((255),(Long.$sr(C$.getPrevNorm32$sun_text_normalizer_NormalizerImpl_PrevArgs$I$I(args, 768, 65280),8)))));
}, 1);

Clazz.newMeth(C$, 'isNFDSafe$J$I$I',  function (norm32, ccOrQCMask, decompQCMask) {
if (Long.$eq((Long.$and(norm32,ccOrQCMask)),0 )) {
return true;
}if (C$.isNorm32Regular$J(norm32) && Long.$ne((Long.$and(norm32,decompQCMask)),0 ) ) {
var args=Clazz.new_($I$(13,1));
C$.decompose$J$I$sun_text_normalizer_NormalizerImpl_DecomposeArgs(norm32, decompQCMask, args);
return args.cc == 0;
} else {
return Long.$eq((Long.$and(norm32,65280)),0 );
}}, 1);

Clazz.newMeth(C$, 'isTrueStarter$J$I$I',  function (norm32, ccOrQCMask, decompQCMask) {
if (Long.$eq((Long.$and(norm32,ccOrQCMask)),0 )) {
return true;
}if (Long.$ne((Long.$and(norm32,decompQCMask)),0 )) {
var p;
var args=Clazz.new_($I$(13,1));
p=C$.decompose$J$I$sun_text_normalizer_NormalizerImpl_DecomposeArgs(norm32, decompQCMask, args);
if (args.cc == 0) {
var qcMask=ccOrQCMask & 63;
if (Long.$eq((Long.$and(C$.getNorm32$CA$I$I(C$.extraData, p, qcMask),qcMask)),0 )) {
return true;
}}}return false;
}, 1);

Clazz.newMeth(C$, 'insertOrdered$CA$I$I$I$C$C$I',  function (source, start, current, p, c, c2, cc) {
var back;
var preBack;
var r;
var prevCC;
var trailCC=cc;
if (start < current && cc != 0 ) {
preBack=back=current;
var prevArgs=Clazz.new_($I$(14,1));
prevArgs.current=current;
prevArgs.start=start;
prevArgs.src=source;
prevCC=C$.getPrevCC$sun_text_normalizer_NormalizerImpl_PrevArgs(prevArgs);
preBack=prevArgs.current;
if (cc < prevCC) {
trailCC=prevCC;
back=preBack;
while (start < preBack){
prevCC=C$.getPrevCC$sun_text_normalizer_NormalizerImpl_PrevArgs(prevArgs);
preBack=prevArgs.current;
if (cc >= prevCC) {
break;
}back=preBack;
}
r=p;
do {
source[--r]=source[--current];
} while (back != current);
}}source[current]=c;
if (c2.$c() != 0 ) {
source[(current + 1)]=c2;
}return trailCC;
}, 1);

Clazz.newMeth(C$, 'mergeOrdered$CA$I$I$CA$I$I$Z',  function (source, start, current, data, next, limit, isOrdered) {
var r;
var cc;
var trailCC=0;
var adjacent;
adjacent=current == next;
var ncArgs=Clazz.new_($I$(15,1));
ncArgs.source=data;
ncArgs.next=next;
ncArgs.limit=limit;
if (start != current || !isOrdered ) {
while (ncArgs.next < ncArgs.limit){
cc=C$.getNextCC$sun_text_normalizer_NormalizerImpl_NextCCArgs(ncArgs);
if (cc == 0) {
trailCC=0;
if (adjacent) {
current=ncArgs.next;
} else {
data[current++]=ncArgs.c;
if (ncArgs.c2.$c() != 0 ) {
data[current++]=ncArgs.c2;
}}if (isOrdered) {
break;
} else {
start=current;
}} else {
r=current + (ncArgs.c2.$c() == 0  ? 1 : 2);
trailCC=C$.insertOrdered$CA$I$I$I$C$C$I(source, start, current, r, ncArgs.c, ncArgs.c2, cc);
current=r;
}}
}if (ncArgs.next == ncArgs.limit) {
return trailCC;
} else {
if (!adjacent) {
do {
source[current++]=data[ncArgs.next++];
} while (ncArgs.next != ncArgs.limit);
ncArgs.limit=current;
}var prevArgs=Clazz.new_($I$(14,1));
prevArgs.src=data;
prevArgs.start=start;
prevArgs.current=ncArgs.limit;
return C$.getPrevCC$sun_text_normalizer_NormalizerImpl_PrevArgs(prevArgs);
}}, 1);

Clazz.newMeth(C$, 'mergeOrdered$CA$I$I$CA$I$I',  function (source, start, current, data, next, limit) {
return C$.mergeOrdered$CA$I$I$CA$I$I$Z(source, start, current, data, next, limit, true);
}, 1);

Clazz.newMeth(C$, 'quickCheck$CA$I$I$I$I$I$Z$sun_text_normalizer_UnicodeSet',  function (src, srcStart, srcLimit, minNoMaybe, qcMask, options, allowMaybe, nx) {
var ccOrQCMask;
var norm32;
var c;
var c2;
var cc;
var prevCC;
var qcNorm32;
var result;
var args=Clazz.new_($I$(16,1));
var buffer;
var start=srcStart;
if (!C$.isDataLoaded) {
return $I$(17).MAYBE;
}ccOrQCMask=65280 | qcMask;
result=$I$(17).YES;
prevCC=String.fromCharCode(0);
for (; ; ) {
for (; ; ) {
if (srcStart == srcLimit) {
return result;
} else if (((c=src[srcStart++]).$c()) >= minNoMaybe  && Long.$ne((Long.$and((norm32=C$.getNorm32$C(c)),ccOrQCMask)),0 ) ) {
break;
}prevCC=String.fromCharCode(0);
}
if (C$.isNorm32LeadSurrogate$J(norm32)) {
if (srcStart != srcLimit && $I$(12,"isTrailSurrogate$C",[c2=src[srcStart]]) ) {
++srcStart;
norm32=C$.getNorm32FromSurrogatePair$J$C(norm32, c2);
} else {
norm32=0;
c2=String.fromCharCode(0);
}} else {
c2=String.fromCharCode(0);
}if (C$.nx_contains$sun_text_normalizer_UnicodeSet$C$C(nx, c, c2)) {
norm32=0;
}cc=String.fromCharCode((Long.$and((Long.$sr(norm32,8)),255)));
if (cc.$c() != 0  && cc < prevCC ) {
return $I$(17).NO;
}prevCC=cc;
qcNorm32=Long.$and(norm32,qcMask);
if (Long.$ge((Long.$and(qcNorm32,15)),1 )) {
result=$I$(17).NO;
break;
} else if (Long.$ne(qcNorm32,0 )) {
if (allowMaybe) {
result=$I$(17).MAYBE;
} else {
var prevStarter;
var decompQCMask;
decompQCMask=(qcMask << 2) & 15;
prevStarter=srcStart - 1;
if ($I$(12).isTrailSurrogate$C(src[prevStarter])) {
--prevStarter;
}prevStarter=C$.findPreviousStarter$CA$I$I$I$I$C(src, start, prevStarter, ccOrQCMask, decompQCMask, String.fromCharCode(minNoMaybe));
srcStart=C$.findNextStarter$CA$I$I$I$I$C(src, srcStart, srcLimit, qcMask, decompQCMask, String.fromCharCode(minNoMaybe));
args.prevCC=prevCC.$c();
buffer=C$.composePart$sun_text_normalizer_NormalizerImpl_ComposePartArgs$I$CA$I$I$I$sun_text_normalizer_UnicodeSet(args, prevStarter, src, srcStart, srcLimit, options, nx);
if (0 != C$.strCompare$CA$I$I$CA$I$I$Z(buffer, 0, args.length, src, prevStarter, srcStart, false)) {
result=$I$(17).NO;
break;
}}}}
return result;
}, 1);

Clazz.newMeth(C$, 'decompose$CA$I$I$CA$I$I$Z$IA$sun_text_normalizer_UnicodeSet',  function (src, srcStart, srcLimit, dest, destStart, destLimit, compat, outTrailCC, nx) {
var buffer=Clazz.array(Character.TYPE, [3]);
var prevSrc;
var norm32;
var ccOrQCMask;
var qcMask;
var reorderStartIndex;
var length;
var c;
var c2;
var minNoMaybe;
var cc;
var prevCC;
var trailCC;
var p;
var pStart;
var destIndex=destStart;
var srcIndex=srcStart;
if (!compat) {
minNoMaybe=String.fromCharCode(C$.indexes[8]);
qcMask=4;
} else {
minNoMaybe=String.fromCharCode(C$.indexes[9]);
qcMask=8;
}ccOrQCMask=65280 | qcMask;
reorderStartIndex=0;
prevCC=0;
norm32=0;
c=String.fromCharCode(0);
pStart=0;
cc=trailCC=-1;
for (; ; ) {
prevSrc=srcIndex;
while (srcIndex != srcLimit && ((c=src[srcIndex]) < minNoMaybe || Long.$eq((Long.$and((norm32=C$.getNorm32$C(c)),ccOrQCMask)),0 ) ) ){
prevCC=0;
++srcIndex;
}
if (srcIndex != prevSrc) {
length=srcIndex - prevSrc;
if ((destIndex + length) <= destLimit) {
System.arraycopy$O$I$O$I$I(src, prevSrc, dest, destIndex, length);
}destIndex+=length;
reorderStartIndex=destIndex;
}if (srcIndex == srcLimit) {
break;
}++srcIndex;
if (C$.isNorm32HangulOrJamo$J(norm32)) {
if (C$.nx_contains$sun_text_normalizer_UnicodeSet$I(nx, c.$c())) {
c2=String.fromCharCode(0);
p=null;
length=1;
} else {
p=buffer;
pStart=0;
cc=trailCC=0;
c = String.fromCharCode(c.$c()- 44032);
c2=String.fromCharCode((c.$c() % 28));
c = String.fromCharCode(c.$c()/ 28);
if (c2.$c() > 0 ) {
buffer[2]=String.fromCharCode((4519 + c2.$c()));
length=3;
} else {
length=2;
}buffer[1]=String.fromCharCode((4449 + c.$c() % 21));
buffer[0]=String.fromCharCode((4352 + c.$c() / 21));
}} else {
if (C$.isNorm32Regular$J(norm32)) {
c2=String.fromCharCode(0);
length=1;
} else {
if (srcIndex != srcLimit && $I$(12,"isTrailSurrogate$C",[c2=src[srcIndex]]) ) {
++srcIndex;
length=2;
norm32=C$.getNorm32FromSurrogatePair$J$C(norm32, c2);
} else {
c2=String.fromCharCode(0);
length=1;
norm32=0;
}}if (C$.nx_contains$sun_text_normalizer_UnicodeSet$C$C(nx, c, c2)) {
cc=trailCC=0;
p=null;
} else if (Long.$eq((Long.$and(norm32,qcMask)),0 )) {
cc=trailCC=Long.$ival((Long.$and((255),(Long.$sr(norm32,8)))));
p=null;
pStart=-1;
} else {
var arg=Clazz.new_($I$(13,1));
pStart=C$.decompose$J$I$sun_text_normalizer_NormalizerImpl_DecomposeArgs(norm32, qcMask, arg);
p=C$.extraData;
length=arg.length;
cc=arg.cc;
trailCC=arg.trailCC;
if (length == 1) {
c=p[pStart];
c2=String.fromCharCode(0);
p=null;
pStart=-1;
}}}if ((destIndex + length) <= destLimit) {
var reorderSplit=destIndex;
if (p == null ) {
if (cc != 0 && cc < prevCC ) {
destIndex+=length;
trailCC=C$.insertOrdered$CA$I$I$I$C$C$I(dest, reorderStartIndex, reorderSplit, destIndex, c, c2, cc);
} else {
dest[destIndex++]=c;
if (c2.$c() != 0 ) {
dest[destIndex++]=c2;
}}} else {
if (cc != 0 && cc < prevCC ) {
destIndex+=length;
trailCC=C$.mergeOrdered$CA$I$I$CA$I$I(dest, reorderStartIndex, reorderSplit, p, pStart, pStart + length);
} else {
do {
dest[destIndex++]=p[pStart++];
} while (--length > 0);
}}} else {
destIndex+=length;
}prevCC=trailCC;
if (prevCC == 0) {
reorderStartIndex=destIndex;
}}
outTrailCC[0]=prevCC;
return destIndex - destStart;
}, 1);

Clazz.newMeth(C$, 'getNextCombining$sun_text_normalizer_NormalizerImpl_NextCombiningArgs$I$sun_text_normalizer_UnicodeSet',  function (args, limit, nx) {
var norm32;
var combineFlags;
args.c=args.source[args.start++];
norm32=C$.getNorm32$C(args.c);
args.c2=String.fromCharCode(0);
args.combiningIndex=0;
args.cc=String.fromCharCode(0);
if (Long.$eq((Long.$and(norm32,(65472))),0 )) {
return 0;
} else {
if (C$.isNorm32Regular$J(norm32)) {
} else if (C$.isNorm32HangulOrJamo$J(norm32)) {
args.combiningIndex=Long.$ival((Long.$and((4294967295),(Long.$or(65520,(Long.$sr(norm32,16)))))));
return Long.$ival((Long.$and(norm32,192)));
} else {
if (args.start != limit && $I$(12,"isTrailSurrogate$C",[args.c2=args.source[args.start]]) ) {
++args.start;
norm32=C$.getNorm32FromSurrogatePair$J$C(norm32, args.c2);
} else {
args.c2=String.fromCharCode(0);
return 0;
}}if (C$.nx_contains$sun_text_normalizer_UnicodeSet$C$C(nx, args.c, args.c2)) {
return 0;
}args.cc=String.fromCharCode((Long.$and((Long.$sr(norm32,8)),255)));
combineFlags=Long.$ival((Long.$and(norm32,192)));
if (combineFlags != 0) {
var index=C$.getExtraDataIndex$J(norm32);
args.combiningIndex=index > 0 ? C$.extraData[(index - 1)] : String.fromCharCode(0).$c();
}return combineFlags;
}}, 1);

Clazz.newMeth(C$, 'getCombiningIndexFromStarter$C$C',  function (c, c2) {
var norm32;
norm32=C$.getNorm32$C(c);
if (c2.$c() != 0 ) {
norm32=C$.getNorm32FromSurrogatePair$J$C(norm32, c2);
}return C$.extraData[(C$.getExtraDataIndex$J(norm32) - 1)].$c();
}, 1);

Clazz.newMeth(C$, 'combine$CA$I$I$IA',  function (table, tableStart, combineBackIndex, outValues) {
var key;
var value;
var value2;
if (outValues.length < 2) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}for (; ; ) {
key=table[tableStart++].$c();
if (key >= combineBackIndex) {
break;
}tableStart+=(((table[tableStart]).$c() & 32768) != 0) ? 2 : 1;
}
if ((key & 32767) == combineBackIndex) {
value=table[tableStart].$c();
key=Long.$ival((Long.$and((4294967295),((value & 8192) + 1))));
if ((value & 32768) != 0) {
if ((value & 16384) != 0) {
value=Long.$ival((Long.$and((4294967295),((value & 1023) | 55296))));
value2=table[tableStart + 1].$c();
} else {
value=table[tableStart + 1].$c();
value2=0;
}} else {
value&=8191;
value2=0;
}outValues[0]=value;
outValues[1]=value2;
return key;
} else {
return 0;
}}, 1);

Clazz.newMeth(C$, 'recompose$sun_text_normalizer_NormalizerImpl_RecomposeArgs$I$sun_text_normalizer_UnicodeSet',  function (args, options, nx) {
var remove;
var q;
var r;
var combineFlags;
var combineFwdIndex;
var combineBackIndex;
var result;
var value=0;
var value2=0;
var prevCC;
var starterIsSupplementary;
var starter;
var outValues=Clazz.array(Integer.TYPE, [2]);
starter=-1;
combineFwdIndex=0;
starterIsSupplementary=false;
prevCC=0;
var ncArg=Clazz.new_($I$(18,1));
ncArg.source=args.source;
ncArg.cc=String.fromCharCode(0);
ncArg.c2=String.fromCharCode(0);
for (; ; ) {
ncArg.start=args.start;
combineFlags=C$.getNextCombining$sun_text_normalizer_NormalizerImpl_NextCombiningArgs$I$sun_text_normalizer_UnicodeSet(ncArg, args.limit, nx);
combineBackIndex=ncArg.combiningIndex;
args.start=ncArg.start;
if (((combineFlags & 128) != 0) && starter != -1 ) {
if ((combineBackIndex & 32768) != 0) {
if ((options & 256) != 0 || prevCC == 0 ) {
remove=-1;
combineFlags=0;
ncArg.c2=args.source[starter];
if (combineBackIndex == 65522) {
ncArg.c2=String.fromCharCode((ncArg.c2.$c() - 4352));
if (ncArg.c2.$c() < 19 ) {
remove=args.start - 1;
ncArg.c=String.fromCharCode((44032 + (ncArg.c2.$c() * 21 + (ncArg.c.$c() - 4449)) * 28));
if (args.start != args.limit && ((ncArg.c2=String.fromCharCode(((args.source[args.start]).$c() - 4519))).$c()) < 28  ) {
++args.start;
ncArg.c = String.fromCharCode(ncArg.c.$c()+ (ncArg.c2));
} else {
combineFlags=64;
}if (!C$.nx_contains$sun_text_normalizer_UnicodeSet$I(nx, ncArg.c.$c())) {
args.source[starter]=ncArg.c;
} else {
if (!C$.isHangulWithoutJamoT$C(ncArg.c)) {
--args.start;
}remove=args.start;
}}} else {
if (C$.isHangulWithoutJamoT$C(ncArg.c2)) {
ncArg.c2 = String.fromCharCode(ncArg.c2.$c()+ (ncArg.c.$c() - 4519));
if (!C$.nx_contains$sun_text_normalizer_UnicodeSet$I(nx, ncArg.c2.$c())) {
remove=args.start - 1;
args.source[starter]=ncArg.c2;
}}}if (remove != -1) {
q=remove;
r=args.start;
while (r < args.limit){
args.source[q++]=args.source[r++];
}
args.start=remove;
args.limit=q;
}ncArg.c2=String.fromCharCode(0);
if (combineFlags != 0) {
if (args.start == args.limit) {
return String.fromCharCode(prevCC);
}combineFwdIndex=65520;
continue;
}}} else if (!((combineFwdIndex & 32768) != 0) && ((options & 256) != 0 ? (prevCC != ncArg.cc.$c()  || prevCC == 0 ) : (prevCC < ncArg.cc.$c()  || prevCC == 0 )) && 0 != (result=C$.combine$CA$I$I$IA(C$.combiningTable, combineFwdIndex, combineBackIndex, outValues))   && !C$.nx_contains$sun_text_normalizer_UnicodeSet$C$C(nx, String.fromCharCode(value), String.fromCharCode(value2)) ) {
value=outValues[0];
value2=outValues[1];
remove=ncArg.c2.$c() == 0  ? args.start - 1 : args.start - 2;
args.source[starter]=String.fromCharCode(value);
if (starterIsSupplementary) {
if (value2 != 0) {
args.source[starter + 1]=String.fromCharCode(value2);
} else {
starterIsSupplementary=false;
q=starter + 1;
r=q + 1;
while (r < remove){
args.source[q++]=args.source[r++];
}
--remove;
}} else if (value2 != 0) {
starterIsSupplementary=true;
args.source[starter + 1]=String.fromCharCode(value2);
}if (remove < args.start) {
q=remove;
r=args.start;
while (r < args.limit){
args.source[q++]=args.source[r++];
}
args.start=remove;
args.limit=q;
}if (args.start == args.limit) {
return String.fromCharCode(prevCC);
}if (result > 1) {
combineFwdIndex=C$.getCombiningIndexFromStarter$C$C(String.fromCharCode(value), String.fromCharCode(value2));
} else {
starter=-1;
}continue;
}}prevCC=ncArg.cc.$c();
if (args.start == args.limit) {
return String.fromCharCode(prevCC);
}if (ncArg.cc.$c() == 0 ) {
if ((combineFlags & 64) != 0) {
if (ncArg.c2.$c() == 0 ) {
starterIsSupplementary=false;
starter=args.start - 1;
} else {
starterIsSupplementary=false;
starter=args.start - 2;
}combineFwdIndex=combineBackIndex;
} else {
starter=-1;
}} else if ((options & 8192) != 0) {
starter=-1;
}}
}, 1);

Clazz.newMeth(C$, 'findPreviousStarter$CA$I$I$I$I$C',  function (src, srcStart, current, ccOrQCMask, decompQCMask, minNoMaybe) {
var norm32;
var args=Clazz.new_($I$(14,1));
args.src=src;
args.start=srcStart;
args.current=current;
while (args.start < args.current){
norm32=C$.getPrevNorm32$sun_text_normalizer_NormalizerImpl_PrevArgs$I$I(args, minNoMaybe.$c(), ccOrQCMask | decompQCMask);
if (C$.isTrueStarter$J$I$I(norm32, ccOrQCMask, decompQCMask)) {
break;
}}
return args.current;
}, 1);

Clazz.newMeth(C$, 'findNextStarter$CA$I$I$I$I$C',  function (src, start, limit, qcMask, decompQCMask, minNoMaybe) {
var p;
var norm32;
var ccOrQCMask;
var c;
var c2;
ccOrQCMask=65280 | qcMask;
var decompArgs=Clazz.new_($I$(13,1));
for (; ; ) {
if (start == limit) {
break;
}c=src[start];
if (c < minNoMaybe) {
break;
}norm32=C$.getNorm32$C(c);
if (Long.$eq((Long.$and(norm32,ccOrQCMask)),0 )) {
break;
}if (C$.isNorm32LeadSurrogate$J(norm32)) {
if ((start + 1) == limit || !$I$(12,"isTrailSurrogate$C",[c2=(src[start + 1])]) ) {
break;
}norm32=C$.getNorm32FromSurrogatePair$J$C(norm32, c2);
if (Long.$eq((Long.$and(norm32,ccOrQCMask)),0 )) {
break;
}} else {
c2=String.fromCharCode(0);
}if (Long.$ne((Long.$and(norm32,decompQCMask)),0 )) {
p=C$.decompose$J$I$sun_text_normalizer_NormalizerImpl_DecomposeArgs(norm32, decompQCMask, decompArgs);
if (decompArgs.cc == 0 && Long.$eq((Long.$and(C$.getNorm32$CA$I$I(C$.extraData, p, qcMask),qcMask)),0 ) ) {
break;
}}start+=c2.$c() == 0  ? 1 : 2;
}
return start;
}, 1);

Clazz.newMeth(C$, 'composePart$sun_text_normalizer_NormalizerImpl_ComposePartArgs$I$CA$I$I$I$sun_text_normalizer_UnicodeSet',  function (args, prevStarter, src, start, limit, options, nx) {
var recomposeLimit;
var compat=((options & 4096) != 0);
var outTrailCC=Clazz.array(Integer.TYPE, [1]);
var buffer=Clazz.array(Character.TYPE, [(limit - prevStarter) * 20]);
for (; ; ) {
args.length=C$.decompose$CA$I$I$CA$I$I$Z$IA$sun_text_normalizer_UnicodeSet(src, prevStarter, (start), buffer, 0, buffer.length, compat, outTrailCC, nx);
if (args.length <= buffer.length) {
break;
} else {
buffer=Clazz.array(Character.TYPE, [args.length]);
}}
recomposeLimit=args.length;
if (args.length >= 2) {
var rcArgs=Clazz.new_($I$(19,1));
rcArgs.source=buffer;
rcArgs.start=0;
rcArgs.limit=recomposeLimit;
args.prevCC=C$.recompose$sun_text_normalizer_NormalizerImpl_RecomposeArgs$I$sun_text_normalizer_UnicodeSet(rcArgs, options, nx).$c();
recomposeLimit=rcArgs.limit;
}args.length=recomposeLimit;
return buffer;
}, 1);

Clazz.newMeth(C$, 'composeHangul$C$C$J$CA$IA$I$Z$CA$I$sun_text_normalizer_UnicodeSet',  function (prev, c, norm32, src, srcIndex, limit, compat, dest, destIndex, nx) {
var start=srcIndex[0];
if (C$.isJamoVTNorm32JamoV$J(norm32)) {
prev=String.fromCharCode((prev.$c() - 4352));
if (prev.$c() < 19 ) {
c=String.fromCharCode((44032 + (prev.$c() * 21 + (c.$c() - 4449)) * 28));
if (start != limit) {
var next;
var t;
next=src[start];
if (((t=String.fromCharCode((next.$c() - 4519))).$c()) < 28 ) {
++start;
c = String.fromCharCode(c.$c()+ (t));
} else if (compat) {
norm32=C$.getNorm32$C(next);
if (C$.isNorm32Regular$J(norm32) && (Long.$ne((Long.$and(norm32,8)),0 )) ) {
var p;
var dcArgs=Clazz.new_($I$(13,1));
p=C$.decompose$J$I$sun_text_normalizer_NormalizerImpl_DecomposeArgs(norm32, 8, dcArgs);
if (dcArgs.length == 1 && ((t=String.fromCharCode(((C$.extraData[p]).$c() - 4519))).$c()) < 28  ) {
++start;
c = String.fromCharCode(c.$c()+ (t));
}}}}if (C$.nx_contains$sun_text_normalizer_UnicodeSet$I(nx, c.$c())) {
if (!C$.isHangulWithoutJamoT$C(c)) {
--start;
}return false;
}dest[destIndex]=c;
srcIndex[0]=start;
return true;
}} else if (C$.isHangulWithoutJamoT$C(prev)) {
c=String.fromCharCode((prev.$c() + (c.$c() - 4519)));
if (C$.nx_contains$sun_text_normalizer_UnicodeSet$I(nx, c.$c())) {
return false;
}dest[destIndex]=c;
srcIndex[0]=start;
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'compose$CA$I$I$CA$I$I$I$sun_text_normalizer_UnicodeSet',  function (src, srcStart, srcLimit, dest, destStart, destLimit, options, nx) {
var prevSrc;
var prevStarter;
var norm32;
var ccOrQCMask;
var qcMask;
var reorderStartIndex;
var length;
var c;
var c2;
var minNoMaybe;
var cc;
var prevCC;
var ioIndex=Clazz.array(Integer.TYPE, [1]);
var destIndex=destStart;
var srcIndex=srcStart;
if ((options & 4096) != 0) {
minNoMaybe=String.fromCharCode(C$.indexes[7]);
qcMask=34;
} else {
minNoMaybe=String.fromCharCode(C$.indexes[6]);
qcMask=17;
}prevStarter=srcIndex;
ccOrQCMask=65280 | qcMask;
reorderStartIndex=0;
prevCC=0;
norm32=0;
c=String.fromCharCode(0);
for (; ; ) {
prevSrc=srcIndex;
while (srcIndex != srcLimit && ((c=src[srcIndex]) < minNoMaybe || Long.$eq((Long.$and((norm32=C$.getNorm32$C(c)),ccOrQCMask)),0 ) ) ){
prevCC=0;
++srcIndex;
}
if (srcIndex != prevSrc) {
length=srcIndex - prevSrc;
if ((destIndex + length) <= destLimit) {
System.arraycopy$O$I$O$I$I(src, prevSrc, dest, destIndex, length);
}destIndex+=length;
reorderStartIndex=destIndex;
prevStarter=srcIndex - 1;
if ($I$(12).isTrailSurrogate$C(src[prevStarter]) && prevSrc < prevStarter  && $I$(12,"isLeadSurrogate$C",[src[(prevStarter - 1)]]) ) {
--prevStarter;
}prevSrc=srcIndex;
}if (srcIndex == srcLimit) {
break;
}++srcIndex;
if (C$.isNorm32HangulOrJamo$J(norm32)) {
prevCC=cc=0;
reorderStartIndex=destIndex;
ioIndex[0]=srcIndex;
if (destIndex > 0 && C$.composeHangul$C$C$J$CA$IA$I$Z$CA$I$sun_text_normalizer_UnicodeSet(src[(prevSrc - 1)], c, norm32, src, ioIndex, srcLimit, (options & 4096) != 0, dest, destIndex <= destLimit ? destIndex - 1 : 0, nx) ) {
srcIndex=ioIndex[0];
prevStarter=srcIndex;
continue;
}srcIndex=ioIndex[0];
c2=String.fromCharCode(0);
length=1;
prevStarter=prevSrc;
} else {
if (C$.isNorm32Regular$J(norm32)) {
c2=String.fromCharCode(0);
length=1;
} else {
if (srcIndex != srcLimit && $I$(12,"isTrailSurrogate$C",[c2=src[srcIndex]]) ) {
++srcIndex;
length=2;
norm32=C$.getNorm32FromSurrogatePair$J$C(norm32, c2);
} else {
c2=String.fromCharCode(0);
length=1;
norm32=0;
}}var args=Clazz.new_($I$(16,1));
if (C$.nx_contains$sun_text_normalizer_UnicodeSet$C$C(nx, c, c2)) {
cc=0;
} else if (Long.$eq((Long.$and(norm32,qcMask)),0 )) {
cc=Long.$ival((Long.$and((255),(Long.$sr(norm32,8)))));
} else {
var p;
var decompQCMask=(qcMask << 2) & 15;
if (C$.isTrueStarter$J$I$I(norm32, 65280 | qcMask, decompQCMask)) {
prevStarter=prevSrc;
} else {
destIndex-=prevSrc - prevStarter;
}srcIndex=C$.findNextStarter$CA$I$I$I$I$C(src, srcIndex, srcLimit, qcMask, decompQCMask, minNoMaybe);
args.prevCC=prevCC;
args.length=length;
p=C$.composePart$sun_text_normalizer_NormalizerImpl_ComposePartArgs$I$CA$I$I$I$sun_text_normalizer_UnicodeSet(args, prevStarter, src, srcIndex, srcLimit, options, nx);
if (p == null ) {
break;
}prevCC=args.prevCC;
length=args.length;
if ((destIndex + args.length) <= destLimit) {
var i=0;
while (i < args.length){
dest[destIndex++]=p[i++];
--length;
}
} else {
destIndex+=length;
}prevStarter=srcIndex;
continue;
}}if ((destIndex + length) <= destLimit) {
if (cc != 0 && cc < prevCC ) {
var reorderSplit=destIndex;
destIndex+=length;
prevCC=C$.insertOrdered$CA$I$I$I$C$C$I(dest, reorderStartIndex, reorderSplit, destIndex, c, c2, cc);
} else {
dest[destIndex++]=c;
if (c2.$c() != 0 ) {
dest[destIndex++]=c2;
}prevCC=cc;
}} else {
destIndex+=length;
prevCC=cc;
}}
return destIndex - destStart;
}, 1);

Clazz.newMeth(C$, 'getCombiningClass$I',  function (c) {
var norm32;
norm32=C$.getNorm32$I(c);
return Long.$ival((Long.$and((Long.$sr(norm32,8)),255)));
}, 1);

Clazz.newMeth(C$, 'isFullCompositionExclusion$I',  function (c) {
if (C$.isFormatVersion_2_1) {
var aux=$I$(7).auxTrie.getCodePointValue$I(c).$c();
return (aux & 1024) != 0;
} else {
return false;
}}, 1);

Clazz.newMeth(C$, 'isCanonSafeStart$I',  function (c) {
if (C$.isFormatVersion_2_1) {
var aux=$I$(7).auxTrie.getCodePointValue$I(c).$c();
return (aux & 2048) == 0;
} else {
return false;
}}, 1);

Clazz.newMeth(C$, 'isNFSkippable$I$sun_text_normalizer_NormalizerBase_Mode$J',  function (c, mode, mask) {
var norm32;
mask=Long.$and(mask,4294967295);
var aux;
norm32=C$.getNorm32$I(c);
if (Long.$ne((Long.$and(norm32,mask)),0 )) {
return false;
}if (mode === $I$(17).NFD  || mode === $I$(17).NFKD   || mode === $I$(17).NONE  ) {
return true;
}if (Long.$eq((Long.$and(norm32,4)),0 )) {
return true;
}if (C$.isNorm32HangulOrJamo$J(norm32)) {
return !C$.isHangulWithoutJamoT$C(String.fromCharCode(c));
}if (!C$.isFormatVersion_2_2) {
return false;
}aux=$I$(7).auxTrie.getCodePointValue$I(c);
return Long.$eq((Long.$and(aux.$c(),4096)),0 );
}, 1);

Clazz.newMeth(C$, 'addPropertyStarts$sun_text_normalizer_UnicodeSet',  function (set) {
var c;
var normIter=Clazz.new_([$I$(6).normTrie],$I$(20,1).c$$sun_text_normalizer_Trie);
var normResult=Clazz.new_($I$(21,1));
while (normIter.next$sun_text_normalizer_RangeValueIterator_Element(normResult)){
set.add$I(normResult.start);
}
var fcdIter=Clazz.new_([$I$(5).fcdTrie],$I$(20,1).c$$sun_text_normalizer_Trie);
var fcdResult=Clazz.new_($I$(21,1));
while (fcdIter.next$sun_text_normalizer_RangeValueIterator_Element(fcdResult)){
set.add$I(fcdResult.start);
}
if (C$.isFormatVersion_2_1) {
var auxIter=Clazz.new_([$I$(7).auxTrie],$I$(20,1).c$$sun_text_normalizer_Trie);
var auxResult=Clazz.new_($I$(21,1));
while (auxIter.next$sun_text_normalizer_RangeValueIterator_Element(auxResult)){
set.add$I(auxResult.start);
}
}for (c=44032; c < 55204; c+=28) {
set.add$I(c);
set.add$I(c + 1);
}
set.add$I(55204);
return set;
}, 1);

Clazz.newMeth(C$, 'quickCheck$I$I',  function (c, modeValue) {
var qcMask=Clazz.array(Integer.TYPE, -1, [0, 0, 4, 8, 17, 34]);
var norm32=Long.$ival(C$.getNorm32$I(c)) & qcMask[modeValue];
if (norm32 == 0) {
return 1;
} else if ((norm32 & 15) != 0) {
return 0;
} else {
return 2;
}}, 1);

Clazz.newMeth(C$, 'strCompare$CA$I$I$CA$I$I$Z',  function (s1, s1Start, s1Limit, s2, s2Start, s2Limit, codePointOrder) {
var start1;
var start2;
var limit1;
var limit2;
var c1;
var c2;
start1=s1Start;
start2=s2Start;
var length1;
var length2;
length1=s1Limit - s1Start;
length2=s2Limit - s2Start;
var lengthResult;
if (length1 < length2) {
lengthResult=-1;
limit1=start1 + length1;
} else if (length1 == length2) {
lengthResult=0;
limit1=start1 + length1;
} else {
lengthResult=1;
limit1=start1 + length2;
}if (s1 === s2 ) {
return lengthResult;
}for (; ; ) {
if (s1Start == limit1) {
return lengthResult;
}c1=s1[s1Start];
c2=s2[s2Start];
if (c1 != c2) {
break;
}++s1Start;
++s2Start;
}
limit1=start1 + length1;
limit2=start2 + length2;
if (c1.$c() >= 55296  && c2.$c() >= 55296   && codePointOrder ) {
if ((c1.$c() <= 56319  && (s1Start + 1) != limit1  && $I$(12,"isTrailSurrogate$C",[s1[(s1Start + 1)]]) ) || ($I$(12).isTrailSurrogate$C(c1) && start1 != s1Start  && $I$(12,"isLeadSurrogate$C",[s1[(s1Start - 1)]]) ) ) {
} else {
c1 = String.fromCharCode(c1.$c()- 10240);
}if ((c2.$c() <= 56319  && (s2Start + 1) != limit2  && $I$(12,"isTrailSurrogate$C",[s2[(s2Start + 1)]]) ) || ($I$(12).isTrailSurrogate$C(c2) && start2 != s2Start  && $I$(12,"isLeadSurrogate$C",[s2[(s2Start - 1)]]) ) ) {
} else {
c2 = String.fromCharCode(c2.$c()- 10240);
}}return c1.$c() - c2.$c();
}, 1);

Clazz.newMeth(C$, 'internalGetNXHangul$',  function () {
if (C$.nxCache[1] == null ) {
C$.nxCache[1]=Clazz.new_($I$(1,1).c$$I$I,[44032, 55203]);
}return C$.nxCache[1];
}, 1);

Clazz.newMeth(C$, 'internalGetNXCJKCompat$',  function () {
if (C$.nxCache[2] == null ) {
var set;
var hasDecomp;
set=Clazz.new_($I$(1,1).c$$S,["[:Ideographic:]"]);
hasDecomp=Clazz.new_($I$(1,1));
var it=Clazz.new_($I$(22,1).c$$sun_text_normalizer_UnicodeSet,[set]);
var start;
var end;
var norm32;
while (it.nextRange$() && (it.codepoint != $I$(22).IS_STRING) ){
start=it.codepoint;
end=it.codepointEnd;
while (start <= end){
norm32=C$.getNorm32$I(start);
if (Long.$gt((Long.$and(norm32,4)),0 )) {
hasDecomp.add$I(start);
}++start;
}
}
C$.nxCache[2]=hasDecomp;
}return C$.nxCache[2];
}, 1);

Clazz.newMeth(C$, 'internalGetNXUnicode$I',  function (options) {
options&=224;
if (options == 0) {
return null;
}if (C$.nxCache[options] == null ) {
var set=Clazz.new_($I$(1,1));
switch (options) {
case 32:
set.applyPattern$S("[:^Age=3.2:]");
break;
default:
return null;
}
C$.nxCache[options]=set;
}return C$.nxCache[options];
}, 1);

Clazz.newMeth(C$, 'internalGetNX$I',  function (options) {
options&=255;
if (C$.nxCache[options] == null ) {
if (options == 1) {
return C$.internalGetNXHangul$();
}if (options == 2) {
return C$.internalGetNXCJKCompat$();
}if ((options & 224) != 0 && (options & 31) == 0 ) {
return C$.internalGetNXUnicode$I(options);
}var set;
var other;
set=Clazz.new_($I$(1,1));
if ((options & 1) != 0 && null != (other=C$.internalGetNXHangul$())  ) {
set.addAll$sun_text_normalizer_UnicodeSet(other);
}if ((options & 2) != 0 && null != (other=C$.internalGetNXCJKCompat$())  ) {
set.addAll$sun_text_normalizer_UnicodeSet(other);
}if ((options & 224) != 0 && null != (other=C$.internalGetNXUnicode$I(options))  ) {
set.addAll$sun_text_normalizer_UnicodeSet(other);
}C$.nxCache[options]=set;
}return C$.nxCache[options];
}, 1);

Clazz.newMeth(C$, 'getNX$I',  function (options) {
if ((options&=255) == 0) {
return null;
} else {
return C$.internalGetNX$I(options);
}}, 1);

Clazz.newMeth(C$, 'nx_contains$sun_text_normalizer_UnicodeSet$I',  function (nx, c) {
return nx != null  && nx.contains$I(c) ;
}, 1);

Clazz.newMeth(C$, 'nx_contains$sun_text_normalizer_UnicodeSet$C$C',  function (nx, c, c2) {
return nx != null  && nx.contains$I(c2.$c() == 0  ? c.$c() : $I$(23).getRawSupplementary$C$C(c, c2)) ;
}, 1);

Clazz.newMeth(C$, 'getDecompose$IA$SA',  function (chars, decomps) {
var args=Clazz.new_($I$(13,1));
var length=0;
var norm32=0;
var ch=-1;
var index=0;
var i=0;
while (++ch < 195102){
if (ch == 12543) ch=63744;
 else if (ch == 65536) ch=119134;
 else if (ch == 119233) ch=194560;
norm32=C$.getNorm32$I(ch);
if (Long.$ne((Long.$and(norm32,4)),0 ) && i < chars.length ) {
chars[i]=ch;
index=C$.decompose$J$sun_text_normalizer_NormalizerImpl_DecomposeArgs(norm32, args);
decomps[i++]= String.instantialize(C$.extraData, index, args.length);
}}
return i;
}, 1);

Clazz.newMeth(C$, 'needSingleQuotation$C',  function (c) {
return (c.$c() >= 9  && c.$c() <= 13  ) || (c.$c() >= 32  && c.$c() <= 47  ) || (c.$c() >= 58  && c.$c() <= 64  ) || (c.$c() >= 91  && c.$c() <= 96  ) || (c.$c() >= 123  && c.$c() <= 126  )  ;
}, 1);

Clazz.newMeth(C$, 'canonicalDecomposeWithSingleQuotation$S',  function (string) {
var src=string.toCharArray$();
var srcIndex=0;
var srcLimit=src.length;
var dest=Clazz.array(Character.TYPE, [src.length * 3]);
var destIndex=0;
var destLimit=dest.length;
var buffer=Clazz.array(Character.TYPE, [3]);
var prevSrc;
var norm32;
var ccOrQCMask;
var qcMask=4;
var reorderStartIndex;
var length;
var c;
var c2;
var minNoMaybe=String.fromCharCode(C$.indexes[8]);
var cc;
var prevCC;
var trailCC;
var p;
var pStart;
ccOrQCMask=65280 | qcMask;
reorderStartIndex=0;
prevCC=0;
norm32=0;
c=String.fromCharCode(0);
pStart=0;
cc=trailCC=-1;
for (; ; ) {
prevSrc=srcIndex;
while (srcIndex != srcLimit && ((c=src[srcIndex]) < minNoMaybe || Long.$eq((Long.$and((norm32=C$.getNorm32$C(c)),ccOrQCMask)),0 )  || (c >= "\uac00" && c <= "\ud7a3" ) ) ){
prevCC=0;
++srcIndex;
}
if (srcIndex != prevSrc) {
length=srcIndex - prevSrc;
if ((destIndex + length) <= destLimit) {
System.arraycopy$O$I$O$I$I(src, prevSrc, dest, destIndex, length);
}destIndex+=length;
reorderStartIndex=destIndex;
}if (srcIndex == srcLimit) {
break;
}++srcIndex;
if (C$.isNorm32Regular$J(norm32)) {
c2=String.fromCharCode(0);
length=1;
} else {
if (srcIndex != srcLimit && Character.isLowSurrogate$C(c2=src[srcIndex]) ) {
++srcIndex;
length=2;
norm32=C$.getNorm32FromSurrogatePair$J$C(norm32, c2);
} else {
c2=String.fromCharCode(0);
length=1;
norm32=0;
}}if (Long.$eq((Long.$and(norm32,qcMask)),0 )) {
cc=trailCC=Long.$ival((Long.$and((255),(Long.$sr(norm32,8)))));
p=null;
pStart=-1;
} else {
var arg=Clazz.new_($I$(13,1));
pStart=C$.decompose$J$I$sun_text_normalizer_NormalizerImpl_DecomposeArgs(norm32, qcMask, arg);
p=C$.extraData;
length=arg.length;
cc=arg.cc;
trailCC=arg.trailCC;
if (length == 1) {
c=p[pStart];
c2=String.fromCharCode(0);
p=null;
pStart=-1;
}}if ((destIndex + length * 3) >= destLimit) {
var tmpBuf=Clazz.array(Character.TYPE, [destLimit * 2]);
System.arraycopy$O$I$O$I$I(dest, 0, tmpBuf, 0, destIndex);
dest=tmpBuf;
destLimit=dest.length;
}{
var reorderSplit=destIndex;
if (p == null ) {
if (C$.needSingleQuotation$C(c)) {
dest[destIndex++]="\'";
dest[destIndex++]=c;
dest[destIndex++]="\'";
trailCC=0;
} else if (cc != 0 && cc < prevCC ) {
destIndex+=length;
trailCC=C$.insertOrdered$CA$I$I$I$C$C$I(dest, reorderStartIndex, reorderSplit, destIndex, c, c2, cc);
} else {
dest[destIndex++]=c;
if (c2.$c() != 0 ) {
dest[destIndex++]=c2;
}}} else {
if (C$.needSingleQuotation$C(p[pStart])) {
dest[destIndex++]="\'";
dest[destIndex++]=p[pStart++];
dest[destIndex++]="\'";
--length;
do {
dest[destIndex++]=p[pStart++];
} while (--length > 0);
} else if (cc != 0 && cc < prevCC ) {
destIndex+=length;
trailCC=C$.mergeOrdered$CA$I$I$CA$I$I(dest, reorderStartIndex, reorderSplit, p, pStart, pStart + length);
} else {
do {
dest[destIndex++]=p[pStart++];
} while (--length > 0);
}}}prevCC=trailCC;
if (prevCC == 0) {
reorderStartIndex=destIndex;
}}
return  String.instantialize(dest, 0, destIndex);
}, 1);

Clazz.newMeth(C$, 'convert$S',  function (str) {
if (str == null ) {
return null;
}var ch=-1;
var dest=Clazz.new_($I$(24,1));
var iter=$I$(25).getInstance$S(str);
while ((ch=iter.nextCodePoint$()) != -1){
switch (ch) {
case 194664:
dest.append$CA(C$.corrigendum4MappingTable[0]);
break;
case 194676:
dest.append$CA(C$.corrigendum4MappingTable[1]);
break;
case 194847:
dest.append$CA(C$.corrigendum4MappingTable[2]);
break;
case 194911:
dest.append$CA(C$.corrigendum4MappingTable[3]);
break;
case 195007:
dest.append$CA(C$.corrigendum4MappingTable[4]);
break;
default:
$I$(12).append$StringBuffer$I(dest, ch);
break;
}
}
return dest.toString();
}, 1);

C$.$static$=function(){C$.$static$=0;
{
try {
C$.IMPL=Clazz.new_(C$);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
};
C$.nxCache=Clazz.array($I$(1), [256]);
C$.corrigendum4MappingTable=Clazz.array(Character.TYPE, -2, [Clazz.array(Character.TYPE, -1, ["\ud844", "\udf6a"]), Clazz.array(Character.TYPE, -1, ["\u5f33"]), Clazz.array(Character.TYPE, -1, ["\u43ab"]), Clazz.array(Character.TYPE, -1, ["\u7aae"]), Clazz.array(Character.TYPE, -1, ["\u4d57"])]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerImpl, "NormTrieImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.text.normalizer.Trie','sun.text.normalizer.Trie.DataManipulate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['normTrie','sun.text.normalizer.IntTrie']]]

Clazz.newMeth(C$, 'getFoldingOffset$I',  function (value) {
return 2048 + ((value >> (11)) & (32736));
});

C$.$static$=function(){C$.$static$=0;
C$.normTrie=null;
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerImpl, "FCDTrieImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.text.normalizer.Trie','sun.text.normalizer.Trie.DataManipulate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['fcdTrie','sun.text.normalizer.CharTrie']]]

Clazz.newMeth(C$, 'getFoldingOffset$I',  function (value) {
return value;
});

C$.$static$=function(){C$.$static$=0;
C$.fcdTrie=null;
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerImpl, "AuxTrieImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.text.normalizer.Trie','sun.text.normalizer.Trie.DataManipulate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['auxTrie','sun.text.normalizer.CharTrie']]]

Clazz.newMeth(C$, 'getFoldingOffset$I',  function (value) {
return (value & 1023) << 5;
});

C$.$static$=function(){C$.$static$=0;
C$.auxTrie=null;
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerImpl, "DecomposeArgs", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['cc','trailCC','length']]]

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerImpl, "NextCCArgs", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['c','c2'],'I',['next','limit'],'O',['source','char[]']]]

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerImpl, "PrevArgs", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['c','c2'],'I',['start','current'],'O',['src','char[]']]]

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerImpl, "NextCombiningArgs", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['c','c2','cc'],'I',['start','combiningIndex'],'O',['source','char[]']]]

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerImpl, "RecomposeArgs", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start','limit'],'O',['source','char[]']]]

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerImpl, "ComposePartArgs", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['prevCC','length']]]

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
