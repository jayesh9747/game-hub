import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4b15f191431b4ca290439f94a6468007'
    }
})

