import * as MODELS from '@models';
import * as R from 'ramda';
import {
  Tag,
} from '@components';
import * as COMPONENTS from '@msg';

const getDataByType = (type: string) => {
  // =====================================
  // DO NOT UPDATE IF THIS IS A FORK.
  // ONLY COSMOS SDK DEFAULT MESSAGES HERE.
  // Please use `customTypeToModel` below for custom message types
  // =====================================
  const defaultTypeToModel = {
    // ========================
    // staking
    // ========================
    '/cosmos.staking.v1beta1.MsgDelegate': {
      model: MODELS.MsgDelegate,
      content: COMPONENTS.Delegate,
      tagTheme: 'one',
      tagDisplay: 'txDelegateLabel',
    },
    '/cosmos.staking.v1beta1.MsgBeginRedelegate': {
      model: MODELS.MsgRedelegate,
      content: COMPONENTS.Redelegate,
      tagTheme: 'one',
      tagDisplay: 'txRedelegateLabel',
    },
    '/cosmos.staking.v1beta1.MsgUndelegate': {
      model: MODELS.MsgUndelegate,
      content: COMPONENTS.Undelegate,
      tagTheme: 'one',
      tagDisplay: 'txUndelegateLabel',
    },
    '/cosmos.staking.v1beta1.MsgCreateValidator': {
      model: MODELS.MsgCreateValidator,
      content: COMPONENTS.CreateValidator,
      tagTheme: 'one',
      tagDisplay: 'txCreateValidatorLabel',
    },
    '/cosmos.staking.v1beta1.MsgEditValidator': {
      model: MODELS.MsgEditValidator,
      content: COMPONENTS.EditValidator,
      tagTheme: 'one',
      tagDisplay: 'txEditValidatorLabel',
    },
    // ========================
    // bank
    // ========================
    '/cosmos.bank.v1beta1.MsgSend': {
      model: MODELS.MsgSend,
      content: COMPONENTS.Send,
      tagTheme: 'two',
      tagDisplay: 'txSendLabel',
    },
    '/cosmos.bank.v1beta1.MsgMultiSend': {
      model: MODELS.MsgMultiSend,
      content: COMPONENTS.Multisend,
      tagTheme: 'two',
      tagDisplay: 'txMultisendLabel',
    },
    // ========================
    // crisis
    // ========================
    '/cosmos.crisis.v1beta1.MsgVerifyInvariant': {
      model: MODELS.MsgVerifyInvariant,
      content: COMPONENTS.VerifyInvariant,
      tagTheme: 'three',
      tagDisplay: 'txVerifyInvariantLabel',
    },
    // ========================
    // slashing
    // ========================
    '/cosmos.slashing.v1beta1.MsgUnjail': {
      model: MODELS.MsgUnjail,
      content: COMPONENTS.Unjail,
      tagTheme: 'five',
      tagDisplay: 'txUnjailLabel',
    },
    // ========================
    // distribution
    // ========================
    '/cosmos.distribution.v1beta1.MsgFundCommunityPool': {
      model: MODELS.MsgFundCommunityPool,
      content: COMPONENTS.Fund,
      tagTheme: 'six',
      tagDisplay: 'txFundLabel',
    },
    '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress': {
      model: MODELS.MsgSetWithdrawAddress,
      content: COMPONENTS.SetWithdrawalAddress,
      tagTheme: 'six',
      tagDisplay: 'txsetRewardAddressLabel',
    },
    '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward': {
      model: MODELS.MsgWithdrawDelegatorReward,
      content: COMPONENTS.WithdrawReward,
      tagTheme: 'six',
      tagDisplay: 'txWithdrawRewardLabel',
    },
    '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission': {
      model: MODELS.MsgWithdrawValidatorCommission,
      content: COMPONENTS.WithdrawCommission,
      tagTheme: 'six',
      tagDisplay: 'txWithdrawCommissionLabel',
    },
    // ========================
    // governance
    // ========================
    '/cosmos.gov.v1beta1.MsgDeposit': {
      model: MODELS.MsgDeposit,
      content: COMPONENTS.DepositProposal,
      tagTheme: 'seven',
      tagDisplay: 'txDepositLabel',
    },
    '/cosmos.gov.v1beta1.MsgVote': {
      model: MODELS.MsgVote,
      content: COMPONENTS.Vote,
      tagTheme: 'seven',
      tagDisplay: 'txVoteLabel',
    },
    '/cosmos.gov.v1beta1.MsgSubmitProposal': {
      model: MODELS.MsgSubmitProposal,
      content: COMPONENTS.SubmitProposal,
      tagTheme: 'seven',
      tagDisplay: 'txSubmitProposalLabel',
    },
    // ========================
    // ibc client
    // ========================
    '/ibc.core.client.v1.MsgCreateClient': {
      model: MODELS.MsgCreateClient,
      content: COMPONENTS.CreateClient,
      tagTheme: 'nine',
      tagDisplay: 'txCreateClientLabel',
    },
    '/ibc.core.client.v1.MsgUpdateClient': {
      model: MODELS.MsgUpdateClient,
      content: COMPONENTS.UpdateClient,
      tagTheme: 'nine',
      tagDisplay: 'txUpdateClientLabel',
    },
    '/ibc.core.client.v1.MsgUpgradeClient': {
      model: MODELS.MsgUpgradeClient,
      content: COMPONENTS.UpgradeClient,
      tagTheme: 'nine',
      tagDisplay: 'txUpgradeClientLabel',
    },
    '/ibc.core.client.v1.MsgSubmitMisbehaviour': {
      model: MODELS.MsgSubmitMisbehaviour,
      content: COMPONENTS.SubmitMisbehaviour,
      tagTheme: 'nine',
      tagDisplay: 'txSubmitMisbehaviourLabel',
    },
    '/ibc.core.client.v1.Height': {
      model: MODELS.MsgHeight,
      content: COMPONENTS.Height,
      tagTheme: 'nine',
      tagDisplay: 'txHeightLabel',
    },
    // ========================
    // ibc channel
    // ========================
    '/ibc.core.channel.v1.MsgRecvPacket': {
      model: MODELS.MsgReceivePacket,
      content: COMPONENTS.ReceivePacket,
      tagTheme: 'nine',
      tagDisplay: 'txRecvPacketLabel',
    },
    '/ibc.core.channel.v1.Channel': {
      model: MODELS.MsgChannel,
      content: COMPONENTS.Channel,
      tagTheme: 'nine',
      tagDisplay: 'txChannelLabel',
    },
    '/ibc.core.channel.v1.Counterparty': {
      model: MODELS.MsgCounterpartyChannel,
      content: COMPONENTS.CounterpartyChannel,
      tagTheme: 'nine',
      tagDisplay: 'txCounterpartyLabel',
    },
    '/ibc.core.channel.v1.Packet': {
      model: MODELS.MsgPacket,
      content: COMPONENTS.Packet,
      tagTheme: 'nine',
      tagDisplay: 'txPacketLabel',
    },
    '/ibc.core.channel.v1.MsgAcknowledgement': {
      model: MODELS.MsgAcknowledgement,
      content: COMPONENTS.Acknowledgement,
      tagTheme: 'nine',
      tagDisplay: 'txAcknowledgementLabel',
    },
    '/ibc.core.channel.v1.MsgChannelCloseConfirm': {
      model: MODELS.MsgChannelCloseConfirm,
      content: COMPONENTS.ChannelCloseConfirm,
      tagTheme: 'nine',
      tagDisplay: 'txChannelCloseConfirmLabel',
    },
    '/ibc.core.channel.v1.MsgChannelCloseInit': {
      model: MODELS.MsgChannelCloseInit,
      content: COMPONENTS.ChannelCloseInit,
      tagTheme: 'nine',
      tagDisplay: 'txChannelCloseInitLabel',
    },
    '/ibc.core.channel.v1.MsgChannelOpenAck': {
      model: MODELS.MsgChannelOpenAck,
      content: COMPONENTS.ChannelOpenAck,
      tagTheme: 'nine',
      tagDisplay: 'txChannelOpenAckLabel',
    },
    '/ibc.core.channel.v1.MsgChannelOpenConfirm': {
      model: MODELS.MsgChannelOpenConfirm,
      content: COMPONENTS.ChannelOpenConfirm,
      tagTheme: 'nine',
      tagDisplay: 'txChannelOpenConfirmLabel',
    },
    '/ibc.core.channel.v1.MsgChannelOpenInit': {
      model: MODELS.MsgChannelOpenInit,
      content: COMPONENTS.ChannelOpenInit,
      tagTheme: 'nine',
      tagDisplay: 'txChannelOpenInitLabel',
    },
    '/ibc.core.channel.v1.MsgChannelOpenTry': {
      model: MODELS.MsgChannelOpenTry,
      content: COMPONENTS.ChannelOpenTry,
      tagTheme: 'nine',
      tagDisplay: 'txChannelOpenTryLabel',
    },
    '/ibc.core.channel.v1.MsgTimeout': {
      model: MODELS.MsgTimeout,
      content: COMPONENTS.Timeout,
      tagTheme: 'nine',
      tagDisplay: 'txTimeoutLabel',
    },
    '/ibc.core.channel.v1.MsgTimeoutOnClose': {
      model: MODELS.MsgTimeoutOnClose,
      content: COMPONENTS.TimeoutOnClose,
      tagTheme: 'nine',
      tagDisplay: 'txTimeoutOnCloseLabel',
    },
    // ========================
    // ibc connection
    // ========================
    '/ibc.core.connection.v1.MsgConnectionOpenAck': {
      model: MODELS.MsgConnectionOpenAck,
      content: COMPONENTS.ConnectionOpenAck,
      tagTheme: 'nine',
      tagDisplay: 'txConnectionOpenAckLabel',
    },
    '/ibc.core.connection.v1.MsgConnectionOpenConfirm': {
      model: MODELS.MsgConnectionOpenConfirm,
      content: COMPONENTS.ConnectionOpenConfirm,
      tagTheme: 'nine',
      tagDisplay: 'txConnectionOpenConfirmLabel',
    },
    '/ibc.core.connection.v1.MsgConnectionOpenInit': {
      model: MODELS.MsgConnectionOpenInit,
      content: COMPONENTS.ConnectionOpenInit,
      tagTheme: 'nine',
      tagDisplay: 'txConnectionOpenInitLabel',
    },
    '/ibc.core.connection.v1.MsgConnectionOpenTry': {
      model: MODELS.MsgConnectionOpenTry,
      content: COMPONENTS.ConnectionOpenTry,
      tagTheme: 'nine',
      tagDisplay: 'txConnectionOpenTryLabel',
    },
    '/ibc.core.connection.v1.ConnectionEnd': {
      model: MODELS.MsgConnectionEnd,
      content: COMPONENTS.ConnectionEnd,
      tagTheme: 'nine',
      tagDisplay: 'txConnectionEndLabel',
    },
    '/ibc.core.connection.v1.Counterparty': {
      model: MODELS.MsgCounterpartyConnection,
      content: COMPONENTS.CounterpartyConnection,
      tagTheme: 'nine',
      tagDisplay: 'txCounterpartyLabel',
    },
    '/ibc.core.connection.v1.Version': {
      model: MODELS.MsgVersion,
      content: COMPONENTS.Version,
      tagTheme: 'nine',
      tagDisplay: 'txVersionLabel',
    },
    // ========================
    // ibc transfer
    // ========================
    '/ibc.applications.transfer.v1.MsgTransfer': {
      model: MODELS.MsgTransfer,
      content: COMPONENTS.Transfer,
      tagTheme: 'ten',
      tagDisplay: 'txTransferLabel',
    },
    // ========================
    // authz
    // ========================
    '/cosmos.authz.v1beta1.MsgGrant': {
      model: MODELS.MsgGrant,
      content: COMPONENTS.Grant,
      tagTheme: 'thirteen',
      tagDisplay: 'MsgGrant',
    },
    '/cosmos.authz.v1beta1.MsgRevoke': {
      model: MODELS.MsgRevoke,
      content: COMPONENTS.Revoke,
      tagTheme: 'thirteen',
      tagDisplay: 'MsgRevoke',
    },
    // ========================
    // feegrant
    // ========================
    '/cosmos.feegrant.v1beta1.MsgGrantAllowance': {
      model: MODELS.MsgGrantAllowance,
      content: COMPONENTS.GrantAllowance,
      tagTheme: 'fourteen',
      tagDisplay: 'MsgGrantAllowance',
    },
    '/cosmos.feegrant.v1beta1.MsgRevokeAllowance': {
      model: MODELS.MsgRevokeAllowance,
      content: COMPONENTS.RevokeAllowance,
      tagTheme: 'fourteen',
      tagDisplay: 'MsgRevokeAllowance',
    },
    // ========================
    // vesting
    // ========================
    '/cosmos.vesting.v1beta1.MsgCreateVestingAccount': {
      model: MODELS.MsgCreateVestingAccount,
      content: COMPONENTS.CreateVestingAccount,
      tagTheme: 'fifteen',
      tagDisplay: 'MsgCreateVestingAccount',
    },
    '/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount': {
      model: MODELS.MsgCreatePeriodicVestingAccount,
      content: COMPONENTS.CreatePeriodicVestingAccount,
      tagTheme: 'fifteen',
      tagDisplay: 'MsgCreatePeriodicVestingAccount',
    },
  };

  // =====================================
  // Update your chain's message types here
  // =====================================
  const customTypeToModel = {
    // ========================
    // profiles
    // ========================
    '/desmos.profiles.v1beta1.MsgSaveProfile': {
      model: MODELS.MsgSaveProfile,
      content: COMPONENTS.SaveProfile,
      tagTheme: 'four',
      tagDisplay: 'txSaveProfileLabel',
    },
    '/desmos.profiles.v1beta1.MsgDeleteProfile': {
      model: MODELS.MsgDeleteProfile,
      content: COMPONENTS.DeleteProfile,
      tagTheme: 'four',
      tagDisplay: 'txDeleteProfileLabel',
    },
    '/desmos.profiles.v1beta1.MsgCreateRelationship': {
      model: MODELS.MsgCreateRelationship,
      content: COMPONENTS.CreateRelationship,
      tagTheme: 'four',
      tagDisplay: 'txCreateRelationshipLabel',
    },
    '/desmos.profiles.v1beta1.MsgRequestDTagTransfer': {
      model: MODELS.MsgDtagTransferRequest,
      content: COMPONENTS.DtagTransferRequest,
      tagTheme: 'four',
      tagDisplay: 'txRequestDTagTransferLabel',
    },
    '/desmos.profiles.v1beta1.MsgAcceptDTagTransfer': {
      model: MODELS.MsgDtagAcceptTransfer,
      content: COMPONENTS.DtagAcceptTransfer,
      tagTheme: 'four',
      tagDisplay: 'txAcceptDTagTransferLabel',
    },
    '/desmos.profiles.v1beta1.MsgCancelDTagTransfer': {
      model: MODELS.MsgDtagCancelTransfer,
      content: COMPONENTS.DtagCancelTransfer,
      tagTheme: 'four',
      tagDisplay: 'txCancelDTagTransferLabel',
    },
    '/desmos.profiles.v1beta1.MsgRefuseDTagTransfer': {
      model: MODELS.MsgDtagRefuseTransfer,
      content: COMPONENTS.DtagRefuseTransfer,
      tagTheme: 'four',
      tagDisplay: 'txRefuseDTagTransferLabel',
    },
    '/desmos.profiles.v1beta1.MsgBlockUser': {
      model: MODELS.MsgBlockUser,
      content: COMPONENTS.BlockUser,
      tagTheme: 'four',
      tagDisplay: 'txBlockUserLabel',
    },
    '/desmos.profiles.v1beta1.MsgUnblockUser': {
      model: MODELS.MsgUnblockUser,
      content: COMPONENTS.UnBlockUser,
      tagTheme: 'four',
      tagDisplay: 'txUnblockUserLabel',
    },
    // SUPERNOVA
    '/nova.gal.v1.MsgDeposit': {
      model: MODELS.MsgGalDeposit,
      content: COMPONENTS.GalDeposit,
      tagTheme: 'four',
      tagDisplay: 'txDeposit',
    },
    '/nova.gal.v1.MsgDepositResponse': {
      model: MODELS.MsgGalDepositResponse,
      content: COMPONENTS.GalDepositResponse,
      tagTheme: 'four',
      tagDisplay: 'txDepositResponse',
    },
    '/nova.gal.v1.MsgDelegate': {
      model: MODELS.MsgGalDelegate,
      content: COMPONENTS.GalDelegate,
      tagTheme: 'four',
      tagDisplay: 'txDelegate',
    },
    '/nova.gal.v1.MsgDelegateResponse': {
      model: MODELS.MsgGalDelegateResponse,
      content: COMPONENTS.GalDelegateResponse,
      tagTheme: 'four',
      tagDisplay: 'txDelegateResponse',
    },
    '/nova.gal.v1.MsgUndelegate': {
      model: MODELS.MsgGalUndelegate,
      content: COMPONENTS.GalUndelegate,
      tagTheme: 'four',
      tagDisplay: 'txUndelegate',
    },
    '/nova.gal.v1.MsgUndelegateResponse': {
      model: MODELS.MsgGalUndelegateResponse,
      content: COMPONENTS.GalUndelegateResponse,
      tagTheme: 'four',
      tagDisplay: 'txUndelegateResponse',
    },
    '/nova.gal.v1.MsgClaimSnAsset': {
      model: MODELS.MsgClaimSnAsset,
      content: COMPONENTS.ClaimSnAsset,
      tagTheme: 'four',
      tagDisplay: 'txClaimSnAsset',
    },
    '/nova.gal.v1.MsgClaimSnAssetResponse': {
      model: MODELS.MsgClaimSnAssetResponse,
      content: COMPONENTS.ClaimSnAssetResponse,
      tagTheme: 'four',
      tagDisplay: 'txClaimSnAssetResponse',
    },
    '/nova.gal.v1.MsgIcaWithdraw': {
      model: MODELS.MsgIcaWithdraw,
      content: COMPONENTS.IcaWithdraw,
      tagTheme: 'four',
      tagDisplay: 'txIcaWithdraw',
    },
    '/nova.gal.v1.MsgIcaWithdrawResponse': {
      model: MODELS.MsgIcaWithdrawResponse,
      content: COMPONENTS.IcaWithdrawResponse,
      tagTheme: 'four',
      tagDisplay: 'txIcaWithdrawResponse',
    },
    '/nova.gal.v1.MsgPendingUndelegate': {
      model: MODELS.MsgPendingUndelegate,
      content: COMPONENTS.PendingUndelegate,
      tagTheme: 'four',
      tagDisplay: 'txPendingUndelegate',
    },
    '/nova.gal.v1.MsgPendingUndelegateResponse': {
      model: MODELS.MsgPendingUndelegateResponse,
      content: COMPONENTS.PendingUndelegateResponse,
      tagTheme: 'four',
      tagDisplay: 'txPendingUndelegateResponse',
    },
    '/nova.gal.v1.MsgWithdraw': {
      model: MODELS.MsgWithdraw,
      content: COMPONENTS.GalWithdraw,
      tagTheme: 'four',
      tagDisplay: 'txWithdraw',
    },
    '/nova.gal.v1.MsgWithdrawResponse': {
      model: MODELS.MsgWithdrawResponse,
      content: COMPONENTS.GalWithdrawResponse,
      tagTheme: 'four',
      tagDisplay: 'txWithdrawResponse',
    },
    '/nova.icacontrol.v1.MsgChangeRegisteredZone': {
      model: MODELS.MsgChangeRegisteredZone,
      content: COMPONENTS.ChangeRegisteredZone,
      tagTheme: 'four',
      tagDisplay: 'txChangeRegisteredZone',
    },
    '/nova.icacontrol.v1.MsgChangeRegisteredZoneResponse': {
      model: MODELS.MsgChangeRegisteredZoneResponse,
      content: COMPONENTS.ChangeRegisteredZoneResponse,
      tagTheme: 'four',
      tagDisplay: 'txChangeRegisteredZoneResponse',
    },
    '/nova.icacontrol.v1.MsgDeleteRegisteredZone': {
      model: MODELS.MsgDeleteRegisteredZone,
      content: COMPONENTS.DeleteRegisteredZone,
      tagTheme: 'four',
      tagDisplay: 'txDeleteRegisteredZone',
    },
    '/nova.icacontrol.v1.MsgDeleteRegisteredZoneResponse': {
      model: MODELS.MsgDeleteRegisteredZoneResponse,
      content: COMPONENTS.DeleteRegisteredZoneResponse,
      tagTheme: 'four',
      tagDisplay: 'txDeleteRegisteredZoneResponse',
    },
    '/nova.icacontrol.v1.MsgIcaAuthzGrant': {
      model: MODELS.MsgIcaAuthzGrant,
      content: COMPONENTS.IcaAuthzGrant,
      tagTheme: 'four',
      tagDisplay: 'txIcaAuthzGrant',
    },
    '/nova.icacontrol.v1.MsgIcaAuthzGrantResponse': {
      model: MODELS.MsgIcaAuthzGrantResponse,
      content: COMPONENTS.IcaAuthzGrantResponse,
      tagTheme: 'four',
      tagDisplay: 'txIcaAuthzGrantResponse',
    },
    '/nova.icacontrol.v1.MsgIcaAuthzRevoke': {
      model: MODELS.MsgIcaAuthzRevoke,
      content: COMPONENTS.IcaAuthzRevoke,
      tagTheme: 'four',
      tagDisplay: 'txIcaAuthzRevoke',
    },
    '/nova.icacontrol.v1.MsgIcaAuthzRevokeResponse': {
      model: MODELS.MsgIcaAuthzRevokeResponse,
      content: COMPONENTS.IcaAuthzRevokeResponse,
      tagTheme: 'four',
      tagDisplay: 'txIcaAuthzRevokeResponse',
    },
    '/nova.icacontrol.v1.MsgIcaAutoStaking': {
      model: MODELS.MsgIcaAutoStaking,
      content: COMPONENTS.IcaAutoStaking,
      tagTheme: 'four',
      tagDisplay: 'txIcaAutoStaking',
    },
    '/nova.icacontrol.v1.MsgIcaAutoStakingResponse': {
      model: MODELS.MsgIcaAutoStakingResponse,
      content: COMPONENTS.IcaAutoStakingResponse,
      tagTheme: 'four',
      tagDisplay: 'txIcaAutoStakingResponse',
    },
    '/nova.icacontrol.v1.MsgIcaDelegate': {
      model: MODELS.MsgIcaDelegate,
      content: COMPONENTS.IcaDelegate,
      tagTheme: 'four',
      tagDisplay: 'txIcaDelegate',
    },
    '/nova.icacontrol.v1.MsgIcaDelegateResponse': {
      model: MODELS.MsgIcaDelegateResponse,
      content: COMPONENTS.IcaDelegateResponse,
      tagTheme: 'four',
      tagDisplay: 'txIcaDelegateResponse',
    },
    '/nova.icacontrol.v1.MsgIcaTransfer': {
      model: MODELS.MsgIcaTransfer,
      content: COMPONENTS.IcaTransfer,
      tagTheme: 'four',
      tagDisplay: 'txIcaTransfer',
    },
    '/nova.icacontrol.v1.MsgIcaTransferResponse': {
      model: MODELS.MsgIcaTransferResponse,
      content: COMPONENTS.IcaTransferResponse,
      tagTheme: 'four',
      tagDisplay: 'txIcaTransferResponse',
    },
    '/nova.icacontrol.v1.MsgIcaUndelegate': {
      model: MODELS.MsgIcaUndelegate,
      content: COMPONENTS.IcaUndelegate,
      tagTheme: 'four',
      tagDisplay: 'txIcaUndelegate',
    },
    '/nova.icacontrol.v1.MsgIcaUndelegateResponse': {
      model: MODELS.MsgIcaUndelegateResponse,
      content: COMPONENTS.IcaUndelegateResponse,
      tagTheme: 'four',
      tagDisplay: 'txIcaUndelegateResponse',
    },
    '/nova.icacontrol.v1.MsgRegisterControllerAddress': {
      model: MODELS.MsgRegisterControllerAddress,
      content: COMPONENTS.RegisterControllerAddress,
      tagTheme: 'four',
      tagDisplay: 'txRegisterControllerAddress',
    },
    '/nova.icacontrol.v1.MsgRegisterControllerAddressResponse': {
      model: MODELS.MsgRegisterControllerAddressResponse,
      content: COMPONENTS.RegisterControllerAddressResponse,
      tagTheme: 'four',
      tagDisplay: 'txRegisterControllerAddressResponse',
    },
    '/nova.icacontrol.v1.MsgRegisterZone': {
      model: MODELS.MsgRegisterZone,
      content: COMPONENTS.RegisterZone,
      tagTheme: 'four',
      tagDisplay: 'txRegisterZone',
    },
    '/nova.icacontrol.v1.MsgRegisterZoneResponse': {
      model: MODELS.MsgRegisterZoneResponse,
      content: COMPONENTS.RegisterZoneResponse,
      tagTheme: 'four',
      tagDisplay: 'txRegisterZoneResponse',
    },
    '/nova.oracle.v1.MsgUpdateChainState': {
      model: MODELS.MsgUpdateChainState,
      content: COMPONENTS.UpdateChainState,
      tagTheme: 'four',
      tagDisplay: 'txUpdateChainState',
    },
    '/nova.oracle.v1.MsgRegisterOracleAddr': {
      model: MODELS.MsgRegisterOracleAddr,
      content: COMPONENTS.RegisterOracleAddress,
      tagTheme: 'four',
      tagDisplay: 'txRegisterOracleAddress',
    },
  };

  if (defaultTypeToModel[type]) return defaultTypeToModel[type];
  if (customTypeToModel[type]) return customTypeToModel[type];
  return null;
};

