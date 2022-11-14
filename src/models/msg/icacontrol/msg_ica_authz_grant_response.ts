import { Categories } from '../types';

class MsgIcaAuthzGrantResponse {
  public category: Categories;
  public type: string;

  constructor(payload: any) {
    this.category = 'icacontrol';
    this.type = payload.type;
  }

  static fromJson(json: any) {
    return new MsgIcaAuthzGrantResponse({
      json,
      type: json['@type'],
    });
  }
}

export default MsgIcaAuthzGrantResponse;
