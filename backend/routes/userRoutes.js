const express = require('express')
const router = express.Router()
const { registrarUser, loginUser, dataUser } = require('../controllers/userController')

router.post('/', registrarUser)
router.post('/login', loginUser)
router.get('/data', dataUser)

module.exports = router