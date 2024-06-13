(function(){var P$=Clazz.newPackage("javax.swing.text.html.parser"),I$=[[0,'java.util.Hashtable']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Entity", null, null, 'javax.swing.text.html.parser.DTDConstants');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['type'],'S',['name'],'O',['data','char[]']]
,['O',['entityTypes','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$$S$I$CA',  function (name, type, data) {
;C$.$init$.apply(this);
this.name=name;
this.type=type;
this.data=data;
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type & 65535;
});

Clazz.newMeth(C$, 'isParameter$',  function () {
return (this.type & 262144) != 0;
});

Clazz.newMeth(C$, 'isGeneral$',  function () {
return (this.type & 65536) != 0;
});

Clazz.newMeth(C$, 'getData$',  function () {
return this.data;
});

Clazz.newMeth(C$, 'getString$',  function () {
return  String.instantialize(this.data, 0, this.data.length);
});

Clazz.newMeth(C$, 'name2type$S',  function (nm) {
var i=C$.entityTypes.get$O(nm);
return (i == null ) ? 1 : i.intValue$();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.entityTypes=Clazz.new_($I$(1,1));
{
C$.entityTypes.put$O$O("PUBLIC", Integer.valueOf$I(10));
C$.entityTypes.put$O$O("CDATA", Integer.valueOf$I(1));
C$.entityTypes.put$O$O("SDATA", Integer.valueOf$I(11));
C$.entityTypes.put$O$O("PI", Integer.valueOf$I(12));
C$.entityTypes.put$O$O("STARTTAG", Integer.valueOf$I(13));
C$.entityTypes.put$O$O("ENDTAG", Integer.valueOf$I(14));
C$.entityTypes.put$O$O("MS", Integer.valueOf$I(15));
C$.entityTypes.put$O$O("MD", Integer.valueOf$I(16));
C$.entityTypes.put$O$O("SYSTEM", Integer.valueOf$I(17));
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
