(function(){var P$=Clazz.newPackage("java.time"),p$1={},I$=[[0,'java.time.Clock','java.util.Objects','java.time.temporal.ChronoField','java.time.format.DateTimeFormatter','java.time.temporal.ChronoUnit','java.time.temporal.TemporalQueries','java.time.OffsetDateTime','java.time.ZonedDateTime','java.time.Ser']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Instant", null, null, ['java.time.temporal.Temporal', 'java.time.temporal.TemporalAdjuster', 'Comparable', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['nanos'],'J',['seconds']]
,['O',['EPOCH','java.time.Instant','+MIN','+MAX']]]

Clazz.newMeth(C$, 'now$',  function () {
return $I$(1).systemUTC$().instant$();
}, 1);

Clazz.newMeth(C$, 'now$java_time_Clock',  function (clock) {
$I$(2).requireNonNull$O$S(clock, "clock");
return clock.instant$();
}, 1);

Clazz.newMeth(C$, 'ofEpochSecond$J',  function (epochSecond) {
return C$.create$J$I(epochSecond, 0);
}, 1);

Clazz.newMeth(C$, 'ofEpochSecond$J$J',  function (epochSecond, nanoAdjustment) {
var secs=Math.addExact$J$J(epochSecond, Math.floorDiv$J$J(nanoAdjustment, 1000000000));
var nos=Long.$ival(Math.floorMod$J$J(nanoAdjustment, 1000000000));
return C$.create$J$I(secs, nos);
}, 1);

Clazz.newMeth(C$, 'ofEpochMilli$J',  function (epochMilli) {
var secs=Math.floorDiv$J$J(epochMilli, 1000);
var mos=Long.$ival(Math.floorMod$J$J(epochMilli, 1000));
return C$.create$J$I(secs, mos * 1000000);
}, 1);

Clazz.newMeth(C$, 'from$java_time_temporal_TemporalAccessor',  function (temporal) {
if (Clazz.instanceOf(temporal, "java.time.Instant")) {
return temporal;
}$I$(2).requireNonNull$O$S(temporal, "temporal");
try {
var instantSecs=temporal.getLong$java_time_temporal_TemporalField($I$(3).INSTANT_SECONDS);
var nanoOfSecond=temporal.get$java_time_temporal_TemporalField($I$(3).NANO_OF_SECOND);
return C$.ofEpochSecond$J$J(instantSecs, nanoOfSecond);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.time.DateTimeException")){
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S$Throwable,["Unable to obtain Instant from TemporalAccessor: " + temporal + " of type " + temporal.getClass$().getName$() , ex]);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'parse$CharSequence',  function (text) {
return $I$(4).ISO_INSTANT.parse$CharSequence$java_time_temporal_TemporalQuery(text, (P$.Instant$lambda1$||(P$.Instant$lambda1$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Instant$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.time.temporal.TemporalQuery', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['queryFrom$java_time_temporal_TemporalAccessor','queryFrom$O'],  function (t) { return $$.from$java_time_temporal_TemporalAccessor.apply(null,[t])});
})()
)); return Clazz.new_(P$.Instant$lambda1.$init$,[this, null])})(C$)))));
}, 1);

Clazz.newMeth(C$, 'create$J$I',  function (seconds, nanoOfSecond) {
if (Long.$eq((Long.$or(seconds,nanoOfSecond)),0 )) {
return C$.EPOCH;
}if (Long.$lt(seconds,[10218496,1880944619,-1] ) || Long.$gt(seconds,[9795839,1880937210,1] ) ) {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Instant exceeds minimum or maximum instant"]);
}return Clazz.new_(C$.c$$J$I,[seconds, nanoOfSecond]);
}, 1);

Clazz.newMeth(C$, 'c$$J$I',  function (epochSecond, nanos) {
;C$.$init$.apply(this);
this.seconds=epochSecond;
this.nanos=nanos;
}, 1);

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalField',  function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
return field === $I$(3).INSTANT_SECONDS  || field === $I$(3).NANO_OF_SECOND   || field === $I$(3).MICRO_OF_SECOND   || field === $I$(3).MILLI_OF_SECOND  ;
}return field != null  && field.isSupportedBy$java_time_temporal_TemporalAccessor(this) ;
});

Clazz.newMeth(C$, 'isSupported$java_time_temporal_TemporalUnit',  function (unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
return unit.isTimeBased$() || unit === $I$(5).DAYS  ;
}return unit != null  && unit.isSupportedBy$java_time_temporal_Temporal(this) ;
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField',  function (field) {
return P$.temporal.Temporal.superclazz.prototype.range$java_time_temporal_TemporalField.apply(this, [field]);
});

