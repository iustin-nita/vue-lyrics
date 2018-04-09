const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user')
const songController = require('../../controllers/song')

router.get('/manufacturers', songController.all);

router.get('/users', userController.all);
router.get('/users/:id', userController.byId);
router.post('/users', userController.create);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.remove);

module.exports = router;
