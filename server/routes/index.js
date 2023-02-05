/* Routes configuration for the express API*/

const express = require('express');
const router = express.Router();

const store = require('../models/index');

// default route
router.get('/', (req, res) => {
    res.status(200).send(store);
});

// cars route
router.get('/cars/:id', (req, res) => {
    const carId = parseInt(req.params.id);
    const car_record = recordsFilterbyId('cars', carId);
    !car_record ?
        res.status(200).send({'error': `No Cars found with ID: ${carId}`}) :
        res.status(200).send(car_record);
});

// Brands route
router.get('/brands/:id', (req, res) => {
    const brandId = parseInt(req.params.id);
    const brand_record = recordsFilterbyId('brands', brandId);
    !brand_record ?
        res.status(200).send({ 'error': `No Brands found with ID: ${brandId}`}) :
        res.status(200).send(brand_record);
});

// Companies route
router.get('/companies/:id', (req, res) => {
    const companyId = parseInt(req.params.id);
    const company_record = recordsFilterbyId('companies', companyId);
    !company_record ?
        res.status(200).send({'error': `No Companies found with ID: ${companyId}`}) :
        res.status(200).send(company_record);
});

/* @Fuction to filter records by a unique ID in a given object type
 * @params : @type - Record type, example: cars or brands
 *           @id - Record unique id to filter results
 */
const recordsFilterbyId = (type, id) => {
    return store[type].find(item => item.id === id);   
}

module.exports = router;