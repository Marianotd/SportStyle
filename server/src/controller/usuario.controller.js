import User from '../models/User.js';
const userCtrl = {}

const errorObject = {
    data: {},
    isError: true
}

export const getUsers = userCtrl.getUsers = async (req, res) => {
    try {
        const dbUsers = await User.find()
        res.json({
            message: 'Consulta realizada con éxito',
            data: dbUsers,
            isError: false
        })
    } catch (error) {
        res.json({ ...errorObject, message: error.message })
    }

}

export const createUser = userCtrl.createUser = async (req, res) => {
    const { first_name, last_name, age, phone, email, admin } = req.body
    const newUser = new User({
        first_name,
        last_name,
        age,
        phone,
        email,
        admin
    })

    try {
        await newUser.save()
        res.json({
            message: 'Usuario creado correctamente',
            data: newUser,
            isError: false
        })
    } catch (error) {
        res.json({ ...errorObject, message: error.message })
    }
}

export const getSingleUser = userCtrl.getSingleUser = async (req, res) => {
    const { id } = req.params
    try {
        const dbUser = await User.findById(id)
        res.json({
            message: 'Usuario consultado con éxito',
            data: dbUser,
            isError: false
        })
    } catch (error) {
        res.json({ ...errorObject, message: error.message })
    }
}

export const updateUser = userCtrl.updateUser = async (req, res) => {
    const { id } = req.params
    const { first_name, last_name, age, phone, email, admin } = req.body

    try {
        await User.findByIdAndUpdate(id, {
            first_name,
            last_name,
            age,
            phone,
            email,
            admin
        })

        const updatedUser = await User.findById(id)
        res.json({
            message: 'Usuario actualizado con éxito',
            data: updatedUser,
            isError: false
        })
    } catch (error) {
        res.json({ ...errorObject, message: error.message })
    }
}

export const deleteUser = userCtrl.deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        const dbUser = await User.findByIdAndDelete(id)
        res.json({
            message: 'Usuario eliminado con éxito',
            data: dbUser,
            isError: false
        })
    } catch (error) {
        res.json({ ...errorObject, message: error.message })
    }
}

export default userCtrl