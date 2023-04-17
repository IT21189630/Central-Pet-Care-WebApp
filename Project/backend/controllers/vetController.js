const asyncHandler = require('express-async-handler');

const Vet = require('../models/vetModel')


// @desc    Fetch all carts
// @route   GET /api/carts
// @access  Private/Admin
const getVets = asyncHandler(async (req, res) => {

    const vets = await Vet.find();
    
    res.status(200).json(vets);

})
  
// @desc    Fetch logged in user cart
// @route   GET /api/carts/:id
// @access  Private
const getOneVet = asyncHandler(async (req, res) => {
    const vet = await Vet.findOne({ vcslId: req.params.vcslId })
  
    if (vet) {
        res.status(200).json(vet)
    } else {
        res.status(404)
        throw new Error('Vet not found')
    }
})
  
// @desc    Create cart
// @route   POST /api/carts
// @access  Private
const createVet = asyncHandler(async (req, res) => {
    
    const { vcslId, vetName, telephone, email, experience, qualification } = req.body;

    const vet = new Vet({
        vcslId: req.body.vcslId,
        vetName: req.body.vetName,
        telephone: req.body.telephone,
        email: req.body.email,
        experience: req.body.experience,
        qualification: req.body.qualification,
    })

    const savedVet = await vet.save();

    res.status(200).json(savedVet); 
})
  
// @desc    Update cart
// @route   PUT /api/carts/:id
// @access  Private
const updateVet = asyncHandler(async (req, res) => {

    const vet = await Vet.findById(req.params.id)
  
    if (vet) {
  
        const updatedVet = await Vet.findByIdAndUpdate(req.params.id, { $set: req.body },{ 
            new: true,
        });
       
        res.status(200).json(updatedVet)

    } else {
        res.status(404)
        throw new Error('Vet not found')
    }
  })

// @desc    Delete cart
// @route   DELETE /api/carts/:id
// @access  Private
const deleteVet = asyncHandler(async (req, res) => {
    const vet = await Vet.findById(req.params.id)
  
    if (vet) {
        await vet.deleteOne();
        res.status(200).json({message: 'Vet removed'})
    } else {
        res.status(404)
        throw new Error('Vet not found')
    }
})

module.exports = {getVets, getOneVet, createVet, updateVet, deleteVet}