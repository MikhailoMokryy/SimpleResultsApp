import React from 'react';
import { Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import GameInfoPage from '../pages/GameInfoPage';
import HomePage from '../pages/HomePage';
import Page404 from '../pages/Page404';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <nav className={`${styles.navbar} navbar navbar-light bg-light`}>
        <div>
          <NavLink to='/' className={styles.navlink}>
            Home
          </NavLink>
          <NavLink to='/game/FK5TS3QAB' className={styles.navlink}>
            Current game
          </NavLink>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/game/:id' element={<GameInfoPage />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
