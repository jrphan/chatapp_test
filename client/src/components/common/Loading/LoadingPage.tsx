import styled, { keyframes } from 'styled-components';

const LoadingPage = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
};

export default LoadingPage;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  min-width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #00000080;
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid ${({ theme }) => theme.main};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;
