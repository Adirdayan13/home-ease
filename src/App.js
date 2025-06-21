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
    // Ask parent for the Weglot language
    setTimeout(() => {
      console.log('effect')
      window.parent.postMessage("getWeglotLang", "*");
    }, 2000);
  
    function handleMessage(event) {
      const { wglang } = event.data;
      if (wglang) {
        console.log("Weglot language from parent:", wglang);
        setLanguage(wglang)
      }
    }
  
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
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