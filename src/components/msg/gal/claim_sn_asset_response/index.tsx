import { MsgClaimSnAssetResponse } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';
import { Name } from '@components';

const ClaimSnAssetResponse = (props: {
  message: MsgClaimSnAssetResponse;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txGalClaimSnAssetResponse"
        components={[(
          <Name
            name="claimer"
            address={message.claimer}
          />
        )]}
        values={{
          minted: `${message.minted.amount}${message.minted.denom}`,
        }}
      />
    </Typography>
  );
};

export default ClaimSnAssetResponse;
