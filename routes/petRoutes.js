const router = require('express').Router()
const { Pet } = require('../models')

// GET all pets
router.get('/pets', (req, res) => {
  Pet.findAll()
    .then(pets => res.json(pets))
    .catch(err => console.log(err))
})

// GET one pet
router.get('/pets/:id', (req, res) => {
  Pet.findOne({ where: { id: req.params.id } })
    .then(pet => res.json(pet))
    .catch(err => console.log(err))
})

// POST one pet
router.post('/pets', (req, res) => {
  Pet.create(req.body)
    .then(pet => res.json(pet))
    .catch(err => console.log(err))
})

// PUT one pet
router.put('/pets/:id', (req, res) => {
  Pet.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one pet
router.delete('/pets/:id', (req, res) => {
  Pet.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router
