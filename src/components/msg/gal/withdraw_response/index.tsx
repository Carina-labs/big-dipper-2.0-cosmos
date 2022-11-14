import { MsgWithdrawResponse } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';
import { Name } from '@components';

const GalWithdrawResponse = (props: {
  message: MsgWithdrawResponse;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txGalWithdrawResponse"
        components={[
          (
            <Name
              name="withdrawer"
              address={message.withdrawer}
            />
          ),
        ]}
        values={{
          withdrawAmount: `${message.withdrawAmount.amount}${message.withdrawAmount.denom}`,
        }}
      />
    </Typography>
  );
};

export default GalWithdrawResponse;
