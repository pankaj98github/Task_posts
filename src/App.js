import React from 'react';
import "./App.css";
import "./Style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import NewPost from "./pages/NewPost";
import PublishedPost from "./pages/PublishedPost";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/published" element={<PublishedPost />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
