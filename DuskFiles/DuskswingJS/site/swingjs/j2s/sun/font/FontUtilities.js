(function(){var P$=Clazz.newPackage("sun.font"),I$=[[0,'java.io.File','sun.font.FontAccess']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FontUtilities");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['isSolaris','isLinux','isMacOSX','isSolaris8','isSolaris9','isOpenSolaris','useT2K','isWindows','isOpenJDK','debugFonts','logging'],'O',['nameMap','String[][]']]]

Clazz.newMeth(C$, 'getFont2D$java_awt_Font',  function (font) {
return $I$(2).getFontAccess$().getFont2D$java_awt_Font(font);
}, 1);

Clazz.newMeth(C$, 'isNonSimpleChar$C',  function (ch) {
return C$.isComplexCharCode$I(ch.$c()) || (ch.$c() >= 55296  && ch.$c() <= 57343  ) ;
}, 1);

Clazz.newMeth(C$, 'isComplexCharCode$I',  function (code) {
if (code < 768 || code > 8303 ) {
return false;
} else if (code <= 879) {
return true;
} else if (code < 1424) {
return false;
} else if (code <= 1791) {
return true;
} else if (code < 2304) {
return false;
} else if (code <= 3711) {
return true;
} else if (code < 3840) {
return false;
} else if (code <= 4095) {
return true;
} else if (code < 4352) {
return false;
} else if (code < 4607) {
return true;
} else if (code < 6016) {
return false;
} else if (code <= 6143) {
return true;
} else if (code < 8204) {
return false;
} else if (code <= 8205) {
return true;
} else if (code >= 8234 && code <= 8238 ) {
return true;
} else if (code >= 8298 && code <= 8303 ) {
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'isLogging$',  function () {
return C$.logging;
}, 1);

Clazz.newMeth(C$, 'debugFonts$',  function () {
return C$.debugFonts;
}, 1);

Clazz.newMeth(C$, 'fontSupportsDefaultEncoding$java_awt_Font',  function (font) {
return false;
}, 1);

Clazz.newMeth(C$, 'mapFcName$S',  function (name) {
for (var i=0; i < C$.nameMap.length; i++) {
if (name.equals$O(C$.nameMap[i][0])) {
return C$.nameMap[i][1];
}}
return null;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.debugFonts=false;
{
var osName=System.getProperty$S$S("os.name", "unknownOS");
C$.isSolaris=osName.startsWith$S("SunOS");
C$.isLinux=osName.startsWith$S("Linux");
C$.isMacOSX=osName.contains$CharSequence("OS X");
C$.isWindows=osName.startsWith$S("Windows");
var jreLibDirName=System.getProperty$S$S("java.home", "") + $I$(1).separator + "lib" ;
var jreFontDirName=jreLibDirName + $I$(1).separator + "fonts" ;
var lucidaFile=Clazz.new_([jreFontDirName + $I$(1).separator + "LucidaSansRegular.ttf" ],$I$(1,1).c$$S);
C$.isOpenJDK=!lucidaFile.exists$();
var debugLevel=System.getProperty$S("sun.java2d.debugfonts");
if (debugLevel != null  && !debugLevel.equals$O("false") ) {
C$.debugFonts=true;
}if (C$.debugFonts) {
}};
C$.nameMap=Clazz.array(String, -2, [Clazz.array(String, -1, ["sans", "sansserif"]), Clazz.array(String, -1, ["sans-serif", "sansserif"]), Clazz.array(String, -1, ["serif", "serif"]), Clazz.array(String, -1, ["monospace", "monospaced"])]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
