import { Categories } from '../types';

class MsgRegisterZone {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public icaConnectionInfo: {
    connectionId: string;
    portId: string;
  }
  public icaAccount: {
    controllerAddress: string;
    hostAddress: string;
  }
  public validatorAddress: string;
  public baseDenom: string;
  public decimal: number | string;
  public undelegateMaxEntries: number | string;
  public depositMaxEntries: number | string;

  constructor(payload: any) {
    this.category = 'icacontrol';
    this.type = payload.type;
    this.zoneId = payload.zoneId;
    this.icaConnectionInfo = payload.icaConnectionInfo;
    this.icaAccount = payload.icaAccount;
    this.baseDenom = payload.baseDenom;
    this.undelegateMaxEntries = payload.undelegateMaxEntries;
    this.depositMaxEntries = payload.depositMaxEntries;
  }

  static fromJson(json: any) {
    return new MsgRegisterZone({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
      icaConnectionInfo: {
        connectionId: json.ica_connection_info.connection_id,
        portId: json.connection_info.port_id,
      },
      icaAccount: {
        controllerAddress: json.ica_account.controller_address,
        hostAddress: json.ica_account.host_address,
      },
      validatorAddress: json.validator_address,
      baseDenom: json.base_denom,
      undelegateMaxEntries: json.undelegate_max_entries,
      depositMaxEntries: json.deposit_max_entriesm,
    });
  }
}

export default MsgRegisterZone;
