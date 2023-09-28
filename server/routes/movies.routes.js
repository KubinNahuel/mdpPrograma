const express= require('express');
const router= express.Router();
const {getMovies, createMovie, getMoviesById}= require('../controller/movies.controller')

router.get('/', getMovies)
router.get('/:id', getMoviesById)
router.post('/createMovie', createMovie)

module.exports = router