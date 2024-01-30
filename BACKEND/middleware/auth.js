import dotenv from 'dotenv';

dotenv.config();

const authenticate = (req, res, next) => {
    const providedToken = req.headers.authorization;

    if (providedToken === process.env.AUTH_TOKEN) {
        // Token válido, permitir la solicitud
        next();
    } else {
        // Token no válido, rechazar la solicitud
        res.status(401).json({ error: 'Acceso no autorizado' });
    }
};

// Middleware para aplicar autenticación solo a POST, PUT y PATCH
export const protectRoutes = (req, res, next) => {
    if (['GET'].includes(req.method)) {
        next();
    } else {
        authenticate(req, res, next);
    }
};