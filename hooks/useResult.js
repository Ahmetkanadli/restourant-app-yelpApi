import { useEffect, useState } from 'react';
import yelpApi from '../api/yelpApi';

export default () => {
    const [results, setResults] = useState([]);

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelpApi.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'İstanbul'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        searchApi('Toast');
    }, []);

    return [searchApi, results];
};
