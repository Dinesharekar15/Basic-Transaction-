const express=require ("express");
const {signUpUser, signInUser, updateUser, findUser}=require("../Controllers/userController");
const { authmiddleware } = require("../Middelware/Auth");
const router=express.Router();



router.post('/signup',signUpUser)

router.post('/signin',signInUser)

router.post('/update',authmiddleware,updateUser)

router.get('/find',findUser)

module.exports = router;