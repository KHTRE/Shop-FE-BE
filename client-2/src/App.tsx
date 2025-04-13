import { css } from '@emotion/react';
import AppRouter from './router/AppRouter';

const styles = {
  root: css`
    min-height: 100vh;
    background-color: #c5c5c5;
  `,
};

export const App = () => {
  return (
    <div css={styles.root}>
      <AppRouter/>      
    </div>    
  )
}
