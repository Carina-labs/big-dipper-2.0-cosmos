import { Categories } from '../types';

class MsgClaimAllSnAssetResponse {
  public type: string;
  public category: Categories;
  public claimer: string;

  constructor(payload: any) {
    this.category = 'gal';
    this.type = payload.type;
    this.claimer = payload.claimer;
  }

  static fromJson(json: any) {
    return new MsgClaimAllSnAssetResponse({
      json,
      type: json['@type'],
      claimer: json.claimer,
    });
  }
}

export default MsgClaimAllSnAssetResponse;
