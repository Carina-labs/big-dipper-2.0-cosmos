import { MsgGalDelegateResponse } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const GalDelegateResponse = (props: {
  message: MsgGalDelegateResponse;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txGalDelegateResponse"
        values={{
          type: message.type,
        }}
      />
    </Typography>
  );
};

export default GalDelegateResponse;
