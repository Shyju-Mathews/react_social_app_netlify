import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { DataProvider } from "./context/DataContext";


function App() {

  return (
    <div className="App">
      <DataProvider>
      <Header title="Dream World"/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post">
          <Route
            index
            element={<NewPost />}
          />
          <Route
            path=":id"
            element={<PostPage />}
          />
          <Route
            path="edit/:id"
            element={<NewPost />}
          />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
