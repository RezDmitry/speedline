import React from 'react';
import { Field, Form, Formik } from 'formik';

import FormModal from '../FormModal/FormModal';
import ModalButton from '../ModalButton/ModalButton';

import styles from './SignUp.module.scss';

interface ISignUpProps {
  isOpened: boolean,
  close: () => void,
  openLogin: () => void,
}

const SignUp = ({ isOpened, close, openLogin }: ISignUpProps) => {
  const openAnotherModal = () => {
    close();
    openLogin();
  };
  const openAnotherModalByKey = (e: any) => {
    if (e.code === 'Enter') {
      close();
      openLogin();
    }
  };
  return (
    <FormModal
      isOpened={isOpened}
      title="Sign up"
      description={(
        <>
          Already have an account?&nbsp;
          <span
            className={styles.signUp}
            onClick={openAnotherModal}
            onKeyDown={openAnotherModalByKey}
            tabIndex={0}
            role="button"
          >
            Log in
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

export default SignUp;
