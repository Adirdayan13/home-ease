import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Details from './details/Details';
import SearchProfile from './search-profile/SearchProfile';
import './App.css';
import useSWRImmutable from 'swr/immutable';
import { fetcher, setLastLocation } from './utils';
import { useEffect, useState } from 'react';

function App() {
  const { data: brokers = [] } = useSWRImmutable(
    `https://api.propstack.de/v1/brokers`,
    fetcher
  );
  const [language, setLanguage] = useState(null);
  const langParams = new URLSearchParams(window.location.search).get("lang");
  console.log("Weglot language from parent:", langParams);
    
  useEffect(() => {
      setTimeout(() => {
        if (langParams) {
          setLanguage(langParams)
          localStorage.setItem('language', langParams);
        }
      }, 1500);
  }, []);

  useEffect(() => {
    // Send request to parent on iframe load
    window.parent.postMessage(
      "requestLocalStorage",
      "https://www.homeease.de"
    );
    // Handle incoming messages
    function handleMessage(event) {
      if (event.origin !== "https://www.homeease.de") return;
      if (event.data && event.data.type === "localStorageData") {
        console.log("Iframe received localStorage data:", event.data.data);
        localStorage.setItem('language', event.data.data);
        setLanguage(event.data.data);
      }
    }
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  if (langParams) {
    setLastLocation();
  } 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id/:title" element={<Details brokers={brokers} />} />
      <Route path="/suche-profil" element={<SearchProfile language={language} />} />
    </Routes>
  );
}

export default App;