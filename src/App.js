import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import ErrorBoundary from "./components/ErrorBoundary";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* The original task was to implement it with routing to "/film/id" but this way the routing fits more to REST standard */}
          <Route path="/movies/:movieId" component={MovieDetailPage} />
          <Route path="/search/:searchTerm" component={HomePage} />
          <Route path="/not-found" component={NotFoundPage} />
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
