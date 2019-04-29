const express = require('express');
const router = express.Router();

const Account = require('../models/Account');


router.get('/', (req, res) => {
    Account.find().sort({
        created: -1
    }).then(accounts => res.json(accounts));
});

router.get('/:id', (req, res) => {
    Account.findById(req.params.id)
        .populate('contacts')
        .then(account => res.json(account))
        .catch(() => res.status(404).json({
            success: false
        }));
});

router.post('/', (req, res) => {
    const account = new Account({
        name: req.body.name,
        industry: req.body.industry,
        contacts: req.body.contacts,
        notes: req.body.notes
    });

    account.save().then(account => res.json(account));
});

router.delete('/:id', (req, res) => {
    Account.findById(req.params.id)
        .then(account => account.remove().then(() => res.json({
            success: true
        })))
        .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;
