(function(){var P$=Clazz.newPackage("sun.util.calendar"),I$=[[0,'java.util.concurrent.ConcurrentHashMap','java.util.HashMap','java.util.Arrays','java.io.DataInputStream','java.util.ArrayList','java.io.ByteArrayInputStream','java.util.Collections','sun.util.calendar.ZoneInfo',['sun.util.calendar.ZoneInfoFile','.ZoneOffsetTransitionRule'],'java.time.ZoneOffset','java.time.LocalDateTime']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ZoneInfoFile", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ZoneOffsetTransitionRule',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['J',['CURRT'],'S',['versionId'],'O',['zones','java.util.Map','+aliases','ruleArray','byte[][]','regions','String[]','indices','int[]','oldMappings','String[][]','toCalendarDOW','int[]','+toSTZTime']]]

Clazz.newMeth(C$, 'getZoneIds$',  function () {
C$.checkHaveData$();
var len=C$.regions.length + C$.oldMappings.length;
if (!false) {
len+=3;
}var ids=$I$(3).copyOf$OA$I(C$.regions, len);
var i=C$.regions.length;
if (!false) {
ids[i++]="EST";
ids[i++]="HST";
ids[i++]="MST";
}for (var j=0; j < C$.oldMappings.length; j++) {
ids[i++]=C$.oldMappings[j][0];
}
return ids;
}, 1);

Clazz.newMeth(C$, 'checkHaveData$',  function () {
if (C$.regions != null ) return;
var dis=Clazz.new_([Clazz.getClass(C$).getResourceAsStream$S("tzdb.dat")],$I$(4,1).c$$java_io_InputStream);
try {
C$.load$java_io_DataInputStream(dis);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException") || Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getZoneIds$I',  function (rawOffset) {
var ids=Clazz.new_($I$(5,1));
for (var id, $id = 0, $$id = C$.getZoneIds$(); $id<$$id.length&&((id=($$id[$id])),1);$id++) {
var zi=C$.getZoneInfo$S(id);
if (zi.getRawOffset$() == rawOffset) {
ids.add$O(id);
}}
var list=ids.toArray$OA(Clazz.array(String, [ids.size$()]));
$I$(3).sort$OA(list);
return list;
}, 1);

Clazz.newMeth(C$, 'getZoneInfo$S',  function (zoneId) {
if (zoneId == null ) {
return null;
}if (zoneId.startsWith$S("GMT")) return null;
C$.checkHaveData$();
var zi=C$.getZoneInfo0$S(zoneId.replace$C$C(" ", "_"));
if (zi != null ) {
zi=zi.clone$();
zi.setID$S(zoneId);
}return zi;
}, 1);

Clazz.newMeth(C$, 'getZoneInfo0$S',  function (zoneId) {
try {
var zi=C$.zones.get$O(zoneId);
if (zi != null ) {
return zi;
}var zid=zoneId;
if (C$.aliases.containsKey$O(zoneId)) {
zid=C$.aliases.get$O(zoneId);
}var index=$I$(3).binarySearch$OA$O(C$.regions, zid);
if (index < 0) {
return null;
}var bytes=C$.ruleArray[C$.indices[index]];
var dis=Clazz.new_([Clazz.new_($I$(6,1).c$$BA,[bytes])],$I$(4,1).c$$java_io_InputStream);
zi=C$.getZoneInfo$java_io_DataInput$S(dis, zid);
C$.zones.put$O$O(zoneId, zi);
return zi;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["Invalid binary time-zone data: TZDB:" + zoneId + ", version: " + C$.versionId , ex]);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getAliasMap$',  function () {
return $I$(7).unmodifiableMap$java_util_Map(C$.aliases);
}, 1);

Clazz.newMeth(C$, 'getVersion$',  function () {
return C$.versionId;
}, 1);

Clazz.newMeth(C$, 'getCustomTimeZone$S$I',  function (originalId, gmtOffset) {
var id=C$.toCustomID$I(gmtOffset);
return Clazz.new_($I$(8,1).c$$S$I,[id, gmtOffset]);
}, 1);

Clazz.newMeth(C$, 'toCustomID$I',  function (gmtOffset) {
var sign;
var offset=(gmtOffset/60000|0);
if (offset >= 0) {
sign="+";
} else {
sign="-";
offset=-offset;
}var hh=(offset/60|0);
var mm=offset % 60;
var buf=Clazz.array(Character.TYPE, -1, ["G", "M", "T", sign, "0", "0", ":", "0", "0"]);
if (hh >= 10) {
buf[4] = String.fromCharCode((buf[4]).$c()+ ((hh/10|0)));
}buf[5] = String.fromCharCode((buf[5]).$c()+ (hh % 10));
if (mm != 0) {
buf[7] = String.fromCharCode((buf[7]).$c()+ ((mm/10|0)));
buf[8] = String.fromCharCode((buf[8]).$c()+ (mm % 10));
}return  String.instantialize(buf);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addOldMapping$',  function () {
for (var alias, $alias = 0, $$alias = C$.oldMappings; $alias<$$alias.length&&((alias=($$alias[$alias])),1);$alias++) {
C$.aliases.put$O$O(alias[0], alias[1]);
}
if (false) {
C$.aliases.put$O$O("EST", "America/New_York");
C$.aliases.put$O$O("MST", "America/Denver");
C$.aliases.put$O$O("HST", "Pacific/Honolulu");
} else {
C$.zones.put$O$O("EST", Clazz.new_($I$(8,1).c$$S$I,["EST", -18000000]));
C$.zones.put$O$O("MST", Clazz.new_($I$(8,1).c$$S$I,["MST", -25200000]));
C$.zones.put$O$O("HST", Clazz.new_($I$(8,1).c$$S$I,["HST", -36000000]));
}}, 1);

Clazz.newMeth(C$, 'useOldMapping$',  function () {
return false;
}, 1);

Clazz.newMeth(C$, 'load$java_io_DataInputStream',  function (dis) {
if (dis.readByte$() != 1) {
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,["File format not recognised"]);
}var groupId=dis.readUTF$();
if ("TZDB".equals$O(groupId) == false ) {
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,["File format not recognised"]);
}var versionCount=dis.readShort$();
for (var i=0; i < versionCount; i++) {
C$.versionId=dis.readUTF$();
}
var regionCount=dis.readShort$();
var regionArray=Clazz.array(String, [regionCount]);
for (var i=0; i < regionCount; i++) {
regionArray[i]=dis.readUTF$();
}
var ruleCount=dis.readShort$();
C$.ruleArray=Clazz.array(Byte.TYPE, [ruleCount, null]);
for (var i=0; i < ruleCount; i++) {
var bytes=Clazz.array(Byte.TYPE, [dis.readShort$()]);
dis.readFully$BA(bytes);
C$.ruleArray[i]=bytes;
}
for (var i=0; i < versionCount; i++) {
regionCount=dis.readShort$();
C$.regions=Clazz.array(String, [regionCount]);
C$.indices=Clazz.array(Integer.TYPE, [regionCount]);
for (var j=0; j < regionCount; j++) {
C$.regions[j]=regionArray[dis.readShort$()];
C$.indices[j]=dis.readShort$();
}
}
C$.zones.remove$O("ROC");
for (var i=0; i < versionCount; i++) {
var aliasCount=dis.readShort$();
C$.aliases.clear$();
for (var j=0; j < aliasCount; j++) {
var alias=regionArray[dis.readShort$()];
var region=regionArray[dis.readShort$()];
C$.aliases.put$O$O(alias, region);
}
}
C$.addOldMapping$();
}, 1);

Clazz.newMeth(C$, 'getZoneInfo$java_io_DataInput$S',  function ($in, zoneId) {
var type=$in.readByte$();
var stdSize=$in.readInt$();
var stdTrans=Clazz.array(Long.TYPE, [stdSize]);
for (var i=0; i < stdSize; i++) {
stdTrans[i]=C$.readEpochSec$java_io_DataInput($in);
}
var stdOffsets=Clazz.array(Integer.TYPE, [stdSize + 1]);
for (var i=0; i < stdOffsets.length; i++) {
stdOffsets[i]=C$.readOffset$java_io_DataInput($in);
}
var savSize=$in.readInt$();
var savTrans=Clazz.array(Long.TYPE, [savSize]);
for (var i=0; i < savSize; i++) {
savTrans[i]=C$.readEpochSec$java_io_DataInput($in);
}
var savOffsets=Clazz.array(Integer.TYPE, [savSize + 1]);
for (var i=0; i < savOffsets.length; i++) {
savOffsets[i]=C$.readOffset$java_io_DataInput($in);
}
var ruleSize=$in.readByte$();
var rules=Clazz.array($I$(9), [ruleSize]);
for (var i=0; i < ruleSize; i++) {
rules[i]=Clazz.new_($I$(9,1).c$$java_io_DataInput,[$in]);
}
return C$.getZoneInfo$S$JA$IA$JA$IA$sun_util_calendar_ZoneInfoFile_ZoneOffsetTransitionRuleA(zoneId, stdTrans, stdOffsets, savTrans, savOffsets, rules);
}, 1);

Clazz.newMeth(C$, 'readOffset$java_io_DataInput',  function ($in) {
var offsetByte=$in.readByte$();
return offsetByte == 127 ? $in.readInt$() : offsetByte * 900;
}, 1);

Clazz.newMeth(C$, 'readEpochSec$java_io_DataInput',  function ($in) {
var hiByte=$in.readByte$() & 255;
if (hiByte == 255) {
return $in.readLong$();
} else {
var midByte=$in.readByte$() & 255;
var loByte=$in.readByte$() & 255;
var tot=((hiByte << 16) + (midByte << 8) + loByte );
return Long.$sub((Long.$mul(tot,900)),4575744000);
}}, 1);

Clazz.newMeth(C$, 'getZoneInfo$S$JA$IA$JA$IA$sun_util_calendar_ZoneInfoFile_ZoneOffsetTransitionRuleA',  function (zoneId, standardTransitions, standardOffsets, savingsInstantTransitions, wallOffsets, lastRules) {
var rawOffset=0;
var dstSavings=0;
var checksum=0;
var params=null;
var willGMTOffsetChange=false;
if (standardTransitions.length > 0) {
rawOffset=standardOffsets[standardOffsets.length - 1] * 1000;
willGMTOffsetChange=Long.$gt(standardTransitions[standardTransitions.length - 1],C$.CURRT );
} else rawOffset=standardOffsets[0] * 1000;
var transitions=null;
var offsets=null;
var nOffsets=0;
var nTrans=0;
if (savingsInstantTransitions.length != 0) {
transitions=Clazz.array(Long.TYPE, [250]);
offsets=Clazz.array(Integer.TYPE, [100]);
var lastyear=C$.getYear$J$I(savingsInstantTransitions[savingsInstantTransitions.length - 1], wallOffsets[savingsInstantTransitions.length - 1]);
var i=0;
var k=1;
while (i < savingsInstantTransitions.length && Long.$lt(savingsInstantTransitions[i],-2208988800 ) ){
++i;
}
if (i < savingsInstantTransitions.length) {
if (i < savingsInstantTransitions.length) {
offsets[0]=standardOffsets[standardOffsets.length - 1] * 1000;
nOffsets=1;
}nOffsets=C$.addTrans$JA$I$IA$I$J$I$I(transitions, nTrans++, offsets, nOffsets, -2208988800, wallOffsets[i], C$.getStandardOffset$JA$IA$J(standardTransitions, standardOffsets, -2208988800));
}for (; i < savingsInstantTransitions.length; i++) {
var trans=savingsInstantTransitions[i];
if (Long.$gt(trans,2145916799 )) {
lastyear=2037;
break;
}while (k < standardTransitions.length){
var trans_s=standardTransitions[k];
if (Long.$ge(trans_s,-2208988800 )) {
if (Long.$gt(trans_s,trans )) break;
if (Long.$lt(trans_s,trans )) {
if (nOffsets + 2 >= offsets.length) {
offsets=$I$(3).copyOf$IA$I(offsets, offsets.length + 100);
}if (nTrans + 1 >= transitions.length) {
transitions=$I$(3).copyOf$JA$I(transitions, transitions.length + 100);
}nOffsets=C$.addTrans$JA$I$IA$I$J$I$I(transitions, nTrans++, offsets, nOffsets, trans_s, wallOffsets[i], standardOffsets[k + 1]);
}}++k;
}
if (nOffsets + 2 >= offsets.length) {
offsets=$I$(3).copyOf$IA$I(offsets, offsets.length + 100);
}if (nTrans + 1 >= transitions.length) {
transitions=$I$(3).copyOf$JA$I(transitions, transitions.length + 100);
}nOffsets=C$.addTrans$JA$I$IA$I$J$I$I(transitions, nTrans++, offsets, nOffsets, trans, wallOffsets[i + 1], C$.getStandardOffset$JA$IA$J(standardTransitions, standardOffsets, trans));
}
while (k < standardTransitions.length){
var trans=standardTransitions[k];
if (Long.$ge(trans,-2208988800 )) {
var offset=wallOffsets[i];
var offsetIndex=C$.indexOf$IA$I$I$I(offsets, 0, nOffsets, offset);
if (offsetIndex == nOffsets) ++nOffsets;
transitions[nTrans++]=Long.$or((Long.$sl((Long.$mul(trans,1000)),12)),(Long.$and(offsetIndex,15)));
}++k;
}
if (lastRules.length > 1) {
while (lastyear++ < 2037){
for (var zotr, $zotr = 0, $$zotr = lastRules; $zotr<$$zotr.length&&((zotr=($$zotr[$zotr])),1);$zotr++) {
var trans=zotr.getTransitionEpochSecond$I(lastyear);
if (nOffsets + 2 >= offsets.length) {
offsets=$I$(3).copyOf$IA$I(offsets, offsets.length + 100);
}if (nTrans + 1 >= transitions.length) {
transitions=$I$(3).copyOf$JA$I(transitions, transitions.length + 100);
}nOffsets=C$.addTrans$JA$I$IA$I$J$I$I(transitions, nTrans++, offsets, nOffsets, trans, zotr.offsetAfter, zotr.standardOffset);
}
}
var startRule=lastRules[lastRules.length - 2];
var endRule=lastRules[lastRules.length - 1];
params=Clazz.array(Integer.TYPE, [10]);
if (startRule.offsetAfter - startRule.offsetBefore < 0 && endRule.offsetAfter - endRule.offsetBefore > 0 ) {
var tmp;
tmp=startRule;
startRule=endRule;
endRule=tmp;
}params[0]=startRule.month - 1;
var dom=startRule.dom;
var dow=startRule.dow;
if (dow == -1) {
params[1]=dom;
params[2]=0;
} else {
if (dom < 0 || dom >= 24 ) {
params[1]=-1;
params[2]=C$.toCalendarDOW[dow];
} else {
params[1]=dom;
params[2]=-C$.toCalendarDOW[dow];
}}params[3]=startRule.secondOfDay * 1000;
params[4]=C$.toSTZTime[startRule.timeDefinition];
params[5]=endRule.month - 1;
dom=endRule.dom;
dow=endRule.dow;
if (dow == -1) {
params[6]=dom;
params[7]=0;
} else {
if (dom < 0 || dom >= 24 ) {
params[6]=-1;
params[7]=C$.toCalendarDOW[dow];
} else {
params[6]=dom;
params[7]=-C$.toCalendarDOW[dow];
}}params[8]=endRule.secondOfDay * 1000;
params[9]=C$.toSTZTime[endRule.timeDefinition];
dstSavings=(startRule.offsetAfter - startRule.offsetBefore) * 1000;
if (params[2] == 6 && params[3] == 0  && (zoneId.equals$O("Asia/Amman") || zoneId.equals$O("Asia/Gaza") || zoneId.equals$O("Asia/Hebron")  ) ) {
params[2]=5;
params[3]=86400000;
}if (params[7] == 6 && params[8] == 0  && (zoneId.equals$O("Africa/Cairo")) ) {
params[7]=5;
params[8]=86400000;
}} else if (nTrans > 0) {
if (lastyear < 2037) {
var trans=Long.$sub(2114380800,(rawOffset/1000|0));
var offsetIndex=C$.indexOf$IA$I$I$I(offsets, 0, nOffsets, (rawOffset/1000|0));
if (offsetIndex == nOffsets) ++nOffsets;
transitions[nTrans++]=Long.$or(Long.$sl((Long.$mul(trans,1000)),12),(Long.$and(offsetIndex,15)));
} else if (savingsInstantTransitions.length > 2) {
var m=savingsInstantTransitions.length;
var startTrans=savingsInstantTransitions[m - 2];
var startOffset=wallOffsets[m - 2 + 1];
var startStd=C$.getStandardOffset$JA$IA$J(standardTransitions, standardOffsets, startTrans);
var endTrans=savingsInstantTransitions[m - 1];
var endOffset=wallOffsets[m - 1 + 1];
var endStd=C$.getStandardOffset$JA$IA$J(standardTransitions, standardOffsets, endTrans);
if (startOffset > startStd && endOffset == endStd ) {
m=savingsInstantTransitions.length - 2;
var before=$I$(10).ofTotalSeconds$I(wallOffsets[m]);
var after=$I$(10).ofTotalSeconds$I(wallOffsets[m + 1]);
var ldt=$I$(11).ofEpochSecond$J$I$java_time_ZoneOffset(savingsInstantTransitions[m], 0, before);
var startLDT;
if (after.getTotalSeconds$() > before.getTotalSeconds$()) {
startLDT=ldt;
} else {
startLDT=ldt.plusSeconds$J(wallOffsets[m + 1] - wallOffsets[m]);
}m=savingsInstantTransitions.length - 1;
before=$I$(10).ofTotalSeconds$I(wallOffsets[m]);
after=$I$(10).ofTotalSeconds$I(wallOffsets[m + 1]);
ldt=$I$(11).ofEpochSecond$J$I$java_time_ZoneOffset(savingsInstantTransitions[m], 0, before);
var endLDT;
if (after.getTotalSeconds$() > before.getTotalSeconds$()) {
endLDT=ldt.plusSeconds$J(wallOffsets[m + 1] - wallOffsets[m]);
} else {
endLDT=ldt;
}params=Clazz.array(Integer.TYPE, [10]);
params[0]=startLDT.getMonthValue$() - 1;
params[1]=startLDT.getDayOfMonth$();
params[2]=0;
params[3]=startLDT.toLocalTime$().toSecondOfDay$() * 1000;
params[4]=0;
params[5]=endLDT.getMonthValue$() - 1;
params[6]=endLDT.getDayOfMonth$();
params[7]=0;
params[8]=endLDT.toLocalTime$().toSecondOfDay$() * 1000;
params[9]=0;
dstSavings=(startOffset - startStd) * 1000;
}}}if (transitions != null  && transitions.length != nTrans ) {
if (nTrans == 0) {
transitions=null;
} else {
transitions=$I$(3).copyOf$JA$I(transitions, nTrans);
}}if (offsets != null  && offsets.length != nOffsets ) {
if (nOffsets == 0) {
offsets=null;
} else {
offsets=$I$(3).copyOf$IA$I(offsets, nOffsets);
}}if (transitions != null ) {
}}return Clazz.new_($I$(8,1).c$$S$I$I$I$JA$IA$IA$Z,[zoneId, rawOffset, dstSavings, checksum, transitions, offsets, params, willGMTOffsetChange]);
}, 1);

Clazz.newMeth(C$, 'getStandardOffset$JA$IA$J',  function (standardTransitions, standardOffsets, epochSec) {
var index=0;
for (; index < standardTransitions.length; index++) {
if (Long.$lt(epochSec,standardTransitions[index] )) {
break;
}}
return standardOffsets[index];
}, 1);

Clazz.newMeth(C$, 'getYear$J$I',  function (epochSecond, offset) {
var second=Long.$add(epochSecond,offset);
var epochDay=Math.floorDiv$J$J(second, 86400);
var zeroDay=Long.$add(epochDay,719528);
(zeroDay=Long.$sub(zeroDay,(60)));
var adjust=0;
if (Long.$lt(zeroDay,0 )) {
var adjustCycles=Long.$sub(Long.$div((Long.$add(zeroDay,1)),146097),1);
adjust=Long.$mul(adjustCycles,400);
(zeroDay=Long.$add(zeroDay,(Long.$mul((Long.$neg(adjustCycles)),146097))));
}var yearEst=Long.$div((Long.$add(Long.$mul(400,zeroDay),591)),146097);
var doyEst=Long.$sub(zeroDay,(Long.$add(Long.$sub(Long.$add(Long.$mul(365,yearEst),Long.$div(yearEst,4)),Long.$div(yearEst,100)),Long.$div(yearEst,400))));
if (Long.$lt(doyEst,0 )) {
(yearEst=Long.$inc(yearEst,-1));
doyEst=Long.$sub(zeroDay,(Long.$add(Long.$sub(Long.$add(Long.$mul(365,yearEst),Long.$div(yearEst,4)),Long.$div(yearEst,100)),Long.$div(yearEst,400))));
}(yearEst=Long.$add(yearEst,(adjust)));
var marchDoy0=Long.$ival(doyEst);
var marchMonth0=((marchDoy0 * 5 + 2)/153|0);
var month=(marchMonth0 + 2) % 12 + 1;
var dom=marchDoy0 - ((marchMonth0 * 306 + 5)/10|0) + 1;
(yearEst=Long.$add(yearEst,((marchMonth0/10|0))));
return Long.$ival(yearEst);
}, 1);

Clazz.newMeth(C$, 'indexOf$IA$I$I$I',  function (offsets, from, nOffsets, offset) {
offset*=1000;
for (; from < nOffsets; from++) {
if (offsets[from] == offset) return from;
}
offsets[from]=offset;
return from;
}, 1);

Clazz.newMeth(C$, 'addTrans$JA$I$IA$I$J$I$I',  function (transitions, nTrans, offsets, nOffsets, trans, offset, stdOffset) {
var offsetIndex=C$.indexOf$IA$I$I$I(offsets, 0, nOffsets, offset);
if (offsetIndex == nOffsets) ++nOffsets;
var dstIndex=0;
if (offset != stdOffset) {
dstIndex=C$.indexOf$IA$I$I$I(offsets, 1, nOffsets, offset - stdOffset);
if (dstIndex == nOffsets) ++nOffsets;
}transitions[nTrans]=Long.$or((Long.$sl((Long.$mul(trans,1000)),12)),(Long.$and((dstIndex << 4),240)) , (Long.$and(offsetIndex,15)) );
return nOffsets;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.zones=Clazz.new_($I$(1,1));
C$.aliases=Clazz.new_($I$(2,1));
C$.oldMappings=Clazz.array(String, -2, [Clazz.array(String, -1, ["ACT", "Australia/Darwin"]), Clazz.array(String, -1, ["AET", "Australia/Sydney"]), Clazz.array(String, -1, ["AGT", "America/Argentina/Buenos_Aires"]), Clazz.array(String, -1, ["ART", "Africa/Cairo"]), Clazz.array(String, -1, ["AST", "America/Anchorage"]), Clazz.array(String, -1, ["BET", "America/Sao_Paulo"]), Clazz.array(String, -1, ["BST", "Asia/Dhaka"]), Clazz.array(String, -1, ["CAT", "Africa/Harare"]), Clazz.array(String, -1, ["CNT", "America/St_Johns"]), Clazz.array(String, -1, ["CST", "America/Chicago"]), Clazz.array(String, -1, ["CTT", "Asia/Shanghai"]), Clazz.array(String, -1, ["EAT", "Africa/Addis_Ababa"]), Clazz.array(String, -1, ["ECT", "Europe/Paris"]), Clazz.array(String, -1, ["IET", "America/Indiana/Indianapolis"]), Clazz.array(String, -1, ["IST", "Asia/Kolkata"]), Clazz.array(String, -1, ["JST", "Asia/Tokyo"]), Clazz.array(String, -1, ["MIT", "Pacific/Apia"]), Clazz.array(String, -1, ["NET", "Asia/Yerevan"]), Clazz.array(String, -1, ["NST", "Pacific/Auckland"]), Clazz.array(String, -1, ["PLT", "Asia/Karachi"]), Clazz.array(String, -1, ["PNT", "America/Phoenix"]), Clazz.array(String, -1, ["PRT", "America/Puerto_Rico"]), Clazz.array(String, -1, ["PST", "America/Los_Angeles"]), Clazz.array(String, -1, ["SST", "Pacific/Guadalcanal"]), Clazz.array(String, -1, ["VST", "Asia/Ho_Chi_Minh"])]);
C$.CURRT=Long.$div(System.currentTimeMillis$(),1000);
C$.toCalendarDOW=Clazz.array(Integer.TYPE, -1, [-1, 2, 3, 4, 5, 6, 7, 1]);
C$.toSTZTime=Clazz.array(Integer.TYPE, -1, [2, 0, 1]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ZoneInfoFile, "ZoneOffsetTransitionRule", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['timeEndOfDay'],'B',['dom'],'I',['month','dow','secondOfDay','timeDefinition','standardOffset','offsetBefore','offsetAfter']]]

Clazz.newMeth(C$, 'c$$java_io_DataInput',  function ($in) {
;C$.$init$.apply(this);
var data=$in.readInt$();
var dowByte=(data & (3670016)) >>> 19;
var timeByte=(data & (507904)) >>> 14;
var stdByte=(data & (4080)) >>> 4;
var beforeByte=(data & (12)) >>> 2;
var afterByte=(data & 3);
this.month=data >>> 28;
this.dom=($b$[0] = (((data & (264241152)) >>> 22) - 32), $b$[0]);
this.dow=dowByte == 0 ? -1 : dowByte;
this.secondOfDay=timeByte == 31 ? $in.readInt$() : timeByte * 3600;
this.timeEndOfDay=timeByte == 24;
this.timeDefinition=(data & (12288)) >>> 12;
this.standardOffset=stdByte == 255 ? $in.readInt$() : (stdByte - 128) * 900;
this.offsetBefore=beforeByte == 3 ? $in.readInt$() : this.standardOffset + beforeByte * 1800;
this.offsetAfter=afterByte == 3 ? $in.readInt$() : this.standardOffset + afterByte * 1800;
}, 1);

Clazz.newMeth(C$, 'getTransitionEpochSecond$I',  function (year) {
var epochDay=0;
if (this.dom < 0) {
epochDay=C$.toEpochDay$I$I$I(year, this.month, C$.lengthOfMonth$I$I(year, this.month) + 1 + this.dom );
if (this.dow != -1) {
epochDay=C$.previousOrSame$J$I(epochDay, this.dow);
}} else {
epochDay=C$.toEpochDay$I$I$I(year, this.month, this.dom);
if (this.dow != -1) {
epochDay=C$.nextOrSame$J$I(epochDay, this.dow);
}}if (this.timeEndOfDay) {
(epochDay=Long.$add(epochDay,(1)));
}var difference=0;
switch (this.timeDefinition) {
case 0:
difference=0;
break;
case 1:
difference=-this.offsetBefore;
break;
case 2:
difference=-this.standardOffset;
break;
}
return Long.$add(Long.$add(Long.$mul(epochDay,86400),this.secondOfDay),difference);
});

Clazz.newMeth(C$, 'isLeapYear$I',  function (year) {
return ((year & 3) == 0) && ((year % 100) != 0 || (year % 400) == 0 ) ;
}, 1);

Clazz.newMeth(C$, 'lengthOfMonth$I$I',  function (year, month) {
switch (month) {
case 2:
return C$.isLeapYear$I(year) ? 29 : 28;
case 4:
case 6:
case 9:
case 11:
return 30;
default:
return 31;
}
}, 1);

Clazz.newMeth(C$, 'toEpochDay$I$I$I',  function (year, month, day) {
var y=year;
var m=month;
var total=0;
(total=Long.$add(total,(Long.$mul(365,y))));
if (Long.$ge(y,0 )) {
(total=Long.$add(total,(Long.$add(Long.$sub(Long.$div((Long.$add(y,3)),4),Long.$div((Long.$add(y,99)),100)),Long.$div((Long.$add(y,399)),400)))));
} else {
(total=Long.$sub(total,(Long.$add(Long.$sub(Long.$div(y,-4),Long.$div(y,-100)),Long.$div(y,-400)))));
}(total=Long.$add(total,((Long.$div((Long.$sub(Long.$mul(367,m),362)),12)))));
(total=Long.$add(total,(day - 1)));
if (Long.$gt(m,2 )) {
(total=Long.$inc(total,-1));
if (!C$.isLeapYear$I(year)) {
(total=Long.$inc(total,-1));
}}return Long.$sub(total,719528);
}, 1);

Clazz.newMeth(C$, 'previousOrSame$J$I',  function (epochDay, dayOfWeek) {
return C$.adjust$J$I$I(epochDay, dayOfWeek, 1);
}, 1);

Clazz.newMeth(C$, 'nextOrSame$J$I',  function (epochDay, dayOfWeek) {
return C$.adjust$J$I$I(epochDay, dayOfWeek, 0);
}, 1);

Clazz.newMeth(C$, 'adjust$J$I$I',  function (epochDay, dow, relative) {
var calDow=Long.$ival(Math.floorMod$J$J(Long.$add(epochDay,3), 7)) + 1;
if (relative < 2 && calDow == dow ) {
return epochDay;
}if ((relative & 1) == 0) {
var daysDiff=calDow - dow;
return Long.$add(epochDay,(daysDiff >= 0 ? 7 - daysDiff : -daysDiff));
} else {
var daysDiff=dow - calDow;
return Long.$sub(epochDay,(daysDiff >= 0 ? 7 - daysDiff : -daysDiff));
}}, 1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
