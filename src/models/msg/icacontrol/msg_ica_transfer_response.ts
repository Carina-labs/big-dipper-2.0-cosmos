import { Categories } from '../types';

class MsgIcaTransferResponse {
  public category: Categories;
  public type: string;

  constructor(payload: any) {
    this.category = 'icacontrol';
    this.type = payload.type;
  }

  static fromJson(json: any) {
    return new MsgIcaTransferResponse({
      json,
      type: json['@type'],
    });
  }
}

export default MsgIcaTransferResponse;
