import React from 'react'
import Header from '../header/app'

class Clock extends React.Component {

  constructor() {
    super()

    /** No iniciar un state directamente con un props, this.state.prop = { x: props.val }
     *  altera la actualización de la prop posteriormente */

    this.timeID = ''
    this.state = {
      date: new Date()
    }
  }

  componentWillMount() {

    this.timeID = setInterval(() => {
      this.pick()
      console.log('this.timeID', this.timeID)
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeID)
  }

  pick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div className="main-content">
        <Header />
        <div className="content">
          <h3>Hora actual</h3>
          <p>{this.state.date.toLocaleTimeString()}</p>
        </div>
      </div>
    )
  }
}

export default Clock