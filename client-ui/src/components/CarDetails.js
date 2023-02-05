import { useState, useEffect } from 'react';
import CompanyDetails from './CompanyDetails';
import BrandDetails from './BrandDetails';
import { API } from '../api/axios'

/** CarDetails component to;
 *  list individual carDetails card */
function CarDetails(car) {
    const [brandDetails, setBrandDetails] = useState([]);
    const [companyDetails, setCompanyDetails] = useState([]);

    useEffect(() => {
        if(car.brandId){
            API.get(`/brands/${car.brandId}`).then(res => {
                /** setBrandDetails to pass in;
                 *  as props to the brandDetails component */
                setBrandDetails(res.data);
                
                /** Get companyDetails using companyID;
                 *  from brandDetails object and pass it to CompanyDetails component */
                API.get(`/companies/${res.data.companyId}`)
                    .then(res => setCompanyDetails(res.data));
            });
        }
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ setBrandDetails, setCompanyDetails, car.brandId ]);

    if (car.id){
        return (
            <article className="card">
                <h2>Id: {car.id}</h2>
                <div>Model: {car.model}</div>
                <BrandDetails {...brandDetails} />                    
                <CompanyDetails {...companyDetails} />
            </article>
        )
    }
    else if(car.error){
        return (
            <div className="card">
                <h2>{car.error}</h2>
            </div>
        )
    }
    
}

export default CarDetails;
