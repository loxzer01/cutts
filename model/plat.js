import { Schema, model, models } from "mongoose";

const platSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    cutts: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    paypal: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        required: true,
    }
})

export default models.plats || model(`plats`, platSchema);