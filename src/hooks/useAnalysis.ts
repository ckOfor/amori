import {useQuery} from "@tanstack/react-query"

interface Analysis {
	id: number
	title: string
	completed: boolean
}

const API_URL = `${process.env.API_URL}`

const fetchAnalysis = async (): Promise<Analysis[]> => {
	const response = await fetch (API_URL)
	if ( ! response.ok) {
		throw new Error ("Network response was not ok")
	}
	return response.json ()
}

export function useAnalysis () {
	const {data, isLoading, error} = useQuery<Analysis[], Error> ({
		queryKey: ["todos"],
		queryFn: fetchAnalysis,
	})
	
	return {
		analysis: data,
		isLoading,
		error
	}
}

