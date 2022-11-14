import { MsgDeleteRegisteredZoneResponse } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const DeleteRegisteredZoneResponse = (props: {
  message: MsgDeleteRegisteredZoneResponse;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txDeleteRegisteredZoneResponse"
        values={{
          type: message.type,
        }}
      />
    </Typography>
  );
};

export default DeleteRegisteredZoneResponse;
