const express=require ("express");
const { authmiddleware } = require("../Middelware/Auth");
const {balance,transfer}=require('../Controllers/accountController');

const router=express.Router();


router.get("/balance",authmiddleware,balance)
router.post("/tranfer",authmiddleware,transfer)

module.exports=router
