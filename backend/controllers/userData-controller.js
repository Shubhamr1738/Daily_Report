const UserData = require('../mongoDB/models/userData-model');


exports.signupUserData = async (req, res,next) => {
    try {
      // Extracting user data from request body
      const { firstName, lastName, username, email, password } = req.body;
      if (!firstName || !lastName || !username || !email || !password) {
        return res.status(400).json({ message: 'Missing required fields' });
      }    
      // Check if the user already exists
      const existingUser = await UserData.findOne({ $or: [{email: email}, {username: username}]});
      if (existingUser) {
        return res.status(409).json({ message: 'Email or username already exists' });
      }
  
      // Create new user
      const newUser = new UserData({
        firstName,
        lastName,
        username,
        email,
        password,
      });
  
      // Save new user to the database
      await newUser.save();
  
      // Return success message
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      // Return error message
      res.status(500).json({ message: 'Error creating user', error });
    }
  };
  
  exports.loginUserData = async (req, res,next) => {
    try {
        // Extracting user data from request body
        const { username, email, password } = req.body;
        if(!username && !email) {
            return res.status(400).json({ message: 'username or email is required' });
        }
        if(!password) {
            return res.status(400).json({ message: 'password is required' });
        }

        // Check if the user already exists
        const existingUser = await UserData.findOne({ $or: [{email: email}, {username: username}]});
        if (!existingUser) {
            return res.status(401).json({ message: 'Invalid email or username' });
        }

        // check if password match
        if(existingUser.password !== password){
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Return success message
        res.status(200).json({ message: 'login successfully' });
    } catch (error) {
        // Return error message
        res.status(500).json({ message: 'Error while login', error });
    }    
}