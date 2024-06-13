(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),I$=[[0,'java.util.HashMap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LocaleDataMetaInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['resourceNameToLocales','java.util.HashMap']]]

Clazz.newMeth(C$, 'getSupportedLocaleString$S',  function (resourceName) {
return C$.resourceNameToLocales.get$O(resourceName);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.resourceNameToLocales=Clazz.new_($I$(1,1).c$$I,[7]);
{
C$.resourceNameToLocales.put$O$O("BreakIteratorInfo", "  |  th ");
C$.resourceNameToLocales.put$O$O("BreakIteratorRules", "  |  th ");
C$.resourceNameToLocales.put$O$O("FormatData", "  en en-AU en-CA en-GB en-IE en-IN en-MT en-NZ en-PH en-SG en-US en-ZA |  ar ar-JO ar-LB ar-SY be be-BY bg bg-BG ca ca-ES cs cs-CZ da da-DK de de-AT de-CH de-DE de-LU el el-CY el-GR es es-AR es-BO es-CL es-CO es-CR es-DO es-EC es-ES es-GT es-HN es-MX es-NI es-PA es-PE es-PR es-PY es-SV es-US es-UY es-VE et et-EE fi fi-FI fr fr-BE fr-CA fr-CH fr-FR ga ga-IE hi-IN hr hr-HR hu hu-HU in in-ID is is-IS it it-CH it-IT iw iw-IL ja ja-JP ko ko-KR lt lt-LT lv lv-LV mk mk-MK ms ms-MY mt mt-MT nl nl-BE nl-NL no no-NO no-NO-NY pl pl-PL pt pt-BR pt-PT ro ro-RO ru ru-RU sk sk-SK sl sl-SI sq sq-AL sr sr-BA sr-CS sr-Latn sr-Latn-ME sr-ME sr-RS sv sv-SE th th-TH tr tr-TR uk uk-UA vi vi-VN zh zh-CN zh-HK zh-SG zh-TW ");
C$.resourceNameToLocales.put$O$O("CollationData", "  |  ar be bg ca cs da el es et fi fr hi hr hu is iw ja ko lt lv mk no pl ro ru sk sl sq sr sr-Latn sv th tr uk vi zh zh-HK zh-TW ");
C$.resourceNameToLocales.put$O$O("TimeZoneNames", "  en en-CA en-GB en-IE |  de es fr hi it ja ko pt-BR sv zh-CN zh-HK zh-TW ");
C$.resourceNameToLocales.put$O$O("LocaleNames", "  en en-MT en-PH en-SG |  ar be bg ca cs da de el el-CY es es-US et fi fr ga hi hr hu in is it iw ja ko lt lv mk ms mt nl no no-NO-NY pl pt pt-PT ro ru sk sl sq sr sr-Latn sv th tr uk vi zh zh-HK zh-SG zh-TW ");
C$.resourceNameToLocales.put$O$O("CurrencyNames", "  en-AU en-CA en-GB en-IE en-IN en-MT en-NZ en-PH en-SG en-US en-ZA |  ar-AE ar-BH ar-DZ ar-EG ar-IQ ar-JO ar-KW ar-LB ar-LY ar-MA ar-OM ar-QA ar-SA ar-SD ar-SY ar-TN ar-YE be-BY bg-BG ca-ES cs-CZ da-DK de de-AT de-CH de-DE de-GR de-LU el-CY el-GR es es-AR es-BO es-CL es-CO es-CR es-CU es-DO es-EC es-ES es-GT es-HN es-MX es-NI es-PA es-PE es-PR es-PY es-SV es-US es-UY es-VE et-EE fi-FI fr fr-BE fr-CA fr-CH fr-FR fr-LU ga-IE hi-IN hr-HR hu-HU in-ID is-IS it it-CH it-IT iw-IL ja ja-JP ko ko-KR lt-LT lv-LV mk-MK ms-MY mt-MT nl-BE nl-NL no-NO pl-PL pt pt-BR pt-PT ro-RO ru-RU sk-SK sl-SI sq-AL sr-BA sr-CS sr-Latn-BA sr-Latn-ME sr-Latn-RS sr-ME sr-RS sv sv-SE th-TH tr-TR uk-UA vi-VN zh-CN zh-HK zh-SG zh-TW ");
C$.resourceNameToLocales.put$O$O("CalendarData", "  en en-GB en-IE en-MT |  ar be bg ca cs da de el el-CY es es-ES es-US et fi fr fr-CA hi hr hu in-ID is it iw ja ko lt lv mk ms-MY mt mt-MT nl no pl pt pt-BR pt-PT ro ru sk sl sq sr sr-Latn-BA sr-Latn-ME sr-Latn-RS sv th tr uk vi zh ");
C$.resourceNameToLocales.put$O$O("AvailableLocales", " en en-AU en-CA en-GB en-IE en-IN en-MT en-NZ en-PH en-SG en-US en-ZA | ar ar-AE ar-BH ar-DZ ar-EG ar-IQ ar-JO ar-KW ar-LB ar-LY ar-MA ar-OM ar-QA ar-SA ar-SD ar-SY ar-TN ar-YE be be-BY bg bg-BG ca ca-ES cs cs-CZ da da-DK de de-AT de-CH de-DE de-GR de-LU el el-CY el-GR es es-AR es-BO es-CL es-CO es-CR es-CU es-DO es-EC es-ES es-GT es-HN es-MX es-NI es-PA es-PE es-PR es-PY es-SV es-US es-UY es-VE et et-EE fi fi-FI fr fr-BE fr-CA fr-CH fr-FR fr-LU ga ga-IE hi hi-IN hr hr-HR hu hu-HU in in-ID is is-IS it it-CH it-IT iw iw-IL ja ja-JP ja-JP-JP ko ko-KR lt lt-LT lv lv-LV mk mk-MK ms ms-MY mt mt-MT nl nl-BE nl-NL no no-NO no-NO-NY pl pl-PL pt pt-BR pt-PT ro ro-RO ru ru-RU sk sk-SK sl sl-SI sq sq-AL sr sr-BA sr-CS sr-Latn sr-Latn-BA sr-Latn-ME sr-Latn-RS sr-ME sr-RS sv sv-SE th th-TH th-TH-TH tr tr-TR uk uk-UA vi vi-VN zh zh-CN zh-HK zh-SG zh-TW ");
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
