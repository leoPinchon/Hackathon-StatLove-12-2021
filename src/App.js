import { Routes, Route } from 'react-router-dom'
import './App.css';
// import Cards from './components/Cards';



import Home from './screens/Home'
import Chat from './components/Chat'
import Filters from './screens/Filters'
// import Header from './components/Header'


const App = () => {

  return (
    <div className="App">
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filters" element={<Filters />} />
      <Route path="/chat" element={<Chat />} >
      </Route>
    </Routes>


    </div>
  );
}

export default App;
