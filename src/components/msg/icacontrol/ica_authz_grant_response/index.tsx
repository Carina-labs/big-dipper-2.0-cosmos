import { MsgIcaAuthzGrantResponse } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const IcaAuthzGrantResponse = (props: {
  message: MsgIcaAuthzGrantResponse;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txIcaAuthzGrantResponse"
        values={{
          type: message.type,
        }}
      />
    </Typography>
  );
};

export default IcaAuthzGrantResponse;
