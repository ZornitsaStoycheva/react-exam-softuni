import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import React from 'react';

import './App.css'

import Footer from './components/footer/Footer'
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import Catalog from './components/catalog/Catalog'
import CarDetails from './components/carDetails/CarDetails'
import AddCar from './components/addCar/AddCar'
import EditCar from './components/editCar/EditCar'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Search from './components/search/Search'
import Logout from './components/logout/Logout'
import MyPublish from './components/myPublish/MyPublish'
import AuthGuard from './components/guards/AuthGuards';
import NotFound from './components/notFound/NotFound';
import UserGuards from './components/guards/UserGuards';

function App() {
  
  return (
    <AuthProvider>
    <>
      <Navigation />
      <>
        <Routes>
          <React.Fragment>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cars' element={<Catalog />}></Route>
            <Route path='/cars/:carId/details' element={<CarDetails />}></Route>
            <Route path='/cars/create' element={<AuthGuard> <AddCar /> </ AuthGuard>}></Route>
            <Route path='/cars/my-publish' element={<AuthGuard> <MyPublish /> </ AuthGuard>}></Route>
            <Route path='/cars/edit/:carId' element={<AuthGuard> <EditCar /> </ AuthGuard>}></Route>
            <Route path='/auth/login' element={<UserGuards> <Login /> </ UserGuards>}></Route>
            <Route path='/auth/register' element={<UserGuards> <Register /> </ UserGuards>}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/auth/logout' element={<AuthGuard> <Logout /> </ AuthGuard>}></Route>
            <Route path='*' element={<NotFound />}></Route>
            </React.Fragment>
        </Routes>
        </>
        
      <Footer />
    </>
    </AuthProvider>
  )
}

export default App
