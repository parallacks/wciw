

const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

//const key = '7fb68486a8c8e20f7080122de300f1ea6dc630f8'

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
    // let movie_ids = []
    let movie_data = []
    if(req.params.type === 'movie' || req.params.type === 'show'){
        guide_box_http.api_movie_show_search(req.params.type, field, req.params.query, precision)
        .then(response => {
            // console.log('here')
            // console.log(get_results(response))
            let movie_data =[]
            var fetches = []
            for (let result in response.results){
                // console.log(response.results[result].id)
                // let movie_ids.push(response.results[result].id)
                fetches.push(
                guide_box_http.api_movie_search(response.results[result].id)
                .then(response => {
                    // console.log(response)
                    let movie = {
                        id: response.id,
                        title: response.title,
                        poster_small: response.poster_120x171,
                        poster_medium: response.poster_240x342,
                        poster_large: response.poster_400x570,
                        free_web_sources: response.free_web_sources,
                        free_ios_sources: response.free_ios_sources,
                        free_android_sources: response.free_android_sources,
                        subscription_web_sources: response.subscription_web_sources,
                        subscription_ios_sources: response.subscription_ios_sources,
                        subscription_android_sources: response.subscription_android_sources,
                        purchase_web_sources: response.purchase_web_sources,
                        purchase_ios_sources: response.purchase_ios_sources,
                        purchase_android_sources: response.purchase_android_sources
                    }
                    console.log("Hey")
                    console.log(movie)
                    movie_data.push(movie)
                })
                );
            }
            Promise.all(fetches).then(function() {
                // console.log(movie_data)
                res.send(movie_data)
            })
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

app.get('/api', (req, res) =>{
    console.log("hit general");
    let movie = [{
		id: 122232,
		title: 'Fake Movie',
		poster: 'http://static-api.guidebox.com/thumbnails_movies/84740-5533508183-2395905582-9281617975-large-400x570.jpg',
		free_android_sources:[],
		subscription_android_services: [],
		purchase_android_services: [
			{
				source: 'vudu',
				link: 'vuduapp://7363',
				app_name: 'VUDU',
				app_require: 1,
				app_link: 1,
				app_download_link: 'https://play.google.com/store/apps/details?id=air.com.vudu.air.DownloaderTablet'
			}
		]
	}]
	res.send(movie);
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
