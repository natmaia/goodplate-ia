import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://api.clarifai.com',
    headers:{
        "Authorization": "key c71bb035823d4f9c86e2fd1238ba3f5e"
    }
})
