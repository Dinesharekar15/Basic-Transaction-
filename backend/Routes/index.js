const express=require ("express");
const {userRoutes}=require("")
const router=express().router;

router.use("user/",userRoutes)