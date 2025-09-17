import mongoose from "mongoose";

const filosofoSchemaSchema = new mongoose.Schema({
  title: String,
  year: String,
  corrente: String,
  ideias: String,
  descriptions: descriptionSchema
});

const Filosofo = mongoose.model("Filosofo", filosofoSchema);

export default Filosofo;