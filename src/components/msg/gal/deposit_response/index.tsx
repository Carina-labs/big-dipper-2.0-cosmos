import { MsgGalDepositResponse } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';
import { Name } from '@components';

const GalDepositResponse = (props: {
  message: MsgGalDepositResponse;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txGalDepositResponse"
        components={[
          (
            <Name
              name="receiver"
              address={message.receiver}
            />
          ),
          (
            <Name
              name="depositor"
              address={message.depositor}
            />
          ),
        ]}
        values={{
          depositedAmount: `${message.depositedAmount.amount}${message.depositedAmount.denom}`,
        }}
      />
    </Typography>
  );
};

export default GalDepositResponse;
