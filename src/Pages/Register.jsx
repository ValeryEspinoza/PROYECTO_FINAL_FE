import React from 'react'
import RegisterForm from '../Components/Register_Components/RegisterForm'
import "../Styles/Pages_Styles/Register.css"
import AdminNavBar from '../Components/Admin_Components/AdminNavBar'
import GetUserAccess from '../Services/Get/GetUserAccess'
import { useNavigate } from 'react-router-dom';
import DeleteUserAccess from '../Services/Delete/DeleteUserAccess'

function Register() {
  const navigate = useNavigate();

  async function cerrarSesion() {
    const GetAccess = await GetUserAccess() 
    const ID = GetAccess[0].id
    DeleteUserAccess(ID)
    
  localStorage.removeItem('Autenticado');
  navigate('/');
};
  return (
    <div className='ContenedorP'>

      <AdminNavBar />
      <button onClick={cerrarSesion}>Cerrar Sesión</button>
    <RegisterForm />
    </div>
  )
}

export default Register



