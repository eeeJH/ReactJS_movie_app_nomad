import React from 'react';
import PT from 'prop-types';

class App extends React.Component{

  state = {
    isLoading : true
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading : false});
    }, 5000);
  }

  render(){
    var {isLoading} = this.state;
    return (
    <div>
      {isLoading ? "Loading..." : "We are ready!"}
    </div>
    );
  }

}

export default App;
