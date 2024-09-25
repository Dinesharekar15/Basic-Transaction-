const User=require('../Models/usermodel')
const jwt=require("jsonwebtoken");
const zod =require("zod");
const JWT_SECRET = require('../config');

const signupBody=zod.object({
  username:zod.string(),
  firstName:zod.string(),
  lastName:zod.string(),
  password:zod.string()
})

const signInBody=zod.object({
  username:zod.string(),
  password:zod.string()
})

const updateuser=zod.object({
  username:zod.string().optional(),
  firstName:zod.string().optional(),
  lastName:zod.string().optional(),
  password:zod.string().optional(),
})


//signup 

  const signUpUser = async (req, res) => {

    const {success}=signupBody.safeParse(req.body)
    if(!success){
      return res.status(411).json({
        message:"Email alresdy taken / Incorrect inpute"
      })
    }
    
    const existingUSer=await User.findOne({
      username:req.body.username
    })

    if(existingUSer){
      return res.status(411).json({
        message:"Email alresdy taken / Incorrect inpute"
      })
    }

    const user=await User.create({
      username:req.body.username,
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      password:req.body.password
    })
    const userId=user._id;
    const token=jwt.sign({
      userId
    },JWT_SECRET)

    res.json({
      meassage:"User created succefully",
      token:token
    })
  };


  //user signin 
  const signInUser = async (req, res) => {
    
    const {success}=signInBody.safeParse(req.body);

    if(!success){
      return res.json({
        message:"Incorrect input"
      })
    }
    try{

    
    const existingUSer=await User.findOne({
      username:req.body.username,
      password:req.body.password
    })

    if(!existingUSer){
      return res.status(404).json({
        message:"user not found"
      })
    }
    const userId=existingUSer._id;
    const token =jwt.sign({
      userId
    },JWT_SECRET)

    res.json({
      message: "Signed in successfully",
      token: token
    });


    
  
  }catch (error) {
      res.status(500).json({ message: 'Error signing in', error });
    }
  };  

  // Update user information
const updateUser = async (req, res) => {
  
  const {success}=updateuser.safeParse(req.body);

  if(!success){
    return res.status(411).json({
      message:"error while updaring Imformation"
    })
  }
  await User.updateOne(req.body,{
    id:req.userId
  })
  res.json({
    message:"user updated successfully"
  })

    // const { firstName, lastName, password } = req.body;
    // const userId = req.user.id;
  
    // try {
    //   const user = await User.findById(userId);
  
    //   if (!user) {
    //     return res.status(404).json({ message: 'User not found' });
    //   }
  
    //   user.firstName = firstName || user.firstName;
    //   user.lastName = lastName || user.lastName;
    //   if (password) {
    //     user.password = password;
    //   }
  
    //   await user.save();
    //   res.json({
    //     _id: user._id,
    //     username: user.username,
    //     firstname: user.firstName,
    //     lastname: user.lastName,
    //   });
    // } catch (error) {
    //   res.status(500).json({ message: 'Error updating user', error });
    // }
  };

  const findUser=async (req,res)=>{
    const filter= req.query.filter||"";
    const users= await User.find({
      $or:[{
        firstName:{
          "$regex":filter
        }
      },{
        lastName:{
          "$regex":filter
        }
      }]
    })

    res.json({
      user:users.map(user=>({
        username:user.username,
        firstName:user.firstName,
        lastName:user.lastName,
        _id:user._id
      })) 
    })
      
  }
  
  
  module.exports = { signUpUser, signInUser, updateUser,findUser };
  