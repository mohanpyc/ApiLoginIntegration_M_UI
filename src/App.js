import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Drawer from './Components/Drawer'
import Inventory from './Components/Inventory'
import Customers from './Components/Customers'
import Transaction from './Components/Transaction'
import Reports from './Components/Reports'
import LogIn from './Components/Login';
import DashBoard from './Components/DashBoard';


function App() {
  return (
   <Router>
     <Routes >
        <Route path="/" element={<LogIn />}/>
        <Route path="drawer" element={<Drawer />}>
            <Route path="dashBoard" element={<DashBoard/>}/>
            <Route path="inventory" element={<Inventory/>} />
            <Route path="transactions" element={<Transaction/>} />
            <Route path="customers" element={<Customers/>} />
            <Route path="reports" element={<Reports/>} />
        </Route>
     </Routes>
   </Router>
      
  );
}

export default App;
