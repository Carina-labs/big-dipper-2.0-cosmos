import { MsgPendingUndelegateResponse } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';
import { Name } from '@components';

const PendingUndelegateResponse = (props: {
  message: MsgPendingUndelegateResponse;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txGalPendingUndelegateResponse"
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
          burnAsset: `${message.burnAsset.amount}${message.burnAsset.denom}`,
          undelegateAsset: `${message.undelegateAsset.amount}${message.undelegateAsset.denom}`,
        }}
      />
    </Typography>
  );
};

export default PendingUndelegateResponse;
