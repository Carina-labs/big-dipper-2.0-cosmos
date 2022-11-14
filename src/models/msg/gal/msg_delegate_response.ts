import { Categories } from '../types';

class MsgGalDelegateResponse {
  public category: Categories;
  public type: string;

  constructor(payload: any) {
    this.category = 'gal';
    this.type = payload.type;
  }

  static fromJson(json: any) {
    return new MsgGalDelegateResponse({
      json,
      type: json['@type'],
    });
  }
}

export default MsgGalDelegateResponse;
