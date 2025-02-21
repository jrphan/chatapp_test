import styled from 'styled-components';
import ThemeToggleButton from '../components/common/ThemeToggleButton';

const HomePage = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Dark/Light Mode with Styled Components</h1>
      <ThemeToggleButton />
      <div>
        <Box>Phan Duy Tâm</Box>
      </div>
    </div>
  );
};

export default HomePage;

const Box = styled.div`
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.background};
  width: fit-content;
  margin-top: 1rem;
  border-radius: 0.4rem;
`;
