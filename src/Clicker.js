import React, { Component } from 'react'

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.genRandom = this.genRandom.bind(this);
  }
  genRandom() {
    let rand = Math.floor(Math.random() * 10) + 1; //pick random number 1-10
    this.setState({ num: rand }); //update state with new rand
  }
  render() {
    return (
      < div >
        <h1>Number is: {this.state.num}</h1>
        {this.state.num === 7 && <h2>you win!</h2>}
        <button onClick={this.genRandom}>random number</button>
      </div >
    );
  }
}

export default Clicker;