import Navbar from "./Navbar";
import Home from "./Home";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import Create from "./Create";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/create" element={<Create />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

// 1. after forking or cloning a repo you don't have node_modules files. and without that folder you won't be able to run the codes and etc. to get that back all you need to do is typing 'npm install' in the terminal. it will look at the package.json file and see the dependencies and after that it will install all those dependencies.

// 2. each component contains its own:
//      1) template
//      2) logic
// **the functions inside the components must be started with the capital letter.
// what actually converts and compiles the jsx files to the html is called 'Babel'
// in jsx we don't use 'class' for the elements. instead we write 'className' for the class
