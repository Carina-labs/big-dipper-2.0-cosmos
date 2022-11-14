import { MsgIcaDelegate } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const IcaDelegate = (props: {
  message: MsgIcaDelegate;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgIcaDelegate"
        values={{
          zoneId: message.zoneId,
          controllerAddress: message.controllerAddress,
          amount: `${message.amount.amount}${message.amount.denom}`,
        }}
      />
    </Typography>
  );
};

export default IcaDelegate;
