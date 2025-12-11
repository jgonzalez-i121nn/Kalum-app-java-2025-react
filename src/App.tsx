
import { CssBaseline } from '@mui/material'
import './App.css'
import { AppBarMenu } from './components/layout/AppBarMenu'
import { useState } from 'react'
import { SideNav } from './components/layout/SideNav';
import { LoginForm } from './components/auth/LoginForm';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CareerList } from './components/carers/CareerList';

function App() {

  const [draweOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => setDrawerOpen(!draweOpen);

  const handleLogout = () => {
    Swal.fire({
      title: 'Logout',
      text: 'Estas seguro de cerrar Sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/login';
      }
    });

  }

  return (
    <Router>
      <CssBaseline />
      <AppBarMenu onMenuClick={handleDrawerToggle} onLogout={handleLogout}></AppBarMenu>
      <SideNav open={draweOpen} onClose={handleDrawerToggle}></SideNav>
      <Routes>
        <Route path='/login' element={<LoginForm onLoginSuccess={() => window.location.href = '/careers'} />} />
        <Route path='/careers' element={<CareerList />} />
        <Route path='/' element={<Navigate to={"/careers"} />} />
      </Routes>
    </Router>
  )
}

export default App
