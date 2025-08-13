import { Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage';
import Portfolio from './views/Portfolio';
import { Footer } from './shared/components/Footer';
import { Header } from './shared/components/Header';
import Experience from './views/Experience/Experience';
import Hobbies from './views/Hobbies/Hobbies';

const App = () => {
  return (
    <>
      <Header />
      <div className="px-14 py-6">
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
