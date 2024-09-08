import { connect } from 'mongoose';

const URI = process.env.MONGODB_URI || 'mongodb://localhost/dbtest';

connect(URI)
    .then(() => console.log(`Base de datos conectada: ${URI}`))
    .catch(error => console.error('Error al conectar a la base de datos:', error));
