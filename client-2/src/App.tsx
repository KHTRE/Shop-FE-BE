import { css } from '@emotion/react';

const styles = {
  root: css`
    min-height: 100vh;
    background-color: #c5c5c5;
  `,
};

const App: React.FC = () => {


  return (
    <div css={styles.root}>
      <div>645</div>      
    </div>    
  )
}

export default App
