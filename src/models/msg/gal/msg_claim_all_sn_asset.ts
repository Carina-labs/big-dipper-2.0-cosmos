import { Categories } from '../types';

class MsgClaimAllSnAsset {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public fromAddress: string;

  constructor(payload: any) {
    this.category = 'gal';
    this.type = payload.type;
    this.zoneId = payload.zoneId;
    this.fromAddress = payload.fromAddress;
  }

  static fromJson(json: any) {
    return new MsgClaimAllSnAsset({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
      fromAddress: json.from_address,
    });
  }
}

export default MsgClaimAllSnAsset;
