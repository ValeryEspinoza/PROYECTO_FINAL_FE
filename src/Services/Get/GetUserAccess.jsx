/*Get Users*/
async function GetUserAccess() {
 
    try {
        const response = await fetch(`http://localhost:3001/User`);
        const data = await response.json();
        console.log(data);
        
        return data
        
    } catch (error) {
        console.error(error);
    }
}


export default GetUserAccess