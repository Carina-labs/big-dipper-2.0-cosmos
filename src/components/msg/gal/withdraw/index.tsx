import { MsgWithdraw } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const GalWithdraw = (props: {
  message: MsgWithdraw;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txGalWithdraw"
        values={{
          zoneId: message.zoneId,
          withdrawer: message.withdrawer,
        }}
      />
    </Typography>
  );
};

export default GalWithdraw;
