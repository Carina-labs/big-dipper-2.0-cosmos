import { MsgIcaAuthzGrant } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';
import { Name } from '@components';

const IcaAuthzGrant = (props: {
  message: MsgIcaAuthzGrant;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txIcaAuthzGrant"
        components={[
          (
            <Name
              name="granter"
              address={message.grant.granter}
            />
          ),
          (
            <Name
              name="grantee"
              address={message.grantee}
            />
          ),
        ]}
        values={{
          zoneId: message.zoneId,
          controllerAddress: message.controllerAddress,
        }}
      />
    </Typography>
  );
};

export default IcaAuthzGrant;
