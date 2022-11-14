import { Categories } from '../types';

class MsgIcaAuthzRevoke {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public grantee: string;
  public controllerAddress: string;
  public msgTypeUrl: string;

  constructor(payload: any) {
    this.category = 'icacontrol';
    this.type = payload.type;
    this.zoneId = payload.zoneId;
    this.grantee = payload.grantee;
    this.controllerAddress = payload.controllerAddress;
    this.msgTypeUrl = payload.msgTypeUrl;
  }

  static fromJson(json: any) {
    return new MsgIcaAuthzRevoke({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
      grantee: json.grantee,
      controllerAddress: json.controller_address,
      msgTypeUrl: json.msg_type_url,
    });
  }
}

export default MsgIcaAuthzRevoke;
