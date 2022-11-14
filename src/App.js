import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLevel1 from './Components/AdminLevel1/AdminLevel1';
import AdminLevel2 from './Components/AdminLevel2/AdminLevel2';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import DetailHotel from './Components/DetailHotel/DetailHotel';
import DetailRoom from './Components/DetailRoom/DetailRoom';
import DetailSubRoom from './Components/DetailSubRoom/DetailSubRoom';
import Footer from './Components/Footer/Footer';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ListBooking from './Components/ListBooking/ListBooking';
import Login from './Components/Login/Login';
import Payment from './Components/Payment/Payment';
import Profile from './Components/Profile/Profile';
import Search from './Components/Search/Search';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/forgot/password"} element={<ForgotPassword />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/user/profile"} element={<Profile />} />
        <Route path={"/change/password"} element={<ChangePassword />} />
        <Route path={"/booking/search"} element={<Search />} />
        <Route path={"/hotel/detail"} element={<DetailHotel />} />
        <Route path={"/booking/payment"} element={<Payment />} />
        <Route path={"/room/detail"} element={<DetailRoom />} />
        <Route path={"/sub/room/detail"} element={<DetailSubRoom />} />
        <Route path={"/booking/order/*"} element={<ListBooking />} />
        <Route path={"/manager/*"} element={<AdminLevel1 />} />
        <Route path={"/admin/*"} element={<AdminLevel2 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
