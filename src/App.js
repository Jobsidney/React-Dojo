import logo from './logo.svg';
import NavBar from './navBar'
import Home from './home'
import React, { Component} from "react";

class App extends Component{
  constructor() {
    super();
    this.state={
      string:'hello shee'
    };

  }

  render(){
    const title='JOB SIDNEY'
    const likes=50;
    return (
      <div className="App">
        <NavBar />
        <Home />
        <div className="content">
          <h1>hello jovan</h1>
          <h1>{ title }</h1>
          <p>Liked {likes} times</p>
          <p>{ this.state.string}</p>
          <button>Change me</button>
          
        </div>
  
      </div>
    );
  }
}

export default App;