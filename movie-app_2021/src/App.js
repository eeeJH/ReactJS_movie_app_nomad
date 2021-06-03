import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // You must waiting to do "await".

  // axios
  // fetch 위에 있는 작은 layor 같다.
  // 설치 명령어 : npm i axios

  _getMovies = async () => {
    var {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    this.setState({ movies, isLoading: false });
  };
  get getMovies() {
    return this._getMovies;
  }
  set getMovies(value) {
    this._getMovies = value;
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    var { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
