import { Schema, model } from "mongoose";

const CitaSchema = new Schema(
  {
    Date: {
      type: Date,
      require: true,
    },

    hour: {
      type: String,
    },

    reason: {
      type: String,
    },

    assigneddoctor: {
      type: String,
      require: true,
    },
    assignedpatient: {
      type: String,
      require: true,
    },
    timestamps: true,
    strict: false,
  }
);

export default model("Cita", CitaSchema);