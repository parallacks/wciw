

const express = require('express');

const app = express();

const guide_box_search = require( './guide-box/guide-box-search');


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
    let field = req.query.field || 'title'
    let precision = req.query.precision || 'fuzzy'
    let id_type = req.query.id_type || null
    if(req.params.type === 'movie' || req.params.type === 'show'){
        res.send(guide_box_search.search_show_or_movie(req.params.type, req.params.field, req.params.query));
    }else if (req.params.type === 'channel' || req.params.type === 'person'){

    }else{
        res.status(500).send('Sorry invalid type');
    }
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