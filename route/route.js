const express = require('express');
const router = express.Router();

// Require cat_controller
const cat_controller = require('../controller/controller');

// Get all cats
router.get('/', cat_controller.cats);


// Post a vote to a cat
router.post('/:id', cat_controller.vote_cat);

module.exports = router;