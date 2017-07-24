import React from 'react'
import { shallow } from 'enzyme'
import Home from '../'

describe('Home', () => {

  it('should render login ', () => {
    const wrapper = shallow(<Home />)

    expect(wrapper).toMatchSnapshot()
  })

})
