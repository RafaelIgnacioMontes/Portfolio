import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import SideBar from './components/SideBar';
function App() {


  return (
    <div className="App">
      <main>
      <header className='header'>
        <SideBar />
      </header>
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
