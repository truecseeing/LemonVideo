import axios from "axios";
import qs from "qs"
 const submitUser = (username,birth,tel,email,password) =>{
    var  data = axios.post('http://118.31.58.177/LemonCinema/user',{
        headers:{
            'content-Type':'application/x-www-form-urlencoded'
        },
            body:JSON.stringify({
            "name":String(username),
            "password":password,
            "tel":tel,
            "birth":birth,
            "email":email,
        })
    }).then(response => {
        console.log(response.data)
    }).catch((e)=>{
        console.log(e)
    });

}