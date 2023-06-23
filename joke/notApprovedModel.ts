const notApprovedSchema = new Schema({
  _id: { type: Number, required: true, unique: true },
  joke: { type: String, required: true, unique: true },
  language: { type: String, required: true },
});

module.exports = mongoose.model("NotApproved", notApprovedSchema);
