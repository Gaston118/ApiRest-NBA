import axios from 'axios'
const baseURL = 'http://localhost:3001'

const api = axios.create({
  baseURL: baseURL,
});

export async function getAll () {
  const request = api.get('/players')
  const response = await request;
  console.log(response.data)
  return response.data;
}


