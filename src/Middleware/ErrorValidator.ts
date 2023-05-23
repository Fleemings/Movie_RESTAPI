import {Request, Response, NextFunction} from 'express'
import { validationResult, ValidationError } from 'express-validator'

export const validate = (req: Request, res: Response, next: NextFunction) => {
    // Get information from the body
    const errors = validationResult(req);

    if(errors.isEmpty()) {
        return next();
    }

    const extractErrors: {[key: string]: String}[] = [];


    errors.array().forEach((err: ValidationError) => {
        const {location, msg} = err;
        const param = err.param || '';
        extractErrors.push({location, msg, param});
    })

    return res.status(422).json({
        errors: extractErrors,
    });
}