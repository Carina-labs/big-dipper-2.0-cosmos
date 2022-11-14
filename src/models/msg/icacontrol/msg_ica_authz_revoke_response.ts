import { Categories } from '../types';

class MsgIcaAuthzRevokeResponse {
  public category: Categories;
  public type: string;

  constructor(payload: any) {
    this.category = 'icacontrol';
    this.type = payload.type;
  }

  static fromJson(json: any) {
    return new MsgIcaAuthzRevokeResponse({
      json,
      type: json['@type'],
    });
  }
}

export default MsgIcaAuthzRevokeResponse;
