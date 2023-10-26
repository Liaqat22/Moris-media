import { Routes,Route,BrowserRouter } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Signup from './pages/signup'
import Login from './pages/Login';
import Stage3 from './pages/Stage3';
import Stage3Company from './pages/Stage3Company';
import Emailverification from './pages/Emailverification';
import GoogleSignup from './pages/GoogleSignup';
import Invitationform from './pages/Invitationform';
import Approvalinvitation from './pages/Approvalinvitation';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path = '/' element = {<Register/>}/>
    <Route path = '/signupform' element = {<Signup/>}/>
    <Route path = '/login' element = {<Login/>}/>
    <Route path = '/stage3' element = {<Stage3/>}/>
    <Route path = '/stage3company' element = {<Stage3Company/>}/>
    <Route path = '/emailverification' element = {<Emailverification/>}/>
    <Route path = '/googlesignup' element = {<GoogleSignup/>}/>
    <Route path = '/invitationform' element = {<Invitationform/>}/>
    <Route path = '/approvalinvitation' element = {<Approvalinvitation/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
