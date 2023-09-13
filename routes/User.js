const express = require('express');
const UserController = require('../controllers/User');
const router = express.Router();

router.post('/', UserController.create);
router.get('/', UserController.findAll);
router.get('/:id', UserController.findOne);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.destroy);

module.exports = router;