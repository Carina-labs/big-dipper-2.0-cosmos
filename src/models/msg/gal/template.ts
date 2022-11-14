import { Categories } from '../types';

class MsgIcaAuthzGrant {
  public category: Categories;
  public type: string;

  constructor(payload: any) {
    this.category = 'gal';
    this.type = payload.type;
  }

  static fromJson(json: any) {
    return new MsgIcaAuthzGrant({
      json,
      type: json['@type'],
    });
  }
}

export default MsgIcaAuthzGrant;
