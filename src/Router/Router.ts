import {Router} from 'express'
import { getAllMovies, createMovie, getMovie, removeMovie, updateMovie } from '../Controllers/MovieControllers'
import { validate } from '../Middleware/ErrorValidator'
import { postValidation } from '../Middleware/MovieValidator'

const router = Router()

export const movieRoutes = router
.post('/movie', postValidation(), validate, createMovie)
.get('/movie/:id', getMovie)
.get('/movies', getAllMovies)
.delete('/movie/:id', removeMovie)
.patch('/movie/:id',postValidation(), validate, updateMovie)
