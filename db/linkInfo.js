const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.DB_URL
  )
  .catch((error) => console.log(error));

const linkSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },

  requestClient: [
    {
      clientIp: { type: String, required: true },
      userAgent: { type: String, required: true },
    },
  ],
});

linkSchema.set("timestamps", { createdAt: true, updatedAt: false });

const linkController =
  mongoose.models.shortlinks || mongoose.model("shortlinks", linkSchema);
module.exports = linkController;
