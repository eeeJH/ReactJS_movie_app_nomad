import React from 'react';
import PT from 'prop-types';

class App extends React.Component{

  state = {
    count: 0
  };

  plus = () => {
    console.log("plus");
    this.setState({count : this.state.count + 1});
  };
  minus = () => {
    console.log("minus");
    this.setState({count : this.state.count - 1});
  };

  render(){
    return (
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.plus}>Plus</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }

}

export default App;
