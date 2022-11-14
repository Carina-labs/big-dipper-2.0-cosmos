import { MsgIcaAuthzRevokeResponse } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const IcaAuthzRevokeResponse = (props: {
  message: MsgIcaAuthzRevokeResponse;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txIcaAuthzRevokeResponse"
        values={{
          type: message.type,
        }}
      />
    </Typography>
  );
};

export default IcaAuthzRevokeResponse;
