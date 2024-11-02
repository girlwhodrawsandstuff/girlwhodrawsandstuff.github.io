import { Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";
import Portfolio from "./views/Portfolio";
import Hobbies from "./views/Hobbies";
import About from "./views/About";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
