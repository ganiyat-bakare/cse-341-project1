const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll); 

// router.post('/', contactsController.createContact);

router.get('/:id', contactsController.getSingle);

module.exports = router;