(function(){var P$=Clazz.newPackage("sun.nio.cs.ext"),I$=[[0,'sun.misc.VM','sun.security.action.GetPropertyAction']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ExtendedCharsets", null, 'sun.nio.cs.AbstractCharsetProvider');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.initialized=false;
},1);

C$.$fields$=[['Z',['initialized']]
,['O',['instance','sun.nio.cs.ext.ExtendedCharsets']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["sun.nio.cs.ext"]);C$.$init$.apply(this);
this.charset$S$S$SA("Big5", "Big5", Clazz.array(String, -1, ["csBig5"]));
this.charset$S$S$SA("x-MS950-HKSCS-XP", "MS950_HKSCS_XP", Clazz.array(String, -1, ["MS950_HKSCS_XP"]));
this.charset$S$S$SA("x-MS950-HKSCS", "MS950_HKSCS", Clazz.array(String, -1, ["MS950_HKSCS"]));
this.charset$S$S$SA("x-windows-950", "MS950", Clazz.array(String, -1, ["ms950", "windows-950"]));
this.charset$S$S$SA("x-windows-874", "MS874", Clazz.array(String, -1, ["ms874", "ms-874", "windows-874"]));
this.charset$S$S$SA("x-EUC-TW", "EUC_TW", Clazz.array(String, -1, ["euc_tw", "euctw", "cns11643", "EUC-TW"]));
this.charset$S$S$SA("Big5-HKSCS", "Big5_HKSCS", Clazz.array(String, -1, ["Big5_HKSCS", "big5hk", "big5-hkscs", "big5hkscs"]));
this.charset$S$S$SA("x-Big5-HKSCS-2001", "Big5_HKSCS_2001", Clazz.array(String, -1, ["Big5_HKSCS_2001", "big5hk-2001", "big5-hkscs-2001", "big5-hkscs:unicode3.0", "big5hkscs-2001"]));
this.charset$S$S$SA("x-Big5-Solaris", "Big5_Solaris", Clazz.array(String, -1, ["Big5_Solaris"]));
this.charset$S$S$SA("GBK", "GBK", Clazz.array(String, -1, ["windows-936", "CP936"]));
this.charset$S$S$SA("GB18030", "GB18030", Clazz.array(String, -1, ["gb18030-2000"]));
this.charset$S$S$SA("GB2312", "EUC_CN", Clazz.array(String, -1, ["gb2312", "gb2312-80", "gb2312-1980", "euc-cn", "euccn", "x-EUC-CN", "EUC_CN"]));
this.charset$S$S$SA("x-mswin-936", "MS936", Clazz.array(String, -1, ["ms936", "ms_936"]));
this.charset$S$S$SA("Shift_JIS", "SJIS", Clazz.array(String, -1, ["sjis", "shift_jis", "shift-jis", "ms_kanji", "x-sjis", "csShiftJIS"]));
this.charset$S$S$SA("windows-31j", "MS932", Clazz.array(String, -1, ["MS932", "windows-932", "csWindows31J"]));
this.charset$S$S$SA("JIS_X0201", "JIS_X_0201", Clazz.array(String, -1, ["JIS0201", "JIS_X0201", "X0201", "csHalfWidthKatakana"]));
this.charset$S$S$SA("x-JIS0208", "JIS_X_0208", Clazz.array(String, -1, ["JIS0208", "JIS_C6226-1983", "iso-ir-87", "x0208", "JIS_X0208-1983", "csISO87JISX0208"]));
this.charset$S$S$SA("JIS_X0212-1990", "JIS_X_0212", Clazz.array(String, -1, ["JIS0212", "jis_x0212-1990", "x0212", "iso-ir-159", "csISO159JISX02121990"]));
this.charset$S$S$SA("x-SJIS_0213", "SJIS_0213", Clazz.array(String, -1, ["sjis-0213", "sjis_0213", "sjis:2004", "sjis_0213:2004", "shift_jis_0213:2004", "shift_jis:2004"]));
this.charset$S$S$SA("x-MS932_0213", "MS932_0213", Clazz.array(String, -1, ["MS932-0213", "MS932_0213", "MS932:2004", "windows-932-0213", "windows-932:2004"]));
this.charset$S$S$SA("EUC-JP", "EUC_JP", Clazz.array(String, -1, ["euc_jp", "eucjis", "eucjp", "Extended_UNIX_Code_Packed_Format_for_Japanese", "csEUCPkdFmtjapanese", "x-euc-jp", "x-eucjp"]));
this.charset$S$S$SA("x-euc-jp-linux", "EUC_JP_LINUX", Clazz.array(String, -1, ["euc_jp_linux", "euc-jp-linux"]));
this.charset$S$S$SA("x-eucjp-open", "EUC_JP_Open", Clazz.array(String, -1, ["EUC_JP_Solaris", "eucJP-open"]));
this.charset$S$S$SA("x-PCK", "PCK", Clazz.array(String, -1, ["pck"]));
this.charset$S$S$SA("ISO-2022-JP", "ISO2022_JP", Clazz.array(String, -1, ["iso2022jp", "jis", "csISO2022JP", "jis_encoding", "csjisencoding"]));
this.charset$S$S$SA("ISO-2022-JP-2", "ISO2022_JP_2", Clazz.array(String, -1, ["csISO2022JP2", "iso2022jp2"]));
this.charset$S$S$SA("x-windows-50221", "MS50221", Clazz.array(String, -1, ["ms50221", "cp50221"]));
this.charset$S$S$SA("x-windows-50220", "MS50220", Clazz.array(String, -1, ["ms50220", "cp50220"]));
this.charset$S$S$SA("x-windows-iso2022jp", "MSISO2022JP", Clazz.array(String, -1, ["windows-iso2022jp"]));
this.charset$S$S$SA("x-JISAutoDetect", "JISAutoDetect", Clazz.array(String, -1, ["JISAutoDetect"]));
this.charset$S$S$SA("EUC-KR", "EUC_KR", Clazz.array(String, -1, ["euc_kr", "ksc5601", "euckr", "ks_c_5601-1987", "ksc5601-1987", "ksc5601_1987", "ksc_5601", "csEUCKR", "5601"]));
this.charset$S$S$SA("x-windows-949", "MS949", Clazz.array(String, -1, ["ms949", "windows949", "windows-949", "ms_949"]));
this.charset$S$S$SA("x-Johab", "Johab", Clazz.array(String, -1, ["ksc5601-1992", "ksc5601_1992", "ms1361", "johab"]));
this.charset$S$S$SA("ISO-2022-KR", "ISO2022_KR", Clazz.array(String, -1, ["ISO2022KR", "csISO2022KR"]));
this.charset$S$S$SA("ISO-2022-CN", "ISO2022_CN", Clazz.array(String, -1, ["ISO2022CN", "csISO2022CN"]));
this.charset$S$S$SA("x-ISO-2022-CN-CNS", "ISO2022_CN_CNS", Clazz.array(String, -1, ["ISO2022CN_CNS", "ISO-2022-CN-CNS"]));
this.charset$S$S$SA("x-ISO-2022-CN-GB", "ISO2022_CN_GB", Clazz.array(String, -1, ["ISO2022CN_GB", "ISO-2022-CN-GB"]));
this.charset$S$S$SA("x-ISCII91", "ISCII91", Clazz.array(String, -1, ["iscii", "ST_SEV_358-88", "iso-ir-153", "csISO153GOST1976874", "ISCII91"]));
this.charset$S$S$SA("ISO-8859-3", "ISO_8859_3", Clazz.array(String, -1, ["iso8859_3", "8859_3", "ISO_8859-3:1988", "iso-ir-109", "ISO_8859-3", "ISO8859-3", "latin3", "l3", "ibm913", "ibm-913", "cp913", "913", "csISOLatin3"]));
this.charset$S$S$SA("ISO-8859-6", "ISO_8859_6", Clazz.array(String, -1, ["iso8859_6", "8859_6", "iso-ir-127", "ISO_8859-6", "ISO_8859-6:1987", "ISO8859-6", "ECMA-114", "ASMO-708", "arabic", "ibm1089", "ibm-1089", "cp1089", "1089", "csISOLatinArabic"]));
this.charset$S$S$SA("ISO-8859-8", "ISO_8859_8", Clazz.array(String, -1, ["iso8859_8", "8859_8", "iso-ir-138", "ISO_8859-8", "ISO_8859-8:1988", "ISO8859-8", "cp916", "916", "ibm916", "ibm-916", "hebrew", "csISOLatinHebrew"]));
this.charset$S$S$SA("x-ISO-8859-11", "ISO_8859_11", Clazz.array(String, -1, ["iso-8859-11", "iso8859_11"]));
this.charset$S$S$SA("TIS-620", "TIS_620", Clazz.array(String, -1, ["tis620", "tis620.2533"]));
this.charset$S$S$SA("windows-1255", "MS1255", Clazz.array(String, -1, ["cp1255"]));
this.charset$S$S$SA("windows-1256", "MS1256", Clazz.array(String, -1, ["cp1256"]));
this.charset$S$S$SA("windows-1258", "MS1258", Clazz.array(String, -1, ["cp1258"]));
this.charset$S$S$SA("x-IBM942", "IBM942", Clazz.array(String, -1, ["cp942", "ibm942", "ibm-942", "942"]));
this.charset$S$S$SA("x-IBM942C", "IBM942C", Clazz.array(String, -1, ["cp942C", "ibm942C", "ibm-942C", "942C"]));
this.charset$S$S$SA("x-IBM943", "IBM943", Clazz.array(String, -1, ["cp943", "ibm943", "ibm-943", "943"]));
this.charset$S$S$SA("x-IBM943C", "IBM943C", Clazz.array(String, -1, ["cp943C", "ibm943C", "ibm-943C", "943C"]));
this.charset$S$S$SA("x-IBM948", "IBM948", Clazz.array(String, -1, ["cp948", "ibm948", "ibm-948", "948"]));
this.charset$S$S$SA("x-IBM950", "IBM950", Clazz.array(String, -1, ["cp950", "ibm950", "ibm-950", "950"]));
this.charset$S$S$SA("x-IBM930", "IBM930", Clazz.array(String, -1, ["cp930", "ibm930", "ibm-930", "930"]));
this.charset$S$S$SA("x-IBM935", "IBM935", Clazz.array(String, -1, ["cp935", "ibm935", "ibm-935", "935"]));
this.charset$S$S$SA("x-IBM937", "IBM937", Clazz.array(String, -1, ["cp937", "ibm937", "ibm-937", "937"]));
this.charset$S$S$SA("x-IBM856", "IBM856", Clazz.array(String, -1, ["cp856", "ibm-856", "ibm856", "856"]));
this.charset$S$S$SA("IBM860", "IBM860", Clazz.array(String, -1, ["cp860", "ibm860", "ibm-860", "860", "csIBM860"]));
this.charset$S$S$SA("IBM861", "IBM861", Clazz.array(String, -1, ["cp861", "ibm861", "ibm-861", "861", "csIBM861", "cp-is"]));
this.charset$S$S$SA("IBM863", "IBM863", Clazz.array(String, -1, ["cp863", "ibm863", "ibm-863", "863", "csIBM863"]));
this.charset$S$S$SA("IBM864", "IBM864", Clazz.array(String, -1, ["cp864", "ibm864", "ibm-864", "864", "csIBM864"]));
this.charset$S$S$SA("IBM865", "IBM865", Clazz.array(String, -1, ["cp865", "ibm865", "ibm-865", "865", "csIBM865"]));
this.charset$S$S$SA("IBM868", "IBM868", Clazz.array(String, -1, ["cp868", "ibm868", "ibm-868", "868", "cp-ar", "csIBM868"]));
this.charset$S$S$SA("IBM869", "IBM869", Clazz.array(String, -1, ["cp869", "ibm869", "ibm-869", "869", "cp-gr", "csIBM869"]));
this.charset$S$S$SA("x-IBM921", "IBM921", Clazz.array(String, -1, ["cp921", "ibm921", "ibm-921", "921"]));
this.charset$S$S$SA("x-IBM1006", "IBM1006", Clazz.array(String, -1, ["cp1006", "ibm1006", "ibm-1006", "1006"]));
this.charset$S$S$SA("x-IBM1046", "IBM1046", Clazz.array(String, -1, ["cp1046", "ibm1046", "ibm-1046", "1046"]));
this.charset$S$S$SA("IBM1047", "IBM1047", Clazz.array(String, -1, ["cp1047", "ibm-1047", "1047"]));
this.charset$S$S$SA("x-IBM1098", "IBM1098", Clazz.array(String, -1, ["cp1098", "ibm1098", "ibm-1098", "1098"]));
this.charset$S$S$SA("IBM037", "IBM037", Clazz.array(String, -1, ["cp037", "ibm037", "ebcdic-cp-us", "ebcdic-cp-ca", "ebcdic-cp-wt", "ebcdic-cp-nl", "csIBM037", "cs-ebcdic-cp-us", "cs-ebcdic-cp-ca", "cs-ebcdic-cp-wt", "cs-ebcdic-cp-nl", "ibm-037", "ibm-37", "cpibm37", "037"]));
this.charset$S$S$SA("x-IBM1025", "IBM1025", Clazz.array(String, -1, ["cp1025", "ibm1025", "ibm-1025", "1025"]));
this.charset$S$S$SA("IBM1026", "IBM1026", Clazz.array(String, -1, ["cp1026", "ibm1026", "ibm-1026", "1026"]));
this.charset$S$S$SA("x-IBM1112", "IBM1112", Clazz.array(String, -1, ["cp1112", "ibm1112", "ibm-1112", "1112"]));
this.charset$S$S$SA("x-IBM1122", "IBM1122", Clazz.array(String, -1, ["cp1122", "ibm1122", "ibm-1122", "1122"]));
this.charset$S$S$SA("x-IBM1123", "IBM1123", Clazz.array(String, -1, ["cp1123", "ibm1123", "ibm-1123", "1123"]));
this.charset$S$S$SA("x-IBM1124", "IBM1124", Clazz.array(String, -1, ["cp1124", "ibm1124", "ibm-1124", "1124"]));
this.charset$S$S$SA("x-IBM1364", "IBM1364", Clazz.array(String, -1, ["cp1364", "ibm1364", "ibm-1364", "1364"]));
this.charset$S$S$SA("IBM273", "IBM273", Clazz.array(String, -1, ["cp273", "ibm273", "ibm-273", "273"]));
this.charset$S$S$SA("IBM277", "IBM277", Clazz.array(String, -1, ["cp277", "ibm277", "ibm-277", "277"]));
this.charset$S$S$SA("IBM278", "IBM278", Clazz.array(String, -1, ["cp278", "ibm278", "ibm-278", "278", "ebcdic-sv", "ebcdic-cp-se", "csIBM278"]));
this.charset$S$S$SA("IBM280", "IBM280", Clazz.array(String, -1, ["cp280", "ibm280", "ibm-280", "280"]));
this.charset$S$S$SA("IBM284", "IBM284", Clazz.array(String, -1, ["cp284", "ibm284", "ibm-284", "284", "csIBM284", "cpibm284"]));
this.charset$S$S$SA("IBM285", "IBM285", Clazz.array(String, -1, ["cp285", "ibm285", "ibm-285", "285", "ebcdic-cp-gb", "ebcdic-gb", "csIBM285", "cpibm285"]));
this.charset$S$S$SA("IBM297", "IBM297", Clazz.array(String, -1, ["cp297", "ibm297", "ibm-297", "297", "ebcdic-cp-fr", "cpibm297", "csIBM297"]));
this.charset$S$S$SA("IBM420", "IBM420", Clazz.array(String, -1, ["cp420", "ibm420", "ibm-420", "ebcdic-cp-ar1", "420", "csIBM420"]));
this.charset$S$S$SA("IBM424", "IBM424", Clazz.array(String, -1, ["cp424", "ibm424", "ibm-424", "424", "ebcdic-cp-he", "csIBM424"]));
this.charset$S$S$SA("IBM500", "IBM500", Clazz.array(String, -1, ["cp500", "ibm500", "ibm-500", "500", "ebcdic-cp-ch", "ebcdic-cp-bh", "csIBM500"]));
this.charset$S$S$SA("x-IBM833", "IBM833", Clazz.array(String, -1, ["cp833", "ibm833", "ibm-833"]));
this.charset$S$S$SA("x-IBM834", "IBM834", Clazz.array(String, -1, ["cp834", "ibm834", "834", "ibm-834"]));
this.charset$S$S$SA("IBM-Thai", "IBM838", Clazz.array(String, -1, ["cp838", "ibm838", "ibm-838", "838"]));
this.charset$S$S$SA("IBM870", "IBM870", Clazz.array(String, -1, ["cp870", "ibm870", "ibm-870", "870", "ebcdic-cp-roece", "ebcdic-cp-yu", "csIBM870"]));
this.charset$S$S$SA("IBM871", "IBM871", Clazz.array(String, -1, ["cp871", "ibm871", "ibm-871", "871", "ebcdic-cp-is", "csIBM871"]));
this.charset$S$S$SA("x-IBM875", "IBM875", Clazz.array(String, -1, ["cp875", "ibm875", "ibm-875", "875"]));
this.charset$S$S$SA("IBM918", "IBM918", Clazz.array(String, -1, ["cp918", "ibm-918", "918", "ebcdic-cp-ar2"]));
this.charset$S$S$SA("x-IBM922", "IBM922", Clazz.array(String, -1, ["cp922", "ibm922", "ibm-922", "922"]));
this.charset$S$S$SA("x-IBM1097", "IBM1097", Clazz.array(String, -1, ["cp1097", "ibm1097", "ibm-1097", "1097"]));
this.charset$S$S$SA("x-IBM949", "IBM949", Clazz.array(String, -1, ["cp949", "ibm949", "ibm-949", "949"]));
this.charset$S$S$SA("x-IBM949C", "IBM949C", Clazz.array(String, -1, ["cp949C", "ibm949C", "ibm-949C", "949C"]));
this.charset$S$S$SA("x-IBM939", "IBM939", Clazz.array(String, -1, ["cp939", "ibm939", "ibm-939", "939"]));
this.charset$S$S$SA("x-IBM933", "IBM933", Clazz.array(String, -1, ["cp933", "ibm933", "ibm-933", "933"]));
this.charset$S$S$SA("x-IBM1381", "IBM1381", Clazz.array(String, -1, ["cp1381", "ibm1381", "ibm-1381", "1381"]));
this.charset$S$S$SA("x-IBM1383", "IBM1383", Clazz.array(String, -1, ["cp1383", "ibm1383", "ibm-1383", "1383"]));
this.charset$S$S$SA("x-IBM970", "IBM970", Clazz.array(String, -1, ["cp970", "ibm970", "ibm-970", "ibm-eucKR", "970"]));
this.charset$S$S$SA("x-IBM964", "IBM964", Clazz.array(String, -1, ["cp964", "ibm964", "ibm-964", "964"]));
this.charset$S$S$SA("x-IBM33722", "IBM33722", Clazz.array(String, -1, ["cp33722", "ibm33722", "ibm-33722", "ibm-5050", "ibm-33722_vascii_vpua", "33722"]));
this.charset$S$S$SA("IBM01140", "IBM1140", Clazz.array(String, -1, ["cp1140", "ccsid01140", "cp01140", "1140", "ebcdic-us-037+euro"]));
this.charset$S$S$SA("IBM01141", "IBM1141", Clazz.array(String, -1, ["cp1141", "ccsid01141", "cp01141", "1141", "ebcdic-de-273+euro"]));
this.charset$S$S$SA("IBM01142", "IBM1142", Clazz.array(String, -1, ["cp1142", "ccsid01142", "cp01142", "1142", "ebcdic-no-277+euro", "ebcdic-dk-277+euro"]));
this.charset$S$S$SA("IBM01143", "IBM1143", Clazz.array(String, -1, ["cp1143", "ccsid01143", "cp01143", "1143", "ebcdic-fi-278+euro", "ebcdic-se-278+euro"]));
this.charset$S$S$SA("IBM01144", "IBM1144", Clazz.array(String, -1, ["cp1144", "ccsid01144", "cp01144", "1144", "ebcdic-it-280+euro"]));
this.charset$S$S$SA("IBM01145", "IBM1145", Clazz.array(String, -1, ["cp1145", "ccsid01145", "cp01145", "1145", "ebcdic-es-284+euro"]));
this.charset$S$S$SA("IBM01146", "IBM1146", Clazz.array(String, -1, ["cp1146", "ccsid01146", "cp01146", "1146", "ebcdic-gb-285+euro"]));
this.charset$S$S$SA("IBM01147", "IBM1147", Clazz.array(String, -1, ["cp1147", "ccsid01147", "cp01147", "1147", "ebcdic-fr-277+euro"]));
this.charset$S$S$SA("IBM01148", "IBM1148", Clazz.array(String, -1, ["cp1148", "ccsid01148", "cp01148", "1148", "ebcdic-international-500+euro"]));
this.charset$S$S$SA("IBM01149", "IBM1149", Clazz.array(String, -1, ["cp1149", "ccsid01149", "cp01149", "1149", "ebcdic-s-871+euro"]));
this.charset$S$S$SA("x-IBM1166", "IBM1166", Clazz.array(String, -1, ["cp1166", "ibm1166", "ibm-1166", "1166"]));
this.charset$S$S$SA("IBM290", "IBM290", Clazz.array(String, -1, ["cp290", "ibm290", "ibm-290", "csIBM290", "EBCDIC-JP-kana", "290"]));
this.charset$S$S$SA("x-IBM300", "IBM300", Clazz.array(String, -1, ["cp300", "ibm300", "ibm-300", "300"]));
this.charset$S$S$SA("x-MacRoman", "MacRoman", Clazz.array(String, -1, ["MacRoman"]));
this.charset$S$S$SA("x-MacCentralEurope", "MacCentralEurope", Clazz.array(String, -1, ["MacCentralEurope"]));
this.charset$S$S$SA("x-MacCroatian", "MacCroatian", Clazz.array(String, -1, ["MacCroatian"]));
this.charset$S$S$SA("x-MacGreek", "MacGreek", Clazz.array(String, -1, ["MacGreek"]));
this.charset$S$S$SA("x-MacCyrillic", "MacCyrillic", Clazz.array(String, -1, ["MacCyrillic"]));
this.charset$S$S$SA("x-MacUkraine", "MacUkraine", Clazz.array(String, -1, ["MacUkraine"]));
this.charset$S$S$SA("x-MacTurkish", "MacTurkish", Clazz.array(String, -1, ["MacTurkish"]));
this.charset$S$S$SA("x-MacArabic", "MacArabic", Clazz.array(String, -1, ["MacArabic"]));
this.charset$S$S$SA("x-MacHebrew", "MacHebrew", Clazz.array(String, -1, ["MacHebrew"]));
this.charset$S$S$SA("x-MacIceland", "MacIceland", Clazz.array(String, -1, ["MacIceland"]));
this.charset$S$S$SA("x-MacRomania", "MacRomania", Clazz.array(String, -1, ["MacRomania"]));
this.charset$S$S$SA("x-MacThai", "MacThai", Clazz.array(String, -1, ["MacThai"]));
this.charset$S$S$SA("x-MacSymbol", "MacSymbol", Clazz.array(String, -1, ["MacSymbol"]));
this.charset$S$S$SA("x-MacDingbat", "MacDingbat", Clazz.array(String, -1, ["MacDingbat"]));
C$.instance=this;
}, 1);

