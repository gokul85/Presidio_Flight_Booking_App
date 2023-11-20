import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Pages/Index/Index';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Admin/Dashboard';
import AddFlight from './Pages/Admin/AddFlight';
import AdminHome from './Pages/Admin/AdminHome';
import ShowFlight from './Pages/Admin/ShowFlight';
import Searchresult from './Pages/Searchresult/Searchresult';
import Flights from './Pages/Searchresult/flights';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/searchresults" element={<Searchresult />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/admin" element={<Dashboard />}>
          <Route path="" element={<AdminHome />} />
          <Route path="addflight" element={<AddFlight />} />
          <Route path="showflight" element={<ShowFlight />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
