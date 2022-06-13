const axios = require('axios');


let url= 'https://holamundo-prueba.herokuapp.com';

let  config = {
    headers: {
    "Conten-Type": "application/json",
    Authorization : `Bearer 09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7`
    }
}


userRecipe = async ()=> {

try {
    const rta = await axios.get(url,config)

    console.log(rta);


}catch(error){
        console.log(error);
    }

}


module.exports= {
    userRecipe
}

