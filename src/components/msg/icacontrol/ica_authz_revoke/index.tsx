import { MsgIcaAuthzRevoke } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';
import { Name } from '@components';

const IcaAuthzRevoke = (props: {
  message: MsgIcaAuthzRevoke;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txIcaAuthzRevoke"
        components={[
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
          msgTypeUrl: message.msgTypeUrl,
        }}
      />
    </Typography>
  );
};

export default IcaAuthzRevoke;
