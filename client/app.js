
 async function getUsers () {
    try {
        const response = await fetch('http://localhost:3000/users');
         
        if (!response.ok) {
           const data = await response.json();

           console.log(`
            código de erro: ${response.status}
            Message: ${data.message}
            
            `);

            return;
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
       console.log(`erro no servidor: ${error.message}`);
    }

}

getUsers();