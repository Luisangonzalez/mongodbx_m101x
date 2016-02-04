var mongoose = require('mongoose');

var phraseSchema = {
  _id: { type: String },
  parent: {
    type: String,
    ref: 'Category'
  },
  ancestors: [{
    type: String,
    ref: 'Category'
  }]
};

module.exports = new mongoose.Schema(phraseSchema);
module.exports.phraseSchema = phraseSchema;
