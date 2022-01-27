
const getPeople = (req, res) => {
    res.status(200).json({success:true, data:people})
}

const createPeople = (req, res) => {
    const {name} = req.body
    if(!name) {
        res.status(404).json({success:false, message:'please provide name values'})
    }
    res.status(201).json({sucess:true, person:name})
}

const updatePeople = (req, res) => {
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person) => person.id === Number(id))
    if(!person) {
        res.status(404).json({success:false, message:'Person not found'})
    }

    const newPeople = people.map((person => {
        if(person.id === id) {
            person.name = name;
        }
        return person;
    }))
    res.status(200).json({success:true, data:newPeople})
}

const deletePeople = (req, res) => {
    const {id} = req.params

    const person = people.find((person) => person.id === Number(id))
    if(!person) {
        res.status(404).json({success:false, message:'Person not found'})
    }

    const newPeople = people.filter((person) => person.id !== Number(id)) 
    res.status(200).json({success:true, data:newPeople})
}

module.exports = {
    getPeople,
    createPeople,
    updatePeople,
    deletePeople
}