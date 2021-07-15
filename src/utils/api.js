import axios from 'axios'

const baseUrl = 'https://cryptocurrency-api-backend.vercel.app/api'

const fetchCurrencies = async limit => {
  const {
    data: { data },
  } = await axios.get(`${baseUrl}?limit=${limit}`)
  return data
}

export default fetchCurrencies
