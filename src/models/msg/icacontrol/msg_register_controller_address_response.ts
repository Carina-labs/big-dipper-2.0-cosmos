import { Categories } from '../types';

class MsgRegisterControllerAddressResponse {
  public category: Categories;
  public type: string;

  constructor(payload: any) {
    this.category = 'icacontrol';
    this.type = payload.type;
  }

  static fromJson(json: any) {
    return new MsgRegisterControllerAddressResponse({
      json,
      type: json['@type'],
    });
  }
}

export default MsgRegisterControllerAddressResponse;
