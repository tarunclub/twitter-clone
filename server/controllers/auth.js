const { db } = require('../utils/connect');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  // check if the user exists
  const q = 'SELECT * FROM users WHERE username = ?';

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json('User already exists!');

    //   create a new user
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q =
      'INSERT INTO users (`name`,`username`,`email`,`password`) VALUE (?)';

    const values = [
      req.body.name,
      req.body.username,
      req.body.email,
      hashedPassword,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json('User has been created');
    });
  });
};

exports.login = (req, res) => {
  const q = 'SELECT * FROM users WHERE username = ?';

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json('User not found');

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword)
      return res.status(400).json('Wrong Password or username');

    const token = jwt.sign({ id: data[0].id }, process.env.JWT_SECRET_KEY);

    const { password, ...others } = data[0];

    res
      .cookie('accessToken', token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

exports.logout = (req, res) => {
  res
    .clearCookie('accessToken', {
      secure: true,
      sameSite: 'none',
    })
    .status(200)
    .json('User has been logged out');
};
