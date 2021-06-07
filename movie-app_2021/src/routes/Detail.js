import React from "react";

// props들의 정보를 받을 수 있다.
class Detail extends React.Component {
  componentDidMount() {
    var { location, history } = this.props;

    if (location.state === undefined) {
      // will relocate
      history.push("/");
    }
  }

  render() {
    var { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
