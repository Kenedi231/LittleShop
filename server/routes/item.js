const express = require('express');
const asyncRoute = require('./asyncRoute');

const newItem = require('../controllers/item/newItem');
const getItems = require('../controllers/item/getItems');
const getItem = require('../controllers/item/getItem');

const router = express.Router();

router.post('/new', asyncRoute(newItem));
router.get('/all', asyncRoute(getItems));
router.post('/get', asyncRoute(getItem));

module.exports = router;