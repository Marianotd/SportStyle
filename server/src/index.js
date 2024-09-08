import 'dotenv/config'
import app from './app.js';
import './database.js';

const main = async () => {
    try {
        await app.listen(app.get('port'));
        console.log(`Servidor corriendo en el puerto: ${app.get('port')}`);
    } catch (error) {
        console.log(error);
    }
};

main();
