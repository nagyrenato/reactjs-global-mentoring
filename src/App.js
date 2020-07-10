import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailPage} />
        <Route path="/movie-not-found" component={NotFoundPage} />
        <Redirect to="/movie-not-found" />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
