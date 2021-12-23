import mongoose from "mongoose"
const {Schema,model}=mongoose
const Schema1 = Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
});

const Model = model("Ewuraba", Schema1);

export default Model