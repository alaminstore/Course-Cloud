import React from "react";
import { HeadProvider, Title } from "react-head";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { useStateValue } from "./Store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LiveClass from "./Pages/liveClass";
import Allcourse from "./Pages/AllCourse";
import Discussionforum from "./Pages/DiscussionForum";
import Course from "./Pages/Course";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.css";

function App() {
  const [{ title }] = useStateValue();
  return (
    <Router>
      <HeadProvider>
        <div className="App bg">
          <Title>{title}</Title>

          <Header />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/live-class">
              <LiveClass />
            </Route>
            <Route path="/allcourse">
              <Allcourse />
            </Route>
            <Route path="/discussion-forum">
              <Discussionforum />
            </Route>
            <Route path="/course">
              <Course />
            </Route>
          </Switch>

          <Footer />
        </div>
      </HeadProvider>
    </Router>
  );
}

export default App;
