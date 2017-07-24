import React from 'react'
import { render } from 'react-dom'
import IntlProviderWrapper from 'core/component/IntlProviderWrapper'
import 'core/asset/style/core.scss'
import Routes from './Routes'

render (
  <IntlProviderWrapper>
    <Routes />
  </IntlProviderWrapper>,
document.getElementById('root')
)
