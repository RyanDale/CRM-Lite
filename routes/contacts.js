const express = require('express');
const router = express.Router();

const Contact = require('../models/Contact');


router.get('/', (req, res) => {
    Contact.find().then(contacts => res.json(contacts));
});

router.get('/:id', (req, res) => {
    Contact.findById(req.params.id)
        .then(contact => res.json(contact))
        .catch(() => res.status(404).json({
            success: false
        }));
});

router.post('/', (req, res) => {
    const contact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
    });

    contact.save().then(contact => res.json(contact));
});

router.delete('/:id', (req, res) => {
    Contact.findById(req.params.id)
        .then(contact => contact.remove().then(() => res.json({
            success: true
        })))
        .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;