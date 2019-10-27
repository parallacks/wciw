import box from '../guide-box/guide-box-api'

export default {

    search_show_or_movie (type, field, query ) {
        return box().get(`search?type=${type}&field=${field}&query=${query}`);
    },
    search_channel_or_person (type, query) {
        return box().get(`search?type=${type}&query=${query}`);
    }
}