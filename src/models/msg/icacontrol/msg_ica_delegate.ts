import { Categories } from '../types';

class MsgIcaDelegate {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public controllerAddress: string;
  public amount: MsgCoin;

  constructor(payload: any) {
    this.category = 'icacontrol';
    this.type = payload.type;
    this.zoneId = payload.zoneId;
    this.controllerAddress = payload.controllerAddress;
    this.amount = payload.amount;
  }

  static fromJson(json: any) {
    return new MsgIcaDelegate({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
      controllerAddress: json.controller_address,
      amount: {
        denom: json.amount.denom,
        amount: json.amount.amount,
      },
    });
  }
}

export default MsgIcaDelegate;
