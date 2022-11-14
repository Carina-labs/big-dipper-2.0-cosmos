import { Categories } from '../types';

class MsgRegisterControllerAddress {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public controllerAddress: string;
  public fromAddress: string;

  constructor(payload: any) {
    this.zoneId = payload.zoneId;
    this.controllerAddress = payload.controllerAddress;
    this.fromAddress = payload.fromAddress;
  }

  static fromJson(json: any) {
    return new MsgRegisterControllerAddress({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
      controllerAddress: json.controller_address,
      fromAddress: json.from_address,
    });
  }
}

export default MsgRegisterControllerAddress;
