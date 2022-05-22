import { Schema, model, models } from "mongoose";

const paySchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    paypal: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    }
});
export default models.pay || model("pay", paySchema);