import React from 'react';

import FormModal from '../FormModal/FormModal';

interface ILoginProps {
  isOpened: boolean,
  close: () => void,
}

const Login = ({ isOpened, close }: ILoginProps) => (
  <FormModal
    isOpened={isOpened}
    title="Log in"
    buttonText="Log in"
    description="No account? Create one"
    close={close}
  >
    <div>i</div>
  </FormModal>
);

export default Login;
