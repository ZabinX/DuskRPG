(function(){var P$=Clazz.newPackage("sun.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CacheEnumerator", null, null, 'java.util.Enumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['keys'],'I',['index'],'O',['table','sun.misc.CacheEntry[]','entry','sun.misc.CacheEntry']]]

Clazz.newMeth(C$, 'c$$sun_misc_CacheEntryA$Z',  function (table, keys) {
;C$.$init$.apply(this);
this.table=table;
this.keys=keys;
this.index=table.length;
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
while (this.index >= 0){
while (this.entry != null )if (this.entry.check$() != null ) return true;
 else this.entry=this.entry.next;

while (--this.index >= 0 && (this.entry=this.table[this.index]) == null  );
}
return false;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
while (this.index >= 0){
if (this.entry == null ) while (--this.index >= 0 && (this.entry=this.table[this.index]) == null  );
if (this.entry != null ) {
var e=this.entry;
this.entry=e.next;
if (e.check$() != null ) return this.keys ? e.key : e.check$();
}}
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["CacheEnumerator"]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
