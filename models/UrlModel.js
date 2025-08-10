import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    shortLink: {
        type: String,
        required: true,
    },
    clicks: {
        type: Number,
        default: 0,
    },
});

const Url = mongoose.models.Url || mongoose.model("Url", urlSchema)
export default Url;