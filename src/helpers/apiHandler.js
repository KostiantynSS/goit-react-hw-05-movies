import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzE3ZjE0MzNmOTIxNDQ2MjUwMjdlNmRmMGUwMjNiNSIsInN1YiI6IjY1MTViN2NiOWI4NjE2MDEzYTIzYWMzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i7DPx55s6eL7vAR4eU5BrIva5WYFMBev_NeAO-U1Ocw';
export const apiHandler = async url => {
  const { data } = await axios(url);
  return data;
};
