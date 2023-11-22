import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUp from './components/SignUp';
// import Header2 from './pages/Header2';
import Login from './components/Login';
import Main from './pages/Main';
//import GetMapInfo from './components/GetMapInfo';
import MapInfo from './components/MapInfo';

function App() {
  return (
    // <BrowserRouter>
        
    //     <Routes>
    //       <Route path ="/" element={<Main/>}/>
    //       <Route path ="/login" element={<Login/>}/>yy
    //       <Route path="/signup" element={<SignUp/>}/>
    //     </Routes>
    // </BrowserRouter>
    //<GetMapInfo/>
    <MapInfo/>
  );
}

export default App;
