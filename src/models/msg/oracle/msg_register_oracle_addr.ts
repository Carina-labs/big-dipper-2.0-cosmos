import { Categories } from '../types';

class MsgRegisterOracleAddr {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public oracleAddress: string;
  public fromAddress: string;

  constructor(payload: any) {
    this.category = 'oracle';
    this.type = payload.type;
    this.zoneId = payload.zoneId;
    this.oracleAddress = payload.oracleAddress;
    this.fromAddress = payload.fromAddress;
  }

  static fromJson(json: any) {
    return new MsgRegisterOracleAddr({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
      oracleAddress: json.oracle_address,
      fromAddress: json.from_address,
    });
  }
}

export default MsgRegisterOracleAddr;
