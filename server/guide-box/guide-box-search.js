import box from './guide-box-api'
const request = require('request')

module.exports = {

    search_show_or_movie: function (type, field, query ) {
        console.log("hie")
        box().get(`search?type=${type}&field=${field}&query=${query}`).then(function (response) {
            // console.log(response.data);
            return response.data;
          })
          .catch(function (error) {
            console.log(error);
          });   
    },
    search_channel_or_person: function (type, query) {
        return box().get(`search?type=${type}&query=${query}`);
    }
}
