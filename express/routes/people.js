const express = require('express')
const router = express.Router()
let { people } = require('../data');
const {    
    getPeople,
    createPeople,
    updatePeople,
    deletePeople} = require('./routes_controller')

router.get('/', getPeople)

router.post('/', createPeople)

router.put('/:id', updatePeople)

router.delete('/:id', deletePeople)

module.exports = router