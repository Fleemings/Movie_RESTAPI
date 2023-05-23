import {body} from 'express-validator'
import { MovieModel } from '../Models/Movie'

export const postValidation = () => {
    return [
        body('title').notEmpty().withMessage('Title must have a value').isString().withMessage('Title has to be a string').custom(async (value) => {
            const existingTitle = await MovieModel.findOne({title: value});
            if(existingTitle) {
                throw new Error('There is already a movie with this title');
            }
            return true;
        }),
        body('rating').isNumeric().withMessage('Rating has to be a number').custom((value: number) => {
            if(value < 0 || value > 10) {
                throw new Error('Rate must be between 0 and 10');
            }
            return true;
        }),
        body('description').isString().withMessage('Description has to be a string'),
        body('director').isArray().withMessage('Director has to be an array of string values'),
        body('poster').isURL().withMessage('Image must be a URL'),
        body('actor').isArray().withMessage('Actor must be an array of string values'),
        body('gender').isArray().withMessage('Actor must be an array of string values')

    ]
}