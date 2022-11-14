import { Categories } from '../types';

class MsgIcaUndelegateResponse {
  public category: Categories;
  public type: string;

  constructor(payload: any) {
    this.category = 'icacontrol';
    this.type = payload.type;
  }

  static fromJson(json: any) {
    return new MsgIcaUndelegateResponse({
      json,
      type: json['@type'],
    });
  }
}

export default MsgIcaUndelegateResponse;