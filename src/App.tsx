import React from "react";
import "./App.scss";

import Navbar from "./Navbar";
import PostForm from "./components/PostForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <PostForm />
    </div>
  );
};

export default App;
