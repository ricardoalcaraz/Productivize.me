module.exports = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  REDIS_URL: process.env.CACHE_URL,
  REDIS_SECRET: 'secretsecretsecret',
  REDIS_TOKEN: 'pme_session',
  LOG_PATH: process.env.LOG_PATH
}
