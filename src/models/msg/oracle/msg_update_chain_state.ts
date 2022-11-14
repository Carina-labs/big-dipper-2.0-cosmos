import { Categories } from '../types';

class MsgUpdateChainState {
  public category: Categories;
  public type: string;
  public coin: MsgCoin;
  public operator: string;
  public blockHeight: number;
  public appHash: any;
  public zoneId: string;

  constructor(payload: any) {
    this.category = 'oracle';
    this.type = payload.type;
    this.coin = payload.coin;
    this.operator = payload.operator;
    this.blockHeight = payload.blockHeight;
    this.appHash = payload.appHash;
    this.zoneId = payload.zoneId;
  }

  static fromJson(json: any) {
    return new MsgUpdateChainState({
      json,
      type: json['@type'],
      coin: json.coin,
      operator: json.operator,
      blockHeight: json.block_height,
      appHash: json.app_hash,
      zoneId: json.zone_id,
    });
  }
}

export default MsgUpdateChainState;
