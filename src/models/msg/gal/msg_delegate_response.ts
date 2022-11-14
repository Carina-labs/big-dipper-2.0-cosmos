import { Categories } from '../types';

class MsgDelegateResponse {
  public category: Categories;
  public type: string;

  constructor(payload: any) {
    this.category = 'gal';
    this.type = payload.type;
  }

  static fromJson(json: any) {
    return new MsgDelegateResponse({
      json,
      type: json['@type'],
    });
  }
}

export default MsgDelegateResponse;
