import React, { Component, PropTypes } from 'react'
import { intlShape, injectIntl } from 'react-intl'

class Intl extends Component {

  getMessage(id, values) {
    const message = this.props.intl.messages[id]

    return message ? this.props.intl.formatMessage({ id }, values) : id
  }

  render() {
    const { id, values } = this.props

    return (
      <span>
        {this.getMessage(id, values)}
      </span>
    )
  }
}

Intl.propTypes = {
  id: PropTypes.string,
  intl: intlShape.isRequired,
  values: PropTypes.object
}

export default injectIntl(Intl)
