const express = require('express')
const person = express.Router()
let { people } = require('../data');
const {    
    getPeople,
    createPeople,
    updatePeople,
    deletePeople} = require('./routes_controller')

    person.get('/', getPeople)

    person.post('/', createPeople)
    
    person.put('/:id', updatePeople)
    
    person.delete('/:id', deletePeople)
    
    module.exports = person