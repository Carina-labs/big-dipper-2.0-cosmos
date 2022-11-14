import { MsgGalDelegate } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const GalDelegate = (props: {
  message: MsgGalDelegate;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txGalDelegate"
        values={{
          zoneId: message.zoneId,
          version: message.version,
        }}
      />
    </Typography>
  );
};

export default GalDelegate;
