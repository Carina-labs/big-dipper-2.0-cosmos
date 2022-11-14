import { MsgIcaAutoStaking } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const IcaAutoStaking = (props: {
  message: MsgIcaAutoStaking;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txIcaAutoStaking"
        values={{
          zoneId: message.zoneId,
          controllerAddress: message.controllerAddress,
          amount: `${message.amount.amount}${message.amount.denom}`,
          version: message.version,
        }}
      />
    </Typography>
  );
};

export default IcaAutoStaking;
