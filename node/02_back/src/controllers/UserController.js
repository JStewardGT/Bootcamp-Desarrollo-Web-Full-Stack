const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Esta metodo permite registrar un usuario
exports.registrar = async (request, response) => {
  const { username, email, password } = request.body;
  const passwordEncriptado = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: passwordEncriptado
  });
  response.status(201).json(user);
}

exports.listar = async (request, response) => {
  const users = await User.findAll();
  response.status(200).json(users);
}

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(401).json({ message: 'Credenciales invalidas' })
  }

  if (!await bcrypt.compare(password, user.password)) {
    return res.status(401).json({ message: 'Credenciales invalidas' })
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_KEY, { expiresIn: '1h' });
  res.json({ token })

}