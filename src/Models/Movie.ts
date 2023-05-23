import { model, Schema } from "mongoose";

const movieSchema = new Schema(
    {
        title: {type: String},
        rating: {type: Number},
        description: {type: String},
        director: {type: Array},
        poster: {type: String},
        actor: {type: Array},
        gender: {type: Array}
    },
    {
        timestamps: true
    }
)

export const MovieModel = model('movie', movieSchema)
