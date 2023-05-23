import {Request, Response} from 'express'
import { MovieModel } from '../Models/Movie'
import { Types } from 'mongoose'
import Logger from '../../config/logger'

export async function createMovie(req:Request, res: Response) {
    try {
        const movieDataRequest = req.body
        const movie = await MovieModel.create(movieDataRequest)

        return res.status(201).json([movie, 'Movie has been successfuly created'])

    } catch (error: any) {

        Logger.error(`System error: ${error.message}`)
        return res.status(500).json({error: 'Not possible to complete this task. Please try again later'})
    }
    
}

export async function getMovie(req:Request, res: Response) {
    try {
        const movieId = req.params.id

        if(!Types.ObjectId.isValid(movieId)){
            return res.status(404).json({ error: 'Invalid movie ID. Movie does not exist' });
        }

        const movie = await MovieModel.findById(movieId)

        return res.status(200).json(movie)

    } catch (error: any) {

        Logger.error(`System error: ${error.message}`)
        return res.status(500).json({error: 'Not possible to complete this task. Please try again later'})
    }
}

export async function getAllMovies(req:Request, res: Response) {
    try {
        const allMovies = await MovieModel.find();

        return res.status(200).json(allMovies);

    } catch (error: any) {

        Logger.error(`System error: ${error.message}`);
        return res.status(500).json({error: 'Not possible to complete this task. Please try again later'})
    }
    
}

export async function removeMovie(req:Request, res: Response) {
    try {
        const movieId = req.params.id

        if(!Types.ObjectId.isValid(movieId)) {
            return res.status(404).json({ error: 'Invalid movie ID. It does not exist' });
        }

        const movie = await MovieModel.findById(movieId);
        await movie?.deleteOne()

        return res.status(200).json([{message: 'Movie has been sucessfully deleted'}, movie])

    } catch (error: any) {

        Logger.error(`System error: ${error.message}`);
        return res.status(500).json({error: 'Not possible to complete this task. Please try again later'})
    }
}

export async function updateMovie(req:Request, res: Response) {
    try {
        const movieId = req.params.id;
        const movieDetails = req.body
    
        if(!Types.ObjectId.isValid(movieId)) {
            return res.status(404).json({ error: 'Invalid movie ID. It does not exist' });
        }

        await MovieModel.findByIdAndUpdate({_id: movieId}, movieDetails)

        return res.status(200).json([{message: 'Movie has been sucessfully updated'}, movieDetails])
        

    } catch (error: any) {
        
        Logger.error(`System error: ${error.message}`);
        return res.status(500).json({error: 'Not possible to complete this task. Please try again later'})
    }
}