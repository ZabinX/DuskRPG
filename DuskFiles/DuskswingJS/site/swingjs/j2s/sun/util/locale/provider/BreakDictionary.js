(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),p$1={},I$=[[0,'java.security.AccessController','java.io.BufferedInputStream','InternalError','sun.util.locale.provider.RuleBasedBreakIterator','sun.text.CompactByteArray','sun.text.SupplementaryCharacterData']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BreakDictionary");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.columnMap=null;
this.supplementaryCharColumnMap=null;
this.table=null;
this.rowIndex=null;
this.rowIndexFlags=null;
this.rowIndexFlagsIndex=null;
this.rowIndexShifts=null;
},1);

C$.$fields$=[['I',['numCols','numColGroups'],'O',['columnMap','sun.text.CompactByteArray','supplementaryCharColumnMap','sun.text.SupplementaryCharacterData','table','short[]','+rowIndex','rowIndexFlags','int[]','rowIndexFlagsIndex','short[]','rowIndexShifts','byte[]']]
,['I',['supportedVersion']]]

Clazz.newMeth(C$, 'c$$S',  function (dictionaryName) {
;C$.$init$.apply(this);
p$1.readDictionaryFile$S.apply(this, [dictionaryName]);
}, 1);

Clazz.newMeth(C$, 'readDictionaryFile$S',  function (dictionaryName) {
var $in;
try {
$in=$I$(1,"doPrivileged$java_security_PrivilegedExceptionAction",[((P$.BreakDictionary$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "BreakDictionary$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return Clazz.new_([this.getClass$().getResourceAsStream$S("/sun/text/resources/" + this.$finals$.dictionaryName)],$I$(2,1).c$$java_io_InputStream);
});
})()
), Clazz.new_(P$.BreakDictionary$1.$init$,[this, {dictionaryName:dictionaryName}]))]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.PrivilegedActionException")){
throw Clazz.new_([e.toString(), e],$I$(3,1).c$$S$Throwable);
} else {
throw e;
}
}
var buf=Clazz.array(Byte.TYPE, [8]);
if ($in.read$BA(buf) != 8) {
throw Clazz.new_(Clazz.load('java.util.MissingResourceException').c$$S$S$S,["Wrong data length", dictionaryName, ""]);
}var version=$I$(4).getInt$BA$I(buf, 0);
if (version != C$.supportedVersion) {
throw Clazz.new_(Clazz.load('java.util.MissingResourceException').c$$S$S$S,["Dictionary version(" + version + ") is unsupported" , dictionaryName, ""]);
}var len=$I$(4).getInt$BA$I(buf, 4);
buf=Clazz.array(Byte.TYPE, [len]);
if ($in.read$BA(buf) != len) {
throw Clazz.new_(Clazz.load('java.util.MissingResourceException').c$$S$S$S,["Wrong data length", dictionaryName, ""]);
}$in.close$();
var l;
var offset=0;
l=$I$(4).getInt$BA$I(buf, offset);
offset+=4;
var temp=Clazz.array(Short.TYPE, [l]);
for (var i=0; i < l; i++, offset+=2) {
temp[i]=$I$(4).getShort$BA$I(buf, offset);
}
l=$I$(4).getInt$BA$I(buf, offset);
offset+=4;
var temp2=Clazz.array(Byte.TYPE, [l]);
for (var i=0; i < l; i++, offset++) {
temp2[i]=buf[offset];
}
this.columnMap=Clazz.new_($I$(5,1).c$$HA$BA,[temp, temp2]);
this.numCols=$I$(4).getInt$BA$I(buf, offset);
offset+=4;
this.numColGroups=$I$(4).getInt$BA$I(buf, offset);
offset+=4;
l=$I$(4).getInt$BA$I(buf, offset);
offset+=4;
this.rowIndex=Clazz.array(Short.TYPE, [l]);
for (var i=0; i < l; i++, offset+=2) {
this.rowIndex[i]=$I$(4).getShort$BA$I(buf, offset);
}
l=$I$(4).getInt$BA$I(buf, offset);
offset+=4;
this.rowIndexFlagsIndex=Clazz.array(Short.TYPE, [l]);
for (var i=0; i < l; i++, offset+=2) {
this.rowIndexFlagsIndex[i]=$I$(4).getShort$BA$I(buf, offset);
}
l=$I$(4).getInt$BA$I(buf, offset);
offset+=4;
this.rowIndexFlags=Clazz.array(Integer.TYPE, [l]);
for (var i=0; i < l; i++, offset+=4) {
this.rowIndexFlags[i]=$I$(4).getInt$BA$I(buf, offset);
}
l=$I$(4).getInt$BA$I(buf, offset);
offset+=4;
this.rowIndexShifts=Clazz.array(Byte.TYPE, [l]);
for (var i=0; i < l; i++, offset++) {
this.rowIndexShifts[i]=buf[offset];
}
l=$I$(4).getInt$BA$I(buf, offset);
offset+=4;
this.table=Clazz.array(Short.TYPE, [l]);
for (var i=0; i < l; i++, offset+=2) {
this.table[i]=$I$(4).getShort$BA$I(buf, offset);
}
l=$I$(4).getInt$BA$I(buf, offset);
offset+=4;
var temp3=Clazz.array(Integer.TYPE, [l]);
for (var i=0; i < l; i++, offset+=4) {
temp3[i]=$I$(4).getInt$BA$I(buf, offset);
}
this.supplementaryCharColumnMap=Clazz.new_($I$(6,1).c$$IA,[temp3]);
}, p$1);

Clazz.newMeth(C$, 'getNextStateFromCharacter$I$I',  function (row, ch) {
var col;
if (ch < 65536) {
col=this.columnMap.elementAt$C(String.fromCharCode(ch));
} else {
col=this.supplementaryCharColumnMap.getValue$I(ch);
}return this.getNextState$I$I(row, col);
});

Clazz.newMeth(C$, 'getNextState$I$I',  function (row, col) {
if (p$1.cellIsPopulated$I$I.apply(this, [row, col])) {
return p$1.internalAt$I$I.apply(this, [this.rowIndex[row], col + this.rowIndexShifts[row]]);
} else {
return $s$[0] = 0, $s$[0];
}});

Clazz.newMeth(C$, 'cellIsPopulated$I$I',  function (row, col) {
if (this.rowIndexFlagsIndex[row] < 0) {
return col == (($s$[0]=-this.rowIndexFlagsIndex[$k$=row],this.rowIndexFlagsIndex[$k$]=$s$[0],$s$[0]));
} else {
var flags=this.rowIndexFlags[this.rowIndexFlagsIndex[row] + (col >> 5)];
return (flags & (1 << (col & 31))) != 0;
}}, p$1);

Clazz.newMeth(C$, 'internalAt$I$I',  function (row, col) {
return this.table[row * this.numCols + col];
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.supportedVersion=1;
};
var $s$ = new Int16Array(1);
var $k$;

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
