import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../router/routes";

const styles = {
  root: css`
    height: 100px;
    background-color: pink;
    display: flex;
    justify-items: center;
    align-items: center;
  `,
};

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div css={styles.root}>
      <button onClick={() => navigate(ROUTES.Login)}>
        LogIn
      </button>
    </div>
  );
};