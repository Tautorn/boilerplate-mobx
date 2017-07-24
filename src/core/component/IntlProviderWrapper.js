import React, { PropTypes } from 'react'
import { IntlProvider } from 'react-intl'
import Translate from 'core/component/translate'

const language = Translate.language
const messages = Translate.messages

const IntlProviderWrapper = ({ children }) => (
  <IntlProvider locale={language} messages={messages}>
    {children}
  </IntlProvider>
)

IntlProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default IntlProviderWrapper
