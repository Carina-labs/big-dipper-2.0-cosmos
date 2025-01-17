import { Categories } from '../types';

class MsgDeleteRegisteredZone {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public controllerAddress: string;

  constructor(payload: any) {
    this.category = 'icacontrol';
    this.type = payload.type;
    this.zoneId = payload.zoneId;
    this.controllerAddress = payload.controllerAddress;
  }

  static fromJson(json: any) {
    return new MsgDeleteRegisteredZone({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
      controllerAddress: json.controller_address,
    });
  }
}

export default MsgDeleteRegisteredZone;
