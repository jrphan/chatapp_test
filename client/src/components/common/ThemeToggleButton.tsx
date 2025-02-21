import Button from '../ui/Button';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggleButton = () => {
  const { themeCurrent, toggleTheme } = useTheme();

  return (
    <Wrapper>
      <Button onClick={toggleTheme}>{themeCurrent}</Button>
      <Button loading>Đang tải</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="outline" loading>
        Outline
      </Button>
    </Wrapper>
  );
};

export default ThemeToggleButton;

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
