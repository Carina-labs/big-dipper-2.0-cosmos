import { MsgGalUndelegateResponse } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';

const GalUndelegateResponse = (props: {
  message: MsgGalUndelegateResponse;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txGalUndelegateResponse"
        values={{
          zoneId: message.zoneId,
          burnAsset: `${message.burnAsset.amount}${message.burnAsset.denom}`,
          undelegateAsset: `${message.undelegateAsset.amount}${message.undelegateAsset.denom}`,
        }}
      />
    </Typography>
  );
};

export default GalUndelegateResponse;
