import './App.css';
import React, { useState } from 'react';
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {value : this.props.value};
    this.setState({value : "Hello "+this.state.value})

  }
  // render() {
  //   return (
  //     <div>
  //  <button onClick={()=>{this.setState({counter:this.state.counter +1})}}>Presses Twise</button>
  //  <Child value = {this.state.counter}></Child> 
  //   </div> 
  //   );
  // }

  render(){
    return (<div>The value is : {this.state.value}</div>)
  }
}

class Child extends React.Component{

    constructor(props){
    super(props);
  }

//  state = {
//   couter :this.props.value
//  }  

 render() {
  return (
    <div>
      Hello {this.props.name}
  </div> 
  );
}

}

export default App;
