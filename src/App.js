import { Routes, Route } from 'react-router-dom'
import './App.css';

// import Chat from './screens/Chat'
import Filters from './screens/Filters'
// import Header from './screens/Header'
// import Home from './screens/Home'

const App = () => {

  return (
    <div className="App">
    {/* <Header /> */}
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/filters" element={<Filters />} />
      {/* <Route path="/chat" element={<Chat />} /> */}
    </Routes>
    </div>
  );
}

export default App;
