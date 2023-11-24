import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUp from './components/SignUp';
// import Header2 from './pages/Header2';
// import Login from './components/Login';
import Main from './pages/Main';
//import GetMapInfo from './components/GetMapInfo';
// import MapInfo from './components/MapInfo';
// import Login2 from './components/Login2';
import Login3 from './components/Login3';

function App() {
  return (
    <BrowserRouter>
      <main className="flex flex-col h-screen">
        <Routes>
          <Route path ="/" element={<Main/>}/>
          <Route path ="/login" element={<Login3/>}/>yy
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </main>
    </BrowserRouter>
    //<GetMapInfo/>
    //<MapInfo/>

  );
}

export default App;
