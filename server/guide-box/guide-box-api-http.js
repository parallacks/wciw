const request = require('request')
// const api_key = '639305f8ebc10c932cc333d6657ee8e9963db0c5'

module.exports = {
    api_movie_show_search: function (url){
        return new Promise((resolve, reject)=>{
            request(url,{json:true},(err, res, body) =>{
                // console.log(api_key)
                console.log(url)
                if(err) reject(err)
                resolve(body)
            });
        })
    },
    api_movie_search: function (url){
        return new Promise((resolve, reject) =>{
            request(url, {json: true}, (err, res, body) =>{
                console.log(url)

                if (err) reject(err)
                resolve(body)
            });
        })
    }
}