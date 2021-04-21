import "./styles.css";
import "./App.css";
import Header from "./Header";
import RecommendedVideo from "./RecommendedVideo";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideo />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
