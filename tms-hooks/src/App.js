import logo from './logo.svg';
// import './App.css';
// import '../src/cssfiles/sample.css'
import { Navigate } from 'react-router-dom';
import '../src/cssfiles/sample.css';
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
// import Counter from './components/Counter';
import AllUsers from './components/AllUsers';
import NewUser from './components/AddUser';
import FindUser from './components/SearchUser';
import UserDetails from './components/UserDetails';
import UpdateUser from './components/UpdateUser';
import FetchAllUsers from './components/FetchAllUsers';
import Login from './components/Login';
import CustomerDashBoard from './components/CustomerDashBoard';
import AdminDashBoard from './components/AdminDashBoard';
import StaffDashBoard from './components/StaffDashBoard';
import AllReservations from './components/AllReservations';
import ViewAllReservations from './components/AllReservations';
import NewReservation from './components/NewReservation';
import SearchReservationById from './components/USearchReservation';
import SearchReservationByReservedId from './components/RSearchReservation';
import ReservationDetails from './components/ReservationDetails';
import ModifyReservation from './components/ModifyReservation';
import TourDetails from './components/TourDetails';
import AddTour from './components/AddTour';
import UpdateTour from './components/UpdateTour';
import SearchLocation from './components/SearchLocation';
import LocationDetails from './components/LocationDetails';
import SearchTour from './components/SearchTour';
import AvailTour from './components/AvailabaleTours';
import UReservedDetails from './components/UReservedDetails';
import Header from './components/Header';
import Home from './components/Home';
import CustomerMenu from './components/CustomerMenu';
import AdminMenu from './components/AdminMenu';
import MenuCustomer from './components/MenuCustomer';
import BoostrapCarouse from './components/BootstrapCarouse';
import Firsttour from './components/FirstTour';
import Logout from './components/Logout';
import TourLocations from './components/TourLocations';
import Cancelreservation from './components/ReservationCancel';
import Cancel from './components/CancelReservation';


function App() {
  // const routes=[
  //   {
  //     key:1,
  //     path:"/counter",
  //     element:<Counter/>
  //   }
  // ]

  return (
   <div className='App'>
    {/* <DashBoard/> */}
    <BrowserRouter>
      <Routes>
        {/* <Route path='/login' element={<UserLogin/>}/> */}
        {/* <Route path='/counter' element={<Counter/>}/> */}
        {/* <Route path='/AllUsers' element={<AllUsers/>}/> */}
        <Route path='/users/all' element={<FetchAllUsers/>} exact={true}/>
        <Route path='/user/add' element={<NewUser/>} exact={true}/>
        <Route path='/user/details/:id' element={<UserDetails/>}/>
        <Route path='/user/update/:userid' element={<UpdateUser/>} exact={true}/>
        <Route path='/user/search' element={<FindUser/>}/>
        <Route path='/user/login' element={<Login/>}/>
        <Route path='/user/logout' element={<Logout/>}/>
        {/* <Route path='/staff/dashboard' element={<StaffDashBoard/>}/> */}
        <Route path='/reservations/all' element={<ViewAllReservations/>} exact={true}/>
        <Route path='/reservations/new/:tid' element={<NewReservation/>}/>
        <Route path='/reservations/search/user' element={<SearchReservationById/>} exact={true}/>
        <Route path='/reservations/search/reservation' element={<SearchReservationByReservedId/>}exact={true}/>
        <Route path='/reservation/details/:rid' element={<ReservationDetails/>}/>
        <Route path='/reservations/modify/:rid' element={<ModifyReservation/>}/>
        <Route path='/reservation/details/list/:uid' element={<UReservedDetails/>}/>
        <Route path='/reservation/cancel/id' element={<Cancelreservation/>}/>
        <Route path='/reservation/cancel/:rid' element={<Cancel/>}/>
        {/* <Route path='/tour/all' element={<AllTour/>} exact={true}/> */}
        <Route path='/tour/details/:tid' element={<TourDetails/>}/>
        <Route path='/tour/add' element={<AddTour/>} exact={true}/>
        <Route path='/tour/update/:tid' element={<UpdateTour/>}/>
        <Route path='/tour/search/location/' element={<SearchLocation/>} exact={true}/>
        <Route path='/tour/search/location/details/:tourLocation' element={<LocationDetails/>}/>
        <Route path='/tour/search' element={<SearchTour/>} exact={true}/>
        <Route path='/tour/avail' element={<AvailTour/>} exact={true}/>
        <Route path='/tour/location/:tourLocation' element={<TourLocations/>}/>

        {/* <Route path='/dashboard' element={<DashBoard/>}/> */}
        <Route path='/' element={<Home/>} exact={true}/>
        <Route path='/header' element={<Header/>}/>

        <Route path='/customer/dashBoard' element={<CustomerDashBoard/>}/>
        <Route path='/admin/dashboard' element={<AdminDashBoard/>}/>
        <Route path='/BootStrapCarouse' element={<BoostrapCarouse/>}/>
      

        <Route path='/Firsttour' element={<Firsttour/>}/>

        {/* <Route path='/customer/menu' element={<MenuCustomer/>}/> */}
        {/* <Route path="/customer/dashboard/tour/avail" element={<Navigate to="tour/avail" replace />} /> */}
      </Routes>
   </BrowserRouter>
   </div>
   
  );
}
export default App;
