import { Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";
import Portfolio from "./views/Portfolio";
import Hobbies from "./views/Hobbies";
import About from "./views/About";
import { Footer } from "./shared/components/Footer";
import { Header } from "./shared/components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
