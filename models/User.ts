import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  stays: [
    {
      stays: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stay',
      },
    },
  ],
  lists: [
    {
      name: { type: String },
    },
  ],
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
