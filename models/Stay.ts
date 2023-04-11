import mongoose, { Schema, model, models } from 'mongoose';

const staySchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  star: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  total: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  list: {
    type: String,
    required: true,
  },
});

const Stay = models.Stay || model('Stay', staySchema);

export default Stay;
