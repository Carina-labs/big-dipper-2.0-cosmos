import { Categories } from '../types';

class MsgClaimSnAssetResponse {
  public category: Categories;
  public type: string;
  public claimer: string;
  public minted: MsgCoin;

  constructor(payload: any) {
    this.category = 'gal';
    this.type = payload.type;
    this.claimer = payload.claimer;
    this.minted = payload.minted;
  }

  static fromJson(json: any) {
    return new MsgClaimSnAssetResponse({
      json,
      type: json['@type'],
      claimer: json.claimer,
      minted: {
        denom: json?.minted.denom,
        amount: json?.minted.amount,
      },
    });
  }
}

export default MsgClaimSnAssetResponse;
