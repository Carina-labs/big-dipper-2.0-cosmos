import { Categories } from '../types';

class MsgWithdrawResponse {
  public category: Categories;
  public type: string;
  public withdrawer: string;
  public withdrawAmount: MsgCoin;

  constructor(payload: any) {
    this.category = 'gal';
    this.type = payload.type;
    this.withdrawer = payload.withdrawer;
    this.withdrawAmount = payload.withdrawAmount;
  }

  static fromJson(json: any) {
    return new MsgWithdrawResponse({
      json,
      type: json['@type'],
      withdrawer: json.withdrawer,
      withdrawAmount: {
        denom: json?.withdrawAmount.denom,
        amount: json?.withdrawAmount.amount,
      },
    });
  }
}

export default MsgWithdrawResponse;
