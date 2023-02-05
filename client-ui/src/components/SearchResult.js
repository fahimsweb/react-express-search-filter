/** SearchResult component;
 *  to display searched results */

import CarDetails from './CarDetails'; 

function SearchResult(results) {
    return (
        <section className="container">
            <section className="col-12 py-5">
                <div className="results">
                    {[results].map((result, index) => <CarDetails key={index} {...result} />)}
                </div>
            </section>
        </section>
    )
}

export default SearchResult;
