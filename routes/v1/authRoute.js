const express = require('express')
const { register, addAddress, getAllUsers, getAllAddress, deleteUser, addRoleToUser, deleteAddress, getAllRoles } = require('../../controllers/authController')
const router = express.Router()

router.post('/register', register);
router.post("/address", addAddress);
router.get("/users", getAllUsers);
router.get("/address", getAllAddress);
router.get("/roles", getAllRoles);
router.delete("/user/:id", deleteUser);
router.delete("/address/:id", deleteAddress);
router.post("/user-role", addRoleToUser);

module.exports = router