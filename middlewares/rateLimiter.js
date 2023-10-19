const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minuto bloqueado
	limit: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message: "No puedes realizar mas de 5 intentos",
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
	// store: ... , // Use an external store for more precise rate limiting
})

module.exports = limiter;