Clazz.newMeth(C$, 'init$',  function () {
if (this.initialized) return;
if (!$I$(1).isBooted$()) return;
var map=Clazz.new_($I$(2,1).c$$S,["sun.nio.cs.map"]).run$();
var sjisIsMS932=false;
var iso2022jpIsMS50221=false;
var iso2022jpIsMS50220=false;
var iso2022jpIsMSISO2022JP=false;
if (map != null ) {
var maps=map.split$S(",");
for (var i=0; i < maps.length; i++) {
if (maps[i].equalsIgnoreCase$S("Windows-31J/Shift_JIS")) {
sjisIsMS932=true;
} else if (maps[i].equalsIgnoreCase$S("x-windows-50221/ISO-2022-JP")) {
iso2022jpIsMS50221=true;
} else if (maps[i].equalsIgnoreCase$S("x-windows-50220/ISO-2022-JP")) {
iso2022jpIsMS50220=true;
} else if (maps[i].equalsIgnoreCase$S("x-windows-iso2022jp/ISO-2022-JP")) {
iso2022jpIsMSISO2022JP=true;
}}
}if (sjisIsMS932) {
this.deleteCharset$S$SA("Shift_JIS", Clazz.array(String, -1, ["sjis", "shift_jis", "shift-jis", "ms_kanji", "x-sjis", "csShiftJIS"]));
this.deleteCharset$S$SA("windows-31j", Clazz.array(String, -1, ["MS932", "windows-932", "csWindows31J"]));
this.charset$S$S$SA("Shift_JIS", "SJIS", Clazz.array(String, -1, ["sjis"]));
this.charset$S$S$SA("windows-31j", "MS932", Clazz.array(String, -1, ["MS932", "windows-932", "csWindows31J", "shift-jis", "ms_kanji", "x-sjis", "csShiftJIS", "shift_jis"]));
}if (iso2022jpIsMS50221 || iso2022jpIsMS50220 || iso2022jpIsMSISO2022JP  ) {
this.deleteCharset$S$SA("ISO-2022-JP", Clazz.array(String, -1, ["iso2022jp", "jis", "csISO2022JP", "jis_encoding", "csjisencoding"]));
if (iso2022jpIsMS50221) {
this.deleteCharset$S$SA("x-windows-50221", Clazz.array(String, -1, ["cp50221", "ms50221"]));
this.charset$S$S$SA("x-windows-50221", "MS50221", Clazz.array(String, -1, ["cp50221", "ms50221", "iso-2022-jp", "iso2022jp", "jis", "csISO2022JP", "jis_encoding", "csjisencoding"]));
} else if (iso2022jpIsMS50220) {
this.deleteCharset$S$SA("x-windows-50220", Clazz.array(String, -1, ["cp50220", "ms50220"]));
this.charset$S$S$SA("x-windows-50220", "MS50220", Clazz.array(String, -1, ["cp50220", "ms50220", "iso-2022-jp", "iso2022jp", "jis", "csISO2022JP", "jis_encoding", "csjisencoding"]));
} else {
this.deleteCharset$S$SA("x-windows-iso2022jp", Clazz.array(String, -1, ["windows-iso2022jp"]));
this.charset$S$S$SA("x-windows-iso2022jp", "MSISO2022JP", Clazz.array(String, -1, ["windows-iso2022jp", "iso-2022-jp", "iso2022jp", "jis", "csISO2022JP", "jis_encoding", "csjisencoding"]));
}}var osName=Clazz.new_($I$(2,1).c$$S,["os.name"]).run$();
if ("SunOS".equals$O(osName) || "Linux".equals$O(osName) || "AIX".equals$O(osName) || osName.contains$CharSequence("OS X")  ) {
this.charset$S$S$SA("x-COMPOUND_TEXT", "COMPOUND_TEXT", Clazz.array(String, -1, ["COMPOUND_TEXT", "x11-compound_text", "x-compound-text"]));
}this.initialized=true;
});

Clazz.newMeth(C$, 'aliasesFor$S',  function (charsetName) {
if (C$.instance == null ) return null;
return C$.instance.aliases$S(charsetName);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.instance=null;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
