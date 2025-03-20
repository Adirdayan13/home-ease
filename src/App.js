import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Details from './details/Details';
import SearchProfile from './search-profile/SearchProfile';
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