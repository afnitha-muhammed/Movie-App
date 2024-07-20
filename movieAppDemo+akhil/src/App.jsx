
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminMovie from './Pages/AdminMovie'
import AdminTheatre from './Pages/AdminTheatre'
import AdminSchedule from './Pages/AdminSchedule'
import MovieDetails from './Pages/MovieDetails'
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import SeatSelection from './Pages/SeatSelection'
import  BuyTickets from './Pages/BuyTickets'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/login' element={<Auth/>}/>
      <Route path={'/adminmovie'} element={<AdminMovie/>} />
      <Route path={'/theatre'} element={<AdminTheatre/>} />
      <Route path={'/sheduleshow'} element={<AdminSchedule/>} />
      <Route path='/moviedetails' element={<MovieDetails/>}/>
      <Route path='/seatselection' element={<SeatSelection/>}/>
      <Route path='/buytickets' element={<BuyTickets/>}/>
     </Routes>


    </>
  )
}

export default App
