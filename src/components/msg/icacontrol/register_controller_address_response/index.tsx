import { MsgRegisterControllerAddressResponse } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const RegisterControllerAddressResponse = (props: {
  message: MsgRegisterControllerAddressResponse;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgRegisterControllerAddressResponse"
        values={{
          type: message.type,
        }}
      />
    </Typography>
  );
};

export default RegisterControllerAddressResponse;
