const User=require('../Models/usermodel')
const jwt=require("jsonwebtoken");

const generateToken = (id) => {
    return jwt.sign({ id }, 'pytm123', { expiresIn: '30d' });
  };

//signup 

  const signUpUser = async (req, res) => {

    const { username, firstName, lastName, password } = req.body;
  
    try {
      const userExists = await User.findOne({ username });
  
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const user = await User.create({ username, firstName, lastName, password });
      res.status(201).json({
        _id: user._id,
        username: user.username,
        token: generateToken(user._id),
      });
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error });
    }
  };


  //user signin 
  const signInUser = async (req, res) => {
    console.log('Hit the signup route');

    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
  
      if (user && (await user.matchPassword(password))) {
        res.json({
          _id: user._id,
          username: user.username,
          token: generateToken(user._id),
        });
      } else {
        res.status(401).json({ message: 'Invalid username or password' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error signing in', error });
    }
  };  

  // Update user information
const updateUser = async (req, res) => {
    const { firstName, lastName, password } = req.body;
    const userId = req.user.id;
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      user.firstName = firstName || user.firstName;
      user.lastName = lastName || user.lastName;
      if (password) {
        user.password = password;
      }
  
      await user.save();
      res.json({
        _id: user._id,
        username: user.username,
        firstname: user.firstName,
        lastname: user.lastName,
      });
    } catch (error) {
      res.status(500).json({ message: 'Error updating user', error });
    }
  };
  
  module.exports = { signUpUser, signInUser, updateUser };
  