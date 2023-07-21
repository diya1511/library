const user = require('../models/user');

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'email already exists.' });
    }

    const newUser = new user({ name, email, password });
    await newUser.save();

    res.json({ message: 'User created successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user.', error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: 'Invalid email or password',
      });
    }
    //check user
    const users = await user.findOne({ email });
    if (!users) {
      return res.status(404).send({
        success: false,
        message: 'Email is not registerd',
      });
    }
    return res.status(200).send({
      success: true,
      message: 'login successfully',
      users: {
        _id: users._id,
        name: users.name,
        email: users.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in login',
      error,
    });
  }
};

module.exports = {
  signup,
  login,
};
