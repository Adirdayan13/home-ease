import { Routes, Route, useSearchParams } from 'react-router-dom';
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
  const [searchParams] = useSearchParams();



    useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      console.log({ searchParams, params, locationSearch: window.location })

      const lang = new URLSearchParams(window.location.search).get("lang");


      if (lang) {
        console.log("Weglot language from parent:", lang);
        setLanguage(lang)
      }  
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home language={language} />} />
      <Route path="/details/:id/:title" element={<Details brokers={brokers} language={language} />} />
      <Route path="/suche-profil" element={<SearchProfile language={language} />} />
    </Routes>
  );
}

export default App;