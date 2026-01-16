import { Document, model, Schema } from 'mongoose';

/* -------------------------------------------------------------------------- */

interface IUser extends Document{
  username   : string;
  password   : string;
  displayName: string;
  friends    : IUser[];
}

/* -------------------------------------------------------------------------- */

const userSchema = new Schema<IUser>({
  username   : { type: String, required: true },
  password   : { type: String, required: true },
  displayName: { type: String, required: true },
  friends    : [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });


/* -------------------------------------------------------------------------- */

const User = model<IUser>('User', userSchema);

export default User;
export type {IUser};
