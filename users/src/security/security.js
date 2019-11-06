const CognitoExpress = require('cognito-express')

const cognitoExpress = new CognitoExpress({
  region: process.env.AWS_REGION,
  cognitoUserPoolId: process.env.AWS_POOL_ID,
  tokenUse: 'access', // Possible Values: access | id
  tokenExpiration: 3600000 // Up to default expiration of 1 hour (3600000 ms)
})

module.exports.secure = ({ app }) => {
  app.use(function (req, res, next) {
    // // I'm passing in the access token in header under key accessToken
    // const accessTokenFromClient = req.headers.accesstoken

    // // Fail if token not present in header.
    // if (!accessTokenFromClient) return res.status(401).send('Access Token missing from header')

    // cognitoExpress.validate(accessTokenFromClient, function (err, response) {
    //   // If API is not authenticated, Return 401 with error message.
    //   if (err) return res.status(401).send(err)

    //   // Else API has been authenticated. Proceed.
    //   res.locals.user = response
    //   next()
      next()
    //})
  })
}
