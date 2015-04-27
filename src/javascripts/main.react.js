import React from 'react'
import {CircGraph} from './CircGraph.react'


class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <h1>React D3 Experiment</h1>
        <CircGraph info={this.props.info} />
      </div>
    )
  }
}

React.render(<MainLayout />, document.getElementById('layout'))
