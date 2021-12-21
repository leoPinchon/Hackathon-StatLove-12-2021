import { Routes, Route } from 'react-router-dom'
import './App.css';

import Chat from './components/Chat'
import Filters from './components/Filters'
import Header from './components/Header'
import Home from './components/Home'

const App = () => {

  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filters" element={<Filters />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
    </div>
  );
}

export default App;
