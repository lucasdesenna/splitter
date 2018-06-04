import axios from 'axios';

const isEnvProd = process.env.NODE_ENV === 'production';

const backendService = axios.create({
  baseURL: isEnvProd
    ? 'https://us-central1-splitter-7e59a.cloudfunctions.net'
    : 'http://localhost:5000/splitter-7e59a/us-central1',
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET, POST',
  },
});

export default backendService;
