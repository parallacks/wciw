const api_key = '639305f8ebc10c932cc333d6657ee8e9963db0c5'
const fetch = require('node-fetch')

module.exports = {
    api_movie_show_search: function (type, field, query){
        // return new Promise((resolve, reject)=>{
        //     request(url,{json:true},(err, res, body) =>{
        //         // console.log(api_key)
        //         console.log(url)
        //         if(err) reject(err)
        //         resolve(body)
        //     });api_key=${key}&
        // })
        return fetch(`http://api-public.guidebox.com/v2/search?type=${type}&field=${field}&query=${query}`,{
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