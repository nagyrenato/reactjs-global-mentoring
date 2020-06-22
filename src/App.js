import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/style.css";
import HomePage from "./pages/HomePage";
import ErrorBoundary from "./components/Errorboundary";

function App() {
  return (
    <>
      <div className="App-background">
        <ErrorBoundary>
          <HomePage />
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
