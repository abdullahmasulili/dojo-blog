import Navbar from "./components/Navbar";
import Home from "./views/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./views/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./views/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
