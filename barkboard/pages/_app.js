import Header from "../components/Header";
import "../styles/globals.css";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  max-width: 600px;
`;

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
