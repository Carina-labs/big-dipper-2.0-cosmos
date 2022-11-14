import { MsgChangeRegisteredZoneResponse } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const ChangeRegisteredZoneResponse = (props: {
  message: MsgChangeRegisteredZoneResponse;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txChangeRegisteredZoneResponse"
        values={{
          zoneId: message.zoneId,
          icaConnectionInfo_connectionId: message.icaConnectionInfo.connectionId,
          icaConnectionInfo_portId: message.icaConnectionInfo.portId,
          icaAccount_controllerAddress: message.icaAccount.controllerAddress,
          icaAccount_hostAddress: message.icaAccount.hostAddress,
          validatorAddress: message.validatorAddress,
          baseDenom: message.baseDenom,
          snDenom: message.snDenom,
          decimal: message.decimal,
          undelegateMaxEntries: message.undelegateMaxEntries,
          depositMaxEntries: message.depositMaxEntries,
        }}
      />
    </Typography>
  );
};

export default ChangeRegisteredZoneResponse;
