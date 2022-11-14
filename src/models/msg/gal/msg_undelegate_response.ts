import { Categories } from '../types';

class MsgUndelegateResponse {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public burnAsset: MsgCoin;
  public undelegateAsset: MsgCoin;

  constructor(payload: any) {
    this.category = 'gal';
    this.type = payload.type;
    this.zoneId = payload.zoneId;
    this.burnAsset = payload.burnAsset;
    this.undelegateAsset = payload.undelegateAsset;
  }

  static fromJson(json: any) {
    return new MsgUndelegateResponse({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
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

export default MsgUndelegateResponse;
