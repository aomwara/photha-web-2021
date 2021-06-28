import locale6010b66b from '../../static/lang/en-US.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en"},
  vueI18nLoader: false,
  locales: [{"code":"ar","iso":"ar-AR","name":"Arabic","file":"ar-AR.js","dir":"rtl"},{"code":"de","iso":"de-DE","name":"Deutch","file":"de-DE.js","dir":"ltr"},{"code":"en","iso":"en-US","name":"English","file":"en-US.js","dir":"ltr"},{"code":"id","iso":"id-ID","name":"Bahasa Indonesia","file":"id-ID.js","dir":"ltr"},{"code":"pt","iso":"pt-PT","name":"Portuguese","file":"pt-PT.js","dir":"ltr"},{"code":"zh","iso":"zh-ZH","name":"Chinese","file":"zh-ZH.js","dir":"ltr"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "/Users/aomwara/Playground/photha2021/static/lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":true,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"ar","iso":"ar-AR","name":"Arabic","file":"ar-AR.js","dir":"rtl"},{"code":"de","iso":"de-DE","name":"Deutch","file":"de-DE.js","dir":"ltr"},{"code":"en","iso":"en-US","name":"English","file":"en-US.js","dir":"ltr"},{"code":"id","iso":"id-ID","name":"Bahasa Indonesia","file":"id-ID.js","dir":"ltr"},{"code":"pt","iso":"pt-PT","name":"Portuguese","file":"pt-PT.js","dir":"ltr"},{"code":"zh","iso":"zh-ZH","name":"Chinese","file":"zh-ZH.js","dir":"ltr"}],
  localeCodes: ["ar","de","en","id","pt","zh"],
}

export const localeMessages = {
  'en-US.js': () => Promise.resolve(locale6010b66b),
  'ar-AR.js': () => import('../../static/lang/ar-AR.js' /* webpackChunkName: "lang-ar-AR.js" */),
  'de-DE.js': () => import('../../static/lang/de-DE.js' /* webpackChunkName: "lang-de-DE.js" */),
  'id-ID.js': () => import('../../static/lang/id-ID.js' /* webpackChunkName: "lang-id-ID.js" */),
  'pt-PT.js': () => import('../../static/lang/pt-PT.js' /* webpackChunkName: "lang-pt-PT.js" */),
  'zh-ZH.js': () => import('../../static/lang/zh-ZH.js' /* webpackChunkName: "lang-zh-ZH.js" */),
}
