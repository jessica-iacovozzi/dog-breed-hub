import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.api-ninjas.com/v1',
  headers: {
    'X-Api-Key': '3XwDDJ4tF0WvfpedZ78fOg==hHebLcbYil6lDT1V'
  },
  params: {
    'min_life_expectancy': '1'
  }
})
