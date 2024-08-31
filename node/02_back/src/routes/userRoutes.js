const express = require('express');
const { listar, registrar, login } = require('../controllers/UserController');
const router = express.Router();

router.post('/crear', registrar);
router.get('/listar', listar);
router.post('/login', login);

module.exports = router;