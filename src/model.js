const mongoose = require("mongoose");

// { urlCode: { mandatory, unique, lowercase, trim }, longUrl: {mandatory, valid url}, shortUrl: {mandatory, unique} }

const urlSchema = new mongoose.Schema(
  {
    urlCode: { type: String, required: true,unique: true ,lowercase: true, trim:true },
    longUrl: {type: String,required: true, unique: true },
    shortUrl: { type: String,required: true,unique:true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("url", urlSchema);
