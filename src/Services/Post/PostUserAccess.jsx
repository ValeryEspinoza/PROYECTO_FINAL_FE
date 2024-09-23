
async function SendUserAccess ( userInformation) {


    try { 
       
      const response = await fetch(`http://localhost:3001/User`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json' 
      },
     
      body: JSON.stringify( userInformation) 
      
  });
  console.log("Solicitud Aplicada");
  
  const datos = await response.json();
  return datos
   
    } catch (error) {
      console.error(error);
    }
  }
  
      export default SendUserAccess
