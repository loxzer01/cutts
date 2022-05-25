import { Schema, model, models } from "mongoose";

const paySchema = new Schema({
    ip:{
        type: String,
        required: true,
    },
    time:{
        type: Number,
        required: true,
    }
});
export default models.ip24 || model("ip24", paySchema);