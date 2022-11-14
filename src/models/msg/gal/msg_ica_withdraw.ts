import { Categories } from '../types';

class MsgIcaWithdraw {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public controllerAddress: string;
  public icaTransferPortId: string;
  public icaTransferChannelId: string;
  public chainTime: {
    seconds: number | string;
    nanos: number | string;
  };
  public version: string | number;

  constructor(payload: any) {
    this.category = 'gal';
    this.type = payload.type;
    this.zoneId = payload.zoneId;
    this.controllerAddress = payload.controllerAddress;
    this.icaTransferPortId = payload.icaTransferPortId;
    this.icaTransferChannelId = payload.icaTransferChannelId;
    this.chainTime = payload.chainTime;
    this.version = payload.version;
  }

  static fromJson(json: any) {
    return new MsgIcaWithdraw({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
      controllerAddress: json.controller_address,
      icaTransferPortId: json.ica_transfer_port_id,
      icaTransferChannelId: json.ica_transfer_channel_id,
      chainTime: {
        seconds: json?.chain_time.seconds,
        nanos: json?.chain_time.nanos,
      },
      version: json.version,
    });
  }
}

export default MsgIcaWithdraw;
