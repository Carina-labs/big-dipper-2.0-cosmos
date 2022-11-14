import { Categories } from '../types';

class MsgGalDeposit {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public depositor: string;
  public claimer: string;
  public amount: MsgCoin;

  constructor(payload: any) {
    this.category = 'gal';
    this.type = payload.type;
    this.zoneId = payload.zoneId;
    this.depositor = payload.depositor;
    this.claimer = payload.claimer;
    this.amount = payload.amount;
  }

  static fromJson(json: any) {
    return new MsgGalDeposit({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
      depositor: json.depositor,
      claimer: json.claimer,
      amount: {
        denom: json?.amount.denom,
        amount: json?.amount.amount,
      },
    });
  }
}

export default MsgGalDeposit;
