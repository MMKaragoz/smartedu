const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const User = require('../models/User');

const router = express.Router();

router.route('/signup').post(
  [
    body('name').not().isEmpty().withMessage('Please Enter Your Name. '),
    body('email')
      .isEmail()
      .withMessage('Please Enter Valid Email. ')
      .custom((userEmail) => {
        return User.findOne({ email: userEmail }).then((user) => {
          return user && Promise.reject('Email is already exists!');
        });
      }),
    body('password')
      .not()
      .isEmpty()
      .withMessage('Please Enter Valid Password. '),
  ],
  authController.createUser
);
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);
router.route('/dashboard').get(authMiddleware, authController.getDashboardPage); // /users/dashboard
router.route('/:id').delete(authController.deleteUser);

module.exports = router;
