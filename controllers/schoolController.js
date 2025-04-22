const db = require('../config/db.js')
const {validateSchool} = require('../validations/schoolValidation.js')
const getDistance = require('../utils/distance.js');
const { parse } = require('dotenv');

exports.addSchool = (req, res) => {
    const {error} = validateSchool(req.body);
    if (error) return res.status(400).json({error: error.details[0].message});

    const { name, address, latitude, longitude } = req.body;
    const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, address, latitude, longitude], (err, result) => {
        if (err) return res.status(500).json({error: 'Database error', details: err});

        res.status(201).json({message: 'school added successfully' , id: result.insertId})
    })
};

exports.listSchools = (req, res) => {
    const userLatitude = parseFloat(req.query.latitude);
    const userLongitude = parseFloat(req.query.longitude);

    if (isNaN(userLatitude) || isNaN(userLongitude)){
        return res.status(400).json({error: 'Latitude and Longitude must be valid numbers'});
    }

    const sql = 'SELECT * FROM schools';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({error : 'Database error', details: err});

        const sorted = results.map(school => {
            const distance = getDistance(userLatitude, userLongitude, school.latitude, school.longitude);
            return { ...school, distance};
        }).sort((a,b) => a.distance - b.distance);

        res.status(200).json(sorted);
    });
}