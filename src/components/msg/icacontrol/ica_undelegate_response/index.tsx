import { MsgIcaUndelegateResponse } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const IcaUndelegateResponse = (props: {
  message: MsgIcaUndelegateResponse;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgIcaUndelegateResponse"
        values={{
          type: message.type,
        }}
      />
    </Typography>
  );
};

export default IcaUndelegateResponse;
