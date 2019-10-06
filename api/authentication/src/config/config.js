module.exports = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL: "http://localhost:37101/api/auth/google/callback",
  PORT: process.env.PORT,
  REDIS_URL: process.env.CACHE_URL,
  REDIS_SECRET: "secretsecretsecret",
  REDIS_TOKEN: "pme_session",
  LOG_PATH: process.env.LOG_PATH
}