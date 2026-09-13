import mongoose from 'mongoose';
import { hashPassword } from '../utils/index.js';

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: ['admin', 'staff'], default: 'staff' },
    isProtected: { type: Boolean, default: false },
    lastLoginAt: { type: Date },
  },
  { timestamps: true },
);

UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await hashPassword(this.password);
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