/**
 * Helper function that helps get model by type
 * @param type Model type
 */
export const getMessageModelByType = (type: string) => {
  const data = getDataByType(type);
  if (data) {
    return data.model;
  }

  return MODELS.MsgUnknown;
};

/**
 * Helper function to correctly display the correct UI
 * @param type Model type
 */
export const getMessageByType = (message: any, viewRaw: boolean, t:any) => {
  const { type } = message;
  let results: {
    content: any;
    tagDisplay: string;
    tagTheme?: TagTheme;
    unknown?: boolean;
  } = {
    content: COMPONENTS.Unknown,
    tagDisplay: 'txUnknownLabel',
    tagTheme: 'zero',
  };

  const data = getDataByType(type);

  if (data) {
    results = {
      content: data?.content,
      tagDisplay: data.tagDisplay,
      tagTheme: data.tagTheme,
    };
  }

  // If user asks to view the raw data
  if (viewRaw || !results.content) {
    results.content = COMPONENTS.Unknown;
  }

  return {
    type: <Tag
      value={t(`message_labels:${results.tagDisplay}`)}
      theme={results.tagTheme}
    />,
    message: <results.content message={message as any} />,
  };
};

export const convertMsgsToModels = (transaction: any) => {
  const messages = R.pathOr([], ['messages'], transaction).map((msg, i) => {
    const model = getMessageModelByType(msg?.['@type']);
    if (model === MODELS.MsgWithdrawDelegatorReward
      || model === MODELS.MsgWithdrawValidatorCommission) {
      const log = R.pathOr(null, ['logs', i], transaction);
      return model.fromJson(msg, log);
    }
    return model.fromJson(msg);
  });

  return messages;
};
