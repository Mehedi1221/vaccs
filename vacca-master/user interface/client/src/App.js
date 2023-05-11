import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';
import Signup from './pages/signup';
import Cooorr from './components/Cooorr';
import Registration from './components/Registration';
import Types from './components/Types'
import Vaccines from './components/vaccines.js'
import LandingPage from './pages/landingPage';
import ProfilePage from './pages/profile';
import FeedBackPage from './pages/feedback';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
   
      
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/home" element={<Cooorr/>} />
          <Route exact path="/Type" element={<Types/>} />
          <Route exact path="/Registration/:name/:date/:place" element={<Registration/>} />
          <Route exact path="/vaccines" element={<Vaccines/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/profile" element={<ProfilePage/>} />
          <Route exact path="/feedback" element={<FeedBackPage/>} />

        </Routes>
        </BrowserRouter>

    
    
  );
}

export default App;
