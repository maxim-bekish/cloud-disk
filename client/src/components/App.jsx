import Navbar from "./navbar/Navbar";
import Registration from "./registration/Registration";
import './app.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="app" >
        <Navbar />
        <div className="wrap">

          <Routes>
            <Route path="/registration" element={<Registration />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
