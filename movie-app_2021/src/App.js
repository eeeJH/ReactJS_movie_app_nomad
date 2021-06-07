import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      {/* 리액트 라우터는 url작동방식으로 작동되는데 라우터 path의 경로가 match 되면 렌더링한다. 그래서 여러개가 동시에 렌더링된것처럼 보인다.*/}
      {/* exact true를 해줘서 이것을 막을 수 있다. */}
      <Route path="/" exact={true} component={Home}></Route>

      <Route path="/about" component={About}></Route>
    </HashRouter>
  );
}

export default App;
