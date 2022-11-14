import { MsgIcaWithdraw } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const IcaWithdraw = (props: {
  message: MsgIcaWithdraw;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txGalIcaWithdraw"
        values={{
          zoneId: message.zoneId,
          controllerAddress: message.controllerAddress,
          icaTransferPortId: message.icaTransferPortId,
          icaTransferChannelId: message.icaTransferChannelId,
          chainTime: message.chainTime,
          version: message.version,
        }}
      />
    </Typography>
  );
};

export default IcaWithdraw;
