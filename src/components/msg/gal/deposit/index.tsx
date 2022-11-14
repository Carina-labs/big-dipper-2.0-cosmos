import { MsgGalDeposit } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const GalDeposit = (props: {
  message: MsgGalDeposit;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txGalDeposit"
        values={{
          zoneId: message.zoneId,
          depositor: message.depositor,
          claimer: message.claimer,
          amount: message.amount,
        }}
      />
    </Typography>
  );
};

export default GalDeposit;
