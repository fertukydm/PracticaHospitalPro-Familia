import { Schema, model } from "mongoose";

const DoctoresSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    Especialidad: {
      type: String,
      require: true,
    },

    email: {
      type: String,
    },

    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Doctores", DoctoresSchema);