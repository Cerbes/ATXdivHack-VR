import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../actions'

class App extends Component {
  render() {
    const { fears, actions } = this.props
    const childrenWithProps = React.cloneElement(this.props.children, { fears, actions })
    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

const mapStateToProps = ({ fears }) => {
  return { fears }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
