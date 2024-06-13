(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.bmp"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BMPCompressionTypes");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['compressionTypeNames','String[]']]]

Clazz.newMeth(C$, 'getType$S',  function (typeString) {
for (var i=0; i < C$.compressionTypeNames.length; i++) if (C$.compressionTypeNames[i].equals$O(typeString)) return i;

return 0;
}, 1);

Clazz.newMeth(C$, 'getName$I',  function (type) {
return C$.compressionTypeNames[type];
}, 1);

Clazz.newMeth(C$, 'getCompressionTypes$',  function () {
return C$.compressionTypeNames.clone$();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.compressionTypeNames=Clazz.array(String, -1, ["BI_RGB", "BI_RLE8", "BI_RLE4", "BI_BITFIELDS", "BI_JPEG", "BI_PNG"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:51 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
