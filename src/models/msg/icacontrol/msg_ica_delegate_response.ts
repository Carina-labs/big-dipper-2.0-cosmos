import { Categories } from '../types';

class MsgIcaDelegateResponse {
  public category: Categories;
  public type: string;

  constructor(payload: any) {
    this.category = 'icacontrol';
    this.type = payload.type;
  }

  static fromJson(json: any) {
    return new MsgIcaDelegateResponse({
      json,
      type: json['@type'],
    });
  }
}

export default MsgIcaDelegateResponse;
