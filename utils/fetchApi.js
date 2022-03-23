import axios from "axios"
export const baseUrl = "https://movies-app1.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
    'X-RapidAPI-Key': '3bdcdeaa97msh902e65492932f12p1495c6jsne0f25b5b2570'
    }
  })
  return data
}