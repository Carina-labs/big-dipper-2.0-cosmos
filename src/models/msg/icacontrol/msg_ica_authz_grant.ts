import { Categories } from '../types';

class MsgIcaAuthzGrant {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public grantee: string;
  public controllerAddress: string;
  public grant: {
    granter: string;
    grantee: string;
  };

  constructor(payload: any) {
    this.category = 'icacontrol';
    this.type = payload.type;
  }

  static fromJson(json: any) {
    return new MsgIcaAuthzGrant({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
      grantee: json.grantee,
      controllerAddress: json.controller_address,
      grant: {
        granter: json.grant.granter,
        grantee: json.grant.grantee,
      },
    });
  }
}

export default MsgIcaAuthzGrant;
