import { MsgClaimSnAsset } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';
import { Name } from '@components';

const ClaimSnAsset = (props: {
  message: MsgClaimSnAsset;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txGalClaimSnAsset"
        components={[(
          <Name
            name="claimer"
            address={message.claimer}
          />
        )]}
        values={{
          zoneId: message.zoneId,
        }}
      />
    </Typography>
  );
};

export default ClaimSnAsset;
