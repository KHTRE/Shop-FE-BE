import { css } from '@emotion/react';
import AppRouter from './router/AppRouter';
import { NavBar } from './components/NavBar';
import { useContext } from 'react';
import { Context } from './store/ContextProvider';

const styles = {
  root: css`
    min-height: 100vh;
    background-color: #c5c5c5;
  `,
};

export const App = () => {
  const {appState} = useContext(Context)
  
  console.log(' user: ', appState.user);

  
  return (
    <div css={styles.root}>
      <NavBar/>
      <AppRouter/>      
    </div>    
  )
}
