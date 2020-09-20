import axios from 'axios';

const KEY = 'AIzaSyB62uTosMvSsxI8we4hGLEDW401HHjAg34';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});