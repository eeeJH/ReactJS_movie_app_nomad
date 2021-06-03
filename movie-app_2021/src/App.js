import React from "react";
import PT from "prop-types";
import axios from "axios";

class App extends React.Component{

  state = {
    isLoading : true,
    movies : []
  };

  // You must waiting to do "await".
  getMovies = async () => {
    var movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
  }

  componentDidMount(){
    
  this.getMovies();

    // axios
    // fetch 위에 있는 작은 layor 같다.
    // 설치 명령어 : npm i axios

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
