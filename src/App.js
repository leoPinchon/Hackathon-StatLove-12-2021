import { Routes, Route } from 'react-router-dom'
import './App.css';
// import Cards from './components/Cards';



import Home from './screens/Home'
import Chat from './components/Chat'
import Filters from './screens/Filters'
import KnowMore from "./components/KnowMore"
// import Header from './components/Header'
import NotFound from './screens/NotFound';

const App = () => {

  return (
    <div className="App">
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/KnowMore" element={<KnowMore />}/>
      </Route>
      <Route path="/filters" element={<Filters />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/oops" element={<NotFound />} />
    </Routes>


    </div>
  );
}

export default App;
