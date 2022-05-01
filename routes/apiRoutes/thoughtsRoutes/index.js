const router = require('express').Router();
const {
    createThought,
    getThought,
    getThoughtById
} = require('../../../controllers/thoughtsController');

router.route('/')
    .post(createThought)
    .get(getThought);

router.route('/:id')
    .get(getThoughtById);


