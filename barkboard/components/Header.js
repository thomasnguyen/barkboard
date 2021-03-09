import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  margin-bottom: 20px;
  h1 {
    font-weight: 100;
  }
`;

export default function Header({ ...props }) {
  return (
    <>
      <HeaderContainer>
        <h1>
          <strong>Bark</strong>Board
        </h1>
      </HeaderContainer>
    </>
  );
}
