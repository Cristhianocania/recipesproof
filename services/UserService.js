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
    let user = await axios.get(url,config);
    console.log("fui a Users", user.data);
    return user.data;
}catch(error){
        console.log(error);
    }

}

module.exports= {
    getUser
}

