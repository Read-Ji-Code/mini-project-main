import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import Login from './pages/Login';
import MainDetail from './pages/MainDetail';
import Review from './components/Review';
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <RecoilRoot>
    <BrowserRouter>
      <main className="flex flex-col h-screen">
        <Routes>
          <Route path ="/" element={<Main/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path='/review' element={<Review/>}/>
        </Routes>
      </main>
    </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
