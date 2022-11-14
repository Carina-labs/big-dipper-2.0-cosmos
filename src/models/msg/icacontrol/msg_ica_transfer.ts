import { Categories } from '../types';

class MsgIcaTransfer {
  public category: Categories;
  public type: string;
  public zoneId: string;
  public controllerAddress: string;
  public receiverAddress: string;
  public icaTransferPort: string;
  public icaTransferChannelId: string;
  public amount: MsgCoin;

  constructor(payload: any) {
    this.category = 'icacontrol';
    this.type = payload.type;
    this.zoneId = payload.zoneId;
    this.controllerAddress = payload.controllerAddress;
    this.receiverAddress = payload.receiverAddress;
    this.icaTransferPort = payload.icaTransferPort;
    this.icaTransferChannelId = payload.icaTransferChannelId;
    this.amount = payload.amount;
  }

  static fromJson(json: any) {
    return new MsgIcaTransfer({
      json,
      type: json['@type'],
      zoneId: json.zone_id,
      controllerAddress: json.controller_address,
      receiverAddress: json.receiver_address,
      icaTransferPort: json.ica_transfer_port,
      icaTransferChannelId: json.ica_transfer_channel_id,
      amount: {
        denom: json.amount.denom,
        amount: json.amount.amount,
      },
    });
  }
}

export default MsgIcaTransfer;
