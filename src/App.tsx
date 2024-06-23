import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Homepage from './Homepage'
import Resume from './Resume'

function App() {
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
       <Routes>
           <Route path="/" element={<Homepage />} />
           <Route path="Resume" element={<Resume />} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
