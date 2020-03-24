const express = require('express');
const router = express.Router();

// Here we use routes
// Board controller functions
const {
    userController
} = require('../controllers/userController');

// Get all board posts
router.get('/getuser', userController);

module.exports = router;