/** React stateless component;
 * that accepts company details props */

function CompanyDetails(company) {
    return (
        <div className="card-company">
           Company : {company.name} 
        </div>
    )
}

export default CompanyDetails;
