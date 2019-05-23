const express = require('express');
const asyncRoute = require('./asyncRoute');

const signUp = require('../controllers/auth/SignUp');
const signIn = require('../controllers/auth/SignIn');
const logOut = require('../controllers/auth/logout');
const me = require('../controllers/auth/me');
const addItemToCart = require('../controllers/item/addItemToCart');
const clearCart = require('../controllers/item/clearCart');
const updateCart = require('../controllers/item/updateCart');

const router = express.Router();

router.post('/new', asyncRoute(signUp));
router.post('/login', asyncRoute(signIn));
router.post('/logout', asyncRoute(logOut));
router.get("/me", asyncRoute(me));
router.post('/addItem', asyncRoute(addItemToCart));
router.post('/clearCart', asyncRoute(clearCart));
router.post('/updateCart', asyncRoute(updateCart));

module.exports = router;
