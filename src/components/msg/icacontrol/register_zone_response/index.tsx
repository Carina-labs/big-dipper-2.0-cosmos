import { MsgRegisterZoneResponse } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const RegisterZoneResponse = (props: {
  message: MsgRegisterZoneResponse;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgMsgRegisterZoneResponse"
        values={{
          zoneId: message.zoneId,
          icaConnectionId: message.icaConnectionInfo.connectionId,
          icaPortId: message.icaConnectionInfo.portId,
          icaController: message.icaAccount.controllerAddress,
          icaHost: message.icaAccount.hostAddress,
          validator: message.validatorAddress,
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

export default RegisterZoneResponse;
