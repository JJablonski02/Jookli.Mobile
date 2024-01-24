import {REACT_APP_API_URL as baseUrl, REACT_APP_API_ACCESS_TOKEN } from '@env'
import axios from 'axios';
import {readonly} from '../../helpers/readonly'

const requestOptions = readonly({
    headers: {
        'Content-type' : 'application/json',
        'Authorization': `Bearer ${REACT_APP_API_ACCESS_TOKEN}`
    },
    baseUrl
})

export const API = axios.create(requestOptions);
