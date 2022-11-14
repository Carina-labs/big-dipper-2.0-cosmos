import { Categories } from '../types';

class MsgGalDepositResponse {
  public category: Categories;
  public type: string;
  public receiver: string;
  public depositor: string;
  public depositedAmount: MsgCoin;

  constructor(payload: any) {
    this.category = 'gal';
    this.type = payload.type;
    this.receiver = payload.receiver;
    this.depositor = payload.depositor;
    this.depositedAmount = payload.depositedAmount;
  }

  static fromJson(json: any) {
    return new MsgGalDepositResponse({
      json,
      type: json['@type'],
      receiver: json.receiver,
      depositor: json.depositor,
      depositedAmount: {
        denom: json?.denom,
        amount: json?.amount,
      },
    });
  }
}

export default MsgGalDepositResponse;
