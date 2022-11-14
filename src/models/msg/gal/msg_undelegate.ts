import { Categories } from '../types';

class MsgGalUndelegate {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public controllerAddress: string;
  public version: string | number;

  constructor(payload: any) {
    this.category = 'gal';
    this.type = payload.type;
    this.zoneId = payload.zoneId;
    this.controllerAddress = payload.controllerAddress;
    this.version = payload.version;
  }

  static fromJson(json: any) {
    return new MsgGalUndelegate({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
      controllerAddress: json.controller_address,
      version: json.version,
    });
  }
}

export default MsgGalUndelegate;
