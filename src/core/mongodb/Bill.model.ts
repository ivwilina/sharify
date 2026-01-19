import { Document, model, Schema } from 'mongoose';
import { IUser } from "./User.model";

/* -------------------------------------------------------------------------- */

interface IBill extends Document{
  items       ?: IDish[];
  totalPrice   : number;
  participants : IUser[];
  payer        : IUser;
  isPaid       : boolean;
  splits       : ISplit[];
}

interface IDish {
  name    : string;
  quantity: number;
  price   : number;
}

interface ISplit {
  user  : IUser;
  items?: IDish[];
  amount: number;
  isPaid: boolean;
}

/* -------------------------------------------------------------------------- */

const dishSchema = new Schema<IDish>({
  name    : { type: String, required: true },
  quantity: { type: Number, required: true },
  price   : { type: Number, required: true }
}, { _id: false });

const splitSchema = new Schema<ISplit>({
  user  : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items : [dishSchema],
  amount: { type: Number, required: true },
  isPaid: { type: Boolean, default: false }
}, { _id: false });

const billSchema = new Schema<IBill>({
  items       : [dishSchema],
  totalPrice  : { type: Number, required: true },
  participants: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  payer       : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  isPaid      : { type: Boolean, default: false },
  splits      : [splitSchema]
}, { timestamps: true})

/* -------------------------------------------------------------------------- */

const Bill = model<IBill>('Bill', billSchema);

export default Bill;
export type {IBill, IDish, ISplit};