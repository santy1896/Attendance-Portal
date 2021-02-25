const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User',
    required:true
  },
  students: [    {
    type: mongoose.Schema.Types.ObjectId, ref: 'User',
    required:true
    }
  ],
  dateCreated: {
    type: Date,
    default: Date.now
  },
  totLec: {
    type: Number,
    required: false,
    default:0
  },
});

module.exports = new mongoose.model("Class", classSchema);

