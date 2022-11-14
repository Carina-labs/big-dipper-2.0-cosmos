import { MsgGalUndelegate } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const GalUndelegate = (props: {
  message: MsgGalUndelegate;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txGalUndelegate"
        values={{
          zoneId: message.zoneId,
          version: message.version,
        }}
      />
    </Typography>
  );
};

export default GalUndelegate;
