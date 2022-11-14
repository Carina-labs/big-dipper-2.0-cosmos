import { MsgRegisterZone } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const RegisterZone = (props: {
  message: MsgRegisterZone;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgRegisterZone"
        values={{
          zoneId: message.zoneId,
          icaConnectionId: message.icaConnectionInfo.connectionId,
          icaPortId: message.icaConnectionInfo.portId,
          icaController: message.icaAccount.controllerAddress,
          icaHost: message.icaAccount.hostAddress,
          validator: message.validatorAddress,
          baseDenom: message.baseDenom,
          decimal: message.decimal,
          undelegateMaxEntries: message.undelegateMaxEntries,
          depositMaxEntries: message.depositMaxEntries,
        }}
      />
    </Typography>
  );
};

export default RegisterZone;
