import { MsgIcaTransfer } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';
import { Name } from '@components';

const IcaTransfer = (props: {
  message: MsgIcaTransfer;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgIcaTransfer"
        components={[
          (
            <Name
              name="receiver"
              address={message.receiverAddress}
            />
          ),
        ]}
        values={{
          zoneId: message.zoneId,
          controller: message.controllerAddress,
          icaChannelId: message.icaTransferChannelId,
          icaTransferPort: message.icaTransferPort,
          amount: `${message.amount.amount}${message.amount.denom}`,
        }}
      />
    </Typography>
  );
};

export default IcaTransfer;
