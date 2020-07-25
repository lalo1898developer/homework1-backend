const { api, PORT } = require('./api');

api.listen(PORT, () => console.log(`Escuchando en ${PORT}`));
