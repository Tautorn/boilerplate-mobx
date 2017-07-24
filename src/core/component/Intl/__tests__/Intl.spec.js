import React from 'react'
import { render } from 'enzyme'
import IntlProviderWrapper from '../../IntlProviderWrapper'
import Intl from '../'

describe('Intl', () => {

  it('should render Intl component', () => {
    const intl = render(
      <IntlProviderWrapper>
        <Intl id="hello" values={{ name: 'hi' }} />
      </IntlProviderWrapper>
    )

    expect(intl).toMatchSnapshot()
  })

  it('should render fallback when intl is not found', () => {
    const intl = render(
      <IntlProviderWrapper>
        <Intl id="errrorr" />
      </IntlProviderWrapper>
    )

    expect(intl).toMatchSnapshot()
  })
})
