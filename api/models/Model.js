const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ModelSchema = new Schema({
  fields: { type: Schema.Types.ObjectId, ref: "Post" },
});

const ModelModel = model("Model", ModelSchema);

module.exports = ModelModel;
