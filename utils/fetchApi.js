import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'fb81395a8bmsh5b86a02c6ec9e5bp16a0fejsn6e22481ab1e7'
    }
  })
  return data;
}