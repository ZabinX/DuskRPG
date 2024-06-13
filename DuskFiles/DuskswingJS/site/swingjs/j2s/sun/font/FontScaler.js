(function(){var P$=Clazz.newPackage("sun.font"),I$=[[0,'sun.font.Font2D','sun.font.FontUtilities','sun.font.NullFontScaler','sun.java2d.Disposer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FontScaler", null, null, 'sun.java2d.DisposerRecord');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.font=null;
this.nativeScaler=0;
this.disposed=false;
},1);

C$.$fields$=[['Z',['disposed'],'J',['nativeScaler'],'O',['font','java.lang.ref.WeakReference']]
,['O',['nullScaler','sun.font.FontScaler','scalerConstructor','java.lang.reflect.Constructor']]]

Clazz.newMeth(C$, 'getScaler$sun_font_Font2D$I$Z$I',  function (font, indexInCollection, supportsCJK, filesize) {
var scaler=null;
try {
var args=Clazz.array(java.lang.Object, -1, [font, Integer.valueOf$I(indexInCollection), Boolean.valueOf$Z(supportsCJK), Integer.valueOf$I(filesize)]);
scaler=C$.scalerConstructor.newInstance$OA(args);
$I$(4).addObjectRecord$O$sun_java2d_DisposerRecord(font, scaler);
} catch (e) {
scaler=C$.nullScaler;
}
return scaler;
}, 1);

Clazz.newMeth(C$, 'getNullScaler$',  function () {
if (C$.nullScaler == null ) {
C$.nullScaler=Clazz.new_($I$(3,1));
}return C$.nullScaler;
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
});

C$.$static$=function(){C$.$static$=0;
C$.nullScaler=null;
C$.scalerConstructor=null;
{
var scalerClass=null;
var arglst=Clazz.array(Class, -1, [Clazz.getClass($I$(1)), Integer.TYPE, Boolean.TYPE, Integer.TYPE]);
try {
if ($I$(2).isOpenJDK) {
scalerClass=Clazz.forName("sun.font.FreetypeFontScaler");
} else {
scalerClass=Clazz.forName("sun.font.T2KFontScaler");
}} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
scalerClass=Clazz.getClass($I$(3));
} else {
throw e;
}
}
try {
C$.scalerConstructor=scalerClass.getConstructor$ClassA(arglst);
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchMethodException")){
} else {
throw e;
}
}
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
