import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useInput } from '../../hooks/useInput';
import { signupUser } from '../../services/authApi';

const SignupForm = () => {
  const TextInput = useInput();

  return (
    <Formik
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
        password: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Password is required'),
        passwordConfirm: Yup.string().oneOf(
          [Yup.ref('password'), null],
          'Passwords must match'
        ),
      })}
      onSubmit={async (values) => {
        await signupUser(values);
      }}
    >
      <Form>
        <TextInput
          label="firstName"
          name="firstName"
          type="text"
          placeholder="Jane"
        />
        <TextInput
          label="lastName"
          name="lastName"
          type="text"
          placeholder="Doe"
        />
        <TextInput
          label="email"
          name="email"
          type="email"
          placeholder="jane@doe.com"
        />
        <TextInput label="password" name="password" type="password" />
        <TextInput
          label="passwordConfirm"
          name="passwordConfirm"
          type="password"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default SignupForm;