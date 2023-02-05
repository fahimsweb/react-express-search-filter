/** React stateless component;
 *  that accepts brand details props */

function BrandDetails(brand) {
    return (
        <div className="card-brand">
            Brand : {brand.name}
        </div>
    )
}

export default BrandDetails;
