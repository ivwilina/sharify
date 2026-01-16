import { Document, model, Schema } from 'mongoose';
import { IUser } from "./User.model";

/* -------------------------------------------------------------------------- */

interface IBill extends Document{
  menu?: IDish[];
  totalPrice: number;
  participants: IUser[];
  payer: IUser;
  isPaid: boolean;
}

interface IDish {
  name: string;
  numOfDish: number;
  price: number;
}

/* -------------------------------------------------------------------------- */

const dishSchema = new Schema<IDish>({
  name     : { type: String, required: true },
  numOfDish: { type: Number, required: true },
  price    : { type: Number, required: true }
}, { _id: false });

const billSchema = new Schema<IBill>({
  menu        : [dishSchema],
  totalPrice  : { type: Number, required: true },
  participants: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  payer       : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  isPaid      : { type: Boolean, default: false }
}, { timestamps: true})

/* -------------------------------------------------------------------------- */

const Bill = model<IBill>('Bill', billSchema);

export default Bill;
export type {IBill, IDish};