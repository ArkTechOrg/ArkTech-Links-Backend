import mongoose, { Document, Schema } from "mongoose";

export interface IUrl extends Document {
  originalUrl: string;
  shortUrl: string;
  createdAt?: Date;
};

const urlSchema: Schema = new Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const Url = mongoose.model<IUrl>("Url", urlSchema);
export default Url;
