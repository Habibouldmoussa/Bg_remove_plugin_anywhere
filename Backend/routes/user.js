// Importation des routes, controllers et des plugin nécessaire 
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
// les routes pour l'identification et la création d'utilisateur 
router.post('/login', userCtrl.login);

module.exports = router;