import axios from "axios";

const _EXPRESS_SERVER_URL = 'http://localhost:2000';

export const API = axios.create({
    baseURL: _EXPRESS_SERVER_URL
});


/** Error handling interceptors; 
 *  to handle applicatio wide-errors with requests and response  */

// Request interceptor
API.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Response interceptor
API.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});