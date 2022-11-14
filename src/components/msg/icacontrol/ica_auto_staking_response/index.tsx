import { MsgIcaAutoStakingResponse } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const IcaAutoStakingResponse = (props: {
  message: MsgIcaAutoStakingResponse;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txIcaAutoStakingResponse"
        values={{
          type: message.type,
        }}
      />
    </Typography>
  );
};

export default IcaAutoStakingResponse;
