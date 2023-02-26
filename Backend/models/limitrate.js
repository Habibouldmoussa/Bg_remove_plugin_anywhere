// Importation des models et des plugin nécessaire 
const rateLimit = require('express-rate-limit')
// limiter le nombre de requete à l'API pour eviter les attaques brute force 
const limiter = rateLimit({
    windowMs: 15 * 60, // 1 minute
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

module.exports = limiter;