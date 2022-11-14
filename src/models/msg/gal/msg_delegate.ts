import { Categories } from '../types';

class MsgGalDelegate {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public controllerAddress: string;
  public version: number | string;

  constructor(payload: any) {
    this.category = 'gal';
    this.type = payload.type;
    this.zoneId = payload.zoneId;
    this.controllerAddress = payload.controllerAddress;
    this.version = payload.version;
  }

  static fromJson(json: any) {
    return new MsgGalDelegate({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
      controllerAddress: json.controller_address,
      version: json.version,
    });
  }
}

export default MsgGalDelegate;
