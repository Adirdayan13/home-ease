import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Details from './Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id/:title" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;