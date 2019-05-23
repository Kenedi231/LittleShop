const express = require('express');
const asyncRoute = require('./asyncRoute');

const newItem = require('../controllers/item/newItem');
const getItems = require('../controllers/item/getItems');
const getItem = require('../controllers/item/getItem');
const getItemsInCart = require('../controllers/item/getItemsInCart');

const router = express.Router();

router.post('/new', asyncRoute(newItem));
router.get('/all', asyncRoute(getItems));
router.post('/get', asyncRoute(getItem));
router.post('/getCart', asyncRoute(getItemsInCart));

module.exports = router;