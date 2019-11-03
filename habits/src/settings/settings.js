module.exports = {
  PORT: process.env.PORT,
  DB_URI: `${process.env.DB_NETWORK}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@db:${process.env.DB_PORT}/habit`
  // 'backend://postgres:1KSA@fnc@habits_db:5432/postgres'
}
