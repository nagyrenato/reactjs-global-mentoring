import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/style.css";
import ErrorBoundary from "./components/ErrorBoundary";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <Route exact path="/" component={HomePage} />
                <Route path="/movies/:movieId" component={MovieDetailPage} />
            </Router>
        </ErrorBoundary>
    );
}

export default App;
