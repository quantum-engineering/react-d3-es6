import React from 'react'

export class CircGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      javascript: ['javascript', 40],
      golang: ['go', 60],
      name: ''
    }
  }
  updateChart(e) {
    e.preventDefault()
    this.setState({
      javascript: ['javascript', 88, 32, 29, Math.random() * 30],
      golang: ['go', 33, 12, 10, 78, Math.random() * 30]
    })
    console.log(this.state.javascript)
    console.log(this.state.golang)
    this.chart.load({
      columns: [
        this.state.javascript,
        this.state.golang
      ]
    })
  }
  componentDidMount() {
    console.log('first')
    this.chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['javascript', 0],
          ['go', 0],
        ],
        type : 'donut'
      },
      transition: {
        duration: 800
      },
      donut: {
        title: "Languages"
      }
    });
    setTimeout(function() {
      this.chart.load({
        columns: [
          this.state.javascript,
          this.state.golang
        ]
      })
    }.bind(this))
  }
  render() {
    console.log('render')
    return (
      <div>
        <div id='chart' className='c3'></div>
        <button onClick={this.updateChart.bind(this)}>Update!</button>
        <p>{this.state.name}</p>
      </div>
    )
  }
}
