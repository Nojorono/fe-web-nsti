import locale2431a480 from '../../lang/id-ID.js'
import locale6010b66b from '../../lang/en-US.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: false,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"name":"Indonesia","code":"id","iso":"id-ID","file":"id-ID.js"},{"name":"English","code":"en","iso":"en-US","file":"en-US.js"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: "/Users/faridjuliano/Documents/nikkiClient/lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
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
  normalizedLocales: [{"name":"Indonesia","code":"id","iso":"id-ID","file":"id-ID.js"},{"name":"English","code":"en","iso":"en-US","file":"en-US.js"}],
  localeCodes: ["id","en"],
}

export const localeMessages = {
  'id-ID.js': () => Promise.resolve(locale2431a480),
  'en-US.js': () => Promise.resolve(locale6010b66b),
}
