import { MsgIcaDelegateResponse } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const IcaDelegateResponse = (props: {
  message: MsgIcaDelegateResponse;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgIcaDelegateResponse"
        values={{
          type: message.type,
        }}
      />
    </Typography>
  );
};

export default IcaDelegateResponse;
