import React from 'react'
import {CircGraph} from './CircGraph.react'


class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <h1>lorem ipsum dolor sit amet jojojo hahaha ES6 FF {this.state.name}</h1>
        <GenericButton buttonName='Generic Button bro' />
        <CircGraph info={this.props.info} />
      </div>
    )
  }
}

class GenericButton extends React.Component {
  render() {
    return (
      <button>{this.props.buttonName}</button>
    )
  }
}

React.render(<MainLayout />, document.getElementById('layout'))
