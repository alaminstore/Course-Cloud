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
import Materials from "./Pages/Materials";
import Authorpage from "./Pages/AuthorPage";
import Course from "./Pages/Course";
import Userprofile from "./Pages/UserProfile";
import Termscondition from "./Pages/TermsCondition";
import Privacypage from "./Pages/privacyPage";
import Setting from "./Pages/Setting";
import Myorder from "./Pages/MyOrder";
import Mycart from "./Pages/MyCart";
import Mycourse from "./Pages/MyCourse";
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
            <Route path="/mycourse">
              <Mycourse />
            </Route>
            <Route path="/discussion-forum">
              <Discussionforum />
            </Route>
            <Route path="/course">
              <Course />
            </Route>
            <Route path="/materials">
              <Materials />
            </Route>
            <Route path="/profile">
              <Userprofile />
            </Route>
            <Route path="/author">
              <Authorpage />
            </Route>
            <Route path="/terms">
              <Termscondition />
            </Route>
            <Route path="/privacy">
              <Privacypage />
            </Route>
            <Route path="/setting">
              <Setting />
            </Route>
            <Route path="/order">
              <Myorder />
            </Route>
            <Route path="/mycart">
              <Mycart />
            </Route>
          </Switch>

          <Footer />
        </div>
      </HeadProvider>
    </Router>
  );
}

export default App;
