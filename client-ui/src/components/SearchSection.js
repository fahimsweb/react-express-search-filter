import { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import { API } from '../api/axios';

const SearchSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // Send Request only if a search term is present 
        searchTerm ?
            API.get(`/cars/${searchTerm}`).then(res => setSearchResults(res.data))
            :
            setSearchResults([]);
    }, [searchTerm]);

    return (
        <>
            { /** Search field box (Child component);
             *  that sets onchange from child to parent */}
            <SearchBar searchQuery={setSearchTerm} />

            {/** Search result component;
               *  passed with searchresults props */}
            {searchResults && <SearchResult {...searchResults} />}
        </>
    );
}

export default SearchSection;
