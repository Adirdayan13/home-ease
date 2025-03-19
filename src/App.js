import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import SearchProfile from './SearchProfile';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id/:title" element={<Details />} />
      <Route path="/suche-profil" element={<SearchProfile />} />
    </Routes>
  );
}

export default App;