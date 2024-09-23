import React, { useState } from 'react'
import AdminNavBar from '../Components/Admin_Components/AdminNavBar'
import AdminFichaServicios from '../Components/Admin_Components/AdminFichaServicios'
import DeleteUserAccess from '../Services/Delete/DeleteUserAccess'
import GetUserAccess from '../Services/Get/GetUserAccess'


function Formularios() {
 

  async function cerrarSesion() {
    
      const GetAccess = await GetUserAccess() 
      
      const ID = GetAccess[0].id
      DeleteUserAccess(ID)
    localStorage.removeItem('Autenticado');
    navigate('/');  
  
    
  };
  return (
    <div>
      <AdminNavBar />
      <button onClick={cerrarSesion} >Cerrar Sesión</button>
     <AdminFichaServicios />
        </div>
  )
}

export default Formularios