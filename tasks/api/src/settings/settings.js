module.exports = {
  LOG_PATH: process.env.LOG_PATH,
  PORT: process.env.PORT,
  DB_URI: `${process.env.DB_NETWORK}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
}
