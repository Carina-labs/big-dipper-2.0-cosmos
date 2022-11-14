import { MsgIcaTransferResponse } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const IcaTransferResponse = (props: {
  message: MsgIcaTransferResponse;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgIcaTransferResponse"
        values={{
          type: message.type,
        }}
      />
    </Typography>
  );
};

export default IcaTransferResponse;
