import { Schema, model } from "mongoose";

const PacientesSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    Age: {
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
    telephone: {
        type: Number,
        require: true,
      },
      isVerified: {
        type: Boolean,
      },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Pacientes", PacientesSchema);