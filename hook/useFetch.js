import { useState, useEffect } from 'react'
import axios from 'axios'
// import { RAPID_API_KEY } from '@env'

// const rapidApiKey = RAPID_API_KEY

const useFetch = (endpoint, query) => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const axios = require('axios');

	const options = {
	  method: 'GET',
	  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
	  headers: {
	    'x-rapidapi-key': '8328363789mshb83ec53a1f0da81p1daae8jsn5e3856543721',
	    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
	  },
	  params: { ...query },
	};

	const fetchData = async () => {
		setIsLoading(true)

		try {
			const response = await axios.request(options)

			setData(response.data.data)
			setIsLoading(false)
		} catch (error) {
			setError(error)
			alert('There is an error')
		} finally {
			setIsLoading(False)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	const refetch = () => {
		setIsLoading(true)
		fetchData()
	}

	return{ data, isLoading, error, refetch }
}

export default useFetch