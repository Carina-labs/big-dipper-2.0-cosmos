import { MsgIcaWithdrawResponse } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const IcaWithdrawResponse = (props: {
  message: MsgIcaWithdrawResponse;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txGalIcaWithdrawResponse"
        values={{
          type: message.type,
        }}
      />
    </Typography>
  );
};

export default IcaWithdrawResponse;
