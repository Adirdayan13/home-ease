import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Details from './details/Details';
import SearchProfile from './search-profile/SearchProfile';
import './App.css';
import useSWRImmutable from 'swr/immutable';
import { fetcher } from './utils';
import { useEffect, useState } from 'react';

function App() {
  const { data: brokers = [] } = useSWRImmutable(
    `https://api.propstack.de/v1/brokers`,
    fetcher
  );
  const [language, setLanguage] = useState(null);
    useEffect(() => {
      const lang = new URLSearchParams(window.location.search).get("lang");
      setTimeout(() => {
        console.log("Weglot language from parent:", lang);
        if (lang) {
          setLanguage(lang)
        }  
      }, 1500);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id/:title" element={<Details brokers={brokers} language={language} />} />
      <Route path="/suche-profil" element={<SearchProfile language={language} />} />
    </Routes>
  );
}

export default App;