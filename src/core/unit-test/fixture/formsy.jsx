/*eslint-disable */
import React, { PropTypes } from 'react'

function HOC(Component) {
  class FormsyHOC extends React.Component {

    static get propTypes() {
      return {
        setValue: PropTypes.func,
        setValidations: PropTypes.func,
        isValid: PropTypes.func,
        isPristine: PropTypes.func,
        getErrorMessage: PropTypes.func
      }
    }

    static get defaultProps() {
      return {
        isValid: () => true,
        isPristine: () => true,
        getErrorMessage: () => null,
        setValue: jest.fn(),
        setValidations: jest.fn()
      }
    }

    render() {
      return <Component {...this.props} ref="children" />
    }
  }

  return FormsyHOC
}


function Formsy() {
  return {
    HOC: Component => HOC(Component)
  }
}

export default jest.mock('formsy-react', Formsy)
