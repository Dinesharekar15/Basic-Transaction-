const express=require ("express");
const {signUpUser, signInUser, updateUser}=require("../Controllers/userController")
const router=express.Router();



router.post('/signup',signUpUser)

router.post('/signin',signInUser)

router.post('/update',updateUser)

module.exports = router;