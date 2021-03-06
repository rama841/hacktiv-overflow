const router = require('express').Router()
const jwt = require('jsonwebtoken')
const controller = require('../controllers/userController')

const userVerify = (req, res, next) => {
  if (req.headers.token != null) {
    req.headers.userVerified = jwt.verify(req.headers.token, process.env.APP_SECRET_KEY)
    next()
  } else {
    res.send('not logged in')
  }
}

router.post('/login', controller.login)
router.get('/me', userVerify, controller.me)

module.exports = router
