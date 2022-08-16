import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import * as yup from 'yup';

import FormModal from '../FormModal/FormModal';
import ModalButton from '../ModalButton/ModalButton';
import { api } from '../../../../api';
import { API_ROUTES } from '../../../../api/routes';
import { setCookie } from '../../../../helpers/cookie';

import styles from './Login.module.scss';

interface ILoginProps {
  close: () => void,
  openSignUp: () => void,
}

const LoginSchema = yup.object().shape({
  email: yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: yup.string()
    .required('Required'),
});

const Login = ({ close, openSignUp }: ILoginProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
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
          const body = { email: values.email, password: values.password };
          setLoading(true);
          try {
            const response = await api.post(API_ROUTES.LOGIN, body);
            setCookie('token', response.data.token);
            setLoading(false);
            navigate('/admin');
          } catch (e: any) {
            setLoading(false);
            if (e.code === 'ERR_NETWORK') {
              setLoginError('Unhandled error. Try later');
            }
            setLoginError(e.response.data.message);
          }
        }}
        validationSchema={LoginSchema}
      >
        {({ errors }) => (
          <Form className="modal-form">
            {loginError && <div className="modal-form__error">{loginError}</div>}
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
            <ModalButton loading={loading}>
              Log in
            </ModalButton>
          </Form>
        )}
      </Formik>
    </FormModal>
  );
};

export default Login;
