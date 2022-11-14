import { Categories } from '../types';

class MsgDeleteRegisteredZoneResponse {
  public category: Categories;
  public type: string;

  constructor(payload: any) {
    this.category = 'icacontrol';
    this.type = payload.type;
  }

  static fromJson(json: any) {
    return new MsgDeleteRegisteredZoneResponse({
      json,
      type: json['@type'],
    });
  }
}

export default MsgDeleteRegisteredZoneResponse;
