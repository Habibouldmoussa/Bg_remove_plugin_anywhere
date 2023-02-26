// Récuperation des plugin et models nécessaire
const dotenv = require('dotenv');
dotenv.config();
const LOGIN = process.env.LOGIN;
const PASS = process.env.PASS;
const jwt = require('jsonwebtoken');
const APP_SECRET = process.env.APP_SECRET;

/* Connexion de l'utilisateur 
*@param { object HTTP  } req
*@property { String } req.body.username - username 
*@property { String } req.body.password - password
*@param { object HTTP } res 
*@param { String } next
*@return { JSON } article
*/
exports.login = (req, res, next) => {
    if (req.body.username == LOGIN && req.body.password == PASS) {
        // si le mot de passe coresspond on donne un token au client 
        res.status(200).json({
            token: jwt.sign(
                { login: "recruteur" },
                APP_SECRET,
                { expiresIn: '24h' }
            )
        }).catch(error => res.status(500).json({ error }));
    };
};
