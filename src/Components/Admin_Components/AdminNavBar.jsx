import { Link } from 'react-router-dom';
 import React, { useState } from 'react';
import { useEffect } from 'react';
import "../../Styles/Components_Styles/Admin_C_Styles/AdminNavBar.css"
import GetUserAccess from '../../Services/Get/GetUserAccess';

function AdminNavBar() {
 const [UsuarioLogin, SetUsuarioLogin]= useState([])
 useEffect(()=>{

 async function obtenerUsuarioLoggeado() {
  const usuario = await GetUserAccess()
  SetUsuarioLogin(usuario)
 }
 obtenerUsuarioLoggeado()
}, [])





  
  

    return (
      <div className='bodyNavBar'>
        
      {UsuarioLogin.map((user) => (
      
           <nav className="NavBarColumnas" key={user.id}>

          <ul className="nav-links"  >
              <li><Link hidden={user.Access === "Ck54pe" ? true : false  } to="/Register">Registrar Usuario</Link></li>
              <li ><Link to="/Formularios">Formularios</Link></li>
              <li><Link to="/Proformas">Cotizaciones</Link></li>
              <li ><Link hidden={user.Access === "Ck54pe" ? true : false  } to="/Servicios">Servicios</Link></li>
              <li ><button ><div>{user.Name}</div></button></li>
          </ul>
      </nav>
   
      ))}


    
     
  </div>
      
     
    );
  }

export default  AdminNavBar;