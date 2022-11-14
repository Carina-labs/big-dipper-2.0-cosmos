import { Categories } from '../types';

class MsgPendingUndelegate {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public delegator: string;
  public withdrawer: string;
  public amount: MsgCoin;

  constructor(payload: any) {
    this.category = 'gal';
    this.type = payload.type;
    this.zoneId = payload.zoneId;
    this.delegator = payload.delegator;
    this.withdrawer = payload.withdrawer;
    this.amount = payload.amount;
  }

  static fromJson(json: any) {
    return new MsgPendingUndelegate({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
      delegator: json.delegator,
      withdrawer: json.withdrawer,
      amount: {
        denom: json?.amount.denom,
        amount: json?.amount.amount,
      },
    });
  }
}

export default MsgPendingUndelegate;
