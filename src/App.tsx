
import { CssBaseline } from '@mui/material'
import './App.css'
import { AppBarMenu } from './components/layout/AppBarMenu'
import { useState } from 'react'
import { SideNav } from './components/layout/SideNav';

function App() {

  const[draweOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => setDrawerOpen(!draweOpen);
  const handleLogout = () => {
    console.log('Sesion cerrada')
  }

  return (
    <>
     <CssBaseline/>
     <AppBarMenu onMenuClick={handleDrawerToggle} onLogout={handleLogout}></AppBarMenu>
     <SideNav open={draweOpen} onClose={handleDrawerToggle}></SideNav>
    </>
  )
}

export default App
