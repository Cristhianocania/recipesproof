const axios = require('axios');

let url= 'https://holamundo-prueba.herokuapp.com/users/me';

let  config = {
    headers: {
    "Conten-Type": "application/json"
    }
}

getUser = async (token)=> {

try {
    config.headers.Authorization = token;
    return await axios.get(url,config);
}catch(error){
        console.log(error);
    }

}

module.exports= {
    getUser
}

