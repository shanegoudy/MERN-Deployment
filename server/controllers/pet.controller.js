const Pet = require("../models/pet.model.js");

module.exports = {
    createPet: (request, response) => {
        const { name, type, description, skill_1, skill_2, skill_3 } = request.body;
        Pet.create({
            name: name,
            type: type,
            description: description,
            skill_1: skill_1,
            skill_2: skill_2,
            skill_3: skill_3
        })
            .then(pet => response.json(pet))
            .catch(err => {
                console.log("Something went wrong in createPet");
                response.status(400).json(err);
            })
    },
    
    getAllPets: (request, response) => {
        Pet.find({}).sort({ type: "asc", name: "asc"})
            .then(pets => {
                console.log(pets);
                response.json(pets);
            })
            .catch(err => {
                console.log(err);
                response.status(400).json(err);
            })
    },

    getPet: (request, response) => {
        console.log(request.body);
        Pet.findOne({_id:request.params._id})
            .then(onePet => response.json(onePet))
            .catch(err => response.json(err))
    },

    updatePet: (request, response) => {
    Pet.findOneAndUpdate(
        {_id: request.params._id}, 
        request.body, 
        {new:true, runValidators:true}
        )
        .then(updatedPet => response.json(updatedPet))
        .catch(err => {
            console.log("Something went wrong in updatePet");
            response.status(400).json(err);
        })
    },

    adoptPet: (request, response) => {
    Pet.deleteOne({_id: request.params._id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json({ message: "Something went wrong in adoptPet", error: err}))
    }
}