Clazz.newMeth(C$, 'get$java_time_temporal_TemporalField',  function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
switch (field) {
case $I$(3).NANO_OF_SECOND:
return this.nanos;
case $I$(3).MICRO_OF_SECOND:
return (this.nanos/1000|0);
case $I$(3).MILLI_OF_SECOND:
return (this.nanos/1000000|0);
case $I$(3).INSTANT_SECONDS:
$I$(3).INSTANT_SECONDS.checkValidIntValue$J(this.seconds);
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return this.range$java_time_temporal_TemporalField(field).checkValidIntValue$J$java_time_temporal_TemporalField(field.getFrom$java_time_temporal_TemporalAccessor(this), field);
});

Clazz.newMeth(C$, 'getLong$java_time_temporal_TemporalField',  function (field) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
switch (field) {
case $I$(3).NANO_OF_SECOND:
return this.nanos;
case $I$(3).MICRO_OF_SECOND:
return (this.nanos/1000|0);
case $I$(3).MILLI_OF_SECOND:
return (this.nanos/1000000|0);
case $I$(3).INSTANT_SECONDS:
return this.seconds;
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.getFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'getEpochSecond$',  function () {
return this.seconds;
});

Clazz.newMeth(C$, 'getNano$',  function () {
return this.nanos;
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalAdjuster',  function (adjuster) {
return adjuster.adjustInto$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'with$java_time_temporal_TemporalField$J',  function (field, newValue) {
if (Clazz.instanceOf(field, "java.time.temporal.ChronoField")) {
var f=field;
f.checkValidValue$J(newValue);
switch (f) {
case $I$(3).MILLI_OF_SECOND:
{
var nval=Long.$ival(newValue) * 1000000;
return (nval != this.nanos ? C$.create$J$I(this.seconds, nval) : this);
}case $I$(3).MICRO_OF_SECOND:
{
var nval=Long.$ival(newValue) * 1000;
return (nval != this.nanos ? C$.create$J$I(this.seconds, nval) : this);
}case $I$(3).NANO_OF_SECOND:
return (Long.$ne(newValue,this.nanos ) ? C$.create$J$I(this.seconds, Long.$ival(newValue)) : this);
case $I$(3).INSTANT_SECONDS:
return (Long.$ne(newValue,this.seconds ) ? C$.create$J$I(newValue, this.nanos) : this);
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported field: " + field]);
}return field.adjustInto$java_time_temporal_Temporal$J(this, newValue);
});

Clazz.newMeth(C$, 'truncatedTo$java_time_temporal_TemporalUnit',  function (unit) {
if (unit === $I$(5).NANOS ) {
return this;
}var unitDur=unit.getDuration$();
if (Long.$gt(unitDur.getSeconds$(),86400 )) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unit is too large to be used for truncation"]);
}var dur=unitDur.toNanos$();
if (Long.$ne((Long.$mod(86400000000000,dur)),0 )) {
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unit must divide into a standard day without remainder"]);
}var nod=Long.$add(Long.$mul((Long.$mod(this.seconds,86400)),1000000000),this.nanos);
var result=Long.$mul((Long.$div(nod,dur)),dur);
return this.plusNanos$J(Long.$sub(result,nod));
});

Clazz.newMeth(C$, 'plus$java_time_temporal_TemporalAmount',  function (amountToAdd) {
return amountToAdd.addTo$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'plus$J$java_time_temporal_TemporalUnit',  function (amountToAdd, unit) {
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
switch (unit) {
case $I$(5).NANOS:
return this.plusNanos$J(amountToAdd);
case $I$(5).MICROS:
return p$1.plus$J$J.apply(this, [Long.$div(amountToAdd,1000000), Long.$mul((Long.$mod(amountToAdd,1000000)),1000)]);
case $I$(5).MILLIS:
return this.plusMillis$J(amountToAdd);
case $I$(5).SECONDS:
return this.plusSeconds$J(amountToAdd);
case $I$(5).MINUTES:
return this.plusSeconds$J(Math.multiplyExact$J$J(amountToAdd, 60));
case $I$(5).HOURS:
return this.plusSeconds$J(Math.multiplyExact$J$J(amountToAdd, 3600));
case $I$(5).HALF_DAYS:
return this.plusSeconds$J(Math.multiplyExact$J$J(amountToAdd, 43200));
case $I$(5).DAYS:
return this.plusSeconds$J(Math.multiplyExact$J$J(amountToAdd, 86400));
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported unit: " + unit]);
}return unit.addTo$java_time_temporal_Temporal$J(this, amountToAdd);
});

Clazz.newMeth(C$, 'plusSeconds$J',  function (secondsToAdd) {
return p$1.plus$J$J.apply(this, [secondsToAdd, 0]);
});

Clazz.newMeth(C$, 'plusMillis$J',  function (millisToAdd) {
return p$1.plus$J$J.apply(this, [Long.$div(millisToAdd,1000), Long.$mul((Long.$mod(millisToAdd,1000)),1000000)]);
});

Clazz.newMeth(C$, 'plusNanos$J',  function (nanosToAdd) {
return p$1.plus$J$J.apply(this, [0, nanosToAdd]);
});

Clazz.newMeth(C$, 'plus$J$J',  function (secondsToAdd, nanosToAdd) {
if (Long.$eq((Long.$or(secondsToAdd,nanosToAdd)),0 )) {
return this;
}var epochSec=Math.addExact$J$J(this.seconds, secondsToAdd);
epochSec=Math.addExact$J$J(epochSec, Long.$div(nanosToAdd,1000000000));
nanosToAdd=Long.$mod(nanosToAdd,1000000000);
var nanoAdjustment=Long.$add(this.nanos,nanosToAdd);
return C$.ofEpochSecond$J$J(epochSec, nanoAdjustment);
}, p$1);

Clazz.newMeth(C$, 'minus$java_time_temporal_TemporalAmount',  function (amountToSubtract) {
return amountToSubtract.subtractFrom$java_time_temporal_Temporal(this);
});

Clazz.newMeth(C$, 'minus$J$java_time_temporal_TemporalUnit',  function (amountToSubtract, unit) {
return (Long.$eq(amountToSubtract,[0,549755813888,-1] ) ? this.plus$J$java_time_temporal_TemporalUnit([16777215,549755813887,1], unit).plus$J$java_time_temporal_TemporalUnit(1, unit) : this.plus$J$java_time_temporal_TemporalUnit((Long.$neg(amountToSubtract)), unit));
});

Clazz.newMeth(C$, 'minusSeconds$J',  function (secondsToSubtract) {
if (Long.$eq(secondsToSubtract,[0,549755813888,-1] )) {
return this.plusSeconds$J([16777215,549755813887,1]).plusSeconds$J(1);
}return this.plusSeconds$J((Long.$neg(secondsToSubtract)));
});

Clazz.newMeth(C$, 'minusMillis$J',  function (millisToSubtract) {
if (Long.$eq(millisToSubtract,[0,549755813888,-1] )) {
return this.plusMillis$J([16777215,549755813887,1]).plusMillis$J(1);
}return this.plusMillis$J((Long.$neg(millisToSubtract)));
});

Clazz.newMeth(C$, 'minusNanos$J',  function (nanosToSubtract) {
if (Long.$eq(nanosToSubtract,[0,549755813888,-1] )) {
return this.plusNanos$J([16777215,549755813887,1]).plusNanos$J(1);
}return this.plusNanos$J((Long.$neg(nanosToSubtract)));
});

Clazz.newMeth(C$, 'query$java_time_temporal_TemporalQuery',  function (query) {
if (query === $I$(6).precision$() ) {
return $I$(5).NANOS;
}if (query === $I$(6).chronology$()  || query === $I$(6).zoneId$()   || query === $I$(6).zone$()   || query === $I$(6).offset$()   || query === $I$(6).localDate$()   || query === $I$(6).localTime$()  ) {
return null;
}return query.queryFrom$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'adjustInto$java_time_temporal_Temporal',  function (temporal) {
return temporal.with$java_time_temporal_TemporalField$J($I$(3).INSTANT_SECONDS, this.seconds).with$java_time_temporal_TemporalField$J($I$(3).NANO_OF_SECOND, this.nanos);
});

Clazz.newMeth(C$, 'until$java_time_temporal_Temporal$java_time_temporal_TemporalUnit',  function (endExclusive, unit) {
var end=C$.from$java_time_temporal_TemporalAccessor(endExclusive);
if (Clazz.instanceOf(unit, "java.time.temporal.ChronoUnit")) {
var f=unit;
switch (f) {
case $I$(5).NANOS:
return p$1.nanosUntil$java_time_Instant.apply(this, [end]);
case $I$(5).MICROS:
return Long.$div(p$1.nanosUntil$java_time_Instant.apply(this, [end]),1000);
case $I$(5).MILLIS:
return Math.subtractExact$J$J(end.toEpochMilli$(), this.toEpochMilli$());
case $I$(5).SECONDS:
return p$1.secondsUntil$java_time_Instant.apply(this, [end]);
case $I$(5).MINUTES:
return Long.$div(p$1.secondsUntil$java_time_Instant.apply(this, [end]),60);
case $I$(5).HOURS:
return Long.$div(p$1.secondsUntil$java_time_Instant.apply(this, [end]),3600);
case $I$(5).HALF_DAYS:
return Long.$div(p$1.secondsUntil$java_time_Instant.apply(this, [end]),(43200));
case $I$(5).DAYS:
return Long.$div(p$1.secondsUntil$java_time_Instant.apply(this, [end]),(86400));
}
throw Clazz.new_(Clazz.load('java.time.temporal.UnsupportedTemporalTypeException').c$$S,["Unsupported unit: " + unit]);
}return unit.between$java_time_temporal_Temporal$java_time_temporal_Temporal(this, end);
});

Clazz.newMeth(C$, 'nanosUntil$java_time_Instant',  function (end) {
var secsDiff=Math.subtractExact$J$J(end.seconds, this.seconds);
var totalNanos=Math.multiplyExact$J$J(secsDiff, 1000000000);
return Math.addExact$J$J(totalNanos, end.nanos - this.nanos);
}, p$1);

Clazz.newMeth(C$, 'secondsUntil$java_time_Instant',  function (end) {
var secsDiff=Math.subtractExact$J$J(end.seconds, this.seconds);
var nanosDiff=end.nanos - this.nanos;
if (Long.$gt(secsDiff,0 ) && Long.$lt(nanosDiff,0 ) ) {
(secsDiff=Long.$inc(secsDiff,-1));
} else if (Long.$lt(secsDiff,0 ) && Long.$gt(nanosDiff,0 ) ) {
(secsDiff=Long.$inc(secsDiff,1));
}return secsDiff;
}, p$1);

Clazz.newMeth(C$, 'atOffset$java_time_ZoneOffset',  function (offset) {
return $I$(7).ofInstant$java_time_Instant$java_time_ZoneId(this, offset);
});

Clazz.newMeth(C$, 'atZone$java_time_ZoneId',  function (zone) {
return $I$(8).ofInstant$java_time_Instant$java_time_ZoneId(this, zone);
});

Clazz.newMeth(C$, 'toEpochMilli$',  function () {
var millis=Math.multiplyExact$J$J(this.seconds, 1000);
return Long.$add(millis,(this.nanos/1000000|0));
});

Clazz.newMeth(C$, ['compareTo$java_time_Instant','compareTo$O'],  function (otherInstant) {
var cmp=Long.compare$J$J(this.seconds, otherInstant.seconds);
if (cmp != 0) {
return cmp;
}return this.nanos - otherInstant.nanos;
});

Clazz.newMeth(C$, 'isAfter$java_time_Instant',  function (otherInstant) {
return this.compareTo$java_time_Instant(otherInstant) > 0;
});

Clazz.newMeth(C$, 'isBefore$java_time_Instant',  function (otherInstant) {
return this.compareTo$java_time_Instant(otherInstant) < 0;
});

Clazz.newMeth(C$, 'equals$O',  function (otherInstant) {
if (this === otherInstant ) {
return true;
}if (Clazz.instanceOf(otherInstant, "java.time.Instant")) {
var other=otherInstant;
return Long.$eq(this.seconds,other.seconds ) && this.nanos == other.nanos ;
}return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return (Long.$ival((Long.$xor(this.seconds,(Long.$usr(this.seconds,32)))))) + 51 * this.nanos;
});

Clazz.newMeth(C$, 'toString',  function () {
return $I$(4).ISO_INSTANT.format$java_time_temporal_TemporalAccessor(this);
});

Clazz.newMeth(C$, 'writeReplace',  function () {
return Clazz.new_($I$(9,1).c$$B$O,[2, this]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Deserialization via serialization delegate"]);
}, p$1);

Clazz.newMeth(C$, 'writeExternal$java_io_DataOutput',  function (out) {
out.writeLong$J(this.seconds);
out.writeInt$I(this.nanos);
});

Clazz.newMeth(C$, 'readExternal$java_io_DataInput',  function ($in) {
var seconds=$in.readLong$();
var nanos=$in.readInt$();
return C$.ofEpochSecond$J$J(seconds, nanos);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.EPOCH=Clazz.new_(C$.c$$J$I,[0, 0]);
C$.MIN=C$.ofEpochSecond$J$J([10218496,1880944619,-1], 0);
C$.MAX=C$.ofEpochSecond$J$J([9795839,1880937210,1], 999999999);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
