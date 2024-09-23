import React from 'react'
import AdminNavBar from '../Components/Admin_Components/AdminNavBar'
import ServicesData from '../Components/Admin_Components/ServicesData'
import DeleteUserAccess from '../Services/Delete/DeleteUserAccess'
import GetUserAccess from '../Services/Get/GetUserAccess'

function Servicios() {
  
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
      <button onClick={cerrarSesion}>Cerrar Sesión</button>
      <ServicesData />
    </div>
  )
}

export default Servicios