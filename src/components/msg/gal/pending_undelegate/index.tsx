import { MsgPendingUndelegate } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';
import { Name } from '@components';

const PendingUndelegate = (props: {
  message: MsgPendingUndelegate;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txGalPendingUndelegate"
        components={[
          (
            <Name
              name="delegator"
              address={message.delegator}
            />
          ),
          (
            <Name
              name="withdrawer"
              address={message.withdrawer}
            />
          ),
        ]}
        values={{
          zoneId: message.zoneId,
          amount: `${message.amount.amount}${message.amount.denom}`,
        }}
      />
    </Typography>
  );
};

export default PendingUndelegate;
