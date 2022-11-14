import { MsgRegisterOracleAddr } from '@models';
import { Typography } from '@material-ui/core';
import Trans from 'next-translate/Trans';
import { Name } from '@components';

const RegisterOracleAddress = (props: {
  message: MsgRegisterOracleAddr;
}) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txReigsterOracleAddress"
        components={[
          (
            <Name
              name="oracleAddress"
              address={message.oracleAddress}
            />
          ),
          (
            <Name
              name="fromAddress"
              address={message.fromAddress}
            />
          ),
        ]}
        values={{
          zoneId: message.zoneId,
        }}
      />
    </Typography>
  );
};

export default RegisterOracleAddress;
