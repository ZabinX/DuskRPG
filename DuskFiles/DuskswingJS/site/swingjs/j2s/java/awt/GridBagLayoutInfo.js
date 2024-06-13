(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,['java.awt.Component','.BaselineResizeBehavior']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GridBagLayoutInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['hasBaseline'],'I',['width','height','startx','starty'],'O',['minWidth','int[]','+minHeight','weightX','double[]','+weightY','baselineType','short[]','maxAscent','int[]','+maxDescent']]]

Clazz.newMeth(C$, 'c$$I$I',  function (width, height) {
;C$.$init$.apply(this);
this.width=width;
this.height=height;
}, 1);

Clazz.newMeth(C$, 'hasConstantDescent$I',  function (row) {
return ((this.baselineType[row] & (1 << $I$(1).CONSTANT_DESCENT.ordinal$())) != 0);
});

Clazz.newMeth(C$, 'hasBaseline$I',  function (row) {
return (this.hasBaseline && this.baselineType[row] != 0 );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
