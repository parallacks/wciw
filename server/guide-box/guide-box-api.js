const axios = require('axios')

axios.defaults.headers.common['Authorization'] = 'ab3824e492350726a1d7178102cc1b368e5532f8'

export default () => {
    return axios.create({
        baseURL: 'http://api-public.guidebox.com/v2'
    })
}