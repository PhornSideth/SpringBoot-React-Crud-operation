import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from './Layout/Navbar';
import Home from './page/Home';
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom"
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';
import ViewUser from './Users/ViewUser';
function App() {
  return (
   <div className='App'>
   <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/adduser" element={<AddUser/>}/>
      <Route exact path='/editUser/:id' element={<EditUser/>}/>
      <Route exact path='/viewuser/:id' element={<ViewUser/>}/>

    </Routes>
   </Router>
   </div>
  )
}

export default App;
