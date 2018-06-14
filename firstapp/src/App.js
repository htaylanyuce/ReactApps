import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js'

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      deadline:'December 25, 2018',
      newDeadLine:''
    };
  }
  changeDeadline(){
    this.setState({deadline:this.state.newDeadLine});
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown {this.state.deadline}</div>
        <Clock
        deadline = {this.state.deadline} />
        <div>
          <input onChange={(event)=>this.setState({newDeadLine:event.target.value})} placeholder='new date'/>
          <button onClick={()=>this.changeDeadline()}>Submit</button>
        </div>
      </div>

    );
  }
}

export default App;
