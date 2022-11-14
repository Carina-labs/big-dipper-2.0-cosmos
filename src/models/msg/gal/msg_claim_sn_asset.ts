import { Categories } from '../types';

class MsgClaimSnAsset {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public claimer: string;

  constructor(payload: any) {
    this.category = 'gal';
    this.type = payload.type;
    this.zoneId = payload.zoneId;
    this.claimer = payload.claimer;
  }

  static fromJson(json: any) {
    return new MsgClaimSnAsset({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
      claimer: json.claimer,
    });
  }
}

export default MsgClaimSnAsset;
