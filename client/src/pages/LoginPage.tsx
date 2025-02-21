import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/ui/Button';
import bg_login from '../../public/images/bg_login.jpg';
import Input from '../components/ui/Input';

interface ValuesForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [valuesForm, setValuesForm] = useState<ValuesForm>({
    email: '',
    password: '',
  });

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValuesForm((prev: ValuesForm) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Wrapper>
      <FormWrapper>
        <h1>Login</h1>
        <Input placeholder="Nhập Email" onChange={handleChangeValue} />
        <Input placeholder="Nhập mật khẩu" disabled />
        <ButtonCustom>Login</ButtonCustom>
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
  background-image: url(${bg_login});
  background-repeat: no-repeat;
  background-size: cover;
`;

const FormWrapper = styled.div`
  h1 {
    margin-bottom: 1rem;
  }

  gap: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 40rem;
  padding: 3rem 4rem;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.body};
  border: 0.1rem solid ${({ theme }) => theme.mainbold};
`;

const ButtonCustom = styled(Button)`
  width: 100%;
  margin-top: 0.5rem;
`;
