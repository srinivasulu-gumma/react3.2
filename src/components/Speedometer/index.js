import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading"> Speedometer </h1>
        <img
          className="image"
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <p className="speed"> Speed is {speed}mph </p>
        <p className="description"> min limit is 0mph, max limit is 200mph </p>
        <div className="btnContainer">
          <button className="button1" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button className="button2" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
