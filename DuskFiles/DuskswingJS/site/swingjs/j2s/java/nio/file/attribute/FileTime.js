(function(){var P$=Clazz.newPackage("java.nio.file.attribute"),p$1={},I$=[[0,'java.util.Objects','java.util.concurrent.TimeUnit','AssertionError','java.time.Instant']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileTime", null, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['value'],'S',['valueAsString'],'O',['unit','java.util.concurrent.TimeUnit','instant','java.time.Instant']]]

Clazz.newMeth(C$, 'c$$J$java_util_concurrent_TimeUnit$java_time_Instant',  function (value, unit, instant) {
;C$.$init$.apply(this);
this.value=value;
this.unit=unit;
this.instant=instant;
}, 1);

Clazz.newMeth(C$, 'from$J$java_util_concurrent_TimeUnit',  function (value, unit) {
$I$(1).requireNonNull$O$S(unit, "unit");
return Clazz.new_(C$.c$$J$java_util_concurrent_TimeUnit$java_time_Instant,[value, unit, null]);
}, 1);

Clazz.newMeth(C$, 'fromMillis$J',  function (value) {
return Clazz.new_(C$.c$$J$java_util_concurrent_TimeUnit$java_time_Instant,[value, $I$(2).MILLISECONDS, null]);
}, 1);

Clazz.newMeth(C$, 'from$java_time_Instant',  function (instant) {
$I$(1).requireNonNull$O$S(instant, "instant");
return Clazz.new_(C$.c$$J$java_util_concurrent_TimeUnit$java_time_Instant,[0, null, instant]);
}, 1);

Clazz.newMeth(C$, 'to$java_util_concurrent_TimeUnit',  function (unit) {
$I$(1).requireNonNull$O$S(unit, "unit");
if (this.unit != null ) {
return unit.convert$J$java_util_concurrent_TimeUnit(this.value, this.unit);
} else {
var secs=unit.convert$J$java_util_concurrent_TimeUnit(this.instant.getEpochSecond$(), $I$(2).SECONDS);
if (Long.$eq(secs,[0,549755813888,-1] ) || Long.$eq(secs,[16777215,549755813887,1] ) ) {
return secs;
}var nanos=unit.convert$J$java_util_concurrent_TimeUnit(this.instant.getNano$(), $I$(2).NANOSECONDS);
var r=Long.$add(secs,nanos);
if (Long.$lt((Long.$and((Long.$xor(secs,r)),(Long.$xor(nanos,r)))),0 )) {
return (Long.$lt(secs,0 )) ? [0,549755813888,-1] : [16777215,549755813887,1];
}return r;
}});

Clazz.newMeth(C$, 'toMillis$',  function () {
if (this.unit != null ) {
return this.unit.toMillis$J(this.value);
} else {
var secs=this.instant.getEpochSecond$();
var nanos=this.instant.getNano$();
var r=Long.$mul(secs,1000);
var ax=Math.abs$J(secs);
if ((Long.$ne(Long.$usr((Long.$or(ax,1000)),31),0 ))) {
if (Long.$ne((Long.$div(r,1000)),secs )) {
return (Long.$lt(secs,0 )) ? [0,549755813888,-1] : [16777215,549755813887,1];
}}return Long.$add(r,(nanos/1000000|0));
}});

Clazz.newMeth(C$, 'scale$J$J$J',  function (d, m, over) {
if (Long.$gt(d,over )) return [16777215,549755813887,1];
if (Long.$lt(d,(Long.$neg(over)) )) return [0,549755813888,-1];
return Long.$mul(d,m);
}, 1);

Clazz.newMeth(C$, 'toInstant$',  function () {
if (this.instant == null ) {
var secs=0;
var nanos=0;
switch (this.unit) {
case $I$(2).DAYS:
secs=C$.scale$J$J$J(this.value, 86400, 106751991167300);
break;
case $I$(2).HOURS:
secs=C$.scale$J$J$J(this.value, 3600, 2562047788015215);
break;
case $I$(2).MINUTES:
secs=C$.scale$J$J$J(this.value, 60, [2236962,9162596898,1]);
break;
case $I$(2).SECONDS:
secs=this.value;
break;
case $I$(2).MILLISECONDS:
secs=Math.floorDiv$J$J(this.value, 1000);
nanos=Long.$ival(Math.floorMod$J$J(this.value, 1000)) * 1000000;
break;
case $I$(2).MICROSECONDS:
secs=Math.floorDiv$J$J(this.value, 1000000);
nanos=Long.$ival(Math.floorMod$J$J(this.value, 1000000)) * 1000;
break;
case $I$(2).NANOSECONDS:
secs=Math.floorDiv$J$J(this.value, 1000000000);
nanos=Long.$ival(Math.floorMod$J$J(this.value, 1000000000));
break;
default:
throw Clazz.new_($I$(3,1).c$$O,["Unit not handled"]);
}
if (Long.$le(secs,[10218496,1880944619,-1] )) this.instant=$I$(4).MIN;
 else if (Long.$ge(secs,[9795839,1880937210,1] )) this.instant=$I$(4).MAX;
 else this.instant=$I$(4).ofEpochSecond$J$J(secs, nanos);
}return this.instant;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
return (Clazz.instanceOf(obj, "java.nio.file.attribute.FileTime")) ? this.compareTo$java_nio_file_attribute_FileTime(obj) == 0 : false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.toInstant$().hashCode$();
});

Clazz.newMeth(C$, 'toDays',  function () {
if (this.unit != null ) {
return this.unit.toDays$J(this.value);
} else {
return $I$(2).SECONDS.toDays$J(this.toInstant$().getEpochSecond$());
}}, p$1);

Clazz.newMeth(C$, 'toExcessNanos$J',  function (days) {
if (this.unit != null ) {
return this.unit.toNanos$J(Long.$sub(this.value,this.unit.convert$J$java_util_concurrent_TimeUnit(days, $I$(2).DAYS)));
} else {
return $I$(2).SECONDS.toNanos$J(Long.$sub(this.toInstant$().getEpochSecond$(),$I$(2).DAYS.toSeconds$J(days)));
}}, p$1);

Clazz.newMeth(C$, ['compareTo$java_nio_file_attribute_FileTime','compareTo$O'],  function (other) {
if (this.unit != null  && this.unit === other.unit  ) {
return Long.compare$J$J(this.value, other.value);
} else {
var secs=this.toInstant$().getEpochSecond$();
var secsOther=other.toInstant$().getEpochSecond$();
var cmp=Long.compare$J$J(secs, secsOther);
if (cmp != 0) {
return cmp;
}cmp=Long.compare$J$J(this.toInstant$().getNano$(), other.toInstant$().getNano$());
if (cmp != 0) {
return cmp;
}if (Long.$ne(secs,[9795839,1880937210,1] ) && Long.$ne(secs,[10218496,1880944619,-1] ) ) {
return 0;
}var days=p$1.toDays.apply(this, []);
var daysOther=p$1.toDays.apply(other, []);
if (Long.$eq(days,daysOther )) {
return Long.compare$J$J(p$1.toExcessNanos$J.apply(this, [days]), p$1.toExcessNanos$J.apply(other, [daysOther]));
}return Long.compare$J$J(days, daysOther);
}});

Clazz.newMeth(C$, 'append$StringBuilder$I$I',  function (sb, w, d) {
while (w > 0){
sb.append$C(String.fromCharCode(((d/w|0) + 48)));
d=d % w;
w=(w/(10)|0);
}
return sb;
}, p$1);

Clazz.newMeth(C$, 'toString',  function () {
if (this.valueAsString == null ) {
var secs=0;
var nanos=0;
if (this.instant == null  && this.unit.compareTo$Enum($I$(2).SECONDS) >= 0 ) {
secs=this.unit.toSeconds$J(this.value);
} else {
secs=this.toInstant$().getEpochSecond$();
nanos=this.toInstant$().getNano$();
}this.valueAsString=? new Date(secs * 1000).toISOString() ||"";
}return this.valueAsString;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:23 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
