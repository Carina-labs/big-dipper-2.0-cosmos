import { Categories } from '../types';

class MsgIcaWithdrawResponse {
  public category: Categories;
  public type: string;

  constructor(payload: any) {
    this.category = 'gal';
    this.type = payload.type;
  }

  static fromJson(json: any) {
    return new MsgIcaWithdrawResponse({
      json,
      type: json['@type'],
    });
  }
}

export default MsgIcaWithdrawResponse;
