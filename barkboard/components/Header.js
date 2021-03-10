import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  margin-bottom: 20px;
  h1 {
    font-weight: 100;
    cursor: pointer;
  }

  .right {
    opacity: 0;
  }
`;

const BackButton = styled.div`
  position: absolute;
  left: 20px;
  top: 30px;
  color: white;
`;

export default function Header({ ...props }) {
  const router = useRouter();

  const goBack = () => {
    const path = window.document.location.pathname.split("/");

    // remove last
    path.pop();

    const newPath = path.join("/");

    router.push("/");
  };

  const showBackButton = window.document.location.pathname !== "/";

  return (
    <>
      {showBackButton && (
        <BackButton className="left" onClick={goBack}>
          <KeyboardBackspaceIcon />
        </BackButton>
      )}
      <HeaderContainer>
        <Link href="/">
          <h1>
            <strong>Bark</strong>Board
          </h1>
        </Link>
      </HeaderContainer>
    </>
  );
}
