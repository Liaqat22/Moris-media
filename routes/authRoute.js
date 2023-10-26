import express from 'express'
import { registerController, loginController } from '../controllers/authController.js'

const router = express.Router()

router.post('/register', registerController)
router.post('/login', loginController)
// router.post('/forgetPassword', forgetPassword)
// router.put('/updateprofile', signIn, updateProfileController)
// router.post('/test',signIn,isAdmin,test) 

//user private route
// router.get('/userauth', signIn, (req, res) => {
//     res.status(200).send({ ok: true })
// })

//admin private route

// router.get('/adminauth', signIn, isAdmin, (req, res) => {
//     res.status(200).send({ ok: true })
// })
export default router