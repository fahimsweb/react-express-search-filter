/** SearchBar Input field that sets;
 *  the searched keyword back to parent component */

 function SearchBar(props) {

    const handleSearchChange = (event) => {
        props.searchQuery(event.target.value);
    }

    return (
        <>
            <section className="col-6 offset-3 search-wrapper p-5 my-5">
                <header className="form-outline">
                    <form className="search">
                        <input
                            type="text"
                            id="search-input"
                            className="form-control"
                            placeholder="Enter Car ID to look for. Example: 1"
                            onChange={handleSearchChange}
                        />
                    </form>
                </header>
            </section>  
        </>
    )
}

export default SearchBar;
