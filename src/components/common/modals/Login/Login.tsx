import React from 'react';
import { Field, Form, Formik } from 'formik';

import FormModal from '../FormModal/FormModal';
import ModalButton from '../ModalButton/ModalButton';

import styles from './Login.module.scss';

interface ILoginProps {
  isOpened: boolean,
  close: () => void,
  openSignUp: () => void,
}

const Login = ({ isOpened, close, openSignUp }: ILoginProps) => {
  const openAnotherModal = () => {
    close();
    openSignUp();
  };
  const openAnotherModalByKey = (e: any) => {
    if (e.code === 'Enter') {
      close();
      openSignUp();
    }
  };
  return (
    <FormModal
      isOpened={isOpened}
      title="Log in"
      description={(
        <>
          No account?&nbsp;
          <span
            className={styles.signUp}
            onClick={openAnotherModal}
            onKeyDown={openAnotherModalByKey}
            tabIndex={0}
            role="button"
          >
            Create one
          </span>
        </>
      )}
      close={close}
    >
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values) => {
          await new Promise((resolve) => {
            setTimeout(resolve, 500);
          });
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="modal-form">
          <label htmlFor="email">
            Email
            <Field id="email" name="email" type="email" placeholder="Enter a email" />
          </label>
          <label htmlFor="password">
            Password
            <Field id="password" name="password" type="password" placeholder="Enter a password" />
          </label>
          <ModalButton>
            Log in
          </ModalButton>
        </Form>
      </Formik>
    </FormModal>
  );
};

export default Login;
