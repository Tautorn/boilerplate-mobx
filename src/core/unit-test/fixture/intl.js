import React from 'react'

const Intl = ({ id, values }) =>
  <span>{id}{values}</span>

Intl.propTypes = {
  id: React.PropTypes.string,
  values: React.PropTypes.object
}

export default jest.mock('core/component/Intl', () => Intl)
