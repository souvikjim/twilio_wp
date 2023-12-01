import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage from './Pages/HomePage/Homepage';
import ContactPage from './Pages/Contactpage/Contactpage';


const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contacts" element={<ContactPage />} /> 
      </Routes>
    </div>
  </Router>
);

export default App;
