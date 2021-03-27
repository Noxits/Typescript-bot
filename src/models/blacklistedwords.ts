import mongoose from "mongoose";

export const BlacklistedwordsSchema = mongoose.model("Blacklisted-words", new mongoose.Schema({
    Guild: String,
    Words: Array,
}));

