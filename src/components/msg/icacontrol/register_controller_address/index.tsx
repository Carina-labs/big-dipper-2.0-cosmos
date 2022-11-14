import { MsgRegisterControllerAddress } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';
import { Name } from '@components';

const RegisterControllerAddress = (props: {
  message: MsgRegisterControllerAddress;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgRegisterControllerAddress"
        components={[
          (
            <Name address={message.fromAddress} name="from" />
          ),
        ]}
        values={{
          zoneId: message.zoneId,
          controller: message.controllerAddress,
        }}
      />
    </Typography>
  );
};

export default RegisterControllerAddress;
