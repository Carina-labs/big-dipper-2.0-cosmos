import { MsgIcaUndelegate } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const IcaUndelegate = (props: {
  message: MsgIcaUndelegate;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgIcaUndelegate"
        values={{
          zoneId: message.zoneId,
          controller: message.controllerAddress,
        }}
      />
    </Typography>
  );
};

export default IcaUndelegate;
