import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID CUbDzuTG83s11Vhe9wTHki88f2kFNLkhYbliFugzf00'
  }
});