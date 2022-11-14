import * as R from 'ramda';
import { Categories } from '../types';

class MsgIcaAutoStaking {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public controllerAddress: string;
  public amount: MsgCoin;
  public version: string | number;

  constructor(payload: any) {
    this.category = 'icacontrol';
    this.type = payload.type;
    this.zoneId = payload.zoneId;
    this.controllerAddress = payload.controllerAddress;
    this.amount = payload.amount;
    this.version = payload.version;
  }

  static fromJson(json: any) {
    return new MsgIcaAutoStaking({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
      controllerAddress: json.controller_address,
      amount: json?.amount.map((x) => {
        return ({
          denom: x?.denom,
          amount: R.pathOr('0', ['amount'], x),
        });
      }),
      version: json.version,
    });
  }
}

export default MsgIcaAutoStaking;
