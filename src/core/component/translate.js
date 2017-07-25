import { addLocaleData } from 'react-intl'
import pt from 'react-intl/locale-data/pt'
import en from 'react-intl/locale-data/en'
import * as Tools from 'core/util/translate'
import ptBR from 'core/i18n/pt-BR'
import enUS from 'core/i18n/en-US'

const Translate = {}

addLocaleData([...pt, ...en])
addLocaleData({ locale: 'pt-BR', parentLocale: 'pt' })
addLocaleData({ locale: 'en-US', parentLocale: 'en' })

const languageDefault = 'en-US'

const supported = { 'en-US': enUS, 'pt-BR': ptBR }

const preferential = Tools.getPreferentialLanguage()

const language = supported[preferential] ? preferential : languageDefault

Tools.setLanguage(language)

Translate.language = language
Translate.messages = supported[language]

export default Translate
