import { Categories } from '../types';

class MsgIcaAutoStakingResponse {
  public category: Categories;
  public type: string;

  constructor(payload: any) {
    this.category = 'icacontrol';
    this.type = payload.type;
  }

  static fromJson(json: any) {
    return new MsgIcaAutoStakingResponse({
      json,
      type: json['@type'],
    });
  }
}

export default MsgIcaAutoStakingResponse;
