(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),I$=[[0,'sun.util.locale.provider.LocaleProviderAdapter','java.text.RuleBasedCollator','InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CollatorProviderImpl", null, 'java.text.spi.CollatorProvider', 'sun.util.locale.provider.AvailableLanguageTags');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['type','sun.util.locale.provider.LocaleProviderAdapter.Type','langtags','java.util.Set']]]

Clazz.newMeth(C$, 'c$$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set',  function (type, langtags) {
Clazz.super_(C$, this);
this.type=type;
this.langtags=langtags;
}, 1);

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return $I$(1).toLocaleArray$java_util_Set(this.langtags);
});

Clazz.newMeth(C$, 'isSupportedLocale$java_util_Locale',  function (locale) {
return $I$(1).isSupportedLocale$java_util_Locale$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set(locale, this.type, this.langtags);
});

Clazz.newMeth(C$, 'getInstance$java_util_Locale',  function (locale) {
if (locale == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var result=null;
var colString=$I$(1).forType$sun_util_locale_provider_LocaleProviderAdapter_Type(this.type).getLocaleResources$java_util_Locale(locale).getCollationData$();
try {
result=Clazz.new_(["=\'\u200b\'=\u200c=\u200d=\u200e=\u200f=\u0000 =\u0001 =\u0002 =\u0003 =\u0004=\u0005 =\u0006 =\u0007 =\u0008 =\'\t\'=\'\u000b\' =\u000e=\u000f =\'\u0010\' =\u0011 =\u0012 =\u0013=\u0014 =\u0015 =\u0016 =\u0017 =\u0018=\u0019 =\u001a =\u001b =\u001c =\u001d=\u001e =\u001f ==\u0080 =\u0081 =\u0082 =\u0083 =\u0084 =\u0085=\u0086 =\u0087 =\u0088 =\u0089 =\u008a =\u008b=\u008c =\u008d =\u008e =\u008f =\u0090 =\u0091=\u0092 =\u0093 =\u0094 =\u0095 =\u0096 =\u0097=\u0098 =\u0099 =\u009a =\u009b =\u009c =\u009d=\u009e =\u009f;\' \';\'\u00a0\';\'\u2000\';\'\u2001\';\'\u2002\';\'\u2003\';\'\u2004\';\'\u2005\';\'\u2006\';\'\u2007\';\'\u2008\';\'\u2009\';\'\u200a\';\'\u3000\';\'\ufeff\';\'\r\' ;\'\t\' ;\'\n\';\'\f\';\'\u000b\';\u0301;\u0300;\u0306;\u0302;\u030c;\u030a;\u030d;\u0308;\u030b;\u0303;\u0307;\u0304;\u0337;\u0327;\u0328;\u0323;\u0332;\u0305;\u0309;\u030e;\u030f;\u0310;\u0311;\u0312;\u0313;\u0314;\u0315;\u0316;\u0317;\u0318;\u0319;\u031a;\u031b;\u031c;\u031d;\u031e;\u031f;\u0320;\u0321;\u0322;\u0324;\u0325;\u0326;\u0329;\u032a;\u032b;\u032c;\u032d;\u032e;\u032f;\u0330;\u0331;\u0333;\u0334;\u0335;\u0336;\u0338;\u0339;\u033a;\u033b;\u033c;\u033d;\u033e;\u033f;\u0342;\u0344;\u0345;\u0360;\u0361;\u0483;\u0484;\u0485;\u0486;\u20d0;\u20d1;\u20d2;\u20d3;\u20d4;\u20d5;\u20d6;\u20d7;\u20d8;\u20d9;\u20da;\u20db;\u20dc;\u20dd;\u20de;\u20df;\u20e0;\u20e1,\'-\';\u00ad;\u2010;\u2011;\u2012;\u2013;\u2014;\u2015;\u2212<\'_\'<\u00af<\',\'<\';\'<\':\'<\'!\'<\u00a1<\'?\'<\u00bf<\'/\'<\'.\'<\u00b4<\'`\'<\'^\'<\u00a8<\'~\'<\u00b7<\u00b8<\'\'\'<\'\"\'<\u00ab<\u00bb<\'(\'<\')\'<\'[\'<\']\'<\'{\'<\'}\'<\u00a7<\u00b6<\u00a9<\u00ae<\'@\'<\u00a4<\u0e3f<\u00a2<\u20a1<\u20a2<\'$\'<\u20ab<\u20ac<\u20a3<\u20a4<\u20a5<\u20a6<\u20a7<\u00a3<\u20a8<\u20aa<\u20a9<\u00a5<\'*\'<\'\\\'<\'&\'<\'#\'<\'%\'<\'+\'<\u00b1<\u00f7<\u00d7<\'<\'<\'=\'<\'>\'<\u00ac<\'|\'<\u00a6<\u00b0<\u00b5<0<1<2<3<4<5<6<7<8<9<\u00bc<\u00bd<\u00be<a,A<b,B<c,C<d,D<\u00f0,\u00d0<e,E<f,F<g,G<h,H<i,I<j,J<k,K<l,L<m,M<n,N<o,O<p,P<q,Q<r,R<s, S & SS,\u00df<t,T& TH, \u00de &TH, \u00fe <u,U<v,V<w,W<x,X<y,Y<z,Z&AE,\u00c6&AE,\u00e6&OE,\u0152&OE,\u0153" + colString],$I$(2,1).c$$S);
} catch (foo) {
if (Clazz.exceptionOf(foo,"java.text.ParseException")){
try {
result=Clazz.new_(["=\'\u200b\'=\u200c=\u200d=\u200e=\u200f=\u0000 =\u0001 =\u0002 =\u0003 =\u0004=\u0005 =\u0006 =\u0007 =\u0008 =\'\t\'=\'\u000b\' =\u000e=\u000f =\'\u0010\' =\u0011 =\u0012 =\u0013=\u0014 =\u0015 =\u0016 =\u0017 =\u0018=\u0019 =\u001a =\u001b =\u001c =\u001d=\u001e =\u001f ==\u0080 =\u0081 =\u0082 =\u0083 =\u0084 =\u0085=\u0086 =\u0087 =\u0088 =\u0089 =\u008a =\u008b=\u008c =\u008d =\u008e =\u008f =\u0090 =\u0091=\u0092 =\u0093 =\u0094 =\u0095 =\u0096 =\u0097=\u0098 =\u0099 =\u009a =\u009b =\u009c =\u009d=\u009e =\u009f;\' \';\'\u00a0\';\'\u2000\';\'\u2001\';\'\u2002\';\'\u2003\';\'\u2004\';\'\u2005\';\'\u2006\';\'\u2007\';\'\u2008\';\'\u2009\';\'\u200a\';\'\u3000\';\'\ufeff\';\'\r\' ;\'\t\' ;\'\n\';\'\f\';\'\u000b\';\u0301;\u0300;\u0306;\u0302;\u030c;\u030a;\u030d;\u0308;\u030b;\u0303;\u0307;\u0304;\u0337;\u0327;\u0328;\u0323;\u0332;\u0305;\u0309;\u030e;\u030f;\u0310;\u0311;\u0312;\u0313;\u0314;\u0315;\u0316;\u0317;\u0318;\u0319;\u031a;\u031b;\u031c;\u031d;\u031e;\u031f;\u0320;\u0321;\u0322;\u0324;\u0325;\u0326;\u0329;\u032a;\u032b;\u032c;\u032d;\u032e;\u032f;\u0330;\u0331;\u0333;\u0334;\u0335;\u0336;\u0338;\u0339;\u033a;\u033b;\u033c;\u033d;\u033e;\u033f;\u0342;\u0344;\u0345;\u0360;\u0361;\u0483;\u0484;\u0485;\u0486;\u20d0;\u20d1;\u20d2;\u20d3;\u20d4;\u20d5;\u20d6;\u20d7;\u20d8;\u20d9;\u20da;\u20db;\u20dc;\u20dd;\u20de;\u20df;\u20e0;\u20e1,\'-\';\u00ad;\u2010;\u2011;\u2012;\u2013;\u2014;\u2015;\u2212<\'_\'<\u00af<\',\'<\';\'<\':\'<\'!\'<\u00a1<\'?\'<\u00bf<\'/\'<\'.\'<\u00b4<\'`\'<\'^\'<\u00a8<\'~\'<\u00b7<\u00b8<\'\'\'<\'\"\'<\u00ab<\u00bb<\'(\'<\')\'<\'[\'<\']\'<\'{\'<\'}\'<\u00a7<\u00b6<\u00a9<\u00ae<\'@\'<\u00a4<\u0e3f<\u00a2<\u20a1<\u20a2<\'$\'<\u20ab<\u20ac<\u20a3<\u20a4<\u20a5<\u20a6<\u20a7<\u00a3<\u20a8<\u20aa<\u20a9<\u00a5<\'*\'<\'\\\'<\'&\'<\'#\'<\'%\'<\'+\'<\u00b1<\u00f7<\u00d7<\'<\'<\'=\'<\'>\'<\u00ac<\'|\'<\u00a6<\u00b0<\u00b5<0<1<2<3<4<5<6<7<8<9<\u00bc<\u00bd<\u00be<a,A<b,B<c,C<d,D<\u00f0,\u00d0<e,E<f,F<g,G<h,H<i,I<j,J<k,K<l,L<m,M<n,N<o,O<p,P<q,Q<r,R<s, S & SS,\u00df<t,T& TH, \u00de &TH, \u00fe <u,U<v,V<w,W<x,X<y,Y<z,Z&AE,\u00c6&AE,\u00e6&OE,\u0152&OE,\u0153"],$I$(2,1).c$$S);
} catch (bar) {
if (Clazz.exceptionOf(bar,"java.text.ParseException")){
throw Clazz.new_($I$(3,1).c$$Throwable,[bar]);
} else {
throw bar;
}
}
} else {
throw foo;
}
}
result.setDecomposition$I(0);
return result.clone$();
});

Clazz.newMeth(C$, 'getAvailableLanguageTags$',  function () {
return this.langtags;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
