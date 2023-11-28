import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import Login from './pages/Login';



function App() {

  return (
    <BrowserRouter>
      <main className="flex flex-col h-screen">
        <Routes>
          <Route path ="/" element={<Main/>}/>
          <Route path ="/login" element={<Login/>}/>yy
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </main>
    </BrowserRouter>
    //<GetMapInfo/>
    //<MapInfo/>

  );
}

export default App;
