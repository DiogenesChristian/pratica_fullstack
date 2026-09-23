const mongoose = require("mongoose");

const pindoramaSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    residente: {
      type: Boolean,
      required: true
    },
    moradia: {
      type: String,
      required: true
    },
    valor: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Pindorama", pindoramaSchema);
  