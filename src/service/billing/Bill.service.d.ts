interface BillService {
  createBill(
    totalPrice   : number,
    participants : string[],
    payer        : string,
    splits       : { user: string; items?: { name: string; quantity: number; price: number }[]; amount: number }[],
    items       ?: { name: string; quantity: number; price: number }[]
  ): Promise<void>;

  getBillsByUser(
    userId    : string,
    startDate?: Date,
    endDate  ?: Date
  ): Promise<void>;

  readBill(
    billId: string
  ): Promise<void>;

  deleteBill(
    billId: string
  ): Promise<void>;

  calculateShare(
    billIds: string[],
  ): Promise<void>;

  changeSplitPaymentStatus(
    billId: string,
    userId: string,
    isPaid: boolean
  ): Promise<void>;

  changeOverallPaymentStatus(
    billId: string,
    isPaid: boolean
  ): Promise<void>;

  getBillDetails(
    billId: string
  ): Promise<void>;

  getSplitDetails(
    billId: string,
    userId: string
  ): Promise<void>;

  getDebts(
    userId: string
  ): Promise<void>;
}

/* -------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */

export {
  BillService as default
}