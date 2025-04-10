import { Route, Routes } from "react-router-dom";
import Homepage from "./views/Homepage";
import Portfolio from "./views/Portfolio";
import Hobbies from "./views/Hobbies";
import { Footer } from "./shared/components/Footer";
import { Header } from "./shared/components/Header";
import Resume from "./views/Resume";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
