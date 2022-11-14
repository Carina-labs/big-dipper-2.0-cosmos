import { MsgDeleteRegisteredZone } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const DeleteRegisteredZone = (props: {
  message: MsgDeleteRegisteredZone;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txDeleteRegisteredZone"
        values={{
          zoneId: message.zoneId,
          controllerAddress: message.controllerAddress,
        }}
      />
    </Typography>
  );
};

export default DeleteRegisteredZone;
