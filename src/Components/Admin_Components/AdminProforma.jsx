import React, { useState } from 'react'
import "../../Styles/Components_Styles/Admin_C_Styles/AdminProformas.css"
function AdminProforma() {
//Hooks de Datos clientes
    const[CorreoCliente, SetCorrreoCliente]=useState("")
    const[NombreCliente, SetNombreCliente]=useState("")
    const[Fecha, SetFecha]=useState("")
    const[NumeroTelefonico, SetNumeroTelefonico]=useState("")
    const[TipoCotizacion, SetTipoCotizacion]=useState("")

///Hooks Datos Proforma
    const[ServicioACotizar, SetServicioACotizar]=useState("")
    const[Cantidad, SetCantidad]=useState("")
    const[PrecioUnitario, SetPrecioUnitario]=useState("")
    const[DescripcionProforma, SetDescripcionProforma]=useState("")

    ///Hooks Desglose Valores
    const[SubTotal, SetSubtotal]=useState();
    const[IVA, SetIVA]=useState("")
    const[Total, SetTotal]=useState("")    
     

    //Obtener Valores de Clientes
    function GetCorreo(e) {
        SetCorrreoCliente(e.target.value)
    }
    function GetNombreCliente(e) {
        SetNombreCliente(e.target.value)
    }
    function GetFecha(e) {
        SetFecha(e.target.value)
    }
    function GetNumeroTelefono(e) {
       SetNumeroTelefonico(e.target.value) 
    }
    function GetTipoCotizacion(e) {
        SetTipoCotizacion(e.target.value)
    }
 
////Funciones obtener valores Detalles de Proforma

    function GetServicio(e) {//Obtiene Valor Servicio
        SetServicioACotizar(e.target.value)
    }
    function GetCant(e) {//Cantidad Servicio
        SetCantidad(e.target.value)  
    }
    function GetUnitPrice(e) {//Precio Unitario 
        SetPrecioUnitario(e.target.value)
    }
    function GetDescription() {//Obtener Descripcion
        SetDescripcionProforma(e.target.value)
    }

/////Funciones obtener valores desglose
  
    function GetIVA(e) {
        SetIVA(e.target.value)
    }

  function ValorTotal() {
    const subTotal= Cantidad*PrecioUnitario
    SetSubtotal(subTotal)
  }
  console.log(SubTotal);
  console.log(IVA);
  console.log(Total);
  console.log(Cantidad);
  console.log(PrecioUnitario);
  return (
    <div className='bodyCotizacion'>
<div className='SeccionDos'>
    <div className="tituloContainer">
    <h1 className="titulo">Realización de Proformas</h1>
</div>
   
    <div className='ContenedorFormularioProformas'>  
        <div className='Datos clientes'>
        <h2>Datos del cliente</h2>
            <input onChange={GetCorreo} placeholder='Correo de cliente' className='correo' type="email" />
            <input onChange={GetNombreCliente} placeholder='Nombre completo de cliente' className='NombreCompleto' type="text" />
            <input onChange={GetFecha} placeholder='Fecha de realización de proforma' className='FechaProforma' type="date" />
            <input onChange={GetNumeroTelefono} placeholder='Número telefónico de cliente' className='telefono cliente' type="tel" />
            <textarea onChange={GetTipoCotizacion} placeholder='Tipo de cotización' className='tipoCotizacion'></textarea>
        </div>
        
        <div className='datosProforma'>
            <h2>Detalles de la Proforma</h2>
            <input onChange={GetServicio}  value={ServicioACotizar} placeholder='Servicio a Cotizar' className='inputProforma' type="text" />
            <input onChange={GetCant} value={Cantidad} placeholder='Cantidad' className='inputProforma' type="number" />
            <input onChange={GetUnitPrice} value={PrecioUnitario} placeholder='Precio Unitario' className='Precio' type="number" />
            <input  placeholder='Total' className='totalPrecioPorCantidad' type="text" readOnly />
            <textarea onChange={GetDescription} value={DescripcionProforma} placeholder='Descripción' className='inputProforma'></textarea>

            <div className='DesgloseTotalCostos'>
                <input  value={SubTotal} placeholder='Subtotal' className='subTotal' type="number" readOnly />
                <input onChange={GetIVA} value={IVA} placeholder='IVA (%)' className='IVA' type="number" />
                <input onChange={ValorTotal} value={Total} placeholder='Total' className='Total' type="number" readOnly />
            </div>
        </div>
        
        <button className='btnCreateProforma'>Crear Proforma</button>
    </div>
</div>
</div>
  )
}

export default AdminProforma