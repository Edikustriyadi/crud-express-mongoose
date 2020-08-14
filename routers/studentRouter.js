const express = require('express');
const router = express.Router();
//Controller
const StudentController = require('../controllers/StudentController');
//Route Student
router.get('/',StudentController.index);
router.post('/', StudentController.create);
router.delete('/:id',StudentController.delete);
router.put('/:id',StudentController.update);

module.exports = router;