import express from 'express';
import cors from 'cors';
import router from './routes/user.js';

const app = express();

// Configuración
app.set('port', process.env.PORT || 4000);

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API Rest full');
});

// Ruta para API de users
app.use('/api/users', router)

export default app;
