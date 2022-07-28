import React from 'react';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import * as yup from 'yup';

import FormModal from '../FormModal/FormModal';
import ModalButton from '../ModalButton/ModalButton';

import styles from './SignUp.module.scss';

interface ISignUpProps {
  close: () => void,
  openLogin: () => void,
}

const SignUpSchema = yup.object().shape({
  email: yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: yup.string()
    .min(5, 'Must be longer than 4 characters')
    .required('Required'),
});

const SignUp = ({ close, openLogin }: ISignUpProps) => {
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
        validationSchema={SignUpSchema}
      >
        {({ errors }) => (
          <Form className="modal-form">
            <label htmlFor="email">
              Email
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Enter a email"
                className={`${errors.email && 'modal-form__input_error'} modal-form__input`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="modal-form__error"
              />
            </label>
            <label htmlFor="password">
              Password
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Enter a password"
                className={`${errors.password && 'modal-form__input_error'} modal-form__input`}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="modal-form__error"
              />
            </label>
            <ModalButton>
              Log in
            </ModalButton>
          </Form>
        )}
      </Formik>
    </FormModal>
  );
};

export default SignUp;
