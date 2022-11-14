import { Categories } from '../types';

class MsgWithdraw {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public withdrawer: string;

  constructor(payload: any) {
    this.category = 'gal';
    this.type = payload.type;
    this.zoneId = payload.zoneId;
    this.withdrawer = payload.withdrawer;
  }

  static fromJson(json: any) {
    return new MsgWithdraw({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
      withdrawer: json.withdrawer,
    });
  }
}

export default MsgWithdraw;
