const CustomErrorResponse = require('../utilities/CustomErrorResponse')

const errorHandler = (error, req, res, next) => {
  let err = { ...error }

  err.message = error.message

  console.log(err)

  // todo - IF STATEMENTS TO MATCH DATABASE ERRORS

  res.status(err.statusCode || 500).json({
    success: false,
    error:
      err.message ||
      'Internal Server Error, please contact support or try again later.',
  })
}

module.exports = errorHandler
