import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.api-ninjas.com/v1',
  headers: {
    'X-Api-Key': '3XwDDJ4tF0WvfpedZ78fOg==hHebLcbYil6lDT1V'
  },
  params: {
    'min_life_expectancy': '1'
  }
})

export const getBreedsPage = async (offset = 0, breed = '', options = {}) => {
  const response = await api.get(`/dogs?offset=${offset}&name=${breed}`, options)
  return response.data
}
