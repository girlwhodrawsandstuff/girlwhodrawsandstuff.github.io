import { Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage/Homepage';
import Portfolio from './views/Portfolio';
import Experience from './views/Experience/Experience';
import Hobbies from './views/Hobbies/Hobbies';
import { Header } from './layout/components/Header';
import { Footer } from './layout/components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <div className="px-8 py-5 md:px-14 md:py-6">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
