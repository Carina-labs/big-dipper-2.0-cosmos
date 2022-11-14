import { Categories } from '../types';

class MsgPendingUndelegateResponse {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public delegator: string;
  public withdrawer: string;
  public burnAsset: MsgCoin;
  public undelegateAsset: MsgCoin;

  constructor(payload: any) {
    this.category = 'gal';
    this.type = payload.type;
    this.zoneId = payload.zoneId;
    this.delegator = payload.delegator;
    this.withdrawer = payload.withdrawer;
    this.burnAsset = payload.burnAsset;
    this.undelegateAsset = payload.undelegateAsset;
  }

  static fromJson(json: any) {
    return new MsgPendingUndelegateResponse({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
      delegator: json.delegator,
      withdrawer: json.withdrawer,
      burnAsset: {
        denom: json?.burnAsset.denom,
        amount: json?.burnAsset.amount,
      },
      undelegateAsset: {
        denom: json?.undelegateAsset.denom,
        amount: json?.undelegateAsset.amount,
      },
    });
  }
}

export default MsgPendingUndelegateResponse;
