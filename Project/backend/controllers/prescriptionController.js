const asyncHandler = require('express-async-handler');

const Prescription = require('../models/prescriptionModel')


// @desc    Fetch all prescriptions
// @route   GET /api/prescriptions
// @access  Private/Admin
const getPrescriptions = asyncHandler(async (req, res) => {

    const prescriptions = await Prescription.find();
    
    res.status(200).json(prescriptions);

})
  
// @desc    Fetch logged in user prescription
// @route   GET /api/prescriptions/:id
// @access  Private
const getOnePrescription = asyncHandler(async (req, res) => {
    const prescription = await Prescription.findOne({ petId: req.params.petId })
  
    if (prescription) {
        res.status(200).json(prescription)
    } else {
        res.status(404)
        throw new Error('Prescription not found')
    }
})
  
// @desc    Create prescription
// @route   POST /api/prescriptions
// @access  Private
const createPrescription = asyncHandler(async (req, res) => {
    
    const { petname, address, description, medicine, quantity } = req.body;

    const prescription = new Prescription({
        petname: petname,
        address: address,
        description: description,
        medicine: medicine,
        quantity: quantity,
    })

    const savedPrescription = await prescription.save();

    res.status(200).json(savedPrescription); 
})
  
// @desc    Update prescription
// @route   PUT /api/prescriptions/:id
// @access  Private
const updatePrescription = asyncHandler(async (req, res) => {

    const prescription = await Prescription.findById(req.params.id)
  
    if (prescription) {
  
        const updatedPrescription = await Prescription.findByIdAndUpdate(req.params.id, { $set: req.body },{ 
            new: true,
        });
       
        res.status(200).json(updatedPrescription)

    } else {
        res.status(404)
        throw new Error('Prescription not found')
    }
  })

// @desc    Delete prescriptions
// @route   DELETE /api/prescription/:id
// @access  Private
const deletPrescription = asyncHandler(async (req, res) => {
    const prescription = await Prescription.findById(req.params.id)
  
    if (prescription) {
        await prescription.deleteOne();
        res.status(200).json({message: 'Prescription removed'})
    } else {
        res.status(404)
        throw new Error('Prescription not found')
    }
})

module.exports = {getPrescriptions, getOnePrescription, createPrescription, updatePrescription, deletPrescription}