import { Container, Title, StyledImage } from './WelcomePage.styled';
import example from '../../assets/example.png';
import AuthNav from '../../components/AuthNav/AuthNav';

const WelcomePage = () => {
  return (
    <Container>
      <Title>Welcome to the app!</Title>
      <AuthNav />
      <StyledImage src={example} alt="Example" />
    </Container>
  );
};

export default WelcomePage;
