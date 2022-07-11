import './App.css';
import {BrowserRouter, Route, Switch}from 'react-router-dom'
import Navb from "./components/header";
import Foot from "./components/footer";
import Login from "./pages/login"
import Mainpage from "./pages/mainpage"
import Register from "./pages/register";
import Adduser from './pages/addusers';
import AllUser from './pages/allusrs\\';

//import Mainpage from './pages/mainpage';
function App() {
 
  return (
     
    <BrowserRouter>
    <Navb/>
    <Switch>
      <Route path='/login'>
           <Login/>
       </Route>
       <Route path='/register'>
           <Register/>
       </Route>
       <Route path='/adduser'>
            <Adduser />
        </Route>
        <Route path='/alluser'>
            <AllUser />
        </Route>
       <Route path='/'>
            <Mainpage/>
       </Route>
       </Switch>
     <Foot/> 
    </BrowserRouter>
   
   
  
  )
};
export default App;
