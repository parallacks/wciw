const api_key = '7fb68486a8c8e20f7080122de300f1ea6dc630f8'
const fetch = require('node-fetch')

module.exports = {
    api_movie_show_search: function (type, field, query,precision){
        // return new Promise((resolve, reject)=>{
        //     request(url,{json:true},(err, res, body) =>{
        //         // console.log(api_key)
        //         console.log(url)
        //         if(err) reject(err)
        //         resolve(body)
        //     });api_key=${key}&
        // })
        return fetch(`http://api-public.guidebox.com/v2/search?type=${type}&field=${field}&query=${query}&precision=${precision}`,{
            method: 'GET',
            headers: {
                Authorization: api_key
            },
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
    },
    api_movie_search: function (movie_id){
        return fetch(`http://api-public.guidebox.com/v2/movies/${movie_id}`,{
            method: 'GET',
            headers: {
                Authorization: api_key
            },
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
    }
}
