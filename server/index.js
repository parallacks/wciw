

const express = require('express');

const app = express();

const key = '639305f8ebc10c932cc333d6657ee8e9963db0c5'

import guide_box_search from './guide-box/guide-box-search'

import guide_box_http from './guide-box/guide-box-api-http'


/*
 * GET /api/search
 * Required:
 *      query: string
 *      type: string - 'movie', 'show', 'channel', 'person'
 * Optional:
 *      field: differs for each type, this defines how we search
 *          Movie: 'title' or 'id'
 *          Show: 'title' or 'id'
 *          Channel: none
 *          Person: none
 *      precision: default - 'fuzzy' :: 'fuzzy', 'exact'
 *      id_type: This is used when field is set to id
 *          Movie: 'imdb', 'themoviedb'
 *          Show: 'tvdb', 'themoviedb', 'imdb'
 *          Channel: none
 *          Person: none
 * 
*/

app.get('/api/search/:type/:query', (req, res) => {
    console.log("hit this")
    let field = req.query.field || 'title'
    let precision = req.query.precision || 'fuzzy'
    let id_type = req.query.id_type || null
    let movie_ids = []
    let movie_data = []
    if(req.params.type === 'movie' || req.params.type === 'show'){
        guide_box_http.api_movie_show_search(`http://api-public.guidebox.com/v2/search?api_key=${key}&type=${req.params.type}&field=${field}&query=${req.params.query}`)
        .then(response => {
            movie_data = await get_results(response)
            console.log(movie_data)
            res.json(movie_data)
        })
        .catch(error => {
            res.send(error)
        })
        // console.log(`Type: ${req.params.type}\n field: ${field}\n Query: ${req.params.query}`)
        // console.log(results);
        // res.send(results);
    }else if (req.params.type === 'channel' || req.params.type === 'person'){
        res.send(guide_box_search.search_channel_or_person(req.params.type, req.params.field, req.params.query))
    }else{
        res.status(500).send('Sorry invalid type');
    }
})
async function get_results(response){
    let movie_data=[]
    for (let result in response.results){
        console.log(response.results[result].id)
        movie_ids.push(response.results[result].id)
        guide_box_http.api_movie_search(`http://api-public.guidebox.com/v2/movies/${response.results[result].id}?api_key=${key}`)
        .then(response => {
            // console.log(response)
            movie_data.push(response)
        })
    }
    return movie_data
         
}

app.get('/api', (req, res) =>{
    console.log("hit general");
    res.send("Hey gurl");
})

/*
 * GET /api/shows
 * Optional filters:
 * channel: 
 * sources: string - 'free', 'tv-everywhere', 'subscription', 'purchase'
 *      You can also request a specific source such as 'amazon_prime' or 'hbo'
 *      multiple sources should be passed as an array
 * platform: array[string] - 'ios', 'android', 'web'
 *      We probably won't need to use this option but we'll service it anyway
 * include_links: true, false
 *      TODO: We'll probably default this to true
 * 
 *
 *  
*/


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));