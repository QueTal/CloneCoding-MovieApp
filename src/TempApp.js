import React from "react";

class App extends React.Component{
  // return 없음 fucntion 아니라서 
  // 대신 render 
  render(){
    return (
    <div>
      <h1>
      The number is: {this.state.count}
      </h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
  // onClick = this.add() / this.add 는 차이 있음 
  // () 붙이면 즉시 / 안붙이면 클리할 때만 

  //state = obj
  // data which will be changed is put in state
  state ={
    count : 0
  };
  //react 는 render function 을 refresh하지 않음
  add=()=>{
    this.setState(current => ({count: current.count + 1}));
  };
  minus=()=>{
    this.setState({count: this.state.count - 1});
  };
}

export default App;