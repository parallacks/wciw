const axios = require('axios')

axios.defaults.headers.common['Authorization'] = 'API-KEY-HERE'

export default () => {
    return axios.create({
        baseURL: 'http://api-public.guidebox.com/v2/'
    })
}