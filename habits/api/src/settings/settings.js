module.exports = {
  PORT: process.env.PORT,
  DB_URI: `${process.env.DB_NETWORK}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
  // 'backend://postgres:1KSA@fnc@habits_db:5432/postgres'
}
