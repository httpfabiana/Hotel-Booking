
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import AllRooms from "./pages/AllRooms/AllRooms";
import RoomDetail from "./pages/RoomDetails/RoomDetail";
import MyBookings from "./pages/MyBookings/MyBookings";
import HotelReg from "./components/HotelReg/HotelReg";
import Layout from "./pages/HotelOwner/Layout";
import Dashboard from "./pages/HotelOwner/Dashboard";
import AddRoom from './pages/HotelOwner/AddRoom'
import ListRoom from "./pages/HotelOwner/ListRoom";

const App = () => {

  const isOwnerPath = useLocation().pathname.includes('owner')

  return(
   <div>
     {!isOwnerPath &&  <Navbar/>}
      {false && <HotelReg/>}
     <div className="min-h-[70vh]">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/rooms' element={<AllRooms/>} />
        <Route path='/rooms/:id' element={<RoomDetail/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
        <Route path="/owner"  element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="add-room" element={<AddRoom/>}/>
          <Route path="list-room" element={<ListRoom/>}/>
        </Route>
      </Routes>
     </div>
     <Footer/>
   </div>
  )
}

export default App;