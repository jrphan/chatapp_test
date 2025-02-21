import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import bg_login from '../../public/images/bg_login.jpg';

interface ValuesForm {
  email: string;
}

interface FormErrors {
  email?: string;
}

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const LoginPage = () => {
  const [valuesForm, setValuesForm] = useState<ValuesForm>({ email: '' });
  const [errors, setErrors] = useState<FormErrors>({});

  const getValidationErrors = (values: ValuesForm): FormErrors => {
    const validationErrors: FormErrors = {};
    if (!values.email) {
      validationErrors.email = 'Email không được để trống.';
    } else if (!emailRegex.test(values.email)) {
      validationErrors.email = 'Email không hợp lệ.';
    }
    return validationErrors;
  };

  const handleChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValuesForm((prevValues) => ({ ...prevValues, [name]: value }));

      setErrors(getValidationErrors({ ...valuesForm, [name]: value }));
    },
    [valuesForm],
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = getValidationErrors(valuesForm);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Data:', valuesForm);
      alert('Đăng nhập thành công!');
      setValuesForm({ email: '' });
    }
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Input
          placeholder="Nhập Email"
          type="email"
          name="email"
          value={valuesForm.email}
          onChange={handleChangeValue}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <ButtonCustom type="submit">Login</ButtonCustom>
      </FormWrapper>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url(${bg_login}) no-repeat center/cover;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 40rem;
  padding: 3rem 4rem;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.body};
  border: 0.1rem solid ${({ theme }) => theme.mainbold};

  h1 {
    margin-bottom: 1rem;
  }
`;

const ButtonCustom = styled(Button)`
  width: 100%;
  margin-top: 0.5rem;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.4rem;
`;
