import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import { bindActionCreators } from 'redux'
import Login from './Login';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "http://localhost:4001",      
      color: 'red'
    };
  }

  // sending sockets
  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('change color', this.state.color) // change 'red' to this.state.color
  }

  ///
  
  // adding the function
  setColor = (color) => {
    this.setState({ color })
  }
  
  ///

  render() {
   

    // const socket = socketIOClient(this.state.endpoint);
    // socket.on('change color', (col) => {
    //   document.body.style.backgroundColor = col
    // })
    console.log(this)
    return (
      <div >
        {/* <button onClick={() => this.send() }>Change Color</button>
        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={() => this.setColor('red')}>Red</button> */}
       {this.props.children}
      </div>
    )
  }
}
export default App;