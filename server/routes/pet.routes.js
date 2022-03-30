const PetController = require('../controllers/pet.controller.js');
module.exports = (app) => {
    app.post('/api/pets', PetController.createPet);
    app.get('/api/pets', PetController.getAllPets);
    app.get('/api/pets/:_id', PetController.getPet);
    app.put('/api/pets/:_id', PetController.updatePet);
    app.delete('/api/pets/:_id', PetController.adoptPet);
}

