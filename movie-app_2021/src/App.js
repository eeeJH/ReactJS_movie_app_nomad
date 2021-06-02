import React from 'react';
import PT from 'prop-types';

class App extends React.Component{

  constructor(props){
    super(props);
    console.log("Hello");
  }

  state = {
    count: 0
  };

  plus = () => {
    console.log("plus");
    this.setState(current => ({count : this.state.count + 1}));
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({count : this.state.count - 1}));
  };

  // setState를 호출할때마다 will rerender.

  componentDidMount(){
    console.log("componentDidMount!");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  // ?? 페이지에서 not disappear.
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

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
