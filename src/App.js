import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Details from './details/Details';
import SearchProfile from './search-profile/SearchProfile';
import './App.css';
import useSWRImmutable from 'swr/immutable';
import { fetcher } from './utils';

function App() {
  const { data: brokers } = useSWRImmutable(
    `https://api.propstack.de/v1/brokers`,
    fetcher
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id/:title" element={<Details brokers={brokers} />} />
      <Route path="/suche-profil" element={<SearchProfile />} />
    </Routes>
  );
}

export default App;