//Usé las variables del entorno, como mejor opción para guardar las constantes de conexion con la BDDD
const config = {
  db: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  isProd: process.env.IS_PROD,
  pageSize: 5,
};

module.exports = config;
