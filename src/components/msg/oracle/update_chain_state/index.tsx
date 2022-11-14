import { MsgUpdateChainState } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const UpdateChainState = (props: {
  message: MsgUpdateChainState;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txUpdateChainState"
        values={{
          coin: `${message.coin.amount}${message.coin.denom}`,
          operator: message.operator,
          blockHeight: message.blockHeight,
          appHash: message.appHash,
          zoneId: message.zoneId,
        }}
      />
    </Typography>
  );
};

export default UpdateChainState;
