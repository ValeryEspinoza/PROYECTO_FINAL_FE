async function SendProform ( 
  CorreoCliente, NombreCliente, FechaRealizado, NumeroTelefono, TipoCotizacion, DetalleProforma, Cantidad, PrecioUnitario, Descripcion, SubTotal, IVA, TotalGeneral
  ) {


    try { 
      const newProform={
        CorreoCliente, NombreCliente, FechaRealizado, NumeroTelefono, TipoCotizacion, DetalleProforma, Cantidad, PrecioUnitario, Descripcion, SubTotal, IVA, TotalGeneral
      }
  
      const response = await fetch(`http://localhost:3001/Services`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json' 
      },
     
      body: JSON.stringify(newProform) 
      
  });
  console.log("Solicitud Aplicada");
  
  const datos = await response.json();
  return datos
   
    } catch (error) {
      console.error(error);
    }
  }
  
      export default SendProform