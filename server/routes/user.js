const express = require('express');
const asyncRoute = require('./asyncRoute');

const signUp = require('../controllers/auth/SignUp');
const signIn = require('../controllers/auth/SignIn');
const logOut = require('../controllers/auth/logout');
const me = require('../controllers/auth/me');

const router = express.Router();

router.post('/new', asyncRoute(signUp));
router.post('/login', asyncRoute(signIn));
router.post('/logout', asyncRoute(logOut));
router.get("/me", asyncRoute(me));

module.exports = router;
