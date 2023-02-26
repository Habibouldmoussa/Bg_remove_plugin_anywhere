// Importation des routes, middleware, controllers et des plugin nécessaire 
const express = require('express');
const router = express.Router();
//const auth = require('../middleware/auth');
const bgCtrl = require('../controllers/bg');
const multer = require('../middleware/multer-config');
const apicache = require('apicache')
let cache = apicache.middleware
// On apprlique les méthodes et les middlewares necessaire et les controlleurs pour chaque routes  

router.post('/', multer, bgCtrl.uploadImage);


module.exports = router;