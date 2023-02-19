// Récuperation des plugin et models nécessaire
const express = require('express');
const app = express();

/* Récuperation du token dans les variable d'environement  
* le fichier d'environement .env doit contenir : 

*/
const dotenv = require("dotenv");
dotenv.config();
const path = require('path');

const bgRoutes = require('./routes/Bg_api');
const userRoutes = require('./routes/user');
const rateLimit = require('./models/limitrate')


app.use(express.json());
app.use(rateLimit);

// on configure quelques regle de cross control  
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
    // on indique que les ressources peuvent être partagées depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Origin', '*');
    // on indique les entêtes qui seront utilisées après la pré-vérification cross-origin afin de donner l'autorisation
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    // on indique les méthodes autorisées pour les requêtes HTTP
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
// Création des routes 
app.use('/bg', bgRoutes);
app.use('/users', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;