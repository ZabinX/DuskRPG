(function(){var P$=Clazz.newPackage("_"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Entity");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.intNum=0;
this.intStep=-1;
this.intImage=0;
this.intMoveDirection=-1;
this.intFlag=0;
this.entNext=null;
},1);

C$.$fields$=[['D',['intLocX','intLocY'],'I',['intType','intNum','intStep','intImage','intTicks','intMoveDirection','intFlag'],'J',['ID'],'S',['strName'],'O',['entNext','_.Entity']]]

Clazz.newMeth(C$, 'c$$S$J$D$D$I$I$I',  function (instrName, inID, inintLocX, inintLocY, inImage, inStep, inintType) {
;C$.$init$.apply(this);
this.strName=instrName;
this.ID=inID;
this.intLocX=inintLocX;
this.intLocY=inintLocY;
this.intImage=inImage;
this.intStep=inStep;
this.intType=inintType;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2024-06-07 21:09:51 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
