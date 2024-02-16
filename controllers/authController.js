const { successResponse } = require("../helpers/response");
const db = require("../models");

const User = db.User;
const Address = db.Address;
const UserRole = db.UserRole;
const Role = db.Role;

const register = async (req, res) => {
    const { firstName, lastName, email, gender, password } = req.body

    try {
        const addUser = await User.create({
            firstName,
            lastName,
            email,
            gender,
            password
        });
        res.send(successResponse("Register Successfully", addUser));
    } catch (error) {
        console.log(error);
    }
}


const addAddress = async (req, res) => {
    const { fullAddress, city, userId } = req.body

    try {
        const addAddress = await Address.create({
            fullAddress,
            city,
            userId
        });
        res.send(successResponse("Address added Successfully", addAddress));
    } catch (error) {
        console.log(error);
    }
}

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.findAll({
            include: [
                {
                    model: Address
                },
                {
                    model: UserRole,

                }

            ]
        });
        res.send(successResponse("Fetch All Users successfully", allUsers));
    } catch (error) {
        console.log(error);
    }
}

const getAllAddress = async (req, res) => {
    try {
        const allAddress = await Address.findAll({
            include: [
                {
                    model: User,
                }
            ]
        });
        res.send(successResponse("Fetch All Address successfully", allAddress));
    } catch (error) {
        console.log(error);
    }
}


const getAllRoles = async (req, res) => {
    try {
        const allRoles = await Role.findAll({
            include: [
                {
                    model: UserRole,
                }
            ]
        });
        res.send(successResponse("Fetch All Roles successfully", allRoles));
    } catch (error) {
        console.log(error);
    }
}

//delete user
const deleteUser = async (req, res) => {
    try {
        const deleteUserResult = await User.destroy({
            where: {
                id: req.params.id,
            }
        });
        res.send(successResponse("User deleted successfully", deleteUserResult));
    } catch (error) {
        console.log(error);
    }
}

//Delete Address

const deleteAddress = async (req, res) => {
    try {
        const deleteAddressResult = await Address.destroy({
            where: {
                id: req.params.id,
            }
        });
        res.send(successResponse("User deleted successfully", deleteAddressResult));
    } catch (error) {
        console.log(error);
    }
}

const addRoleToUser = async (req, res) => {
    const { userId, roleId } = req.body

    console.log(req.body, "req-body------------");

    try {
        const addUserRole = await UserRole.create({
            userId,
            roleId
        });
        res.send(successResponse("UserRole added Successfully", addUserRole));
    } catch (error) {
        console.log(error);
    }
}


module.exports = { register, addAddress, getAllUsers, getAllAddress, deleteUser, addRoleToUser, deleteAddress, getAllRoles }