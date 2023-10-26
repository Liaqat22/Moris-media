import userModel from "../models/userModel.js"
// import { comparePassword, hashPassword } from "../helper/auth.helper.js"
// import JWT from 'jsonwebtoken'


export const registerController = async (req, res) => {
    const { name, email, password, address, phone } = req.body;

    try {
        if (!name) {
            return res.send({ error: "name is required" })
        }
        if (!email) {
            return res.send({ error: "email is required" })
        }
        if (!password) {
            return res.send({ error: "password is required" })
        }
        if (!address) {
            return res.send({ error: "address is required" })
        }
        if (!phone) {
            return res.send({ error: "phone is required" })
        }
        // if (!answer) {
        //     return res.send({ error: "answer is required" })
        // }

        //existing user
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            res.status(202).send({
                success: false,
                message: 'email exist already'
            })
        }

        // const hashedPassword = await hashPassword(password)
        const user = await new userModel({ name, email, password, phone, address }).save()
        res.status(200).send({
            success: true,
            message: 'user registered succesfully',
            user
        })
    } catch (error) {
        console.log(error)
        res.status(404).send({
            success: false,
            message: 'error in registration'
        })
    }


}

//login

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            res.status(404).send({
                success: false,
                message: "invalid username or password"
            })
        }
        const user = await userModel.findOne({ email })
        if (!user) {
            res.status(404).send({
                success: false,
                message: "user in not registered"
            })
        }
        // const match = await comparePassword(password, user.password)
        // if (!match) {
        //     res.status(404).send({
        //         success: false,
        //         message: "invalid password"
        //     })
        // }

        const token = ({ _id: user._id })
        res.status(200).send({
            success: true,
            message: "you are successfully loggedin",
            user: {
                name: user.name,
                email: user.email,
                address: user.address,
                phone: user.phone,
                role: user.role

            },
            token
        })
    }

    catch (error) {
        console.log(error)
        res.status(404).send({
            success: false,
            message: "error in login"
        })

    }
}